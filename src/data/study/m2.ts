import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm2',
  intro:
    'Le funzioni elementari sono i mattoni di tutto il corso: rette, valore assoluto, potenze, radici, esponenziali e logaritmi. Bisogna saperne riconoscere il grafico e conoscerne dominio, segno e monotonia. Poi le combiniamo nelle funzioni composte e le usiamo per costi, ricavi e profitto.',
  sections: [
    {
      title: 'Rette e valore assoluto',
      blocks: [
        { t: 'table', head: ['Funzione', 'Grafico', 'Monotonia'], rows: [
          ['Costante f(x) = c', 'Retta orizzontale', 'Crescente e decrescente (non strettamente)'],
          ['Identità f(x) = x', 'Bisettrice di I e III quadrante', 'Strettamente crescente'],
          ['Affine f(x) = mx + q', 'Retta con pendenza m e intercetta q', 'm > 0 crescente, m < 0 decrescente'],
          ['Valore assoluto |x|', 'A “V” con vertice nell’origine', 'Decrescente su (−∞, 0], crescente su [0, +∞)'],
        ] },
        { t: 'def', term: 'Valore assoluto', text: '|x| = x se x ≥ 0; |x| = −x se x < 0. È la distanza di x da 0, quindi non è mai negativo.' },
        { t: 'figure', scene: 'g-abs', caption: 'f(x) = |x|' },
        { t: 'example', title: 'Leggere una retta', steps: ['f(x) = −3x + 5: pendenza −3 (scende), intercetta 5 (f(0) = 5).', 'Zero: −3x + 5 = 0 ⇒ x = 5/3.', 'f(x) = 2x − 8 si annulla in x = 4.'] },
      ],
    },
    {
      title: 'Potenze e radici',
      blocks: [
        { t: 'table', head: ['', 'xⁿ con n pari (x², x⁴)', 'xⁿ con n dispari (x³)'], rows: [
          ['Dominio', 'ℝ', 'ℝ'],
          ['Codominio', '[0, +∞)', 'ℝ'],
          ['Simmetria', 'Rispetto all’asse y', 'Rispetto all’origine'],
          ['Monotonia', 'Decrescente su (−∞, 0], crescente su [0, +∞)', 'Strettamente crescente'],
          ['Iniettiva', 'No', 'Sì'],
        ] },
        { t: 'figure', scene: 'g-x2', caption: 'f(x) = x²: parabola con vertice nell’origine.' },
        { t: 'figure', scene: 'g-x3', caption: 'f(x) = x³: sempre crescente.' },
        { t: 'warn', text: 'Negli appunti la monotonia di xⁿ con n pari è scritta al contrario. Quella giusta: **decrescente** su (−∞, 0], **crescente** su [0, +∞). Basta pensare alla parabola: scende fino all’origine, poi sale.' },
        { t: 'h', text: 'Radici' },
        { t: 'p', text: 'La radice n-esima è l’**inversa** della potenza n-esima. Con indice **pari** (√x, ∜x) è definita solo per x ≥ 0; con indice **dispari** (∛x) su tutto ℝ: ∛(−8) = −2.' },
        { t: 'figure', scene: 'g-sqrt', caption: 'f(x) = √x: parte dall’origine e cresce sempre più lentamente.' },
        { t: 'h', text: 'Potenze con esponente negativo' },
        { t: 'formula', expr: 'x⁻ⁿ = 1 / xⁿ', note: 'definita per x ≠ 0' },
        { t: 'figure', scene: 'g-inv', caption: 'f(x) = 1/x: iperbole nel I e III quadrante, non definita in 0.' },
        { t: 'example', title: 'Calcoli con le potenze', steps: ['2⁻³ = 1/2³ = 1/8 = 0,125.', '(1/2)⁻² = 2² = 4.', '|−7| + |3| = 7 + 3 = 10.'] },
      ],
    },
    {
      title: 'La funzione esponenziale',
      blocks: [
        { t: 'def', term: 'Esponenziale', text: 'f(x) = aˣ, con base **a > 0 e a ≠ 1** e esponente variabile.' },
        { t: 'list', items: ['Dominio ℝ, codominio **(0, +∞)**: è **sempre positiva**, non tocca mai lo zero.', '**a⁰ = 1**: il grafico passa sempre per (0, 1).', '**a > 1**: strettamente crescente (2ˣ, eˣ). **0 < a < 1**: strettamente decrescente ((1/2)ˣ).', 'Il numero di Nepero **e ≈ 2,718** è la base più usata.'] },
        { t: 'figure', scene: 'g-exp', caption: 'eˣ: base maggiore di 1, crescente.' },
        { t: 'figure', scene: 'g-expd', caption: '(1/2)ˣ: base tra 0 e 1, decrescente.' },
        { t: 'warn', text: 'Perché a > 0 e a ≠ 1? Con base negativa aˣ non è definito per ogni x ((−2)^½ non è reale); con a = 1 si ottiene la costante 1.' },
        { t: 'h', text: 'Proprietà delle potenze' },
        { t: 'table', head: ['Regola', 'Esempio'], rows: [
          ['aˣ · aʸ = aˣ⁺ʸ', '2³ · 2² = 2⁵ = 32'],
          ['aˣ / aʸ = aˣ⁻ʸ', '3⁵ / 3² = 3³ = 27'],
          ['(aˣ)ʸ = aˣʸ', '(2³)² = 2⁶ = 64'],
          ['a⁻ˣ = 1/aˣ', '2⁻³ = 1/8'],
        ] },
        { t: 'example', title: 'Equazioni esponenziali', steps: ['2ˣ = 16: scrivo 16 = 2⁴, stessa base ⇒ x = 4.', '3ˣ⁺¹ = 27: 27 = 3³ ⇒ x + 1 = 3 ⇒ x = 2.'], result: 'Metodo: portare tutto alla stessa base e uguagliare gli esponenti.' },
      ],
    },
    {
      title: 'Il logaritmo',
      blocks: [
        { t: 'def', term: 'Logaritmo', text: 'log_a x è l’esponente da dare alla base a per ottenere x: log_a x = y ⇔ aʸ = x. È l’**inversa** dell’esponenziale.' },
        { t: 'list', items: ['Base a > 0, a ≠ 1. **Dominio (0, +∞)**: l’argomento deve essere positivo. Codominio ℝ.', '**log_a 1 = 0** (il grafico passa per (1, 0)) e **log_a a = 1**.', 'a > 1: crescente; 0 < a < 1: decrescente.', 'Asintoto verticale x = 0.'] },
        { t: 'figure', scene: 'g-log', caption: 'log x con base maggiore di 1.' },
        { t: 'figure', scene: 'g-logd', caption: 'log x con base minore di 1.' },
        { t: 'table', head: ['', '0 < x < 1', 'x = 1', 'x > 1'], rows: [
          ['Base a > 1', 'log < 0', 'log = 0', 'log > 0'],
          ['Base 0 < a < 1', 'log > 0', 'log = 0', 'log < 0'],
        ] },
        { t: 'warn', text: 'Negli appunti la tabella dei segni per 0 < a < 1 è rimasta vuota: è quella della seconda riga qui sopra.' },
        { t: 'h', text: 'Proprietà dei logaritmi' },
        { t: 'table', head: ['Proprietà', 'Formula', 'Esempio'], rows: [
          ['Prodotto', 'log(xy) = log x + log y', 'log₂ 4 + log₂ 8 = log₂ 32 = 5'],
          ['Quoziente', 'log(x/y) = log x − log y', 'log₃ 54 − log₃ 2 = log₃ 27 = 3'],
          ['Potenza', 'log(xᵏ) = k log x', 'log₂ 8⁵ = 5 · 3 = 15'],
          ['Cambio di base', 'log_a x = log_b x / log_b a', 'log₂ 10 = ln 10 / ln 2'],
          ['Inverse', 'log_a(aˣ) = x; a^(log_a x) = x', 'ln e⁵ = 5'],
        ] },
        { t: 'example', title: 'Calcolare logaritmi', steps: ['log₂ 8 = 3 perché 2³ = 8.', 'log₃ 81 = 4 perché 3⁴ = 81.', 'log₁₀ 0,01 = −2 perché 10⁻² = 0,01.', 'log₅ 1 = 0 per ogni base.'] },
      ],
    },
    {
      title: 'Funzioni composte',
      blocks: [
        { t: 'def', term: 'Funzione composta', text: '(g ∘ f)(x) = g(f(x)): prima si applica f, poi g al risultato. Si può definire se **f(A) ⊆ B**, cioè se tutti i valori di f stanno nel dominio di g.' },
        { t: 'flow', items: ['x', 'f(x)', 'g(f(x))'] },
        { t: 'warn', text: 'L’ordine conta: con f(x) = 2x + 1 e g(y) = y², g(f(3)) = g(7) = 49 mentre f(g(3)) = f(9) = 19.' },
        { t: 'example', title: 'Domini delle composte', steps: ['√(x² + 1): x² + 1 ≥ 1 > 0 sempre ⇒ dominio ℝ.', 'log₂(x² − 1): serve x² − 1 > 0 ⇒ x < −1 oppure x > 1.', 'ln(x − 3): x > 3. √(4 − x): x ≤ 4. 1/(x² − 4): x ≠ ±2.'], result: 'Metodo: le condizioni della funzione esterna si applicano all’argomento interno.' },
      ],
    },
    {
      title: 'Costi, ricavi e profitto',
      blocks: [
        { t: 'table', head: ['Funzione', 'Formula', 'Significato'], rows: [
          ['Costo totale', 'C(x) = Cm·x + Cf', 'Cm costo unitario, Cf costo fisso'],
          ['Ricavo', 'R(x) = r·x', 'r prezzo unitario (può anche non essere lineare)'],
          ['Profitto', 'P(x) = R(x) − C(x)', '= (r − Cm)x − Cf nel caso lineare'],
        ] },
        { t: 'def', term: 'Punto di pareggio (break even)', text: 'La quantità x* in cui P(x*) = 0, cioè R(x*) = C(x*). Se r > Cm, sopra x* si guadagna e sotto si perde.' },
        { t: 'h', text: 'Profitto quadratico' },
        { t: 'formula', expr: 'x_v = −b / (2a)', note: 'ascissa del vertice della parabola ax² + bx + c' },
        { t: 'formula', expr: 'x = (−b ± √Δ) / (2a),  Δ = b² − 4ac', note: 'radici: servono per pareggio e disequazioni' },
        { t: 'key', items: ['a < 0: parabola verso il basso, il vertice è il **massimo** profitto.', 'a > 0: parabola verso l’alto, il vertice è un minimo.', 'Disequazioni: con a > 0 la parabola è negativa **tra** le radici e positiva **fuori**.'] },
        { t: 'example', title: 'R = 2x², C = 7x + 4', steps: ['P(x) = 2x² − 7x − 4.', 'Δ = 49 + 32 = 81 ⇒ x = (7 ± 9)/4 ⇒ 4 oppure −1/2.', 'Pareggio x* = 4 (la soluzione negativa non ha senso).', 'Vertice x_v = 7/4, P(7/4) = −81/8: è un minimo.'] },
        { t: 'example', title: 'Massimo profitto: R = −4x² + 12x, C = −4x + 6', steps: ['P(x) = −4x² + 16x − 6.', 'x_v = −16/(−8) = 2.', 'P(2) = −16 + 32 − 6 = 10.'], result: 'Profitto massimo 10 con x = 2.' },
        { t: 'example', title: 'Tariffa telefonica T(x) = x² − 80x + 1400 < 700', steps: ['x² − 80x + 700 < 0.', 'Δ = 6400 − 2800 = 3600, radici (80 ± 60)/2 = 10 e 70.', 'Parabola verso l’alto: negativa tra le radici.', 'Vertice: T(40) = 1600 − 3200 + 1400 = −200.'], result: 'Spesa sotto 700 € per 10 < x < 70. Negli appunti il vertice è scritto (40, −80): è −200.' },
        { t: 'example', title: 'Due linee di produzione', steps: ['C₁ = 300x + 550.000; C₂ = 250x + 650.000.', 'Uguaglio: 50x = 100.000 ⇒ x* = 2000.', 'Sotto 2000 pezzi conviene la linea 1 (costi fissi più bassi).', 'Sopra 2000 conviene la linea 2 (costo unitario più basso): a 3000 pezzi C₁ = 1.450.000, C₂ = 1.400.000.'], result: 'Negli appunti la conclusione è invertita: oltre 2000 conviene la linea 2.' },
      ],
    },
  ],
  summary: [
    '|x|: a V, decrescente poi crescente. mx + q: m pendenza, q intercetta.',
    'xⁿ pari: decrescente su (−∞, 0], crescente su [0, +∞). xⁿ dispari: sempre crescente.',
    'Radice pari: x ≥ 0. Radice dispari: tutto ℝ.',
    'aˣ: a > 0, a ≠ 1, sempre positiva, passa per (0, 1).',
    'log_a x: x > 0, passa per (1, 0); segni diversi per base > 1 e < 1.',
    'log(xy) = log x + log y; log(x/y) = log x − log y; log xᵏ = k log x.',
    'g(f(x)): f(A) ⊆ dominio di g; l’ordine conta.',
    'P = R − C; pareggio P = 0; vertice −b/(2a); massimo se a < 0.',
  ],
};

export default c;
