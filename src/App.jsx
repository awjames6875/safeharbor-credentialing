import { useState, useEffect } from "react";
import { auth, provider, db } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const phases = [
  {
    id: 1, name: "Phase 1", label: "Provider NPIs (Type 1)", icon: "🪪",
    color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE",
    steps: [
      { id: "1a", label: "Clinician 1 — Get Type 1 NPI", note: "nppes.cms.hhs.gov", status: "not_started", time: "~20 minutes per clinician", warning: "⚠️ The name entered MUST exactly match their state license. Even a middle name difference causes problems.", instructions: ["Go to https://nppes.cms.hhs.gov","Click the blue 'Log In / Create Account' button","Click 'Create an Account' — use the clinician's personal email","Verify email, then log back in","Click 'Add New NPI' → Select 'Individual' (Type 1)","Enter: Legal name (must match state license EXACTLY), SSN, DOB, Tulsa address","Select Taxonomy Code — match to their license (LPC: 101YM0800X, LCSW: 1041C0700X)","Submit. Write down the NPI number immediately and SAVE IT!"], docs: ["State license (copy the exact legal name)","Social Security Number","Date of birth","Practice address in Tulsa"] },
      { id: "1b", label: "Clinician 2 — Get Type 1 NPI", note: "nppes.cms.hhs.gov", status: "not_started", time: "~20 minutes", warning: "⚠️ Each clinician needs their OWN separate account. Do NOT share logins.", instructions: ["Go to https://nppes.cms.hhs.gov","Click 'Create an Account' — use Clinician 2's personal email (different account!)","Verify email, then log back in","Click 'Add New NPI' → Select 'Individual' (Type 1)","Enter: Legal name, SSN, DOB, Tulsa address","Select Taxonomy Code matching their specific license type","Submit. Write down the NPI number immediately and SAVE IT!"], docs: ["State license (copy exact legal name)","Social Security Number","Date of birth","Practice address in Tulsa"] },
    ],
  },
  {
    id: 2, name: "Phase 2", label: "CAQH ProView Setup", icon: "📋",
    color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE",
    steps: [
      { id: "2a", label: "Clinician 1 — CAQH Registration", note: "proview.caqh.org", status: "not_started", time: "~2 hours", warning: "⚠️ If you update ANYTHING later, you MUST re-attest or payers won't see the changes!", instructions: ["Go to https://proview.caqh.org and click 'Register'","Enter: Provider type, name, state (Oklahoma), Type 1 NPI, email, DOB","Check email — CAQH sends a Provider ID number. SAVE THIS NUMBER!","Log back in and complete all 11 profile sections","Personal Info: name must match NPI registry exactly","Professional IDs: enter license number and expiration date","Work History: must cover last 5 years. No gaps over 6 months!","Professional Liability: enter Safe Harbor's malpractice policy info","Practice Locations: enter Safe Harbor's Tulsa address","Upload documents: license, malpractice certificate, CV","Click 'Authorize' tab → check ALL payers: BCBS, Aetna, UHC, Cigna, Humana","Click 'Attest' — this makes your profile visible to payers. DO NOT SKIP THIS!"], docs: ["Type 1 NPI number","State license (number + expiration)","Malpractice insurance certificate","CV with month/year work history (5 years)","Safe Harbor EIN","Safe Harbor Tulsa address"] },
      { id: "2b", label: "Clinician 2 — CAQH Registration", note: "proview.caqh.org", status: "not_started", time: "~2 hours", warning: "⚠️ Set a phone calendar reminder every 90 days to re-attest BOTH clinicians. Stale = Frozen!", instructions: ["Repeat same process as Clinician 1 — separate account, separate email","Go to https://proview.caqh.org and click 'Register'","Complete all 11 sections with Clinician 2's info","Authorize ALL same payers as Clinician 1","Click Attest when all sections are complete"], docs: ["Same documents as Clinician 1 — but Clinician 2's versions"] },
      { id: "2c", label: "Authorize all target payers in CAQH", note: "Inside CAQH portal — Authorize tab", status: "not_started", time: "~10 minutes per clinician", warning: "⚠️ If a payer is NOT authorized, they CANNOT see the profile — even if it's 100% complete!", instructions: ["Log into proview.caqh.org for each clinician","Click the 'Authorize' tab at the top of the screen","Find and CHECK each payer: BCBS Oklahoma, Aetna, UnitedHealthcare, Cigna, Humana","Save. Payers can now pull the profile."], docs: [] },
    ],
  },
  {
    id: 3, name: "Phase 3", label: "SoonerSelect MCOs", icon: "🏥",
    color: "#059669", bg: "#ECFDF5", border: "#A7F3D0",
    steps: [
      { id: "3a", label: "Confirm OHCA Group Enrollment", note: "Call: 800-522-0114 (Option 1)", status: "not_started", time: "~30 minutes", warning: "⚠️ Verify the address matches exactly what you use everywhere else. One mismatch causes claim denials.", instructions: ["Call OHCA Provider Helpline: 800-522-0114 (Option 1)","Say: 'Hi, my name is Adam James, owner of Safe Harbor Behavioral Health in Tulsa. Our Type 2 NPI is [YOUR NPI] and Tax ID is [YOUR EIN]. I want to verify our group enrollment is active for behavioral health services.'","Ask: Is our address correct? Are behavioral health services listed? Is our EIN correct?","Ask: Are we enrolled for the SoonerSelect managed care plans?","Write down the rep's name and a confirmation number!"], docs: ["Safe Harbor Type 2 NPI","EIN/Tax ID","Tulsa office address"] },
      { id: "3b", label: "Aetna Better Health of Oklahoma", note: "availity.com + call 844-365-4385", status: "not_started", time: "45-90 min to submit. Then 45 calendar days.", warning: "⚠️ Both clinicians must have completed CAQH BEFORE submitting. Aetna pulls directly from CAQH.", instructions: ["Go to https://www.availity.com and create or log in to your account","Select 'Payer Spaces' → Find 'Aetna Better Health of Oklahoma'","Find 'Provider Enrollment' or 'Request for Participation'","Complete the GROUP application for Safe Harbor (Type 2 NPI + EIN)","Submit a provider roster: both clinicians — Name, Type 1 NPI, License #, CAQH ID","Call if needed: 844-365-4385","Save your confirmation/reference number!"], docs: ["Safe Harbor Type 2 NPI + EIN","Both clinicians: Type 1 NPI, license, CAQH ID","Malpractice insurance certificate","W-9"] },
      { id: "3c", label: "Humana Healthy Horizons", note: "Call: 1-855-223-9868", status: "not_started", time: "Call: 30-45 min. Processing: 45-90 days.", warning: "⚠️ Get a reference number on every call. Never assume it was logged without one.", instructions: ["Go to https://provider.humana.com/medicaid/oklahoma-medicaid","Find 'Join our Network' or call 1-855-223-9868","Say: 'Hi, my name is Adam James. I own Safe Harbor Behavioral Health in Tulsa. We serve children with behavioral health needs. Our Type 2 NPI is [NPI] and Tax ID is [EIN]. I want to request network participation for our group and two clinicians. What is the exact process?'","Ask for: enrollment form/link, provider roster template, and expected timeline","Submit group contract request + roster for both clinicians","Get rep's name and reference number!"], docs: ["Safe Harbor Type 2 NPI + EIN","Both clinicians: Type 1 NPI, license, CAQH ID","W-9"] },
      { id: "3d", label: "Oklahoma Complete Health", note: "oklahomacompletehealth.com · 833-752-1664", status: "not_started", time: "45 days from complete application.", warning: "⚠️ Incomplete applications get REJECTED. Double-check all documents before submitting.", instructions: ["Go to https://www.oklahomacompletehealth.com","Navigate to 'For Providers' section","Find 'Join Our Network' or 'Provider Enrollment'","Submit group application for Safe Harbor as a behavioral health facility","Attach provider roster: both clinicians with Type 1 NPI, license, CAQH ID","Call if needed: 833-752-1664","Note: They make credentialing decisions within 45 calendar days of a complete application"], docs: ["Group application (Safe Harbor)","Provider roster (both clinicians)","Type 1 NPIs, licenses, CAQH IDs","Malpractice certificate","W-9"] },
    ],
  },
  {
    id: 4, name: "Phase 4", label: "Commercial Payers", icon: "💼",
    color: "#D97706", bg: "#FFFBEB", border: "#FDE68A",
    steps: [
      { id: "4a", label: "BCBS of Oklahoma (BCBSOK)", note: "bcbsok.com — Group onboarding first", status: "not_started", time: "90-120 days processing.", warning: "⚠️ BCBSOK requires clinicians to be registered in CAQH ProView AND authorize BCBSOK access BEFORE submitting.", instructions: ["Go to https://www.bcbsok.com/provider","Find 'Join Our Network' or 'Provider Onboarding'","Select 'Group/Clinic Provider Onboarding' (NOT solo practitioner)","Complete the Provider Onboarding Form for Safe Harbor","Attach all required documents (see list below)","After group is approved, submit 'Add Provider' forms for each clinician","For EFT/ERA: Go to https://www.availity.com → Transaction Enrollment → enroll for EFT + 835 ERA"], docs: ["Oklahoma state license (current)","Malpractice insurance certificate","Ownership/control disclosure form","W-9","Safe Harbor Type 2 NPI","Both clinicians: Type 1 NPI + CAQH ID"] },
      { id: "4b", label: "UnitedHealthcare / Optum", note: "uhcprovider.com", status: "not_started", time: "90-120 days processing.", warning: "⚠️ UHC panels can close in saturated areas. Apply early — getting in the queue matters a lot.", instructions: ["Go to https://www.uhcprovider.com","Click 'Join Our Network'","Select behavioral health / mental health as your specialty","Complete group enrollment application for Safe Harbor","Once group is submitted, submit 'Add Provider to Group' for each clinician using their CAQH ID","UHC relies heavily on CAQH — make sure profiles are current and attested!"], docs: ["Safe Harbor Type 2 NPI + EIN","W-9","Both clinicians' CAQH IDs + Type 1 NPIs"] },
      { id: "4c", label: "Aetna Commercial", note: "availity.com — separate from Medicaid Aetna", status: "not_started", time: "90-120 days processing.", warning: "⚠️ This is SEPARATE from Aetna Better Health Medicaid. Two different applications are required.", instructions: ["Go to https://www.availity.com and log in","Navigate to Payer Spaces → Aetna (commercial, not Aetna Better Health)","Find 'Request for Participation' for commercial/employer plans","Complete group application for Safe Harbor","Load both clinicians using their Type 1 NPIs + CAQH profiles"], docs: ["Safe Harbor Type 2 NPI + EIN","W-9","Both clinicians' CAQH IDs + Type 1 NPIs","Malpractice certificate"] },
      { id: "4d", label: "Cigna / Evernorth", note: "cignaforhcp.cigna.com", status: "not_started", time: "90-120 days processing.", warning: "⚠️ Cigna may request additional clinical info for behavioral health. Respond within 30 days or you restart from scratch.", instructions: ["Go to https://cignaforhcp.cigna.com","Click 'Join Our Network' or 'Provider Contracting'","Complete group participation request for Safe Harbor","Submit provider roster for both clinicians","Make sure both clinicians have authorized Cigna inside their CAQH profile"], docs: ["Safe Harbor Type 2 NPI + EIN","W-9","Both clinicians' CAQH IDs + Type 1 NPIs"] },
    ],
  },
  {
    id: 5, name: "Phase 5", label: "Go-Live & Billing Setup", icon: "🚀",
    color: "#DC2626", bg: "#FEF2F2", border: "#FECACA",
    steps: [
      { id: "5a", label: "Review all payer fee schedules", note: "Request from each payer when contract arrives", status: "not_started", time: "1-2 hours per payer contract", warning: "⚠️ Never sign a contract without reviewing the fee schedule first. You can negotiate!", instructions: ["When each payer sends a contract, find the fee schedule (rate sheet)","Key billing codes for children's behavioral health: 90837 (60-min therapy), 90834 (45-min), 90847 (family therapy), 90791 (initial assessment)","Compare rates to Oklahoma Medicaid rates as your minimum baseline","Flag any rate below 80% of Medicare — consider negotiating before signing","You CAN negotiate rates before signing a contract. Ask for a higher rate!","Once you sign, rates are locked in until renewal."], docs: ["Payer contract","Fee schedule","Oklahoma Medicaid rate sheet for comparison"] },
      { id: "5b", label: "TherapyNotes billing configuration", note: "blog.therapynotes.com for setup guides", status: "not_started", time: "2-3 hours total setup", warning: "⚠️ CRITICAL BILLING RULE: Type 2 NPI = Billing Provider. Type 1 NPI = Rendering Provider. Reversed = immediate claim denial.", instructions: ["Log into TherapyNotes admin/practice settings","Practice Settings: Enter Safe Harbor's Type 2 NPI as the BILLING provider NPI","Enter Safe Harbor's EIN as the billing Tax ID","For each clinician: Set their Type 1 NPI as the RENDERING provider NPI","Add each payer to TherapyNotes with the correct Payer ID number (from each contract)","Submit a test claim before seeing high patient volumes!"], docs: ["Safe Harbor Type 2 NPI","Safe Harbor EIN","Each clinician's Type 1 NPI","Payer ID numbers from each insurance contract"] },
      { id: "5c", label: "EFT/ERA setup (all payers)", note: "Availity for BCBSOK. Each payer has own process.", status: "not_started", time: "30-60 minutes per payer", warning: "⚠️ Without EFT setup, payers mail paper checks — delays your cash flow by weeks.", instructions: ["EFT = Electronic Funds Transfer (how you get PAID directly to your bank account)","ERA = Electronic Remittance Advice (the digital explanation of each payment)","For BCBSOK: Log into Availity → Transaction Enrollment → Enroll for EFT + 835 ERA","For other payers: Look for 'EFT Enrollment' on each payer's provider portal","You will need: Safe Harbor legal name, EIN, Type 2 NPI, bank account + routing number","Confirm bank deposits arrive before scheduling large patient volumes"], docs: ["Voided check or bank letter","Safe Harbor legal name + EIN + Type 2 NPI","Availity account login"] },
      { id: "5d", label: "Verify enrollment + run test claims", note: "Call each payer's provider relations line", status: "not_started", time: "1-2 weeks to confirm payment", warning: "⚠️ Never assume you're live. Always verify with a real test claim first.", instructions: ["For EACH payer, call Provider Relations and say: 'Can you confirm Safe Harbor Behavioral Health is active as a billing provider and that both our clinicians are loaded as in-network rendering providers under our group?'","Log into TherapyNotes and submit a real claim for a real patient session","Wait for the EOB or ERA to come back","If it pays correctly — you are LIVE with that payer! 🎉","If it denies — call the payer with the denial code and fix before scaling up"], docs: ["Provider relations phone numbers for each payer","TherapyNotes login","Patient consent on file"] },
    ],
  },
];

