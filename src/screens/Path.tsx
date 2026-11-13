import { ask } from '../components/Confirm';
import { Fragment, useEffect, useState } from 'react';
import { COURSES, courseById, courseOfUnit } from '../data';
import { useCourse } from '../data/useCourse';
import type { Lesson, Unit } from '../types';
import { setState, today, useStore, type State } from '../engine/store';
import { Icon, Stage, unitStyle } from '../components/UI';
import Mascot from '../components/Mascot';

const OFFS = [0, 62, 92, 62, 0, -62, -92, -62];
const ROW = 104;
const PAD = 50;

export function isUnitOpen(s: State, u: Unit) {
  if (u.n === 1 || s.unlockedUnits.includes(u.id)) return true;
  const prev = courseOfUnit(u).units[u.n - 2];
  return (s.bosses[prev.id]?.best ?? 0) >= 0.7;
}
export const lessonDone = (s: State, l: Lesson) => (s.lessons[l.id]?.done ?? 0) > 0;

export function currentTarget(s: State): { unit: Unit; lesson?: Lesson } | null {
  for (const u of courseById(s.course).units) {
    if (!isUnitOpen(s, u)) continue;
    const l = u.lessons.find((x) => !lessonDone(s, x));
    if (l) return { unit: u, lesson: l };
    if ((s.bosses[u.id]?.best ?? 0) < 0.7) return { unit: u };
  }
  return null;
}

interface Props {
  onLesson: (u: Unit, l: Lesson) => void;
  onBoss: (u: Unit) => void;
  onGuide: (u: Unit) => void;
}

function NodeGlyph({ kind }: { kind: 'lock' | 'trophy' | 'check' | 'star' }) {
  const p = {
    lock: <><rect x="5" y="11" width="14" height="10" rx="3" fill="currentColor" /><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2.6" /></>,
    trophy: <><path d="M7 4h10v5a5 5 0 0 1-10 0z" fill="currentColor" /><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M10 14h4v3h2v3H8v-3h2z" fill="currentColor" /></>,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />,
    star: <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" fill="currentColor" />,
  }[kind];
  return (
    <svg width="30" height="30" viewBox="0 0 24 24">
      {p}
    </svg>
  );
}

