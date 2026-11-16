import type { Chapter } from '../../types';

// Capitoli di teoria di Lingua e Linguistica Inglese 1 (Functional Grammar).

const i1: Chapter = {
  unit: 'i1',
  intro:
    'Prima di analizzare le clauses serve capire da dove guardiamo la lingua. Il corso adotta la Systemic Functional Linguistics: un approccio scientifico, descrittivo e funzionale, che studia la lingua in uso e nel suo contesto.',
  sections: [
    {
      title: 'Che cos’è la linguistica',
      blocks: [
        { t: 'def', term: 'Linguistics', text: '“The **scientific study** of language, or of particular languages” (Oxford Learner’s Dictionary).' },
        { t: 'p', text: 'Nasce tra Ottocento e Novecento, dopo **Ferdinand de Saussure**: le lingue sono sistemi complessi che si possono studiare da molte prospettive. Per questo esistono più scuole e più applicazioni.' },
        { t: 'tree', root: 'Linguistics', children: [
          { label: 'Branches', sub: ['**Cognitive**: come il cervello elabora la lingua', '**Structural**: la struttura, come le parole formano frasi', '**Functional**: uso e funzioni della lingua'] },
          { label: 'Applications', sub: ['**Comparative**: confronto tra due lingue', '**Computational**: traduzione automatica, IA', '**Forensic**: la linguistica in tribunale', '**Historical**: il cambiamento diacronico'] },
        ] },
      ],
    },
    {
      title: 'Systemic Functional Linguistics',
      blocks: [
        { t: 'p', text: 'La SFL si concentra sul **significato contestuale**, la **lingua in uso**. La lingua avviene sempre in un **context**, e il contesto non si può ignorare. Del grande campo della SFL il corso studia la **Functional Grammar**.' },
        { t: 'def', term: 'Context', text: 'Con-text: ciò che va **con il testo**, l’ambiente che lo circonda.' },
        { t: 'table', head: ['Descriptive', 'Prescriptive'], rows: [
          ['Descrive la lingua prodotta davvero', 'Detta regole su cosa si può e non si può dire'],
          ['Basato sulla ricerca empirica', 'Distingue corretto e sbagliato'],
          ['Guarda alle funzioni', 'Guarda più alla forma'],
          ['SFL e Functional Grammar', 'Grammatiche normative'],
        ] },
        { t: 'p', text: 'Martin e Matthiessen: la FG è una grammatica descrittiva, “not a grammar of etiquette or linguistic table manners”.' },
      ],
    },
    {
      title: 'Approccio formale e funzionale',
      blocks: [
        { t: 'table', head: ['', 'Formal', 'Functional'], rows: [
          ['Primary concern', 'Structure', 'Meanings'],
          ['Unit of analysis', 'Sentence', 'Whole text'],
          ['Language concern', 'Syntax', 'Semantics'],
          ['Language', 'Regole per costruire frasi', 'Risorsa per creare significato'],
        ] },
        { t: 'warn', text: 'Negli appunti c’è “(that in FUNCTIONAL GRAMMAR is the sentence)”: la sentence è l’unità della grammatica **formale**. La FG analizza il **testo intero**, scomposto in clauses quando serve.' },
        { t: 'h', text: 'Perché studiarla' },
        { t: 'list', items: ['**Empowering**: aiuta a capire come funziona una lingua.', '**Appliable**: si usa per problemi del mondo reale.'] },
        { t: 'list', items: ['**Discourse analysis**: media, social network, discorso politico, pubblicità.', '**Stylistics**: la lingua della letteratura, arte verbale.', '**Translation studies**.', '**Foreign language teaching and learning**.', '**Register studies**: le differenze tra tipi di testo.'] },
      ],
    },
  ],
  summary: [
    'Linguistics = studio scientifico della lingua; nasce dopo Saussure.',
    'Branches: cognitive, structural, functional. Applications: comparative, computational, forensic, historical.',
    'SFL: lingua in uso, nel contesto; approccio functional e descriptive.',
    'Formal: structure, sentence, syntax. Functional: meanings, whole text, semantics.',
    'FG empowering e appliable: discourse analysis, stylistics, traduzione, didattica, register studies.',
  ],
};

