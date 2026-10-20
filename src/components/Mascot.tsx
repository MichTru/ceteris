// Ceteris: il porcellino-salvadanaio laureando. Mascotte originale dell'app.
export type Mood = 'happy' | 'think' | 'party' | 'sad' | 'wave';

export default function Mascot({ mood = 'happy', size = 96, anim }: { mood?: Mood; size?: number; anim?: 'bob' | 'jump' }) {
  const eyes = () => {
    if (mood === 'party')
      return (
        <g stroke="#2a1a33" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M44 55 q6 -7 12 0" />
          <path d="M70 55 q6 -7 12 0" />
        </g>
      );
    if (mood === 'sad')
      return (
        <g fill="#2a1a33">
          <ellipse cx="50" cy="57" rx="4.5" ry="5.5" />
          <ellipse cx="76" cy="57" rx="4.5" ry="5.5" />
          <path d="M42 50 l12 -4" stroke="#2a1a33" strokeWidth="3" strokeLinecap="round" />
          <path d="M84 50 l-12 -4" stroke="#2a1a33" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    if (mood === 'think')
      return (
        <g fill="#2a1a33">
          <ellipse cx="51" cy="56" rx="4.5" ry="5.5" />
          <ellipse cx="77" cy="56" rx="4.5" ry="5.5" />
          <circle cx="52.5" cy="54" r="1.6" fill="#fff" />
          <circle cx="78.5" cy="54" r="1.6" fill="#fff" />
          <path d="M70 45 q7 -4 14 0" stroke="#2a1a33" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      );
    return (
      <g fill="#2a1a33">
        <ellipse cx="50" cy="56" rx="5" ry="6" />
        <ellipse cx="76" cy="56" rx="5" ry="6" />
        <circle cx="51.8" cy="53.6" r="1.8" fill="#fff" />
        <circle cx="77.8" cy="53.6" r="1.8" fill="#fff" />
      </g>
    );
  };
  const mouth = () => {
    if (mood === 'sad') return <path d="M56 86 q7 -6 14 0" stroke="#7a2140" strokeWidth="3.5" strokeLinecap="round" fill="none" />;
    if (mood === 'think') return <path d="M57 86 h12" stroke="#7a2140" strokeWidth="3.5" strokeLinecap="round" />;
    return <path d="M54 83 q9 10 18 0 z" fill="#7a2140" stroke="#7a2140" strokeWidth="2" strokeLinejoin="round" />;
  };
  return (
    <svg
      className={`mascot ${anim ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      role="img"
      aria-label="Ceteris, il porcellino salvadanaio"
    >
      {/* ombra */}
      <ellipse cx="64" cy="121" rx="34" ry="5" fill="rgba(27,33,64,.14)" />
      {/* zampe */}
      <rect x="38" y="98" width="14" height="18" rx="6" fill="#f07a98" />
      <rect x="76" y="98" width="14" height="18" rx="6" fill="#f07a98" />
      {/* coda a ricciolo */}
      <path d="M112 78 q10 -2 6 -10 q-4 -6 -8 0" stroke="#f07a98" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* orecchie */}
      <path d="M30 40 L36 18 L52 34 Z" fill="#ff9db6" stroke="#f07a98" strokeWidth="3" strokeLinejoin="round" />
      <path d="M98 40 L92 18 L76 34 Z" fill="#ff9db6" stroke="#f07a98" strokeWidth="3" strokeLinejoin="round" />
      {/* corpo */}
      <ellipse cx="64" cy="70" rx="50" ry="42" fill="#ffb3c6" stroke="#f07a98" strokeWidth="3" />
      {/* fessura per le monete */}
      <rect x="54" y="30" width="20" height="5" rx="2.5" fill="#c94f72" />
      {/* guance */}
      <ellipse cx="38" cy="72" rx="7" ry="4.5" fill="#ff7fa0" opacity=".55" />
      <ellipse cx="90" cy="72" rx="7" ry="4.5" fill="#ff7fa0" opacity=".55" />
      {eyes()}
      {/* muso */}
      <ellipse cx="63" cy="73" rx="13" ry="9" fill="#ff8fab" stroke="#f07a98" strokeWidth="2.5" />
      <ellipse cx="58.5" cy="73" rx="2.4" ry="3.2" fill="#c94f72" />
      <ellipse cx="67.5" cy="73" rx="2.4" ry="3.2" fill="#c94f72" />
      {mouth()}
      {/* tocco da laurea */}
      <g transform="rotate(-8 64 22)">
        <rect x="48" y="16" width="32" height="10" rx="3" fill="#1b2140" />
        <path d="M34 15 L64 4 L94 15 L64 26 Z" fill="#1b2140" />
        <path d="M86 13 v14" stroke="#ffb020" strokeWidth="2.5" />
        <circle cx="86" cy="29" r="3.5" fill="#ffb020" />
      </g>
      {mood === 'party' && (
        <g>
          <circle cx="14" cy="30" r="4" fill="#ffb020" />
          <circle cx="116" cy="24" r="3.5" fill="#4f46e5" />
          <rect x="108" y="44" width="7" height="7" rx="1.5" fill="#12b076" transform="rotate(20 111 47)" />
          <rect x="8" y="52" width="7" height="7" rx="1.5" fill="#ef4c5c" transform="rotate(-15 11 55)" />
        </g>
      )}
      {mood === 'think' && (
        <g fill="#8d95b3">
          <circle cx="112" cy="40" r="3" />
          <circle cx="118" cy="30" r="4.5" />
        </g>
      )}
      {mood === 'wave' && (
        <path d="M8 62 q-6 -12 4 -20" stroke="#f07a98" strokeWidth="9" strokeLinecap="round" fill="none" />
      )}
    </svg>
  );
}