export default function Path({ onLesson, onBoss, onGuide }: Props) {
  const s = useStore((x) => x);
  const [open, setOpen] = useState<string | null>(null);
  const course = useCourse();
  const target = currentTarget(s);
  const todayXp = s.days[today()] ?? 0;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.node, .popover')) setOpen(null);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <div className="screen">
      <Stage
        top
        mood={todayXp >= s.dailyGoal ? 'party' : 'wave'}
        title={<>Ciao {s.name}!</>}
        sub={todayXp >= s.dailyGoal ? 'Obiettivo di oggi raggiunto.' : `Oggi ${todayXp} di ${s.dailyGoal} XP.`}
      >
        <div className="stage-goal" aria-hidden>
          <i style={{ width: `${Math.round(Math.min(1, todayXp / s.dailyGoal) * 100)}%` }} />
        </div>
        <div className="course-switch on-stage courses" role="tablist" aria-label="Corso">
          {COURSES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === course.id}
              className={c.id === course.id ? 'on' : ''}
              onClick={() => {
                if (c.id === course.id) return;
                setState((x) => void (x.course = c.id));
                setOpen(null);
                window.scrollTo({ top: 0 });
              }}
            >
              {c.short}
            </button>
          ))}
        </div>
        {target && (
          <button className="stage-cta" onClick={() => (target.lesson ? onLesson(target.unit, target.lesson) : onBoss(target.unit))}>
            <span className="stage-cta-play" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
            <span className="stage-cta-text">
              <small>{target.lesson ? 'Riprendi da qui' : 'Ti aspetta il test'}</small>
              <b>{target.lesson ? target.lesson.title : `Test dell’unità ${target.unit.n}`}</b>
            </span>
          </button>
        )}
      </Stage>

      {course.units.map((u) => {
        const uOpen = isUnitOpen(s, u);
        const allDone = u.lessons.every((l) => lessonDone(s, l));
        const bossBest = s.bosses[u.id]?.best ?? 0;
        const nodes: { key: string; kind: 'lesson' | 'boss'; lesson?: Lesson; i: number }[] = [
          ...u.lessons.map((l, i) => ({ key: l.id, kind: 'lesson' as const, lesson: l, i })),
          { key: u.id + '-boss', kind: 'boss' as const, i: u.lessons.length },
        ];
        const pts = nodes.map((n) => [160 + OFFS[n.i % OFFS.length], PAD + n.i * ROW + 36] as [number, number]);
        let trail = `M${pts[0][0]} ${pts[0][1]}`;
        for (let i = 1; i < pts.length; i++) {
          const [x0, y0] = pts[i - 1];
          const [x1, y1] = pts[i];
          trail += ` C${x0} ${(y0 + y1) / 2} ${x1} ${(y0 + y1) / 2} ${x1} ${y1}`;
        }
        const curIdx = nodes.findIndex((n) =>
          n.kind === 'lesson' ? uOpen && !lessonDone(s, n.lesson!) && (n.i === 0 || lessonDone(s, u.lessons[n.i - 1])) : uOpen && allDone && bossBest < 0.7,
        );
        return (
          <section key={u.id} style={unitStyle(u)} aria-label={`Unità ${u.n}: ${u.title}`}>
            <div className={`unit-head ${uOpen ? '' : 'locked'}`}>
              <span className="unit-num" aria-hidden>
                {u.n}
              </span>
              <div className="unit-text">
                <h2>{u.title}</h2>
                <p>{u.subtitle}</p>
              </div>
              <button className="guide" onClick={() => onGuide(u)} aria-label={`Teoria dell’unità ${u.n}`} title="Teoria dell’unità">
                <Icon name="book" size={20} />
              </button>
            </div>
            {!uOpen && (
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <button
                  className="linkbtn"
                  onClick={() => {
                    ask(`Vuoi saltare direttamente all’unità ${u.n}? Potrai comunque tornare alle precedenti.`, 'Salta qui').then(
                      (ok) =>
                        ok &&
                        setState((x) => {
                          if (!x.unlockedUnits.includes(u.id)) x.unlockedUnits.push(u.id);
                        }),
                    );
                  }}
                >
                  Salta qui →
                </button>
              </div>
            )}
            <div className="path" style={{ width: 320, maxWidth: '100%', margin: '0 auto', height: PAD + nodes.length * ROW }}>
              <svg className="trail" viewBox={`0 0 320 ${PAD + nodes.length * ROW}`} aria-hidden>
                <path d={trail} stroke="var(--line-strong)" strokeWidth="7" strokeLinecap="round" strokeDasharray="1 14" fill="none" />
              </svg>
              {nodes.map((n, k) => {
                const isBoss = n.kind === 'boss';
                const done = isBoss ? bossBest >= 0.7 : lessonDone(s, n.lesson!);
                const unlocked = uOpen && (isBoss ? allDone : n.i === 0 || lessonDone(s, u.lessons[n.i - 1]));
                const current = k === curIdx;
                const off = OFFS[n.i % OFFS.length];
                const cls = ['node', isBoss ? 'boss' : '', done ? 'done' : '', !unlocked ? 'locked' : '', current ? 'current' : ''].join(' ');
                const w = isBoss ? 92 : 76;
                return (
                  <Fragment key={n.key}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: PAD + n.i * ROW - 8, height: ROW }}>
                      <button
                        className={cls}
                        style={{ left: 160 + off - w / 2 }}
                        onClick={() => setOpen(open === n.key ? null : n.key)}
                        aria-label={isBoss ? `Test dell’unità ${u.n}` : `Lezione ${n.i + 1}: ${n.lesson!.title}${done ? ', completata' : ''}${!unlocked ? ', bloccata' : ''}`}
                        aria-expanded={open === n.key}
                      >
                        {current && <span className="node-start">{isBoss ? 'Test' : 'Inizia'}</span>}
                        <span className="node-ico" aria-hidden>
                          <NodeGlyph kind={!unlocked ? 'lock' : isBoss ? 'trophy' : done ? 'check' : 'star'} />
                        </span>
                      </button>
                      {current && n.i % 4 !== 0 && (
                        <div className="path-mascot" style={{ left: off > 0 ? 160 + off - 170 : 160 + off + 70, top: -2 }}>
                          <Mascot size={92} mood="read" anim="bob" />
                        </div>
                      )}
                      {open === n.key && (
                        <div className={`popover ${unlocked ? '' : 'locked'}`}>
                          {isBoss ? (
                            <>
                              <h3>Test dell’unità {u.n}</h3>
                              <p>
                                {unlocked
                                  ? `12 domande miste su tutta l’unità. Serve il 70% per superarlo${bossBest ? ` (record ${Math.round(bossBest * 100)}%)` : ''}.`
                                  : 'Completa tutte le lezioni dell’unità per sbloccare il test.'}
                              </p>
                              <button className="btn block" disabled={!unlocked} onClick={() => onBoss(u)}>
                                {done ? 'Rifai il test' : 'Inizia il test'}
                              </button>
                            </>
                          ) : (
                            <>
                              <h3>{n.lesson!.title}</h3>
                              <p>
                                {unlocked
                                  ? `Lezione ${n.i + 1} di ${u.lessons.length} · ${n.lesson!.theory.length} schede di teoria · ${n.lesson!.exercises.length} esercizi${done ? ` · record ${Math.round((s.lessons[n.lesson!.id]?.best ?? 0) * 100)}%` : ''}`
                                  : 'Completa la lezione precedente per sbloccarla.'}
                              </p>
                              <button className="btn block" disabled={!unlocked} onClick={() => onLesson(u, n.lesson!)}>
                                {done ? 'Ripeti (+XP)' : 'Inizia'}
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </section>
        );
      })}
      <div className="empty-state">
        <Mascot mood="grad" size={110} />
        <p>{course.outro}</p>
      </div>

    </div>
  );
}
