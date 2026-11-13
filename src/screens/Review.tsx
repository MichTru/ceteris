import { useCourse } from '../data/useCourse';
import { useStore } from '../engine/store';
import { isDue } from '../engine/srs';
import Mascot, { type Mood } from '../components/Mascot';
import { Stage } from '../components/UI';

export type ReviewKind = 'mistakes' | 'flash' | 'oral' | 'exam' | 'practice' | 'gym';

export default function Review({ onOpen }: { onOpen: (k: ReviewKind) => void }) {
  const course = useCourse();
  const ids = new Set(course.lessons.flatMap((l) => l.exercises.map((e) => e.id)));
  const mistakes = useStore((s) => s.mistakes.filter((id) => ids.has(id)).length);
  const srs = useStore((s) => s.srs);
  const oral = useStore((s) => s.oral);
  const exams = useStore((s) => s.exams);
  const due = course.cards.filter((c) => isDue(srs[c.id])).length;
  const oralPerfect = course.open.filter((o) => oral[o.id] === 2).length;
  const mine = exams.filter((e) => (e.course ?? 'econ') === course.id);
  const last = mine[mine.length - 1];
  const tiles: { k: ReviewKind; mood: Mood; tone: string; title: string; desc: string; badge?: string }[] = [
    ...(course.id === 'mate'
      ? [{ k: 'gym' as const, mood: 'laptop' as const, tone: 'lilac', title: 'Palestra di esercizi', desc: 'Esercizi e problemi guidati con numeri sempre nuovi, su ogni argomento.', badge: '∞' }]
      : []),
    {
      k: 'mistakes',
      mood: 'sad',
      tone: 'card',
      title: 'Ripassa gli errori',
      desc: mistakes ? 'Le domande che hai sbagliato. Ogni risposta giusta ti ridà un cuore.' : 'Nessun errore da ripassare. Ottimo!',
      badge: String(mistakes),
    },
    { k: 'flash', mood: 'love', tone: 'sun', title: 'Flashcard', desc: 'Concetti chiave con ripetizione spaziata.', badge: `${due} da fare` },
    { k: 'oral', mood: 'think', tone: 'navy', title: 'Interrogazione', desc: 'Domande aperte come all’orale: rispondi, poi confronta.', badge: `${oralPerfect}/${course.open.length}` },
    { k: 'exam', mood: 'grad', tone: 'violet', title: 'Simulazione d’esame', desc: '30 domande miste a tempo, con voto in trentesimi.', badge: last ? `ultimo ${last.grade}` : undefined },
    { k: 'practice', mood: 'done', tone: 'lilac', title: 'Allenamento mirato', desc: '10 domande sui tuoi argomenti più deboli.' },
  ];
  return (
    <div className="screen">
      <Stage title="Ripasso" sub={`${course.title}: consolida quello che hai imparato.`} />
      <div className="bento">
        {tiles.map((t) => (
          <button key={t.k} className={`bento-card ${t.tone}`} onClick={() => onOpen(t.k)} disabled={t.k === 'mistakes' && !mistakes}>
            {t.badge && <span className="bento-badge">{t.badge}</span>}
            <span className="bento-text">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </span>
            <span className="bento-art" aria-hidden>
              <Mascot mood={t.mood} size={120} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
