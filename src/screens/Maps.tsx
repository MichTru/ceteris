// Mappe: mappa concettuale dell'unità, procedure passo-passo, confronti; mappa dell'intero corso.
import { useLayoutEffect, useRef, useState } from 'react';
import type { Course } from '../data';
import { CHAPTERS } from '../data/study';
import { MAPS, type ConceptMap } from '../data/maps';
import { Stage, unitStyle } from '../components/UI';
import { BlockView } from './Chapter';
import type { Block, Unit } from '../types';

const BRANCH = ['#7445e6', '#ff8a00', '#0ea5e9', '#10b981', '#ec4899', '#16163a', '#f59e0b', '#14b8a6', '#ef4444', '#6366f1', '#65a30d', '#a855f7'];

type Path = { k: string; d: string; c: string; w: number };

/** Disegna la mappa: centro, rami colorati, foglie; i collegamenti si calcolano dalle posizioni reali. */
export function ConceptMapView({ map, quiz, colors }: { map: ConceptMap; quiz: boolean; colors?: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Path[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const col = (i: number) => colors?.[i] ?? BRANCH[i % BRANCH.length];

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const measure = () => {
      const R = root.getBoundingClientRect();
      const box = (k: string) => {
        const el = root.querySelector(`[data-k="${k}"]`);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { l: r.left - R.left, t: r.top - R.top, r: r.right - R.left, b: r.bottom - R.top, my: (r.top + r.bottom) / 2 - R.top };
      };
      const c = box('c');
      if (!c) return;
      const out: Path[] = [];
      map.branches.forEach((br, i) => {
        const b = box(`b${i}`);
        if (!b) return;
        if (c.b <= b.t + 1) {
          // centro in alto: tronco verticale a sinistra, poi una curva verso il ramo
          const x0 = c.l + 22;
          out.push({ k: `c-${i}`, d: `M${x0} ${c.b} V${b.my - 16} Q${x0} ${b.my} ${x0 + 16} ${b.my} H${b.l}`, c: col(i), w: 4 });
        } else {
          const x0 = c.r;
          const y0 = (c.t + c.b) / 2;
          const dx = (b.l - x0) / 2;
          out.push({ k: `c-${i}`, d: `M${x0} ${y0} C${x0 + dx} ${y0} ${b.l - dx} ${b.my} ${b.l} ${b.my}`, c: col(i), w: 4 });
        }
        br.leaves.forEach((_, j) => {
          const f = box(`b${i}-${j}`);
          if (!f) return;
          const dx = (f.l - b.r) / 2;
          out.push({ k: `b${i}-${j}`, d: `M${b.r} ${b.my} C${b.r + dx} ${b.my} ${f.l - dx} ${f.my} ${f.l} ${f.my}`, c: col(i), w: 2.5 });
        });
      });
      setPaths(out);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    return () => ro.disconnect();
  }, [map, open, seen, quiz]);

  const tap = (k: string, hasDetail: boolean) => {
    if (quiz && !seen.has(k)) {
      setSeen(new Set(seen).add(k));
      return;
    }
    if (hasDetail) setOpen(open === k ? null : k);
  };

  let n = 0;
  return (
    <div className="cmap" ref={ref}>
      <svg className="cm-lines" aria-hidden>
        {paths.map((p) => (
          <path key={p.k} d={p.d} stroke={p.c} strokeWidth={p.w} pathLength={1} />
        ))}
      </svg>
      <div className="cm-center" data-k="c">
        {map.center}
      </div>
      <div className="cm-branches">
        {map.branches.map((br, i) => (
          <div key={i} className="cm-row" style={{ ['--bc' as any]: col(i) }}>
            <div className="cm-node b" data-k={`b${i}`} style={{ ['--d' as any]: `${0.08 + i * 0.07}s` }}>
              {br.label}
            </div>
            <div className="cm-leaves">
              {br.leaves.map((lf, j) => {
                const k = `b${i}-${j}`;
                const hidden = quiz && !seen.has(k);
                const isOpen = open === k && !hidden;
                n++;
                return (
                  <button
                    key={j}
                    data-k={k}
                    className={`cm-node l ${hidden ? 'hidden' : ''} ${lf.detail ? 'has-detail' : ''} ${isOpen ? 'open' : ''}`}
                    style={{ ['--d' as any]: `${0.2 + n * 0.025}s` }}
                    onClick={() => tap(k, !!lf.detail)}
                    aria-expanded={lf.detail && !hidden ? isOpen : undefined}
                    aria-label={hidden ? 'Nodo nascosto: tocca per scoprirlo' : undefined}
                  >
                    <span className="cm-label">{hidden ? '?' : lf.label}</span>
                    {isOpen && <span className="cm-detail">{lf.detail}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mappa di tutto il corso: le unità e i loro rami principali. */
export function courseMap(course: Course): ConceptMap {
  return {
    center: course.title,
    branches: course.units.map((u) => ({
      label: u.title,
      leaves: (MAPS[u.id]?.branches ?? []).map((b) => ({ label: b.label })),
    })),
  };
}

type View = 'map' | 'flow' | 'table';

export default function Maps({ course, unit, onExit }: { course: Course; unit?: Unit; onExit: () => void }) {
  const map = unit ? MAPS[unit.id] : courseMap(course);
  const ch = unit ? CHAPTERS[unit.id] : undefined;
  const pick = (t: Block['t']) =>
    (ch?.sections ?? []).flatMap((s) => s.blocks.filter((b) => b.t === t).map((b) => ({ sec: s.title, b })));
  const flows = pick('flow');
  const tables = pick('table');
  const [view, setView] = useState<View>('map');
  const [quiz, setQuiz] = useState(false);
  const [round, setRound] = useState(0);

  return (
    <div className="session intro-mode tone-lilac maps" style={unit ? unitStyle(unit) : undefined}>
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Chiudi">
          ✕
        </button>
      </div>
      <div className="session-body">
        <Stage title={unit ? unit.title : 'Mappa del corso'} sub={unit ? `Unità ${unit.n} · ${course.title}` : course.title}>
          {unit && (flows.length > 0 || tables.length > 0) && (
            <div className="course-switch on-stage" role="tablist" aria-label="Tipo di mappa">
              <button role="tab" aria-selected={view === 'map'} className={view === 'map' ? 'on' : ''} onClick={() => setView('map')}>
                Concetti
              </button>
              {flows.length > 0 && (
                <button role="tab" aria-selected={view === 'flow'} className={view === 'flow' ? 'on' : ''} onClick={() => setView('flow')}>
                  Procedure
                </button>
              )}
              {tables.length > 0 && (
                <button role="tab" aria-selected={view === 'table'} className={view === 'table' ? 'on' : ''} onClick={() => setView('table')}>
                  Confronti
                </button>
              )}
            </div>
          )}
        </Stage>

        {view === 'map' && map && (
          <>
            {unit && (
              <div className="cm-tools">
                <button
                  className={`cm-quiz ${quiz ? 'on' : ''}`}
                  onClick={() => {
                    setQuiz(!quiz);
                    setRound(round + 1);
                  }}
                  aria-pressed={quiz}
                >
                  {quiz ? 'Mostra tutto' : 'Mettiti alla prova'}
                </button>
              </div>
            )}
            <ConceptMapView key={round} map={map} quiz={quiz} colors={unit ? undefined : course.units.map((u) => u.color)} />
          </>
        )}

        {view === 'flow' &&
          flows.map(({ sec, b }, i) => (
            <section key={i} className="map-block">
              <h2>{(b as { title?: string }).title ?? sec}</h2>
              <BlockView b={{ ...(b as any), title: undefined }} />
            </section>
          ))}

        {view === 'table' &&
          tables.map(({ sec, b }, i) => (
            <section key={i} className="map-block">
              <h2>{sec}</h2>
              <BlockView b={b} />
            </section>
          ))}
      </div>
    </div>
  );
}
