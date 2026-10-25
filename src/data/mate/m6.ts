import type { Unit } from '../../types';

const m6: Unit = {
  id: 'm6',
  n: 6,
  title: 'Studio di funzione',
  subtitle: 'Massimi, minimi, convessità, ottimo economico',
  color: '#8B5CF6',
  colorDark: '#6D28D9',
  lessons: [
    {
      id: 'm6l1',
      title: 'Massimi, minimi e Fermat',
      icon: '⛰️',
      theory: [
        {
          title: 'Estremi locali e globali',
          points: [
            'x₀ è **massimo locale** se f(x₀) ≥ f(x) per ogni x **vicino** a x₀; **minimo locale** se f(x₀) ≤ f(x).',
            'x₀ è **massimo globale (assoluto)** se f(x₀) ≥ f(x) per **ogni** x del dominio.',
            '**Globale ⇒ locale**, non il contrario: un massimo locale può essere superato altrove.',
          ],
        },
        {
          title: 'Teorema di Fermat',
          points: [
            'Se x₀ è un estremo locale **interno** al dominio e f è derivabile in x₀, allora **f′(x₀) = 0**.',
            'I punti con f′(x₀) = 0 si chiamano **stazionari**: la tangente è orizzontale.',
            '**Non vale il viceversa**: f(x) = x³ ha f′(0) = 0 ma in 0 c’è un flesso, non un estremo.',
            'Gli estremi possono trovarsi anche negli **estremi dell’intervallo** o nei punti di non derivabilità (|x| in 0).',
          ],
        },
      ],
      exercises: [
        { id: 'm6-1-1', type: 'tf', topic: 'Estremi', q: 'Ogni massimo globale è anche un massimo locale.', answer: true, explain: 'Se f(x₀) supera tutti i valori, supera anche quelli vicini.' },
        { id: 'm6-1-2', type: 'tf', topic: 'Estremi', q: 'Ogni massimo locale è anche un massimo globale.', answer: false, explain: 'Un “picco” può essere più basso di un altro punto del grafico.' },
        { id: 'm6-1-3', type: 'mc', topic: 'Fermat', q: 'Che cosa dice il teorema di Fermat?', options: ['In un estremo locale interno derivabile f′(x₀) = 0', 'Se f′(x₀) = 0 allora x₀ è sicuramente un massimo', 'Ogni funzione continua ha sempre un massimo', 'In un punto di minimo f′ è sempre positiva'], answer: 0, explain: 'È una condizione necessaria, non sufficiente.' },
        { id: 'm6-1-4', type: 'tf', topic: 'Fermat', q: 'Se f′(x₀) = 0 allora x₀ è sicuramente un massimo o un minimo.', answer: false, explain: 'x³ in 0: derivata nulla ma flesso orizzontale.' },
        { id: 'm6-1-5', type: 'mc', topic: 'Fermat', q: 'Un punto stazionario è un punto in cui…', options: ['f′(x₀) = 0', 'f(x₀) = 0', 'f″(x₀) = 0', 'f non è derivabile'], answer: 0, explain: 'La tangente è orizzontale.' },
        { id: 'm6-1-6', type: 'hotspot', topic: 'Estremi', scene: 'studio', q: 'Tocca il massimo locale', answer: 'max', explain: 'È il punto più alto “nei dintorni”: prima la funzione sale, poi scende.' },
        { id: 'm6-1-7', type: 'hotspot', topic: 'Estremi', scene: 'studio', q: 'Tocca il minimo locale', answer: 'min', explain: 'Prima scende, poi sale: f′ passa da negativa a positiva.' },
        { id: 'm6-1-8', type: 'num', topic: 'Punti stazionari', q: 'f(x) = x² − 6x + 1. In quale x si trova il punto stazionario?', answer: 3, tol: 0, explain: 'f′ = 2x − 6 = 0 ⇒ x = 3.' },
        { id: 'm6-1-9', type: 'mc', topic: 'Estremi', q: 'f(x) = |x| ha un minimo in x = 0 anche se…', options: ['f′(0) non esiste', 'f′(0) = 1', 'f(0) è negativo', 'f non è continua in 0'], answer: 0, explain: 'Gli estremi si cercano anche nei punti di non derivabilità.' },
        { id: 'm6-1-10', type: 'num', topic: 'Punti stazionari', q: 'f(x) = x³ − 3x. Quanti punti stazionari ha?', answer: 2, tol: 0, explain: 'f′ = 3x² − 3 = 0 ⇒ x = ±1.' },
      ],
    },
    {
      id: 'm6l2',
      title: 'Monotonia e test della derivata',
      icon: '🔍',
      theory: [
        {
          title: 'Teorema di Lagrange e conseguenze',
          points: [
            '**Lagrange**: f continua su [a, b] e derivabile in (a, b) ⇒ esiste c ∈ (a, b) con **f′(c) = [f(b) − f(a)]/(b − a)**.',
            'In un punto la tangente è parallela alla secante tra gli estremi.',
            'Conseguenze: **f′ > 0** su un intervallo ⇒ f **strettamente crescente**; **f′ < 0** ⇒ **strettamente decrescente**; f′ = 0 ⇒ costante.',
          ],
          example: 'f = x² su [1, 3]: (9 − 1)/2 = 4 = 2c ⇒ c = 2.',
        },
        {
          title: 'Classificare i punti stazionari',
          points: [
            '**Segno di f′**: + poi − ⇒ **massimo**; − poi + ⇒ **minimo**; stesso segno ⇒ **flesso orizzontale**.',
            '**Test della derivata seconda** in un punto stazionario: **f″ > 0 ⇒ minimo**, **f″ < 0 ⇒ massimo**.',
            'Se f″(x₀) = 0 si guarda **f‴**: se f‴(x₀) ≠ 0 è un **flesso orizzontale**.',
          ],
          tip: 'f″ > 0 = “sorriso” ∪ = minimo. f″ < 0 = “broncio” ∩ = massimo.',
        },
      ],
      exercises: [
        { id: 'm6-2-1', type: 'mc', topic: 'Lagrange', q: 'Che cosa garantisce il teorema di Lagrange?', options: ['Un c con f′(c) = [f(b) − f(a)]/(b − a)', 'Un punto c in (a, b) con f(c) = 0', 'Che f abbia massimo e minimo assoluti', 'Che f′ sia positiva su tutto (a, b)'], answer: 0, explain: 'Esiste una tangente parallela alla secante tra gli estremi.' },
        { id: 'm6-2-2', type: 'num', topic: 'Lagrange', q: 'f(x) = x² su [1, 3]. Trova il punto c di Lagrange.', answer: 2, tol: 0, explain: '[f(3) − f(1)]/2 = 4 = f′(c) = 2c ⇒ c = 2.' },
        { id: 'm6-2-3', type: 'mc', topic: 'Monotonia', q: 'Se f′(x) > 0 su tutto un intervallo, allora f è…', options: ['strettamente crescente', 'strettamente decrescente', 'costante', 'concava'], answer: 0, explain: 'È una conseguenza del teorema di Lagrange.' },
        { id: 'm6-2-4', type: 'mc', topic: 'Segno di f′', q: 'f′ è positiva prima di x₀ e negativa dopo. In x₀ c’è…', options: ['un massimo', 'un minimo', 'un flesso orizzontale', 'un asintoto'], answer: 0, explain: 'La funzione sale e poi scende.' },
        { id: 'm6-2-5', type: 'mc', topic: 'Derivata seconda', q: 'f′(x₀) = 0 e f″(x₀) > 0. In x₀ c’è…', options: ['un minimo locale', 'un massimo locale', 'un flesso orizzontale', 'un punto angoloso'], answer: 0, explain: 'Concavità verso l’alto: minimo.' },
        { id: 'm6-2-6', type: 'mc', topic: 'Derivata seconda', q: 'f′(x₀) = 0, f″(x₀) = 0 e f‴(x₀) ≠ 0. In x₀ c’è…', options: ['un flesso orizzontale', 'un massimo locale', 'un minimo locale', 'una cuspide'], answer: 0, explain: 'È il caso di x³ in 0.' },
        { id: 'm6-2-7', type: 'num', topic: 'Derivata seconda', q: 'f(x) = x³ − 3x. Dove si trova il massimo locale? (x = ?)', answer: -1, tol: 0, explain: 'f′ = 3x² − 3 ⇒ x = ±1. f″ = 6x: f″(−1) = −6 < 0 ⇒ massimo in x = −1.' },
        { id: 'm6-2-8', type: 'num', topic: 'Derivata seconda', q: 'f(x) = x³ − 3x. Valore del minimo locale f(1)?', answer: -2, tol: 0, explain: 'f(1) = 1 − 3 = −2; f″(1) = 6 > 0 conferma il minimo.' },
        { id: 'm6-2-9', type: 'num', topic: 'Segno di f′', q: 'f(x) = −x² + 8x − 5. In che x c’è il massimo?', answer: 4, tol: 0, explain: 'f′ = −2x + 8 = 0 ⇒ x = 4; f″ = −2 < 0.' },
        { id: 'm6-2-10', type: 'match', topic: 'Classificazione', q: 'Abbina la situazione (con f′(x₀) = 0) al tipo di punto', pairs: [['f′: + → −', 'Massimo'], ['f′: − → +', 'Minimo'], ['f′: + → +', 'Flesso orizzontale'], ['f″(x₀) > 0', 'Minimo (test di f″)']], explain: 'Due metodi: segno di f′ intorno al punto oppure segno di f″ nel punto.' },
        { id: 'm6-2-11', type: 'order', topic: 'Procedura', q: 'Ordina i passaggi per trovare massimi e minimi locali', items: ['Trovo il dominio di f', 'Calcolo f′(x)', 'Risolvo f′(x) = 0', 'Studio il segno di f′ (o di f″) nei punti trovati'], explain: 'Poi si calcolano i valori f(x₀) dei punti trovati.' },
      ],
    },
    {
      id: 'm6l3',
      title: 'Massimi e minimi assoluti su [a, b]',
      icon: '🏔️',
      theory: [
        {
          title: 'Il metodo dei candidati',
          points: [
            'Per Weierstrass, se f è continua su **[a, b]** gli estremi assoluti esistono.',
            '**Candidati**: punti stazionari interni (f′ = 0), punti di non derivabilità, **estremi a e b**.',
            'Si calcola f in tutti i candidati: il valore più grande è il **massimo assoluto**, il più piccolo il **minimo assoluto**.',
          ],
          example: 'f = x³ − 3x su [−2, 3]: candidati −2, −1, 1, 3. f(−2) = −2, f(−1) = 2, f(1) = −2, f(3) = 18. Max assoluto 18 in x = 3; min assoluto −2 in x = −2 e x = 1.',
        },
      ],
      exercises: [
        { id: 'm6-3-1', type: 'mc', topic: 'Estremi assoluti', q: 'Su [a, b], quali sono i candidati per gli estremi assoluti?', options: ['Punti stazionari, non derivabili ed estremi a, b', 'Solo i punti in cui f′(x) = 0', 'Solo gli estremi a e b dell’intervallo', 'Solo i punti in cui f″(x) = 0'], answer: 0, explain: 'Spesso il massimo assoluto è proprio in un estremo dell’intervallo.' },
        { id: 'm6-3-2', type: 'num', topic: 'Estremi assoluti', q: 'f(x) = x³ − 3x su [−2, 3]. Massimo assoluto?', answer: 18, tol: 0, explain: 'f(3) = 27 − 9 = 18 supera f(−1) = 2.' },
        { id: 'm6-3-3', type: 'num', topic: 'Estremi assoluti', q: 'f(x) = x³ − 3x su [−2, 3]. Minimo assoluto?', answer: -2, tol: 0, explain: 'f(−2) = −2 e f(1) = −2: entrambi minimi assoluti.' },
        { id: 'm6-3-4', type: 'num', topic: 'Estremi assoluti', q: 'f(x) = x² − 4x su [0, 5]. Minimo assoluto?', answer: -4, tol: 0, explain: 'f′ = 2x − 4 ⇒ x = 2, f(2) = −4. Estremi: f(0) = 0, f(5) = 5.' },
        { id: 'm6-3-5', type: 'num', topic: 'Estremi assoluti', q: 'f(x) = x² − 4x su [0, 5]. Massimo assoluto?', answer: 5, tol: 0, explain: 'f(5) = 25 − 20 = 5 > f(0) = 0.' },
        { id: 'm6-3-6', type: 'tf', topic: 'Estremi assoluti', q: 'Il massimo locale trovato con f′ = 0 è sempre anche il massimo assoluto su [a, b].', answer: false, explain: 'Bisogna confrontarlo con gli estremi: in x³ − 3x su [−2, 3] il max locale vale 2 ma f(3) = 18.' },
        { id: 'm6-3-7', type: 'num', topic: 'Estremi assoluti', q: 'f(x) = 2x + 1 su [−1, 4]. Massimo assoluto?', answer: 9, tol: 0, explain: 'Retta crescente: il massimo è all’estremo destro, f(4) = 9.' },
      ],
    },
    {
      id: 'm6l4',
      title: 'Convessità e flessi',
      icon: '🌀',
      theory: [
        {
          title: 'Concava o convessa',
          points: [
            '**f″ ≥ 0** su un intervallo ⇒ f **convessa** (∪, “rivolta verso l’alto”): il grafico sta sopra le tangenti.',
            '**f″ ≤ 0** ⇒ f **concava** (∩, “rivolta verso il basso”): il grafico sta sotto le tangenti.',
            '**Flesso**: punto in cui la concavità cambia; lì f″ = 0 (se esiste) e cambia segno.',
          ],
          example: 'f = ½x² + log(x − 1), dominio x > 1. f′ = x + 1/(x − 1), f″ = 1 − 1/(x − 1)². f″ = 0 ⇒ (x − 1)² = 1 ⇒ x = 2. Concava su (1, 2), convessa su (2, +∞). Flesso in (2, 2).',
        },
        {
          title: 'Lo studio di funzione completo',
          points: [
            '1 · **Dominio** · 2 · simmetrie e **intersezioni** con gli assi · 3 · **segno** di f.',
            '4 · **limiti** agli estremi del dominio e **asintoti**.',
            '5 · **f′**: monotonia, massimi e minimi · 6 · **f″**: concavità e flessi · 7 · **grafico**.',
          ],
        },
      ],
      exercises: [
        { id: 'm6-4-1', type: 'mc', topic: 'Convessità', q: 'Se f″(x) > 0 su un intervallo, f è…', options: ['convessa (∪)', 'concava (∩)', 'decrescente', 'costante'], answer: 0, explain: 'La pendenza cresce: la curva si piega verso l’alto.' },
        { id: 'm6-4-2', type: 'mc', topic: 'Convessità', q: 'f(x) = −x² è…', options: ['concava su tutto ℝ', 'convessa su tutto ℝ', 'concava solo per x > 0', 'né concava né convessa'], answer: 0, explain: 'f″ = −2 < 0 ovunque.' },
        { id: 'm6-4-3', type: 'hotspot', topic: 'Flessi', scene: 'studio', q: 'Tocca il punto di flesso', answer: 'flesso', explain: 'Tra massimo e minimo la curva passa da concava a convessa.' },
        { id: 'm6-4-4', type: 'num', topic: 'Flessi', q: 'f(x) = x³ − 6x² + 1. Ascissa del flesso?', answer: 2, tol: 0, explain: 'f″ = 6x − 12 = 0 ⇒ x = 2, e f″ cambia segno.' },
        { id: 'm6-4-5', type: 'num', topic: 'Flessi', q: 'f(x) = ½x² + log(x − 1). Ascissa del flesso?', answer: 2, tol: 0, explain: 'f″ = 1 − 1/(x − 1)² = 0 ⇒ (x − 1)² = 1 ⇒ x = 2 (x = 0 è fuori dominio).' },
        { id: 'm6-4-6', type: 'num', topic: 'Flessi', q: 'Stessa funzione: ordinata del flesso f(2)?', answer: 2, tol: 0, explain: '½ · 4 + log 1 = 2 + 0 = 2. Flesso in (2, 2).' },
        { id: 'm6-4-7', type: 'mc', topic: 'Convessità', q: 'f(x) = ½x² + log(x − 1) su (1, 2) è…', options: ['concava', 'convessa', 'costante', 'non definita'], answer: 0, explain: 'Per 1 < x < 2 si ha (x − 1)² < 1 ⇒ 1/(x − 1)² > 1 ⇒ f″ < 0.' },
        { id: 'm6-4-8', type: 'tf', topic: 'Flessi', q: 'Se f″(x₀) = 0 allora x₀ è sicuramente un flesso.', answer: false, explain: 'Serve che f″ cambi segno: x⁴ ha f″(0) = 0 ma è convessa ovunque.' },
        { id: 'm6-4-9', type: 'order', topic: 'Studio di funzione', q: 'Ordina le fasi dello studio di funzione', items: ['Dominio', 'Segno e intersezioni con gli assi', 'Limiti e asintoti', 'Derivata prima: monotonia ed estremi', 'Derivata seconda: concavità e flessi'], explain: 'Alla fine si mettono insieme le informazioni per disegnare il grafico.' },
        { id: 'm6-4-10', type: 'mc', topic: 'Convessità', q: 'eˣ è…', options: ['convessa su tutto ℝ', 'concava su tutto ℝ', 'convessa solo per x > 0', 'con un flesso in x = 0'], answer: 0, explain: '(eˣ)″ = eˣ > 0 sempre.' },
        { id: 'm6-4-11', type: 'mc', topic: 'Convessità', q: 'ln x è…', options: ['concava su (0, +∞)', 'convessa su (0, +∞)', 'convessa per x > 1', 'con un flesso in x = 1'], answer: 0, explain: '(ln x)″ = −1/x² < 0.' },
      ],
    },
    {
      id: 'm6l5',
      title: 'Ottimizzazione economica',
      icon: '🏭',
      theory: [
        {
          title: 'Minimo del costo medio',
          points: [
            'Costo medio **CM(x) = C(x)/x**. Derivando: CM′(x) = [x·C′(x) − C(x)]/x².',
            'CM′ = 0 ⇔ **C′(x₀) = C(x₀)/x₀**: nel minimo del costo medio **costo marginale = costo medio**.',
            'Il costo marginale “taglia” il costo medio nel suo punto più basso.',
          ],
          example: 'Magliette: C = 2000 + 10x + 0,2x². CM = 2000/x + 10 + 0,2x. CM′ = −2000/x² + 0,2 = 0 ⇒ x² = 10.000 ⇒ x₀ = 100. CM(100) = 20 + 10 + 20 = 50 € = C′(100).',
        },
        {
          title: 'Massimo profitto',
          points: [
            'P(x) = R(x) − C(x). Punto stazionario: P′ = 0 ⇔ **R′(x) = C′(x)** (ricavo marginale = costo marginale).',
            'È un massimo se P″ < 0.',
          ],
          example: 'R = 40x, C = 100 + 4x + 0,5x²: P′ = 40 − 4 − x = 0 ⇒ x = 36. P″ = −1 < 0 ⇒ massimo. P(36) = 1440 − 100 − 144 − 648 = 548.',
        },
      ],
      exercises: [
        { id: 'm6-5-1', type: 'mc', topic: 'Costo medio', q: 'Nel punto di minimo del costo medio vale…', options: ['C′(x₀) = C(x₀)/x₀', 'C′(x₀) = 0', 'C(x₀) = 0', 'C″(x₀) = C(x₀)'], answer: 0, explain: 'Costo marginale uguale a costo medio.' },
        { id: 'm6-5-2', type: 'num', topic: 'Costo medio', scenario: 'Produzione di magliette: C(x) = 2000 + 10x + 0,2x².', q: 'Quante magliette minimizzano il costo medio?', answer: 100, tol: 0, explain: 'CM′ = −2000/x² + 0,2 = 0 ⇒ x² = 10.000 ⇒ x = 100.' },
        { id: 'm6-5-3', type: 'num', topic: 'Costo medio', scenario: 'Produzione di magliette: C(x) = 2000 + 10x + 0,2x².', q: 'Quanto vale il costo medio minimo?', answer: 50, tol: 0, unit: '€', explain: 'CM(100) = 20 + 10 + 20 = 50 €, uguale a C′(100) = 10 + 40.' },
        { id: 'm6-5-4', type: 'mc', topic: 'Massimo profitto', q: 'La condizione del primo ordine per il massimo profitto è…', options: ['R′(x) = C′(x)', 'R(x) = C(x)', 'C′(x) = 0', 'R′(x) = 0'], answer: 0, explain: 'P′ = R′ − C′ = 0. R = C è invece il punto di pareggio.' },
        { id: 'm6-5-5', type: 'num', topic: 'Massimo profitto', q: 'R = 40x, C = 100 + 4x + 0,5x². Quantità che massimizza il profitto?', answer: 36, tol: 0, explain: 'P′ = 36 − x = 0 ⇒ x = 36.' },
        { id: 'm6-5-6', type: 'num', topic: 'Massimo profitto', q: 'Stesso esercizio: profitto massimo P(36)?', answer: 548, tol: 0, explain: 'P = 36x − 100 − 0,5x² ⇒ 1296 − 100 − 648 = 548.' },
        { id: 'm6-5-7', type: 'num', topic: 'Costo medio', q: 'C(x) = 800 + 2x². Per quale x il costo medio è minimo?', answer: 20, tol: 0, explain: 'CM = 800/x + 2x; CM′ = −800/x² + 2 = 0 ⇒ x² = 400 ⇒ x = 20.' },
        { id: 'm6-5-8', type: 'tf', topic: 'Massimo profitto', q: 'Il punto di pareggio e il punto di massimo profitto coincidono.', answer: false, explain: 'Pareggio: P = 0. Massimo: P′ = 0. Sono punti diversi.' },
        { id: 'm6-5-9', type: 'num', topic: 'Massimo profitto', q: 'P(x) = −2x² + 120x − 1000. Profitto massimo?', answer: 800, tol: 0, explain: 'P′ = −4x + 120 = 0 ⇒ x = 30; P(30) = −1800 + 3600 − 1000 = 800.' },
      ],
    },
  ],
  open: [
    { id: 'm6-o1', q: 'Enuncia il teorema di Fermat e spiega perché non vale il viceversa.', answer: 'Se x₀ è un punto di massimo o minimo locale interno al dominio e f è derivabile in x₀, allora f′(x₀) = 0 (punto stazionario, tangente orizzontale). Il viceversa è falso: x³ ha f′(0) = 0 ma in 0 c’è un flesso orizzontale. Inoltre gli estremi possono trovarsi nei punti non derivabili o agli estremi dell’intervallo.', keywords: ['estremo locale', 'interno', 'derivabile', 'f′(x₀) = 0', 'viceversa', 'x³'] },
    { id: 'm6-o2', q: 'Enuncia il teorema di Lagrange e le sue conseguenze sulla monotonia.', answer: 'Se f è continua su [a, b] e derivabile in (a, b) esiste c in (a, b) con f′(c) = [f(b) − f(a)]/(b − a): la tangente in c è parallela alla secante. Conseguenze: se f′ > 0 su un intervallo f è strettamente crescente, se f′ < 0 strettamente decrescente, se f′ = 0 è costante.', keywords: ['continua', 'derivabile', 'f′(c)', 'secante', 'crescente', 'costante'] },
    { id: 'm6-o3', q: 'Come si classificano i punti stazionari? Spiega il test della derivata seconda.', answer: 'Con il segno di f′: da + a − massimo, da − a + minimo, stesso segno flesso orizzontale. Oppure con f″ nel punto stazionario: f″ > 0 minimo, f″ < 0 massimo; se f″ = 0 si guarda f‴: se è diversa da zero c’è un flesso orizzontale.', keywords: ['segno', 'massimo', 'minimo', 'f″ > 0', 'f″ < 0', 'f‴', 'flesso'] },
    { id: 'm6-o4', q: 'Come si trovano massimo e minimo assoluti di una funzione su [a, b]?', answer: 'Per Weierstrass esistono se f è continua sul chiuso [a, b]. Si cercano i candidati: punti stazionari interni, punti di non derivabilità e gli estremi a e b; si calcola f in ciascuno e si confrontano i valori. Esempio x³ − 3x su [−2, 3]: max 18 in x = 3, min −2 in x = −2 e x = 1.', keywords: ['Weierstrass', 'candidati', 'stazionari', 'estremi', 'confront'] },
    { id: 'm6-o5', q: 'Definisci convessità, concavità e flesso. Risolvi f(x) = ½x² + log(x − 1).', answer: 'f″ ≥ 0 convessa (∪), f″ ≤ 0 concava (∩); il flesso è dove cambia la concavità. Per f = ½x² + log(x − 1) (dominio x > 1): f′ = x + 1/(x − 1), f″ = 1 − 1/(x − 1)². f″ = 0 per x = 2: concava su (1, 2), convessa su (2, +∞), flesso in (2, 2).', keywords: ['f″ ≥ 0', 'convessa', 'concava', 'flesso', 'x = 2', '(2, 2)'] },
    { id: 'm6-o6', q: 'Dimostra che nel minimo del costo medio il costo marginale è uguale al costo medio, con l’esempio delle magliette.', answer: 'CM = C(x)/x, CM′ = [xC′ − C]/x² = 0 ⇔ C′(x₀) = C(x₀)/x₀. Magliette: C = 2000 + 10x + 0,2x², CM = 2000/x + 10 + 0,2x, CM′ = −2000/x² + 0,2 = 0 ⇒ x₀ = 100, CM(100) = 50 € = C′(100) = 10 + 0,4·100.', keywords: ['C(x)/x', 'derivata', 'C′ = C/x', '100', '50'] },
  ],
  cards: [
    { id: 'm6-c1', front: 'Globale ⇒ locale?', back: 'Sì; locale ⇒ globale no.' },
    { id: 'm6-c2', front: 'Fermat', back: 'Estremo interno derivabile ⇒ f′(x₀) = 0 (non il viceversa).' },
    { id: 'm6-c3', front: 'Lagrange', back: 'f′(c) = [f(b) − f(a)]/(b − a).' },
    { id: 'm6-c4', front: 'f′ > 0 su un intervallo', back: 'f strettamente crescente.' },
    { id: 'm6-c5', front: 'Test di f″', back: 'f′ = 0 e f″ > 0 ⇒ min; f″ < 0 ⇒ max.' },
    { id: 'm6-c6', front: 'f″ = f′ = 0, f‴ ≠ 0', back: 'Flesso orizzontale.' },
    { id: 'm6-c7', front: 'Estremi assoluti su [a, b]', back: 'Confronto f nei punti stazionari, non derivabili e in a, b.' },
    { id: 'm6-c8', front: 'Convessa / concava', back: 'f″ ≥ 0 ∪ convessa; f″ ≤ 0 ∩ concava.' },
    { id: 'm6-c9', front: 'Flesso', back: 'Cambio di concavità: f″ = 0 e cambia segno.' },
    { id: 'm6-c10', front: 'Minimo costo medio', back: 'C′(x₀) = C(x₀)/x₀.' },
    { id: 'm6-c11', front: 'Massimo profitto', back: 'R′ = C′ e P″ < 0.' },
  ],
};

export default m6;