const STATUS_CONFIG = {
  not_started: { label: "Not Started", emoji: "⬜", bg: "#F3F4F6", text: "#6B7280", border: "#E5E7EB" },
  in_progress:  { label: "In Progress", emoji: "🔄", bg: "#DBEAFE", text: "#1D4ED8", border: "#93C5FD" },
  waiting:      { label: "Waiting on Payer", emoji: "⏳", bg: "#FEF3C7", text: "#92400E", border: "#FCD34D" },
  complete:     { label: "Complete", emoji: "✅", bg: "#D1FAE5", text: "#065F46", border: "#6EE7B7" },
  issue:        { label: "Issue", emoji: "❌", bg: "#FEE2E2", text: "#991B1B", border: "#FCA5A5" },
};
const statusCycle = ["not_started", "in_progress", "waiting", "complete", "issue"];

function buildData(savedStatuses = {}) {
  return phases.map(p => ({ ...p, steps: p.steps.map(s => ({ ...s, status: savedStatuses[s.id] ?? s.status })) }));
}
function getProgress(steps) { return Math.round((steps.filter(s => s.status === "complete").length / steps.length) * 100); }
function getOverall(allPhases) {
  const all = allPhases.flatMap(p => p.steps);
  const done = all.filter(s => s.status === "complete").length;
  return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
}

