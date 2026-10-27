// Palestra di Metodi Matematici: esercizi generati con numeri sempre nuovi.
// Ogni generatore restituisce un esercizio già risolto (risposta + spiegazione dei passaggi).
import type { Exercise, Step, StepsEx } from '../types';
import { fmt } from './utils';

// ---------- utilità ----------
const ri = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];
const nz = (a: number, b: number) => {
  let v = 0;
  while (v === 0) v = ri(a, b);
  return v;
};
const sgn = (n: number) => (Math.random() < 0.5 ? -n : n);

/** Numero all'italiana con il segno meno tipografico. */
export const N = (n: number, d = 4) => fmt(Math.abs(n) < 1e-12 ? 0 : n, d).replace('-', '−');

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
const SUB: Record<string, string> = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
const sup = (n: number) => String(n).split('').map((c) => SUP[c] ?? c).join('');
const sub = (n: number) => String(n).split('').map((c) => SUB[c] ?? c).join('');

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
/** Frazione ridotta come testo ("3/8", "−1/2", "4"). */
function F(p: number, q: number) {
  if (q < 0) {
    p = -p;
    q = -q;
  }
  const g = gcd(p, q) || 1;
  p /= g;
  q /= g;
  return q === 1 ? N(p) : `${p < 0 ? '−' : ''}${Math.abs(p)}/${q}`;
}

/** Polinomio dai coefficienti, dal grado più alto: [2, −7, −4] → "2x² − 7x − 4". */
function P(c: number[], v = 'x') {
  const deg = c.length - 1;
  let out = '';
  c.forEach((a, i) => {
    const e = deg - i;
    if (a === 0) return;
    const abs = Math.abs(a);
    const coef = e > 0 && abs === 1 ? '' : N(abs);
    const pow = e === 0 ? '' : e === 1 ? v : v + sup(e);
    const t = coef + pow;
    if (!out) out = (a < 0 ? '−' : '') + t;
    else out += (a < 0 ? ' − ' : ' + ') + t;
  });
  return out || '0';
}
const lin = (a: number, b: number) => P([a, b]);
/** Coefficiente davanti a una potenza: 1·x² → x². */
const co = (a: number, pow: string) => (a === 1 ? pow : a === -1 ? '−' + pow : N(a) + pow);
/** "p/q = ridotta", senza ripetere se è già ridotta. */
const eqF = (p: number, q: number) => (`${N(p)}/${q}` === F(p, q) ? F(p, q) : `${N(p)}/${q} = ${F(p, q)}`);
const evalP = (c: number[], x: number) => c.reduce((s, a) => s * x + a, 0);
const derP = (c: number[]) => c.slice(0, -1).map((a, i) => a * (c.length - 1 - i));
const par = (n: number) => (n < 0 ? `(${N(n)})` : N(n));

/** Sistema i segni nati dalla sostituzione dei numeri: "+ −3" → "− 3", "− −3" → "+ 3". */
const clean = (t: string) => t.replace(/\+ −(?=\d)/g, '− ').replace(/− −(?=\d)/g, '+ ').replace(/− \+/g, '−');
const cleanAll = <T,>(o: T): T => JSON.parse(JSON.stringify(o), (_k, v) => (typeof v === 'string' ? clean(v) : v));

let seq = 0;
const id = (t: string) => `gen-${t}-${Date.now().toString(36)}-${seq++}`;

function num(topic: string, q: string, answer: number, explain: string, o: { tol?: number; shown?: string; unit?: string; scenario?: string } = {}): Exercise {
  return cleanAll({ id: id(topic), type: 'num', topic, q, answer, tol: o.tol ?? (Number.isInteger(answer) ? 0 : 0.005), shown: o.shown, unit: o.unit, scenario: o.scenario, explain });
}
function mc(topic: string, q: string, options: string[], explain: string): Exercise {
  return cleanAll({ id: id(topic), type: 'mc', topic, q, options, answer: 0, explain });
}
function steps(topic: string, q: string, st: Step[], explain: string, scenario?: string): StepsEx {
  return cleanAll({ id: id(topic), type: 'steps', topic, q, steps: st, explain, scenario });
}
const sNum = (q: string, answer: number, explain: string, o: { tol?: number; shown?: string; unit?: string } = {}): Step => ({
  q,
  kind: 'num',
  answer,
  tol: o.tol ?? (Number.isInteger(answer) ? 0 : 0.005),
  shown: o.shown,
  unit: o.unit,
  explain,
});
const sMc = (q: string, options: string[], explain: string): Step => ({ q, kind: 'mc', answer: 0, options, explain });

// ---------- generatori per argomento ----------

