import { EX_INDEX } from '../data';
import { useCourse } from '../data/useCourse';
import { BADGES } from '../data/badges';
import { addDays, level, today, useStore } from '../engine/store';
import { Bar } from '../components/UI';

const DAYS = ['D', 'L', 'M', 'M', 'G', 'V', 'S'];

function masteryColor(v: number) {
  // rosso → arancio → verde
  if (v < 0.5) return '#ef4c5c';
  if (v < 0.75) return '#f59e0b';
  return '#12b076';
}

export default function Stats() {
  const s = useStore((x) => x);
  const course = useCourse();
  const lv = level(s.xp);
  const t = today();
  const week = Array.from({ length: 7 }, (_, i) => addDays(t, i - 6));
  const maxXp = Math.max(s.dailyGoal, ...week.map((d) => s.days[d] ?? 0));
  const totalSec = Object.values(s.time).reduce((a, b) => a + b, 0);
  const seenAll = Object.values(s.ex).reduce((a, e) => a + e.seen, 0);
  const okAll = Object.values(s.ex).reduce((a, e) => a + e.ok, 0);

  // precisione per unità e per argomento
  const unitAcc = course.units.map((u) => {
    let seen = 0,
      ok = 0;
    Object.entries(s.ex).forEach(([id, e]) => {
      if (EX_INDEX.get(id)?.unit.id === u.id) {
        seen += e.seen;
        ok += e.ok;
      }
    });
    return { u, acc: seen ? ok / seen : 0, seen };
  });
  const topics = new Map<string, { seen: number; ok: number; color: string }>();
  Object.entries(s.ex).forEach(([id, e]) => {
    const info = EX_INDEX.get(id);
    if (!info || info.course.id !== course.id) return;
    const k = info.ex.topic;
    const cur = topics.get(k) ?? { seen: 0, ok: 0, color: info.unit.color };
    cur.seen += e.seen;
    cur.ok += e.ok;
    topics.set(k, cur);
  });
  const topicList = [...topics.entries()].map(([k, v]) => ({ k, acc: v.ok / v.seen })).sort((a, b) => a.acc - b.acc);

  // calendario ultime 5 settimane
  const heat = Array.from({ length: 35 }, (_, i) => addDays(t, i - 34));

  return (
    <div className="screen">
      <h1 className="page-title">Progressi</h1>
      <p className="page-sub">
        Livello {lv.lvl} · {lv.into} / {lv.need} XP per il prossimo
      </p>
      <div className="card" style={{ padding: 12, marginBottom: 14 }}>
        <Bar value={lv.into / lv.need} color="var(--gold)" />
      </div>
      <div className="kpis">
        <div className="kpi">
          <span className="ki">🔥</span>
          <div>
            <div className="kv">{s.streak}</div>
            <div className="kl">giorni di fila (record {s.bestStreak})</div>
          </div>
        </div>
        <div className="kpi">
          <span className="ki">💎</span>
          <div>
            <div className="kv">{s.xp}</div>
            <div className="kl">XP totali</div>
          </div>
        </div>
        <div className="kpi">
          <span className="ki">🎯</span>
          <div>
            <div className="kv">{seenAll ? Math.round((okAll / seenAll) * 100) : 0}%</div>
            <div className="kl">precisione ({seenAll} risposte)</div>
          </div>
        </div>
        <div className="kpi">
          <span className="ki">⏱️</span>
          <div>
            <div className="kv">{totalSec >= 3600 ? `${(totalSec / 3600).toFixed(1).replace('.', ',')} h` : `${Math.round(totalSec / 60)} min`}</div>
            <div className="kl">tempo di studio</div>
          </div>
        </div>
      </div>

      <h2 className="section-title">XP della settimana</h2>
      <div className="card">
        <svg viewBox="0 0 320 150" width="100%" role="img" aria-label="XP guadagnati negli ultimi 7 giorni">
          <line x1="0" x2="320" y1={120 - (s.dailyGoal / maxXp) * 100} y2={120 - (s.dailyGoal / maxXp) * 100} stroke="var(--gold)" strokeDasharray="5 5" strokeWidth="2" />
          {week.map((d, i) => {
            const v = s.days[d] ?? 0;
            const h = (v / maxXp) * 100;
            const x = 12 + i * 44;
            const dt = new Date(d + 'T12:00');
            return (
              <g key={d}>
                <rect x={x} y={120 - h} width="30" height={Math.max(h, 2)} rx="8" fill={d === t ? 'var(--primary)' : 'color-mix(in srgb, var(--primary) 45%, var(--card))'} />
                {v > 0 && (
                  <text x={x + 15} y={114 - h} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--ink-2)">
                    {v}
                  </text>
                )}
                <text x={x + 15} y="140" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink-2)">
                  {DAYS[dt.getDay()]}
                </text>
              </g>
            );
          })}
        </svg>
        <p style={{ fontSize: 13, color: 'var(--ink-2)' }}>La linea tratteggiata è il tuo obiettivo giornaliero ({s.dailyGoal} XP).</p>
      </div>

      <h2 className="section-title">Calendario</h2>
      <div className="card">
        <div className="heat" role="img" aria-label="Giorni di studio delle ultime 5 settimane">
          {heat.map((d) => {
            const v = s.days[d] ?? 0;
            const a = v ? Math.min(1, 0.3 + v / (s.dailyGoal * 1.5)) : 0;
            return <i key={d} title={`${d}: ${v} XP`} style={v ? { background: `color-mix(in srgb, var(--ok) ${Math.round(a * 100)}%, var(--locked))` } : undefined} />;
          })}
        </div>
      </div>

      <h2 className="section-title">Padronanza per unità</h2>
      <div className="card">
        {unitAcc.map(({ u, acc, seen }) => (
          <div key={u.id} className="bar-row">
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={u.title}>
              Unità {u.n}
            </span>
            <Bar value={acc} color={u.color} />
            <span>{seen ? `${Math.round(acc * 100)}%` : '—'}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">Mappa degli argomenti</h2>
      <div className="card">
        {topicList.length ? (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 10 }}>Dal più debole al più forte. Rosso sotto il 50%, verde dal 75%.</p>
            <div className="mastery">
              {topicList.map((t) => (
                <span key={t.k} style={{ background: masteryColor(t.acc) }}>
                  {t.k} {Math.round(t.acc * 100)}%
                </span>
              ))}
            </div>
          </>
        ) : (
          <p style={{ color: 'var(--ink-2)' }}>Completa qualche lezione e qui vedrai i tuoi punti forti e deboli.</p>
        )}
      </div>

      <h2 className="section-title">Traguardi</h2>
      <div className="badges">
        {BADGES.map((b) => (
          <div key={b.id} className={`badge ${s.badges[b.id] ? '' : 'off'}`} title={b.desc}>
            <span className="bi">{b.icon}</span>
            {b.name}
            <div style={{ fontWeight: 600, color: 'var(--ink-3)', fontSize: 11, marginTop: 2 }}>{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
