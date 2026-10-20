import type { Exercise, Flashcard, Formula, Lesson, OpenQ, Unit } from '../types';
import u1 from './u1';
import u2 from './u2';
import u3 from './u3';
import u4 from './u4';
import u5 from './u5';
import u6 from './u6';
import u7 from './u7';

export const UNITS: Unit[] = [u1, u2, u3, u4, u5, u6, u7];

export const ALL_LESSONS: (Lesson & { unit: Unit })[] = UNITS.flatMap((u) =>
  u.lessons.map((l) => ({ ...l, unit: u })),
);

export const EX_INDEX = new Map<string, { ex: Exercise; unit: Unit; lesson: Lesson }>();
UNITS.forEach((u) => u.lessons.forEach((l) => l.exercises.forEach((ex) => EX_INDEX.set(ex.id, { ex, unit: u, lesson: l }))));

export const ALL_EXERCISES: Exercise[] = [...EX_INDEX.values()].map((v) => v.ex);
export const ALL_OPEN: (OpenQ & { unit: Unit })[] = UNITS.flatMap((u) => u.open.map((o) => ({ ...o, unit: u })));
export const ALL_CARDS: (Flashcard & { unit: Unit })[] = UNITS.flatMap((u) => u.cards.map((c) => ({ ...c, unit: u })));

export const unitById = (id: string) => UNITS.find((u) => u.id === id)!;