function domini(): Exercise {
  const a = ri(1, 6);
  const c = pick([1, 1, 2, 3]);
  const inner = c === 1 ? `x − ${a}` : `${c}x − ${c * a}`;
  const cases: (() => Exercise)[] = [
    () => mc('Domini', `Qual è il dominio di f(x) = √(${inner})?`, [`[${a}, +∞)`, `(${a}, +∞)`, `(−∞, ${a}]`, 'ℝ'], `Radice pari: ${inner} ≥ 0 ⇒ x ≥ ${a}. L’estremo è incluso perché √0 esiste.`),
    () => mc('Domini', `Qual è il dominio di f(x) = ln(${inner})?`, [`(${a}, +∞)`, `[${a}, +∞)`, '(0, +∞)', `ℝ \\ {${a}}`], `Argomento del logaritmo strettamente positivo: ${inner} > 0 ⇒ x > ${a}.`),
    () => mc('Domini', `Qual è il dominio di f(x) = 1/(${inner})?`, [`ℝ \\ {${a}}`, `(${a}, +∞)`, `ℝ \\ {−${a}}`, 'ℝ'], `Il denominatore non può essere 0: ${inner} ≠ 0 ⇒ x ≠ ${a}.`),
    () => mc('Domini', `Qual è il dominio di f(x) = √(${a} − x)?`, [`(−∞, ${a}]`, `[${a}, +∞)`, `(−∞, ${a})`, `ℝ \\ {${a}}`], `${a} − x ≥ 0 ⇒ x ≤ ${a}.`),
    () => mc('Domini', `Qual è il dominio di f(x) = ln(x² − ${a * a})?`, [`x < −${a} oppure x > ${a}`, `−${a} < x < ${a}`, `x > ${a}`, `ℝ \\ {−${a}, ${a}}`], `x² − ${a * a} > 0 ⇒ x² > ${a * a} ⇒ x < −${a} o x > ${a} (valori esterni alle radici).`),
    () => mc('Domini', `Qual è il dominio di f(x) = √(x² − ${a * a})?`, [`x ≤ −${a} oppure x ≥ ${a}`, `x < −${a} oppure x > ${a}`, `−${a} ≤ x ≤ ${a}`, `x ≥ ${a}`], `x² − ${a * a} ≥ 0: valori esterni, estremi inclusi perché la radice di 0 esiste.`),
    () => mc('Domini', `Qual è il dominio di f(x) = 1/(x² − ${a * a})?`, [`ℝ \\ {−${a}, ${a}}`, `ℝ \\ {${a}}`, `x > ${a}`, a > 1 ? `ℝ \\ {${a * a}}` : 'ℝ \\ {0}'], `x² − ${a * a} ≠ 0 ⇒ x ≠ ±${a}.`),
    () => mc('Domini', `Qual è il dominio di f(x) = √(x² + ${a})?`, ['ℝ', `x ≥ −${a}`, `x ≥ ${a}`, `ℝ \\ {−${a}}`], `x² + ${a} ≥ ${a} > 0 per ogni x: la radice esiste sempre.`),
  ];
  return pick(cases)();
}

function esplog(): Exercise {
  const b = pick([2, 2, 3, 5, 10]);
  const kMax = b === 2 ? 6 : b === 3 ? 4 : 3;
  const k = ri(1, kMax);
  const B = b ** k;
  const cases: (() => Exercise)[] = [
    () => num('Logaritmi', `Calcola log${sub(b)} ${B}.`, k, `${b}${sup(k)} = ${B}, quindi log${sub(b)} ${B} = ${k}.`),
    () => num('Logaritmi', `Calcola log${sub(b)} (1/${B}).`, -k, `1/${B} = ${b}${sup(-k)}, quindi il logaritmo vale −${k}.`),
    () => num('Esponenziali', `Risolvi ${b}ˣ = ${B}. (x = ?)`, k, `${B} = ${b}${sup(k)}: stessa base ⇒ x = ${k}.`),
    () => {
      const c = nz(-3, 3);
      return num('Esponenziali', `Risolvi ${b}^(x ${c > 0 ? '+' : '−'} ${Math.abs(c)}) = ${B}. (x = ?)`, k - c, `${B} = ${b}${sup(k)} ⇒ x ${c > 0 ? '+' : '−'} ${Math.abs(c)} = ${k} ⇒ x = ${N(k - c)}.`);
    },
    () => {
      const i = ri(1, k);
      const m = b ** i;
      const n = b ** (k - i + 1);
      return num('Proprietà dei logaritmi', `Calcola log${sub(b)} ${m} + log${sub(b)} ${n}.`, k + 1, `Somma di logaritmi = logaritmo del prodotto: log${sub(b)} ${m * n} = ${k + 1} (oppure ${i} + ${k - i + 1}).`);
    },
    () => {
      const n = pick([2, 3, 5, 7]);
      return num('Proprietà dei logaritmi', `Calcola log${sub(b)} ${B * n} − log${sub(b)} ${n}.`, k, `Differenza = logaritmo del quoziente: log${sub(b)} (${B * n}/${n}) = log${sub(b)} ${B} = ${k}.`);
    },
    () => num('Logaritmi', `Risolvi log${sub(b)} x = ${k}. (x = ?)`, B, `Per definizione x = ${b}${sup(k)} = ${B}.`),
    () => {
      const e = ri(2, 3);
      return num('Proprietà dei logaritmi', `Calcola log${sub(b)} (${b}${sup(k)})${sup(e)}.`, k * e, `Potenza di potenza: ${b}${sup(k * e)}, quindi il logaritmo vale ${k} · ${e} = ${k * e}.`);
    },
    () => {
      const x = ri(2, 6);
      if (k < 2) return esplog();
      return num('Logaritmi', `Calcola e^(ln ${x}) + ln(e${sup(k)}).`, x + k, `Esponenziale e logaritmo si annullano: e^(ln ${x}) = ${x} e ln(e${sup(k)}) = ${k}. Totale ${x + k}.`);
    },
  ];
  return pick(cases)();
}