const i2: Chapter = {
  unit: 'i2',
  intro:
    'Nella Functional Grammar il testo non esiste senza contesto. Qui vediamo i due livelli del contesto, le tre variabili della situazione e come ciascuna corrisponde a un modo di guardare la clause: le tre metafunzioni.',
  sections: [
    {
      title: 'Il contesto: una nozione doppia',
      blocks: [
        { t: 'def', term: 'Context of culture', text: 'L’ambiente generale: valori, sistemi, convenzioni, tradizioni e costumi che i parlanti condividono perché fanno parte della stessa **cultura**.' },
        { t: 'def', term: 'Context of situation', text: 'Dentro la cultura, il **qui e ora** della comunicazione: l’**hic et nunc**.' },
        { t: 'flow', title: 'Text-context connection', items: ['Context of culture', 'Context of situation', 'Text: meanings (semantics)', 'Wordings (lexicogrammar)', 'Suoni o simboli grafici (phonology/graphology)'] },
        { t: 'p', text: 'Il **text** è un’istanza di lingua in uso, scritta o **parlata**, di qualunque lunghezza: dalla Bibbia o la saga di Harry Potter a testi brevissimi.' },
        { t: 'example', title: 'Il contesto della nostra lezione', steps: ['Context of culture: ambiente accademico, in Italia, con le sue convenzioni.', 'Si usa l’inglese, una lingua straniera: comunicare è più difficile.', 'In Spagna il rapporto docente-studenti è meno formale: la cultura cambia il modo di usare la lingua.'] },
      ],
    },
    {
      title: 'Field, tenor, mode',
      blocks: [
        { t: 'table', head: ['Variabile', 'Domanda', 'Componenti'], rows: [
          ['Field', 'What is going on?', 'Social activity; subject matter'],
          ['Tenor', 'Who is taking part?', 'Social roles (fissi); discourse roles (flessibili)'],
          ['Mode', 'What is the role of language?', 'Channel; medium; monologue/dialogue, spontaneous/prepared'],
        ] },
        { t: 'p', text: 'I **social roles** sono definiti dalla società e cambiano molto lentamente (docente e studenti). I **discourse roles** riguardano chi parla e chi ascolta: se la docente fa una domanda e una studentessa risponde, i ruoli nel discorso si invertono.' },
        { t: 'p', text: 'Il **channel** può essere fonico o **ibrido**, come una lezione online con microfono e chat.' },
      ],
    },
    {
      title: 'Le tre metafunzioni',
      blocks: [
        { t: 'p', text: 'Ogni variabile corrisponde a una vista della clause. Le tre viste sono **simultanee**: ogni clause esprime nello stesso momento significati ideational, interpersonal e textual.' },
        { t: 'table', head: ['Contesto', 'Vista della clause', 'Metafunzione', 'Sistemi'], rows: [
          ['Field', 'Clause as representation', 'Ideational', 'Transitivity (experiential); clauses in combination (logical)'],
          ['Tenor', 'Clause as exchange', 'Interpersonal', 'Mood, modality, appraisal'],
          ['Mode', 'Clause as message', 'Textual', 'Theme/rheme (structural cohesion); non-structural cohesion'],
        ] },
        { t: 'def', term: 'Metafunctions', text: 'Le funzioni più fondamentali della lingua, parti intrinseche di essa.' },
        { t: 'p', text: 'Mentre parliamo o scriviamo scegliamo continuamente dentro questi **sistemi**, a seconda del significato che vogliamo esprimere.' },
      ],
    },
  ],
  summary: [
    'Context of culture: valori e convenzioni condivisi. Context of situation: il qui e ora.',
    'Text: istanza di lingua in uso, scritta o parlata, di qualunque lunghezza.',
    'Field (what is going on), tenor (who is taking part), mode (role of language).',
    'Social roles fissi, discourse roles flessibili.',
    'Field → representation → ideational; tenor → exchange → interpersonal; mode → message → textual.',
  ],
};