function LoginScreen({ onLogin, loading }) {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #0A1628 0%, #0F2547 40%, #0A1628 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: "48px 40px", textAlign: "center", maxWidth: 400, width: "100%" }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>⚓</div>
        <h1 style={{ color: "#F1F5F9", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Safe Harbor</h1>
        <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 6px" }}>Credentialing Command Center</p>
        <p style={{ color: "#475569", fontSize: 12, margin: "0 0 40px" }}>Children's Behavioral Health · Tulsa, OK</p>
        <button onClick={onLogin} disabled={loading}
          style={{ width: "100%", padding: "14px 24px", background: loading ? "#1E293B" : "#fff", color: "#1E293B", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, transition: "0.2s" }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width={20} height={20} alt="G" />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
        <p style={{ color: "#334155", fontSize: 11, marginTop: 20 }}>✓ Progress syncs across phone &amp; laptop</p>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [data, setData] = useState(() => buildData());
  const [notes, setNotes] = useState({});
  const [expandedPhase, setExpandedPhase] = useState(1);
  const [expandedStep, setExpandedStep] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [syncStatus, setSyncStatus] = useState("idle");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setAuthLoading(false); });
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    const unsub = onSnapshot(ref, snap => {
      if (snap.exists()) {
        const d = snap.data();
        setData(buildData(d.statuses || {}));
        setNotes(d.notes || {});
      }
    });
    return unsub;
  }, [user]);

  const saveToCloud = async (newData, newNotes) => {
    if (!user) return;
    setSyncStatus("saving");
    const statuses = {};
    newData.forEach(p => p.steps.forEach(s => { statuses[s.id] = s.status; }));
    await setDoc(doc(db, "users", user.uid), { statuses, notes: newNotes, updatedAt: new Date().toISOString() }, { merge: true });
    setSyncStatus("saved");
    setTimeout(() => setSyncStatus("idle"), 2500);
  };

  const handleLogin = async () => {
    setLoginLoading(true);
    try { await signInWithPopup(auth, provider); } finally { setLoginLoading(false); }
  };

  const cycleStatus = (phaseId, stepId, e) => {
    e.stopPropagation();
    const newData = data.map(phase =>
      phase.id === phaseId
        ? { ...phase, steps: phase.steps.map(step => step.id === stepId ? { ...step, status: statusCycle[(statusCycle.indexOf(step.status) + 1) % statusCycle.length] } : step) }
        : phase
    );
    setData(newData);
    saveToCloud(newData, notes);
  };

  const saveNote = (stepId, text) => {
    const newNotes = { ...notes, [stepId]: text };
    setNotes(newNotes);
    saveToCloud(data, newNotes);
    setEditingNote(null);
  };

  if (authLoading) return (
    <div style={{ minHeight: "100vh", background: "#0A1628", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#475569", fontSize: 14 }}>Loading Safe Harbor...</div>
    </div>
  );

  if (!user) return <LoginScreen onLogin={handleLogin} loading={loginLoading} />;

  const overall = getOverall(data);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #0A1628 0%, #0F2547 40%, #0A1628 100%)", fontFamily: "'Segoe UI', sans-serif", padding: "20px 12px 40px" }}>
      <div style={{ maxWidth: 740, margin: "0 auto 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", borderRadius: 50, padding: "6px 18px", marginBottom: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
            <span>⚓</span>
            <span style={{ color: "#94A3B8", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Safe Harbor · Tulsa, OK</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: syncStatus === "saving" ? "#FBBF24" : syncStatus === "saved" ? "#34D399" : "transparent", minWidth: 60 }}>
              {syncStatus === "saving" ? "⏳ Saving..." : syncStatus === "saved" ? "☁️ Synced!" : "·"}
            </span>
          </div>
          <h1 style={{ color: "#F1F5F9", fontSize: 26, fontWeight: 800, margin: "0 0 4px" }}>Credentialing Command Center</h1>
          <p style={{ color: "#64748B", fontSize: 13, margin: "0 0 10px" }}>Children's Behavioral Health · Ages 3–17 · "No child is broken"</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", borderRadius: 50, padding: "5px 14px", border: "1px solid rgba(255,255,255,0.08)" }}>
            {user.photoURL && <img src={user.photoURL} width={20} height={20} style={{ borderRadius: "50%" }} alt="" />}
            <span style={{ color: "#94A3B8", fontSize: 12 }}>{user.displayName}</span>
            <span style={{ color: "#334155", fontSize: 12 }}>·</span>
            <button onClick={() => signOut(auth)} style={{ background: "none", border: "none", color: "#475569", fontSize: 11, cursor: "pointer", padding: 0 }}>Sign out</button>
          </div>
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: "18px 22px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#CBD5E1", fontSize: 14, fontWeight: 700 }}>Overall Progress</span>
            <span style={{ color: "#F1F5F9", fontSize: 14, fontWeight: 800 }}>{overall.done}/{overall.total} steps · {overall.pct}%</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 10, overflow: "hidden" }}>
            <div style={{ width: `${overall.pct}%`, background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #10B981)", height: "100%", borderRadius: 99, transition: "width 0.6s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: 12 }}>
            {data.map(phase => {
              const pct = getProgress(phase.steps);
              return <div key={phase.id} style={{ textAlign: "center" }}><div style={{ fontSize: 20 }}>{phase.icon}</div><div style={{ fontSize: 10, color: pct === 100 ? "#34D399" : "#475569", fontWeight: 700, marginTop: 2 }}>{pct}%</div></div>;
            })}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 740, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map(phase => {
          const pct = getProgress(phase.steps);
          const isPhaseOpen = expandedPhase === phase.id;
          return (
            <div key={phase.id} style={{ background: "#FFFFFF", borderRadius: 14, overflow: "hidden", boxShadow: isPhaseOpen ? "0 12px 40px rgba(0,0,0,0.3)" : "0 2px 10px rgba(0,0,0,0.2)" }}>
              <div onClick={() => setExpandedPhase(isPhaseOpen ? null : phase.id)} style={{ padding: "14px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderLeft: `5px solid ${phase.color}`, background: isPhaseOpen ? phase.bg : "#FAFAFA" }}>
                <span style={{ fontSize: 22 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: phase.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{phase.name}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1E293B" }}>{phase.label}</div>
                </div>
                <div style={{ textAlign: "right", marginRight: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: pct === 100 ? "#059669" : phase.color }}>{pct}%</div>
                  <div style={{ fontSize: 10, color: "#94A3B8" }}>{phase.steps.filter(s => s.status === "complete").length}/{phase.steps.length} done</div>
                </div>
                <span style={{ color: "#94A3B8", transform: isPhaseOpen ? "rotate(180deg)" : "none", transition: "0.3s", fontSize: 16 }}>▾</span>
              </div>
              <div style={{ height: 3, background: "#F1F5F9" }}><div style={{ width: `${pct}%`, height: "100%", background: phase.color, transition: "width 0.5s" }} /></div>

              {isPhaseOpen && (
                <div style={{ padding: "10px 14px 14px" }}>
                  {phase.steps.map((step, idx) => {
                    const cfg = STATUS_CONFIG[step.status];
                    const stepKey = `${phase.id}-${step.id}`;
                    const isStepOpen = expandedStep === stepKey;
                    const myNote = notes[step.id] || "";
                    return (
                      <div key={step.id} style={{ marginBottom: 8, border: `1px solid ${isStepOpen ? phase.border : "#E2E8F0"}`, borderRadius: 10, overflow: "hidden" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: isStepOpen ? phase.bg : "#F8FAFC", cursor: "pointer" }} onClick={() => setExpandedStep(isStepOpen ? null : stepKey)}>
                          <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 800, minWidth: 20, fontFamily: "monospace" }}>{idx + 1}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>{step.label}</div>
                            <div style={{ fontSize: 11, color: "#64748B" }}>📍 {step.note}</div>
                          </div>
                          <button onClick={(e) => cycleStatus(phase.id, step.id, e)} style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}`, borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>
                            {cfg.emoji} {cfg.label}
                          </button>
                          <span style={{ color: "#94A3B8", fontSize: 13, transform: isStepOpen ? "rotate(180deg)" : "none", transition: "0.2s", marginLeft: 4 }}>▾</span>
                        </div>

                        {isStepOpen && (
                          <div style={{ padding: "0 14px 14px", background: "#FDFDFF" }}>
                            {step.time && <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F1F5F9", borderRadius: 6, padding: "4px 10px", margin: "10px 0 12px", fontSize: 12, color: "#475569", fontWeight: 600 }}>⏱ {step.time}</div>}
                            <div style={{ marginBottom: 14 }}>
                              <div style={{ fontSize: 12, fontWeight: 800, color: phase.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>📋 How To Do This:</div>
                              {step.instructions.map((inst, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                                  <div style={{ minWidth: 26, height: 26, borderRadius: "50%", background: phase.color, color: "#fff", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, paddingTop: 4 }}>{inst}</div>
                                </div>
                              ))}
                            </div>
                            {step.warning && <div style={{ background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 8, padding: "10px 12px", marginBottom: 12 }}><div style={{ fontSize: 12, color: "#92400E", fontWeight: 600, lineHeight: 1.5 }}>{step.warning}</div></div>}
                            {step.docs && step.docs.length > 0 && (
                              <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "10px 12px", marginBottom: 12 }}>
                                <div style={{ fontSize: 12, fontWeight: 800, color: "#065F46", marginBottom: 6 }}>📁 Documents You Need:</div>
                                {step.docs.map((d, i) => <div key={i} style={{ fontSize: 12, color: "#047857", marginBottom: 3 }}>✓ {d}</div>)}
                              </div>
                            )}
                            {editingNote === step.id ? (
                              <div>
                                <textarea value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Add confirmation #, date submitted, rep name..." style={{ width: "100%", border: "1px solid #DDD6FE", borderRadius: 8, padding: "8px 10px", fontSize: 12, fontFamily: "inherit", resize: "vertical", minHeight: 70, boxSizing: "border-box", background: "#FAFAFE" }} />
                                <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                                  <button onClick={() => saveNote(step.id, noteText)} style={{ background: phase.color, color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>Save & Sync ☁️</button>
                                  <button onClick={() => setEditingNote(null)} style={{ background: "#E2E8F0", color: "#64748B", border: "none", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 12 }}>Cancel</button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                {myNote && <div style={{ background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 8, padding: "8px 12px", marginBottom: 8 }}><div style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", marginBottom: 3 }}>📝 My Notes:</div><div style={{ fontSize: 12, color: "#4C1D95" }}>{myNote}</div></div>}
                                <button onClick={() => { setEditingNote(step.id); setNoteText(myNote); }} style={{ background: "none", border: "1px dashed #CBD5E1", borderRadius: 6, padding: "5px 12px", cursor: "pointer", fontSize: 12, color: "#64748B", fontWeight: 600 }}>
                                  {myNote ? "✏️ Edit Note" : "📝 Add Note / Confirmation #"}
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ color: "#475569", fontSize: 11, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Tap status to cycle through:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => <span key={key} style={{ background: cfg.bg, color: cfg.text, borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{cfg.emoji} {cfg.label}</span>)}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.15))", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(124,58,237,0.3)" }}>
          <div style={{ color: "#A78BFA", fontSize: 13, fontWeight: 800, marginBottom: 6 }}>⚠️ CAQH RE-ATTEST REMINDER</div>
          <div style={{ color: "#CBD5E1", fontSize: 12, lineHeight: 1.6 }}>Re-attest CAQH every <strong style={{ color: "#F1F5F9" }}>90–120 days</strong>. Stale profile = ALL credentialing frozen. Set a phone reminder RIGHT NOW.</div>
        </div>
        <div style={{ textAlign: "center", color: "#334155", fontSize: 11, paddingBottom: 4 }}>Safe Harbor Behavioral Health · Tulsa, OK · ☁️ Cloud Synced</div>
      </div>
    </div>
  );
}
