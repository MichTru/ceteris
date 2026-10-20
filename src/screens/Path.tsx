import { ask } from '../components/Confirm';
import { Fragment, useEffect, useState } from 'react';
import { UNITS } from '../data';
import type { Lesson, Unit } from '../types';
import { setState, today, useStore, type State } from '../engine/store';
import { Sheet, TheoryCard, unitStyle } from '../components/UI';
import Mascot from '../components/Mascot';

const OFFS = [0, 62, 92, 62, 0, -62, -92, -62];
const ROW = 104;
const PAD = 50;

export function isUnitOpen(s: State, u: Unit) {
  if (u.n === 1 || s.unlockedUnits.includes(u.id)) return true;
  const prev = UNITS[u.n - 2];
  return (s.bosses[prev.id]?.best ?? 0) >= 0.7;
}
export const lessonDone = (s: State, l: Lesson) => (s.lessons[l.id]?.done ?? 0) > 0;

export function currentTarget(s: State): { unit: Unit; lesson?: Lesson } | null {
  for (const u of UNITS) {
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
}

export default function Path({ onLesson, onBoss }: Props) {
  const s = useStore((x) => x);
  const [open, setOpen] = useState<string | null>(null);
  const [guide, setGuide] = useState<Unit | null>(null);
  const target = currentTarget(s);
  const todayXp = s.days[today()] ?? 0;

  useEffect(() => {
    // porta in vista la lezione corrente all'apertura
    const el = document.querySelector('.node.current');
    if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.node, .popover')) setOpen(null);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <div className="screen" style={{ paddingTop: 16 }}>
      <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Mascot mood={todayXp >= s.dailyGoal ? 'party' : 'happy'} size={74} anim="bob" />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 21 }}>Ciao {s.name}!</h2>
          <p style={{ color: 'var(--ink-2)', fontSize: 14.5, marginTop: 2 }}>
            {todayXp >= s.dailyGoal
              ? `Obiettivo di oggi raggiunto (${todayXp} XP). Un’altra lezione?`
              : `Oggi ${todayXp} di ${s.dailyGoal} XP. ${target?.lesson ? `Prossima: ${target.lesson.title}.` : target ? 'Ti aspetta il test di unità.' : 'Hai finito tutto il percorso!'}`}
          </p>
        </div>
      </div>

      {UNITS.map((u) => {
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
            <div className={`unit-banner ${uOpen ? '' : 'locked'}`}>
              <div style={{ minWidth: 0 }}>
                <div className="u-kicker">Unità {u.n}</div>
                <h2>{u.title}</h2>
                <div className="u-sub">{u.subtitle}</div>
              </div>
              <button className="guide" onClick={() => setGuide(u)} aria-label={`Teoria dell’unità ${u.n}`} title="Teoria dell’unità">
                📖
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
                        {current && <span className="node-start">{isBoss ? 'TEST' : 'INIZIA'}</span>}
                        <span className="node-ico" aria-hidden>
                          {!unlocked ? '🔒' : isBoss ? '🏆' : done ? '👑' : n.lesson!.icon}
                        </span>
                      </button>
                      {current && n.i % 4 !== 0 && (
                        <div className="path-mascot" style={{ left: off > 0 ? 160 + off - 170 : 160 + off + 70, top: -2 }}>
                          <Mascot size={86} mood="happy" anim="bob" />
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
        <Mascot mood="party" size={90} />
        <p>In fondo al percorso c’è il primo parziale. Ce la fai.</p>
      </div>

      {guide && (
        <Sheet title={`Unità ${guide.n}: teoria`} onClose={() => setGuide(null)} style={unitStyle(guide)}>
          <div className="stack">
            {guide.lessons.flatMap((l) => l.theory.map((t, i) => <TheoryCard key={l.id + i} t={t} />))}
          </div>
        </Sheet>
      )}
    </div>
  );
}
