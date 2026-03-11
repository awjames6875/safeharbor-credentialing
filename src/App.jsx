import { useState, useEffect } from "react";
import { auth, provider, db } from "./firebase";
import { signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore";

const phases = [
  {
    id: 1, name: "Phase 1", label: "Foundational Setup", icon: "🪪",
    color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE",
    steps: [
      { id: "1a", label: "Org NPI (Type 2): 1871316414", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅", instructions: ["Verified: Org NPI (Type 2) is active and correct."], docs: [] },
      { id: "1b", label: "Clinician 1 (Lashauna Herrera Romero): 1619348810", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅", instructions: ["Verified: Clinician 1 NPI is active and correct."], docs: [] },
      { id: "1c", label: "Clinician 2 (Apollo Gonzalez): 1639576911", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅", instructions: ["Verified: Clinician 2 NPI is active and correct."], docs: [] },
    ],
  },
  {
    id: 2, name: "Phase 2", label: "Priority Payers (Medicaid/SoonerCare)", icon: "🏥",
    color: "#059669", bg: "#ECFDF5", border: "#A7F3D0",
    steps: [
      { id: "p1", label: "OHCA/SoonerCare", note: "oklahoma.gov/ohca", status: "not_started", time: "MUST HAVE", instructions: ["Submit group enrollment via OHCA provider portal."], docs: ["W-9", "NPIs", "License"], payer: true },
      { id: "p2", label: "Aetna Better Health", note: "aetnabetterhealth.com/oklahoma", status: "not_started", time: "MUST HAVE", instructions: ["Submit via Availity or Aetna portal."], docs: ["W-9", "Roster"], payer: true },
      { id: "p3", label: "Humana Healthy Horizons", note: "humana.com/medicaid/oklahoma", status: "not_started", time: "MUST HAVE", instructions: ["Contact Humana provider relations for enrollment."], docs: ["W-9", "Roster"], payer: true },
      { id: "p4", label: "Oklahoma Complete Health", note: "oklahomacompletehealth.com", status: "not_started", time: "MUST HAVE", instructions: ["Submit group application via portal."], docs: ["W-9", "Roster"], payer: true },
    ],
  },
  {
    id: 3, name: "Phase 3", label: "Commercial Payers (CAQH Needed)", icon: "💼",
    color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE",
    steps: [
      { id: "p5", label: "BCBS Oklahoma", note: "bcbsok.com", status: "not_started", time: "SHOULD HAVE", instructions: ["Submit Group Onboarding Form via BCBSOK portal."], docs: ["CAQH Profiles", "Malpractice"], payer: true },
      { id: "p6", label: "UnitedHealthcare/Optum", note: "uhcprovider.com", status: "not_started", time: "SHOULD HAVE", instructions: ["Submit via UHC portal using CAQH ID."], docs: ["CAQH Profiles"], payer: true },
      { id: "p7", label: "Aetna Commercial", note: "aetna.com", status: "not_started", time: "SHOULD HAVE", instructions: ["Submit via Availity (Separate from Medicaid)."], docs: ["CAQH Profiles"], payer: true },
    ],
  },
  {
    id: 4, name: "Phase 4", label: "Additional Payers", icon: "📋",
    color: "#D97706", bg: "#FFFBEB", border: "#FDE68A",
    steps: [
      { id: "p8", label: "Cigna", note: "cigna.com", status: "not_started", time: "NICE TO HAVE", instructions: ["Submit Group Participation Request."], docs: ["CAQH Profiles"], payer: true },
      { id: "p9", label: "HealthChoice", note: "oklahoma.gov/omes/services/healthchoice", status: "not_started", time: "NICE TO HAVE", instructions: ["Submit via HealthChoice provider portal."], docs: ["W-9"], payer: true },
      { id: "p10", label: "Ambetter", note: "ambetter.oklahomacompletehealth.com", status: "not_started", time: "NICE TO HAVE", instructions: ["Apply through Oklahoma Complete Health."], docs: ["CAQH Profiles"], payer: true },
    ],
  },
];

const ROLES = [
  { name: "Winston", role: "Builder", icon: "🎩" },
  { name: "Alvin", role: "QA+Calls", icon: "📞" },
  { name: "Sadie", role: "Docs+Accountability", icon: "📑" },
  { name: "Adam", role: "Signer", icon: "🖋️" },
];

const STATUS_CONFIG = {
  not_started:    { label: "Not Started", emoji: "⬜", bg: "#F3F4F6", text: "#6B7280", border: "#E5E7EB" },
  docs_gathering: { label: "Docs Gathering", emoji: "📂", bg: "#DBEAFE", text: "#1D4ED8", border: "#93C5FD" },
  submitted:      { label: "Submitted", emoji: "📤", bg: "#FEF3C7", text: "#92400E", border: "#FCD34D" },
  under_review:   { label: "Under Review", emoji: "🔍", bg: "#F5F3FF", text: "#7C3AED", border: "#DDD6FE" },
  approved:       { label: "Approved", emoji: "✅", bg: "#D1FAE5", text: "#065F46", border: "#6EE7B7" },
  active:         { label: "Active", emoji: "🚀", bg: "#DC2626", text: "#FFFFFF", border: "#DC2626" },
};
const statusCycle = ["not_started", "docs_gathering", "submitted", "under_review", "approved", "active"];

function buildData(savedData = {}) {
  return phases.map(p => ({
    ...p,
    steps: p.steps.map(s => {
      const saved = savedData[s.id] || {};
      return {
        ...s,
        status: saved.status || s.status,
        dateSubmitted: saved.dateSubmitted || "",
        dateApproved: saved.dateApproved || "",
        nextFollowUp: saved.nextFollowUp || "",
        assignedTo: saved.assignedTo || "",
        notes: saved.notes || ""
      };
    })
  }));
}

function LoginScreen({ onLogin, loading }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0A1628", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: 20 }}>
      <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: "48px 40px", textAlign: "center", maxWidth: 400, width: "100%" }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>⚓</div>
        <h1 style={{ color: "#F1F5F9", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Safe Harbor</h1>
        <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 6px" }}>Credentialing Command Center</p>
        <button onClick={onLogin} disabled={loading}
          style={{ width: "100%", padding: "14px 24px", background: loading ? "#1E293B" : "#fff", color: "#1E293B", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, transition: "0.2s" }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width={20} height={20} alt="G" />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [data, setData] = useState(() => buildData());
  const [expandedPhase, setExpandedPhase] = useState(1);
  const [expandedStep, setExpandedStep] = useState(null);
  const [syncStatus, setSyncStatus] = useState("idle");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      if (!u) setAuthLoading(false);
    });
    
    getRedirectResult(auth).then((result) => {
      if (result?.user) setUser(result.user);
      setAuthLoading(false);
    }).catch(() => setAuthLoading(false));

    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    const unsub = onSnapshot(ref, snap => {
      if (snap.exists()) {
        const d = snap.data();
        setData(buildData(d.steps || {}));
      }
    });
    return unsub;
  }, [user]);

  const saveToCloud = async (newData) => {
    if (!user) return;
    setSyncStatus("saving");
    const steps = {};
    newData.forEach(p => p.steps.forEach(s => {
      steps[s.id] = {
        status: s.status,
        dateSubmitted: s.dateSubmitted,
        dateApproved: s.dateApproved,
        nextFollowUp: s.nextFollowUp,
        assignedTo: s.assignedTo,
        notes: s.notes
      };
    }));
    await setDoc(doc(db, "users", user.uid), { steps, updatedAt: new Date().toISOString() }, { merge: true });
    setSyncStatus("saved");
    setTimeout(() => setSyncStatus("idle"), 2500);
  };

  const handleLogin = () => signInWithPopup(auth, provider).catch(err => {
    console.error("Login error:", err);
    // Fallback to redirect if popup blocked
    if (err.code === 'auth/popup-blocked') signInWithRedirect(auth, provider);
  });

  const updateStep = (phaseId, stepId, fields) => {
    const newData = data.map(p => p.id === phaseId ? { ...p, steps: p.steps.map(s => s.id === stepId ? { ...s, ...fields } : s) } : p);
    setData(newData);
    saveToCloud(newData);
  };

  if (authLoading) return <div style={{ minHeight: "100vh", background: "#0A1628", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}>Loading...</div>;
  if (!user) return <LoginScreen onLogin={handleLogin} />;

  const allPayers = data.flatMap(p => p.steps).filter(s => s.payer);
  const approvedCount = allPayers.filter(s => s.status === "approved" || s.status === "active").length;
  const progressPct = Math.round((approvedCount / 10) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#0A1628", color: "#F1F5F9", fontFamily: "sans-serif", padding: "20px 10px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, margin: 0 }}>Credentialing Command Center</h1>
          <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>
            {syncStatus === "saving" ? "⏳ Syncing..." : "☁️ Cloud Synced"} · <button onClick={() => signOut(auth)} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 11 }}>Sign out</button>
          </div>
        </div>

        {/* Roles Dashboard */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
          {ROLES.map(r => (
            <div key={r.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 8, textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: 20 }}>{r.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700 }}>{r.name}</div>
              <div style={{ fontSize: 9, color: "#94A3B8" }}>{r.role}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 15, marginBottom: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, fontWeight: 700 }}>
            <span>Payer Approvals</span>
            <span>{approvedCount} of 10</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, height: 12, overflow: "hidden" }}>
            <div style={{ width: `${progressPct}%`, background: "#10B981", height: "100%", transition: "width 0.5s" }} />
          </div>
        </div>

        {/* Phases */}
        {data.map(phase => (
          <div key={phase.id} style={{ background: "#FFF", color: "#1E293B", borderRadius: 16, marginBottom: 12, overflow: "hidden" }}>
            <div onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)} style={{ padding: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderLeft: `6px solid ${phase.color}`, background: phase.bg }}>
              <span style={{ fontSize: 24 }}>{phase.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800 }}>{phase.label}</div>
              </div>
              <span>{expandedPhase === phase.id ? "▲" : "▼"}</span>
            </div>

            {expandedPhase === phase.id && (
              <div style={{ padding: 10 }}>
                {phase.steps.map(step => {
                  const cfg = STATUS_CONFIG[step.status];
                  const isOpen = expandedStep === step.id;
                  return (
                    <div key={step.id} style={{ borderBottom: "1px solid #F1F5F9", lastChild: { border: 0 } }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 5px" }} onClick={() => setExpandedStep(isOpen ? null : step.id)}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{step.label}</div>
                          <div style={{ fontSize: 11, color: "#64748B" }}>{step.time}</div>
                        </div>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          const next = statusCycle[(statusCycle.indexOf(step.status) + 1) % statusCycle.length];
                          updateStep(phase.id, step.id, { status: next });
                        }} style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 11, fontWeight: 700 }}>
                          {cfg.emoji} {cfg.label}
                        </button>
                      </div>

                      {isOpen && (
                        <div style={{ padding: "0 5px 15px", display: "flex", flexDirection: "column", gap: 10 }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                            <div>
                              <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Submitted</label>
                              <input type="date" value={step.dateSubmitted} onChange={e => updateStep(phase.id, step.id, { dateSubmitted: e.target.value })} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                            </div>
                            <div>
                              <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Approved</label>
                              <input type="date" value={step.dateApproved} onChange={e => updateStep(phase.id, step.id, { dateApproved: e.target.value })} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                            </div>
                            <div>
                              <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Next Follow-up</label>
                              <input type="date" value={step.nextFollowUp} onChange={e => updateStep(phase.id, step.id, { nextFollowUp: e.target.value })} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                            </div>
                            <div>
                              <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Assigned To</label>
                              <select value={step.assignedTo} onChange={e => updateStep(phase.id, step.id, { assignedTo: e.target.value })} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }}>
                                <option value="">Select...</option>
                                {ROLES.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Notes / Confirmation #</label>
                            <textarea value={step.notes} onChange={e => updateStep(phase.id, step.id, { notes: e.target.value })} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12, minHeight: 60, fontFamily: "inherit" }} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