const i3: Chapter = {
  unit: 'i3',
  intro:
    'Prima del significato, un passo sulla forma: come si scompone una clause. La rank scale ordina i costituenti dal più grande al più piccolo, e ci dà i nomi che useremo in tutte le analisi.',
  sections: [
    {
      title: 'Sentence e clause',
      blocks: [
        { t: 'def', term: 'Sentence', text: 'Unità della **scrittura**: dalla maiuscola al punto. In italiano, il **periodo**.' },
        { t: 'def', term: 'Clause', text: 'Unità dell’**analisi grammaticale**. A volte coincide con la sentence, spesso una sentence ne contiene più di una.' },
        { t: 'example', title: 'The Queen’s speech on Coronavirus', steps: ['“While we have faced challenges before, this one is different.”', 'Una sentence, due clauses: “While we have faced challenges before” + “this one is different”.'] },
      ],
    },
    {
      title: 'La rank scale',
      blocks: [
        { t: 'flow', title: 'Dall’alto al basso', items: ['Clauses', 'Groups and phrases', 'Words', 'Morphemes'] },
        { t: 'p', text: 'Il livello dei **gruppi** serve perché più parole **lavorano insieme**: “have faced” sono due parole ma un solo gruppo verbale, che dice qualcosa sul tempo e su chi agisce. E perché il gruppo si può **espandere**: “we” diventa “we, the British people”.' },
        { t: 'warn', text: '**Conflation**: la stessa unità può stare su due livelli. “We” è insieme una parola e un gruppo.' },
      ],
    },
    {
      title: 'I morfemi',
      blocks: [
        { t: 'def', term: 'Morpheme', text: 'La **più piccola** unità di una lingua dotata di significato.' },
        { t: 'table', head: ['Morfema', 'Significato'], rows: [
          ['-ed (faced)', 'Passato'],
          ['-s (nations)', 'Plurale'],
          ['-ful (useful)', 'Forma un aggettivo'],
        ] },
        { t: 'list', items: ['**Free morphemes**: stanno da soli perché hanno significato lessicale (face, use).', '**Bound morphemes**: hanno significato solo attaccati a qualcos’altro (-ed, -s, -ful).'] },
      ],
    },
    {
      title: 'Groups e phrases',
      blocks: [
        { t: 'p', text: 'Il gruppo prende il nome dal suo **costituente principale**. “We have faced challenges before, this one is different. We join with all nations, in a common endeavour.”' },
        { t: 'table', head: ['Tipo', 'Esempi'], rows: [
          ['Nominal group (NG)', 'we, challenges, different'],
          ['Verbal group (VG)', 'have faced, is'],
          ['Adverbial group (AG)', 'before'],
          ['Prepositional phrase (PP)', 'with all nations, in a common endeavour'],
        ] },
        { t: 'p', text: 'La **prepositional phrase** è una preposizione seguita da un nominal group; si chiama phrase perché è più complessa.' },
        { t: 'h', text: 'I complexes' },
        { t: 'p', text: '“If all the world was apple pie / and all the sea was ink / and all the trees were bread and cheese / what would we have to drink?”: quattro clauses formano un **clause complex**. “**bread and cheese**” è un **nominal group complex**, perché i due nomi sono entrambi principali; in “serious challenges” invece il nome principale è solo “challenges”.' },
      ],
    },
  ],
  summary: [
    'Sentence: unità della scrittura. Clause: unità dell’analisi grammaticale.',
    'Rank scale: clauses → groups and phrases → words → morphemes.',
    'Conflation: un’unità su due livelli (“we”).',
    'Morphemes: free (stanno da soli) e bound (-ed, -s, -ful).',
    'NG, VG, AG; PP = preposizione + NG. Clause complex e group complex.',
  ],
};

