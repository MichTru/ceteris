// Card del percorso: conto alla rovescia all'esame e missioni del giorno.
import { useState } from 'react';
import { courseById } from '../data';
import { examPlan } from '../engine/plan';
import { MISSION_BONUS, missions } from '../engine/missions';
import { addXp, bumpDaily, dailyOf, setState, today, useStore } from '../engine/store';
import { sfx } from '../engine/sound';
import Mascot from './Mascot';
import { Confetti } from './UI';

const fmt = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });

/** Campo data invisibile sopra un pulsante: tocca e si apre il calendario del telefono. */
function DatePick({ label, value, className }: { label: string; value?: string; className: string }) {
  const course = useStore((s) => s.course);
  return (
    <label className={className}>
      {label}
      <input
        type="date"
        className="date-overlay"
        min={today()}
        value={value ?? ''}
        aria-label={label}
        onChange={(e) => {
          const v = e.target.value;
          setState((s) => {
            if (v) s.examDates[course] = v;
            else delete s.examDates[course];
          });
        }}
      />
    </label>
  );
}

export function ExamCard() {
  const s = useStore((x) => x);
  const plan = examPlan(s);
  const course = courseById(s.course);
  if (!plan)
    return (
      <section className="exam-card empty">
        <span className="ec-mascot" aria-hidden>
          <Mascot mood="think" size={74} />
        </span>
        <div>
          <h2>Quando hai l’esame?</h2>
          <p>Imposta la data di {course.title}: getit ti dice ogni giorno cosa fare.</p>
        </div>
        <DatePick label="Imposta la data" className="ec-btn" />
      </section>
    );
  const pct = plan.perDay ? Math.min(1, plan.doneToday / plan.perDay) : 1;
  return (
    <section className="exam-card">
      <div className="ec-top">
        <div className="ec-days">
          <b>{Math.max(0, plan.daysLeft)}</b>
          <span>{plan.daysLeft === 1 ? 'giorno all’esame' : 'giorni all’esame'}</span>
        </div>
        <div className="ec-ready" role="img" aria-label={`Pronta al ${plan.readiness}%`}>
          <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden>
            <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="8" />
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="var(--sun)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${163.4 * (plan.readiness / 100)} 163.4`}
              transform="rotate(-90 32 32)"
              className="level-arc"
            />
          </svg>
          <span>
            <b>{plan.readiness}%</b>
            pronta
          </span>
        </div>
      </div>
      <p className="ec-date">{fmt(plan.date)}</p>
      <div className="ec-plan">
        <p>{plan.message}</p>
        {plan.daysLeft > 2 && plan.perDay > 0 && (
          <div className="ec-bar" aria-hidden>
            <i style={{ width: `${pct * 100}%` }} />
          </div>
        )}
      </div>
      <DatePick label="Cambia data" value={plan.date} className="ec-change" />
    </section>
  );
}

export function Missions() {
  const s = useStore((x) => x);
  const list = missions(s);
  const claimed = dailyOf(s).claimed;
  const all = list.every((m) => m.value >= m.target);
  const [party, setParty] = useState(false);
  const claim = () => {
    bumpDaily((d) => void (d.claimed = true));
    addXp(MISSION_BONUS);
    sfx.complete();
    setParty(true);
    setTimeout(() => setParty(false), 2600);
  };
  return (
    <section className={`missions ${all ? 'all' : ''}`}>
      {party && <Confetti />}
      <h2>Missioni di oggi</h2>
      <ul>
        {list.map((m) => {
          const done = m.value >= m.target;
          return (
            <li key={m.id} className={done ? 'done' : ''}>
              <span className="m-check" aria-hidden>
                {done && (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="m-body">
                <span className="m-label">{m.label}</span>
                <span className="m-bar" aria-hidden>
                  <i style={{ width: `${(m.value / m.target) * 100}%` }} />
                </span>
              </span>
              <span className="m-val" aria-label={`${m.value} su ${m.target}`}>
                {m.value}/{m.target}
              </span>
            </li>
          );
        })}
      </ul>
      {all && !claimed && (
        <button className="chest" onClick={claim}>
          <span className="chest-ico" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1H3z" fill="#ff8a00" />
              <rect x="3" y="11" width="18" height="9" rx="2" fill="#ffb800" />
              <rect x="10" y="9" width="4" height="6" rx="1.2" fill="#16163a" />
            </svg>
          </span>
          Apri lo scrigno: +{MISSION_BONUS} XP
        </button>
      )}
      {all && claimed && (
        <p className="m-done">
          <Mascot mood="party" size={54} />
          Missioni completate. Torna domani per le nuove.
        </p>
      )}
    </section>
  );
}
