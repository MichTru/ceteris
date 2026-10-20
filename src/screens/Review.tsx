import { ALL_CARDS, ALL_OPEN } from '../data';
import { useStore } from '../engine/store';
import { isDue } from '../engine/srs';

export type ReviewKind = 'mistakes' | 'flash' | 'oral' | 'exam' | 'practice';

export default function Review({ onOpen }: { onOpen: (k: ReviewKind) => void }) {
  const mistakes = useStore((s) => s.mistakes.length);
  const srs = useStore((s) => s.srs);
  const oral = useStore((s) => s.oral);
  const exams = useStore((s) => s.exams);
  const due = ALL_CARDS.filter((c) => isDue(srs[c.id])).length;
  const oralPerfect = Object.values(oral).filter((v) => v === 2).length;
  const last = exams[exams.length - 1];
  const tiles: { k: ReviewKind; ico: string; bg: string; title: string; desc: string; badge?: string }[] = [
    {
      k: 'mistakes',
      ico: '🩹',
      bg: '#fde3e6',
      title: 'Ripassa gli errori',
      desc: mistakes ? 'Le domande che hai sbagliato. Ogni risposta giusta ti ridà un cuore.' : 'Nessun errore da ripassare. Ottimo!',
      badge: String(mistakes),
    },
    { k: 'flash', ico: '🃏', bg: '#e8e7ff', title: 'Flashcard', desc: 'Concetti e formule con ripetizione spaziata.', badge: `${due} da fare` },
    { k: 'oral', ico: '🎤', bg: '#dcf7ec', title: 'Interrogazione', desc: 'Domande aperte come all’orale: rispondi, poi confronta.', badge: `${oralPerfect}/${ALL_OPEN.length}` },
    { k: 'exam', ico: '📝', bg: '#fff1d6', title: 'Simulazione d’esame', desc: '30 domande miste a tempo, con voto in trentesimi.', badge: last ? `ultimo ${last.grade}` : undefined },
    { k: 'practice', ico: '🎯', bg: '#dff3fc', title: 'Allenamento mirato', desc: '10 domande sui tuoi argomenti più deboli.' },
  ];
  return (
    <div className="screen">
      <h1 className="page-title">Ripasso</h1>
      <p className="page-sub">Qui si consolida quello che hai imparato nel percorso.</p>
      <div className="stack">
        {tiles.map((t) => (
          <button key={t.k} className="tile" onClick={() => onOpen(t.k)} disabled={t.k === 'mistakes' && !mistakes}>
            <span className="tile-ico" style={{ background: t.bg }} aria-hidden>
              {t.ico}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </span>
            {t.badge && <span className="tile-badge">{t.badge}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