const i4: Chapter = {
  unit: 'i4',
  intro:
    'Il nominal group è il mattone dei partecipanti. Qui impari a riconoscere ogni funzione attorno alla Thing e a capire quando un pezzo di frase è incastrato dentro un nome: l’embedding.',
  sections: [
    {
      title: 'La Thing e i pre-modifiers',
      blocks: [
        { t: 'p', text: 'In ogni nominal group c’è un nome chiave, l’**head** o **Thing**. Ciò che viene prima sono i **pre-modifiers**, ciò che viene dopo i **post-modifiers**.' },
        { t: 'clause', parts: ['those', 'two', 'splendid', 'old', 'electric', 'trains'], rows: [
          { label: 'Funzioni nel nominal group', cells: ['Deictic', 'Numerative', 'Epithet', 'Epithet', 'Classifier', 'Thing'] },
        ] },
        { t: 'list', items: ['**Deictic**: indica la cosa di cui parliamo (the, a, my, those).', '**Numerative**: quantità o ordine, “How many?”.', '**Epithet**: qualità **soggettiva** (terrible) o **oggettiva** (old, British); di solito un aggettivo.', '**Classifier**: la **classe** della Thing (a movie queen, la regina dello schermo); aggettivo o **nome**.'] },
        { t: 'warn', text: 'Epithet e classifier si confondono facilmente. Trucco: l’epithet accetta **comparativo e superlativo** (a more colourful hat), il classifier no (the sorting hat).' },
      ],
    },
    {
      title: 'Embedding',
      blocks: [
        { t: 'def', term: 'Embedding (Thompson)', text: '“A unit (e.g. a clause, or a group) is expanded by the inclusion of another unit from a **higher or the same rank** in the rank scale.”' },
        { t: 'p', text: 'Si indica con **[ ]** per le prepositional phrases embedded e **[[ ]]** per le clauses embedded.' },
        { t: 'clause', parts: ['Much', '[of continental Europe]', 'is hardening', 'its', 'attitude', '[to Brexit]'], rows: [
          { label: 'Gruppi', cells: ['Nominal group', '<', 'Verbal group', 'Nominal group', '<', '<'] },
          { label: 'Funzioni nei nominal groups', cells: ['Thing', 'Qualifier', '', 'Deictic', 'Thing', 'Qualifier'] },
        ] },
        { t: 'example', title: 'Altri esempi', steps: [ 'A large rose tree stood near the entrance [of the garden].', 'Harry had never believed he would meet a boy [[he hated more than Dudley]].'] },
        { t: 'h', text: 'Il qualifier' },
        { t: 'p', text: 'Dopo la Thing c’è una sola funzione, il **qualifier**: un PP o una clause embedded che dà un’informazione **definitoria** sulla Thing. Non si può spostare senza cambiare il significato.' },
        { t: 'table', head: ['Clause', 'La PP è embedded?', 'Perché'], rows: [
          ['That dog [with the black tail] belongs to my uncle', 'Sì', 'Non si sposta; risponde a “Which dog?”'],
          ['There was a stone in my boot', 'No', 'Si sposta (In my boot there was…) e non qualifica la pietra'],
        ] },
        { t: 'p', text: 'L’embedding è frequente anche nel **parlato**. Dalla Regina: “And those [[who come after us]] will say the Britons [of this generation] were as strong as any.”' },
        { t: 'warn', text: 'Una relativa **tra virgole** è non-defining: **non è embedded**. “It was your typical London garden, which in the winter is dead.”' },
      ],
    },
    {
      title: 'Analisi guidata',
      blocks: [
        { t: 'p', text: 'Testo: “When I first arrived I moved into a house in North London with a bunch of my mates. It was an old, condemned house that the landlord hadn’t made any improvements to in decades. The wind blew straight through the walls and there was fungus growing on the wallpaper and the garden at the back was just a rubbish dump.”' },
        { t: 'list', items: ['a house **[in North London]**: senza la PP non sapremmo dove sta la casa.', 'a bunch **[of my mates]**: qualifica il gruppo.', 'an (Deictic) old, condemned (Epithet) house (Thing) **[[that the landlord hadn’t made any improvements to in decades]]** (Qualifier).', 'fungus **[[growing on the wallpaper]]**: clause non finita, equivale a “fungus that was growing”.', 'the garden **[at the back]**, six feet **[of grass]**, the space **[of a month]**.', 'a (Deictic) rubbish (Classifier) dump (Thing).'] },
      ],
    },
  ],
  summary: [
    'Nominal group: Deictic, Numerative, Epithet, Classifier, Thing, Qualifier.',
    'Epithet = qualità (ammette il comparativo); classifier = classe (aggettivo o nome).',
    'Embedding: unità di rango più alto o uguale dentro un’altra; [ ] PP, [[ ]] clause.',
    'Qualifier: unica funzione dopo la Thing; non si sposta; test “Which…?”.',
    'Relativa tra virgole: non embedded.',
  ],
};