function rette(): Exercise {
  const m = nz(-5, 6);
  const q = ri(-8, 8);
  const cases: (() => Exercise)[] = [
    () => {
      const x0 = ri(-4, 5);
      return num('Valore di una funzione', `f(x) = ${lin(m, q)}. Quanto vale f(${x0})?`, m * x0 + q, `Sostituisco: ${N(m)} · ${par(x0)} ${q < 0 ? '−' : '+'} ${Math.abs(q)} = ${N(m * x0 + q)}.`);
    },
    () => {
      const z = ri(-5, 5);
      const mm = nz(2, 6);
      return num('Zeri', `In quale x si annulla f(x) = ${lin(mm, -mm * z)}?`, z, `${lin(mm, -mm * z)} = 0 ⇒ ${mm}x = ${N(mm * z)} ⇒ x = ${N(z)}.`);
    },
    () => {
      const x = ri(-4, 6);
      const y = m * x + q;
      return num('Inversa', `f(x) = ${lin(m, q)}. Quanto vale f⁻¹(${N(y)})?`, x, `Cerco x con ${lin(m, q)} = ${N(y)}: ${N(m)}x = ${N(y - q)} ⇒ x = ${N(x)}. Oppure f⁻¹(y) = (y ${q < 0 ? '+' : '−'} ${Math.abs(q)})/${par(m)}.`);
    },
    () => {
      const mm = pick([2, 3, 4, 5, 8, -2, -4]);
      return num('Inversa', `f(x) = ${lin(mm, q)}. Qual è il coefficiente angolare dell’inversa?`, 1 / mm, `L’inversa di mx + q ha pendenza 1/m = ${F(1, mm)}.`, { shown: F(1, mm) });
    },
    () => {
      const x = ri(-4, 6);
      const m1 = nz(-4, 5);
      let m2 = nz(-4, 5);
      while (m2 === m1) m2 = nz(-4, 5);
      const q1 = ri(-6, 6);
      const q2 = m1 * x + q1 - m2 * x;
      return num('Intersezione di rette', `In quale x si incontrano y = ${lin(m1, q1)} e y = ${lin(m2, q2)}?`, x, `${lin(m1, q1)} = ${lin(m2, q2)} ⇒ ${N(m1 - m2)}x = ${N(q2 - q1)} ⇒ x = ${N(x)}.`);
    },
    () => {
      const x1 = ri(-3, 2);
      const x2 = x1 + ri(1, 4);
      const c = [nz(-3, 3), ri(-4, 4), ri(-5, 5)];
      const r = (evalP(c, x2) - evalP(c, x1)) / (x2 - x1);
      return num('Rapporto incrementale', `f(x) = ${P(c)}. Rapporto incrementale tra x₁ = ${N(x1)} e x₂ = ${N(x2)}?`, r, `[f(${N(x2)}) − f(${N(x1)})] / (${N(x2)} − ${par(x1)}) = (${N(evalP(c, x2))} − ${par(evalP(c, x1))}) / ${x2 - x1} = ${N(r)}.`, { shown: F(evalP(c, x2) - evalP(c, x1), x2 - x1) });
    },
  ];
  return pick(cases)();
}

function successioni(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const a = ri(-5, 9);
      const d = nz(-4, 6);
      const n = ri(6, 20);
      return num('Progressione aritmetica', `Progressione aritmetica con primo termine ${N(a)} e ragione ${N(d)}. Quanto vale s${sub(n)}?`, a + (n - 1) * d, `s_n = a + (n − 1)d = ${N(a)} + ${n - 1} · ${par(d)} = ${N(a + (n - 1) * d)}.`);
    },
    () => {
      const a = ri(1, 5);
      const q = pick([2, 3, -2]);
      const n = ri(3, q === 3 ? 5 : 6);
      return num('Progressione geometrica', `Progressione geometrica con primo termine ${a} e ragione ${N(q)}. Quanto vale s${sub(n)}?`, a * q ** (n - 1), `s_n = a · qⁿ⁻¹ = ${a} · ${par(q)}${sup(n - 1)} = ${N(a * q ** (n - 1))}.`);
    },
    () => {
      const C = pick([1000, 2000, 2500, 5000]);
      const r = pick([2, 3, 4, 5]);
      const n = ri(2, 6);
      return num('Interesse semplice', `Capitale ${N(C)} €, interesse semplice del ${r}% annuo. Montante dopo ${n} anni?`, C * (1 + (n * r) / 100), `S = C(1 + n·r) = ${N(C)} · (1 + ${n} · ${N(r / 100)}) = ${N(C * (1 + (n * r) / 100))} €.`, { unit: '€' });
    },
    () => {
      const C = pick([1000, 2000, 5000]);
      const r = pick([5, 10]);
      const n = ri(2, 3);
      const v = Math.round(C * (1 + r / 100) ** n * 100) / 100;
      return num('Interesse composto', `Capitale ${N(C)} €, interesse composto del ${r}% annuo. Montante dopo ${n} anni?`, v, `S = C(1 + r)ⁿ = ${N(C)} · ${N(1 + r / 100)}${sup(n)} = ${N(v)} €.`, { unit: '€', tol: 0.01 });
    },
    () => {
      const a = nz(-6, 6);
      const b = ri(-5, 5);
      const c = nz(1, 5);
      const d = ri(1, 6);
      return num('Limite di successione', `lim (n → ∞) (${lin(a, b).replace(/x/g, 'n')})/(${lin(c, d).replace(/x/g, 'n')}) = ?`, a / c, `Stesso grado: rapporto dei coefficienti di n, ${N(a)}/${c} = ${F(a, c)}.`, { shown: F(a, c) });
    },
    () => {
      const a = ri(-3, 8);
      const d = nz(-5, 6);
      const k = ri(4, 9);
      return num('Progressione aritmetica', `Progressione aritmetica: s₁ = ${N(a)} e s${sub(k)} = ${N(a + (k - 1) * d)}. Qual è la ragione d?`, d, `s${sub(k)} − s₁ = ${k - 1}d ⇒ d = ${N((k - 1) * d)}/${k - 1} = ${N(d)}.`);
    },
  ];
  return pick(cases)();
}

