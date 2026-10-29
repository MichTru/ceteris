import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm4',
  intro:
    'Il limite dice cosa fa una funzione quando x si avvicina a un punto o va all’infinito. Con i limiti troviamo gli asintoti, capiamo se una funzione è continua e possiamo usare tre teoremi fondamentali. È il capitolo che collega le funzioni elementari alle derivate.',
  sections: [
    {
      title: 'Il concetto di limite',
      blocks: [
        { t: 'formula', expr: 'lim (x → x₀) f(x) = L', note: 'quando x si avvicina a x₀, f(x) si avvicina a L' },
        { t: 'p', text: 'x si **avvicina** a x₀ senza per forza arrivarci: il valore f(x₀) non conta, e la funzione può anche non essere definita in x₀.' },
        { t: 'table', head: ['Limite', 'Da dove arriva x', 'Simbolo'], rows: [
          ['Destro', 'Da valori più grandi di x₀', 'x → x₀⁺'],
          ['Sinistro', 'Da valori più piccoli di x₀', 'x → x₀⁻'],
        ] },
        { t: 'key', items: ['Il limite **esiste** solo se limite destro e sinistro esistono e **coincidono**.', '1/x per x → 0: da destra +∞, da sinistra −∞. Il limite in 0 non esiste.'] },
        { t: 'h', text: 'Limiti delle funzioni elementari' },
        { t: 'table', head: ['Funzione', 'x → +∞', 'x → −∞', 'x → 0⁺'], rows: [
          ['xⁿ (n > 0)', '+∞', '+∞ se n pari, −∞ se dispari', '0'],
          ['1/x', '0⁺', '0⁻', '+∞'],
          ['√x', '+∞', 'non definita', '0'],
          ['eˣ', '+∞', '0⁺', '1'],
          ['ln x', '+∞', 'non definita', '−∞'],
          ['aˣ con 0 < a < 1', '0⁺', '+∞', '1'],
        ] },
        { t: 'def', term: 'Gerarchia degli infiniti', text: 'Per x → +∞: ln x ≪ xⁿ ≪ eˣ. L’esponenziale batte qualsiasi potenza, che batte il logaritmo.' },
        { t: 'p', text: 'Se la funzione è continua nel punto, il limite si calcola **sostituendo**: lim (x → 2) (x² + 3x) = 4 + 6 = 10.' },
      ],
    },
    {
      title: 'Algebra dei limiti e forme indeterminate',
      blocks: [
        { t: 'table', head: ['Operazione', 'Risultato'], rows: [
          ['+∞ + L, +∞ + ∞', '+∞'],
          ['L · ∞ (L ≠ 0)', '∞ con la regola dei segni'],
          ['L / ∞', '0'],
          ['L / 0⁺ (L > 0)', '+∞'],
          ['L / 0⁻ (L > 0)', '−∞'],
        ] },
        { t: 'def', term: 'Forme indeterminate', text: 'Casi in cui il risultato non si conosce a priori e l’espressione va trasformata: **0/0, ∞/∞, 0 · ∞, +∞ − ∞, 0⁰, 1^∞, ∞⁰** (sono 7).' },
        { t: 'h', text: '∞/∞ con i polinomi' },
        { t: 'p', text: 'Si raccoglie la potenza più alta sopra e sotto, poi si confrontano i gradi.' },
        { t: 'table', head: ['Gradi', 'Limite', 'Esempio'], rows: [
          ['Numeratore > denominatore', '±∞ (segno dei coefficienti direttivi)', '(x³ + 1)/(x² + 5) → +∞'],
          ['Uguali', 'Rapporto dei coefficienti direttivi', '(4x² − x)/(2x² + 7) → 2'],
          ['Numeratore < denominatore', '0', '(3x + 2)/(x² + 1) → 0'],
        ] },
        { t: 'h', text: '0/0 con i polinomi' },
        { t: 'p', text: 'Se numeratore e denominatore si annullano in x₀, entrambi contengono il fattore (x − x₀): si **scompone** e si **semplifica**.' },
        { t: 'example', title: 'lim (x → 1) (x² − 1)/(x − 1)', steps: ['Sostituendo: 0/0.', 'x² − 1 = (x − 1)(x + 1).', 'Semplifico: resta x + 1.', 'Sostituisco x = 1.'], result: 'Il limite è 2.' },
        { t: 'example', title: 'Altri casi', steps: ['(x² − 9)/(x − 3) = x + 3 → 6 per x → 3.', '+∞ − ∞ con i polinomi: vince il grado più alto. x³ − 5x² = x³(1 − 5/x) → +∞.', 'lim (x → 2⁺) 1/(x − 2) = 1/0⁺ = +∞; da sinistra −∞.'] },
      ],
    },
    {
      title: 'Gli asintoti',
      blocks: [
        { t: 'p', text: 'Un asintoto è una retta a cui il grafico si avvicina sempre di più.' },
        { t: 'table', head: ['Asintoto', 'Condizione', 'Dove cercarlo'], rows: [
          ['Verticale x = x₀', 'lim (x → x₀) f(x) = ±∞ (anche da un solo lato)', 'Punti esclusi dal dominio, estremi aperti'],
          ['Orizzontale y = L', 'lim (x → ±∞) f(x) = L finito', 'All’infinito'],
          ['Obliquo y = mx + q', 'm = lim f(x)/x finito e ≠ 0; q = lim [f(x) − mx] finito', 'All’infinito, solo se manca l’orizzontale'],
        ] },
        { t: 'figure', scene: 'asintoti', caption: 'f(x) = (x + 1)/(x − 1): asintoto verticale x = 1 e orizzontale y = 1.' },
        { t: 'flow', title: 'Procedura', items: ['Trovo il dominio', 'Nei punti esclusi calcolo il limite: se è ∞ c’è l’asintoto verticale', 'Calcolo il limite per x → ±∞', 'Se è finito: asintoto orizzontale (e niente obliquo)', 'Se è infinito: calcolo m e poi q'] },
        { t: 'example', title: 'f(x) = (x² + 1)/x', steps: ['Dominio: x ≠ 0. lim (x → 0⁺) = +∞ ⇒ asintoto verticale x = 0.', 'Per x → ∞ f → ∞: niente orizzontale.', 'm = lim (x² + 1)/x² = 1.', 'q = lim [(x² + 1)/x − x] = lim 1/x = 0.'], result: 'Asintoto obliquo y = x.' },
        { t: 'example', title: 'f(x) = (2x² + 3x)/(x + 1)', steps: ['Verticale x = −1.', 'm = lim (2x² + 3x)/(x² + x) = 2.', 'f − 2x = (2x² + 3x − 2x² − 2x)/(x + 1) = x/(x + 1) → 1.'], result: 'Obliquo y = 2x + 1.' },
        { t: 'key', items: ['ln x ha asintoto verticale x = 0.', 'eˣ ha asintoto orizzontale y = 0 per x → −∞.'] },
      ],
    },
    {
      title: 'Continuità e discontinuità',
      blocks: [
        { t: 'def', term: 'Funzione continua in x₀', text: 'Valgono tre condizioni: (1) f(x₀) esiste; (2) il limite per x → x₀ esiste finito; (3) il limite è **uguale** a f(x₀).' },
        { t: 'p', text: 'Intuitivamente: il grafico si disegna senza staccare la penna. Polinomi, esponenziali, logaritmi e radici sono continui nel loro dominio. La continuità si studia **solo dove la funzione è definita**: dire che ln x è discontinua in 0 non ha senso.' },
        { t: 'figure', scene: 'discont', caption: 'Salto in x = −1, buco (discontinuità eliminabile) in x = 1,5.' },
        { t: 'table', head: ['Tipo', 'Cosa succede', 'Esempio'], rows: [
          ['Prima specie (salto)', 'Limiti destro e sinistro finiti ma diversi; salto S = L⁺ − L⁻', 'x + 1 per x < 0, x + 4 per x ≥ 0: salto 3'],
          ['Seconda specie', 'Almeno un limite laterale infinito o inesistente', '1/x in 0'],
          ['Terza specie (eliminabile)', 'Il limite esiste finito ma è diverso da f(x₀), o f(x₀) non esiste', '(x² − 4)/(x − 2) in 2: limite 4'],
        ] },
        { t: 'p', text: 'La discontinuità eliminabile si “ripara” ridefinendo f(x₀) uguale al limite.' },
        { t: 'example', title: 'Trovare il parametro per la continuità', steps: ['f(x) = x² + k per x ≤ 1; f(x) = 3x per x > 1.', 'Limite sinistro in 1: 1 + k. Limite destro: 3.', 'Continuità: 1 + k = 3.'], result: 'k = 2.' },
      ],
    },
    {
      title: 'Teoremi sulle funzioni continue',
      blocks: [
        { t: 'table', head: ['Teorema', 'Ipotesi', 'Tesi'], rows: [
          ['Zeri', 'f continua su [a, b], f(a) e f(b) di segno opposto', 'Esiste c ∈ (a, b) con f(c) = 0'],
          ['Bolzano (valori intermedi)', 'f continua su [a, b]', 'f assume tutti i valori tra f(a) e f(b)'],
          ['Weierstrass', 'f continua su un intervallo chiuso e limitato [a, b]', 'f ha massimo e minimo assoluti'],
        ] },
        { t: 'example', title: 'Applicazioni', steps: ['x³ + x − 1 su [0, 1]: f(0) = −1 < 0, f(1) = 1 > 0 ⇒ c’è uno zero tra 0 e 1.', 'f continua su [0, 2] con f(0) = 1 e f(2) = 7: assume sicuramente il valore 4.'] },
        { t: 'warn', text: 'Le ipotesi sono essenziali. 1/x su (0, 1] è continua ma non ha massimo: l’intervallo non è chiuso, e per x → 0⁺ cresce senza limite.' },
      ],
    },
  ],
  summary: [
    'Il limite esiste se destro = sinistro; f(x₀) non conta.',
    'eˣ → 0⁺ per x → −∞; ln x → −∞ per x → 0⁺; ln x ≪ xⁿ ≪ eˣ.',
    'Forme indeterminate: 0/0, ∞/∞, 0·∞, +∞ − ∞, 0⁰, 1^∞, ∞⁰.',
    'Polinomi ∞/∞: confronta i gradi. 0/0: scomponi e semplifica.',
    'Asintoti: verticale (limite infinito in un punto), orizzontale (limite finito all’infinito), obliquo (m = lim f/x, q = lim f − mx).',
    'Continua: f(x₀) esiste, limite finito, uguali.',
    'Discontinuità: 1ª salto, 2ª limite infinito, 3ª eliminabile.',
    'Zeri, Bolzano, Weierstrass: tutti richiedono continuità su [a, b].',
  ],
};

export default c;