const i5: Chapter = {
  unit: 'i5',
  intro:
    'Con la transitivity guardiamo la clause come rappresentazione dell’esperienza: chi fa cosa, a chi, dove e quando. È il cuore della metafunzione ideational e una delle parti più chieste all’esame.',
  sections: [
    {
      title: 'Il sistema',
      blocks: [
        { t: 'def', term: 'Transitivity (Thompson)', text: '“A set of resources for referring to **entities** in the world and the ways in which those entities **act on or relate to each other**.”' },
        { t: 'table', head: ['Elemento', 'Ruolo', 'Realizzato da'], rows: [
          ['Process', 'Il cuore del sistema', 'Verbal groups'],
          ['Participants', 'Le entità coinvolte', 'Nominal groups'],
          ['Circumstances', 'Why? When? Where? How?', 'PP, adverbial groups, nominal groups; mai verbal groups'],
        ] },
        { t: 'p', text: 'L’esperienza ha molte forme, quindi esistono **sei tipi di processo**, ognuno con i suoi partecipanti. Il tipo dipende dal **verbo** scelto.' },
      ],
    },
    {
      title: 'I sei processi',
      blocks: [
        { t: 'table', head: ['Processo', 'Significato', 'Partecipanti', 'Verbi tipici'], rows: [
          ['Material', 'Azioni fisiche, visibili', 'Actor, Goal', 'make, build, cook, walk'],
          ['Mental', 'Pensieri, sentimenti, percezioni', 'Senser, Phenomenon', 'think, remember, see, hear'],
          ['Relational attributive', 'Qualità generica', 'Carrier, Attribute', 'be, have'],
          ['Relational identifying', 'Identità', 'Identified, Identifier', 'be'],
          ['Verbal', 'Comunicazione', 'Sayer, Receiver', 'say, ask, mutter'],
          ['Behavioural', 'Tra material e mental', 'Behaver', 'cry, sneeze, smile'],
          ['Existential', 'Esistenza', 'Existent', 'there + be'],
        ] },
        { t: 'clause', parts: ['The sun', 'lit up', 'the brass number four', 'on the Dursleys’ front door'], rows: [
          { label: 'Transitivity', cells: ['Actor', 'Material process', 'Goal', 'Circumstance'] },
        ] },
        { t: 'clause', parts: ['Dudley Dursley', 'was', 'Harry’s only cousin'], rows: [
          { label: 'Transitivity', cells: ['Identified', 'Relational process', 'Identifier'] },
        ] },
        { t: 'clause', parts: ['There', 'had been', 'a flying motorcycle', 'in it'], rows: [
          { label: 'Transitivity', cells: ['', 'Existential process', 'Existent', 'Circumstance'] },
        ], note: '“There” non ha nessuna funzione.' },
        { t: 'example', title: 'Esempi da Harry Potter', steps: ['The sun (Actor) lit up (Material) the brass number four (Goal) on the Dursleys’ front door (Circumstance).', 'He (Senser) tried to remember (Mental) the dream (Phenomenon).', 'Dudley Dursley (Carrier) was no longer (Relational) a baby (Attribute).', 'Dudley Dursley (Identified) was (Relational) Harry’s only cousin (Identifier).', '“Get up!” (projected clause), she (Sayer) said (Verbal).', 'There (nessuna funzione) had been (Existential) a flying motorcycle (Existent) in it (Circumstance).'] },
        { t: 'warn', text: 'Attributive o identifying? Prova a **scambiare** i partecipanti: “Harry’s only cousin was Dudley Dursley” funziona (identifying); “A baby was Dudley” no (attributive).' },
      ],
    },
    {
      title: 'Analisi del testo della casa',
      blocks: [
        { t: 'list', items: ['“It was an old, condemned house [[that the landlord…]]”: relational attributive. It = Carrier; an old, condemned house [[…]] = Attribute.', '“The wind blew straight through the walls”: material. The wind = Actor; straight e through the walls = Circumstances (non Goal: il Goal è un nominal group).', '“there was fungus [[growing on the wallpaper]]”: existential. Existent = fungus growing on the wallpaper.', '“the garden at the back was just a rubbish dump”: relational attributive. Carrier = the garden at the back; Attribute = a rubbish dump.', '“which in the winter is dead”: relational attributive; which = Carrier, dead = Attribute, in the winter = Circumstance.', '“in the summer manages somehow to grow about six feet of grass in the space of a month”: material; manages to grow = Process (verbal group complex); six feet of grass = Goal.'] },
        { t: 'warn', text: 'Negli appunti l’Attribute di “the garden at the back was just a rubbish dump” risulta “was just a rubbish dump”: “was” è il processo, l’Attribute è solo “a rubbish dump”.' },
        { t: 'warn', text: 'Negli appunti l’Attribute della prima clause risulta “the landlord hadn’t made any improvements to in decades”. La relativa è solo il **qualifier**: l’Attribute è l’intero nominal group “an old, condemned house [[…]]”.' },
        { t: 'key', items: ['La transitivity descrive la nostra esperienza del mondo: experiential meanings.', 'L’ordine dei partecipanti non cambia il ruolo: “Food is made by them” = Goal, Process, Actor.', 'Una clause embedded non si analizza a parte.'] },
      ],
    },
  ],
  summary: [
    'Transitivity: process (VG), participants (NG), circumstances (mai VG).',
    'Material: Actor, Goal. Mental: Senser, Phenomenon.',
    'Relational: attributive (Carrier, Attribute) o identifying (Identified, Identifier, scambiabili).',
    'Verbal: Sayer, Receiver. Behavioural: Behaver. Existential: Existent, “there” senza funzione.',
    'L’ordine non cambia il ruolo esperienziale.',
  ],
};

