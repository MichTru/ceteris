// Palestra: esercizi generati con numeri sempre nuovi, per applicare la teoria senza fine.
import { GYM } from '../engine/gen';
import Mascot from '../components/Mascot';

export default function Gym({ onPick, onExit }: { onPick: (id: string, title: string) => void; onExit: () => void }) {
  return (
    <div className="session">
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
      </div>
      <div className="session-body">
        <div className="speech" style={{ marginBottom: 6 }}>
          <Mascot mood="think" size={70} anim="bob" />
          <div className="bubble">Numeri nuovi a ogni giro: scegli cosa allenare.</div>
        </div>
        <h1 className="page-title" style={{ paddingTop: 4 }}>
          Palestra
        </h1>
        <div className="stack">
          <button className="tile" onClick={() => onPick('mix', 'Palestra · misto')}>
            <span className="tile-ico" style={{ background: '#fff1d6' }} aria-hidden>
              🎲
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <h3>Misto, come all’esame</h3>
            </span>
          </button>
          {GYM.map((g) => (
            <button key={g.id} className="tile" onClick={() => onPick(g.id, `Palestra · ${g.title}`)}>
              <span className="tile-ico" style={{ background: '#e8e7ff' }} aria-hidden>
                {g.icon}
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <h3>{g.title}</h3>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
