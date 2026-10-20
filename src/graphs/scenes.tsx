// Grafici economici in SVG. Ogni scena ha "hotspot" toccabili usati negli esercizi.
import type { ReactNode } from 'react';
import type { SceneId } from '../types';

const W = 320;
const H = 246;
const X0 = 44;
const Y0 = 206;
const X1 = 304;
const Y1 = 20;

type HotState = 'idle' | 'sel' | 'right' | 'wrong';

interface SceneProps {
  id: SceneId;
  selected?: string | null;
  onPick?: (id: string) => void;
  /** Dopo la verifica: id corretto e id scelto. */
  reveal?: { answer: string; picked: string | null } | null;
  interactive?: boolean;
}

/** Converte coordinate "dati" (0..1) in pixel. */
const px = (x: number) => X0 + x * (X1 - X0);
const py = (y: number) => Y0 - y * (Y0 - Y1);

function Axes({ xl, yl }: { xl: string; yl: string }) {
  const grid = [];
  for (let i = 1; i <= 5; i++) {
    grid.push(<line key={'gx' + i} className="scene-grid" x1={px(i / 5)} x2={px(i / 5)} y1={Y0} y2={Y1} />);
    grid.push(<line key={'gy' + i} className="scene-grid" x1={X0} x2={X1} y1={py(i / 5)} y2={py(i / 5)} />);
  }
  return (
    <g>
      {grid}
      <path className="scene-axis" d={`M${X0} ${Y1 - 6} L${X0} ${Y0} L${X1 + 6} ${Y0}`} />
      <path d={`M${X0 - 4} ${Y1} L${X0} ${Y1 - 8} L${X0 + 4} ${Y1} Z`} fill="var(--ink-2)" />
      <path d={`M${X1} ${Y0 - 4} L${X1 + 8} ${Y0} L${X1} ${Y0 + 4} Z`} fill="var(--ink-2)" />
      <text className="scene-lbl" x={X0 + 6} y={Y1 - 4}>
        {yl}
      </text>
      <text className="scene-lbl" x={X1 + 4} y={Y0 + 31} textAnchor="end">
        {xl}
      </text>
    </g>
  );
}

function pathFrom(points: [number, number][]) {
  return points.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
}

/** Campiona una funzione y=f(x) in coordinate dati -> path. */
function fn(f: (x: number) => number, x0: number, x1: number, xMax: number, yMax: number, steps = 60) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const y = f(x);
    if (y > yMax * 1.02 || y < 0) continue;
    pts.push([px(x / xMax), py(y / yMax)]);
  }
  return pathFrom(pts);
}

interface HotDef {
  id: string;
  /** Forma visibile. */
  vis: ReactNode;
  /** Area di tocco (più grande). */
  hit: ReactNode;
  label: string;
}

