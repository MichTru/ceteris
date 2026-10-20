// Componenti per tutti i tipi di esercizio.
// Ogni componente comunica alla sessione se è pronto (ready) e come verificarsi (check).
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Dir, Exercise, FillEx, HotspotEx, MatchEx, MCEx, NumEx, OrderEx, ShiftEx, TFEx } from '../types';
import Scene from '../graphs/scenes';
import { fmt, parseNum, shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';

export interface ExProps<T> {
  ex: T;
  revealed: boolean;
  onReady: (ready: boolean, check: () => boolean) => void;
}

const KIND: Record<Exercise['type'], { label: string; ico: string }> = {
  mc: { label: 'Scegli la risposta', ico: '🔘' },
  tf: { label: 'Vero o falso?', ico: '⚖️' },
  fill: { label: 'Completa la frase', ico: '✏️' },
  match: { label: 'Abbina le coppie', ico: '🧩' },
  order: { label: 'Metti in ordine', ico: '🔢' },
  num: { label: 'Calcola', ico: '🧮' },
  hotspot: { label: 'Tocca il grafico', ico: '👆' },
  shift: { label: 'Sposta le curve', ico: '↔️' },
};

export function kindOf(ex: Exercise) {
  if (ex.type === 'mc' && ex.scenario) return { label: 'Caso d’esame', ico: '💼' };
  return KIND[ex.type];
}

/** Testo da mostrare come "risposta corretta" nel riquadro di feedback. */
export function correctText(ex: Exercise): string {
  switch (ex.type) {
    case 'mc':
      return ex.options[ex.answer];
    case 'tf':
      return ex.answer ? 'Vero' : 'Falso';
    case 'fill':
      return ex.answers.join(' · ');
    case 'match':
      return ex.pairs.map((p) => `${p[0]} → ${p[1]}`).join(' · ');
    case 'order':
      return ex.items.map((it, i) => `${i + 1}. ${it}`).join('  ');
    case 'num':
      return `${ex.shown ?? fmt(ex.answer, 4)}${ex.unit ? ' ' + ex.unit : ''}`;
    case 'hotspot':
      return 'Guarda il punto evidenziato in verde';
    case 'shift': {
      const m = ex.moves;
      const parts: string[] = [];
      const name = (d: Dir) => (d === 'right' ? 'a destra' : 'a sinistra');
      if (m.D) parts.push(`domanda ${name(m.D)}`);
      if (m.O) parts.push(`offerta ${name(m.O)}`);
      return parts.length ? parts.join(' e ') : 'Nessuna curva si sposta';
    }
  }
}

// ---------------- Scelta multipla ----------------
export function MCView({ ex, revealed, onReady }: ExProps<MCEx>) {
  const order = useMemo(() => shuffle(ex.options.map((_, i) => i)), [ex.id]);
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => {
    onReady(sel !== null, () => sel === ex.answer);
  }, [sel]);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (revealed) return;
      const n = Number(e.key);
      if (n >= 1 && n <= order.length) {
        setSel(order[n - 1]);
        sfx.tap();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [order, revealed]);
  return (
    <div>
      {ex.figure && <Scene id={ex.figure} />}
      <div className="options" role="radiogroup">
        {order.map((oi, k) => {
          let cls = 'opt';
          if (revealed && oi === ex.answer) cls += ' right';
          else if (revealed && oi === sel) cls += ' wrong';
          return (
            <button
              key={oi}
              className={cls}
              role="radio"
              aria-checked={sel === oi}
              aria-pressed={!revealed && sel === oi}
              disabled={revealed}
              onClick={() => {
                setSel(oi);
                sfx.tap();
              }}
            >
              <span className="key">{k + 1}</span>
              <span>{ex.options[oi]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------- Vero/Falso ----------------
export function TFView({ ex, revealed, onReady }: ExProps<TFEx>) {
  const [sel, setSel] = useState<boolean | null>(null);
  useEffect(() => {
    onReady(sel !== null, () => sel === ex.answer);
  }, [sel]);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (revealed) return;
      if (e.key === '1' || e.key.toLowerCase() === 'v') setSel(true);
      if (e.key === '2' || e.key.toLowerCase() === 'f') setSel(false);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [revealed]);
  const btn = (v: boolean, label: string, big: string) => {
    let cls = 'opt';
    if (revealed && v === ex.answer) cls += ' right';
    else if (revealed && v === sel) cls += ' wrong';
    return (
      <button
        className={cls}
        aria-pressed={!revealed && sel === v}
        disabled={revealed}
        onClick={() => {
          setSel(v);
          sfx.tap();
        }}
      >
        <span className="big" aria-hidden>
          {big}
        </span>
        {label}
      </button>
    );
  };
  return (
    <div className="tf-grid">
      {btn(true, 'Vero', '👍')}
      {btn(false, 'Falso', '👎')}
    </div>
  );
}

// ---------------- Completa la frase ----------------
export function FillView({ ex, revealed, onReady }: ExProps<FillEx>) {
  const bank = useMemo(() => shuffle([...ex.answers, ...ex.extra]), [ex.id]);
  const [slots, setSlots] = useState<(string | null)[]>(() => ex.answers.map(() => null));
  useEffect(() => {
    onReady(
      slots.every((s) => s !== null),
      () => slots.every((s, i) => s === ex.answers[i]),
    );
  }, [slots]);
  const parts = ex.text.split('___');
  const put = (w: string) => {
    const i = slots.indexOf(null);
    if (i < 0) return;
    const n = slots.slice();
    n[i] = w;
    setSlots(n);
    sfx.tap();
  };
  const remove = (i: number) => {
    const n = slots.slice();
    n[i] = null;
    setSlots(n);
  };
  return (
    <div>
      <p className="fill-text">
        {parts.map((p, i) => (
          <span key={i}>
            {p}
            {i < parts.length - 1 && (
              <span className={`blank ${revealed ? (slots[i] === ex.answers[i] ? 'right' : 'wrong') : ''}`}>
                {slots[i] && (
                  <button className="chip" disabled={revealed} onClick={() => remove(i)}>
                    {slots[i]}
                  </button>
                )}
              </span>
            )}
          </span>
        ))}
      </p>
      <div className="chips">
        {bank.map((w) => (
          <button key={w} className={`chip ${slots.includes(w) ? 'used' : ''}`} disabled={revealed} onClick={() => put(w)}>
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------- Abbinamenti ----------------
export function MatchView({ ex, revealed, onReady }: ExProps<MatchEx>) {
  const left = useMemo(() => shuffle(ex.pairs.map((_, i) => i)), [ex.id]);
  const right = useMemo(() => shuffle(ex.pairs.map((_, i) => i)), [ex.id]);
  const [done, setDone] = useState<number[]>([]);
  const [selL, setSelL] = useState<number | null>(null);
  const [selR, setSelR] = useState<number | null>(null);
  const [bad, setBad] = useState<[number, number] | null>(null);
  const mistakes = useRef(0);

  // le risposte a destra possono ripetersi (es. "Complementari" due volte): si confronta il testo
  const rightText = (i: number) => ex.pairs[i][1];

  useEffect(() => {
    if (selL === null || selR === null) return;
    if (ex.pairs[selL][1] === rightText(selR)) {
      setDone((d) => [...d, selL]);
      setDoneR((d) => [...d, selR]);
      sfx.correct();
    } else {
      mistakes.current += 1;
      setBad([selL, selR]);
      sfx.wrong();
      setTimeout(() => setBad(null), 450);
    }
    setSelL(null);
    setSelR(null);
  }, [selL, selR]);
  const [doneR, setDoneR] = useState<number[]>([]);

  useEffect(() => {
    onReady(done.length === ex.pairs.length, () => mistakes.current === 0);
  }, [done]);

  return (
    <div className="match-grid">
      <div className="match-col">
        {left.map((i) => (
          <button
            key={'l' + i}
            className={`chip ${done.includes(i) ? 'ok' : ''} ${selL === i ? 'sel' : ''} ${bad?.[0] === i ? 'bad' : ''}`}
            disabled={revealed || done.includes(i)}
            onClick={() => {
              setSelL(i);
              sfx.tap();
            }}
          >
            {ex.pairs[i][0]}
          </button>
        ))}
      </div>
      <div className="match-col">
        {right.map((i) => (
          <button
            key={'r' + i}
            className={`chip ${doneR.includes(i) ? 'ok' : ''} ${selR === i ? 'sel' : ''} ${bad?.[1] === i ? 'bad' : ''}`}
            disabled={revealed || doneR.includes(i)}
            onClick={() => {
              setSelR(i);
              sfx.tap();
            }}
          >
            {ex.pairs[i][1]}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------- Ordina ----------------
export function OrderView({ ex, revealed, onReady }: ExProps<OrderEx>) {
  const bank = useMemo(() => {
    let s = shuffle(ex.items.map((_, i) => i));
    // evita di proporre già l'ordine giusto
    if (s.every((v, i) => v === i)) s = s.reverse();
    return s;
  }, [ex.id]);
  const [seq, setSeq] = useState<number[]>([]);
  useEffect(() => {
    onReady(seq.length === ex.items.length, () => seq.every((v, i) => v === i));
  }, [seq]);
  return (
    <div>
      <div className="order-slots">
        {seq.length === 0 && <div className="empty">Tocca gli elementi qui sotto nell’ordine giusto</div>}
        {seq.map((i, k) => (
          <button
            key={i}
            className={`chip ${revealed ? (i === k ? 'ok' : 'bad') : ''}`}
            disabled={revealed}
            onClick={() => setSeq(seq.filter((x) => x !== i))}
          >
            {ex.items[i]}
          </button>
        ))}
      </div>
      <div className="chips">
        {bank.map((i) => (
          <button
            key={i}
            className={`chip ${seq.includes(i) ? 'used' : ''}`}
            disabled={revealed}
            onClick={() => {
              setSeq([...seq, i]);
              sfx.tap();
            }}
          >
            {ex.items[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------- Numerico ----------------
export function NumView({ ex, revealed, onReady }: ExProps<NumEx>) {
  const [val, setVal] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const n = parseNum(val);
  const ok = n !== null && Math.abs(n - ex.answer) <= ex.tol + 1e-9;
  useEffect(() => {
    onReady(n !== null, () => ok);
  }, [val]);
  useEffect(() => {
    // su desktop metti subito il cursore nel campo
    if (window.matchMedia('(pointer: fine)').matches) ref.current?.focus();
  }, [ex.id]);
  return (
    <div>
      <div className="num-wrap">
        <input
          ref={ref}
          className={`num-input ${revealed ? (ok ? 'right' : 'wrong') : ''}`}
          inputMode="decimal"
          autoComplete="off"
          placeholder="?"
          aria-label="La tua risposta"
          value={val}
          disabled={revealed}
          onChange={(e) => setVal(e.target.value)}
        />
        {ex.unit && <span className="num-unit">{ex.unit}</span>}
      </div>
      <p className="hint">
        Puoi usare la virgola o il punto{ex.answer < 0 ? ', e ricordati il segno meno' : ''}. Accetto anche le frazioni come 3/8.
        {ex.hint ? ' ' + ex.hint : ''}
      </p>
    </div>
  );
}

// ---------------- Hotspot ----------------
export function HotspotView({ ex, revealed, onReady }: ExProps<HotspotEx>) {
  const [sel, setSel] = useState<string | null>(null);
  useEffect(() => {
    onReady(sel !== null, () => sel === ex.answer);
  }, [sel]);
  return (
    <Scene
      id={ex.scene}
      interactive
      selected={sel}
      reveal={revealed ? { answer: ex.answer, picked: sel } : null}
      onPick={(id) => {
        setSel(id);
        sfx.tap();
      }}
    />
  );
}

// ---------------- Sposta le curve ----------------
export function ShiftView({ ex, revealed, onReady }: ExProps<ShiftEx>) {
  const [d, setD] = useState<Dir | null>(null);
  const [o, setO] = useState<Dir | null>(null);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    onReady(touched, () => (ex.moves.D ?? null) === d && (ex.moves.O ?? null) === o);
  }, [d, o, touched]);
  const off = (v: Dir | null) => (v === 'right' ? 38 : v === 'left' ? -38 : 0);
  // rette base in pixel (viewBox 320x240)
  const X0 = 44,
    Y0 = 206;
  const D = { x1: 86, y1: 47.1, x2: 268, y2: 196 };
  // le etichette stanno all'inizio delle rette, così non escono dal riquadro
  const O = { x1: 86, y1: 182.9, x2: 268, y2: 34 };
  const inter = (dx: number, ox: number) => {
    // domanda: y = 34 + (x - 70 - dx) * k ; offerta: y = 196 - (x - 70 - ox) * k ; k = 162/198
    const k = 162 / 198;
    const x = (196 - 34 + k * (70 + dx) + k * (70 + ox)) / (2 * k);
    const y = 34 + (x - 70 - dx) * k;
    return { x, y };
  };
  const e0 = inter(0, 0);
  const e1 = inter(off(d), off(o));
  const showD = revealed ? ex.moves.D ?? null : d;
  const showO = revealed ? ex.moves.O ?? null : o;
  const er = inter(off(showD), off(showO));
  const seg = (val: Dir | null, set: (v: Dir | null) => void, label: string) => (
    <div className="seg" role="group" aria-label={label}>
      {(
        [
          ['left', '◀'],
          [null, '•'],
          ['right', '▶'],
        ] as [Dir | null, string][]
      ).map(([v, t]) => (
        <button
          key={String(v)}
          aria-pressed={val === v}
          aria-label={v === 'left' ? 'sinistra' : v === 'right' ? 'destra' : 'ferma'}
          disabled={revealed}
          onClick={() => {
            set(v);
            setTouched(true);
            sfx.tap();
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
  const ok = (ex.moves.D ?? null) === d && (ex.moves.O ?? null) === o;
  return (
    <div>
      <div className="figure">
        <svg viewBox="0 0 320 240" role="img" aria-label="Domanda e offerta" style={{ overflow: 'hidden' }}>
          <path className="scene-axis" d={`M${X0} 14 L${X0} ${Y0} L310 ${Y0}`} />
          <text className="scene-lbl" x={X0 + 6} y={16}>
            Prezzo
          </text>
          <text className="scene-lbl" x={308} y={Y0 + 18} textAnchor="end">
            Quantità
          </text>
          {/* curve iniziali tratteggiate */}
          <line {...D} stroke="#4f46e5" strokeOpacity=".3" strokeWidth="3" strokeDasharray="6 6" />
          <line {...O} stroke="#f05a7e" strokeOpacity=".3" strokeWidth="3" strokeDasharray="6 6" />
          <circle cx={e0.x} cy={e0.y} r="5" fill="var(--ink-3)" />
          {/* curve spostate */}
          <g style={{ transform: `translateX(${off(showD)}px)`, transition: 'transform .5s cubic-bezier(.3,1.4,.5,1)' }}>
            <line {...D} stroke="#4f46e5" strokeWidth="4.5" strokeLinecap="round" />
            <text className="scene-lbl big" x={D.x1 - 4} y={D.y1 - 6} fill="#4f46e5" textAnchor="middle">
              D
            </text>
          </g>
          <g style={{ transform: `translateX(${off(showO)}px)`, transition: 'transform .5s cubic-bezier(.3,1.4,.5,1)' }}>
            <line {...O} stroke="#f05a7e" strokeWidth="4.5" strokeLinecap="round" />
            <text className="scene-lbl big" x={O.x2 + 4} y={O.y2 - 6} fill="#f05a7e" textAnchor="middle">
              O
            </text>
          </g>
          {(showD || showO) && (
            <g>
              <path className="scene-dash" d={`M${X0} ${er.y} H${er.x} V${Y0}`} />
              <circle cx={er.x} cy={er.y} r="7" fill={revealed ? 'var(--ok)' : 'var(--primary)'} />
            </g>
          )}
          {!revealed && touched && (d || o) && <circle cx={e1.x} cy={e1.y} r="7" fill="var(--primary)" />}
        </svg>
      </div>
      <div className="shift-ctrl">
        <div className="shift-row">
          <span className="lbl">
            <i className="sw" style={{ background: '#4f46e5' }} /> Domanda
          </span>
          {seg(d, setD, 'Sposta la domanda')}
        </div>
        <div className="shift-row">
          <span className="lbl">
            <i className="sw" style={{ background: '#f05a7e' }} /> Offerta
          </span>
          {seg(o, setO, 'Sposta l’offerta')}
        </div>
        {!touched && <p className="hint">Usa ◀ ▶ per spostare una curva, • per lasciarla ferma. Se nessuna si muove, tocca • e verifica.</p>}
      </div>
    </div>
  );
}

export function ExerciseView({ ex, revealed, onReady }: ExProps<Exercise>) {
  switch (ex.type) {
    case 'mc':
      return <MCView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'tf':
      return <TFView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'fill':
      return <FillView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'match':
      return <MatchView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'order':
      return <OrderView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'num':
      return <NumView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'hotspot':
      return <HotspotView ex={ex} revealed={revealed} onReady={onReady} />;
    case 'shift':
      return <ShiftView ex={ex} revealed={revealed} onReady={onReady} />;
  }
}

/** Testo della domanda (per fill la consegna è fissa). */
export function questionText(ex: Exercise) {
  if (ex.type === 'fill') return 'Completa con le parole giuste';
  return ex.q;
}
