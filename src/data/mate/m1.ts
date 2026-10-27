import type { Unit } from '../../types';

const m1: Unit = {
  id: 'm1',
  n: 1,
  title: 'Insiemi e funzioni',
  subtitle: 'Numeri, intervalli, dominio e inversa',
  color: '#4F46E5',
  colorDark: '#3730A3',
  lessons: [
    {
      id: 'm1l1',
      title: 'Insiemi numerici e intervalli',
      icon: '🔢',
      theory: [
        {
          title: 'Gli insiemi numerici',
          points: [
            '**ℕ** naturali {0, 1, 2, 3…} ⊂ **ℤ** interi relativi {…, −2, −1, 0, 1, 2…} ⊂ **ℚ** razionali ⊂ **ℝ** reali ⊂ **ℂ** complessi.',
            '**Razionali**: si scrivono come rapporto di due interi n/m (m ≠ 0). In forma decimale sono finiti (5/2 = 2,5) o periodici (2/3 = 0,6̄).',
            '**Irrazionali**: non sono razionali; hanno scrittura decimale illimitata e non periodica (√2, π, e).',
            'Gli irrazionali si dividono in **algebrici** (soluzioni di un’equazione polinomiale a coefficienti interi, come √2 o √3) e **trascendenti** (π, e, log 2).',
          ],
        },
        {
          title: 'Intervalli e piano cartesiano',
          points: [
            '**Chiuso** [a, b] = {x ∈ ℝ : a ≤ x ≤ b}, estremi inclusi. **Aperto** (a, b) = {a < x < b}, estremi esclusi. **Semiaperto** [a, b) = {a ≤ x < b}.',
            '**Semirette**: [a, +∞) = {x ≥ a} chiusa; (a, +∞) = {x > a} aperta. Verso ±∞ la parentesi è sempre tonda.',
            '**Piano cartesiano** ℝ² = ℝ × ℝ: coppie ordinate (x, y). (−1, 3) ≠ (3, −1).',
            'Quadranti: **I** (x > 0, y > 0), **II** (x < 0, y > 0), **III** (x < 0, y < 0), **IV** (x > 0, y < 0). (0, 0) è l’origine.',
          ],
        },
      ],
      exercises: [
        { id: 'm1-1-1', type: 'mc', topic: 'Insiemi numerici', q: 'Che tipo di numero è √2?', options: ['Irrazionale algebrico', 'Irrazionale trascendente', 'Razionale con decimali periodici', 'Intero relativo'], answer: 0, explain: '√2 non si scrive come frazione, ma è soluzione di x² − 2 = 0: quindi è algebrico.' },
        { id: 'm1-1-2', type: 'mc', topic: 'Insiemi numerici', q: 'Che tipo di numero è π?', options: ['Irrazionale trascendente', 'Irrazionale algebrico', 'Razionale, perché vale 22/7', 'Razionale con decimali finiti'], answer: 0, explain: 'π non è soluzione di nessuna equazione polinomiale a coefficienti interi: è trascendente. 22/7 è solo un’approssimazione.' },
        { id: 'm1-1-3', type: 'match', topic: 'Insiemi numerici', q: 'Abbina ogni numero al più piccolo insieme che lo contiene', pairs: [['5', 'ℕ naturali'], ['−3', 'ℤ interi relativi'], ['2/3', 'ℚ razionali'], ['√3', 'ℝ reali (irrazionale)']], explain: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ: ogni numero sta anche in tutti gli insiemi più grandi.' },
        { id: 'm1-1-4', type: 'mc', topic: 'Insiemi numerici', q: 'Il numero 0,6̄ (sei periodico) è…', options: ['razionale, perché è uguale a 2/3', 'irrazionale, perché ha infinite cifre', 'trascendente, come π', 'un numero intero'], answer: 0, explain: 'I decimali periodici sono razionali: 0,6̄ = 2/3. Gli irrazionali hanno infinite cifre ma non periodiche.' },
        { id: 'm1-1-5', type: 'tf', topic: 'Insiemi numerici', q: 'Ogni numero naturale è anche un numero intero relativo.', answer: true, explain: 'ℕ ⊂ ℤ: 5 è naturale ed è anche intero relativo (+5).' },
        { id: 'm1-1-6', type: 'tf', topic: 'Insiemi numerici', q: 'Un numero irrazionale può avere una scrittura decimale periodica.', answer: false, explain: 'Periodico significa razionale. Gli irrazionali hanno decimali illimitati e non periodici.' },
        { id: 'm1-1-7', type: 'mc', topic: 'Intervalli', q: 'Come si scrive l’insieme {x ∈ ℝ : −2 ≤ x < 5}?', options: ['[−2, 5)', '(−2, 5]', '[−2, 5]', '(−2, 5)'], answer: 0, explain: '−2 è incluso (parentesi quadra), 5 è escluso (parentesi tonda): intervallo semiaperto.' },
        { id: 'm1-1-8', type: 'mc', topic: 'Intervalli', q: 'Quale semiretta contiene tutti i numeri strettamente maggiori di 3?', options: ['(3, +∞)', '[3, +∞)', '(−∞, 3)', '[3, +∞]'], answer: 0, explain: 'Strettamente maggiore: 3 escluso, parentesi tonda. Verso +∞ la parentesi è sempre tonda.', profNote: 'Negli appunti la “semiretta aperta destra” è scritta [a, +∞): la notazione corretta è (a, +∞) = {x > a}. Con la quadra l’estremo a sarebbe incluso.' },
        { id: 'm1-1-9', type: 'fill', topic: 'Intervalli', text: 'In un intervallo chiuso gli estremi sono ___; in un intervallo aperto sono ___.', answers: ['inclusi', 'esclusi'], extra: ['infiniti', 'negativi'], explain: '[a, b] include a e b; (a, b) li esclude.' },
        { id: 'm1-1-10', type: 'mc', topic: 'Piano cartesiano', q: 'In quale quadrante si trova il punto (−1, 3)?', options: ['Secondo quadrante', 'Primo quadrante', 'Terzo quadrante', 'Quarto quadrante'], answer: 0, explain: 'x < 0 e y > 0: secondo quadrante.' },
        { id: 'm1-1-11', type: 'mc', topic: 'Piano cartesiano', q: 'In quale quadrante si trova il punto (2, −5)?', options: ['Quarto quadrante', 'Secondo quadrante', 'Terzo quadrante', 'Primo quadrante'], answer: 0, explain: 'x > 0 e y < 0: quarto quadrante.' },
        { id: 'm1-1-12', type: 'tf', topic: 'Piano cartesiano', q: 'I punti (−1, 3) e (3, −1) coincidono.', answer: false, explain: 'Le coppie sono ordinate: conta l’ordine. (−1, 3) sta nel II quadrante, (3, −1) nel IV.' },
        { id: 'm1-1-13', type: 'mc', topic: 'Intervalli', q: 'Quale insieme rappresenta [−2, −1) ∪ [1, 3]?', options: ['−2 incluso, −1 escluso, poi da 1 a 3 entrambi inclusi', 'Tutti i numeri tra −2 e 3', '−2 escluso, −1 incluso, da 1 a 3 esclusi', 'Solo i numeri interi −2, −1, 1, 2, 3'], answer: 0, explain: 'È l’unione di due intervalli: il primo semiaperto, il secondo chiuso.' },
      ],
    },
    {
      id: 'm1l2',
      title: 'Funzioni, dominio e codominio',
      icon: '📈',
      theory: [
        {
          title: 'Che cos’è una funzione',
          points: [
            'Una funzione **f : A ⊂ ℝ → ℝ** associa a **ogni** x ∈ A **un solo** y = f(x).',
            '**Dominio** A: l’insieme degli input (si legge sull’asse x). **Codominio** f(A): l’insieme degli output (si legge sull’asse y).',
            'Per calcolare f in un punto si sostituisce: f(x) = 4x − 1 ⇒ f(0) = −1, quindi il grafico passa per P(0; −1).',
            'Test grafico: ogni retta verticale deve incontrare il grafico **al massimo una volta**.',
          ],
          example: 'f(x) = √x ha dominio [0, +∞) perché la radice quadrata di un numero negativo non è reale. f(x) = 1/x ha dominio ℝ \\ {0}.',
        },
      ],
      exercises: [
        { id: 'm1-2-1', type: 'num', topic: 'Valore di una funzione', q: 'f(x) = 4x − 1. Quanto vale f(0)?', answer: -1, tol: 0, explain: 'f(0) = 4·0 − 1 = −1: il grafico passa per P(0; −1).' },
        { id: 'm1-2-2', type: 'num', topic: 'Valore di una funzione', q: 'f(x) = x² + 1. Quanto vale f(3)?', answer: 10, tol: 0, explain: '3² + 1 = 9 + 1 = 10.' },
        { id: 'm1-2-3', type: 'num', topic: 'Valore di una funzione', q: 'f(x) = 2x² − 7x − 4. Quanto vale f(4)?', answer: 0, tol: 0, explain: '2·16 − 28 − 4 = 32 − 32 = 0. Infatti x = 4 sarà il punto di pareggio dell’esercizio sul profitto.' },
        { id: 'm1-2-4', type: 'mc', topic: 'Definizione di funzione', q: 'Quale di queste relazioni NON è una funzione?', options: ['x² + y² = 1 (circonferenza)', 'y = x² (parabola)', 'y = 3x + 2 (retta)', 'y = |x| (valore assoluto)'], answer: 0, explain: 'Sulla circonferenza a uno stesso x corrispondono due y (sopra e sotto): non è una funzione.' },
        { id: 'm1-2-5', type: 'mc', topic: 'Dominio e codominio', q: 'Su quale asse si legge il dominio di una funzione?', options: ['Sull’asse x', 'Sull’asse y', 'Sulla bisettrice y = x', 'Su entrambi gli assi insieme'], answer: 0, explain: 'Dominio = input sull’asse x; codominio = output sull’asse y.' },
        { id: 'm1-2-6', type: 'tf', topic: 'Definizione di funzione', q: 'In una funzione a uno stesso x possono corrispondere due valori di y diversi.', answer: false, explain: 'Ogni x ha un solo y. Il contrario è possibile: due x diversi possono avere lo stesso y (x² con ±2).' },
        { id: 'm1-2-7', type: 'mc', topic: 'Dominio e codominio', q: 'Qual è il dominio di f(x) = √x?', options: ['[0, +∞)', '(0, +∞)', 'ℝ', 'ℝ \\ {0}'], answer: 0, explain: 'La radice quadrata è definita per x ≥ 0; lo zero è incluso (√0 = 0).' },
        { id: 'm1-2-8', type: 'mc', topic: 'Dominio e codominio', q: 'Qual è il dominio di f(x) = 1/x?', options: ['ℝ \\ {0}', '[0, +∞)', 'ℝ', '(0, +∞)'], answer: 0, explain: 'Non si può dividere per zero: si toglie solo x = 0.' },
        { id: 'm1-2-9', type: 'mc', topic: 'Dominio e codominio', q: 'Qual è il codominio di f(x) = x² con x ∈ ℝ?', options: ['[0, +∞)', 'ℝ', '(0, +∞)', '(−∞, 0]'], answer: 0, explain: 'Un quadrato non è mai negativo e vale 0 per x = 0.' },
        { id: 'm1-2-10', type: 'num', topic: 'Dominio e codominio', q: 'f(x) = 2x − 1 con dominio [0, +∞). Il codominio è [k, +∞). Quanto vale k?', answer: -1, tol: 0, explain: 'La funzione cresce: il valore più piccolo è f(0) = −1, quindi codominio [−1, +∞).' },
        { id: 'm1-2-11', type: 'mc', topic: 'Dominio e codominio', q: 'Qual è il dominio di f(x) = log(x − 2)?', options: ['(2, +∞)', '[2, +∞)', 'ℝ', '(0, +∞)'], answer: 0, explain: 'L’argomento del logaritmo deve essere positivo: x − 2 > 0 ⇒ x > 2.' },
      ],
    },
    {
      id: 'm1l3',
      title: 'Monotonia e iniettività',
      icon: '↗️',
      theory: [
        {
          title: 'Funzioni crescenti e decrescenti',
          points: [
            '**Strettamente crescente**: x₁ < x₂ ⇒ f(x₁) < f(x₂). **Crescente**: x₁ < x₂ ⇒ f(x₁) ≤ f(x₂).',
            '**Strettamente decrescente**: x₁ < x₂ ⇒ f(x₁) > f(x₂). **Decrescente**: f(x₁) ≥ f(x₂).',
            'Crescenti e decrescenti sono **monotone**; quelle in senso stretto sono **strettamente monotone**.',
            'Si studia il **rapporto incrementale** Δf/Δx = [f(x₂) − f(x₁)] / (x₂ − x₁): > 0 str. crescente, ≥ 0 crescente, ≤ 0 decrescente, < 0 str. decrescente.',
          ],
        },
        {
          title: 'Funzioni iniettive',
          points: [
            '**Iniettiva**: x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂). A output diversi corrispondono input diversi.',
            'Test grafico: ogni **retta orizzontale** incontra il grafico al massimo una volta.',
            'Se f è **strettamente monotona** allora è iniettiva, e quindi invertibile. **Non vale il viceversa**.',
          ],
          example: 'x² non è iniettiva su ℝ: f(−2) = f(2) = 4. La retta y = 4 taglia il grafico due volte.',
        },
      ],
      exercises: [
        { id: 'm1-3-1', type: 'mc', topic: 'Monotonia', q: 'Per ogni coppia x₁ < x₂ si ha Δf/Δx > 0. La funzione è…', options: ['strettamente crescente', 'crescente ma non strettamente', 'strettamente decrescente', 'costante'], answer: 0, explain: 'Rapporto incrementale sempre positivo ⇒ strettamente crescente.' },
        { id: 'm1-3-2', type: 'num', topic: 'Rapporto incrementale', q: 'f(x) = 3x + 2. Calcola il rapporto incrementale tra x₁ = 1 e x₂ = 4.', answer: 3, tol: 0, explain: '[f(4) − f(1)] / (4 − 1) = (14 − 5) / 3 = 3. Per una retta è sempre il coefficiente angolare.' },
        { id: 'm1-3-3', type: 'num', topic: 'Rapporto incrementale', q: 'f(x) = x². Calcola il rapporto incrementale tra x₁ = 1 e x₂ = 3.', answer: 4, tol: 0, explain: '(9 − 1) / (3 − 1) = 8 / 2 = 4.' },
        { id: 'm1-3-4', type: 'mc', topic: 'Iniettività', q: 'f(x) = x² con dominio ℝ è iniettiva?', options: ['No, perché f(−2) = f(2) = 4', 'Sì, perché è una funzione', 'Sì, perché è sempre positiva', 'No, perché non è definita in 0'], answer: 0, explain: 'Due input diversi danno lo stesso output: la retta orizzontale y = 4 taglia il grafico due volte.' },
        { id: 'm1-3-5', type: 'tf', topic: 'Iniettività', q: 'Se una funzione è strettamente monotona allora è iniettiva.', answer: true, explain: 'Input diversi danno per forza output diversi. Quindi è anche invertibile.' },
        { id: 'm1-3-6', type: 'tf', topic: 'Iniettività', q: 'Ogni funzione iniettiva è strettamente monotona.', answer: false, explain: 'Gli appunti lo dicono: strettamente monotona ⇒ iniettiva, “ma non viceversa”. Ad esempio 1/x è iniettiva ma su tutto ℝ \\ {0} non è monotona.' },
        { id: 'm1-3-7', type: 'mc', topic: 'Iniettività', q: 'Come si verifica dal grafico se una funzione è iniettiva?', options: ['Ogni retta orizzontale deve tagliarlo al massimo una volta', 'Ogni retta verticale deve tagliarlo al massimo una volta', 'Il grafico deve passare per l’origine', 'Il grafico deve stare sopra l’asse x'], answer: 0, explain: 'Le rette verticali verificano che sia una funzione; quelle orizzontali che sia iniettiva.' },
        { id: 'm1-3-8', type: 'match', topic: 'Monotonia', q: 'Abbina il segno di Δf/Δx al tipo di funzione', pairs: [['> 0', 'Strettamente crescente'], ['≥ 0', 'Crescente'], ['≤ 0', 'Decrescente'], ['< 0', 'Strettamente decrescente']], explain: 'Lo stesso schema varrà per il segno della derivata prima.' },
        { id: 'm1-3-9', type: 'mc', topic: 'Monotonia', q: 'La funzione costante f(x) = c è…', options: ['crescente e decrescente, ma non strettamente', 'strettamente crescente su tutto ℝ', 'iniettiva, quindi invertibile', 'né crescente né decrescente'], answer: 0, explain: 'f(x₁) = f(x₂) soddisfa sia ≤ sia ≥: è monotona ma non strettamente, e non è iniettiva.' },
        { id: 'm1-3-10', type: 'mc', topic: 'Monotonia', q: 'f(x) = −2x + 7 è…', options: ['strettamente decrescente', 'strettamente crescente', 'costante', 'non monotona'], answer: 0, explain: 'Coefficiente angolare −2 < 0: il rapporto incrementale è sempre negativo.' },
      ],
    },
    {
      id: 'm1l4',
      title: 'Funzione inversa',
      icon: '🔄',
      theory: [
        {
          title: 'Costruire l’inversa',
          points: [
            'Se f è **iniettiva** (restringendo il codominio a B = f(A)) esiste **f⁻¹ : B → A** con f⁻¹(y) = x ⇔ y = f(x).',
            '**Dominio di f⁻¹ = codominio di f**; **codominio di f⁻¹ = dominio di f**.',
            'Per trovarla: scrivo y = f(x), ricavo x in funzione di y, poi rinomino y in x per disegnarla nello stesso piano.',
            'Il grafico di f⁻¹ è il **simmetrico** di quello di f rispetto alla **bisettrice y = x**: il punto (x, y) diventa (y, x).',
          ],
          example: 'f(x) = 2x − 1 con x ∈ [0, +∞). y = 2x − 1 ⇒ x = (y + 1)/2 ⇒ f⁻¹(x) = x/2 + 1/2. Dominio di f⁻¹ = [−1, +∞), codominio = [0, +∞).',
        },
      ],
      exercises: [
        { id: 'm1-4-1', type: 'mc', topic: 'Inversa', q: 'Qual è l’inversa di f(x) = 2x − 1?', options: ['f⁻¹(x) = (x + 1)/2', 'f⁻¹(x) = (x − 1)/2', 'f⁻¹(x) = 2x + 1', 'f⁻¹(x) = 1/(2x − 1)'], answer: 0, explain: 'y = 2x − 1 ⇒ y + 1 = 2x ⇒ x = (y + 1)/2, poi si rinomina y in x.' },
        { id: 'm1-4-2', type: 'num', topic: 'Inversa', q: 'f(x) = 3x + 6. Quanto vale f⁻¹(12)?', answer: 2, tol: 0, explain: 'Cerco x con 3x + 6 = 12 ⇒ x = 2. Oppure f⁻¹(x) = (x − 6)/3 ⇒ (12 − 6)/3 = 2.' },
        { id: 'm1-4-3', type: 'mc', topic: 'Inversa', q: 'Il dominio della funzione inversa f⁻¹ è…', options: ['il codominio di f', 'il dominio di f', 'sempre tutto ℝ', 'l’insieme dei punti dove f = 0'], answer: 0, explain: 'Input e output si scambiano: dominio di f⁻¹ = codominio di f e viceversa.' },
        { id: 'm1-4-4', type: 'mc', topic: 'Inversa', q: 'Rispetto a quale retta sono simmetrici i grafici di f e di f⁻¹?', options: ['La bisettrice y = x', 'L’asse x', 'L’asse y', 'La retta y = −x'], answer: 0, explain: 'Il punto (x, y) di f diventa (y, x) di f⁻¹: simmetria rispetto a y = x.' },
        { id: 'm1-4-5', type: 'num', topic: 'Inversa', q: 'f(x) = 5x − 3. Qual è il coefficiente angolare di f⁻¹? (decimale)', answer: 0.2, tol: 0.001, explain: 'L’inversa di mx + q è x/m − q/m: coefficiente angolare 1/m = 1/5 = 0,2.' },
        { id: 'm1-4-6', type: 'tf', topic: 'Inversa', q: 'Se f(x) = mx + q con m > 0, anche la sua inversa ha coefficiente angolare positivo.', answer: true, explain: '1/m ha lo stesso segno di m: l’inversa ha lo stesso “tono” di f.' },
        { id: 'm1-4-7', type: 'order', topic: 'Inversa', q: 'Ordina i passaggi per trovare l’inversa di una funzione', items: ['Verifico che f sia iniettiva', 'Scrivo y = f(x)', 'Ricavo x in funzione di y', 'Rinomino le variabili e scrivo f⁻¹(x)'], explain: 'Senza iniettività l’inversa non esiste (bisogna restringere il dominio).' },
        { id: 'm1-4-8', type: 'mc', topic: 'Inversa', q: 'Perché f(x) = x² su ℝ non ha inversa?', options: ['Non è iniettiva: va ristretta a [0, +∞)', 'Il suo codominio è tutto ℝ, troppo ampio', 'Non è continua nel punto x = 0', 'Passa per l’origine e quindi si annulla'], answer: 0, explain: 'Restringendo a [0, +∞) diventa iniettiva e l’inversa è √x.' },
        { id: 'm1-4-9', type: 'num', topic: 'Inversa', q: 'f(x) = 2x − 1 con dominio [0, +∞). Il dominio di f⁻¹ è [k, +∞): quanto vale k?', answer: -1, tol: 0, explain: 'Dominio di f⁻¹ = codominio di f = [−1, +∞).' },
      ],
    },
    {
      id: 'm1l5',
      title: 'Esercizi guidati: funzioni e inversa',
      icon: '🪜',
      theory: [
        {
          title: 'Come si affronta l’esercizio',
          points: [
            '**Valore**: sostituisco x nella formula. **Zero**: pongo f(x) = 0 e ricavo x.',
            '**Inversa**: controllo che f sia iniettiva, scrivo y = f(x), ricavo x, rinomino.',
            '**Dominio e codominio dell’inversa**: si scambiano con quelli di f.',
            '**Monotonia**: segno del rapporto incrementale su più intervalli.',
          ],
        },
      ],
      exercises: [
        {
          id: 'm1-5-1', type: 'steps', topic: 'Inversa', q: 'Data f(x) = 3x − 6 su ℝ, rispondi passo per passo.',
          steps: [
            { q: 'f(0) = ?', kind: 'num', answer: -6, explain: '3 · 0 − 6 = −6: il grafico taglia l’asse y in (0, −6).' },
            { q: 'Dove si annulla f? x = ?', kind: 'num', answer: 2, explain: '3x − 6 = 0 ⇒ x = 2.' },
            { q: 'Qual è l’inversa?', kind: 'mc', answer: 0, options: ['f⁻¹(x) = (x + 6)/3', 'f⁻¹(x) = (x − 6)/3', 'f⁻¹(x) = 3x + 6', 'f⁻¹(x) = 1/(3x − 6)'], explain: 'y = 3x − 6 ⇒ x = (y + 6)/3, poi rinomino y in x.' },
            { q: 'f⁻¹(9) = ?', kind: 'num', answer: 5, explain: '(9 + 6)/3 = 5. Verifica: f(5) = 9.' },
            { q: 'Coefficiente angolare dell’inversa?', kind: 'num', answer: 1 / 3, tol: 0.005, shown: '1/3', explain: 'L’inversa di mx + q ha pendenza 1/m = 1/3.' },
          ],
          explain: 'Inversa f⁻¹(x) = x/3 + 2: retta simmetrica di f rispetto a y = x.',
        },
        {
          id: 'm1-5-2', type: 'steps', topic: 'Inversa', q: 'f(x) = 2x − 1 con dominio [0, +∞) (esempio degli appunti).',
          steps: [
            { q: 'Il codominio è [k, +∞). k = ?', kind: 'num', answer: -1, explain: 'f è crescente: il valore più piccolo è f(0) = −1.' },
            { q: 'f è invertibile su questo dominio?', kind: 'mc', answer: 0, options: ['Sì: è strettamente crescente, quindi iniettiva', 'No: non è iniettiva', 'Solo se il dominio è ℝ', 'No: il codominio è negativo'], explain: 'Strettamente monotona ⇒ iniettiva ⇒ invertibile.' },
            { q: 'Il dominio di f⁻¹ è [h, +∞). h = ?', kind: 'num', answer: -1, explain: 'Dominio di f⁻¹ = codominio di f = [−1, +∞).' },
            { q: 'f⁻¹(5) = ?', kind: 'num', answer: 3, explain: 'f⁻¹(x) = (x + 1)/2 ⇒ (5 + 1)/2 = 3.' },
          ],
          explain: 'Dominio e codominio si scambiano: f⁻¹ : [−1, +∞) → [0, +∞).',
        },
        {
          id: 'm1-5-3', type: 'steps', topic: 'Monotonia', q: 'Studia la monotonia di f(x) = x² con il rapporto incrementale.',
          steps: [
            { q: 'Rapporto incrementale tra x₁ = 1 e x₂ = 3?', kind: 'num', answer: 4, explain: '(9 − 1)/(3 − 1) = 4 > 0: a destra dello 0 cresce.' },
            { q: 'Rapporto incrementale tra x₁ = −3 e x₂ = −1?', kind: 'num', answer: -4, explain: '(1 − 9)/(−1 + 3) = −4 < 0: a sinistra dello 0 decresce.' },
            { q: 'Che cosa concludi?', kind: 'mc', answer: 0, options: ['Decresce su (−∞, 0], cresce su [0, +∞)', 'Cresce su (−∞, 0], decresce su [0, +∞)', 'È crescente su tutto ℝ', 'È costante'], explain: 'È proprio il punto in cui gli appunti sbagliano: la monotonia corretta è questa.' },
            { q: 'x² è iniettiva su ℝ?', kind: 'mc', answer: 0, options: ['No: f(−2) = f(2)', 'Sì: è una funzione', 'Sì: è sempre positiva', 'Sì: è continua'], explain: 'Due input diversi con lo stesso output: non iniettiva.' },
          ],
          explain: 'Il segno del rapporto incrementale dice dove la funzione sale e dove scende.',
          profNote: 'Negli appunti per xⁿ con n pari la monotonia è scritta al contrario: decrescente su (−∞, 0], crescente su [0, +∞).',
        },
      ],
    },
  ],
  open: [
    { id: 'm1-o1', q: 'Descrivi gli insiemi numerici ℕ, ℤ, ℚ, ℝ e la differenza tra razionali e irrazionali.', answer: 'ℕ sono i naturali {0, 1, 2…}, ℤ gli interi relativi, ℚ i razionali (rapporti n/m con m ≠ 0), ℝ i reali che contengono razionali e irrazionali; ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. I razionali hanno decimali finiti o periodici, gli irrazionali decimali illimitati non periodici. Gli irrazionali possono essere algebrici (√2) o trascendenti (π, e).', keywords: ['naturali', 'interi', 'razionali', 'periodic', 'irrazionali', 'trascendenti'] },
    { id: 'm1-o2', q: 'Che differenza c’è tra intervallo chiuso, aperto e semiaperto? Fai un esempio di ciascuno.', answer: '[a, b] chiuso: a ≤ x ≤ b, estremi inclusi. (a, b) aperto: a < x < b, estremi esclusi. [a, b) semiaperto: a ≤ x < b. Le semirette verso ±∞ hanno sempre la parentesi tonda dalla parte dell’infinito: [a, +∞) = {x ≥ a}, (a, +∞) = {x > a}.', keywords: ['chiuso', 'inclusi', 'aperto', 'esclusi', 'semiaperto', 'infinito'] },
    { id: 'm1-o3', q: 'Definisci una funzione reale, il suo dominio e il suo codominio.', answer: 'Una funzione f : A ⊂ ℝ → ℝ associa a ogni x del dominio A uno e un solo y = f(x). Il dominio è l’insieme degli input, letto sull’asse x; il codominio f(A) è l’insieme degli output, letto sull’asse y. Graficamente ogni retta verticale incontra il grafico al massimo una volta.', keywords: ['ogni x', 'un solo', 'dominio', 'codominio', 'asse x', 'asse y'] },
    { id: 'm1-o4', q: 'Quando una funzione è strettamente crescente? E come lo verifichi?', answer: 'Quando per x₁ < x₂ si ha f(x₁) < f(x₂). Si verifica col rapporto incrementale Δf/Δx = [f(x₂) − f(x₁)]/(x₂ − x₁): se è sempre > 0 è strettamente crescente, ≥ 0 crescente, ≤ 0 decrescente, < 0 strettamente decrescente.', keywords: ['x₁ < x₂', 'f(x₁) < f(x₂)', 'rapporto incrementale', 'positiv'] },
    { id: 'm1-o5', q: 'Che cos’è una funzione iniettiva e che legame ha con la monotonia?', answer: 'È iniettiva se a input diversi corrispondono output diversi: x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂). Graficamente ogni retta orizzontale taglia il grafico al massimo una volta. Se una funzione è strettamente monotona allora è iniettiva e quindi invertibile, ma non vale il viceversa.', keywords: ['input diversi', 'output diversi', 'orizzontale', 'strettamente monotona', 'invertibile', 'viceversa'] },
    { id: 'm1-o6', q: 'Come si costruisce la funzione inversa? Fai l’esempio di f(x) = 2x − 1.', answer: 'Serve che f sia iniettiva (restringendo il codominio a f(A)). Si scrive y = f(x) e si ricava x: y = 2x − 1 ⇒ x = (y + 1)/2. Rinominando: f⁻¹(x) = x/2 + 1/2. Il dominio di f⁻¹ è il codominio di f e viceversa; i grafici sono simmetrici rispetto alla bisettrice y = x.', keywords: ['iniettiva', 'ricav', '(y + 1)/2', 'dominio', 'codominio', 'bisettrice'] },
    { id: 'm1-o7', q: 'Descrivi i quattro quadranti del piano cartesiano.', answer: 'Gli assi dividono il piano in quattro quadranti: I con x > 0 e y > 0; II con x < 0 e y > 0; III con x < 0 e y < 0; IV con x > 0 e y < 0. L’origine è (0, 0). I punti sono coppie ordinate, quindi (−1, 3) ≠ (3, −1).', keywords: ['primo', 'secondo', 'terzo', 'quarto', 'origine', 'ordinate'] },
  ],
  cards: [
    { id: 'm1-c1', front: 'Numero razionale', back: 'Rapporto n/m di interi (m ≠ 0): decimali finiti o periodici.' },
    { id: 'm1-c2', front: 'Numero irrazionale', back: 'Non razionale: decimali illimitati non periodici (√2, π).' },
    { id: 'm1-c3', front: 'Algebrico / trascendente', back: 'Algebrico: soluzione di un polinomio a coefficienti interi (√2). Trascendente: no (π, e).' },
    { id: 'm1-c4', front: '[a, b] / (a, b)', back: 'Chiuso: estremi inclusi. Aperto: estremi esclusi.' },
    { id: 'm1-c5', front: 'Quadranti', back: 'I (+,+) · II (−,+) · III (−,−) · IV (+,−).' },
    { id: 'm1-c6', front: 'Funzione', back: 'A ogni x del dominio associa un solo y.' },
    { id: 'm1-c7', front: 'Dominio e codominio', back: 'Dominio: input (asse x). Codominio f(A): output (asse y).' },
    { id: 'm1-c8', front: 'Strettamente crescente', back: 'x₁ < x₂ ⇒ f(x₁) < f(x₂); Δf/Δx > 0.' },
    { id: 'm1-c9', front: 'Iniettiva', back: 'x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂). Rette orizzontali: al massimo un’intersezione.' },
    { id: 'm1-c10', front: 'Strettamente monotona ⇒ ?', back: 'Iniettiva e invertibile (non vale il viceversa).' },
    { id: 'm1-c11', front: 'Dominio di f⁻¹', back: 'È il codominio di f (e il codominio di f⁻¹ è il dominio di f).' },
    { id: 'm1-c12', front: 'Grafico di f⁻¹', back: 'Simmetrico di quello di f rispetto alla bisettrice y = x.' },
  ],
};

export default m1;
