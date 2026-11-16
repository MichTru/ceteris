import type { Unit } from '../../types';

const i7: Unit = {
  id: 'i7',
  n: 7,
  title: 'Mood: la clause come scambio',
  subtitle: 'Subject, Finite, Residue, adjuncts, tipi di mood',
  color: '#6366F1',
  colorDark: '#4338CA',
  lessons: [
    {
      id: 'i7l1',
      title: 'Subject e Finite',
      icon: '🤝',
      theory: [
        {
          title: 'Clause as exchange',
          points: [
            'Ora la clause è uno **scambio di significati** tra i partecipanti: variabile **tenor**, metafunzione **interpersonal**.',
            'Sistemi: **mood**, **modality**, **appraisal**.',
            'La clause si divide in due parti: **Mood block** (Subject, Finite, Modal adjuncts) e **Residue** (Predicator, Complement, Circumstantial adjuncts).',
          ],
        },
        {
          title: 'Il Subject',
          points: [
            'Definizioni tradizionali: chi **fa** l’azione, oppure l’elemento che **concorda** in numero e persona con il verbo. Ma il soggetto non sempre coincide con chi agisce.',
            '“Professor Luporini is writing an essay”: soggetto e Actor coincidono. “An essay is written by Professor Luporini”: il Subject è **an essay**, l’Actor resta Professor Luporini.',
            'Definizione corretta: l’entità che il parlante rende **responsabile della validità** della clause, quella rispetto a cui si può dire “sì, d’accordo” o “no”. È una **funzione interpersonale**.',
          ],
        },
        {
          title: 'Il Finite',
          points: [
            'La parte del verbal group che esprime **polarity** (positiva o negativa), **tense** e **modality**.',
            'Il resto del verbal group è il **Predicator**: “The work ahead of us **will** (Finite) **be** (Predicator) hard.”',
            'A volte Finite e Predicator sono **fusi** (conflation): “I **promise** you this.”',
          ],
          tip: 'Trucco: aggiungi una tag question. “The work ahead of us will be hard, won’t it?” Il Finite è quello che torna nella tag.',
        },
      ],
      exercises: [
        { id: 'i7-1-1', type: 'mc', topic: 'Subject', q: 'Qual è la definizione di Subject in Functional Grammar?', options: ['L’entità che il parlante rende responsabile della validità della clause', 'Chi compie l’azione', 'Il primo nome della clause', 'Il complemento più importante'], answer: 0, explain: 'È ciò rispetto a cui la clause si può affermare o negare.' },
        { id: 'i7-1-2', type: 'mc', topic: 'Subject', scenario: '“An essay is written by Professor Luporini”', q: 'Chi è il Subject?', options: ['An essay', 'Professor Luporini', 'is written', 'Nessuno'], answer: 0, explain: 'L’Actor è Professor Luporini, ma il Subject è “an essay”.' },
        { id: 'i7-1-3', type: 'match', topic: 'Finite', q: '“The work ahead of us will be hard”', pairs: [['The work ahead of us', 'Subject'], ['will', 'Finite'], ['be', 'Predicator'], ['hard', 'Complement']], explain: 'Subject + Finite = Mood block.' },
        { id: 'i7-1-4', type: 'mc', topic: 'Finite', q: 'Cosa esprime il Finite?', options: ['Polarity, tense e modality', 'Il significato lessicale del verbo', 'Il tipo di processo', 'Il tema della clause'], answer: 0, explain: 'Il resto del verbal group è il Predicator.' },
        { id: 'i7-1-5', type: 'mc', topic: 'Finite', q: 'Nella clause “Though we can’t avoid it”, qual è il Finite?', options: ['can’t', 'Though', 'avoid', 'can’t avoid'], answer: 0, explain: 'Dall’attività sul testo di Good Housekeeping: “avoid” è il Predicator.' },
        { id: 'i7-1-6', type: 'tf', topic: 'Finite', q: 'In “and researchers believe” c’è conflation tra Finite e Predicator.', answer: true, explain: 'Il verbo semplice porta insieme tempo e significato: “researchers believe, don’t they?”.' },
        { id: 'i7-1-7', type: 'mc', topic: 'Finite', q: 'Quale trucco aiuta a trovare il Finite?', options: ['Aggiungere una tag question', 'Volgere la clause al passivo', 'Cercare la prima preposizione', 'Togliere il soggetto'], answer: 0, explain: '“…will be hard, won’t it?”' },
        { id: 'i7-1-8', type: 'tf', topic: 'Subject', q: 'Il Subject coincide sempre con chi compie l’azione.', answer: false, explain: 'Al passivo il Subject è chi subisce: l’Actor è un’altra cosa.' },
      ],
    },
    {
      id: 'i7l2',
      title: 'Residue e adjuncts',
      icon: '🧱',
      theory: [
        {
          title: 'Mood block e Residue',
          points: [
            '**Modal adjuncts** (nel Mood block): adverbial groups o espressioni come unfortunately, frankly, to be honest (commento del parlante sulla clause) oppure always, never, maybe, sometimes (significati temporali o modali).',
            '**Residue**: ciò che resta dopo il Mood block.',
            '**Predicator**: il verbal group meno il Finite.',
            '**Complement**: **sempre un nominal group** che potrebbe diventare Subject ma non lo è.',
            '**Circumstantial adjunct**: dà informazioni circostanziali e corrisponde alle circumstances della transitivity (“in the last two weeks”).',
            'Il **Mood block** è il cuore della clause as exchange: contiene Subject e Finite, fondamentali per l’interazione, e decide il mood della clause.',
          ],
          example: 'Perhaps (Modal adjunct) we (Subject) have (Finite) learned (Predicator) something (Complement) in the last two weeks (Circumstantial adjunct).',
        },
      ],
      exercises: [
        { id: 'i7-2-1', type: 'match', topic: 'Mood block', q: 'Mood block o Residue?', pairs: [['Subject', 'Mood block'], ['Finite', 'Mood block'], ['Modal adjunct', 'Mood block'], ['Complement', 'Residue'], ['Circumstantial adjunct', 'Residue']], explain: 'Anche il Predicator sta nel Residue.' },
        { id: 'i7-2-2', type: 'mc', topic: 'Adjuncts', scenario: '“Surprisingly, drivers aren’t safer than pedestrians”', q: 'Che funzione ha “Surprisingly”?', options: ['Modal adjunct', 'Complement', 'Predicator', 'Circumstantial adjunct'], answer: 0, explain: 'È il commento del parlante sulla clause.' },
        { id: 'i7-2-3', type: 'tf', topic: 'Adjuncts', q: '“Surprisingly” fa parte del Residue della clause.', answer: false, explain: 'I modal adjuncts stanno nel Mood block.' },
        { id: 'i7-2-4', type: 'mc', topic: 'Residue', scenario: '“drivers aren’t safer than pedestrians”', q: 'Che funzione ha “safer”?', options: ['Complement', 'Modal adjunct', 'Predicator', 'Circumstantial adjunct'], answer: 0, explain: 'Viene dopo il Finite “aren’t” ed è nel Residue.' },
        { id: 'i7-2-5', type: 'mc', topic: 'Mood block', q: 'Qual è il Mood block di “Indoor pollution levels can sometimes be worse than those outside”?', options: ['Indoor pollution levels can sometimes', 'Indoor pollution levels', 'Indoor pollution levels can', 'be worse than those outside'], answer: 0, explain: '“sometimes” è un modal adjunct, quindi entra nel Mood block.' },
        { id: 'i7-2-6', type: 'mc', topic: 'Residue', q: 'La funzione Complement può essere svolta solo da:', options: ['Nominal groups', 'Verbal groups', 'Adverbial groups', 'Prepositional phrases'], answer: 0, explain: 'Il Complement potrebbe diventare Subject: quindi è un nominal group.' },
        { id: 'i7-2-7', type: 'match', topic: 'Residue', q: '“We have all learned a lot in the last two weeks”', pairs: [['We', 'Subject'], ['have', 'Finite'], ['learned', 'Predicator'], ['a lot', 'Complement'], ['in the last two weeks', 'Circumstantial adjunct']], explain: 'La PP dà un’informazione di tempo.' },
        { id: 'i7-2-8', type: 'match', topic: 'Adjuncts', q: 'Modal o circumstantial adjunct?', pairs: [['frankly', 'Modal'], ['maybe', 'Modal'], ['in the garden', 'Circumstantial'], ['never', 'Modal']], explain: 'I circumstantial corrispondono alle circumstances.' },
        { id: 'i7-2-9', type: 'tf', topic: 'Residue', q: 'I circumstantial adjuncts corrispondono alle circumstances della transitivity.', answer: true, explain: 'Stessi elementi, vista diversa della clause.' },
      ],
    },
    {
      id: 'i7l3',
      title: 'I tipi di mood',
      icon: '❓',
      theory: [
        {
          title: 'Indicative',
          points: [
            '**Declarative**: dà informazioni. Ordine **Subject + Finite**. “**I will** keep the faith [[that you have placed in me]].”',
            '**Interrogative**: chiede informazioni. Ordine **Finite + Subject**. “**Does the Lamestream Media** call…?”',
            '**Exclamative**: per le esclamazioni. Elemento wh- e poi Subject + Finite. “What a great book Harry Potter is!”',
          ],
        },
        {
          title: 'Riepilogo: due viste della stessa clause',
          points: [
            'Transitivity: The work ahead of us (Carrier) will be (Relational) hard (Attribute).',
            'Mood: The work ahead of us (Subject) will (Finite) be (Predicator) hard (Complement).',
            'Quando analizziamo gli interpersonal meanings, consideriamo la clause come un **exchange**.',
          ],
        },
      ],
      exercises: [
        { id: 'i7-3-1', type: 'match', topic: 'Mood', q: 'Abbina il mood all’ordine o alla funzione', pairs: [['Declarative', 'Subject + Finite, dà informazioni'], ['Interrogative', 'Finite + Subject, chiede informazioni'], ['Exclamative', 'wh- + Subject + Finite']], explain: 'Il mood dipende dal Mood block.' },
        { id: 'i7-3-2', type: 'mc', topic: 'Mood', scenario: '“Do you hold your breath when crossing a busy road?”', q: 'Che mood ha?', options: ['Indicative interrogative', 'Indicative declarative', 'Exclamative', 'Imperative'], answer: 0, explain: 'Il Finite “do” precede il Subject “you”.' },
        { id: 'i7-3-3', type: 'mc', topic: 'Mood', scenario: '“I will keep the faith that you have placed in me”', q: 'Perché è dichiarativa?', options: ['Il Subject “I” precede il Finite “will”', 'Contiene una relativa', 'Non ha un Complement', 'Il Finite è all’inizio'], answer: 0, explain: 'Subject + Finite = declarative.' },
        { id: 'i7-3-4', type: 'fill', topic: 'Mood', text: 'Quando analizziamo gli interpersonal meanings in FG, consideriamo la clause come un ___.', answers: ['exchange'], extra: ['message', 'representation'], explain: 'Domanda di completamento dell’attività sul testo.' },
        { id: 'i7-3-5', type: 'match', topic: 'Due viste', q: '“The work ahead of us will be hard”: transitivity', pairs: [['The work ahead of us', 'Carrier'], ['will be', 'Relational process'], ['hard', 'Attribute']], explain: 'Nella vista mood la stessa clause è Subject, Finite, Predicator, Complement.' },
        { id: 'i7-3-6', type: 'match', topic: 'Due viste', q: '“Perhaps we have learned something”: mood', pairs: [['Perhaps', 'Modal adjunct'], ['we', 'Subject'], ['learned', 'Predicator'], ['something', 'Complement']], explain: '“have” è il Finite.' },
        { id: 'i7-3-7', type: 'mc', topic: 'Due viste', q: 'In “Perhaps we have learned something”, nella transitivity “we” è:', options: ['Senser', 'Actor', 'Carrier', 'Sayer'], answer: 0, explain: 'Learn è un processo mentale; “something” è il Phenomenon.' },
        { id: 'i7-3-8', type: 'tf', topic: 'Mood', q: 'Il mood della clause in inglese è dato dal Mood block.', answer: true, explain: 'L’ordine di Subject e Finite distingue dichiarativa e interrogativa.' },
      ],
    },
  ],
  open: [
    { id: 'i7-o1', q: 'Come si divide la clause as exchange?', answer: 'In Mood block e Residue. Il Mood block contiene Subject, Finite e Modal adjuncts; è il cuore della clause as exchange perché contiene le funzioni interpersonalmente fondamentali e decide il mood. Il Residue contiene Predicator (verbal group meno il Finite), Complement (nominal group che potrebbe essere Subject) e Circumstantial adjuncts (le circumstances della transitivity).', keywords: ['Mood block', 'Residue', 'Subject', 'Finite', 'Predicator', 'Complement', 'adjunct'] },
    { id: 'i7-o2', q: 'Come si definisce il Subject in Functional Grammar?', answer: 'Le definizioni tradizionali (chi fa l’azione o l’elemento che concorda col verbo) non bastano: al passivo “An essay is written by Professor Luporini” il Subject è “an essay” e l’Actor Professor Luporini. In FG il Subject è l’entità che il parlante rende responsabile della validità della clause, rispetto alla quale si può dire sì o no. È una funzione interpersonale.', keywords: ['azione', 'concorda', 'passivo', 'responsabile', 'validità', 'interpersonale'] },
    { id: 'i7-o3', q: 'Cos’è il Finite e come si riconosce?', answer: 'È la parte del verbal group che esprime polarity, tense e modality; il resto è il Predicator (The work ahead of us will be hard: will = Finite, be = Predicator). A volte sono fusi in una sola parola (I promise you this). Per riconoscerlo si aggiunge una tag question: won’t it?', keywords: ['polarity', 'tense', 'modality', 'Predicator', 'fusi', 'tag question'] },
    { id: 'i7-o4', q: 'Quali tipi di mood conosci?', answer: 'Indicative declarative: dà informazioni, ordine Subject + Finite (I will keep the faith). Indicative interrogative: chiede informazioni, ordine Finite + Subject (Does the Lamestream Media call…?). Exclamative: per le esclamazioni, con elemento wh- e poi Subject + Finite (What a great book Harry Potter is!).', keywords: ['declarative', 'interrogative', 'exclamative', 'Subject', 'Finite', 'ordine'] },
    { id: 'i7-o5', q: 'Che differenza c’è tra modal adjunct e circumstantial adjunct?', answer: 'Il modal adjunct sta nel Mood block: esprime il commento del parlante sulla clause (unfortunately, frankly, surprisingly, to be honest) o significati temporali e modali (always, never, maybe, sometimes). Il circumstantial adjunct sta nel Residue e dà informazioni circostanziali, corrispondenti alle circumstances della transitivity (in the last two weeks).', keywords: ['modal', 'Mood block', 'commento', 'circostanziali', 'Residue', 'circumstances'] },
  ],
  cards: [
    { id: 'i7-c1', front: 'Clause as exchange', back: 'Clause as exchange: tenor, metafunzione interpersonal; sistemi mood, modality, appraisal.' },
    { id: 'i7-c2', front: 'Mood block', back: 'Mood block: Subject, Finite, Modal adjuncts. Cuore della clause as exchange.' },
    { id: 'i7-c3', front: 'Residue', back: 'Residue: Predicator, Complement, Circumstantial adjuncts.' },
    { id: 'i7-c4', front: 'Subject in FG', back: 'Subject: l’entità responsabile della validità della clause; funzione interpersonale.' },
    { id: 'i7-c5', front: 'Finite', back: 'Finite: la parte del verbal group che esprime polarity, tense e modality. Si trova con la tag question.' },
    { id: 'i7-c6', front: 'Predicator', back: 'Predicator: il verbal group meno il Finite. A volte è fuso col Finite (I promise).' },
    { id: 'i7-c7', front: 'Complement', back: 'Complement: sempre un nominal group che potrebbe essere Subject ma non lo è.' },
    { id: 'i7-c8', front: 'Modal adjunct', back: 'Modal adjunct: unfortunately, frankly, always, never, maybe; sta nel Mood block.' },
    { id: 'i7-c9', front: 'Circumstantial adjunct', back: 'Circumstantial adjunct: informazione circostanziale nel Residue (in the last two weeks).' },
    { id: 'i7-c10', front: 'Declarative vs interrogative', back: 'Declarative: Subject + Finite. Interrogative: Finite + Subject.' },
    { id: 'i7-c11', front: 'Exclamative', back: 'Exclamative: wh- + Subject + Finite (What a great book Harry Potter is!).' },
  ],
};

export default i7;