const i6: Chapter = {
  unit: 'i6',
  intro:
    'Restiamo nella metafunzione ideational, ma ora guardiamo come le clauses si uniscono. Ogni volta che leghiamo due clauses scegliamo insieme in due sistemi: la taxis e le relazioni logico-semantiche.',
  sections: [
    {
      title: 'Dal clause al clause complex',
      blocks: [
        { t: 'p', text: '“When she opened the door, Professor Luporini saw the students outside.” Ogni clause ha la sua transitivity (material, mental), ma tra i due eventi c’è anche una **relazione logica**, segnata da “when”. La congiunzione non fa parte della transitivity: qui siamo nei **logical meanings**.' },
        { t: 'warn', text: 'Negli appunti si legge che gli Ideational meanings si dividono in “Ideational and Logical”: sono **experiential** e **logical**.' },
        { t: 'tree', root: 'Clauses in combination', children: [
          { label: 'Taxis', sub: ['Hypotaxis', 'Parataxis'] },
          { label: 'Logico-semantic relations', sub: ['Expansion: elaboration, extension, enhancement', 'Projection: ideas, locutions'] },
        ] },
      ],
    },
    {
      title: 'Taxis',
      blocks: [
        { t: 'def', term: 'Taxis', text: 'Lo stato di **dipendenza** delle clauses in un clause complex.' },
        { t: 'list', items: ['**Hypotaxis** (subordinazione): una clause dipende dalla main clause.', '**Parataxis** (coordinazione): clauses indipendenti, nessuna è main.'] },
        { t: 'p', text: 'La scelta dipende soprattutto dal **connettore**. Expansion e projection invece dipendono dalla **relazione logica** tra gli eventi.' },
        { t: 'warn', text: 'In dubbio: prova a **spostare** la clause (con l’ipotassi di solito si può, con la paratassi no) o a **togliere il soggetto**.' },
      ],
    },
    {
      title: 'Expansion',
      blocks: [
        { t: 'table', head: ['', 'Paratactic', 'Hypotactic'], rows: [
          ['Elaboration (=)', 'for example, that is, i.e., namely: chiarisce', 'relativa non-defining, finita o non finita: descrive'],
          ['Extension (+)', 'and, but, or, either, neither', 'whereas, while (avversativo), instead of, rather than, except for'],
          ['Enhancement (×)', 'so, then, yet, still', 'when, while, since, because, as, so that, unless, although'],
        ] },
        { t: 'example', title: 'Esempi', steps: ['Elaboration ipotattica: Harry, still staring at his letter, went back to the kitchen.', 'Extension paratattica: The Dursleys had everything they wanted, but they also had a secret.', 'Extension ipotattica: We were all talking at once, while all the rest were quite silent.', 'Enhancement paratattica: There was nothing else to do, so Alice soon began talking again.', 'Enhancement ipotattica: Although it was daylight, he kept his eyes shut tight.'] },
        { t: 'warn', text: 'La relativa **defining** (“The only thing [[Harry liked about his own appearance]]…”) è embedded e fa da qualifier: non è elaboration. Negli appunti tra i connettori paratattici di enhancement compaiono anche when, why, how: “when” introduce di solito un’enhancement **ipotattica**.' },
      ],
    },
    {
      title: 'Projection',
      blocks: [
        { t: 'list', items: ['I **mental** processes proiettano **ideas**: “I’m glad I’ve seen that done,” thought Alice.', 'I **verbal** processes proiettano **locutions**: “I’m Ron Weasley,” Ron muttered.'] },
        { t: 'table', head: ['', 'Paratactic (quoting)', 'Hypotactic (reporting)'], rows: [
          ['Locution', '“Where shall I begin?” the White Rabbit asked', 'The White Rabbit asked where he should begin'],
          ['Idea', 'John thought to himself: “I’ll run away”', 'John thought he would run away'],
        ] },
      ],
    },
  ],
  summary: [
    'Clauses in combination = logical meanings: taxis + logico-semantic relations.',
    'Hypotaxis: dipendenza. Parataxis: indipendenza. Dipende dal connettore.',
    'Elaboration =, extension +, enhancement ×.',
    'Hypotactic elaboration = relativa non-defining; la defining è embedded.',
    'Projection: mental → ideas, verbal → locutions; quoting = parataxis, reporting = hypotaxis.',
  ],
};