function limiti(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const a = nz(-6, 6);
      const d = nz(1, 5);
      const b = ri(-5, 5);
      const e = ri(1, 9);
      return num('Limiti ∞/∞', `lim (x → +∞) (${P([a, b, ri(-4, 4)])})/(${P([d, 0, e])}) = ?`, a / d, `Stesso grado (2): rapporto dei coefficienti direttivi ${N(a)}/${d} = ${F(a, d)}.`, { shown: F(a, d) });
    },
    () => {
      const a = nz(-5, 5);
      const b = nz(-5, 5);
      if (a + b === 0) return limiti();
      return num('Limiti 0/0', `lim (x → ${N(a)}) (${P([1, b - a, -a * b])})/(${lin(1, -a)}) = ?`, a + b, `0/0: scompongo il numeratore (x ${a > 0 ? '−' : '+'} ${Math.abs(a)})(x ${b < 0 ? '−' : '+'} ${Math.abs(b)}), semplifico e resta x ${b < 0 ? '−' : '+'} ${Math.abs(b)} → ${N(a)} ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${N(a + b)}.`);
    },
    () => {
      const a = ri(1, 6);
      return num('Limiti 0/0', `lim (x → ${a}) (x² − ${a * a})/(x − ${a}) = ?`, 2 * a, `(x − ${a})(x + ${a})/(x − ${a}) = x + ${a} → ${2 * a}. Con De l’Hôpital: 2x/1 → ${2 * a}.`);
    },
    () => {
      const s = pick([1, -1]);
      const top = P([s * ri(1, 4), ri(-3, 3), 0, ri(-5, 5)]);
      const bot = P([ri(1, 4), 0, ri(1, 6)]);
      return mc('Limiti ∞/∞', `lim (x → +∞) (${top})/(${bot}) = ?`, s > 0 ? ['+∞', '−∞', '0', '1'] : ['−∞', '+∞', '0', '−1'], `Il grado del numeratore (3) supera quello del denominatore (2): il limite è infinito, con il segno del coefficiente direttivo del numeratore.`);
    },
    () => {
      const top = P([ri(1, 5), ri(-4, 4)]);
      const bot = P([ri(1, 4), ri(-3, 3), ri(1, 6)]);
      return mc('Limiti ∞/∞', `lim (x → +∞) (${top})/(${bot}) = ?`, ['0', '+∞', '1', 'Non esiste'], 'Il grado del denominatore è maggiore: il rapporto tende a 0.');
    },
    () => {
      const a = nz(-3, 4);
      const b = nz(-5, 5);
      if (b === a) return limiti();
      return steps('Asintoti', `Trova gli asintoti di f(x) = (${P([a, b, 0])})/(x + 1).`, [
        sNum('Asintoto verticale: x = ?', -1, 'Il denominatore si annulla in x = −1 e lì il numeratore non è 0: f → ±∞.'),
        sMc('Esiste un asintoto orizzontale?', ['No: per x → ∞ f tende a ∞', 'Sì: y = 0', `Sì: y = ${N(a)}`, a === 1 ? 'Sì: y = −1' : 'Sì: y = 1'], 'Grado del numeratore 2, del denominatore 1: f → ∞, quindi si cerca l’obliquo.'),
        sNum('Asintoto obliquo: m = lim f(x)/x = ?', a, `f(x)/x = (${P([a, b, 0])})/(x² + x) → ${N(a)} (rapporto dei coefficienti direttivi).`),
        sNum('q = lim [f(x) − mx] = ?', b - a, `f(x) − ${N(a)}x = (${P([a, b, 0])} − ${N(a)}x² − ${N(a)}x)/(x + 1) = ${N(b - a)}x/(x + 1) → ${N(b - a)}.`),
      ], `Asintoti: x = −1 e y = ${lin(a, b - a)}.`);
    },
    () => {
      const a = nz(-6, 6);
      const c = nz(1, 4);
      const d = nz(-6, 6);
      const b = ri(-5, 5);
      if (a * d === b * c) return limiti();
      return steps('Asintoti', `Trova gli asintoti di f(x) = (${lin(a, b)})/(${lin(c, d)}).`, [
        sNum('Asintoto verticale: x = ?', -d / c, `${lin(c, d)} = 0 ⇒ x = ${F(-d, c)}.`, { shown: F(-d, c) }),
        sNum('Asintoto orizzontale: y = ?', a / c, `Per x → ∞ stesso grado: ${N(a)}/${c} = ${F(a, c)}.`, { shown: F(a, c) }),
      ], `Asintoti x = ${F(-d, c)} e y = ${F(a, c)}; niente obliquo, perché c’è già l’orizzontale.`);
    },
    () => {
      const x0 = ri(-2, 3);
      const m = nz(-4, 5);
      const k = m * x0 - x0 * x0;
      return num('Continuità', `f(x) = x² + k per x ≤ ${N(x0)} e f(x) = ${lin(m, 0)} per x > ${N(x0)}. Per quale k f è continua?`, k, `Serve uguaglianza dei due pezzi in x = ${N(x0)}: ${N(x0 * x0)} + k = ${N(m * x0)} ⇒ k = ${N(k)}.`);
    },
  ];
  return pick(cases)();
}

