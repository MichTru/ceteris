// Stato dell'app: progressi, XP, streak, cuori, SRS, impostazioni.
// Tutto vive in localStorage, con export/import in JSON.
import { useSyncExternalStore } from 'react';

export const STORAGE_KEY = 'ceteris-econ-v1';
export const MAX_HEARTS = 5;
export const HEART_REGEN_MIN = 30;

export interface CardState {
  ef: number;
  reps: number;
  interval: number;
  due: string; // YYYY-MM-DD
}

export interface ExamResult {
  date: string;
  score: number;
  total: number;
  grade: string;
  course?: 'econ' | 'mate';
}

export interface State {
  version: 1;
  name: string;
  xp: number;
  dailyGoal: number;
  /** XP per giorno (YYYY-MM-DD). */
  days: Record<string, number>;
  /** Secondi di studio per giorno. */
  time: Record<string, number>;
  streak: number;
  lastStudy: string | null;
  bestStreak: number;
  hearts: number;
  heartsAt: number;
  /** Lezioni completate: id -> numero di completamenti e miglior precisione. */
  lessons: Record<string, { done: number; best: number }>;
  bosses: Record<string, { best: number }>;
  unlockedUnits: string[];
  /** Statistiche per esercizio. */
  ex: Record<string, { seen: number; ok: number; last: boolean }>;
  mistakes: string[];
  srs: Record<string, CardState>;
  oral: Record<string, number>; // id domanda aperta -> ultimo voto (0 da rifare, 1 quasi, 2 perfetta)
  exams: ExamResult[];
  badges: Record<string, string>; // id -> data
  /** Capitoli di teoria letti fino in fondo: id unità -> data. */
  read: Record<string, string>;
  sound: boolean;
  theme: 'auto' | 'light' | 'dark';
  relaxed: boolean;
  perfectLessons: number;
  bestCombo: number;
  onboarded: boolean;
  /** Corso attivo. */
  course: 'econ' | 'mate';
}

export const today = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const addDays = (iso: string, n: number) => {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + n);
  return today(dt);
};

export const dayDiff = (a: string, b: string) => {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
};

const fresh = (): State => ({
  version: 1,
  name: 'Chiara',
  xp: 0,
  dailyGoal: 50,
  days: {},
  time: {},
  streak: 0,
  lastStudy: null,
  bestStreak: 0,
  hearts: MAX_HEARTS,
  heartsAt: Date.now(),
  lessons: {},
  bosses: {},
  unlockedUnits: ['u1'],
  ex: {},
  mistakes: [],
  srs: {},
  oral: {},
  exams: [],
  badges: {},
  read: {},
  sound: true,
  theme: 'auto',
  relaxed: false,
  perfectLessons: 0,
  bestCombo: 0,
  onboarded: false,
  course: 'econ',
});

function load(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...fresh(), ...JSON.parse(raw) };
  } catch {
    /* storage non disponibile: si parte da zero */
  }
  return fresh();
}

let state: State = load();
const listeners = new Set<() => void>();

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignora */
  }
}

export function getState() {
  return state;
}

export function setState(fn: (s: State) => State | void) {
  const draft: State = structuredClone(state);
  const out = fn(draft);
  state = out ?? draft;
  persist();
  listeners.forEach((l) => l());
}

export function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useStore<T>(sel: (s: State) => T): T {
  return useSyncExternalStore(subscribe, () => sel(state));
}

/** Ricarica i cuori in base al tempo trascorso. */
export function regenHearts() {
  setState((s) => {
    if (s.hearts >= MAX_HEARTS) {
      s.heartsAt = Date.now();
      return;
    }
    const step = HEART_REGEN_MIN * 60000;
    const gained = Math.floor((Date.now() - s.heartsAt) / step);
    if (gained > 0) {
      s.hearts = Math.min(MAX_HEARTS, s.hearts + gained);
      s.heartsAt = s.hearts >= MAX_HEARTS ? Date.now() : s.heartsAt + gained * step;
    }
  });
}

/** Aggiorna la streak quando si guadagnano XP oggi. */
function touchStreak(s: State) {
  const t = today();
  if (s.lastStudy === t) return;
  if (s.lastStudy && dayDiff(s.lastStudy, t) === 1) s.streak += 1;
  else s.streak = 1;
  s.lastStudy = t;
  s.bestStreak = Math.max(s.bestStreak, s.streak);
}

/** La streak si azzera se è passato più di un giorno. */
export function checkStreak() {
  setState((s) => {
    if (s.lastStudy && dayDiff(s.lastStudy, today()) > 1) s.streak = 0;
  });
}

export function addXp(n: number) {
  setState((s) => {
    s.xp += n;
    const t = today();
    s.days[t] = (s.days[t] ?? 0) + n;
    touchStreak(s);
  });
}

export function addTime(sec: number) {
  setState((s) => {
    const t = today();
    s.time[t] = (s.time[t] ?? 0) + sec;
  });
}

export function recordAnswer(id: string, ok: boolean) {
  setState((s) => {
    const e = s.ex[id] ?? { seen: 0, ok: 0, last: false };
    e.seen += 1;
    if (ok) e.ok += 1;
    e.last = ok;
    s.ex[id] = e;
    if (!ok) {
      if (!s.mistakes.includes(id)) s.mistakes.push(id);
    } else {
      s.mistakes = s.mistakes.filter((m) => m !== id);
    }
  });
}

export function loseHeart() {
  setState((s) => {
    if (s.relaxed) return;
    if (s.hearts >= MAX_HEARTS) s.heartsAt = Date.now();
    s.hearts = Math.max(0, s.hearts - 1);
  });
}

export function gainHeart(n = 1) {
  setState((s) => {
    s.hearts = Math.min(MAX_HEARTS, s.hearts + n);
    if (s.hearts >= MAX_HEARTS) s.heartsAt = Date.now();
  });
}

export function level(xp: number) {
  // Ogni livello richiede un po' più XP del precedente.
  let lvl = 1;
  let need = 100;
  let rest = xp;
  while (rest >= need) {
    rest -= need;
    lvl += 1;
    need = Math.round(need * 1.18);
  }
  return { lvl, into: rest, need };
}

export function exportState() {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string) {
  const parsed = JSON.parse(json);
  if (!parsed || parsed.version !== 1) throw new Error('File non valido');
  setState(() => ({ ...fresh(), ...parsed }));
}

export function resetState() {
  setState(() => fresh());
}