export const FORMULAS: Formula[] = [
  { id: 'f1', unit: 2, name: 'Surplus del consumatore', expr: 'SC = Σ (disponibilità a pagare − P)', symbols: ['Area sopra P* e sotto la domanda'], example: 'Libro a 30 $: (35−30) + (45−30) + (59−30) = 49 $' },
  { id: 'f2', unit: 2, name: 'Elasticità della domanda al prezzo', expr: 'η = (ΔQ / Q) ÷ (ΔP / P)', symbols: ['η: eta, sempre negativa', 'ΔQ/Q: variazione % della quantità', 'ΔP/P: variazione % del prezzo'], example: 'Metro NY: −4,3% ÷ 20% = −0,215' },
  { id: 'f3', unit: 2, name: 'Variazione % con il punto medio', expr: 'Δ% = (finale − iniziale) ÷ [(finale + iniziale) / 2]', symbols: ['Si usa per numeratore e denominatore insieme'], example: 'Q da 40 a 32: −8 ÷ 36 = −0,222' },
  { id: 'f4', unit: 2, name: 'Elasticità e pendenza', expr: 'η = (ΔQ / ΔP) × (P / Q)', symbols: ['ΔQ/ΔP: inverso della pendenza', 'P/Q cambia lungo la curva'], example: 'Su una retta η cambia da punto a punto' },
  { id: 'f5', unit: 2, name: 'Elasticità al reddito', expr: 'ηY = (ΔQ / Q) ÷ (ΔY / Y)', symbols: ['> 0 bene normale', '< 0 bene inferiore', '= 0 reddito insufficiente o saturazione'], example: 'Giuseppe a 12 €: 25% ÷ 20% = 1,25' },
  { id: 'f6', unit: 2, name: 'Elasticità incrociata', expr: 'ε1,2 = (ΔQ1 / Q1) ÷ (ΔP2 / P2)', symbols: ['> 0 sostituti', '< 0 complementari', '= 0 indipendenti'], example: 'Pepsi +10%, Coca +5%: +0,5 → sostituti' },
  { id: 'f7', unit: 2, name: 'Elasticità dell’offerta', expr: 'ε = (ΔQs / Qs) ÷ (ΔP / P)', symbols: ['Sempre positiva', 'Più rigida nel breve periodo'], example: 'Offerta lineare dall’origine: ε = 1' },
  { id: 'f8', unit: 2, name: 'Ricavo totale', expr: 'RT = P × Q', symbols: ['Anelastica: P↑ ⇒ RT↑', 'Elastica: P↑ ⇒ RT↓'], example: '1 € × 100 = 100 € → 3 € × 80 = 240 €' },
  { id: 'f9', unit: 3, name: 'Prodotto medio', expr: 'PM = PT / L', symbols: ['PT: prodotto totale', 'L: unità di lavoro'], example: '67 tavoli ÷ 5 lavoratori = 13,4' },
  { id: 'f10', unit: 3, name: 'Prodotto marginale', expr: 'P’ = ΔPT / ΔL', symbols: ['Derivata prima del PT'], example: 'Da 30 a 48 tavoli col 4° lavoratore: P’ = 18' },
  { id: 'f11', unit: 3, name: 'Costo opportunità', expr: 'Costo economico = costo esplicito + costo implicito', symbols: ['Esplicito: quello che spendo', 'Implicito: ciò a cui rinuncio'], example: 'Università: 15.000 + 60.000 = 75.000 €' },
  { id: 'f12', unit: 3, name: 'Costo totale', expr: 'CT = CF + CV', symbols: ['CF: costi fissi', 'CV: costi variabili'], example: '100 + 5 × 20 = 200 €' },
  { id: 'f13', unit: 3, name: 'Costi medi', expr: 'CMT = CT / Q = CMF + CMV', symbols: ['CMF = CF / Q', 'CMV = CV / Q'], example: '200 ÷ 875 ≈ 0,229 €' },
  { id: 'f14', unit: 3, name: 'Costo marginale', expr: 'C’ = ΔCT / ΔQ', symbols: ['Costo di un’unità in più'], example: '20 € ÷ (875 − 600) ≈ 0,073 €' },
  { id: 'f15', unit: 3, name: 'Minimizzazione dei costi (lungo periodo)', expr: 'P’K / pK = P’L / pL   ⇔   P’K / P’L = pK / pL', symbols: ['P’K, P’L: prodotti marginali di capitale e lavoro', 'pK, pL: prezzi dei fattori'], example: '10/5 = 2 contro 2/2 = 1: investire in capitale' },
  { id: 'f16', unit: 3, name: 'Indice delle economie di scala', expr: 'Indice = (CM a ⅓ SEM − CM minimo) / CM minimo', symbols: ['SEM: scala efficiente minima'], example: 'SEM 900.000 → si guarda il costo a 300.000 unità' },
  { id: 'f17', unit: 3, name: 'Profitto', expr: 'π = (p × q) − (c × q)', symbols: ['p: prezzo', 'c: costo medio', 'q: quantità'], example: '6 tavoli: 96 − 69 = 27 €' },
  { id: 'f18', unit: 3, name: 'Regola del massimo profitto', expr: 'R’ = C’', symbols: ['R’: ricavo marginale', 'C’: costo marginale', 'Vale per ogni struttura di mercato'], example: '7° tavolo: R’ = 9 < C’ = 12 → fermarsi a 6' },
  { id: 'f19', unit: 3, name: 'Ricavo marginale con domanda lineare', expr: 'R’ taglia l’asse delle quantità a Q/2', symbols: ['Stessa intercetta verticale della domanda'], example: 'Domanda fino a Q = 100 → R’ = 0 a Q = 50' },
  { id: 'f20', unit: 4, name: 'Concorrenza perfetta', expr: 'P = R’ = C’ (= min CMT nel lungo periodo)', symbols: ['Solo qui il massimo profitto si scrive C’ = P'], example: 'Profitti normali nel lungo periodo' },
  { id: 'f21', unit: 4, name: 'Cournot (mercato = 1, C’ = 0)', expr: 'qA = qB = 1/3; Q = 2/3', symbols: ['Monopolio: 1/2', 'Concorrenza perfetta: 1'], example: 'Round: 1/2, 1/4 → 3/8, 5/16 → 11/32, 21/64' },
  { id: 'f22', unit: 4, name: 'Stackelberg', expr: 'q leader = 1/2; q follower = 1/4', symbols: ['Il follower reagisce sulla sua funzione di reazione'], example: 'Totale 3/4' },
  { id: 'f23', unit: 4, name: 'Bertrand', expr: 'P = C’;  qA = qB = Qc / 2', symbols: ['Qc: quantità di concorrenza perfetta'], example: 'Due imprese bastano per il risultato concorrenziale' },
  { id: 'f24', unit: 4, name: 'Rapporto di concentrazione', expr: 'CN = Σ (i = 1…n) Si', symbols: ['Si: quota della i-esima impresa', 'Imprese in ordine decrescente'], example: 'Lampadine: 1.300 ÷ 2.000 = 65%' },
  { id: 'f25', unit: 4, name: 'Indice di Herfindahl-Hirschman', expr: 'HH = Σ (i = 1…N) Si²', symbols: ['Max 1 (monopolio)', 'Min 1/N'], example: '0,5² + 0,2² + 0,15² + 0,1² + 0,05² = 0,325' },
  { id: 'f26', unit: 4, name: 'Test SSNIP', expr: 'Aumento ipotetico del prezzo del 5-10%', symbols: ['Se i profitti salgono: è un mercato', 'Se i clienti fuggono: il mercato è più ampio'], example: 'Errore del cellophane: mercato troppo ampio' },
];

export function totals() {
  return {
    exercises: ALL_EXERCISES.length,
    open: ALL_OPEN.length,
    cards: ALL_CARDS.length,
    lessons: ALL_LESSONS.length,
  };
}
