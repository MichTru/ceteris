import type { Unit } from '../../types';

const p1: Unit = {
  id: 'p1',
  n: 1,
  title: 'L’apprendimento',
  subtitle: 'Definizione, stabilità, funzione adattiva, teorie associazioniste e cognitive',
  color: '#8B5CF6',
  colorDark: '#6D28D9',
  lessons: [
    {
      id: 'p1l1',
      title: 'Che cos’è l’apprendimento',
      icon: '🌱',
      theory: [
        {
          title: 'La definizione',
          points: [
            'L’**apprendimento** è un processo attraverso il quale si **acquisiscono** nuove conoscenze, abilità o comportamenti, oppure si **modificano** quelli già esistenti.',
            'Avviene **in seguito all’esperienza** e all’**interazione con l’ambiente**.',
            'Le modificazioni prodotte dall’apprendimento sono **relativamente stabili**.',
          ],
        },
        {
          title: 'Non ogni cambiamento è apprendimento',
          points: [
            'Non tutti i cambiamenti del comportamento derivano dall’apprendimento.',
            'La **stanchezza** e le **alterazioni temporanee** dovute a una **malattia** non sono necessariamente forme di apprendimento.',
          ],
          tip: 'Due parole chiave per riconoscerlo: esperienza e stabilità.',
        },
      ],
      exercises: [
        { id: 'p1-1-1', type: 'mc', topic: 'Definizione', q: 'Che cos’è l’apprendimento?', options: ['Un processo con cui si acquisiscono o si modificano conoscenze, abilità o comportamenti in seguito all’esperienza', 'Qualsiasi cambiamento del comportamento, anche momentaneo', 'Lo sviluppo di capacità dovuto solo alla crescita biologica', 'La memorizzazione di nozioni a scuola'], answer: 0, explain: 'Avviene in seguito all’esperienza e all’interazione con l’ambiente.' },
        { id: 'p1-1-2', type: 'tf', topic: 'Definizione', q: 'L’apprendimento può anche modificare comportamenti già esistenti.', answer: true, explain: 'Si acquisiscono nuove conoscenze, abilità o comportamenti oppure si modificano quelli già esistenti.' },
        { id: 'p1-1-3', type: 'tf', topic: 'Stabilità', q: 'Le modificazioni prodotte dall’apprendimento sono passeggere.', answer: false, explain: 'Sono relativamente stabili.' },
        { id: 'p1-1-4', type: 'mc', topic: 'Stabilità', scenario: 'Dopo una lunga corsa Luca cammina più lentamente del solito per qualche ora.', q: 'È un caso di apprendimento?', options: ['No: è un cambiamento temporaneo dovuto alla stanchezza', 'Sì: il comportamento è cambiato', 'Sì: è legato all’esperienza della corsa', 'Sì, perché è un comportamento osservabile'], answer: 0, explain: 'La stanchezza non è necessariamente una forma di apprendimento.' },
        { id: 'p1-1-5', type: 'mc', topic: 'Stabilità', q: 'Quale di questi cambiamenti NON è necessariamente apprendimento?', options: ['Un’alterazione temporanea dovuta a una malattia', 'Imparare ad andare in bicicletta', 'Evitare un cibo dopo esserci stati male', 'Salivare al suono di un campanello associato al cibo'], answer: 0, explain: 'Le alterazioni temporanee per malattia non sono necessariamente apprendimento.' },
        { id: 'p1-1-6', type: 'fill', topic: 'Definizione', text: 'L’apprendimento avviene in seguito all’___ e all’interazione con l’___.', answers: ['esperienza', 'ambiente'], extra: ['ereditarietà', 'età'], explain: 'Le modificazioni sono relativamente stabili.' },
        { id: 'p1-1-7', type: 'match', topic: 'Stabilità', q: 'Apprendimento o no?', pairs: [['Imparare una nuova abilità con la pratica', 'Apprendimento'], ['Essere stanchi dopo lo sport', 'Non necessariamente'], ['Rallentare per la febbre', 'Non necessariamente'], ['Cambiare abitudine dopo un’esperienza', 'Apprendimento']], explain: 'Conta che il cambiamento derivi dall’esperienza e sia relativamente stabile.' },
      ],
    },
    {
      id: 'p1l2',
      title: 'La funzione adattiva',
      icon: '🧭',
      theory: [
        {
          title: 'Perché impariamo',
          points: [
            'L’apprendimento ha una **funzione adattiva**.',
            'Permette all’individuo di **rispondere in modo più efficace** alle situazioni ambientali **già sperimentate**.',
          ],
          example: 'Chi si è scottato una volta con una pentola impara a usare la presina: la volta dopo risponde meglio alla stessa situazione.',
        },
      ],
      exercises: [
        { id: 'p1-2-1', type: 'mc', topic: 'Funzione adattiva', q: 'Perché l’apprendimento ha una funzione adattiva?', options: ['Permette di rispondere in modo più efficace a situazioni già sperimentate', 'Rende il comportamento uguale in ogni situazione', 'Cancella le esperienze negative', 'Sostituisce i riflessi biologici'], answer: 0, explain: 'Ci aiuta ad adattarci all’ambiente.' },
        { id: 'p1-2-2', type: 'tf', topic: 'Funzione adattiva', q: 'Grazie all’apprendimento l’individuo risponde meglio a situazioni ambientali che ha già vissuto.', answer: true, explain: 'È la funzione adattiva dell’apprendimento.' },
        { id: 'p1-2-3', type: 'fill', topic: 'Funzione adattiva', text: 'L’apprendimento ha una funzione ___: permette di rispondere in modo più ___ alle situazioni già sperimentate.', answers: ['adattiva', 'efficace'], extra: ['estetica', 'casuale'], explain: 'Vale anche per il condizionamento classico, che permette di anticipare eventi significativi.' },
        { id: 'p1-2-4', type: 'mc', topic: 'Funzione adattiva', scenario: 'Un bambino che si è punto con una rosa, la volta successiva la prende dal gambo senza spine.', q: 'Quale caratteristica dell’apprendimento mostra l’esempio?', options: ['La funzione adattiva', 'La stanchezza', 'Un’alterazione temporanea', 'Un riflesso innato'], answer: 0, explain: 'Risponde in modo più efficace a una situazione già sperimentata.' },
      ],
    },
    {
      id: 'p1l3',
      title: 'Due orientamenti teorici',
      icon: '🧩',
      theory: [
        {
          title: 'Associazioniste e cognitive',
          points: [
            '**Teorie associazioniste**: spiegano l’apprendimento attraverso le **associazioni** tra stimoli, eventi e risposte.',
            '**Teorie cognitive**: danno importanza ai **processi mentali**: memoria, attenzione, ragionamento e rappresentazione delle informazioni.',
          ],
        },
        {
          title: 'Il comportamentismo',
          points: [
            'I **comportamentisti** sottolineano il ruolo dell’**ambiente** e dell’**esperienza** nell’acquisizione dei comportamenti.',
            'Alcuni primi esponenti adottavano una posizione **molto radicale**: l’individuo è **fortemente modellato dall’ambiente**.',
          ],
        },
      ],
      exercises: [
        { id: 'p1-3-1', type: 'match', topic: 'Orientamenti', q: 'Associazioniste o cognitive?', pairs: [['Associazioni tra stimoli, eventi e risposte', 'Associazioniste'], ['Memoria e attenzione', 'Cognitive'], ['Ragionamento', 'Cognitive'], ['Rappresentazione delle informazioni', 'Cognitive']], explain: 'Le cognitive mettono al centro i processi mentali.' },
        { id: 'p1-3-2', type: 'mc', topic: 'Orientamenti', q: 'Come spiegano l’apprendimento le teorie associazioniste?', options: ['Con le associazioni tra stimoli, eventi e risposte', 'Con i processi mentali come il ragionamento', 'Con la maturazione biologica', 'Con l’introspezione'], answer: 0, explain: 'Il condizionamento classico è un apprendimento associativo.' },
        { id: 'p1-3-3', type: 'mc', topic: 'Orientamenti', q: 'A cosa danno importanza le teorie cognitive?', options: ['Ai processi mentali: memoria, attenzione, ragionamento, rappresentazione', 'Solo ai comportamenti osservabili', 'Solo agli stimoli dell’ambiente', 'Ai riflessi fisiologici'], answer: 0, explain: 'Sono l’altro grande orientamento rispetto alle teorie associazioniste.' },
        { id: 'p1-3-4', type: 'mc', topic: 'Comportamentismo', q: 'Cosa sottolineano i comportamentisti?', options: ['Il ruolo dell’ambiente e dell’esperienza nell’acquisizione dei comportamenti', 'Il ruolo dei processi mentali interni', 'Il ruolo dell’ereditarietà', 'Il valore dell’introspezione'], answer: 0, explain: 'Alcuni primi esponenti erano molto radicali.' },
        { id: 'p1-3-5', type: 'tf', topic: 'Comportamentismo', q: 'Alcuni primi comportamentisti consideravano l’individuo fortemente modellato dall’ambiente.', answer: true, explain: 'Era una posizione molto radicale.' },
        { id: 'p1-3-6', type: 'fill', topic: 'Orientamenti', text: 'Le teorie ___ si basano sulle associazioni; le teorie ___ sui processi mentali.', answers: ['associazioniste', 'cognitive'], extra: ['fisiologiche', 'emotive'], explain: 'Sono i due grandi orientamenti teorici.' },
        { id: 'p1-3-7', type: 'tf', topic: 'Orientamenti', q: 'Il ragionamento è un processo centrale per le teorie associazioniste.', answer: false, explain: 'È centrale per le teorie cognitive.' },
      ],
    },
    {
      id: 'p1l4',
      title: 'Riconosci l’apprendimento',
      icon: '🔍',
      theory: [
        {
          title: 'Le domande da farsi',
          points: [
            'Il cambiamento nasce dall’**esperienza** o dall’**interazione con l’ambiente**?',
            'È **relativamente stabile**, o sparisce appena passa la stanchezza o la malattia?',
            'Se si basa su un’**associazione** tra stimoli ed eventi, pensa alle **teorie associazioniste**; se contano memoria, attenzione e ragionamento, alle **teorie cognitive**.',
          ],
        },
      ],
      exercises: [
        { id: 'p1-4-1', type: 'mc', topic: 'Casi', scenario: 'Dopo mesi di pratica, Marco suona una canzone alla chitarra senza guardare le corde.', q: 'È apprendimento?', options: ['Sì: un’abilità acquisita con l’esperienza e stabile', 'No: è un cambiamento temporaneo', 'No: è una risposta automatica innata', 'No: non c’è nessun ambiente'], answer: 0, explain: 'Esperienza e stabilità: le due parole chiave.' },
        { id: 'p1-4-2', type: 'mc', topic: 'Casi', scenario: 'Con la febbre alta Anna per due giorni non riesce a concentrarsi; poi torna come prima.', q: 'È apprendimento?', options: ['Non necessariamente: è un’alterazione temporanea dovuta a una malattia', 'Sì: il comportamento è cambiato', 'Sì: è apprendimento associativo', 'Sì: è condizionamento aversivo'], answer: 0, explain: 'Il cambiamento non è stabile e non nasce dall’esperienza.' },
        { id: 'p1-4-3', type: 'mc', topic: 'Casi', scenario: 'Il gatto di Sara corre in cucina appena sente il rumore dell’apriscatole.', q: 'Quale orientamento lo spiega meglio?', options: ['Le teorie associazioniste: un suono associato a un evento', 'Le teorie cognitive: il gatto ragiona sul cibo', 'Nessuno: è un riflesso innato', 'Il ragionamento logico'], answer: 0, explain: 'Associazione tra uno stimolo (il rumore) e un evento (il cibo).' },
        { id: 'p1-4-4', type: 'mc', topic: 'Casi', scenario: 'Per ricordare meglio, Giulia trasforma gli appunti in schemi e collegamenti tra concetti.', q: 'Su quali processi puntano le teorie che spiegano meglio questo modo di imparare?', options: ['Memoria e rappresentazione delle informazioni (teorie cognitive)', 'Associazioni tra stimoli (teorie associazioniste)', 'Riflessi fisiologici', 'Stanchezza e recupero'], answer: 0, explain: 'Le teorie cognitive danno importanza ai processi mentali.' },
        { id: 'p1-4-5', type: 'match', topic: 'Casi', q: 'Apprendimento o no?', pairs: [['Parlare meglio l’inglese dopo un anno all’estero', 'Apprendimento'], ['Sbadigliare dopo una notte in bianco', 'Non necessariamente'], ['Evitare la stufa dopo essersi scottati', 'Apprendimento'], ['Essere lenti per l’influenza', 'Non necessariamente']], explain: 'Esperienza e stabilità contro stanchezza e malattia.' },
        { id: 'p1-4-6', type: 'tf', topic: 'Casi', q: 'Un cambiamento del comportamento che nasce dall’esperienza e dura nel tempo è un segnale di apprendimento.', answer: true, explain: 'È la definizione: modificazione relativamente stabile dovuta all’esperienza.' },
      ],
    },
  ],
  open: [
    { id: 'p1-o1', q: 'Che cos’è l’apprendimento?', answer: 'È un processo con cui si acquisiscono nuove conoscenze, abilità o comportamenti, oppure si modificano quelli già esistenti, in seguito all’esperienza e all’interazione con l’ambiente. Le modificazioni sono relativamente stabili. Non ogni cambiamento è apprendimento: la stanchezza o le alterazioni temporanee per una malattia non lo sono necessariamente.', keywords: ['acquisiscono', 'modificano', 'esperienza', 'ambiente', 'stabili', 'stanchezza', 'malattia'] },
    { id: 'p1-o2', q: 'Perché si dice che l’apprendimento ha una funzione adattiva?', answer: 'Perché permette all’individuo di rispondere in modo più efficace alle situazioni ambientali che ha già sperimentato.', keywords: ['adattiva', 'efficace', 'situazioni', 'sperimentate'] },
    { id: 'p1-o3', q: 'Quali sono i due grandi orientamenti teorici sull’apprendimento?', answer: 'Le teorie associazioniste, che spiegano l’apprendimento con le associazioni tra stimoli, eventi e risposte, e le teorie cognitive, che danno importanza ai processi mentali: memoria, attenzione, ragionamento e rappresentazione delle informazioni.', keywords: ['associazioniste', 'associazioni', 'stimoli', 'cognitive', 'processi mentali', 'memoria'] },
    { id: 'p1-o4', q: 'Che posizione hanno i comportamentisti sull’apprendimento?', answer: 'Sottolineano il ruolo dell’ambiente e dell’esperienza nell’acquisizione dei comportamenti. Alcuni primi esponenti avevano una posizione molto radicale e consideravano l’individuo fortemente modellato dall’ambiente.', keywords: ['ambiente', 'esperienza', 'comportamenti', 'radicale', 'modellato'] },
    { id: 'p1-o5', q: 'Fai un esempio di apprendimento e uno di cambiamento che non lo è, spiegando perché.', answer: 'Imparare a suonare la chitarra con mesi di pratica è apprendimento: è un’abilità acquisita con l’esperienza e relativamente stabile. Essere lenti per la stanchezza o per la febbre non lo è necessariamente: è un’alterazione temporanea che passa da sola.', keywords: ['esperienza', 'stabile', 'stanchezza', 'malattia', 'temporanea'] },
  ],
  cards: [
    { id: 'p1-c1', front: 'Apprendimento: definizione', back: 'Processo con cui si acquisiscono o si modificano conoscenze, abilità o comportamenti, in seguito all’esperienza e all’interazione con l’ambiente.' },
    { id: 'p1-c2', front: 'Apprendimento: stabilità', back: 'Le modificazioni prodotte dall’apprendimento sono relativamente stabili.' },
    { id: 'p1-c3', front: 'Cambiamenti che non sono apprendimento', back: 'Stanchezza e alterazioni temporanee dovute a una malattia non sono necessariamente apprendimento.' },
    { id: 'p1-c4', front: 'Funzione adattiva dell’apprendimento', back: 'Permette di rispondere in modo più efficace alle situazioni ambientali già sperimentate.' },
    { id: 'p1-c5', front: 'Teorie associazioniste', back: 'Teorie associazioniste: spiegano l’apprendimento con le associazioni tra stimoli, eventi e risposte.' },
    { id: 'p1-c6', front: 'Teorie cognitive', back: 'Teorie cognitive: danno importanza ai processi mentali (memoria, attenzione, ragionamento, rappresentazione delle informazioni).' },
    { id: 'p1-c7', front: 'Comportamentisti e apprendimento', back: 'Sottolineano il ruolo dell’ambiente e dell’esperienza; alcuni primi esponenti vedevano l’individuo fortemente modellato dall’ambiente.' },
    { id: 'p1-c8', front: 'Come riconoscere l’apprendimento in un caso', back: 'Chiediti: nasce dall’esperienza? È relativamente stabile? Se è stanchezza o malattia, non necessariamente.' },
  ],
};

export default p1;
