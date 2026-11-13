// Conto alla rovescia all'esame e piano del giorno.
import { courseById, EX_INDEX } from '../data';
import { dailyOf, dayDiff, today, type State } from './store';

export interface Plan {
  date: string;
  daysLeft: number;
  readiness: number;
  remaining: number;
  perDay: number;
  doneToday: number;
  message: string;
}

export function examPlan(s: State): Plan | null {
  const date = s.examDates?.[s.course];
  if (!date) return null;
  const course = courseById(s.course);
  const daysLeft = dayDiff(today(), date);

  const lessons = course.lessons;
  const doneLessons = lessons.filter((l) => (s.lessons[l.id]?.done ?? 0) > 0).length;
  const bossesLeft = course.units.filter((u) => (s.bosses[u.id]?.best ?? 0) < 0.7).length;
  const remaining = lessons.length - doneLessons + bossesLeft;

  // prontezza: percorso fatto, precisione negli esercizi del corso, migliore simulazione
  let seen = 0;
  let ok = 0;
  for (const [id, e] of Object.entries(s.ex)) {
    if (EX_INDEX.get(id)?.course.id !== course.id) continue;
    seen += e.seen;
    ok += e.ok;
  }
  const acc = seen ? ok / seen : 0;
  const exams = s.exams.filter((e) => (e.course ?? 'econ') === course.id);
  const bestExam = exams.reduce((m, e) => Math.max(m, e.total ? e.score / e.total : 0), 0);
  const pathPct = (doneLessons + course.units.length - bossesLeft) / (lessons.length + course.units.length);
  const readiness = Math.round(100 * (0.5 * pathPct + 0.25 * acc + 0.25 * bestExam));

  const studyDays = Math.max(1, daysLeft - 2);
  const perDay = remaining ? Math.ceil(remaining / studyDays) : 0;
  const doneToday = dailyOf(s).lessons;

  let message: string;
  if (daysLeft < 0) message = 'L’esame è passato: imposta la data del prossimo appello.';
  else if (daysLeft === 0) message = 'Oggi è il giorno dell’esame. In bocca al lupo!';
  else if (daysLeft <= 2) message = 'Ultimi giorni: una simulazione d’esame e il ripasso degli errori.';
  else if (!remaining) message = 'Percorso finito: ogni giorno una simulazione e le flashcard.';
  else if (doneToday >= perDay) message = 'Piano di oggi fatto. Se vuoi, ripassa con le flashcard.';
  else message = `Oggi: ${perDay === 1 ? 'una lezione' : `${perDay} lezioni`} del percorso.`;

  return { date, daysLeft, readiness, remaining, perDay, doneToday, message };
}
