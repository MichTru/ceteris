import type { Unit } from '../../types';

const i1: Unit = {
  id: 'i1',
  n: 1,
  title: 'Linguistics e Functional Grammar',
  subtitle: 'Cos’è la linguistica, SFL, descrittivo e prescrittivo, formale e funzionale',
  color: '#7C3AED',
  colorDark: '#5B21B6',
  lessons: [
    {
      id: 'i1l1',
      title: 'Che cos’è la linguistica',
      icon: '🔬',
      theory: [
        {
          title: 'Linguistics',
          points: [
            '**Linguistics** = “the scientific study of language, or of particular languages” (Oxford Learner’s Dictionary): è una **scienza**, un approccio scientifico alla lingua.',
            'Nasce e si sviluppa tra **Ottocento e Novecento**, dopo il lavoro di **Ferdinand de Saussure**: le lingue sono sistemi complessi, studiabili da molte prospettive.',
          ],
        },
        {
          title: 'Branches: le scuole',
          points: [
            '**Cognitive** linguistics: come la lingua viene elaborata e concettualizzata dal **cervello**.',
            '**Structural** linguistics: la **struttura** finale, per esempio come le parole si combinano in frasi.',
            '**Functional** linguistics: l’**uso**, la **funzione** della lingua.',
          ],
        },
        {
          title: 'Applications: la linguistica applicata',
          points: [
            'La linguistica non è per forza astratta: si può **applicare** a problemi reali.',
            '**Comparative**: confronta due lingue, somiglianze e differenze.',
            '**Computational**: software e computer al servizio della linguistica (traduzione automatica, intelligenza artificiale).',
            '**Forensic**: la linguistica nei **tribunali**.',
            '**Historical**: come la lingua cambia **diacronicamente**, nel tempo.',
          ],
        },
      ],
      exercises: [
        { id: 'i1-1-1', type: 'mc', topic: 'Linguistics', q: 'Come definisce la linguistica l’Oxford Learner’s Dictionary?', options: ['The scientific study of language, or of particular languages', 'The art of speaking and writing correctly', 'The study of literature written in a language', 'The teaching of foreign languages'], answer: 0, explain: 'La linguistica è una scienza: un approccio scientifico alla lingua.' },
        { id: 'i1-1-2', type: 'mc', topic: 'Linguistics', q: 'Dopo il lavoro di quale studioso nasce la linguistica moderna?', options: ['Ferdinand de Saussure', 'Michael Halliday', 'Noam Chomsky', 'Geoff Thompson'], answer: 0, explain: 'Tra Ottocento e Novecento, dopo Saussure, si capisce che le lingue sono sistemi complessi.' },
        { id: 'i1-1-3', type: 'match', topic: 'Branches', q: 'Abbina la scuola al suo oggetto', pairs: [['Cognitive', 'Come il cervello elabora la lingua'], ['Structural', 'Come le parole si combinano in frasi'], ['Functional', 'L’uso e la funzione della lingua']], explain: 'Sono tre branches della linguistica.' },
        { id: 'i1-1-4', type: 'match', topic: 'Applications', q: 'Abbina l’applicazione alla sua descrizione', pairs: [['Comparative', 'Confronta due lingue'], ['Computational', 'Traduzione automatica e IA'], ['Forensic', 'Linguistica nei tribunali'], ['Historical', 'Il cambiamento nel tempo']], explain: 'La linguistica si può applicare a problemi reali.' },
        { id: 'i1-1-5', type: 'mc', topic: 'Applications', scenario: 'In un processo si deve capire se un messaggio minatorio è stato scritto dall’imputato, confrontandolo con i suoi testi.', q: 'Di quale linguistica si tratta?', options: ['Forensic linguistics', 'Historical linguistics', 'Cognitive linguistics', 'Comparative linguistics'], answer: 0, explain: 'L’uso della linguistica in tribunale è la forensic linguistics.' },
        { id: 'i1-1-6', type: 'tf', topic: 'Applications', q: 'Historical linguistics studia come una lingua cambia diacronicamente.', answer: true, explain: 'Diacronicamente = nel corso del tempo.' },
        { id: 'i1-1-7', type: 'tf', topic: 'Linguistics', q: 'La linguistica è per definizione una materia astratta, senza applicazioni pratiche.', answer: false, explain: 'Ha il potenziale per essere applicata a problemi reali.' },
        { id: 'i1-1-8', type: 'mc', topic: 'Applications', q: 'Un software di traduzione automatica appartiene a quale area?', options: ['Computational linguistics', 'Structural linguistics', 'Forensic linguistics', 'Historical linguistics'], answer: 0, explain: 'Uso del computer al servizio della linguistica.' },
      ],
    },
    {
      id: 'i1l2',
      title: 'Systemic Functional Linguistics',
      icon: '🧭',
      theory: [
        {
          title: 'SFL e Functional Grammar',
          points: [
            'Nel corso si studia la **Systemic Functional Linguistics (SFL)** e in particolare la **Functional Grammar (FG)**.',
            'Il focus è sul **significato contestuale**, la **lingua in uso**: la lingua avviene sempre in un **context** e non si può studiare senza.',
            '**Context**: con-text, ciò che sta **con il testo**, l’ambiente che lo circonda.',
            'È un approccio **funzionale** (le funzioni della lingua nel contesto) e **descrittivo** (lo scopo è descrivere la lingua).',
          ],
        },
        {
          title: 'Descriptive e prescriptive',
          points: [
            '**Descriptive**: descrive la produzione linguistica reale, su base **empirica**.',
            '**Prescriptive**: si concentra sulle **regole**, su giusto e sbagliato; guarda più alla **forma** che alle funzioni.',
            'Martin e Matthiessen: la FG non è “a grammar of etiquette or linguistic table manners”.',
            'SFL e FG stanno dalla parte **descriptive**.',
          ],
        },
      ],
      exercises: [
        { id: 'i1-2-1', type: 'mc', topic: 'SFL', q: 'Su cosa si concentra la Systemic Functional Linguistics?', options: ['Sul significato contestuale, la lingua in uso', 'Sulle regole per evitare gli errori grammaticali', 'Su come il cervello elabora la lingua', 'Sull’evoluzione storica delle parole'], answer: 0, explain: 'Per la SFL la lingua avviene sempre in un contesto.' },
        { id: 'i1-2-2', type: 'fill', topic: 'Context', text: 'Context viene da con-___: ciò che va con il ___, l’ambiente che lo circonda.', answers: ['text', 'testo'], extra: ['form', 'parlante'], explain: 'Nella SFL il contesto va sempre preso in considerazione.' },
        { id: 'i1-2-3', type: 'match', topic: 'Descriptive', q: 'Descriptive o prescriptive?', pairs: [['Descrive la lingua reale su base empirica', 'Descriptive'], ['Distingue giusto e sbagliato', 'Prescriptive'], ['Guarda più alla forma', 'Prescriptive'], ['È l’approccio della Functional Grammar', 'Descriptive']], explain: 'La FG non è una grammatica del galateo linguistico.' },
        { id: 'i1-2-4', type: 'tf', topic: 'Descriptive', q: 'La Functional Grammar è una grammatica prescrittiva che corregge gli errori.', answer: false, explain: 'È descrittiva: “not a grammar of etiquette or linguistic table manners” (Martin e Matthiessen).' },
        { id: 'i1-2-5', type: 'mc', topic: 'SFL', q: 'Quali due aggettivi descrivono l’approccio di SFL e FG?', options: ['Functional e descriptive', 'Formal e prescriptive', 'Cognitive e structural', 'Historical e comparative'], answer: 0, explain: 'Funzionale (le funzioni nel contesto) e descrittivo (descrivere la lingua).' },
        { id: 'i1-2-6', type: 'mc', topic: 'Descriptive', q: 'Da chi è la definizione “not a grammar of etiquette or linguistic table manners”?', options: ['Martin e Matthiessen', 'Ferdinand de Saussure', 'Oxford Learner’s Dictionary', 'Professoressa Luporini'], answer: 0, explain: 'Descrive la FG come grammatica descrittiva basata sulla ricerca empirica.' },
        { id: 'i1-2-7', type: 'tf', topic: 'SFL', q: 'Per la SFL si può analizzare la lingua ignorando il contesto in cui è prodotta.', answer: false, explain: 'Il contesto non si può ignorare: va sempre tenuto in conto.' },
      ],
    },
    {
      id: 'i1l3',
      title: 'Formal o functional',
      icon: '⚖️',
      theory: [
        {
          title: 'Le differenze',
          points: [
            '**Primary concern**: formale = la **struttura**; funzionale = il **significato** (meanings).',
            '**Unit of analysis**: formale = la **sentence**; funzionale = il **whole text** (che a volte va scomposto in clauses).',
            '**Language concern**: formale = **syntax**; funzionale = **semantics**, lo studio dei significati.',
            '**Language** è: per l’approccio formale un insieme di regole per costruire frasi; per quello funzionale una **risorsa per creare significato**.',
          ],
        },
        {
          title: 'Perché la Functional Grammar',
          points: [
            'Approccio **empowering**: aiuta a capire come funziona una lingua.',
            'Approccio **appliable**: si usa per parlare di problemi del mondo reale.',
            'Applicazioni: **discourse analysis** (media, social, politica, pubblicità), **stylistics** (la lingua della letteratura, arte verbale), **translation studies**, **foreign language teaching and learning**, **register studies** (differenze tra tipi di testo).',
          ],
        },
      ],
      exercises: [
        { id: 'i1-3-1', type: 'match', topic: 'Formal vs functional', q: 'Approccio formale o funzionale?', pairs: [['Primary concern: structure', 'Formal'], ['Unit of analysis: whole text', 'Functional'], ['Language concern: syntax', 'Formal'], ['Language: resource for meaning making', 'Functional']], explain: 'Tabella formal/functional degli appunti.' },
        { id: 'i1-3-2', type: 'mc', topic: 'Formal vs functional', q: 'Qual è l’unità di analisi della Functional Grammar?', options: ['The whole text', 'The sentence', 'The word', 'The morpheme'], answer: 0, explain: 'La grammatica formale analizza la sentence; la FG il testo intero, scomposto in clauses quando serve.', profNote: 'Negli appunti c’è “(that in FUNCTIONAL GRAMMAR is the sentence)”: la sentence è l’unità della grammatica formale, come mostra la tabella.' },
        { id: 'i1-3-3', type: 'mc', topic: 'Formal vs functional', q: 'Qual è la principale preoccupazione della Functional Grammar?', options: ['Semantics, lo studio dei significati', 'Syntax, la combinazione delle parole', 'Phonology, i suoni', 'Spelling, la grafia corretta'], answer: 0, explain: 'Le grammatiche formali si occupano di più della sintassi.' },
        { id: 'i1-3-4', type: 'tf', topic: 'Formal vs functional', q: 'Per l’approccio funzionale la lingua è una risorsa per creare significato.', answer: true, explain: 'Per l’approccio formale è un insieme di regole per costruire frasi.' },
        { id: 'i1-3-5', type: 'match', topic: 'Applications', q: 'Abbina il campo di applicazione', pairs: [['Discourse analysis', 'Discorso politico e social media'], ['Stylistics', 'La lingua della letteratura'], ['Register studies', 'Differenze tra tipi di testo'], ['Translation studies', 'La traduzione']], explain: 'La FG è empowering e appliable.' },
        { id: 'i1-3-6', type: 'mc', topic: 'Applications', scenario: 'Una ricercatrice analizza come i giornali descrivono i migranti nei titoli di prima pagina.', q: 'In quale ambito applica la Functional Grammar?', options: ['Discourse analysis', 'Stylistics', 'Forensic linguistics', 'Foreign language teaching'], answer: 0, explain: 'Critical analysis of media discourse.' },
        { id: 'i1-3-7', type: 'fill', topic: 'Applications', text: 'La FG ha un approccio ___, perché aiuta a capire come funziona una lingua, e ___, perché si usa per problemi reali.', answers: ['empowering', 'appliable'], extra: ['prescriptive', 'abstract'], explain: 'Sono le due ragioni per studiarla.' },
        { id: 'i1-3-8', type: 'tf', topic: 'Applications', q: 'La stylistics studia la lingua della letteratura, intesa come arte verbale.', answer: true, explain: 'La letteratura è un’arte modellata attraverso la lingua.' },
      ],
    },
  ],
  open: [
    { id: 'i1-o1', q: 'Che cos’è la linguistica e quali sono le sue principali scuole e applicazioni?', answer: 'È lo studio scientifico della lingua o di lingue particolari. Nasce tra Ottocento e Novecento dopo Saussure. Scuole: cognitive (come il cervello elabora la lingua), structural (la struttura, come le parole formano frasi), functional (l’uso e le funzioni). Applicazioni: comparative, computational (traduzione automatica, IA), forensic (tribunali), historical (cambiamento diacronico).', keywords: ['scientifico', 'Saussure', 'cognitive', 'structural', 'functional', 'forensic', 'computational'] },
    { id: 'i1-o2', q: 'Cosa sono la Systemic Functional Linguistics e la Functional Grammar?', answer: 'Un approccio alla lingua centrato sul significato contestuale e sulla lingua in uso: la lingua avviene sempre in un context, cioè ciò che va con il testo. È funzionale, perché studia le funzioni della lingua nel contesto, e descrittivo, perché vuole descrivere la lingua su base empirica e non prescrivere regole: non è una grammatica del galateo linguistico (Martin e Matthiessen).', keywords: ['context', 'lingua in uso', 'funzionale', 'descrittivo', 'empirica', 'significato'] },
    { id: 'i1-o3', q: 'Differenza tra approccio descrittivo e prescrittivo.', answer: 'Il descrittivo descrive la lingua come viene davvero prodotta, sulla base della ricerca empirica. Il prescrittivo si concentra sulle regole e sulla distinzione tra corretto e sbagliato, guardando più alla forma che alle funzioni. SFL e FG sono descrittive.', keywords: ['descrittivo', 'prescrittivo', 'regole', 'corretto', 'forma', 'empirica'] },
    { id: 'i1-o4', q: 'Confronta approccio formale e funzionale alla lingua.', answer: 'Formale: si concentra sulla struttura, analizza la sentence, si occupa di syntax e vede la lingua come insieme di regole per costruire frasi. Funzionale: si concentra sul significato, analizza il whole text (scomposto in clauses quando serve), si occupa di semantics e vede la lingua come risorsa per creare significato.', keywords: ['struttura', 'significato', 'sentence', 'whole text', 'syntax', 'semantics', 'risorsa'] },
    { id: 'i1-o5', q: 'Perché studiare la Functional Grammar? Quali applicazioni ha?', answer: 'Perché è empowering, aiuta a capire come funziona una lingua, e appliable, si usa per problemi reali. Applicazioni: discourse analysis (media, social, discorso politico, pubblicità), stylistics (lingua della letteratura), translation studies, insegnamento e apprendimento delle lingue straniere, register studies.', keywords: ['empowering', 'appliable', 'discourse analysis', 'stylistics', 'translation', 'register'] },
  ],
  cards: [
    { id: 'i1-c1', front: 'Linguistics: definizione', back: 'The scientific study of language, or of particular languages (Oxford Learner’s Dictionary).' },
    { id: 'i1-c2', front: 'Cognitive, structural, functional linguistics', back: 'Cognitive: come il cervello elabora la lingua. Structural: la struttura delle frasi. Functional: uso e funzioni.' },
    { id: 'i1-c3', front: 'Forensic linguistics', back: 'Forensic linguistics: l’uso della linguistica nei tribunali.' },
    { id: 'i1-c4', front: 'Historical linguistics', back: 'Historical linguistics: come la lingua cambia diacronicamente, nel tempo.' },
    { id: 'i1-c5', front: 'Computational linguistics', back: 'Computational linguistics: software e computer al servizio della linguistica, come la traduzione automatica e l’IA.' },
    { id: 'i1-c6', front: 'Context nella SFL', back: 'Context: con-text, ciò che va con il testo. La lingua avviene sempre in un contesto e non si può ignorarlo.' },
    { id: 'i1-c7', front: 'Descriptive vs prescriptive', back: 'Descriptive: descrive la lingua reale su base empirica (FG). Prescriptive: regole, giusto e sbagliato, forma.' },
    { id: 'i1-c8', front: 'Unit of analysis: formale e funzionale', back: 'Formale: la sentence. Funzionale: il whole text.' },
    { id: 'i1-c9', front: 'Language concern: formale e funzionale', back: 'Formale: syntax. Funzionale: semantics.' },
    { id: 'i1-c10', front: 'FG empowering e appliable', back: 'Empowering: aiuta a capire come funziona la lingua. Appliable: si applica a problemi reali.' },
    { id: 'i1-c11', front: 'Applicazioni della Functional Grammar', back: 'Discourse analysis, stylistics, translation studies, insegnamento delle lingue, register studies.' },
  ],
};

export default i1;