function derivate(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const c = [ri(-3, 3), ri(-4, 4), ri(-6, 6), ri(-9, 9)];
      if (c[0] === 0) c[0] = 1;
      const x0 = ri(-2, 2);
      const d = derP(c);
      return num('Derivate di polinomi', `f(x) = ${P(c)}. Quanto vale f′(${N(x0)})?`, evalP(d, x0), `f′(x) = ${P(d)} ⇒ f′(${N(x0)}) = ${N(evalP(d, x0))}.`);
    },
    () => {
      const a = nz(-3, 3);
      const b = ri(-3, 3);
      const n = pick([2, 3, 4]);
      const x0 = ri(-1, 2);
      const v = n * a * (a * x0 + b) ** (n - 1);
      return num('Derivata della composta', `f(x) = (${lin(a, b)})${sup(n)}. Quanto vale f′(${N(x0)})?`, v, `Catena: f′ = ${n}(${lin(a, b)})${sup(n - 1)} · ${par(a)}. In ${N(x0)}: ${n} · ${par(a * x0 + b)}${sup(n - 1)} · ${par(a)} = ${N(v)}.`);
    },
    () => {
      const a = nz(1, 5);
      const x0 = ri(0, 3);
      const b = ri(1, 6);
      const den = a * x0 + b;
      return num('Derivata della composta', `f(x) = ln(${lin(a, b)}). Quanto vale f′(${x0})?`, a / den, `f′ = ${a}/(${lin(a, b)}) ⇒ f′(${x0}) = ${eqF(a, den)}.`, { shown: F(a, den) });
    },
    () => {
      const c = nz(-5, 6);
      return num('Regola del prodotto', `f(x) = (x² ${c < 0 ? '−' : '+'} ${Math.abs(c)}) · eˣ. Quanto vale f′(0)?`, c, `f′ = 2x·eˣ + (x² ${c < 0 ? '−' : '+'} ${Math.abs(c)})·eˣ. In 0: 0 + ${N(c)} · 1 = ${N(c)}.`);
    },
    () => {
      const a = nz(-4, 4);
      const b = ri(-4, 4);
      const c = nz(1, 3);
      const d = nz(-4, 4);
      const x0 = ri(0, 2);
      const den = c * x0 + d;
      if (den === 0 || a * d === b * c) return derivate();
      return num('Regola del quoziente', `f(x) = (${lin(a, b)})/(${lin(c, d)}). Quanto vale f′(${x0})?`, (a * d - b * c) / den ** 2, `Quoziente: f′ = [${N(a)}(${lin(c, d)}) − ${par(c)}(${lin(a, b)})]/(${lin(c, d)})² = ${N(a * d - b * c)}/(${lin(c, d)})². In ${x0}: ${eqF(a * d - b * c, den * den)}.`, { shown: F(a * d - b * c, den * den) });
    },
    () => {
      const s = ri(1, 4);
      const a = nz(1, 4);
      const x0 = ri(0, 3);
      const b = s * s - a * x0;
      return num('Derivata della composta', `f(x) = √(${lin(a, b)}). Quanto vale f′(${x0})?`, a / (2 * s), `f′ = ${a}/(2√(${lin(a, b)})). In ${x0}: ${a}/(2 · √${s * s}) = ${eqF(a, 2 * s)}.`, { shown: F(a, 2 * s) });
    },
    () => {
      const a = nz(-5, 6);
      const n = ri(2, 5);
      return num('Regola del prodotto', `f(x) = ${N(a)}x${sup(n)} · ln x. Quanto vale f′(1)?`, a, `f′ = ${N(a)}(${n}x${sup(n - 1)} ln x + x${sup(n)} · 1/x). In 1: ln 1 = 0, resta ${N(a)} · 1 = ${N(a)}.`);
    },
    () => {
      const c = [ri(1, 3), ri(-4, 4), ri(-5, 5), ri(-5, 5)];
      const x0 = ri(-2, 2);
      const d2 = derP(derP(c));
      return num('Derivata seconda', `f(x) = ${P(c)}. Quanto vale f″(${N(x0)})?`, evalP(d2, x0), `f′ = ${P(derP(c))}, f″ = ${P(d2)} ⇒ f″(${N(x0)}) = ${N(evalP(d2, x0))}.`);
    },
    () => {
      const k = nz(-4, 5);
      return num('Derivata della composta', `f(x) = e^(${N(k)}x). Quanto vale f′(0)?`, k, `f′ = ${N(k)}·e^(${N(k)}x) ⇒ f′(0) = ${N(k)}.`);
    },
  ];
  return pick(cases)();
}

function tangente(): Exercise {
  const cubic = Math.random() < 0.4;
  const c = cubic ? [1, ri(-3, 3), ri(-4, 4), ri(-5, 5)] : [nz(-3, 3), ri(-6, 6), ri(-6, 6)];
  const x0 = ri(-2, 3);
  const y0 = evalP(c, x0);
  const m = evalP(derP(c), x0);
  const q = y0 - m * x0;
  return steps('Retta tangente', `Trova la retta tangente al grafico di f(x) = ${P(c)} nel punto x₀ = ${N(x0)}.`, [
    sNum(`f(${N(x0)}) = ?`, y0, `Sostituisco x = ${N(x0)} in f: il punto di tangenza è (${N(x0)}, ${N(y0)}).`),
    sNum(`f′(${N(x0)}) = ? (pendenza della tangente)`, m, `f′(x) = ${P(derP(c))} ⇒ f′(${N(x0)}) = ${N(m)}.`),
    sNum('La tangente è y = mx + q: quanto vale q?', q, `y = f′(x₀)(x − x₀) + f(x₀) = ${N(m)}(x − ${par(x0)}) + ${par(y0)} ⇒ q = ${N(y0)} − ${par(m)}·${par(x0)} = ${N(q)}.`),
  ], `Tangente: y = ${lin(m, q)}.`);
}