const i7: Chapter = {
  unit: 'i7',
  intro:
    'Cambiamo prospettiva: la clause come scambio tra chi parla e chi ascolta. Variabile tenor, metafunzione interpersonal. Il sistema chiave è il mood, costruito attorno a Subject e Finite.',
  sections: [
    {
      title: 'Mood block e Residue',
      blocks: [
        { t: 'table', head: ['Mood block', 'Residue'], rows: [
          ['Subject', 'Predicator'],
          ['Finite', 'Complement'],
          ['Modal adjuncts', 'Circumstantial adjuncts'],
        ] },
        { t: 'p', text: 'Il **Mood block** è il cuore della clause as exchange: contiene le funzioni interpersonalmente fondamentali, Subject e Finite, e stabilisce il **mood** della clause.' },
      ],
    },
    {
      title: 'Subject e Finite',
      blocks: [
        { t: 'p', text: 'Le definizioni tradizionali di soggetto (chi fa l’azione; l’elemento che concorda in numero e persona col verbo) non coincidono sempre. “Professor Luporini is writing an essay”: soggetto e Actor coincidono. “An essay is written by Professor Luporini”: il Subject è **an essay**, l’Actor resta la professoressa.' },
        { t: 'def', term: 'Subject', text: 'L’entità che il parlante rende **responsabile della validità** della clause: quella rispetto a cui si può dire “sì, sono d’accordo” o “no”. È una funzione **interpersonale**.' },
        { t: 'def', term: 'Finite', text: 'La parte del verbal group che esprime **polarity**, **tense** e **modality**. Il resto è il **Predicator**.' },
        { t: 'example', title: 'Trovare il Finite', steps: ['The work ahead of us will be hard.', 'Aggiungi la tag question: …, won’t it?', 'Will = Finite; be = Predicator.', 'I promise you this: Finite e Predicator sono fusi in “promise”.'] },
      ],
    },
    {
      title: 'Adjuncts e Complement',
      blocks: [
        { t: 'list', items: ['**Modal adjuncts** (Mood block): commento del parlante sulla clause (unfortunately, frankly, to be honest, surprisingly) o significati temporali e modali (always, never, maybe, sometimes).', '**Complement** (Residue): **sempre un nominal group** che potrebbe diventare Subject ma non lo è.', '**Circumstantial adjuncts** (Residue): informazioni circostanziali, corrispondono alle circumstances della transitivity.'] },
        { t: 'p', text: 'La stessa clause si analizza con due viste: la transitivity (field) e il mood (tenor).' },
        { t: 'clause', parts: ['The work ahead of us', 'will', 'be', 'hard'], rows: [
          { label: 'Transitivity', cells: ['Carrier', 'Relational process', '<', 'Attribute'] },
          { label: 'Mood', cells: ['Subject', 'Finite', 'Predicator', 'Complement'] },
          { label: 'Mood block e Residue', cells: ['Mood block', '<', 'Residue', '<'] },
        ] },
        { t: 'clause', parts: ['Perhaps', 'we', 'have', 'learned', 'something', 'in the last two weeks'], rows: [
          { label: 'Transitivity', cells: ['', 'Senser', 'Mental process', '<', 'Phenomenon', 'Circumstance'] },
          { label: 'Mood', cells: ['Modal adjunct', 'Subject', 'Finite', 'Predicator', 'Complement', 'Circumstantial adjunct'] },
          { label: 'Mood block e Residue', cells: ['Mood block', '<', '<', 'Residue', '<', '<'] },
        ] },
      ],
    },
    {
      title: 'I tipi di mood',
      blocks: [
        { t: 'table', head: ['Mood', 'Funzione tipica', 'Ordine', 'Esempio'], rows: [
          ['Declarative', 'Dare informazioni', 'Subject + Finite', 'I will keep the faith [[that you have placed in me]]'],
          ['Interrogative', 'Chiedere informazioni', 'Finite + Subject', 'Does the Lamestream Media call…?'],
          ['Exclamative', 'Esclamare', 'wh- + Subject + Finite', 'What a great book Harry Potter is!'],
        ] },
        { t: 'example', title: 'Attività: The hidden risks of the air we breathe', steps: ['“Though we can’t avoid it”: Finite = can’t.', '“Do you hold your breath”: indicative interrogative (Finite + Subject).', '“Surprisingly, drivers aren’t safer…”: Surprisingly = Modal adjunct, quindi non è nel Residue; safer = Complement.', '“Indoor pollution levels can sometimes be worse…”: Mood block = Indoor pollution levels can sometimes.', 'Il Complement è sempre un nominal group.', '“and researchers believe”: c’è conflation tra Finite e Predicator.'], result: 'Analizzando gli interpersonal meanings consideriamo la clause come un exchange.' },
      ],
    },
  ],
  summary: [
    'Clause as exchange: tenor, interpersonal; mood, modality, appraisal.',
    'Mood block: Subject, Finite, Modal adjuncts. Residue: Predicator, Complement, Circumstantial adjuncts.',
    'Subject = responsabile della validità della clause.',
    'Finite = polarity, tense, modality; si trova con la tag question.',
    'Declarative S+F; interrogative F+S; exclamative wh- + S + F.',
  ],
};

