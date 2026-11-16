import type { Unit } from '../../types';

const i5: Unit = {
  id: 'i5',
  n: 5,
  title: 'Transitivity',
  subtitle: 'Processi, partecipanti, circostanze: la clause come rappresentazione',
  color: '#EF4444',
  colorDark: '#B91C1C',
  lessons: [
    {
      id: 'i5l1',
      title: 'Il sistema e i processi materiali',
      icon: '🔨',
      theory: [
        {
          title: 'Il transitivity system',
          points: [
            'Thompson: “Transitivity includes a set of resources for referring to **entities** in the world and the ways in which those entities **act on or relate to each other**.”',
            'Esprime gli **experiential meanings** (metafunzione ideational, field).',
            '**Process**: il cuore del sistema, realizzato da **verbal groups**.',
            '**Participants**: le entità coinvolte, realizzate da **nominal groups**.',
            '**Circumstances**: informazioni in più (why, when, where, how), realizzate da PP, adverbial groups, a volte nominal groups; **mai da verbal groups**.',
            'Sei tipi di processo: **material, mental, relational, verbal, behavioural, existential**.',
          ],
        },
        {
          title: 'Material process',
          points: [
            'Processi **fisici**, visibili: make, create, build, paint, cook, walk, raise.',
            '**Actor**: chi fa il processo; animato o inanimato, umano o no.',
            '**Goal** (spesso): l’entità che **subisce** il processo.',
          ],
          example: 'The sun (Actor) lit up (Material) the brass number four (Goal) on the Dursleys’ front door (Circumstance).',
        },
      ],
      exercises: [
        { id: 'i5-1-1', type: 'match', topic: 'Transitivity', q: 'Da cosa è realizzato tipicamente?', pairs: [['Process', 'Verbal group'], ['Participant', 'Nominal group'], ['Circumstance', 'PP o adverbial group']], explain: 'Le circostanze non sono mai realizzate da verbal groups.' },
        { id: 'i5-1-2', type: 'mc', topic: 'Transitivity', q: 'Qual è il cuore del transitivity system?', options: ['Il process', 'Il participant', 'La circumstance', 'Il subject'], answer: 0, explain: 'Il processo è la funzione più importante.' },
        { id: 'i5-1-3', type: 'match', topic: 'Material', q: '“The sun lit up the brass number four on the Dursleys’ front door”', pairs: [['The sun', 'Actor'], ['lit up', 'Material process'], ['the brass number four', 'Goal'], ['on the Dursleys’ front door', 'Circumstance']], explain: 'Il sole agisce, il numero subisce il processo.' },
        { id: 'i5-1-4', type: 'mc', topic: 'Material', scenario: '“He rolled onto his back”', q: 'Che funzione ha “onto his back”?', options: ['Circumstance', 'Goal', 'Actor', 'Phenomenon'], answer: 0, explain: 'Il goal è un nominal group; qui c’è una PP che dice dove.' },
        { id: 'i5-1-5', type: 'tf', topic: 'Material', q: 'L’Actor di un material process deve essere un essere umano.', answer: false, explain: 'Può essere animato o inanimato: “The sun rose”.' },
        { id: 'i5-1-6', type: 'tf', topic: 'Transitivity', q: 'Una circumstance può essere realizzata da un verbal group.', answer: false, explain: 'PP, adverbial groups o nominal groups, mai verbal groups.' },
        { id: 'i5-1-7', type: 'mc', topic: 'Transitivity', scenario: '“Food is made by them”', q: 'Chi è l’Actor?', options: ['them', 'Food', 'is made', 'Nessuno'], answer: 0, explain: 'L’ordine non cambia il ruolo esperienziale: “Food” è sempre il Goal.' },
        { id: 'i5-1-8', type: 'mc', topic: 'Transitivity', q: 'Che significati esprime la transitivity?', options: ['Experiential meanings', 'Logical meanings', 'Interpersonal meanings', 'Textual meanings'], answer: 0, explain: 'Metafunzione ideational, clause as representation.' },
        { id: 'i5-1-9', type: 'mc', topic: 'Material', q: 'Quale verbo realizza tipicamente un material process?', options: ['build', 'remember', 'say', 'be'], answer: 0, explain: 'Remember è mental, say è verbal, be è relational.' },
      ],
    },
    {
      id: 'i5l2',
      title: 'Mental e relational',
      icon: '💭',
      theory: [
        {
          title: 'Mental process',
          points: [
            'Pensieri, sentimenti, desideri, percezioni: avviene nella **mente**, non si vede.',
            '**Senser**: chi pensa, sente, vede, ode.',
            '**Phenomenon** (spesso): ciò che viene percepito o pensato.',
          ],
          example: 'He (Senser) tried to remember (Mental) the dream (Phenomenon). Harry (Senser) heard (Mental) her [walking toward the kitchen] (Phenomenon).',
        },
        {
          title: 'Relational process',
          points: [
            'Stati di **essere** o **avere**: be, have.',
            '**Attributive**: assegna una qualità generica. Partecipanti: **Carrier** + **Attribute**.',
            '**Identifying**: assegna un’identità. Partecipanti: **Identified** + **Identifier**.',
          ],
          example: 'Dudley Dursley (Carrier) was no longer (Relational) a baby (Attribute). Dudley Dursley (Identified) was (Relational) Harry’s only cousin (Identifier).',
          tip: 'Trucco: nell’identifying puoi scambiare i due partecipanti (Harry’s only cousin was Dudley Dursley); nell’attributive no.',
        },
      ],
      exercises: [
        { id: 'i5-2-1', type: 'match', topic: 'Mental', q: '“He tried to remember the dream”', pairs: [['He', 'Senser'], ['tried to remember', 'Mental process'], ['the dream', 'Phenomenon']], explain: 'Ricordare avviene nella mente.' },
        { id: 'i5-2-2', type: 'mc', topic: 'Mental', scenario: '“Harry heard her walking toward the kitchen”', q: 'Cos’è “her walking toward the kitchen”?', options: ['Phenomenon', 'Goal', 'Circumstance', 'Attribute'], answer: 0, explain: 'È ciò che Harry percepisce (contiene una clause embedded).' },
        { id: 'i5-2-3', type: 'match', topic: 'Relational', q: 'Partecipanti dei processi relazionali', pairs: [['Attributive', 'Carrier e Attribute'], ['Identifying', 'Identified e Identifier']], explain: 'Attribuire una qualità o un’identità.' },
        { id: 'i5-2-4', type: 'mc', topic: 'Relational', scenario: '“Dudley Dursley was no longer a baby”', q: 'Che processo è?', options: ['Relational attributive', 'Relational identifying', 'Existential', 'Material'], answer: 0, explain: '“a baby” è una qualità generica: Carrier + Attribute.' },
        { id: 'i5-2-5', type: 'mc', topic: 'Relational', scenario: '“Dudley Dursley was Harry’s only cousin”', q: 'Che processo è?', options: ['Relational identifying', 'Relational attributive', 'Mental', 'Verbal'], answer: 0, explain: 'Si può invertire: Harry’s only cousin was Dudley Dursley.' },
        { id: 'i5-2-6', type: 'mc', topic: 'Relational', scenario: '“He had a funny feeling”', q: 'Che ruolo ha “He”?', options: ['Carrier', 'Senser', 'Actor', 'Identified'], answer: 0, explain: 'Have relazionale attributivo: Carrier + Attribute.' },
        { id: 'i5-2-7', type: 'mc', topic: 'Relational', q: 'Come distingui un relational identifying da un attributive?', options: ['Nell’identifying puoi scambiare i due partecipanti', 'Nell’identifying c’è sempre “have”', 'L’attributive ha un solo partecipante', 'L’identifying non ha verbo'], answer: 0, explain: 'Nell’attributive lo scambio non funziona.' },
        { id: 'i5-2-8', type: 'tf', topic: 'Mental', q: 'Il Phenomenon è nei mental processes ciò che il Goal è nei material processes.', answer: true, explain: 'È l’entità percepita, pensata o sentita.' },
        { id: 'i5-2-9', type: 'match', topic: 'Processi', q: 'Che processo è?', pairs: [['She cooked dinner', 'Material'], ['She loved the song', 'Mental'], ['She was tired', 'Relational'], ['She saw the lake', 'Mental']], explain: 'Vedere è una percezione: mental.' },
      ],
    },
    {
      id: 'i5l3',
      title: 'Verbal, behavioural, existential',
      icon: '🗣️',
      theory: [
        {
          title: 'Gli altri tre processi',
          points: [
            '**Verbal**: processi di **comunicazione**, ciò che si dice. Partecipanti: **Sayer** (umano o simile) e **Receiver** (il destinatario). Ciò che viene detto tra virgolette è una **projected clause**.',
            '**Behavioural**: a metà tra **material e mental**; comportamenti fisiologici e psicologici (cry, sneeze, smile, grumble). Di solito un solo partecipante: il **Behaver**.',
            '**Existential**: esprime l’**esistenza**, con **there + be**. Un solo partecipante: l’**Existent**. “There” **non ha funzione**.',
          ],
          example: '“Get up!” (projected clause), she (Sayer) said (Verbal). There had been (Existential) a flying motorcycle (Existent) in it (Circumstance).',
        },
        {
          title: 'Da ricordare',
          points: [
            'La transitivity descrive la nostra **esperienza** del mondo: con la lingua diamo senso all’esperienza.',
            'L’**ordine** dei partecipanti non cambia il loro ruolo: “They make food” (Actor, Process, Goal) e “Food is made by them” (Goal, Process, Actor).',
            'Una embedded clause non si analizza a parte: “fungus growing on the wallpaper” è tutto l’Existent.',
          ],
        },
      ],
      exercises: [
        { id: 'i5-3-1', type: 'match', topic: 'Processi', q: 'Abbina il processo al suo partecipante principale', pairs: [['Verbal', 'Sayer'], ['Behavioural', 'Behaver'], ['Existential', 'Existent'], ['Mental', 'Senser'], ['Material', 'Actor']], explain: 'Ogni processo ha i suoi participant roles.' },
        { id: 'i5-3-2', type: 'mc', topic: 'Existential', scenario: '“There had been a flying motorcycle in it”', q: 'Che funzione ha “There”?', options: ['Nessuna funzione', 'Existent', 'Circumstance', 'Actor'], answer: 0, explain: 'L’Existent è “a flying motorcycle”.' },
        { id: 'i5-3-3', type: 'match', topic: 'Verbal', q: '“Are you ready to jump?”, she demanded.', pairs: [['“Are you ready to jump?”', 'Projected clause'], ['she', 'Sayer'], ['demanded', 'Verbal process']], explain: 'Ciò che si dice è proiettato dal processo verbale.' },
        { id: 'i5-3-4', type: 'mc', topic: 'Behavioural', q: 'Quale verbo realizza tipicamente un behavioural process?', options: ['sneeze', 'build', 'say', 'have'], answer: 0, explain: 'Cry, sneeze, smile, grumble.' },
        { id: 'i5-3-5', type: 'tf', topic: 'Behavioural', q: 'Il behavioural process sta a metà tra material e mental.', answer: true, explain: 'Riguarda comportamenti fisiologici e psicologici.' },
        { id: 'i5-3-6', type: 'mc', topic: 'Analisi', scenario: '“The wind blew straight through the walls”', q: 'Che processo è?', options: ['Material', 'Behavioural', 'Existential', 'Relational'], answer: 0, explain: 'The wind = Actor; straight e through the walls = Circumstances.' },
        { id: 'i5-3-7', type: 'mc', topic: 'Analisi', scenario: '“and there was fungus growing on the wallpaper”', q: 'Qual è l’Existent?', options: ['fungus growing on the wallpaper', 'fungus', 'there', 'on the wallpaper'], answer: 0, explain: 'La clause embedded fa parte dell’Existent.' },
        { id: 'i5-3-8', type: 'mc', topic: 'Analisi', scenario: '“the garden at the back was just a rubbish dump”', q: 'Che processo è?', options: ['Relational attributive', 'Relational identifying', 'Existential', 'Material'], answer: 0, explain: 'Carrier: the garden at the back; Attribute: a rubbish dump. “just” non fa parte dell’Attribute.', profNote: 'Negli appunti l’Attribute è “was just a rubbish dump”: “was” è il processo relazionale, l’Attribute è “a rubbish dump”.' },
        { id: 'i5-3-9', type: 'mc', topic: 'Analisi', scenario: '“It was an old, condemned house that the landlord hadn’t made any improvements to”', q: 'Qual è l’Attribute?', options: ['an old, condemned house that the landlord hadn’t made any improvements to', 'the landlord', 'It', 'any improvements'], answer: 0, explain: 'Tutto il nominal group, con la relativa embedded, è l’Attribute; “It” è il Carrier.', profNote: 'Negli appunti l’Attribute risulta “the landlord hadn’t made any improvements to in decades”: in realtà la relativa è solo il qualifier dentro l’Attribute, che è l’intero nominal group “an old, condemned house [[…]]”.' },
        { id: 'i5-3-10', type: 'tf', topic: 'Transitivity', q: 'Passando da attivo a passivo, l’Actor diventa Goal.', answer: false, explain: 'L’ordine non cambia il ruolo esperienziale.' },
        { id: 'i5-3-11', type: 'match', topic: 'Processi', q: 'Che processo è?', pairs: [['There are many pollutants', 'Existential'], ['“I’m Ron Weasley,” Ron muttered', 'Verbal'], ['The baby cried', 'Behavioural'], ['Researchers believe', 'Mental']], explain: 'Credere è un processo mentale.' },
      ],
    },
  ],
  open: [
    { id: 'i5-o1', q: 'Cos’è il transitivity system e da cosa è composto?', answer: 'Per Thompson è un insieme di risorse per riferirsi alle entità del mondo e al modo in cui agiscono o si relazionano. Esprime gli experiential meanings della metafunzione ideational. Si compone di un process (cuore, realizzato da verbal groups), uno o più participants (nominal groups) e spesso circumstances (why, when, where, realizzate da PP, adverbial e nominal groups, mai da verbal groups).', keywords: ['Thompson', 'process', 'participants', 'circumstances', 'verbal group', 'nominal group', 'experiential'] },
    { id: 'i5-o2', q: 'Elenca i sei tipi di processo con i loro partecipanti.', answer: 'Material (fisico): Actor e Goal. Mental (pensieri, sentimenti, percezioni): Senser e Phenomenon. Relational (essere, avere): attributive con Carrier e Attribute, identifying con Identified e Identifier. Verbal (comunicazione): Sayer e Receiver. Behavioural (tra material e mental, cry, sneeze): Behaver. Existential (there + be): Existent.', keywords: ['material', 'mental', 'relational', 'verbal', 'behavioural', 'existential', 'Actor', 'Senser'] },
    { id: 'i5-o3', q: 'Distingui relational attributive e identifying.', answer: 'L’attributive assegna una qualità generica: Carrier + Attribute (Dudley Dursley was no longer a baby; He had a funny feeling). L’identifying assegna un’identità: Identified + Identifier (Dudley Dursley was Harry’s only cousin). Trucco: nell’identifying i due partecipanti si possono scambiare, nell’attributive no.', keywords: ['attributive', 'identifying', 'Carrier', 'Attribute', 'Identified', 'Identifier', 'scambiare'] },
    { id: 'i5-o4', q: 'Analizza “The sun lit up the brass number four on the Dursleys’ front door” e spiega perché l’ordine non conta.', answer: 'Material process “lit up”; Actor “the sun”; Goal “the brass number four”; Circumstance “on the Dursleys’ front door”. L’ordine dei partecipanti non cambia il loro ruolo esperienziale: in “The brass number four was lit up by the sun” il sole resta Actor e il numero Goal.', keywords: ['material', 'Actor', 'Goal', 'Circumstance', 'ordine', 'ruolo'] },
    { id: 'i5-o5', q: 'Verbal ed existential process: caratteristiche ed esempi.', answer: 'Il verbal process è un processo di comunicazione: Sayer (umano o simile) e Receiver; ciò che viene detto è una projected clause (“Get up!”, she said). L’existential esprime l’esistenza con there + be e ha un solo partecipante, l’Existent; “there” non ha funzione (There had been a flying motorcycle in it).', keywords: ['verbal', 'Sayer', 'Receiver', 'projected', 'existential', 'there', 'Existent'] },
  ],
  cards: [
    { id: 'i5-c1', front: 'Transitivity (Thompson)', back: 'Transitivity: risorse per riferirsi a entità del mondo e a come agiscono o si relazionano.' },
    { id: 'i5-c2', front: 'Process, participants, circumstances', back: 'Process: verbal group. Participants: nominal groups. Circumstances: PP, adverbial e nominal groups, mai verbal groups.' },
    { id: 'i5-c3', front: 'Material process', back: 'Material: processo fisico. Actor (chi fa) e Goal (chi subisce).' },
    { id: 'i5-c4', front: 'Mental process', back: 'Mental: pensieri, sentimenti, percezioni. Senser e Phenomenon.' },
    { id: 'i5-c5', front: 'Relational attributive', back: 'Relational attributive: qualità generica. Carrier + Attribute.' },
    { id: 'i5-c6', front: 'Relational identifying', back: 'Relational identifying: identità. Identified + Identifier; i partecipanti si possono scambiare.' },
    { id: 'i5-c7', front: 'Verbal process', back: 'Verbal: comunicazione. Sayer e Receiver; ciò che si dice è una projected clause.' },
    { id: 'i5-c8', front: 'Behavioural process', back: 'Behavioural: tra material e mental (cry, sneeze, smile). Un partecipante: Behaver.' },
    { id: 'i5-c9', front: 'Existential process', back: 'Existential: there + be. Un partecipante, l’Existent; “there” non ha funzione.' },
    { id: 'i5-c10', front: 'Ordine dei partecipanti e ruolo', back: 'L’ordine non cambia il ruolo esperienziale: in “Food is made by them” them resta Actor.' },
    { id: 'i5-c11', front: 'Goal e circumstance', back: 'Il Goal è un nominal group; una PP come “through the walls” è una circumstance.' },
  ],
};

export default i5;
