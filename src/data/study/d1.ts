import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd1',
  intro:
    'Il diritto commerciale regola l’impresa e chi la esercita. Tutto parte da una definizione, l’art. 2082: da lì si capisce chi è imprenditore, quali categorie esistono (agricolo, commerciale, piccolo, pubblico) e quali regole si applicano a ciascuna. Chiudono il capitolo le definizioni del Codice della crisi e le regole su inizio, fine e imputazione dell’impresa.',
  sections: [
    {
      title: 'Oggetto e fonti',
      blocks: [
        { t: 'p', text: 'Il diritto commerciale disciplina l’**attività d’impresa** e bilancia gli interessi dell’imprenditore con quelli di **creditori, concorrenti, consumatori, lavoratori** e del **mercato**. Dal 1942 non esiste un codice di commercio separato: la materia sta nel codice civile, integrato da molte leggi speciali.' },
        { t: 'table', head: ['Fonte', 'Contenuto'], rows: [
          ['Codice civile, libri IV e V', 'Contratti; lavoro, impresa, società'],
          ['R.d. 267/1942 (legge fallimentare)', 'Procedure concorsuali, fino al 2022'],
          ['D.lgs. 14/2019 (Codice della crisi)', 'Crisi e insolvenza, in vigore dal 15 luglio 2022'],
          ['D.lgs. 30/2005', 'Proprietà industriale'],
          ['L. 287/1990', 'Tutela della concorrenza (antitrust)'],
          ['D.lgs. 58/1998 (TUF)', 'Mercati finanziari e società quotate'],
          ['D.lgs. 385/1993 (TUB)', 'Banche'],
          ['Diritto UE', 'Regolamenti direttamente applicabili; direttive da recepire'],
        ] },
      ],
    },
    {
      title: 'Chi è imprenditore',
      blocks: [
        { t: 'def', term: 'Imprenditore (art. 2082 c.c.)', text: 'Chi esercita **professionalmente** un’**attività economica organizzata** al fine della **produzione o dello scambio di beni o di servizi**.' },
        { t: 'table', head: ['Requisito', 'Significato', 'Attenzione'], rows: [
          ['Attività', 'Serie coordinata di atti', 'Il singolo atto isolato non basta'],
          ['Produttiva', 'Produzione o scambio di beni o servizi', 'Il mero godimento (incassare affitti) non è impresa'],
          ['Organizzazione', 'Coordinamento di capitale e lavoro', 'Può essere minima, anche solo di mezzi'],
          ['Economicità', 'Ricavi che tendono a coprire i costi', 'Non serve lo scopo di lucro'],
          ['Professionalità', 'Esercizio abituale', 'Non servono esclusività né continuità; basta anche un affare complesso'],
        ] },
        { t: 'warn', text: 'Errore tipico: dire che l’imprenditore deve avere scopo di lucro. Basta il **metodo economico**: anche una cooperativa che punta al pareggio è imprenditore. Non lo è invece chi eroga gratuitamente beni o servizi.' },
        { t: 'example', title: 'È impresa?', steps: ['Marta incassa gli affitti di tre appartamenti ereditati: **no**, è godimento.', 'Uno stabilimento balneare aperto quattro mesi l’anno: **sì**, l’attività stagionale è professionale.', 'Un costruttore che realizza un solo palazzo da vendere: **sì**, un unico affare complesso.', 'Un ente che distribuisce pasti gratis: **no**, manca l’economicità.'] },
      ],
    },
    {
      title: 'Le categorie di imprenditori',
      blocks: [
        { t: 'h', text: 'Agricolo e commerciale' },
        { t: 'p', text: 'L’**imprenditore agricolo** (art. 2135) coltiva il fondo, alleva animali, fa selvicoltura e attività **connesse**. Il criterio è la cura di un **ciclo biologico** o di una sua fase necessaria: è agricolo anche l’allevamento in batteria. Le connesse riguardano prodotti ottenuti **prevalentemente** dalla propria attività (trasformarli, venderli) o servizi resi con le attrezzature dell’azienda agricola (agriturismo).' },
        { t: 'p', text: 'L’**imprenditore commerciale** (art. 2195) esercita attività industriale, intermediaria nella circolazione dei beni, di trasporto, bancaria o assicurativa, ausiliaria. La categoria è **residuale**: ciò che non è agricolo è commerciale.' },
        { t: 'h', text: 'Piccolo imprenditore e impresa pubblica' },
        { t: 'p', text: 'Il **piccolo imprenditore** (art. 2083) è il coltivatore diretto, l’artigiano, il piccolo commerciante e chi lavora **prevalentemente con il lavoro proprio e dei familiari**. È esonerato dalle scritture contabili. Per l’esonero dal fallimento, però, contano le **soglie quantitative** della legge fallimentare.' },
        { t: 'list', items: ['**Ente pubblico economico**: imprenditore commerciale, ma non fallisce.', '**Società a partecipazione pubblica** (d.lgs. 175/2016): è una società privata e fallisce.', '**Ente pubblico non economico** con attività d’impresa accessoria: si iscrive nel registro.'] },
        { t: 'h', text: 'Professioni intellettuali' },
        { t: 'p', text: 'Avvocati, medici, architetti non sono imprenditori per il solo esercizio della professione (artt. 2229 ss.); la prestazione è personale, con sostituti e ausiliari sotto la propria responsabilità (art. 2232). Lo diventano se la professione è **elemento di un’attività organizzata in forma d’impresa** (art. 2238): il medico che gestisce una clinica.' },
        { t: 'table', head: ['Categoria', 'Registro', 'Scritture', 'Fallimento'], rows: [
          ['Commerciale non piccolo', 'Sezione ordinaria', 'Obbligatorie', 'Sì, sopra soglia'],
          ['Piccolo imprenditore', 'Sezione speciale', 'Esonerato', 'Dipende dalle soglie'],
          ['Agricolo', 'Sezione speciale (efficacia dichiarativa)', 'Esonerato', 'No'],
          ['Ente pubblico economico', 'Sezione ordinaria', 'Obbligatorie', 'No'],
        ] },
      ],
    },
    {
      title: 'Le definizioni del Codice della crisi',
      blocks: [
        { t: 'def', term: 'Crisi', text: 'Stato che rende **probabile** l’insolvenza: flussi di cassa prospettici inadeguati per le obbligazioni dei successivi 12 mesi.' },
        { t: 'def', term: 'Insolvenza', text: 'Inadempimenti o altri fatti esteriori che dimostrano che il debitore **non è più in grado** di adempiere regolarmente.' },
        { t: 'def', term: 'Sovraindebitamento', text: 'Crisi o insolvenza di consumatore, professionista, impresa minore, imprenditore agricolo e di chi non è soggetto alla liquidazione giudiziale.' },
        { t: 'table', head: ['Nozione', 'Soglie', 'Come si legge'], rows: [
          ['Impresa minore', 'Attivo ≤ 300.000 €, ricavi ≤ 200.000 €, debiti ≤ 500.000 €', 'Tutte e tre insieme'],
          ['Grandi imprese', 'Attivo 20 mln, ricavi 40 mln, 250 dipendenti', 'Superarne almeno due'],
        ] },
        { t: 'example', title: 'Bottega Rossi', steps: ['Attivo 280.000: sotto soglia.', 'Ricavi 210.000: **sopra** soglia.', 'Debiti 400.000: sotto soglia.'], result: 'Non è impresa minore: basta superare un limite.' },
        { t: 'p', text: 'Il **consumatore** è la persona fisica che agisce per scopi estranei all’attività d’impresa o professionale. Il **COMI** è il centro degli interessi principali: per le società si presume la sede legale.' },
      ],
    },
    {
      title: 'Inizio, fine e imputazione',
      blocks: [
        { t: 'p', text: 'Vale il **criterio dell’effettività**: si diventa imprenditori con l’effettivo inizio dell’attività (anche con atti organizzativi univoci) e si smette con la **cessazione effettiva**, non con iscrizioni o cancellazioni.' },
        { t: 'flow', title: 'Fallimento dopo la cessazione (art. 10 l.f., oggi art. 33 CCII)', items: ['Cancellazione dal registro', 'Il fallimento è possibile entro un anno', 'Impresa individuale o cancellazione d’ufficio: creditori e PM possono provare che l’attività è continuata', 'In quel caso l’anno decorre dalla cessazione effettiva'] },
        { t: 'p', text: 'L’attività si **imputa a chi spende il nome**: è imprenditore chi agisce in nome proprio, anche se nell’interesse altrui. Perciò è imprenditore il **prestanome**.' },
        { t: 'warn', text: '**Società occulta**: se dopo il fallimento di un imprenditore individuale emerge che l’impresa era riferibile a una società di cui egli era socio illimitatamente responsabile, il tribunale dichiara il fallimento anche della società e degli altri soci (art. 147 c. 5 l.f.).' },
      ],
    },
  ],
  summary: [
    'Imprenditore (2082): attività economica organizzata, esercitata professionalmente, per produrre o scambiare beni o servizi.',
    'Basta l’economicità, non il lucro; il mero godimento non è impresa.',
    'Agricolo (2135, ciclo biologico, non fallisce); commerciale (2195, residuale); piccolo (2083, lavoro proprio e familiare).',
    'Il professionista è imprenditore solo se la professione è parte di un’attività organizzata come impresa (2238).',
    'Impresa minore: attivo ≤ 300.000, ricavi ≤ 200.000, debiti ≤ 500.000 €, tutte insieme.',
    'Effettività per inizio e fine; fallimento entro un anno dalla cancellazione; imputazione per spendita del nome.',
  ],
};

export default c;
