import { useEffect, useMemo, useState } from 'react';
import rawData from './data.json?raw';

const BRAND = {
  navy: '#0d2137',
  teal: '#1a7a8a',
  gold: '#e8a838',
  red: '#b21e2b',
  light: '#f4f7fb',
};

const STORAGE_KEY = 'sh-credentialing-v2';

const data = JSON.parse(rawData.replace(/\bNaN\b/g, 'null'));

const TABS = [
  { id: 'tracker', label: 'Master Tracker' },
  { id: 'contacts', label: 'Contact Directory' },
  { id: 'scripts', label: 'Call Scripts' },
  { id: 'documents', label: 'Document Checklist' },
  { id: 'weekly', label: 'Weekly Checklist' },
];

const phaseMap = {
  Foundation: 'Foundational Setup',
  Medicaid: 'Oklahoma Medicaid & SoonerSelect MCOs',
  'SoonerSelect MCO': 'Oklahoma Medicaid & SoonerSelect MCOs',
  Commercial: 'Commercial Insurance',
  'Payment Setup': 'Payment Setup (EFT/ERA)',
};

function formatValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return String(value);
}

function dateInputValue(value) {
  if (!value) return '';
  const text = String(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  return '';
}

function safeLink(value) {
  if (!value) return null;
  const text = String(value).trim();
  if (text.startsWith('http://') || text.startsWith('https://')) return text;
  if (text.includes('.') && !text.includes(' ')) return `https://${text}`;
  return null;
}

function rowStorageKey(row, index) {
  return `${index}-${row['Payer/Plan']}-${row['Clinician/Group']}`;
}

function normalizePhone(phone) {
  if (!phone) return null;
  const text = String(phone);
  const digits = text.replace(/[^\d+]/g, '');
  return digits || null;
}

function App() {
  const [activeTab, setActiveTab] = useState('tracker');
  const [expandedRows, setExpandedRows] = useState({});
  const [expandedScripts, setExpandedScripts] = useState({});
  const [legendCollapsed, setLegendCollapsed] = useState(false);
  const [toast, setToast] = useState('');
  const [persisted, setPersisted] = useState({
    trackerEdits: {},
    weeklyChecks: {},
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPersisted({
          trackerEdits: parsed.trackerEdits || {},
          weeklyChecks: parsed.weeklyChecks || {},
        });
      }
    } catch {
      setPersisted({ trackerEdits: {}, weeklyChecks: {} });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [persisted]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 1800);
    return () => clearTimeout(timer);
  }, [toast]);

  const statusColorMap = useMemo(() => {
    const map = {};
    data.status_legend.forEach((entry) => {
      map[entry.status] = entry;
    });
    return map;
  }, []);

  const trackerGroups = useMemo(() => {
    const grouped = {
      'Foundational Setup': [],
      'Oklahoma Medicaid & SoonerSelect MCOs': [],
      'Commercial Insurance': [],
      'Payment Setup (EFT/ERA)': [],
    };

    data.master_tracker.forEach((row, index) => {
      const resolvedPhase = phaseMap[row.Type] || row.Type;
      const key = rowStorageKey(row, index);
      const edits = persisted.trackerEdits[key] || {};
      grouped[resolvedPhase] = grouped[resolvedPhase] || [];
      grouped[resolvedPhase].push({ ...row, ...edits, _index: index, _key: key });
    });

    return grouped;
  }, [persisted.trackerEdits]);

  const weeklyByDay = useMemo(() => {
    const order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'As Needed'];
    const groups = {};
    order.forEach((day) => {
      groups[day] = [];
    });
    data.weekly_checklist.forEach((item, index) => {
      const key = `${item.Day}-${item.Task}-${index}`;
      const current = { ...item, _key: key, checked: !!persisted.weeklyChecks[key] };
      if (!groups[item.Day]) groups[item.Day] = [];
      groups[item.Day].push(current);
    });
    return groups;
  }, [persisted.weeklyChecks]);

  const criticalAlerts = data.alerts.filter((alert) => alert.level === 'CRITICAL');

  function updateTrackerField(rowKey, field, value) {
    setPersisted((prev) => ({
      ...prev,
      trackerEdits: {
        ...prev.trackerEdits,
        [rowKey]: {
          ...(prev.trackerEdits[rowKey] || {}),
          [field]: value,
        },
      },
    }));
  }

  function toggleWeekly(itemKey) {
    setPersisted((prev) => ({
      ...prev,
      weeklyChecks: {
        ...prev.weeklyChecks,
        [itemKey]: !prev.weeklyChecks[itemKey],
      },
    }));
  }

  function resetWeek() {
    setPersisted((prev) => ({ ...prev, weeklyChecks: {} }));
  }

  async function copyScript(scriptText) {
    try {
      await navigator.clipboard.writeText(scriptText);
      setToast('Script copied');
    } catch {
      setToast('Copy failed');
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: BRAND.light, color: BRAND.navy }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: "Trebuchet MS", "Segoe UI", sans-serif; background: ${BRAND.light}; }
        a { color: ${BRAND.teal}; }
        .shell { max-width: 1200px; margin: 0 auto; padding: 0 12px 100px; }
        .card { background: #fff; border: 1px solid #dbe4ef; border-radius: 12px; }
        .chip { border-radius: 999px; padding: 3px 10px; font-size: 12px; font-weight: 700; display: inline-block; }
        .table-wrap { overflow-x: auto; }
        .table { width: 100%; border-collapse: collapse; min-width: 900px; }
        .table th, .table td { border-bottom: 1px solid #e4ebf3; padding: 10px 8px; text-align: left; vertical-align: top; font-size: 13px; }
        .table th { background: #f0f5fa; font-size: 12px; letter-spacing: 0.02em; text-transform: uppercase; color: #2a3e55; }
        .expander { background: #f8fbff; }
        .tab-btn { border: 0; background: transparent; color: #fff; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-weight: 700; white-space: nowrap; }
        .tab-btn.active { background: ${BRAND.gold}; color: ${BRAND.navy}; }
        .grid-2 { display: grid; gap: 12px; grid-template-columns: 1fr; }
        .grid-3 { display: grid; gap: 12px; grid-template-columns: 1fr; }
        .input { width: 100%; border: 1px solid #bed0e1; border-radius: 8px; padding: 8px; font-size: 13px; }
        .small { font-size: 12px; color: #4f647b; }
        .danger-cell { background: #ffe0e0; }
        .toast { position: fixed; right: 14px; top: 14px; background: ${BRAND.navy}; color: #fff; padding: 10px 12px; border-radius: 8px; z-index: 1000; font-size: 13px; }
        @media (min-width: 760px) {
          .grid-2 { grid-template-columns: 1fr 1fr; }
          .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>

      {toast ? <div className="toast">{toast}</div> : null}

      {criticalAlerts.map((alert, index) => (
        <div
          key={`${alert.level}-${index}`}
          style={{ background: BRAND.red, color: '#fff', padding: '12px 14px', borderBottom: '2px solid #7a1020' }}
        >
          <div className="shell" style={{ padding: 0 }}>
            <strong>{alert.level}:</strong> {alert.message} <strong>Action Required:</strong> {alert.action}
          </div>
        </div>
      ))}

      <header style={{ background: BRAND.navy, color: '#fff', padding: '16px 0 12px' }}>
        <div className="shell" style={{ paddingBottom: 0 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>{data.app_name}</h1>
          <p style={{ margin: '4px 0 0', opacity: 0.9 }}>
            {data.clinic.services} | {data.clinic.location} | Mission: {data.clinic.mission}
          </p>
          <div className="grid-3" style={{ marginTop: 12 }}>
            <div className="card" style={{ padding: 10 }}>
              <strong>Clinic Identifiers</strong>
              <div className="small">Org NPI Type 2: {data.clinic.org_npi_type2}</div>
              <div className="small">EIN: {data.clinic.ein}</div>
              <div className="small">ODMHSAS License: {data.clinic.odmhsas_license}</div>
            </div>
            <div className="card" style={{ padding: 10 }}>
              <strong>Insurance</strong>
              <div className="small">{data.clinic.liability_insurance}</div>
              <div className="small">Clinic: {data.clinic.name}</div>
            </div>
            <div className="card" style={{ padding: 10 }}>
              <strong>Clinicians</strong>
              {data.clinicians.map((c) => (
                <div key={c.id} className="small" style={{ marginTop: 4 }}>
                  {c.label} | NPI: {c.npi_type1} | CAQH: {c.caqh_id} | License: {c.license_status} ({c.license_expiry}) |
                  Malpractice: {c.malpractice_status} ({c.malpractice_expiry})
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <nav style={{ position: 'sticky', top: 0, zIndex: 20, background: BRAND.teal, borderBottom: '2px solid #14616d' }}>
        <div className="shell" style={{ padding: '8px 12px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="shell" style={{ marginTop: 12 }}>
        {activeTab === 'tracker' ? (
          <section className="card" style={{ padding: 14 }}>
            <h2 style={{ marginTop: 0 }}>Master Tracker</h2>
            <p className="small">All {data.master_tracker.length} rows grouped by phase. Click any row to edit Date Submitted, Confirmation #, Follow-Up Date, and Notes.</p>
            <div className="grid-2" style={{ marginBottom: 12 }}>
              {data.phases.map((phase) => (
                <div key={phase.phase} className="card" style={{ padding: 10, borderLeft: `4px solid ${phase.color}` }}>
                  <strong>Phase {phase.phase}: {phase.name}</strong>
                  <div className="small">{phase.description}</div>
                </div>
              ))}
            </div>
            {Object.entries(trackerGroups).map(([phaseName, rows]) => (
              <div key={phaseName} style={{ marginBottom: 18 }}>
                <h3 style={{ marginBottom: 8 }}>{phaseName}</h3>
                <div className="table-wrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Payer/Plan</th>
                        <th>Clinician/Group</th>
                        <th>Status</th>
                        <th>Date Submitted</th>
                        <th>Confirmation #</th>
                        <th>Missing Items</th>
                        <th>Follow-Up Date</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => {
                        const colorDef = statusColorMap[row.Status] || {};
                        const isExpanded = !!expandedRows[row._key];
                        return (
                          <>
                            <tr
                              key={row._key}
                              style={{ cursor: 'pointer' }}
                              onClick={() => setExpandedRows((prev) => ({ ...prev, [row._key]: !prev[row._key] }))}
                            >
                              <td>{formatValue(row['Payer/Plan'])}</td>
                              <td>{formatValue(row['Clinician/Group'])}</td>
                              <td>
                                <span
                                  className="chip"
                                  style={{
                                    background: colorDef.color_bg || '#eee',
                                    color: colorDef.color_text || '#222',
                                  }}
                                >
                                  {formatValue(row.Status)}
                                </span>
                              </td>
                              <td>{formatValue(row['Date Submitted'])}</td>
                              <td>{formatValue(row['Confirmation #'])}</td>
                              <td>{formatValue(row['Missing Items'])}</td>
                              <td>{formatValue(row['Follow-Up Date'])}</td>
                              <td>{formatValue(row.Notes)}</td>
                            </tr>
                            {isExpanded ? (
                              <tr className="expander" key={`${row._key}-expander`}>
                                <td colSpan={8}>
                                  <div className="grid-2">
                                    <label>
                                      <div className="small">Date Submitted</div>
                                      <input
                                        className="input"
                                        type="date"
                                        value={dateInputValue(row['Date Submitted'])}
                                        onChange={(e) => updateTrackerField(row._key, 'Date Submitted', e.target.value)}
                                      />
                                    </label>
                                    <label>
                                      <div className="small">Follow-Up Date</div>
                                      <input
                                        className="input"
                                        type="date"
                                        value={dateInputValue(row['Follow-Up Date'])}
                                        onChange={(e) => updateTrackerField(row._key, 'Follow-Up Date', e.target.value)}
                                      />
                                    </label>
                                    <label>
                                      <div className="small">Confirmation #</div>
                                      <input
                                        className="input"
                                        type="text"
                                        value={row['Confirmation #'] || ''}
                                        onChange={(e) => updateTrackerField(row._key, 'Confirmation #', e.target.value)}
                                      />
                                    </label>
                                    <label>
                                      <div className="small">Notes</div>
                                      <input
                                        className="input"
                                        type="text"
                                        value={row.Notes || ''}
                                        onChange={(e) => updateTrackerField(row._key, 'Notes', e.target.value)}
                                      />
                                    </label>
                                  </div>
                                  <div className="grid-3" style={{ marginTop: 8 }}>
                                    <div className="small"><strong>Type:</strong> {formatValue(row.Type)}</div>
                                    <div className="small"><strong>NPI:</strong> {formatValue(row.NPI)}</div>
                                    <div className="small"><strong>CAQH ID:</strong> {formatValue(row['CAQH ID'])}</div>
                                    <div className="small"><strong>Method:</strong> {formatValue(row.Method)}</div>
                                    <div className="small"><strong>Approval Date:</strong> {formatValue(row['Approval Date'])}</div>
                                    <div className="small"><strong>Effective Date:</strong> {formatValue(row['Effective Date'])}</div>
                                  </div>
                                </td>
                              </tr>
                            ) : null}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            <div className="card" style={{ padding: 10, background: '#f6fbff' }}>
              <strong>Follow-Up Rules</strong>
              {Object.entries(data.follow_up_rules).map(([status, rule]) => (
                <div key={status} className="small">{status}: {rule}</div>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === 'contacts' ? (
          <section className="card" style={{ padding: 14 }}>
            <h2 style={{ marginTop: 0 }}>Contact Directory</h2>
            <p className="small">{data.contact_directory.length} payer and portal contacts.</p>
            <div className="table-wrap">
              <table className="table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>Payer/Plan</th>
                    <th>Department</th>
                    <th>Phone</th>
                    <th>Hours</th>
                    <th>Portal/Email</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.contact_directory.map((row, idx) => {
                    const phone = normalizePhone(row.Phone);
                    const portal = safeLink(row['Portal/Email']);
                    return (
                      <tr key={`${row['Payer/Plan']}-${row.Department}-${idx}`}>
                        <td>{formatValue(row['Payer/Plan'])}</td>
                        <td>{formatValue(row.Department)}</td>
                        <td>
                          {phone ? (
                            <a href={`tel:${phone}`}>{row.Phone}</a>
                          ) : (
                            '—'
                          )}
                        </td>
                        <td>{formatValue(row.Hours)}</td>
                        <td>
                          {portal ? (
                            <a href={portal} target="_blank" rel="noreferrer">{row['Portal/Email']}</a>
                          ) : (
                            formatValue(row['Portal/Email'])
                          )}
                        </td>
                        <td>{formatValue(row.Notes)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card" style={{ marginTop: 12, padding: 10 }}>
              <strong>Key Portals</strong>
              {Object.entries(data.key_portals).map(([name, link]) => (
                <div key={name} className="small">
                  {name}: <a href={link} target="_blank" rel="noreferrer">{link}</a>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === 'scripts' ? (
          <section className="card" style={{ padding: 14 }}>
            <h2 style={{ marginTop: 0 }}>Call Scripts</h2>
            <p className="small">{data.call_scripts.length} scripts. Expand to read full text and copy.</p>
            {data.call_scripts.map((script, index) => {
              const open = !!expandedScripts[index];
              return (
                <div key={`${script['Script Name']}-${index}`} className="card" style={{ marginBottom: 10, padding: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <div>
                      <strong>{script['Script Name']}</strong>
                      <div className="small">When to Use: {script['When to Use']}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="input" style={{ width: 'auto', cursor: 'pointer' }} onClick={() => copyScript(script['Script Text'])}>
                        📋 Copy
                      </button>
                      <button
                        className="input"
                        style={{ width: 'auto', cursor: 'pointer' }}
                        onClick={() => setExpandedScripts((prev) => ({ ...prev, [index]: !prev[index] }))}
                      >
                        {open ? 'Hide' : 'Expand'}
                      </button>
                    </div>
                  </div>
                  {open ? (
                    <pre style={{ whiteSpace: 'pre-wrap', marginBottom: 0, fontFamily: 'inherit', color: '#223a53' }}>
                      {script['Script Text']}
                    </pre>
                  ) : null}
                </div>
              );
            })}
          </section>
        ) : null}

        {activeTab === 'documents' ? (
          <section className="card" style={{ padding: 14 }}>
            <h2 style={{ marginTop: 0 }}>Document Checklist</h2>
            <p className="small">{data.document_checklist.length} required documents across both clinicians and group.</p>
            <div className="table-wrap">
              <table className="table" style={{ minWidth: 1040 }}>
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Required For</th>
                    <th>Clinician 1</th>
                    <th>Clinician 1 Expiry</th>
                    <th>Clinician 2</th>
                    <th>Clinician 2 Expiry</th>
                    <th>Group/Safe Harbor</th>
                    <th>Group Expiry</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.document_checklist.map((row, idx) => {
                    const c1 = formatValue(row['Clinician 1 Status']);
                    const c2 = formatValue(row['Clinician 2 Status']);
                    const g = formatValue(row['Group/Safe Harbor Status']);
                    const c1Danger = /Expired|NEED/i.test(c1);
                    const c2Danger = /Expired|NEED/i.test(c2);
                    const gDanger = /Expired|NEED/i.test(g);

                    return (
                      <tr key={`${row['Document Type']}-${idx}`}>
                        <td>{formatValue(row['Document Type'])}</td>
                        <td>{formatValue(row['Required For'])}</td>
                        <td className={c1Danger ? 'danger-cell' : ''}>{c1}</td>
                        <td>{formatValue(row['Clinician 1 Expiry'])}</td>
                        <td className={c2Danger ? 'danger-cell' : ''}>{c2}</td>
                        <td>{formatValue(row['Clinician 2 Expiry'])}</td>
                        <td className={gDanger ? 'danger-cell' : ''}>{g}</td>
                        <td>{formatValue(row['Group Expiry'])}</td>
                        <td>{formatValue(row.Notes)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {activeTab === 'weekly' ? (
          <section className="card" style={{ padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0 }}>Weekly Checklist</h2>
              <button className="input" style={{ width: 'auto', cursor: 'pointer' }} onClick={resetWeek}>Reset Week</button>
            </div>
            <p className="small">Persistent checkboxes by day (Mon-Fri + As Needed).</p>
            {Object.entries(weeklyByDay).map(([day, tasks]) => (
              <div key={day} className="card" style={{ marginBottom: 10, padding: 10 }}>
                <strong>{day}</strong>
                {tasks.map((task) => (
                  <label key={task._key} style={{ display: 'block', marginTop: 8 }}>
                    <input type="checkbox" checked={task.checked} onChange={() => toggleWeekly(task._key)} />{' '}
                    <strong>{task.Task}</strong>
                    <div className="small" style={{ marginLeft: 22 }}>{task.Details}</div>
                  </label>
                ))}
              </div>
            ))}
          </section>
        ) : null}

        <section className="card" style={{ padding: 14, marginTop: 12 }}>
          <button
            className="input"
            style={{ width: 'auto', cursor: 'pointer' }}
            onClick={() => setLegendCollapsed((v) => !v)}
          >
            {legendCollapsed ? 'Show' : 'Hide'} Status Legend
          </button>
          {!legendCollapsed ? (
            <div style={{ marginTop: 10 }}>
              {data.status_legend.map((entry) => (
                <div key={entry.status} className="card" style={{ padding: 10, marginBottom: 8 }}>
                  <span className="chip" style={{ background: entry.color_bg, color: entry.color_text }}>
                    {entry.status}
                  </span>
                  <div className="small" style={{ marginTop: 6 }}><strong>Meaning:</strong> {entry.meaning}</div>
                  <div className="small"><strong>Next Action:</strong> {entry.next_action}</div>
                  <div className="small"><strong>Typical Duration:</strong> {formatValue(entry.typical_duration)}</div>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        <section className="card" style={{ padding: 14, marginTop: 12, background: '#f8fbff' }}>
          <strong>Build Context</strong>
          <div className="small" style={{ marginTop: 6 }}>{data.prompt_for_openclaw}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
