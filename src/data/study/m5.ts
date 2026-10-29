import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm5',
  intro:
    'La derivata misura quanto velocemente cambia una funzione in un punto: è la pendenza della retta tangente. In economia è la grandezza marginale: il costo marginale è la derivata del costo. In questo capitolo impariamo la definizione, le regole per calcolarla, i punti in cui non esiste e il teorema di De l’Hôpital per i limiti difficili.',
  sections: [
    {
      title: 'Dal rapporto incrementale alla derivata',
      blocks: [
        { t: 'p', text: 'Prendiamo due punti del grafico, P = (x₀, f(x₀)) e Q = (x₀ + h, f(x₀ + h)). La retta che li unisce è una **secante** e la sua pendenza è il **rapporto incrementale**.' },
        { t: 'formula', expr: '[f(x₀ + h) − f(x₀)] / h', note: 'rapporto incrementale: pendenza della secante PQ' },
        { t: 'p', text: 'Se avviciniamo Q a P (h → 0), la secante ruota fino a diventare la **retta tangente** in P. La sua pendenza è la derivata.' },
        { t: 'figure', scene: 'tangente', caption: 'La secante PQ e la tangente in P: per h → 0 la secante diventa tangente.' },
        { t: 'def', term: 'Derivata in x₀', text: 'f′(x₀) = lim (h → 0) [f(x₀ + h) − f(x₀)] / h, se il limite esiste finito.' },
        { t: 'formula', expr: 'y = f′(x₀)(x − x₀) + f(x₀)', note: 'equazione della retta tangente nel punto x₀' },
        { t: 'example', title: 'Tangente a f(x) = x² in x₀ = 3', steps: ['f(3) = 9: punto di tangenza (3, 9).', 'f′(x) = 2x ⇒ f′(3) = 6: pendenza.', 'y = 6(x − 3) + 9 = 6x − 9.'], result: 'Tangente y = 6x − 9.' },
        { t: 'example', title: 'Il rapporto incrementale si avvicina alla derivata', steps: ['f(x) = x², x₀ = 1, h = 0,1.', '(1,21 − 1)/0,1 = 2,1.', 'Con h = 0,01 viene 2,01; con h → 0 tende a f′(1) = 2.'] },
        { t: 'key', items: ['f′(x₀) = 0: tangente orizzontale.', 'f′(x₀) > 0: la funzione sale in quel punto; < 0: scende.'] },
      ],
    },
    {
      title: 'Tabella e regole di derivazione',
      blocks: [
        { t: 'table', head: ['Funzione', 'Derivata'], rows: [
          ['c (costante)', '0'],
          ['x', '1'],
          ['xⁿ', 'n·xⁿ⁻¹ (vale per ogni esponente reale)'],
          ['√x', '1/(2√x)'],
          ['1/x', '−1/x²'],
          ['eˣ', 'eˣ'],
          ['aˣ', 'aˣ · ln a'],
          ['ln x', '1/x'],
          ['log_a x', '1/(x ln a)'],
          ['sin x', 'cos x'],
          ['cos x', '−sin x'],
        ] },
        { t: 'table', head: ['Regola', 'Formula'], rows: [
          ['Linearità', '(a·f + b·g)′ = a·f′ + b·g′'],
          ['Prodotto', '(f · g)′ = f′g + fg′'],
          ['Quoziente', '(f / g)′ = (f′g − fg′) / g²'],
          ['Composta (catena)', '[g(f(x))]′ = g′(f(x)) · f′(x)'],
        ] },
        { t: 'warn', text: 'La derivata del prodotto **non** è il prodotto delle derivate. Nel quoziente l’ordine conta: prima f′g, poi meno fg′.' },
        { t: 'example', title: 'Applicare le regole', steps: ['(3x² − 5x + 2)′ = 6x − 5; in x = 2 vale 7.', 'Prodotto: (x·eˣ)′ = 1·eˣ + x·eˣ = eˣ(1 + x).', 'Prodotto: (x² ln x)′ = 2x ln x + x²·(1/x) = 2x ln x + x; in x = 1 vale 1.', 'Quoziente: [(x + 1)/(x − 1)]′ = [(x − 1) − (x + 1)]/(x − 1)² = −2/(x − 1)².', 'Catena: (e^(x²))′ = e^(x²) · 2x.', 'Catena: [ln(3x + 1)]′ = 3/(3x + 1).', 'Catena: [(2x + 1)³]′ = 3(2x + 1)² · 2; in 0 vale 6.'] },
        { t: 'flow', title: 'Come riconoscere la regola', items: ['È una somma? Derivo termine per termine', 'È un prodotto di due funzioni? Regola del prodotto', 'È una frazione con x sotto? Regola del quoziente', 'C’è una funzione dentro un’altra (radice, log, e^…, potenza di una parentesi)? Catena'] },
      ],
    },
    {
      title: 'Derivate in economia',
      blocks: [
        { t: 'table', head: ['Grandezza', 'Formula', 'Significato'], rows: [
          ['Costo marginale', 'C′(x)', 'Costo approssimato di un’unità in più'],
          ['Ricavo marginale', 'R′(x)', 'Ricavo approssimato di un’unità in più'],
          ['Profitto marginale', 'P′(x) = R′(x) − C′(x)', 'Profitto di un’unità in più'],
          ['Costo medio', 'CM(x) = C(x)/x', 'Costo per unità prodotta'],
          ['Tasso medio di variazione', '[C(x + Δx) − C(x)]/Δx', 'Variazione media su un intervallo finito'],
        ] },
        { t: 'p', text: 'Il tasso medio è un rapporto incrementale su un intervallo finito; il costo marginale è il suo **limite per Δx → 0**, cioè la derivata.' },
        { t: 'example', title: 'Le magliette: C(x) = 2000 + 10x + 0,2x²', steps: ['C′(x) = 10 + 0,4x.', 'C′(100) = 50: il 101° pezzo costa circa 50 €.', 'Tasso medio tra 100 e 110: C(110) = 5520, C(100) = 5000 ⇒ 520/10 = 52.', 'Costo medio a 100: 5000/100 = 50.'] },
        { t: 'example', title: 'Ricavo marginale', steps: ['R(x) = 50x − 0,5x² ⇒ R′(x) = 50 − x.', 'R′(20) = 30.', 'Con costo lineare C = 500 + 4x il marginale è costante: C′ = 4.'] },
      ],
    },
    {
      title: 'Derivabilità e punti di non derivabilità',
      blocks: [
        { t: 'p', text: 'La **derivata destra** f′₊(x₀) si calcola con h → 0⁺, la **sinistra** f′₋(x₀) con h → 0⁻. f è derivabile in x₀ se esistono finite e coincidono.' },
        { t: 'key', items: ['**Derivabile ⇒ continua**.', 'Il viceversa è falso: |x| è continua in 0 ma non derivabile.'] },
        { t: 'table', head: ['Punto', 'Derivate destra e sinistra', 'Esempio'], rows: [
          ['Angoloso', 'Finite ma diverse', '|x| in 0: −1 e +1'],
          ['Cuspide', 'Infinite di segno opposto', '√|x| in 0'],
          ['Flesso a tangente verticale', 'Infinite dello stesso segno', '∛x in 0'],
        ] },
        { t: 'example', title: '|x − 2| in x = 2', steps: ['Per x > 2: f = x − 2, pendenza +1.', 'Per x < 2: f = 2 − x, pendenza −1.'], result: 'Derivate diverse: punto angoloso.' },
      ],
    },
    {
      title: 'De l’Hôpital e derivate successive',
      blocks: [
        { t: 'def', term: 'Teorema di De l’Hôpital', text: 'Se lim f/g è nella forma **0/0 o ∞/∞**, f e g sono derivabili e g′ ≠ 0 vicino al punto, allora lim f/g = lim f′/g′ (se quest’ultimo esiste).' },
        { t: 'warn', text: 'Si derivano **separatamente** numeratore e denominatore. Non si usa la regola del quoziente!' },
        { t: 'example', title: 'lim (x → 0) (∛(8 + x) − 2)/x', steps: ['Sostituendo: (2 − 2)/0 = 0/0.', 'Derivata del numeratore: ⅓(8 + x)^(−⅔). In 0: ⅓ · 8^(−⅔) = ⅓ · ¼ = 1/12.', 'Derivata del denominatore: 1.'], result: 'Limite = 1/12.' },
        { t: 'example', title: 'lim (x → 0⁺) x · ln x', steps: ['Forma 0 · (−∞): non si applica subito.', 'Riscrivo come ln x / (1/x): forma ∞/∞.', 'Derivo: (1/x) / (−1/x²) = −x.', '−x → 0.'], result: 'Limite = 0.' },
        { t: 'example', title: 'Altri limiti notevoli', steps: ['(eˣ − 1)/x → eˣ/1 → 1 per x → 0.', 'ln(1 + x)/x → 1/(1 + x) → 1.', 'x/eˣ → 1/eˣ → 0 per x → +∞: l’esponenziale batte la potenza.'] },
        { t: 'h', text: 'Derivate successive' },
        { t: 'p', text: 'La **derivata seconda** f″ è la derivata di f′; la terza f‴ è la derivata di f″. Servono per massimi, minimi e concavità.' },
        { t: 'example', title: 'Derivare più volte', steps: ['f = x⁴ ⇒ f′ = 4x³, f″ = 12x², f‴ = 24x, f⁽⁴⁾ = 24.', 'f = x³ − 6x² ⇒ f′ = 3x² − 12x, f″ = 6x − 12, f″(2) = 0.'] },
      ],
    },
  ],
  summary: [
    'Rapporto incrementale = pendenza della secante; derivata = suo limite per h → 0 = pendenza della tangente.',
    'Tangente: y = f′(x₀)(x − x₀) + f(x₀).',
    '(xⁿ)′ = nxⁿ⁻¹, (eˣ)′ = eˣ, (ln x)′ = 1/x, (√x)′ = 1/(2√x).',
    'Prodotto f′g + fg′; quoziente (f′g − fg′)/g²; catena g′(f(x))·f′(x).',
    'Costo marginale C′(x): costo di un’unità in più.',
    'Derivabile ⇒ continua, non viceversa: angoloso, cuspide, flesso verticale.',
    'De l’Hôpital solo con 0/0 o ∞/∞, derivate separate; 0·∞ va riscritto.',
  ],
};

export default c;
