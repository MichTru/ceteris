import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm7',
  intro:
    'L’integrale è l’operazione inversa della derivata. Dal costo marginale si ricostruisce il costo totale; dall’integrale definito si calcolano aree. Vediamo primitive, integrali immediati, integrazione per parti, il teorema fondamentale e la differenza tra integrale e area.',
  sections: [
    {
      title: 'Primitive e integrale indefinito',
      blocks: [
        { t: 'def', term: 'Primitiva', text: 'F è una primitiva di f se **F′(x) = f(x)**. Integrare è l’operazione inversa di derivare.' },
        { t: 'p', text: 'Se F è una primitiva, lo è anche F + c per qualsiasi costante c, perché la derivata di una costante è zero. Viceversa, **due primitive della stessa funzione differiscono per una costante**.' },
        { t: 'formula', expr: '∫ f(x) dx = F(x) + c', note: 'integrale indefinito: l’insieme di tutte le primitive' },
        { t: 'p', text: 'Una condizione come F(x₀) = y₀ fissa la costante c.' },
        { t: 'example', title: 'Primitiva con condizione', steps: ['g(x) = x/√(3x² + 1). Provo G(x) = ⅓√(3x² + 1).', 'Verifica: G′ = ⅓ · 6x / (2√(3x² + 1)) = x/√(3x² + 1). ✓', 'Condizione G(1) = 3: ⅓ · √4 + c = 3 ⇒ ⅔ + c = 3 ⇒ c = 7/3.'], result: 'G(x) = ⅓√(3x² + 1) + 7/3.' },
        { t: 'example', title: 'Un caso semplice', steps: ['F′(x) = 2x e F(0) = 5.', 'F(x) = x² + c, F(0) = c = 5.', 'F(3) = 9 + 5 = 14.'] },
      ],
    },
    {
      title: 'Integrali immediati e linearità',
      blocks: [
        { t: 'table', head: ['Funzione', 'Primitiva (+ c)'], rows: [
          ['xⁿ (n ≠ −1)', 'xⁿ⁺¹ / (n + 1)'],
          ['1/x', 'ln|x|'],
          ['eˣ', 'eˣ'],
          ['aˣ', 'aˣ / ln a'],
          ['cos x', 'sin x'],
          ['sin x', '−cos x'],
          ['f′(x) / f(x)', 'ln|f(x)|'],
          ['f′(x) · g′(f(x))', 'g(f(x))'],
        ] },
        { t: 'formula', expr: '∫ (a·f + b·g) dx = a ∫ f dx + b ∫ g dx', note: 'linearità' },
        { t: 'example', title: 'Calcolare primitive', steps: ['∫ x³ dx = x⁴/4 + c (si aumenta l’esponente e si divide per il nuovo).', '∫ √x dx = ∫ x^½ dx = ⅔ x^(3/2) + c.', '∫ (6x² + 4x − 3) dx = 2x³ + 2x² − 3x + c.', '∫ 2x/(x² + 1) dx = ln(x² + 1) + c: sopra c’è la derivata di sotto.'] },
        { t: 'warn', text: 'Non confondere: (x⁵)′ = 5x⁴ è la derivata, mentre x⁶/6 è la primitiva di x⁵. 1/x è l’unico caso escluso dalla regola delle potenze.' },
      ],
    },
    {
      title: 'Integrazione per parti',
      blocks: [
        { t: 'formula', expr: '∫ f(x)·g′(x) dx = f(x)·g(x) − ∫ f′(x)·g(x) dx', note: 'deriva dalla regola del prodotto (fg)′ = f′g + fg′' },
        { t: 'list', items: ['Come **f** scelgo il fattore che si semplifica derivando (x, ln x).', 'Come **g′** scelgo quello facile da integrare (eˣ, cos x).'] },
        { t: 'example', title: '∫ x·eˣ dx', steps: ['f = x, g′ = eˣ ⇒ f′ = 1, g = eˣ.', 'x·eˣ − ∫ 1·eˣ dx = x·eˣ − eˣ.', 'Verifica derivando: eˣ(x − 1) → eˣ(x − 1) + eˣ = x·eˣ ✓.'], result: '∫ x·eˣ dx = eˣ(x − 1) + c.' },
        { t: 'example', title: '∫ ln x dx', steps: ['Scrivo 1 · ln x: f = ln x, g′ = 1 ⇒ f′ = 1/x, g = x.', 'x ln x − ∫ x · (1/x) dx = x ln x − x.'], result: '∫ ln x dx = x ln x − x + c.' },
        { t: 'example', title: '∫ x·cos x dx', steps: ['f = x, g′ = cos x ⇒ g = sin x.', 'x sin x − ∫ sin x dx = x sin x + cos x.'] },
      ],
    },
    {
      title: 'Dal costo marginale al costo totale',
      blocks: [
        { t: 'p', text: 'Il costo marginale è la derivata del costo totale, quindi il costo totale è una **primitiva del marginale**. La costante di integrazione è il **costo fisso** C(0), che si trova con un dato del problema.' },
        { t: 'flow', items: ['Integro C′(x)', 'Ottengo C(x) = … + k', 'Uso la condizione data (es. C(50) = 200)', 'Ricavo k = costo fisso'] },
        { t: 'example', title: 'I cappelli: C′(x) = 3,20 − 0,001x, C(50) = 200 €', steps: ['C(x) = 3,2x − 0,001 · x²/2 + k = 3,2x − 0,0005x² + k.', 'C(50) = 160 − 0,0005 · 2500 + k = 160 − 1,25 + k = 158,75 + k.', '158,75 + k = 200 ⇒ k = 41,25.'], result: 'C(x) = 3,2x − 0,0005x² + 41,25. Negli appunti la funzione finale riporta 41,42: è un refuso.' },
        { t: 'example', title: 'Altri esempi', steps: ['C′ = 6x + 10, costo fisso 200 ⇒ C = 3x² + 10x + 200; C(10) = 600.', 'R′ = 100 − 2x, R(0) = 0 ⇒ R = 100x − x²; R(20) = 1600.'] },
      ],
    },
    {
      title: 'Integrale definito e aree',
      blocks: [
        { t: 'p', text: 'Divido [a, b] in n rettangoli di base Δx e altezza f(xᵢ) e sommo le aree: è una **somma di Riemann**, Σ f(xᵢ)Δx. Con rettangoli sempre più sottili (n → ∞) la somma tende all’**integrale definito**.' },
        { t: 'formula', expr: '∫ₐᵇ f(x) dx = F(b) − F(a)', note: 'teorema fondamentale del calcolo: F è una primitiva di f continua' },
        { t: 'table', head: ['Proprietà', 'Formula'], rows: [
          ['Estremi uguali', '∫ₐᵃ f dx = 0'],
          ['Scambio degli estremi', '∫ₐᵇ f dx = −∫ᵦᵃ f dx'],
          ['Additività', '∫ₐᵇ f dx = ∫ₐᶜ f dx + ∫ᶜᵇ f dx'],
        ] },
        { t: 'example', title: 'Calcolare integrali definiti', steps: ['∫₀² x² dx = [x³/3]₀² = 8/3.', '∫₁³ 2x dx = [x²]₁³ = 9 − 1 = 8.', '∫₀³ (2x + 1) dx = [x² + x]₀³ = 12.', '∫₀¹ eˣ dx = e − 1 ≈ 1,718.', '∫₁ᵉ 1/x dx = ln e − ln 1 = 1.'] },
        { t: 'h', text: 'Integrale e area non sono la stessa cosa' },
        { t: 'figure', scene: 'area', caption: 'x³ su [−1, 1]: la parte sotto l’asse conta con il segno meno.' },
        { t: 'list', items: ['Se f ≥ 0 su [a, b], l’integrale è l’**area** tra il grafico e l’asse x.', 'Dove **f < 0** l’integrale è **negativo**.', 'Per l’**area geometrica** si spezza l’integrale negli zeri di f e si sommano i valori assoluti.'] },
        { t: 'example', title: 'f(x) = x³ su [−1, 1]', steps: ['∫₋₁⁰ x³ dx = [x⁴/4]₋₁⁰ = 0 − ¼ = −¼.', '∫₀¹ x³ dx = ¼.', '∫₋₁¹ x³ dx = −¼ + ¼ = 0.', 'Area = |−¼| + ¼ = ½.'], result: 'L’integrale vale 0, ma l’area è ½.' },
      ],
    },
  ],
  summary: [
    'F primitiva di f se F′ = f; le primitive differiscono per una costante.',
    '∫ xⁿ = xⁿ⁺¹/(n + 1), ∫ 1/x = ln|x|, ∫ eˣ = eˣ, ∫ f′/f = ln|f|.',
    'Per parti: ∫ f g′ = f g − ∫ f′ g (∫ x eˣ = eˣ(x − 1)).',
    'C(x) = ∫ C′(x) dx; la costante è il costo fisso (cappelli: 41,25).',
    '∫ₐᵇ f = F(b) − F(a); scambiare gli estremi cambia il segno.',
    'f < 0 ⇒ integrale negativo; area: spezza negli zeri e somma i valori assoluti.',
  ],
};

export default c;