function Hot({ h, state, onPick, interactive }: { h: HotDef; state: HotState; onPick?: (id: string) => void; interactive?: boolean }) {
  return (
    <g
      className={`hot ${state}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : -1}
      aria-label={h.label}
      aria-pressed={interactive ? state === 'sel' : undefined}
      onClick={() => interactive && onPick?.(h.id)}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onPick?.(h.id);
        }
      }}
      style={{ cursor: interactive ? 'pointer' : 'default' }}
    >
      {h.vis}
      {h.hit}
    </g>
  );
}

// Il verde e il rosso "pieni" sono riservati a giusto/sbagliato: le curve usano altri colori.
const C = {
  d: '#4f46e5', // domanda
  o: '#f05a7e', // offerta
  r: '#f59e0b', // ricavo marginale / CMF
  c: '#c026d3', // costo marginale
  m: '#0ea5e9', // costo medio totale
  k: '#8b5cf6', // costo medio variabile
  n: '#64748b', // neutro
};

function lineHot(id: string, label: string, x1: number, y1: number, x2: number, y2: number, color: string): HotDef {
  return {
    id,
    label,
    vis: <line className="vis ln" x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />,
    hit: <line className="hit" x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="26" stroke="transparent" />,
  };
}

function pathHot(id: string, label: string, d: string, color: string, width = 4): HotDef {
  return {
    id,
    label,
    vis: <path className="vis ln" d={d} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" />,
    hit: <path className="hit" d={d} strokeWidth="24" stroke="transparent" fill="none" />,
  };
}

function ptHot(id: string, label: string, x: number, y: number, color = 'var(--ink)'): HotDef {
  return {
    id,
    label,
    vis: <circle className="vis pt pulse-pt" cx={x} cy={y} r="7" fill="var(--card)" stroke={color} strokeWidth="3.5" />,
    hit: <circle className="hit" cx={x} cy={y} r="20" />,
  };
}

function areaHot(id: string, label: string, pts: [number, number][], color: string): HotDef {
  const d = pathFrom(pts) + ' Z';
  return {
    id,
    label,
    vis: <path className="vis area" d={d} fill={color} opacity="0.28" />,
    hit: <path className="hit" d={d} />,
  };
}

// ---------- definizioni delle scene ----------

function scene(id: SceneId): { content: ReactNode; hots: HotDef[]; front?: ReactNode } {
  switch (id) {
    case 'domanda-offerta': {
      const D: [number, number, number, number] = [px(0.06), py(0.92), px(0.9), py(0.1)];
      const O: [number, number, number, number] = [px(0.06), py(0.1), px(0.9), py(0.92)];
      const E = [px(0.48), py(0.51)];
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="Prezzo" />
            <path className="scene-dash" d={`M${X0} ${E[1]} H${E[0]} V${Y0}`} />
            <text className="scene-lbl big" x={X0 - 6} y={E[1] + 4} textAnchor="end">
              P*
            </text>
            <text className="scene-lbl big" x={E[0]} y={Y0 + 16} textAnchor="middle">
              Q*
            </text>
            <text className="scene-lbl big" x={D[2] + 4} y={D[3] - 6} fill={C.d}>
              D
            </text>
            <text className="scene-lbl big" x={O[2] + 4} y={O[3] + 4} fill={C.o}>
              O
            </text>
          </g>
        ),
        hots: [lineHot('D', 'Curva di domanda', ...D, C.d), lineHot('O', 'Curva di offerta', ...O, C.o), ptHot('E', 'Punto di incrocio', E[0], E[1])],
      };
    }
    case 'surplus': {
      const a: [number, number] = [px(0), py(0.92)];
      const e: [number, number] = [px(0.46), py(0.5)];
      const b: [number, number] = [px(0), py(0.08)];
      const p: [number, number] = [px(0), py(0.5)];
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="Prezzo" />
            <path className="scene-dash" d={`M${e[0]} ${e[1]} V${Y0}`} />
            <line x1={a[0]} y1={a[1]} x2={px(0.92)} y2={py(0.08)} stroke={C.d} strokeWidth="4" strokeLinecap="round" />
            <line x1={b[0]} y1={b[1]} x2={px(0.92)} y2={py(0.92)} stroke={C.o} strokeWidth="4" strokeLinecap="round" />
            <line x1={p[0]} y1={p[1]} x2={px(0.98)} y2={p[1]} stroke="var(--ink-3)" strokeWidth="2" strokeDasharray="6 5" />
            <text className="scene-lbl big" x={X0 - 6} y={p[1] + 4} textAnchor="end">
              P*
            </text>
            <text className="scene-lbl big" x={px(0.93)} y={py(0.06)} fill={C.d}>
              D
            </text>
            <text className="scene-lbl big" x={px(0.93)} y={py(0.95)} fill={C.o}>
              O
            </text>
          </g>
        ),
        hots: [
          areaHot('cs', 'Area sopra il prezzo e sotto la domanda', [a, e, p], C.d),
          areaHot('ps', 'Area sotto il prezzo e sopra l’offerta', [p, e, b], C.o),
          ptHot('E', 'Equilibrio', e[0], e[1]),
        ],
      };
    }
    case 'monopolio': {
      // domanda P = 1 - Q (in unità del grafico), R' = 1 - 2Q, C' = 0.3 costante
      const c = 0.3;
      const qm = (1 - c) / 2; // 0.35
      const pm = 1 - qm; // 0.65
      const qc = 1 - c; // 0.7
      const sx = (q: number) => px(q * 0.92 + 0.02);
      const sy = (p: number) => py(p * 0.92 + 0.02);
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="Prezzo" />
            <line x1={sx(0)} y1={sy(1)} x2={sx(1)} y2={sy(0)} stroke={C.d} strokeWidth="4" strokeLinecap="round" />
            <line x1={sx(0)} y1={sy(1)} x2={sx(0.5)} y2={sy(0)} stroke={C.r} strokeWidth="4" strokeLinecap="round" />
            <line x1={sx(0)} y1={sy(c)} x2={sx(1)} y2={sy(c)} stroke={C.c} strokeWidth="4" strokeLinecap="round" />
            <path className="scene-dash" d={`M${X0} ${sy(pm)} H${sx(qm)} V${Y0}`} />
            <text className="scene-lbl big" x={sx(1)} y={sy(0) - 8} fill={C.d} textAnchor="end">
              D
            </text>
            <text className="scene-lbl big" x={sx(0.5) + 4} y={sy(0) - 8} fill={C.r}>
              R’
            </text>
            <text className="scene-lbl big" x={sx(1)} y={sy(c) - 8} fill={C.c} textAnchor="end">
              C’ = CM
            </text>
            <text className="scene-lbl big" x={X0 - 6} y={sy(pm) + 4} textAnchor="end">
              Pm
            </text>
            <text className="scene-lbl big" x={sx(qm)} y={Y0 + 16} textAnchor="middle">
              Qm
            </text>
            <text className="scene-lbl big" x={sx(qc)} y={Y0 + 16} textAnchor="middle">
              Qc
            </text>
            <path className="scene-dash" d={`M${sx(qc)} ${sy(c)} V${Y0}`} />
          </g>
        ),
        hots: [
          areaHot('rc', 'Rettangolo tra prezzo e costo', [[sx(0), sy(pm)], [sx(qm), sy(pm)], [sx(qm), sy(c)], [sx(0), sy(c)]], C.r),
          areaHot('dwl', 'Triangolo tra domanda e costo marginale', [[sx(qm), sy(pm)], [sx(qc), sy(c)], [sx(qm), sy(c)]], C.k),
          ptHot('pc', 'Incrocio tra domanda e costo marginale', sx(qc), sy(c), C.c),
          ptHot('pm', 'Punto sulla domanda sopra R’ = C’', sx(qm), sy(pm), C.d),
        ],
      };
    }
    case 'costi-bp':
    case 'conc-perfetta-lp': {
      const F = 8;
      const cmv = (q: number) => 4 - 0.9 * q + 0.09 * q * q;
      const cmt = (q: number) => cmv(q) + F / q;
      const cm = (q: number) => 4 - 1.8 * q + 0.27 * q * q;
      const qmin = 6.17;
      const ymin = cmt(qmin);
      const xMax = 10;
      const yMax = 8;
      const P = (q: number, y: number): [number, number] => [px(q / xMax), py(y / yMax)];
      const [mx, my] = P(qmin, ymin);
      if (id === 'conc-perfetta-lp') {
        return {
          content: (
            <g>
              <Axes xl="Quantità" yl="€" />
              <path d={fn(cmt, 1.1, 9, xMax, yMax)} stroke={C.m} strokeWidth="4" fill="none" />
              <path d={fn(cm, 0.6, 8.4, xMax, yMax)} stroke={C.c} strokeWidth="4" fill="none" />
              <line x1={X0} y1={my} x2={X1} y2={my} stroke={C.d} strokeWidth="4" />
              <path className="scene-dash" d={`M${mx} ${my} V${Y0}`} />
              <text className="scene-lbl big" x={px(0.05)} y={my - 8} fill={C.d}>
                P = R’
              </text>
              <text className="scene-lbl big" x={px(0.915)} y={py(cmt(9) / yMax) + 4} fill={C.m}>
                CMT
              </text>
              <text className="scene-lbl big" x={px(0.86)} y={py(0.97)} fill={C.c}>
                C’
              </text>
              <text className="scene-lbl big" x={mx} y={Y0 + 16} textAnchor="middle">
                Q
              </text>
            </g>
          ),
          hots: [ptHot('eq', 'Punto di tangenza tra prezzo e CMT', mx, my)],
        };
      }
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="€ per unità" />
            <text className="scene-lbl big" x={px(0.915)} y={py(F / 9 / yMax) + 4} fill={C.r}>
              CMF
            </text>
            <text className="scene-lbl big" x={px(0.915)} y={py(cmt(9) / yMax) + 2} fill={C.m}>
              CMT
            </text>
            <text className="scene-lbl big" x={px(0.915)} y={py(cmv(9) / yMax) + 8} fill={C.k}>
              CMV
            </text>
            <text className="scene-lbl big" x={px(0.86)} y={py(0.97)} fill={C.c}>
              C’
            </text>
          </g>
        ),
        hots: [
          pathHot('cmf', 'Curva sempre decrescente', fn((q) => F / q, 1.05, 9, xMax, yMax), C.r),
          pathHot('cmv', 'Curva a U più bassa', fn(cmv, 0.4, 9, xMax, yMax), C.k),
          pathHot('cm', 'Curva che risale più ripida', fn(cm, 0.6, 8.4, xMax, yMax), C.c),
          { ...pathHot('cmt', 'Curva a U più alta', fn(cmt, 1.1, 9, xMax, yMax), C.m), id: 'cmt-line' },
          ptHot('min', 'Punto dove C’ incrocia il CMT', mx, my),
        ],
      };
    }
    case 'engel': {
      const p1: [number, number] = [px(0), py(0)];
      const a: [number, number] = [px(0.2), py(0)];
      const b: [number, number] = [px(0.5), py(0.72)];
      const c: [number, number] = [px(0.72), py(0.72)];
      const d: [number, number] = [px(0.98), py(0.3)];
      return {
        content: (
          <g>
            <Axes xl="Reddito" yl="Quantità" />
            {[
              [a, 'Y1'],
              [b, 'Y2'],
              [c, 'Y3'],
            ].map(([pt, l]) => (
              <g key={l as string}>
                <path className="scene-dash" d={`M${(pt as number[])[0]} ${(pt as number[])[1]} V${Y0}`} />
                <text className="scene-lbl big" x={(pt as number[])[0]} y={Y0 + 16} textAnchor="middle">
                  {l as string}
                </text>
              </g>
            ))}
          </g>
        ),
        hots: [
          lineHot('ins', 'Primo tratto, a zero', p1[0] + 2, p1[1] - 3, a[0], a[1] - 3, C.d),
          lineHot('norm', 'Tratto crescente', a[0], a[1], b[0], b[1], C.d),
          lineHot('sat', 'Tratto piatto in alto', b[0], b[1], c[0], c[1], C.d),
          lineHot('inf', 'Tratto decrescente', c[0], c[1], d[0], d[1], C.d),
        ],
      };
    }
    case 'prodotto': {
      const pm = [0, 4, 7, 10, 12, 13.4, 14.17, 14.43, 14.13, 13.44, 12.5, 11.55, 10.67];
      const pp = [0, 4, 10, 16, 18, 19, 18, 16, 12, 8, 4, 2, 1];
      const xMax = 12.5;
      const yMax = 21;
      const pts = (arr: number[]) => arr.map((v, i) => [px(i / xMax), py(v / yMax)] as [number, number]).slice(1);
      // spline di Catmull-Rom: curva morbida che passa per tutti i punti della tabella
      const smooth = (p: [number, number][]) => {
        let d = `M${p[0][0]} ${p[0][1]}`;
        for (let i = 0; i < p.length - 1; i++) {
          const p0 = p[Math.max(0, i - 1)];
          const p1 = p[i];
          const p2 = p[i + 1];
          const p3 = p[Math.min(p.length - 1, i + 2)];
          const c1x = p1[0] + (p2[0] - p0[0]) / 6;
          const c1y = p1[1] + (p2[1] - p0[1]) / 6;
          const c2x = p2[0] - (p3[0] - p1[0]) / 6;
          const c2y = p2[1] - (p3[1] - p1[1]) / 6;
          d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
        }
        return d;
      };
      const cross: [number, number] = [px(7.35 / xMax), py(14.45 / yMax)];
      const maxP: [number, number] = [px(5 / xMax), py(19 / yMax)];
      return {
        content: (
          <g>
            <Axes xl="Lavoratori (L)" yl="Tavoli" />
            <path d={smooth(pts(pp))} stroke={C.o} strokeWidth="4" fill="none" />
            <path d={smooth(pts(pm))} stroke={C.d} strokeWidth="4" fill="none" />
            <text className="scene-lbl big" x={px(11.6 / xMax)} y={py(3 / yMax)} fill={C.o}>
              P’
            </text>
            <text className="scene-lbl big" x={px(11.6 / xMax)} y={py(13 / yMax)} fill={C.d}>
              PM
            </text>
            {[2, 4, 6, 8, 10, 12].map((n) => (
              <text key={n} className="scene-lbl" x={px(n / xMax)} y={Y0 + 14} textAnchor="middle">
                {n}
              </text>
            ))}
          </g>
        ),
        hots: [ptHot('maxP', 'Punto più alto della curva P’', maxP[0], maxP[1]), ptHot('cross', 'Incrocio tra P’ e PM', cross[0], cross[1]), ptHot('neg', 'Punto finale della curva P’', px(11 / xMax), py(2 / yMax))],
      };
    }
    case 'elasticita-lineare': {
      const a: [number, number] = [px(0.02), py(0.96)];
      const m: [number, number] = [px(0.48), py(0.49)];
      const b: [number, number] = [px(0.94), py(0.02)];
      const k = 0.06;
      const before: [number, number] = [a[0] + (m[0] - a[0]) * (1 - k * 2), a[1] + (m[1] - a[1]) * (1 - k * 2)];
      const after: [number, number] = [m[0] + (b[0] - m[0]) * k * 2, m[1] + (b[1] - m[1]) * k * 2];
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="Prezzo" />
            <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="var(--line-strong)" strokeWidth="4" />
          </g>
        ),
        hots: [
          lineHot('elastic', 'Tratto in alto a sinistra', a[0], a[1], before[0], before[1], C.n),
          lineHot('inelastic', 'Tratto in basso a destra', after[0], after[1], b[0], b[1], C.n),
          ptHot('unit', 'Punto medio della retta', m[0], m[1]),
        ],
      };
    }
    case 'cournot': {
      const s = (v: number) => v * 0.9;
      const P = (a: number, b: number): [number, number] => [px(s(a)), py(s(b))];
      const cn = P(1 / 3, 1 / 3);
      const sa = P(1 / 2, 1 / 4);
      const sb = P(1 / 4, 1 / 2);
      const pw = P(1 / 2, 1 / 2);
      const fa1 = P(1 / 2, 0);
      const fa2 = P(0, 1);
      const fb1 = P(0, 1 / 2);
      const fb2 = P(1, 0);
      return {
        content: (
          <g>
            <Axes xl="qA" yl="qB" />
            <line x1={fa1[0]} y1={fa1[1]} x2={fa2[0]} y2={fa2[1]} stroke={C.d} strokeWidth="4" />
            <line x1={fb1[0]} y1={fb1[1]} x2={fb2[0]} y2={fb2[1]} stroke={C.o} strokeWidth="4" />
            <text className="scene-lbl big" x={fa2[0] + 8} y={fa2[1] + 6} fill={C.d}>
              FRA
            </text>
            <text className="scene-lbl big" x={fb2[0]} y={fb2[1] - 10} fill={C.o} textAnchor="end">
              FRB
            </text>
            {[
              [1 / 4, '¼'],
              [1 / 3, '⅓'],
              [1 / 2, '½'],
              [1, '1'],
            ].map(([v, l]) => (
              <g key={l as string}>
                <text className="scene-lbl" x={px(s(v as number))} y={Y0 + 14} textAnchor="middle">
                  {l as string}
                </text>
                {(v === 1 / 2 || v === 1) && (
                  <text className="scene-lbl" x={X0 - 8} y={py(s(v as number)) + 4} textAnchor="end">
                    {l as string}
                  </text>
                )}
              </g>
            ))}
          </g>
        ),
        hots: [ptHot('cn', 'Incrocio delle due funzioni di reazione', cn[0], cn[1]), ptHot('sa', 'Punto su FRB con qA = ½', sa[0], sa[1], C.o), ptHot('sb', 'Punto su FRA con qB = ½', sb[0], sb[1], C.d), ptHot('pw', 'Punto (½, ½)', pw[0], pw[1], 'var(--ink-3)')],
      };
    }
    case 'smiling': {
      const f = (x: number) => 0.2 + 2.6 * (x - 0.5) * (x - 0.5);
      const d = fn(f, 0.04, 0.96, 1, 1);
      const zone = (id: string, label: string, x0: number, x1: number, color: string): HotDef => {
        const pts: [number, number][] = [];
        for (let i = 0; i <= 20; i++) {
          const x = x0 + ((x1 - x0) * i) / 20;
          pts.push([px(x), py(f(x))]);
        }
        pts.push([px(x1), Y0], [px(x0), Y0]);
        return areaHot(id, label, pts, color);
      };
      return {
        content: (
          <g>
            <Axes xl="" yl="Valore aggiunto" />
            <text className="scene-lbl big" x={px(0.17)} y={Y0 + 15} textAnchor="middle">
              R&amp;S
              <tspan x={px(0.17)} dy="13">design</tspan>
            </text>
            <text className="scene-lbl big" x={px(0.5)} y={Y0 + 15} textAnchor="middle">
              Produzione
            </text>
            <text className="scene-lbl big" x={px(0.83)} y={Y0 + 15} textAnchor="middle">
              Marketing
              <tspan x={px(0.83)} dy="13">servizi</tspan>
            </text>
          </g>
        ),
        front: <path d={d} stroke={C.d} strokeWidth="4" fill="none" pointerEvents="none" />,
        hots: [zone('rd', 'Fase a monte', 0.04, 0.33, C.m), zone('prod', 'Fase centrale', 0.34, 0.66, C.r), zone('mkt', 'Fase a valle', 0.67, 0.96, C.k)],
      };
    }
    case 'conc-monopolistica': {
      const cmt = (q: number) => 2 + 0.08 * (q - 7) ** 2;
      const dem = (q: number) => 4.64 - 0.48 * q;
      const rm = (q: number) => 4.64 - 0.96 * q;
      const cm = (q: number) => cmt(q) + 0.16 * q * (q - 7);
      const xMax = 10;
      const yMax = 6;
      const P = (q: number, y: number): [number, number] => [px(q / xMax), py(y / yMax)];
      const tan = P(4, cmt(4));
      const rc = P(4, rm(4));
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="€" />
            <path d={fn(dem, 0, 9.6, xMax, yMax)} stroke={C.d} strokeWidth="4" fill="none" />
            <path d={fn(rm, 0, 4.8, xMax, yMax)} stroke={C.r} strokeWidth="4" fill="none" />
            <path d={fn(cmt, 0.8, 9.9, xMax, yMax)} stroke={C.m} strokeWidth="4" fill="none" />
            <path d={fn(cm, 1.4, 9.2, xMax, yMax)} stroke={C.c} strokeWidth="4" fill="none" />
            <path className="scene-dash" d={`M${tan[0]} ${tan[1]} V${Y0}`} />
            <text className="scene-lbl big" x={px(0.95)} y={py(0.17)} fill={C.d} textAnchor="end">
              D
            </text>
            <text className="scene-lbl big" x={px(0.5)} y={py(0.05)} fill={C.r}>
              R’
            </text>
            <text className="scene-lbl big" x={px(0.1)} y={py(0.92)} fill={C.m}>
              CMT
            </text>
            <text className="scene-lbl big" x={px(0.93)} y={py(0.92)} fill={C.c} textAnchor="end">
              C’
            </text>
          </g>
        ),
        hots: [ptHot('rc', 'Incrocio tra R’ e C’', rc[0], rc[1]), ptHot('tan', 'Punto dove CMT tocca la domanda', tan[0], tan[1])],
      };
    }
    case 'ricavi-costi-totali': {
      const ct = [10, 25, 36, 44, 51, 59, 69, 81, 95, 111, 129];
      const rt = [0, 21, 40, 57, 72, 85, 96, 105, 112, 117, 120];
      const xMax = 10.5;
      const yMax = 135;
      const P = (q: number, y: number): [number, number] => [px(q / xMax), py(y / yMax)];
      const line = (arr: number[]) => pathFrom(arr.map((v, i) => P(i, v)));
      const bar = (id: string, q: number, label: string): HotDef => {
        const [x, ya] = P(q, rt[q]);
        const yb = P(q, ct[q])[1];
        return {
          id,
          label,
          vis: <line className="vis ln" x1={x} y1={Math.min(ya, yb)} x2={x} y2={Math.max(ya, yb)} stroke="var(--ink-3)" strokeWidth="4" strokeDasharray="2 5" strokeLinecap="round" />,
          hit: <rect className="hit" x={x - 13} y={Math.min(ya, yb) - 10} width="26" height={Math.abs(ya - yb) + 20} />,
        };
      };
      return {
        content: (
          <g>
            <Axes xl="Tavoli" yl="€" />
            <path d={line(rt)} stroke={C.d} strokeWidth="4" fill="none" />
            <path d={line(ct)} stroke={C.o} strokeWidth="4" fill="none" />
            <text className="scene-lbl big" x={P(10, 120)[0]} y={P(10, 120)[1] + 16} fill={C.d} textAnchor="end">
              RT
            </text>
            <text className="scene-lbl big" x={P(9.4, 129)[0]} y={P(9.4, 129)[1]} fill={C.o} textAnchor="end">
              CT
            </text>
            {[2, 4, 6, 8, 10].map((n) => (
              <text key={n} className="scene-lbl" x={px(n / xMax)} y={Y0 + 14} textAnchor="middle">
                {n}
              </text>
            ))}
          </g>
        ),
        hots: [bar('q2', 2, 'Distanza a 2 tavoli'), bar('qstar', 6, 'Distanza a 6 tavoli'), bar('q9', 9, 'Distanza a 9 tavoli')],
      };
    }
    case 'cmlp': {
      const f = (x: number) => 0.25 + 1.4 * (x - 0.55) * (x - 0.55);
      const sr = (c: number, w: number) => (x: number) => f(c) + 0.02 + 6 * (x - c) * (x - c) * w;
      const zone = (id: string, label: string, x0: number, x1: number): HotDef => pathHot(id, label, fn(f, x0, x1, 1, 1, 30), C.d, 5);
      const sem: [number, number] = [px(0.55), py(f(0.55))];
      return {
        content: (
          <g>
            <Axes xl="Quantità" yl="Costo medio" />
            {[0.2, 0.42, 0.68, 0.88].map((c) => (
              <path key={c} d={fn(sr(c, 1), c - 0.16, c + 0.16, 1, 1, 30)} stroke="var(--line-strong)" strokeWidth="2.5" fill="none" />
            ))}
            <text className="scene-lbl big" x={px(0.97)} y={py(f(0.97)) - 8} fill={C.d} textAnchor="end">
              CMLP
            </text>
          </g>
        ),
        hots: [zone('eco', 'Tratto decrescente', 0.04, 0.49), zone('dis', 'Tratto crescente', 0.61, 0.98), ptHot('sem', 'Punto più basso', sem[0], sem[1])],
      };
    }
  }
}

export default function Scene({ id, selected, onPick, reveal, interactive }: SceneProps) {
  const { content, hots, front } = scene(id);
  const stateOf = (hid: string): HotState => {
    if (reveal) {
      if (hid === reveal.answer) return 'right';
      if (hid === reveal.picked) return 'wrong';
      return 'idle';
    }
    return selected === hid ? 'sel' : 'idle';
  };
  return (
    <div className="figure">
      <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Grafico">
        {content}
        {hots.map((h) => (
          <Hot key={h.id} h={h} state={stateOf(h.id)} onPick={onPick} interactive={interactive && !reveal} />
        ))}
        {front}
      </svg>
    </div>
  );
}
