// Ripetizione spaziata SM-2 semplificata.
import { CardState, addDays, today } from './store';

/** q: 0-5 (qualità del ricordo). */
export function sm2(prev: CardState | undefined, q: number): CardState {
  const c: CardState = prev ? { ...prev } : { ef: 2.5, reps: 0, interval: 0, due: today() };
  if (q < 3) {
    c.reps = 0;
    c.interval = 1;
  } else {
    c.reps += 1;
    if (c.reps === 1) c.interval = 1;
    else if (c.reps === 2) c.interval = 3;
    else c.interval = Math.round(c.interval * c.ef);
  }
  c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  c.due = addDays(today(), q < 3 ? 0 : c.interval);
  return c;
}

export const isDue = (c: CardState | undefined) => !c || c.due <= today();
