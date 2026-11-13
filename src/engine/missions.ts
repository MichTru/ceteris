// Missioni del giorno: tre obiettivi scelti in base alla data, uguali per tutta la giornata.
import { dailyOf, today, type State } from './store';

export interface Mission {
  id: string;
  label: string;
  target: number;
  value: number;
}

type Def = { id: string; targets: number[]; label: (n: number) => string; value: (s: State) => number };

const DEFS: Def[] = [
  { id: 'xp', targets: [30, 50, 80], label: (n) => `Guadagna ${n} XP`, value: (s) => s.days[today()] ?? 0 },
  { id: 'lessons', targets: [1, 2, 3], label: (n) => (n === 1 ? 'Completa una lezione' : `Completa ${n} lezioni`), value: (s) => dailyOf(s).lessons },
  { id: 'perfect', targets: [1], label: () => 'Fai una lezione senza errori', value: (s) => dailyOf(s).perfect },
  { id: 'cards', targets: [10, 15, 20], label: (n) => `Ripassa ${n} flashcard`, value: (s) => dailyOf(s).cards },
  { id: 'oral', targets: [2, 3], label: (n) => `Rispondi a ${n} domande dell’interrogazione`, value: (s) => dailyOf(s).oral },
  { id: 'combo', targets: [5, 8, 10], label: (n) => `Fai ${n} risposte giuste di fila`, value: (s) => dailyOf(s).combo },
  { id: 'read', targets: [1], label: () => 'Leggi un capitolo fino in fondo', value: (s) => dailyOf(s).read.length },
];

/** Generatore pseudo-casuale con seme: stessa data, stesse missioni. */
function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function missions(s: State): Mission[] {
  const r = rng('getit-' + today());
  const others = DEFS.slice(1)
    .map((d) => ({ d, k: r() }))
    .sort((a, b) => a.k - b.k)
    .slice(0, 2)
    .map((x) => x.d);
  return [DEFS[0], ...others].map((d) => {
    const target = d.targets[Math.floor(r() * d.targets.length)];
    return { id: d.id, label: d.label(target), target, value: Math.min(target, d.value(s)) };
  });
}

export const MISSION_BONUS = 25;
