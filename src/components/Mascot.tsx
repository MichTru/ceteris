// La mascotte di getit: render 3D in WebP, una immagine per espressione o posa.
import neutro from '../assets/mascot/neutro.webp';
import felice from '../assets/mascot/felice.webp';
import sorpreso from '../assets/mascot/sorpreso.webp';
import occhiolino from '../assets/mascot/occhiolino.webp';
import innamorato from '../assets/mascot/innamorato.webp';
import deciso from '../assets/mascot/deciso.webp';
import dorme from '../assets/mascot/dorme.webp';
import libro from '../assets/mascot/libro.webp';
import portatile from '../assets/mascot/portatile.webp';
import salto from '../assets/mascot/salto.webp';
import laurea from '../assets/mascot/laurea.webp';
import fatto from '../assets/mascot/fatto.webp';

const IMG = {
  neutral: neutro,
  happy: felice,
  sad: sorpreso,
  wave: occhiolino,
  love: innamorato,
  think: deciso,
  sleep: dorme,
  read: libro,
  laptop: portatile,
  party: salto,
  grad: laurea,
  done: fatto,
};

export type Mood = keyof typeof IMG;

export default function Mascot({ mood = 'neutral', size = 96, anim }: { mood?: Mood; size?: number; anim?: 'bob' | 'jump' }) {
  return (
    <img
      className={`mascot ${anim ?? ''}`}
      src={IMG[mood]}
      width={size}
      alt=""
      draggable={false}
      decoding="async"
      style={{ height: 'auto' }}
    />
  );
}

/** Il logo: "getit" con il puntino della i a forma di mascotte. */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="logo" style={{ fontSize: size }} role="img" aria-label="getit">
      <span aria-hidden>get</span>
      <span className="logo-i" aria-hidden>
        ı<i />
      </span>
      <span aria-hidden>t</span>
    </span>
  );
}
