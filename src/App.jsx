import { useState, useEffect } from "react";

const phases = [
  {
    id: 1, name: "Phase 1", label: "Foundational Setup", icon: "🪪",
    color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE",
    steps: [
      { id: "1a", label: "Org NPI (Type 2): 1871316414", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅" },
      { id: "1b", label: "Clinician 1 (Lashauna): 1619348810", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅" },
      { id: "1c", label: "Clinician 2 (Apollo): 1639576911", note: "nppes.cms.hhs.gov", status: "complete", time: "DONE ✅" },
    ],
  },
  {
    id: 2, name: "Phase 2", label: "Priority Payers (Medicaid/SoonerCare)", icon: "🏥",
    color: "#059669", bg: "#ECFDF5", border: "#A7F3D0",
    steps: [
      { id: "p1", label: "OHCA/SoonerCare", note: "oklahoma.gov/ohca", status: "docs_gathering", time: "MUST HAVE — Sadie collecting docs", payer: true },
      { id: "p2", label: "Aetna Better Health", note: "aetnabetterhealth.com/oklahoma", status: "not_started", time: "MUST HAVE", payer: true },
      { id: "p3", label: "Humana Healthy Horizons", note: "humana.com/medicaid/oklahoma", status: "not_started", time: "MUST HAVE", payer: true },
      { id: "p4", label: "Oklahoma Complete Health", note: "oklahomacompletehealth.com", status: "not_started", time: "MUST HAVE", payer: true },
    ],
  },
  {
    id: 3, name: "Phase 3", label: "Commercial Payers (CAQH Needed)", icon: "💼",
    color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE",
    steps: [
      { id: "p5", label: "BCBS Oklahoma", note: "bcbsok.com", status: "not_started", time: "SHOULD HAVE", payer: true },
      { id: "p6", label: "UnitedHealthcare/Optum", note: "uhcprovider.com", status: "not_started", time: "SHOULD HAVE", payer: true },
      { id: "p7", label: "Aetna Commercial", note: "aetna.com", status: "not_started", time: "SHOULD HAVE", payer: true },
    ],
  },
  {
    id: 4, name: "Phase 4", label: "Additional Payers", icon: "📋",
    color: "#D97706", bg: "#FFFBEB", border: "#FDE68A",
    steps: [
      { id: "p8", label: "Cigna", note: "cigna.com", status: "not_started", time: "NICE TO HAVE", payer: true },
      { id: "p9", label: "HealthChoice", note: "oklahoma.gov/omes/services/healthchoice", status: "not_started", time: "NICE TO HAVE", payer: true },
      { id: "p10", label: "Ambetter", note: "ambetter.oklahomacompletehealth.com", status: "not_started", time: "NICE TO HAVE", payer: true },
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
  complete:       { label: "Complete", emoji: "✅", bg: "#D1FAE5", text: "#065F46", border: "#6EE7B7" },
};
const statusCycle = ["not_started", "docs_gathering", "submitted", "under_review", "approved", "active"];

function buildData(savedData) {
  if (!savedData) savedData = {};
  return phases.map(function(p) {
    return {
      ...p,
      steps: p.steps.map(function(s) {
        var saved = savedData[s.id] || {};
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
    };
  });
}

export default function App() {
  var _s = useState(function() { return buildData(); });
  var data = _s[0], setData = _s[1];
  var _e = useState(1);
  var expandedPhase = _e[0], setExpandedPhase = _e[1];
  var _es = useState(null);
  var expandedStep = _es[0], setExpandedStep = _es[1];
  var _sy = useState("idle");
  var syncStatus = _sy[0], setSyncStatus = _sy[1];

  useEffect(function() {
    try {
      var saved = localStorage.getItem('sh-credentialing');
      if (saved) {
        var parsed = JSON.parse(saved);
        setData(buildData(parsed.steps || {}));
      }
    } catch (e) { console.error('Load error:', e); }
  }, []);

  function saveData(newData) {
    setSyncStatus("saving");
    var steps = {};
    newData.forEach(function(p) {
      p.steps.forEach(function(s) {
        steps[s.id] = {
          status: s.status,
          dateSubmitted: s.dateSubmitted,
          dateApproved: s.dateApproved,
          nextFollowUp: s.nextFollowUp,
          assignedTo: s.assignedTo,
          notes: s.notes
        };
      });
    });
    try {
      localStorage.setItem('sh-credentialing', JSON.stringify({ steps: steps, updatedAt: new Date().toISOString() }));
    } catch (e) { console.error('Save error:', e); }
    setSyncStatus("saved");
    setTimeout(function() { setSyncStatus("idle"); }, 2500);
  }

  function updateStep(phaseId, stepId, fields) {
    var newData = data.map(function(p) {
      if (p.id !== phaseId) return p;
      return { ...p, steps: p.steps.map(function(s) {
        if (s.id !== stepId) return s;
        return { ...s, ...fields };
      })};
    });
    setData(newData);
    saveData(newData);
  }

  var allPayers = data.flatMap(function(p) { return p.steps; }).filter(function(s) { return s.payer; });
  var approvedCount = allPayers.filter(function(s) { return s.status === "approved" || s.status === "active"; }).length;
  var progressPct = Math.round((approvedCount / 10) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#0A1628", color: "#F1F5F9", fontFamily: "sans-serif", padding: "20px 10px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, margin: 0 }}>⚓ Credentialing Command Center</h1>
          <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>
            {syncStatus === "saving" ? "⏳ Saving..." : "💾 Saved Locally"}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
          {ROLES.map(function(r) {
            return (
              <div key={r.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 8, textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 20 }}>{r.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700 }}>{r.name}</div>
                <div style={{ fontSize: 9, color: "#94A3B8" }}>{r.role}</div>
              </div>
            );
          })}
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 15, marginBottom: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, fontWeight: 700 }}>
            <span>Payer Approvals</span>
            <span>{approvedCount} of 10</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, height: 12, overflow: "hidden" }}>
            <div style={{ width: progressPct + "%", background: "#10B981", height: "100%", transition: "width 0.5s" }} />
          </div>
        </div>

        {data.map(function(phase) {
          var isExpanded = expandedPhase === phase.id;
          return (
            <div key={phase.id} style={{ background: "#FFF", color: "#1E293B", borderRadius: 16, marginBottom: 12, overflow: "hidden" }}>
              <div onClick={function() { setExpandedPhase(isExpanded ? null : phase.id); }} style={{ padding: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderLeft: "6px solid " + phase.color, background: phase.bg }}>
                <span style={{ fontSize: 24 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>{phase.label}</div>
                </div>
                <span>{isExpanded ? "▲" : "▼"}</span>
              </div>

              {isExpanded && (
                <div style={{ padding: 10 }}>
                  {phase.steps.map(function(step) {
                    var cfg = STATUS_CONFIG[step.status] || STATUS_CONFIG.not_started;
                    var isOpen = expandedStep === step.id;
                    return (
                      <div key={step.id} style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 5px", cursor: "pointer" }} onClick={function() { setExpandedStep(isOpen ? null : step.id); }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 700 }}>{step.label}</div>
                            <div style={{ fontSize: 11, color: "#64748B" }}>{step.time}</div>
                          </div>
                          <button onClick={function(e) {
                            e.stopPropagation();
                            var idx = statusCycle.indexOf(step.status);
                            var next = statusCycle[(idx + 1) % statusCycle.length];
                            updateStep(phase.id, step.id, { status: next });
                          }} style={{ background: cfg.bg, color: cfg.text, border: "1px solid " + cfg.border, borderRadius: 8, padding: "6px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                            {cfg.emoji} {cfg.label}
                          </button>
                        </div>

                        {isOpen && (
                          <div style={{ padding: "0 5px 15px", display: "flex", flexDirection: "column", gap: 10 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                              <div>
                                <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Submitted</label>
                                <input type="date" value={step.dateSubmitted || ""} onChange={function(e) { updateStep(phase.id, step.id, { dateSubmitted: e.target.value }); }} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                              </div>
                              <div>
                                <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Approved</label>
                                <input type="date" value={step.dateApproved || ""} onChange={function(e) { updateStep(phase.id, step.id, { dateApproved: e.target.value }); }} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                              </div>
                              <div>
                                <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Next Follow-up</label>
                                <input type="date" value={step.nextFollowUp || ""} onChange={function(e) { updateStep(phase.id, step.id, { nextFollowUp: e.target.value }); }} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }} />
                              </div>
                              <div>
                                <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Assigned To</label>
                                <select value={step.assignedTo || ""} onChange={function(e) { updateStep(phase.id, step.id, { assignedTo: e.target.value }); }} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12 }}>
                                  <option value="">Select...</option>
                                  {ROLES.map(function(r) { return <option key={r.name} value={r.name}>{r.name}</option>; })}
                                </select>
                              </div>
                            </div>
                            <div>
                              <label style={{ fontSize: 10, color: "#94A3B8", display: "block", marginBottom: 2 }}>Notes / Confirmation #</label>
                              <textarea value={step.notes || ""} onChange={function(e) { updateStep(phase.id, step.id, { notes: e.target.value }); }} style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #E2E8F0", fontSize: 12, minHeight: 60, fontFamily: "inherit" }} />
                            </div>
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
      </div>
    </div>
  );
}
