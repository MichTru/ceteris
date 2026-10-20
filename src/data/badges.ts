import type { State } from '../engine/store';
import { UNITS } from './index';

export interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  test: (s: State) => boolean;
}

const unitDone = (s: State, uid: string) => {
  const u = UNITS.find((x) => x.id === uid)!;
  return u.lessons.every((l) => (s.lessons[l.id]?.done ?? 0) > 0) && (s.bosses[uid]?.best ?? 0) >= 0.7;
};

const topicOk = (s: State, prefix: string, min: number) =>
  Object.entries(s.ex).filter(([id, e]) => id.startsWith(prefix) && e.last).length >= min;

export const BADGES: Badge[] = [
  { id: 'first', name: 'Primo passo', desc: 'Completa la prima lezione', icon: '🐣', test: (s) => Object.keys(s.lessons).length >= 1 },
  { id: 'streak3', name: 'Tre di fila', desc: 'Studia 3 giorni di fila', icon: '🔥', test: (s) => s.bestStreak >= 3 },
  { id: 'streak7', name: 'Settimana d’oro', desc: 'Studia 7 giorni di fila', icon: '📅', test: (s) => s.bestStreak >= 7 },
  { id: 'xp500', name: 'Cinquecento', desc: 'Raggiungi 500 XP', icon: '💎', test: (s) => s.xp >= 500 },
  { id: 'xp2000', name: 'Capitale umano', desc: 'Raggiungi 2.000 XP', icon: '🏦', test: (s) => s.xp >= 2000 },
  { id: 'perfect', name: 'Zero errori', desc: 'Chiudi una lezione senza errori', icon: '✨', test: (s) => s.perfectLessons >= 1 },
  { id: 'perfect5', name: 'Precisione svizzera', desc: '5 lezioni senza errori', icon: '🎯', test: (s) => s.perfectLessons >= 5 },
  { id: 'combo10', name: 'Serie da 10', desc: '10 risposte giuste di fila', icon: '⚡', test: (s) => s.bestCombo >= 10 },
  { id: 'elasticity', name: 'Elasticità perfetta', desc: 'Completa l’unità 2', icon: '🪀', test: (s) => unitDone(s, 'u2') },
  { id: 'costs', name: 'R’ = C’', desc: 'Completa l’unità 3', icon: '🎯', test: (s) => unitDone(s, 'u3') },
  { id: 'cournot', name: 'Maestra di Cournot', desc: 'Rispondi bene a 5 esercizi sull’oligopolio', icon: '♟️', test: (s) => topicOk(s, 'u4-4', 5) },
  { id: 'markets', name: 'Antitrust', desc: 'Completa l’unità 4', icon: '⚖️', test: (s) => unitDone(s, 'u4') },
  { id: 'coase', name: 'Make or buy', desc: 'Completa l’unità 5', icon: '🤝', test: (s) => unitDone(s, 'u5') },
  { id: 'keiretsu', name: 'Sensei dei Keiretsu', desc: 'Completa l’unità 6', icon: '🏯', test: (s) => unitDone(s, 'u6') },
  { id: 'districts', name: 'Becattini approva', desc: 'Completa l’unità 7', icon: '📍', test: (s) => unitDone(s, 'u7') },
  { id: 'oral10', name: 'Parlantina', desc: '10 domande d’interrogazione segnate come perfette', icon: '🎤', test: (s) => Object.values(s.oral).filter((v) => v === 2).length >= 10 },
  { id: 'exam', name: 'Prova generale', desc: 'Completa una simulazione d’esame', icon: '📝', test: (s) => s.exams.length >= 1 },
  { id: 'exam28', name: 'Da 28 in su', desc: 'Prendi almeno 28 in una simulazione', icon: '🎓', test: (s) => s.exams.some((e) => (e.score / e.total) * 30 >= 27.5) },
  { id: 'lode', name: 'Trenta e lode', desc: 'Simulazione d’esame senza errori', icon: '🏆', test: (s) => s.exams.some((e) => e.score === e.total) },
  { id: 'all', name: 'Pronta per l’esame', desc: 'Completa tutte e 7 le unità', icon: '👑', test: (s) => UNITS.every((u) => unitDone(s, u.id)) },
];