function studio(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const a = sgn(ri(1, 3));
      const xv = ri(-4, 4);
      const c = ri(-6, 6);
      const co = [a, -2 * a * xv, c];
      return steps('Massimi e minimi', `Studia i punti stazionari di f(x) = ${P(co)}.`, [
        sNum('f′(x) = 0 per x = ?', xv, `f′(x) = ${P(derP(co))} = 0 ⇒ x = ${N(xv)}.`),
        sMc(`Che punto è x = ${N(xv)}?`, a > 0 ? ['Minimo', 'Massimo', 'Flesso orizzontale', 'Punto angoloso'] : ['Massimo', 'Minimo', 'Flesso orizzontale', 'Punto angoloso'], `f″ = ${2 * a} ${a > 0 ? '> 0 ⇒ minimo' : '< 0 ⇒ massimo'}.`),
        sNum(`Valore f(${N(xv)}) = ?`, evalP(co, xv), `Sostituisco: f(${N(xv)}) = ${N(evalP(co, xv))}.`),
      ], `Vertice (${N(xv)}, ${N(evalP(co, xv))}).`);
    },
    () => {
      const k = ri(1, 3);
      const c = ri(-5, 5);
      const co = [1, 0, -3 * k * k, c];
      return steps('Massimi e minimi', `Studia massimi, minimi e flessi di f(x) = ${P(co)}.`, [
        sNum('Punto stazionario positivo: x = ?', k, `f′(x) = 3x² − ${3 * k * k} = 0 ⇒ x² = ${k * k} ⇒ x = ±${k}.`),
        sMc(`Che punto è x = −${k}?`, ['Massimo locale', 'Minimo locale', 'Flesso orizzontale', 'Non è stazionario'], `f″(x) = 6x ⇒ f″(−${k}) = −${6 * k} < 0: massimo.`),
        sNum(`Valore del massimo f(−${k}) = ?`, 2 * k ** 3 + c, `−${k ** 3} + ${3 * k ** 3} ${c < 0 ? '−' : '+'} ${Math.abs(c)} = ${N(2 * k ** 3 + c)}.`),
        sNum('Ascissa del flesso: x = ?', 0, 'f″(x) = 6x = 0 ⇒ x = 0, e f″ cambia segno.'),
      ], `Massimo in (−${k}, ${N(2 * k ** 3 + c)}), minimo in (${k}, ${N(-2 * k ** 3 + c)}), flesso in (0, ${N(c)}).`);
    },
    () => {
      const p = nz(-3, 3);
      const c = ri(-5, 5);
      const co = [1, -3 * p, 0, c];
      return num('Flessi', `f(x) = ${P(co)}. Ascissa del punto di flesso?`, p, `f′ = ${P(derP(co))}, f″ = ${P(derP(derP(co)))} = 0 ⇒ x = ${N(p)}.`);
    },
    () => {
      const h = ri(1, 4);
      const a = h - ri(1, 3);
      const b = h + ri(2, 4);
      const co = [1, -2 * h, 0];
      const vals = [a, h, b].map((x) => evalP(co, x));
      return steps('Massimi e minimi assoluti', `f(x) = ${P(co)} sull’intervallo [${N(a)}, ${N(b)}]: trova massimo e minimo assoluti.`, [
        sNum('Punto stazionario interno: x = ?', h, `f′ = 2x − ${2 * h} = 0 ⇒ x = ${h}.`),
        sNum(`f(${N(a)}) = ?`, vals[0], `Valore nell’estremo sinistro: ${N(vals[0])}.`),
        sNum(`f(${N(b)}) = ?`, vals[2], `Valore nell’estremo destro: ${N(vals[2])}.`),
        sNum('Massimo assoluto = ?', Math.max(...vals), `Confronto f(${N(a)}) = ${N(vals[0])}, f(${h}) = ${N(vals[1])}, f(${N(b)}) = ${N(vals[2])}: il più grande è ${N(Math.max(...vals))}.`),
        sNum('Minimo assoluto = ?', Math.min(...vals), `Il più piccolo è f(${h}) = ${N(vals[1])}.`),
      ], 'Su [a, b] i candidati sono i punti stazionari interni e gli estremi.');
    },
    () => {
      const a = nz(-2, 2);
      const b = ri(1, 5);
      const x1 = ri(-2, 1);
      const x2 = x1 + 2 * ri(1, 2);
      const co = [a, b, ri(-3, 3)];
      const c = (x1 + x2) / 2;
      return num('Teorema di Lagrange', `f(x) = ${P(co)} su [${N(x1)}, ${N(x2)}]. Trova il punto c di Lagrange.`, c, `[f(${N(x2)}) − f(${N(x1)})]/(${N(x2)} − ${par(x1)}) = ${N((evalP(co, x2) - evalP(co, x1)) / (x2 - x1))} = f′(c) = ${N(2 * a)}c + ${b} ⇒ c = ${N(c)}.`);
    },
  ];
  return pick(cases)();
}

