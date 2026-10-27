import type { Unit } from '../../types';

const m7: Unit = {
  id: 'm7',
  n: 7,
  title: 'Integrali',
  subtitle: 'Primitive, regole, aree, costo totale',
  color: '#65A30D',
  colorDark: '#3F6212',
  lessons: [
    {
      id: 'm7l1',
      title: 'Primitive e integrale indefinito',
      icon: '↩️',
      theory: [
        {
          title: 'Primitive',
          points: [
            'F è una **primitiva** di f se **F′(x) = f(x)**: l’integrazione è l’operazione inversa della derivazione.',
            'Se F è primitiva, lo è anche F + c per ogni costante c: **due primitive differiscono per una costante**.',
            '**Integrale indefinito**: ∫ f(x) dx = F(x) + c, l’insieme di tutte le primitive.',
            'Una condizione come G(x₀) = y₀ fissa la costante c.',
          ],
          example: 'g(x) = x/√(3x² + 1). Una primitiva è G(x) = ⅓√(3x² + 1) + c. Se G(1) = 3: ⅓ · 2 + c = 3 ⇒ c = 7/3.',
        },
        {
          title: 'Integrali immediati',
          points: [
            '**∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c** (n ≠ −1) · **∫ 1/x dx = ln|x| + c**.',
            '**∫ eˣ dx = eˣ + c** · **∫ aˣ dx = aˣ/ln a + c**.',
            '**∫ cos x dx = sin x + c** · **∫ sin x dx = −cos x + c**.',
            '**Linearità**: ∫ (a·f + b·g) dx = a∫f dx + b∫g dx.',
            'Composta: ∫ f′(x)·g′(f(x)) dx = g(f(x)) + c; es. ∫ f′/f dx = ln|f| + c.',
          ],
        },
      ],
      exercises: [
        { id: 'm7-1-1', type: 'mc', topic: 'Primitive', q: 'F è primitiva di f se…', options: ['F′(x) = f(x)', 'f′(x) = F(x)', 'F(x) = f(x) + 1', 'F(x) · f(x) = 1'], answer: 0, explain: 'Derivando la primitiva si ritrova la funzione.' },
        { id: 'm7-1-2', type: 'tf', topic: 'Primitive', q: 'Due primitive della stessa funzione differiscono per una costante.', answer: true, explain: 'La derivata di una costante è 0: F e F + c hanno la stessa derivata.' },
        { id: 'm7-1-3', type: 'mc', topic: 'Integrali immediati', q: '∫ x³ dx = ?', options: ['x⁴/4 + c', '3x² + c', 'x⁴ + c', 'x³/3 + c'], answer: 0, explain: 'Si aumenta l’esponente di 1 e si divide per il nuovo esponente.' },
        { id: 'm7-1-4', type: 'mc', topic: 'Integrali immediati', q: '∫ 1/x dx = ?', options: ['ln|x| + c', '−1/x² + c', 'x⁰/0 + c', 'eˣ + c'], answer: 0, explain: 'È il caso n = −1, escluso dalla regola delle potenze.' },
        { id: 'm7-1-5', type: 'mc', topic: 'Integrali immediati', q: '∫ eˣ dx = ?', options: ['eˣ + c', 'eˣ⁺¹/(x + 1) + c', 'x·eˣ + c', 'ln x + c'], answer: 0, explain: 'eˣ è derivata e primitiva di sé stessa.' },
        { id: 'm7-1-6', type: 'mc', topic: 'Integrali immediati', q: '∫ √x dx = ?', options: ['⅔ x^(3/2) + c', '1/(2√x) + c', '½ x^(½) + c', 'x^(3/2) + c'], answer: 0, explain: 'x^½ ⇒ x^(3/2)/(3/2) = ⅔ x^(3/2).' },
        { id: 'm7-1-7', type: 'mc', topic: 'Linearità', q: '∫ (6x² + 4x − 3) dx = ?', options: ['2x³ + 2x² − 3x + c', '12x + 4 + c', '6x³ + 4x² − 3x + c', '2x³ + 4x² − 3 + c'], answer: 0, explain: '6 · x³/3 + 4 · x²/2 − 3x = 2x³ + 2x² − 3x.' },
        { id: 'm7-1-8', type: 'mc', topic: 'Integrali immediati', q: '∫ 2x/(x² + 1) dx = ?', options: ['ln(x² + 1) + c', '2 ln x + c', 'x² + x + c', '1/(x² + 1) + c'], answer: 0, explain: 'Il numeratore è la derivata del denominatore: ∫ f′/f = ln|f|.' },
        { id: 'm7-1-9', type: 'mc', topic: 'Primitive', q: 'Quale è una primitiva di x/√(3x² + 1)?', options: ['⅓ √(3x² + 1)', '√(3x² + 1)', '3√(3x² + 1)', '⅙ (3x² + 1)²'], answer: 0, explain: 'Derivo ⅓√(3x² + 1): ⅓ · 6x/(2√(3x² + 1)) = x/√(3x² + 1). ✓' },
        { id: 'm7-1-10', type: 'num', topic: 'Costante di integrazione', q: 'G(x) = ⅓√(3x² + 1) + c con G(1) = 3. Quanto vale c? (decimale)', answer: 2.3333, tol: 0.001, shown: '7/3', explain: 'G(1) = ⅓ · √4 + c = ⅔ + c = 3 ⇒ c = 7/3 ≈ 2,333.' },
        { id: 'm7-1-11', type: 'num', topic: 'Costante di integrazione', q: 'F′(x) = 2x e F(0) = 5. Quanto vale F(3)?', answer: 14, tol: 0, explain: 'F = x² + c, F(0) = c = 5 ⇒ F(3) = 9 + 5 = 14.' },
        { id: 'm7-1-12', type: 'match', topic: 'Integrali immediati', q: 'Abbina la funzione alla sua primitiva', pairs: [['xⁿ', 'xⁿ⁺¹/(n + 1)'], ['1/x', 'ln|x|'], ['eˣ', 'eˣ'], ['cos x', 'sin x'], ['sin x', '−cos x']], explain: 'È la tabella delle derivate letta al contrario.' },
      ],
    },
    {
      id: 'm7l2',
      title: 'Integrazione per parti',
      icon: '✂️',
      theory: [
        {
          title: 'La formula',
          points: [
            'Dalla regola del prodotto: **∫ f(x)·g′(x) dx = f(x)·g(x) − ∫ f′(x)·g(x) dx**.',
            'Si sceglie come **f** il fattore che si semplifica derivando (x, ln x) e come **g′** quello facile da integrare (eˣ, cos x).',
            'Trucco per ∫ ln x dx: si scrive come ∫ 1 · ln x dx con g′ = 1.',
          ],
          example: '∫ x eˣ dx: f = x, g′ = eˣ ⇒ x eˣ − ∫ eˣ dx = eˣ(x − 1) + c. ∫ ln x dx = x ln x − ∫ x · (1/x) dx = x ln x − x + c.',
        },
      ],
      exercises: [
        { id: 'm7-2-1', type: 'mc', topic: 'Per parti', q: 'Formula di integrazione per parti:', options: ['∫ f·g′ = f·g − ∫ f′·g', '∫ f·g′ = f′·g − ∫ f·g', '∫ f·g = ∫ f · ∫ g', '∫ f·g′ = f·g + ∫ f′·g′'], answer: 0, explain: 'Deriva dalla regola del prodotto (fg)′ = f′g + fg′.' },
        { id: 'm7-2-2', type: 'mc', topic: 'Per parti', q: '∫ x eˣ dx = ?', options: ['eˣ(x − 1) + c', 'x eˣ + c', '½x² eˣ + c', 'eˣ(x + 1) + c'], answer: 0, explain: 'f = x, g′ = eˣ: x eˣ − eˣ. Controllo: [eˣ(x − 1)]′ = eˣ(x − 1) + eˣ = x eˣ ✓.' },
        { id: 'm7-2-3', type: 'mc', topic: 'Per parti', q: '∫ ln x dx = ?', options: ['x ln x − x + c', '1/x + c', 'x ln x + c', '(ln x)²/2 + c'], answer: 0, explain: '1 · ln x con f = ln x, g′ = 1.' },
        { id: 'm7-2-4', type: 'mc', topic: 'Per parti', q: 'In ∫ x cos x dx conviene scegliere…', options: ['f = x e g′ = cos x', 'f = cos x e g′ = x', 'f = x cos x e g′ = 1', 'Non si integra per parti'], answer: 0, explain: 'Derivando x diventa 1 e l’integrale si semplifica: x sin x + cos x + c.' },
        { id: 'm7-2-5', type: 'mc', topic: 'Per parti', q: '∫ x cos x dx = ?', options: ['x sin x + cos x + c', 'x sin x − cos x + c', '½x² sin x + c', '−x sin x + c'], answer: 0, explain: 'x sin x − ∫ sin x dx = x sin x + cos x.' },
        { id: 'm7-2-6', type: 'tf', topic: 'Per parti', q: 'L’integrazione per parti deriva dalla regola di derivazione del prodotto.', answer: true, explain: 'Integrando (fg)′ = f′g + fg′ si ottiene la formula.' },
        { id: 'm7-2-7', type: 'order', topic: 'Per parti', q: 'Ordina i passaggi per calcolare ∫ x eˣ dx', items: ['Scelgo f = x e g′ = eˣ', 'Calcolo f′ = 1 e g = eˣ', 'Applico: x eˣ − ∫ 1 · eˣ dx', 'Risultato: eˣ(x − 1) + c'], explain: 'Alla fine si può verificare derivando.' },
      ],
    },
    {
      id: 'm7l3',
      title: 'Integrali e costi marginali',
      icon: '🎩',
      theory: [
        {
          title: 'Dal marginale al totale',
          points: [
            'Il costo totale è una **primitiva del costo marginale**: C(x) = ∫ C′(x) dx.',
            'La costante di integrazione è il **costo fisso** (C(0)); la si trova con una condizione data.',
            'Lo stesso vale per il ricavo: R(x) = ∫ R′(x) dx con R(0) = 0.',
          ],
          example: 'Cappelli: C′(x) = 3,20 − 0,001x e C(50) = 200. C = 3,2x − 0,0005x² + k. C(50) = 160 − 1,25 + k = 158,75 + k = 200 ⇒ k = 41,25. C(x) = 3,2x − 0,0005x² + 41,25.',
        },
      ],
      exercises: [
        { id: 'm7-3-1', type: 'mc', topic: 'Costo totale', q: 'Come si ottiene il costo totale dal costo marginale?', options: ['Integrando il costo marginale', 'Derivando il costo marginale', 'Dividendo il marginale per x', 'Moltiplicando il marginale per x'], answer: 0, explain: 'C′ è la derivata di C, quindi C è una primitiva di C′.' },
        { id: 'm7-3-2', type: 'mc', topic: 'Costo totale', q: 'Che significato ha la costante di integrazione nel costo totale?', options: ['Il costo fisso', 'Il costo marginale', 'Il prezzo di vendita', 'Il profitto massimo'], answer: 0, explain: 'C(0) = k: il costo sostenuto anche producendo zero.' },
        { id: 'm7-3-3', type: 'num', topic: 'Costo totale', scenario: 'Cappelli: C′(x) = 3,20 − 0,001x e C(50) = 200 €.', q: 'Quanto vale il costo fisso?', answer: 41.25, tol: 0.001, unit: '€', explain: 'C = 3,2x − 0,0005x² + k; C(50) = 158,75 + k = 200 ⇒ k = 41,25.', profNote: 'Negli appunti il costo fisso viene calcolato correttamente come 41,25, ma nella funzione finale è scritto 41,42. Il valore giusto è C(x) = 3,2x − 0,0005x² + 41,25.' },
        { id: 'm7-3-4', type: 'mc', topic: 'Costo totale', scenario: 'Cappelli: C′(x) = 3,20 − 0,001x.', q: 'Qual è la forma del costo totale?', options: ['3,2x − 0,0005x² + k', '3,2 − 0,001x² + k', '−0,001 + k', '3,2x − 0,001x² + k'], answer: 0, explain: '∫ 0,001x dx = 0,001 · x²/2 = 0,0005x².' },
        { id: 'm7-3-5', type: 'num', topic: 'Costo totale', q: 'C′(x) = 6x + 10, costo fisso 200. Quanto vale C(10)?', answer: 600, tol: 0, unit: '€', explain: 'C = 3x² + 10x + 200 ⇒ 300 + 100 + 200 = 600.' },
        { id: 'm7-3-6', type: 'num', topic: 'Ricavo totale', q: 'R′(x) = 100 − 2x e R(0) = 0. Quanto vale R(20)?', answer: 1600, tol: 0, explain: 'R = 100x − x² ⇒ 2000 − 400 = 1600.' },
        { id: 'm7-3-7', type: 'num', topic: 'Costo totale', q: 'C′(x) = 4 e C(10) = 90. Quanto vale il costo fisso?', answer: 50, tol: 0, unit: '€', explain: 'C = 4x + k; 40 + k = 90 ⇒ k = 50.' },
      ],
    },
    {
      id: 'm7l4',
      title: 'Integrale definito e aree',
      icon: '📊',
      theory: [
        {
          title: 'Dalle somme di Riemann al teorema fondamentale',
          points: [
            '**Somme di Riemann**: divido [a, b] in n rettangoli di base Δx e altezza f(xᵢ) e sommo Σ f(xᵢ)Δx. Per n → ∞ si ottiene **∫ₐᵇ f(x) dx**.',
            '**Teorema fondamentale del calcolo**: se F è una primitiva di f continua, **∫ₐᵇ f(x) dx = F(b) − F(a)**.',
            'Proprietà: ∫ₐᵃ f = 0; ∫ₐᵇ f = −∫ᵦᵃ f; ∫ₐᵇ f = ∫ₐᶜ f + ∫ᶜᵇ f (additività).',
          ],
          example: '∫₀² x² dx = [x³/3]₀² = 8/3.',
        },
        {
          title: 'Integrale e area',
          points: [
            'Se f ≥ 0 su [a, b], l’integrale è l’**area** tra il grafico e l’asse x.',
            'Dove **f < 0** l’integrale è **negativo**: conta l’area “con il segno meno”.',
            'Per l’**area geometrica** si **spezza l’integrale** nei punti in cui f cambia segno e si sommano i valori assoluti.',
          ],
          example: '∫₋₁⁰ x³ dx = [x⁴/4]₋₁⁰ = 0 − ¼ = −¼, ma l’area è ¼. Su [−1, 1] l’integrale di x³ vale 0 mentre l’area è ½.',
        },
      ],
      exercises: [
        { id: 'm7-4-1', type: 'mc', topic: 'Teorema fondamentale', q: 'Teorema fondamentale del calcolo: ∫ₐᵇ f(x) dx = ?', options: ['F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', 'F(b) · F(a)'], answer: 0, explain: 'Primitiva calcolata nell’estremo superiore meno quella nell’inferiore.' },
        { id: 'm7-4-2', type: 'num', topic: 'Integrale definito', q: '∫₀² x² dx = ? (decimale)', answer: 2.6667, tol: 0.001, shown: '8/3', explain: '[x³/3]₀² = 8/3 ≈ 2,667.' },
        { id: 'm7-4-3', type: 'num', topic: 'Integrale definito', q: '∫₁³ 2x dx = ?', answer: 8, tol: 0, explain: '[x²]₁³ = 9 − 1 = 8.' },
        { id: 'm7-4-4', type: 'num', topic: 'Integrale e area', q: '∫₋₁⁰ x³ dx = ? (decimale)', answer: -0.25, tol: 0.001, shown: '−1/4', explain: '[x⁴/4]₋₁⁰ = 0 − ¼ = −¼. È negativo perché x³ < 0 su (−1, 0).' },
        { id: 'm7-4-5', type: 'num', topic: 'Integrale e area', q: 'Area della regione tra x³ e l’asse x per x ∈ [−1, 0]? (decimale)', answer: 0.25, tol: 0.001, shown: '1/4', explain: 'L’area è sempre positiva: |−¼| = ¼.' },
        { id: 'm7-4-6', type: 'num', topic: 'Integrale e area', q: '∫₋₁¹ x³ dx = ?', answer: 0, tol: 0, explain: 'Le due parti (−¼ e +¼) si compensano.' },
        { id: 'm7-4-7', type: 'num', topic: 'Integrale e area', q: 'Area totale tra x³ e l’asse x per x ∈ [−1, 1]? (decimale)', answer: 0.5, tol: 0.001, shown: '1/2', explain: 'Si spezza in 0: ¼ + ¼ = ½.' },
        { id: 'm7-4-8', type: 'hotspot', topic: 'Integrale e area', scene: 'area', q: 'Tocca la regione che contribuisce all’integrale con il segno meno', answer: 'neg', explain: 'Dove il grafico è sotto l’asse x, f < 0 e l’integrale è negativo.' },
        { id: 'm7-4-9', type: 'mc', topic: 'Integrale e area', q: 'Per calcolare l’area quando f cambia segno bisogna…', options: ['spezzarlo negli zeri e sommare i valori assoluti', 'calcolare un solo integrale su tutto [a, b]', 'cambiare il segno di tutto l’integrale finale', 'derivare f e poi integrare la sua derivata f′'], answer: 0, explain: 'Altrimenti le parti positive e negative si compensano.' },
        { id: 'm7-4-10', type: 'num', topic: 'Integrale definito', q: '∫₀¹ eˣ dx = ? (decimale, 2 cifre)', answer: 1.718, tol: 0.01, shown: 'e − 1 ≈ 1,72', explain: '[eˣ]₀¹ = e − 1 ≈ 1,718.' },
        { id: 'm7-4-11', type: 'num', topic: 'Integrale definito', q: '∫₁ᵉ 1/x dx = ?', answer: 1, tol: 0, explain: '[ln x]₁ᵉ = 1 − 0 = 1.' },
        { id: 'm7-4-12', type: 'mc', topic: 'Proprietà', q: '∫₃¹ f(x) dx è uguale a…', options: ['−∫₁³ f(x) dx', '∫₁³ f(x) dx', '0', '2 · ∫₁³ f(x) dx'], answer: 0, explain: 'Scambiando gli estremi l’integrale cambia segno.' },
        { id: 'm7-4-13', type: 'mc', topic: 'Riemann', q: 'Che cosa approssimano le somme di Riemann?', options: ['L’area sotto il grafico, con rettangoli sottili', 'La pendenza della retta tangente in un punto', 'Il limite di una successione per n → ∞', 'Il valore massimo assunto dalla funzione'], answer: 0, explain: 'Σ f(xᵢ)Δx tende all’integrale definito per n → ∞.' },
        { id: 'm7-4-14', type: 'num', topic: 'Integrale definito', q: '∫₀³ (2x + 1) dx = ?', answer: 12, tol: 0, explain: '[x² + x]₀³ = 9 + 3 = 12.' },
      ],
    },
    {
      id: 'm7l5',
      title: 'Esercizi d’esame: integrali',
      icon: '🪜',
      theory: [
        {
          title: 'Metodo',
          points: [
            '**Primitiva con condizione**: integro, poi uso il dato (es. C(50) = 200) per trovare la costante.',
            '**Integrale definito**: primitiva F, poi F(b) − F(a).',
            '**Area**: spezzo negli zeri di f e sommo i valori assoluti.',
            '**Per parti**: f si semplifica derivando, g′ si integra facilmente.',
          ],
        },
      ],
      exercises: [
        {
          id: 'm7-5-1', type: 'steps', topic: 'Costo totale', scenario: 'Cappelli: costo marginale C′(x) = 3,20 − 0,001x, con C(50) = 200 €.', q: 'Ricostruisci il costo totale.',
          steps: [
            { q: 'Primitiva generale?', kind: 'mc', answer: 0, options: ['3,2x − 0,0005x² + k', '3,2x − 0,001x² + k', '−0,001 + k', '3,2 − 0,0005x² + k'], explain: '∫ 0,001x dx = 0,0005x².' },
            { q: 'Costo fisso k = ?', kind: 'num', answer: 41.25, tol: 0.001, unit: '€', explain: '160 − 1,25 + k = 200 ⇒ k = 41,25.' },
            { q: 'C(100) = ?', kind: 'num', answer: 356.25, tol: 0.001, unit: '€', explain: '320 − 5 + 41,25 = 356,25.' },
          ],
          explain: 'C(x) = 3,2x − 0,0005x² + 41,25.',
          profNote: 'Negli appunti la costante è calcolata come 41,25 ma la funzione finale riporta 41,42: il valore giusto è 41,25.',
        },
        {
          id: 'm7-5-2', type: 'steps', topic: 'Primitive', q: 'Trova la primitiva G di g(x) = x/√(3x² + 1) con G(1) = 3.',
          steps: [
            { q: 'Primitiva generale?', kind: 'mc', answer: 0, options: ['⅓√(3x² + 1) + c', '√(3x² + 1) + c', '3√(3x² + 1) + c', '⅙(3x² + 1)² + c'], explain: 'Derivando ⅓√(3x² + 1) ottengo ⅓ · 6x/(2√(3x² + 1)) = x/√(3x² + 1).' },
            { q: 'c = ?', kind: 'num', answer: 7 / 3, tol: 0.005, shown: '7/3', explain: '⅓ · √4 + c = 3 ⇒ c = 3 − ⅔ = 7/3.' },
            { q: 'G(0) = ?', kind: 'num', answer: 8 / 3, tol: 0.005, shown: '8/3', explain: '⅓ · 1 + 7/3 = 8/3.' },
          ],
          explain: 'G(x) = ⅓√(3x² + 1) + 7/3.',
        },
        {
          id: 'm7-5-3', type: 'steps', topic: 'Integrale e area', q: 'f(x) = x³ su [−1, 1].', figure: 'area',
          steps: [
            { q: '∫₋₁⁰ x³ dx = ?', kind: 'num', answer: -0.25, tol: 0.005, shown: '−1/4', explain: '[x⁴/4]₋₁⁰ = 0 − ¼.' },
            { q: '∫₀¹ x³ dx = ?', kind: 'num', answer: 0.25, tol: 0.005, shown: '1/4', explain: '¼ − 0.' },
            { q: '∫₋₁¹ x³ dx = ?', kind: 'num', answer: 0, explain: '−¼ + ¼ = 0.' },
            { q: 'Area totale?', kind: 'num', answer: 0.5, tol: 0.005, shown: '1/2', explain: '|−¼| + ¼ = ½.' },
          ],
          explain: 'Integrale con segno ≠ area geometrica.',
        },
        {
          id: 'm7-5-4', type: 'steps', topic: 'Per parti', q: 'Calcola ∫₀¹ x·eˣ dx.',
          steps: [
            { q: 'Scelta per l’integrazione per parti?', kind: 'mc', answer: 0, options: ['f = x, g′ = eˣ', 'f = eˣ, g′ = x', 'f = x·eˣ, g′ = 1', 'Non serve: è immediato'], explain: 'Derivando x diventa 1.' },
            { q: 'Primitiva?', kind: 'mc', answer: 0, options: ['eˣ(x − 1)', 'x·eˣ', 'eˣ(x + 1)', '½x²·eˣ'], explain: 'x·eˣ − ∫ eˣ dx = eˣ(x − 1).' },
            { q: 'Valore dell’integrale?', kind: 'num', answer: 1, explain: '[eˣ(x − 1)]₀¹ = 0 − (−1) = 1.' },
          ],
          explain: 'Per parti, poi teorema fondamentale.',
        },
      ],
    },
  ],
  open: [
    { id: 'm7-o1', q: 'Che cos’è una primitiva? Perché due primitive differiscono per una costante?', answer: 'F è primitiva di f se F′ = f. Se F è primitiva lo è anche F + c, perché la derivata di una costante è zero; viceversa due primitive hanno differenza con derivata nulla, quindi costante. L’integrale indefinito ∫ f dx = F + c è l’insieme di tutte le primitive. Una condizione come G(1) = 3 fissa c.', keywords: ['F′ = f', 'costante', 'derivata', 'zero', 'integrale indefinito', 'condizione'] },
    { id: 'm7-o2', q: 'Enuncia la formula di integrazione per parti e calcola ∫ x eˣ dx.', answer: '∫ f·g′ dx = f·g − ∫ f′·g dx, ricavata dalla regola del prodotto. Per ∫ x eˣ dx scelgo f = x (si semplifica derivando) e g′ = eˣ: x eˣ − ∫ eˣ dx = eˣ(x − 1) + c.', keywords: ['f·g', '∫ f′·g', 'prodotto', 'f = x', 'eˣ(x − 1)'] },
    { id: 'm7-o3', q: 'Come si ricava il costo totale dal costo marginale? Risolvi l’esercizio dei cappelli.', answer: 'Il costo totale è una primitiva del costo marginale; la costante è il costo fisso. C′ = 3,20 − 0,001x ⇒ C = 3,2x − 0,0005x² + k. Con C(50) = 200: 160 − 1,25 + k = 200 ⇒ k = 41,25. Quindi C(x) = 3,2x − 0,0005x² + 41,25 (negli appunti c’è il refuso 41,42).', keywords: ['primitiva', 'costo fisso', '0,0005', 'C(50)', '41,25'] },
    { id: 'm7-o4', q: 'Enuncia il teorema fondamentale del calcolo integrale e spiega il legame tra integrale e area.', answer: 'Se f è continua su [a, b] e F è una sua primitiva, ∫ₐᵇ f dx = F(b) − F(a). L’integrale nasce dalle somme di Riemann Σ f(xᵢ)Δx. Se f ≥ 0 è l’area sotto il grafico; dove f < 0 l’integrale è negativo. Per l’area geometrica si spezza l’integrale negli zeri: ∫₋₁⁰ x³ = −¼ ma l’area è ¼.', keywords: ['F(b) − F(a)', 'primitiva', 'Riemann', 'area', 'negativ', 'spezz'] },
  ],
  cards: [
    { id: 'm7-c1', front: 'Primitiva', back: 'F con F′ = f. Le primitive differiscono per una costante.' },
    { id: 'm7-c2', front: '∫ xⁿ dx', back: 'xⁿ⁺¹/(n + 1) + c, n ≠ −1.' },
    { id: 'm7-c3', front: '∫ 1/x dx', back: 'ln|x| + c.' },
    { id: 'm7-c4', front: '∫ eˣ dx', back: 'eˣ + c.' },
    { id: 'm7-c5', front: '∫ f′/f dx', back: 'ln|f| + c.' },
    { id: 'm7-c6', front: 'Per parti', back: '∫ f·g′ = f·g − ∫ f′·g.' },
    { id: 'm7-c7', front: '∫ x eˣ dx', back: 'eˣ(x − 1) + c.' },
    { id: 'm7-c8', front: '∫ ln x dx', back: 'x ln x − x + c.' },
    { id: 'm7-c9', front: 'Costo totale da marginale', back: 'C = ∫ C′ dx; la costante è il costo fisso.' },
    { id: 'm7-c10', front: 'Teorema fondamentale', back: '∫ₐᵇ f dx = F(b) − F(a).' },
    { id: 'm7-c11', front: 'Integrale e area', back: 'f < 0 ⇒ integrale negativo; per l’area spezzo negli zeri.' },
    { id: 'm7-c12', front: '∫₋₁⁰ x³ dx', back: '−¼ (area ¼).' },
  ],
};

export default m7;
