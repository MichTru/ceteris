// Palestra: esercizi generati con numeri sempre nuovi, per applicare la teoria senza fine.
import { GYM } from '../engine/gen';
import { Stage } from '../components/UI';

const COLORS = [
  ['#7445e6', '#5a2fc4'],
  ['#ff8a00', '#c96a00'],
  ['#0ea5e9', '#0b84ba'],
  ['#10b981', '#0b8f63'],
  ['#ec4899', '#c02f77'],
  ['#16163a', '#000'],
];

export default function Gym({ onPick, onExit }: { onPick: (id: string, title: string) => void; onExit: () => void }) {
  return (
    <div className="session intro-mode tone-sun">
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
      </div>
      <div className="session-body">
        <Stage title="Palestra" sub="Numeri nuovi a ogni giro: scegli cosa allenare." mood="laptop" />
        <div className="unit-bento">
          <button className="unit-tile wide" style={{ ['--unit' as any]: '#16163a' }} onClick={() => onPick('mix', 'Palestra · misto')}>
            <span className="ut-title">Misto, come all’esame</span>
          </button>
          {GYM.map((g, k) => (
            <button
              key={g.id}
              className="unit-tile"
              style={{ ['--unit' as any]: COLORS[k % COLORS.length][0] }}
              onClick={() => onPick(g.id, `Palestra · ${g.title}`)}
            >
              <span className="ut-icon" aria-hidden>
                {g.icon}
              </span>
              <span className="ut-title">{g.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