function integrali(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const a = nz(-4, 6);
      const b = ri(-5, 5);
      const k = ri(1, 4);
      const v = (a * k * k) / 2 + b * k;
      return num('Integrale definito', `∫₀^${k} (${lin(a, b)}) dx = ?`, v, `Primitiva ${N(a / 2)}x² ${b < 0 ? '−' : '+'} ${Math.abs(b)}x. Calcolo in ${k} e in 0: ${N(v)}.`, { shown: F(a * k * k + 2 * b * k, 2) });
    },
    () => {
      const a = ri(-2, 1);
      const b = a + ri(1, 3);
      return num('Integrale definito', `∫ da ${N(a)} a ${N(b)} di x² dx = ?`, (b ** 3 - a ** 3) / 3, `[x³/3] = (${N(b ** 3)} − ${par(a ** 3)})/3 = ${F(b ** 3 - a ** 3, 3)}.`, { shown: F(b ** 3 - a ** 3, 3) });
    },
    () => {
      const k = ri(1, 3);
      return steps('Integrale e area', `f(x) = x³ sull’intervallo [−${k}, ${k}].`, [
        sNum(`∫ da −${k} a 0 di x³ dx = ?`, -(k ** 4) / 4, `[x⁴/4] da −${k} a 0 = 0 − ${k ** 4}/4. Negativo: x³ < 0 a sinistra di 0.`, { shown: F(-(k ** 4), 4) }),
        sNum(`∫ da −${k} a ${k} di x³ dx = ?`, 0, 'Le due parti si compensano: −A + A = 0.'),
        sNum('Area totale tra il grafico e l’asse x = ?', k ** 4 / 2, `Spezzo in 0 e sommo i valori assoluti: ${F(k ** 4, 4)} + ${F(k ** 4, 4)} = ${F(k ** 4, 2)}.`, { shown: F(k ** 4, 2) }),
      ], 'L’integrale tiene conto del segno, l’area no.');
    },
    () => {
      const k = ri(2, 5);
      return num('Integrale definito', `∫ da 1 a e${sup(k)} di 1/x dx = ?`, k, `[ln x] = ln e${sup(k)} − ln 1 = ${k} − 0 = ${k}.`);
    },
    () => {
      const a = ri(-3, 4);
      const b = ri(-3, 4);
      const c = ri(-4, 5);
      return num('Integrale definito', `∫₀¹ (${P([3 * a, 2 * b, c])}) dx = ?`, a + b + c, `Primitiva ${P([a, b, c, 0])}; in 1 vale ${N(a + b + c)}, in 0 vale 0.`);
    },
    () => {
      const a = nz(-3, 4);
      const b = ri(-4, 4);
      const c = ri(-5, 5);
      const k = ri(1, 3);
      const v = (a * k * k) / 2 + b * k + c;
      return num('Primitive', `F′(x) = ${lin(a, b)} e F(0) = ${N(c)}. Quanto vale F(${k})?`, v, `F(x) = ${N(a / 2)}x² ${b < 0 ? '−' : '+'} ${Math.abs(b)}x + c, con F(0) = c = ${N(c)}. F(${k}) = ${N(v)}.`, { shown: F(a * k * k + 2 * b * k + 2 * c, 2) });
    },
    () => {
      const c = ri(2, 6);
      return num('Integrale definito', `∫₀¹ ${c}eˣ dx = ? (due decimali)`, c * (Math.E - 1), `[${c}eˣ]₀¹ = ${c}(e − 1) ≈ ${N(c * (Math.E - 1), 2)}.`, { tol: 0.01, shown: `${c}(e − 1) ≈ ${N(c * (Math.E - 1), 2)}` });
    },
    () => {
      const k = ri(2, 3);
      return mc('Per parti', `∫ x·e^(${k}x) dx = ?`, [`e^(${k}x)(x/${k} − 1/${k * k}) + c`, `x·e^(${k}x)/${k} + c`, `e^(${k}x)(x − 1) + c`, `${k}x·e^(${k}x) + c`], `Per parti con f = x, g′ = e^(${k}x), g = e^(${k}x)/${k}: x·e^(${k}x)/${k} − ∫ e^(${k}x)/${k} dx = x·e^(${k}x)/${k} − e^(${k}x)/${k * k}.`);
    },
  ];
  return pick(cases)();
}