const i8: Chapter = {
  unit: 'i8',
  intro:
    'Ultima vista: la clause come messaggio. Variabile mode, metafunzione textual. Theme e Rheme organizzano l’informazione e danno continuità al testo.',
  sections: [
    {
      title: 'Theme e Rheme',
      blocks: [
        { t: 'def', term: 'Cohesion', text: 'L’atto o il fatto di formare un **tutto unito**.' },
        { t: 'p', text: 'La **structural cohesion** lavora dentro i confini della clause con **Theme** e **Rheme**.' },
        { t: 'def', term: 'Theme', text: 'Il punto di partenza, l’argomento del messaggio. In inglese viene **sempre all’inizio** della clause.' },
        { t: 'def', term: 'Rheme', text: 'Ciò che resta dopo il Theme: l’informazione nuova.' },
        { t: 'p', text: 'Il theme si estende fino al **primo elemento con una funzione nella transitivity**: è il **topical theme (TT)**.' },
      ],
    },
    {
      title: 'Marked e unmarked',
      blocks: [
        { t: 'clause', parts: ['J.K. Rowling', 'wrote', 'the first Harry Potter book', 'in 1997'], rows: [
          { label: 'Transitivity', cells: ['Actor', 'Material process', 'Goal', 'Circumstance'] },
          { label: 'Mood', cells: ['Subject', 'Finite + Predicator', 'Complement', 'Circumstantial adjunct'] },
          { label: 'Theme e Rheme', cells: ['Topical theme, unmarked', 'Rheme', '<', '<'] },
        ] },
        { t: 'clause', parts: ['In 1997', 'J.K. Rowling', 'wrote', 'the first Harry Potter book'], rows: [
          { label: 'Transitivity', cells: ['Circumstance', 'Actor', 'Material process', 'Goal'] },
          { label: 'Theme e Rheme', cells: ['Topical theme, marked', 'Rheme', '<', '<'] },
        ] },
        { t: 'p', text: 'Nelle dichiarative il TT è **unmarked** (tipico, naturale) quando coincide con il **Subject**, **marked** quando non coincide.' },
      ],
    },
    {
      title: 'Il theme negli altri mood',
      blocks: [
        { t: 'table', head: ['Tipo di clause', 'Theme', 'Esempio'], rows: [
          ['Yes/no interrogative', 'Full theme = Finite + participant', 'Did J.K. Rowling | write the first HP book?'],
          ['Wh- interrogative', 'TT = elemento wh-', 'When | did J.K. Rowling write…?'],
          ['Exclamative', 'TT = wh- + focus', 'What a great book | Harry Potter is!'],
          ['Imperativa positiva', 'TT = processo', 'Keep | the faith!'],
          ['Imperativa negativa', 'Full theme = Don’t + processo', 'Don’t lose | hope!'],
        ] },
      ],
    },
    {
      title: 'Tipi di theme',
      blocks: [
        { t: 'list', items: ['**Textual**: congiunzioni (because, until, while), conjunctive adjuncts (moreover, in other words, on the other hand), continuatives (well, so, yes, no).', '**Interpersonal**: il Finite nelle yes/no interrogative, modal adjuncts (honestly). Nelle wh- interrogative l’elemento wh- è insieme topical e interpersonal.', '**Topical**: il primo elemento esperienziale; chiude il theme.'] },
        { t: 'clause', parts: ['Well, but in any case,', 'honestly,', 'wouldn’t', 'the best idea', 'be a party?'], rows: [
          { label: 'Theme e Rheme', cells: ['Textual theme', 'Interpersonal theme', '<', 'Topical theme', 'Rheme'] },
        ] },
      ],
    },
    {
      title: 'Special thematic structures',
      blocks: [
        { t: 'p', text: 'Il parlante può manipolare la struttura del messaggio per scegliere un punto di partenza particolare.' },
        { t: 'table', head: ['Struttura', 'Come funziona', 'Esempio'], rows: [
          ['Thematic equative', 'Due elementi uniti da un relational identifying', 'What you see is what you get'],
          ['Predicated theme', 'It + be + elemento enfatizzato', 'It was his teacher who persuaded him to continue'],
          ['Thematized comment', 'Opinione o valutazione del parlante', 'It may be that you’re not luminous'],
        ] },
      ],
    },
  ],
  summary: [
    'Theme: punto di partenza, sempre all’inizio. Rheme: il resto.',
    'Topical theme: primo elemento della transitivity; unmarked se è il Subject.',
    'Yes/no: Finite + participant; wh-: elemento wh-; imperativa: processo.',
    'Textual (congiunzioni, continuatives), interpersonal (Finite, modal adjuncts), topical.',
    'Thematic equative, predicated theme, thematized comment.',
  ],
};

export default [i1, i2, i3, i4, i5, i6, i7, i8];