function economia(): Exercise {
  const cases: (() => Exercise)[] = [
    () => {
      const v = ri(2, 12);
      const p = v + pick([2, 4, 5, 8, 10]);
      const xs = pick([50, 80, 100, 120, 150, 200]);
      const Fc = (p - v) * xs;
      const x1 = xs + pick([30, 50, 100]);
      return steps('Punto di pareggio', `Un’impresa vende a ${p} € al pezzo. Costo C(x) = ${v}x + ${N(Fc)}.`, [
        sNum('Profitto: P(x) = mx − F. Quanto vale m?', p - v, `P(x) = R − C = ${p}x − ${v}x − ${N(Fc)} = ${p - v}x − ${N(Fc)}.`),
        sNum('Punto di pareggio x* = ?', xs, `P(x*) = 0 ⇒ x* = ${N(Fc)}/${p - v} = ${xs}.`),
        sNum(`Profitto con ${x1} pezzi = ?`, (p - v) * x1 - Fc, `${p - v} · ${x1} − ${N(Fc)} = ${N((p - v) * x1 - Fc)} €.`, { unit: '€' }),
      ], 'Sotto il pareggio si perde, sopra si guadagna.');
    },
    () => {
      const a = pick([0.5, 1, 2, 0.25]);
      const xs = pick([10, 20, 30, 40]);
      const v = ri(2, 10);
      const p = v + 2 * a * xs;
      const Fc = Math.max(20, Math.round((a * xs * xs * pick([0.2, 0.4, 0.5, 0.6])) / 10) * 10);
      const Pmax = a * xs * xs - Fc;
      return steps('Massimo profitto', `R(x) = ${N(p)}x e C(x) = ${N(Fc)} + ${v}x + ${co(a, 'x²')}. Trova il massimo profitto.`, [
        sNum('P′(x) = 0 per x = ?', xs, `P = ${N(p - v)}x − ${co(a, 'x²')} − ${N(Fc)}; P′ = ${N(p - v)} − ${co(2 * a, 'x')} = 0 ⇒ x = ${xs}. (È R′ = C′.)`),
        sMc('È davvero un massimo?', ['Sì: P″ < 0', 'No: P″ > 0, è un minimo', 'Non si può dire', 'Sì: P′ > 0'], `P″ = −${N(2 * a)} < 0.`),
        sNum('Profitto massimo P(x*) = ?', Pmax, `${N(p - v)}·${xs} − ${N(a)}·${xs * xs} − ${N(Fc)} = ${N(Pmax)} €.`, { unit: '€' }),
      ], 'Massimo profitto dove ricavo marginale = costo marginale.');
    },
    () => {
      const a = pick([0.1, 0.2, 0.5, 1, 2]);
      const x0 = pick([10, 20, 50, 100]);
      const v = ri(2, 15);
      const Fc = a * x0 * x0;
      const cm = 2 * a * x0 + v;
      return steps('Costo medio minimo', `C(x) = ${N(Fc)} + ${v}x + ${co(a, 'x²')}. Trova il minimo del costo medio.`, [
        sMc('Costo medio CM(x) = ?', [`${N(Fc)}/x + ${v} + ${co(a, 'x')}`, `${v} + ${co(2 * a, 'x')}`, `${N(Fc)} + ${v} + ${co(a, 'x')}`, `${N(Fc)}/x + ${v}x + ${co(a, 'x²')}`], 'Divido ogni termine di C per x.'),
        sNum('CM′(x) = 0 per x = ?', x0, `CM′ = −${N(Fc)}/x² + ${N(a)} = 0 ⇒ x² = ${N(Fc / a)} ⇒ x = ${x0}.`),
        sNum('Costo medio minimo = ?', cm, `${N(Fc)}/${x0} + ${v} + ${N(a)}·${x0} = ${N(cm)} €.`, { unit: '€' }),
        sNum(`Costo marginale C′(${x0}) = ?`, cm, `C′ = ${v} + ${N(2 * a)}x ⇒ ${N(cm)}: uguale al costo medio, come dice la teoria.`, { unit: '€' }),
      ], 'Nel minimo del costo medio C′(x₀) = C(x₀)/x₀.');
    },
    () => {
      const v = ri(2, 10);
      const a = pick([0.5, 1, 0.1, 0.2]);
      const Fc = pick([50, 80, 120, 200]);
      const x1 = pick([10, 20]);
      const K = v * x1 + a * x1 * x1 + Fc;
      const x2 = x1 * 2;
      return steps('Costo dal marginale', `Costo marginale C′(x) = ${v} + ${co(2 * a, 'x')}. Sappiamo che C(${x1}) = ${N(K)} €.`, [
        sMc('Costo totale C(x) = ?', [`${v}x + ${co(a, 'x²')} + k`, `${N(2 * a)} + k`, `${v}x + ${co(2 * a, 'x²')} + k`, `${v} + ${co(a, 'x²')} + k`], `Integro: ∫ ${co(2 * a, 'x')} dx = ${co(a, 'x²')}.`),
        sNum('Costo fisso k = ?', Fc, `${v}·${x1} + ${N(a)}·${x1 * x1} + k = ${N(K)} ⇒ k = ${N(Fc)}.`, { unit: '€' }),
        sNum(`C(${x2}) = ?`, v * x2 + a * x2 * x2 + Fc, `${v}·${x2} + ${N(a)}·${x2 * x2} + ${N(Fc)} = ${N(v * x2 + a * x2 * x2 + Fc)} €.`, { unit: '€' }),
      ], 'Il costo totale è una primitiva del marginale; la costante è il costo fisso.');
    },
    () => {
      const v2 = ri(5, 20) * 10;
      const v1 = v2 + pick([10, 20, 50]);
      const xs = pick([500, 1000, 2000]);
      const F1 = pick([10, 20, 50]) * 1000;
      const F2 = F1 + (v1 - v2) * xs;
      return steps('Confronto di costi', `Linea 1: C₁ = ${v1}x + ${N(F1)}. Linea 2: C₂ = ${v2}x + ${N(F2)}.`, [
        sNum('Per quale x* i costi sono uguali?', xs, `${v1}x + ${N(F1)} = ${v2}x + ${N(F2)} ⇒ ${v1 - v2}x = ${N(F2 - F1)} ⇒ x* = ${xs}.`),
        sMc(`Oltre ${xs} pezzi quale linea conviene?`, ['La linea 2', 'La linea 1', 'Sono uguali', 'Dipende dal prezzo'], `Oltre x* pesa il costo unitario: ${v2} < ${v1}, conviene la linea 2.`),
        sMc(`Sotto ${xs} pezzi quale linea conviene?`, ['La linea 1', 'La linea 2', 'Sono uguali', 'Nessuna delle due'], 'Con pochi pezzi pesano i costi fissi: la linea 1 li ha più bassi.'),
      ], 'È l’esercizio delle due linee di produzione degli appunti, con numeri nuovi.');
    },
    () => {
      const r1 = ri(1, 4) * 10;
      const r2 = r1 + ri(2, 5) * 10;
      const s = r1 + r2;
      const p = r1 * r2;
      const k = ri(1, 3) * 100;
      return steps('Disequazioni', `Spesa mensile T(x) = x² − ${s}x + ${N(p + k)}, con x minuti.`, [
        sNum('Per quali x la spesa scende sotto ' + N(k) + ' €? Radice più piccola:', r1, `x² − ${s}x + ${N(p)} < 0. Δ = ${N(s * s - 4 * p)}, radici (${s} ± ${Math.sqrt(s * s - 4 * p)})/2 = ${r1} e ${r2}.`),
        sNum('Radice più grande:', r2, 'Parabola verso l’alto: negativa tra le radici.'),
        sNum('Ascissa del vertice (spesa minima)?', s / 2, `x_v = ${s}/2 = ${N(s / 2)}.`),
      ], `La spesa è sotto ${N(k)} € per ${r1} < x < ${r2}.`);
    },
  ];
  return pick(cases)();
}

export interface GymTopic {
  id: string;
  title: string;
  icon: string;
  gen: () => Exercise;
}

export const GYM: GymTopic[] = [
  { id: 'domini', title: 'Domini', icon: '🗺️', gen: domini },
  { id: 'esplog', title: 'Esponenziali e logaritmi', icon: '🪵', gen: esplog },
  { id: 'rette', title: 'Rette, inversa, rapporto incrementale', icon: '📏', gen: rette },
  { id: 'successioni', title: 'Successioni e interessi', icon: '🏦', gen: successioni },
  { id: 'limiti', title: 'Limiti, asintoti, continuità', icon: '🎯', gen: limiti },
  { id: 'derivate', title: 'Derivate', icon: '📐', gen: derivate },
  { id: 'tangente', title: 'Retta tangente', icon: '📍', gen: tangente },
  { id: 'studio', title: 'Massimi, minimi, flessi', icon: '⛰️', gen: studio },
  { id: 'integrali', title: 'Integrali e aree', icon: '∫', gen: integrali },
  { id: 'economia', title: 'Problemi economici', icon: '💶', gen: economia },
];

/** 10 esercizi nuovi su un argomento, o misti se id = 'mix'. */
export function gymSet(topic: string, n = 10): Exercise[] {
  const t = GYM.find((g) => g.id === topic);
  return Array.from({ length: n }, () => (t ?? GYM[Math.floor(Math.random() * GYM.length)]).gen());
}
