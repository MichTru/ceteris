import type { Unit } from '../../types';

const d1: Unit = {
  id: 'd1',
  n: 1,
  title: 'L’imprenditore',
  subtitle: 'Art. 2082, categorie, inizio e fine dell’impresa',
  color: '#6366F1',
  colorDark: '#4547C9',
  lessons: [
    {
      id: 'd1l1',
      title: 'Diritto commerciale e fonti',
      icon: '📚',
      theory: [
        {
          title: 'Che cosa studia il diritto commerciale',
          points: [
            'È il complesso di norme che disciplinano l’**attività d’impresa** e chi la esercita: l’imprenditore individuale e le società.',
            'Tutela interessi diversi: dell’imprenditore, dei **creditori**, dei concorrenti, dei consumatori, dei lavoratori e del **mercato** nel suo insieme.',
            'Il codice civile del 1942 ha unificato diritto civile e commerciale: non esiste più un codice di commercio separato.',
          ],
        },
        {
          title: 'Le fonti',
          points: [
            '**Codice civile**: libro IV (obbligazioni e contratti) e libro V (lavoro, impresa, società).',
            '**Legge fallimentare** (r.d. 267/1942), sostituita dal **Codice della crisi d’impresa e dell’insolvenza** (d.lgs. 14/2019).',
            'Leggi speciali: **Codice della proprietà industriale** (d.lgs. 30/2005), **legge antitrust** (l. 287/1990), **TUF** (d.lgs. 58/1998), **TUB** (d.lgs. 385/1993), Codice delle assicurazioni (d.lgs. 209/2005).',
            '**Diritto dell’Unione europea**: i regolamenti sono direttamente applicabili, le direttive vanno recepite con leggi nazionali.',
          ],
          tip: 'La legge che definisce l’imprenditore non è una legge speciale: è l’art. 2082 del codice civile.',
        },
      ],
      exercises: [
        { id: 'd1-1-1', type: 'mc', topic: 'Fonti', q: 'In quali libri del codice civile si trova il nucleo del diritto commerciale?', options: ['Libro IV (obbligazioni) e libro V (lavoro)', 'Libro I (persone) e libro II (successioni)', 'Libro III (proprietà) e libro VI (tutela dei diritti)', 'Solo nel libro VI, dedicato alle imprese'], answer: 0, explain: 'Il libro V contiene impresa e società, il libro IV i contratti.' },
        { id: 'd1-1-2', type: 'match', topic: 'Fonti', q: 'Abbina ogni fonte alla sua materia', pairs: [['l. 287/1990', 'Tutela della concorrenza (antitrust)'], ['d.lgs. 58/1998 (TUF)', 'Intermediazione finanziaria e società quotate'], ['d.lgs. 385/1993 (TUB)', 'Attività bancaria'], ['d.lgs. 14/2019', 'Crisi d’impresa e insolvenza'], ['d.lgs. 30/2005', 'Proprietà industriale']], explain: 'Accanto al codice civile operano leggi speciali di settore.' },
        { id: 'd1-1-3', type: 'tf', topic: 'Fonti', q: 'Le direttive europee sono direttamente applicabili senza bisogno di recepimento.', answer: false, explain: 'Sono i regolamenti a essere direttamente applicabili; le direttive vanno recepite.' },
        { id: 'd1-1-4', type: 'tf', topic: 'Fonti', q: 'Dal 1942 in Italia non esiste un codice di commercio separato dal codice civile.', answer: true, explain: 'Il codice civile del 1942 ha unificato la disciplina.' },
        { id: 'd1-1-5', type: 'fill', topic: 'Fonti', text: 'La legge fallimentare era il r.d. ___/1942; oggi la materia è regolata dal Codice della crisi, d.lgs. ___/2019.', answers: ['267', '14'], extra: ['287', '58', '385'], explain: 'Il Codice della crisi ha sostituito la legge fallimentare.' },
        { id: 'd1-1-6', type: 'mc', topic: 'Oggetto', q: 'Quale di questi interessi NON è tra quelli che il diritto commerciale tutela?', options: ['L’interesse del singolo socio a non pagare imposte', 'L’interesse dei creditori dell’impresa', 'L’interesse dei concorrenti e del mercato', 'L’interesse dei consumatori e dei lavoratori'], answer: 0, explain: 'La disciplina bilancia imprenditore, creditori, concorrenti, consumatori, lavoratori e mercato.' },
        { id: 'd1-1-7', type: 'mc', topic: 'Fonti', q: 'Quale norma contiene la definizione di imprenditore?', options: ['Art. 2082 del codice civile', 'Art. 1 della legge fallimentare', 'Art. 2 del Codice della crisi', 'Art. 41 della Costituzione'], answer: 0, explain: '“È imprenditore chi esercita professionalmente un’attività economica organizzata…”.' },
        { id: 'd1-1-8', type: 'tf', topic: 'Fonti', q: 'Il Codice delle assicurazioni e il TUB sono leggi speciali che integrano il codice civile.', answer: true, explain: 'Disciplinano settori specifici dell’attività d’impresa.' },
      ],
    },
    {
      id: 'd1l2',
      title: 'La nozione di imprenditore',
      icon: '🧭',
      theory: [
        {
          title: 'Art. 2082 c.c.',
          points: [
            '«È imprenditore chi esercita **professionalmente** un’**attività economica organizzata** al fine della **produzione o dello scambio di beni o di servizi**.»',
            'La definizione è unica e vale per ogni impresa: individuale o collettiva, privata o pubblica, agricola o commerciale.',
          ],
        },
        {
          title: 'I requisiti',
          points: [
            '**Attività**: una serie coordinata di atti diretti a uno scopo. Il singolo atto isolato non è impresa.',
            '**Produttiva**: produzione o scambio di beni o servizi. Il **mero godimento** di beni (riscuotere i canoni del proprio appartamento) non è impresa.',
            '**Organizzazione**: impiego di fattori produttivi, capitale e lavoro altrui. Può essere minima, anche solo di mezzi.',
            '**Economicità** (metodo economico): i ricavi devono tendere a coprire i costi. Non serve lo scopo di lucro: basta l’obiettivo del pareggio.',
            '**Professionalità**: esercizio **abituale** e non occasionale. Non serve l’esclusività né la continuità assoluta (attività stagionali); può bastare anche un unico affare complesso.',
          ],
          tip: 'Economicità ≠ lucro: una cooperativa o un ente che copre i costi con i ricavi è imprenditore.',
        },
      ],
      exercises: [
        { id: 'd1-2-1', type: 'fill', topic: 'Art. 2082', text: 'È imprenditore chi esercita ___ un’attività economica ___ al fine della produzione o dello ___ di beni o di servizi.', answers: ['professionalmente', 'organizzata', 'scambio'], extra: ['occasionalmente', 'lucrativa', 'godimento'], explain: 'È la definizione dell’art. 2082 c.c.' },
        { id: 'd1-2-2', type: 'tf', topic: 'Requisiti', q: 'Per essere imprenditore è necessario perseguire lo scopo di lucro.', answer: false, explain: 'Basta il metodo economico: ricavi tendenzialmente in grado di coprire i costi.' },
        { id: 'd1-2-3', type: 'mc', topic: 'Requisiti', q: 'Che cosa significa “professionalità” nell’art. 2082?', options: ['Esercizio abituale e non occasionale dell’attività', 'Iscrizione a un albo professionale', 'Esercizio esclusivo, senza altre attività', 'Esercizio continuo tutti i giorni dell’anno'], answer: 0, explain: 'Non servono esclusività né continuità assoluta: l’attività stagionale è professionale.' },
        { id: 'd1-2-4', type: 'mc', topic: 'Requisiti', scenario: 'Marta ha ereditato tre appartamenti e si limita a incassare gli affitti, senza alcun servizio agli inquilini.', q: 'Marta è imprenditrice?', options: ['No: è mero godimento, non attività produttiva', 'Sì: incassa redditi in modo abituale', 'Sì: gestisce un patrimonio immobiliare', 'Sì, ma solo se gli appartamenti sono più di due'], answer: 0, explain: 'Il godimento dei propri beni non produce né scambia beni o servizi.' },
        { id: 'd1-2-5', type: 'tf', topic: 'Requisiti', q: 'Un’attività stagionale, come uno stabilimento balneare aperto da giugno a settembre, può essere esercitata professionalmente.', answer: true, explain: 'La professionalità non richiede continuità assoluta.' },
        { id: 'd1-2-6', type: 'mc', topic: 'Requisiti', q: 'Quale affermazione sull’organizzazione è corretta?', options: ['Può essere minima, anche solo di mezzi o capitali', 'Richiede sempre almeno un dipendente', 'Richiede un capitale minimo di 10.000 €', 'Deve risultare da un atto scritto e registrato'], answer: 0, explain: 'L’organizzazione di fattori produttivi può essere anche ridotta.' },
        { id: 'd1-2-7', type: 'match', topic: 'Requisiti', q: 'Abbina il requisito al suo significato', pairs: [['Attività', 'Serie coordinata di atti, non un atto isolato'], ['Economicità', 'Ricavi che tendono a coprire i costi'], ['Professionalità', 'Esercizio abituale'], ['Organizzazione', 'Coordinamento di capitale e lavoro']], explain: 'Sono gli elementi dell’art. 2082.' },
        { id: 'd1-2-8', type: 'tf', topic: 'Requisiti', q: 'Un singolo affare, se complesso e richiede una pluralità di operazioni coordinate, può integrare un’attività d’impresa.', answer: true, explain: 'Esempio classico: la costruzione di un edificio da rivendere.' },
        { id: 'd1-2-9', type: 'mc', topic: 'Requisiti', scenario: 'Un ente distribuisce gratuitamente pasti ai poveri, coprendo i costi solo con donazioni.', q: 'Manca un requisito dell’impresa. Quale?', options: ['L’economicità: i ricavi non coprono i costi', 'La professionalità: è un’attività abituale', 'L’organizzazione: ci sono volontari', 'La produzione: i pasti sono beni'], answer: 0, explain: 'L’attività erogativa gratuita non segue il metodo economico.' },
        { id: 'd1-2-10', type: 'tf', topic: 'Requisiti', q: 'Una cooperativa che punta solo al pareggio di bilancio può essere imprenditore.', answer: true, explain: 'Il pareggio rispetta il metodo economico; lo scopo di lucro non è richiesto.' },
      ],
    },
    {
      id: 'd1l3',
      title: 'Le categorie di imprenditori',
      icon: '🗂️',
      theory: [
        {
          title: 'Agricolo e commerciale',
          points: [
            '**Imprenditore agricolo** (art. 2135): coltivazione del fondo, selvicoltura, allevamento di animali e **attività connesse**. Sono agricole le attività che curano un **ciclo biologico** o una sua fase necessaria.',
            '**Connesse**: manipolazione, conservazione, trasformazione, commercializzazione e valorizzazione di prodotti ottenuti **prevalentemente** dalla propria attività; servizi con attrezzature dell’azienda agricola (agriturismo).',
            '**Imprenditore commerciale** (art. 2195): attività industriale, intermediaria nella circolazione dei beni, di trasporto, bancaria o assicurativa, ausiliarie. La categoria è **residuale**: è commerciale ogni impresa non agricola.',
            'Statuto dell’agricolo: **non fallisce**, non deve tenere le scritture contabili, si iscrive nella sezione speciale del registro.',
          ],
        },
        {
          title: 'Piccolo imprenditore e impresa pubblica',
          points: [
            '**Piccolo imprenditore** (art. 2083): coltivatori diretti, artigiani, piccoli commercianti e chi esercita un’attività organizzata **prevalentemente con il lavoro proprio e dei familiari**.',
            'Il piccolo imprenditore è esonerato dalle scritture contabili. Per l’esonero dal fallimento contano invece le **soglie** della legge fallimentare (art. 1 l.f.).',
            '**Impresa pubblica**: ente pubblico economico (imprenditore commerciale, ma non fallisce), società in mano pubblica (d.lgs. 175/2016, fallisce come le altre), società in house, ente pubblico non economico che svolge attività d’impresa accessoria.',
          ],
        },
        {
          title: 'Professioni intellettuali',
          points: [
            'I liberi professionisti (avvocati, medici, architetti) **non sono imprenditori** per il solo esercizio della professione (artt. 2229 ss.).',
            'Lo diventano se la professione è **elemento di un’attività organizzata in forma d’impresa** (art. 2238): il medico titolare di una clinica.',
            'La prestazione è personale (art. 2232): il professionista può avvalersi di sostituti e ausiliari sotto la propria direzione e responsabilità.',
          ],
        },
      ],
      exercises: [
        { id: 'd1-3-1', type: 'mc', topic: 'Agricolo', q: 'Quale criterio usa l’art. 2135 per individuare le attività agricole “essenziali”?', options: ['La cura di un ciclo biologico o di una sua fase necessaria', 'Lo svolgimento dell’attività in un terreno di proprietà', 'L’impiego prevalente del lavoro familiare', 'Un fatturato inferiore a 200.000 €'], answer: 0, explain: 'Anche l’allevamento in batteria o la coltivazione in serra sono agricoli.' },
        { id: 'd1-3-2', type: 'mc', topic: 'Agricolo', scenario: 'Un viticoltore produce vino con uve comprate per l’80% da terzi e per il 20% dalla propria vigna.', q: 'La trasformazione in vino è attività agricola connessa?', options: ['No: i prodotti non derivano prevalentemente dalla propria attività', 'Sì: il vino è sempre un prodotto agricolo per legge', 'Sì: basta che una parte delle uve sia propria', 'No: la trasformazione non è mai attività connessa'], answer: 0, explain: 'Serve la prevalenza dei prodotti propri.' },
        { id: 'd1-3-3', type: 'tf', topic: 'Commerciale', q: 'La categoria dell’imprenditore commerciale è residuale: è commerciale ogni impresa non agricola.', answer: true, explain: 'L’elenco dell’art. 2195 copre tutte le attività diverse da quelle agricole.' },
        { id: 'd1-3-4', type: 'match', topic: 'Commerciale', q: 'Abbina l’esempio alla categoria dell’art. 2195', pairs: [['Fabbrica di mobili', 'Attività industriale'], ['Negozio di abbigliamento', 'Intermediazione nella circolazione dei beni'], ['Corriere espresso', 'Trasporto'], ['Compagnia di assicurazioni', 'Attività assicurativa'], ['Agenzia pubblicitaria', 'Attività ausiliaria']], explain: 'Le cinque attività dell’art. 2195.' },
        { id: 'd1-3-5', type: 'mc', topic: 'Piccolo imprenditore', q: 'Qual è il criterio dell’art. 2083 per il piccolo imprenditore?', options: ['Prevalenza del lavoro proprio e dei familiari', 'Ricavi annui inferiori a 200.000 € nell’ultimo triennio', 'Meno di dieci dipendenti assunti a tempo pieno', 'Debiti complessivi inferiori a 500.000 €'], answer: 0, explain: 'Il criterio civilistico è qualitativo: prevalenza del lavoro proprio e familiare.' },
        { id: 'd1-3-6', type: 'tf', topic: 'Piccolo imprenditore', q: 'Per stabilire se un imprenditore commerciale è esonerato dal fallimento si usa la definizione di piccolo imprenditore dell’art. 2083.', answer: false, explain: 'Contano le soglie quantitative dell’art. 1 l.f. (oggi l’impresa minore del CCII).' },
        { id: 'd1-3-7', type: 'mc', topic: 'Impresa pubblica', q: 'Un ente pubblico economico che esercita un’attività commerciale…', options: ['è imprenditore commerciale ma non è soggetto a fallimento', 'non è imprenditore perché persegue fini pubblici', 'fallisce come qualunque imprenditore commerciale', 'è sempre un piccolo imprenditore'], answer: 0, explain: 'Gli enti pubblici sono esclusi dal fallimento.' },
        { id: 'd1-3-8', type: 'tf', topic: 'Impresa pubblica', q: 'Una società per azioni il cui unico socio è un Comune è soggetta alle procedure concorsuali come le altre società.', answer: true, explain: 'La società in mano pubblica resta un soggetto di diritto privato (d.lgs. 175/2016).' },
        { id: 'd1-3-9', type: 'mc', topic: 'Professioni intellettuali', scenario: 'Un medico apre una clinica con trenta dipendenti, sale operatorie e camere di degenza.', q: 'Come si qualifica?', options: ['Imprenditore: la professione è un elemento dell’impresa organizzata', 'Professionista intellettuale: un medico non è mai imprenditore', 'Piccolo imprenditore: prevale il lavoro personale del medico', 'Imprenditore agricolo: cura un ciclo biologico'], answer: 0, explain: 'È l’ipotesi dell’art. 2238 c.c.' },
        { id: 'd1-3-10', type: 'tf', topic: 'Professioni intellettuali', q: 'Il professionista intellettuale può avvalersi di sostituti e ausiliari, sotto la propria direzione e responsabilità.', answer: true, explain: 'Art. 2232 c.c.: la prestazione resta personale.' },
        { id: 'd1-3-11', type: 'match', topic: 'Statuti', q: 'Abbina la categoria alla regola', pairs: [['Imprenditore agricolo', 'Non è soggetto a fallimento'], ['Imprenditore commerciale non piccolo', 'Scritture contabili obbligatorie e fallimento'], ['Piccolo imprenditore', 'Esonerato dalle scritture contabili'], ['Professionista intellettuale', 'Non è imprenditore per il solo esercizio della professione']], explain: 'Ogni categoria ha il suo statuto.' },
        { id: 'd1-3-12', type: 'tf', topic: 'Agricolo', q: 'L’agriturismo, svolto con attrezzature dell’azienda agricola, è un’attività agricola connessa.', answer: true, explain: 'È fornitura di servizi con utilizzazione prevalente di risorse dell’azienda agricola.' },
      ],
    },
    {
      id: 'd1l4',
      title: 'Le definizioni del Codice della crisi',
      icon: '📏',
      theory: [
        {
          title: 'Crisi, insolvenza, sovraindebitamento',
          points: [
            '**Crisi**: stato che rende **probabile** l’insolvenza; si manifesta con flussi di cassa prospettici inadeguati a far fronte alle obbligazioni dei successivi 12 mesi.',
            '**Insolvenza**: inadempimenti o altri fatti esteriori che dimostrano che il debitore **non è più in grado** di soddisfare regolarmente le proprie obbligazioni.',
            '**Sovraindebitamento**: crisi o insolvenza di consumatore, professionista, imprenditore minore, imprenditore agricolo e di ogni debitore non soggetto alla liquidazione giudiziale.',
          ],
        },
        {
          title: 'Le dimensioni dell’impresa',
          points: [
            '**Impresa minore**: possiede **congiuntamente** attivo patrimoniale ≤ 300.000 € (nei tre esercizi precedenti), ricavi lordi ≤ 200.000 € e debiti, anche non scaduti, ≤ 500.000 €.',
            'Basta superare **una** delle tre soglie per non essere impresa minore.',
            '**Grandi imprese**: superano almeno **due** dei tre limiti: attivo 20 milioni, ricavi 40 milioni, 250 dipendenti.',
            '**Consumatore**: persona fisica che agisce per scopi estranei all’attività imprenditoriale, commerciale, artigiana o professionale.',
            '**COMI** (centro degli interessi principali): dove il debitore gestisce abitualmente i propri interessi; per le società si presume coincida con la sede legale.',
          ],
        },
      ],
      exercises: [
        { id: 'd1-4-1', type: 'match', topic: 'Definizioni CCII', q: 'Abbina il termine alla definizione', pairs: [['Crisi', 'Insolvenza probabile'], ['Insolvenza', 'Incapacità di adempiere regolarmente'], ['Sovraindebitamento', 'Crisi di chi non è soggetto alla liquidazione giudiziale'], ['COMI', 'Centro degli interessi principali']], explain: 'Sono definizioni dell’art. 2 del Codice della crisi.' },
        { id: 'd1-4-2', type: 'fill', topic: 'Impresa minore', text: 'È impresa minore chi ha attivo ≤ ___ €, ricavi ≤ ___ € e debiti ≤ ___ €.', answers: ['300.000', '200.000', '500.000'], extra: ['30.000', '1.000.000', '50.000'], explain: 'Le tre soglie vanno rispettate congiuntamente.' },
        { id: 'd1-4-3', type: 'mc', topic: 'Impresa minore', scenario: 'Una s.r.l. ha attivo di 250.000 €, ricavi di 180.000 € e debiti di 620.000 €.', q: 'È un’impresa minore?', options: ['No: supera la soglia dei debiti', 'Sì: rispetta due soglie su tre', 'Sì: l’attivo è sotto i 300.000 €', 'No: una s.r.l. non può mai essere impresa minore'], answer: 0, explain: 'Le soglie sono congiunte: basta superarne una.' },
        { id: 'd1-4-4', type: 'tf', topic: 'Grandi imprese', q: 'È grande impresa chi supera almeno due tra: 20 milioni di attivo, 40 milioni di ricavi, 250 dipendenti.', answer: true, explain: 'Il criterio è “due su tre”.' },
        { id: 'd1-4-5', type: 'mc', topic: 'Definizioni CCII', q: 'Qual è la differenza tra crisi e insolvenza?', options: ['La crisi rende probabile l’insolvenza; l’insolvenza è l’incapacità attuale di adempiere', 'Sono sinonimi: il Codice della crisi li usa indifferentemente', 'La crisi riguarda solo le società, l’insolvenza solo le persone fisiche', 'L’insolvenza è uno stato reversibile, la crisi invece è definitiva'], answer: 0, explain: 'La crisi è uno stadio anticipato.' },
        { id: 'd1-4-6', type: 'tf', topic: 'Consumatore', q: 'Il socio di una s.n.c. che si indebita per comprare la propria auto agisce come consumatore.', answer: true, explain: 'Agisce per scopi estranei all’attività d’impresa.' },
        { id: 'd1-4-7', type: 'mc', topic: 'COMI', q: 'Per una società, dove si presume il centro degli interessi principali?', options: ['Nella sede legale', 'Dove abita l’amministratore', 'Dove si trova il magazzino più grande', 'Dove ha sede la banca principale'], answer: 0, explain: 'Presunzione superabile se la direzione effettiva è altrove.' },
        { id: 'd1-4-8', type: 'steps', topic: 'Impresa minore', scenario: 'Bottega Rossi: attivo 280.000 €, ricavi 210.000 €, debiti 400.000 €.', q: 'Verifica se è impresa minore.', steps: [
          { q: 'L’attivo rispetta la soglia?', kind: 'mc', answer: 0, options: ['Sì, è sotto 300.000 €', 'No, supera 300.000 €'], explain: '280.000 ≤ 300.000.' },
          { q: 'I ricavi rispettano la soglia?', kind: 'mc', answer: 0, options: ['No, superano 200.000 €', 'Sì, sono sotto 200.000 €'], explain: '210.000 > 200.000.' },
          { q: 'Allora la bottega è…', kind: 'mc', answer: 0, options: ['non minore: basta superare una soglia', 'minore: due soglie su tre sono rispettate', 'una grande impresa'], explain: 'Le soglie sono congiunte.' },
        ], explain: 'Superando i ricavi, la bottega può essere sottoposta a liquidazione giudiziale.' },
      ],
    },
    {
      id: 'd1l5',
      title: 'Inizio, fine e imputazione',
      icon: '⏱️',
      theory: [
        {
          title: 'Quando si diventa (e si smette di essere) imprenditori',
          points: [
            'Vale il **criterio dell’effettività**: si è imprenditori dall’**effettivo inizio** dell’attività, anche con atti di organizzazione univoci, non dall’iscrizione al registro.',
            'Si cessa con la **cessazione effettiva** dell’attività (la liquidazione dell’azienda), non con la sola cancellazione.',
            'Art. 10 l.f. (oggi art. 33 CCII): il fallimento può essere dichiarato **entro un anno dalla cancellazione** dal registro delle imprese.',
            'Per l’imprenditore individuale e per la cancellazione d’ufficio, creditori e PM possono provare che l’attività è proseguita dopo: il termine decorre dalla cessazione effettiva. Per le società cancellate su richiesta il termine decorre dalla cancellazione.',
          ],
        },
        {
          title: 'A chi si imputa l’impresa',
          points: [
            'Criterio della **spendita del nome**: è imprenditore chi agisce **in nome proprio**, anche se nell’interesse altrui.',
            '**Prestanome**: imprenditore è il prestanome, che spende il proprio nome; il finanziatore occulto in linea di principio non risponde come imprenditore.',
            '**Società occulta** e **socio occulto**: se dopo il fallimento di un imprenditore individuale risulta che l’impresa è riferibile a una società di cui il fallito è socio illimitatamente responsabile, il fallimento si estende alla società e agli altri soci (art. 147 c. 5 l.f.).',
          ],
        },
      ],
      exercises: [
        { id: 'd1-5-1', type: 'tf', topic: 'Inizio', q: 'Si diventa imprenditori solo con l’iscrizione nel registro delle imprese.', answer: false, explain: 'Conta l’effettivo esercizio dell’attività.' },
        { id: 'd1-5-2', type: 'mc', topic: 'Fine', q: 'Entro quanto tempo dalla cancellazione dal registro può essere dichiarato il fallimento?', options: ['Un anno', 'Sei mesi', 'Due anni', 'Cinque anni'], answer: 0, explain: 'Art. 10 l.f.; oggi art. 33 CCII.' },
        { id: 'd1-5-3', type: 'mc', topic: 'Fine', scenario: 'Luca, commerciante individuale, si cancella dal registro a marzo 2024 ma continua a vendere merce fino a dicembre 2024. A ottobre 2025 un creditore chiede il fallimento.', q: 'La domanda è tempestiva?', options: ['Sì, se il creditore prova la prosecuzione: il termine decorre da dicembre 2024', 'No: è passato più di un anno dalla cancellazione dal registro', 'No: un imprenditore cancellato non può mai fallire', 'Sì, perché per gli imprenditori individuali non esiste alcun termine'], answer: 0, explain: 'Per l’individuale si può provare la cessazione effettiva successiva.' },
        { id: 'd1-5-4', type: 'tf', topic: 'Imputazione', q: 'È imprenditore chi spende il proprio nome negli affari, anche se agisce nell’interesse di un altro.', answer: true, explain: 'Criterio formale della spendita del nome.' },
        { id: 'd1-5-5', type: 'mc', topic: 'Imputazione', scenario: 'Gino gestisce un bar intestato al cugino Pino, che firma contratti e fatture. I soldi e le decisioni sono di Gino.', q: 'Chi è imprenditore secondo il criterio della spendita del nome?', options: ['Pino, il prestanome', 'Gino, il vero interessato', 'Entrambi, in solido', 'Nessuno dei due'], answer: 0, explain: 'L’attività si imputa a chi agisce in nome proprio.' },
        { id: 'd1-5-6', type: 'mc', topic: 'Imputazione', q: 'Cosa prevede l’art. 147 c. 5 l.f. per la società occulta?', options: ['Il fallimento si estende alla società e agli altri soci illimitatamente responsabili', 'Il fallimento resta limitato all’imprenditore individuale che appariva', 'La società occulta è nulla e quindi non può mai fallire', 'Rispondono solo i soci che hanno firmato i contratti'], answer: 0, explain: 'L’impresa è riferibile alla società di cui il fallito è socio.' },
        { id: 'd1-5-7', type: 'order', topic: 'Fine', q: 'Ordina le fasi per una società cancellata su propria richiesta', items: ['Cessazione dell’attività', 'Cancellazione dal registro delle imprese', 'Decorre l’anno per il fallimento', 'Scade la possibilità di dichiarare il fallimento'], explain: 'Per le società cancellate su richiesta il termine decorre dalla cancellazione.' },
        { id: 'd1-5-8', type: 'tf', topic: 'Inizio', q: 'Gli atti di organizzazione univoci, come l’acquisto dei macchinari per aprire un’officina, possono già segnare l’inizio dell’impresa.', answer: true, explain: 'Criterio dell’effettività.' },
      ],
    },
  ],
  open: [
    { id: 'd1-o1', q: 'Definisci l’imprenditore e spiega i requisiti dell’art. 2082 c.c.', answer: 'È imprenditore chi esercita professionalmente un’attività economica organizzata al fine della produzione o dello scambio di beni o servizi. Attività: serie coordinata di atti. Produttiva: produzione o scambio, non mero godimento. Organizzazione di capitale e lavoro, anche minima. Economicità: ricavi che tendono a coprire i costi, non serve il lucro. Professionalità: esercizio abituale, non necessariamente esclusivo né continuo.', keywords: ['professionalmente', 'organizzata', 'produzione', 'economicità', 'abituale', 'lucro'] },
    { id: 'd1-o2', q: 'Distingui imprenditore agricolo e commerciale e i rispettivi statuti.', answer: 'L’agricolo (art. 2135) coltiva il fondo, alleva, fa selvicoltura e attività connesse, purché curi un ciclo biologico; le connesse riguardano prodotti ottenuti prevalentemente dalla propria attività. Il commerciale (art. 2195) esercita attività industriale, intermediaria, di trasporto, bancaria, assicurativa o ausiliaria; la categoria è residuale. L’agricolo non fallisce e non tiene le scritture; il commerciale non piccolo è iscritto nella sezione ordinaria, tiene le scritture e fallisce.', keywords: ['2135', 'ciclo biologico', 'connesse', '2195', 'residuale', 'fallimento'] },
    { id: 'd1-o3', q: 'Chi è il piccolo imprenditore e che rilievo ha?', answer: 'Art. 2083: coltivatori diretti, artigiani, piccoli commercianti e chi esercita un’attività organizzata prevalentemente con il lavoro proprio e dei familiari. È esonerato dalle scritture contabili e si iscrive nella sezione speciale. Per l’esonero dalle procedure concorsuali non conta questa nozione ma le soglie quantitative (art. 1 l.f., impresa minore nel CCII).', keywords: ['2083', 'lavoro proprio', 'familiari', 'scritture', 'soglie'] },
    { id: 'd1-o4', q: 'I professionisti intellettuali sono imprenditori?', answer: 'Per il solo esercizio della professione no (artt. 2229 ss.): la prestazione è personale e può avvalersi di sostituti e ausiliari sotto la propria responsabilità (art. 2232). Lo diventano quando la professione è elemento di un’attività organizzata in forma d’impresa (art. 2238), come il medico titolare di una clinica.', keywords: ['2229', 'personale', '2238', 'organizzata', 'clinica'] },
    { id: 'd1-o5', q: 'Quali sono le soglie dell’impresa minore e delle grandi imprese nel Codice della crisi?', answer: 'Impresa minore: possesso congiunto, nei tre esercizi precedenti, di attivo non superiore a 300.000 €, ricavi lordi non superiori a 200.000 € e debiti anche non scaduti non superiori a 500.000 €; basta superarne una per non esserlo. Grandi imprese: superano almeno due dei limiti di 20 milioni di attivo, 40 milioni di ricavi e 250 dipendenti.', keywords: ['300.000', '200.000', '500.000', 'congiunt', 'due', '250'] },
    { id: 'd1-o6', q: 'Distingui crisi, insolvenza e sovraindebitamento.', answer: 'La crisi è lo stato che rende probabile l’insolvenza e si manifesta con flussi di cassa prospettici inadeguati per i 12 mesi successivi. L’insolvenza si manifesta con inadempimenti o fatti esteriori che dimostrano che il debitore non è più in grado di adempiere regolarmente. Il sovraindebitamento è la crisi o insolvenza dei debitori non soggetti a liquidazione giudiziale: consumatore, professionista, impresa minore, agricolo.', keywords: ['probabile', 'flussi', 'regolarmente', 'consumatore', 'minore'] },
    { id: 'd1-o7', q: 'Quando inizia e quando finisce l’impresa? Cosa prevede l’art. 10 l.f.?', answer: 'Vale il criterio dell’effettività: si diventa imprenditori con l’effettivo inizio dell’attività, anche con atti organizzativi univoci, e si cessa con la cessazione effettiva. Il fallimento può essere dichiarato entro un anno dalla cancellazione dal registro. Per l’impresa individuale e la cancellazione d’ufficio i creditori o il PM possono dimostrare il momento della cessazione effettiva, da cui decorre l’anno.', keywords: ['effettività', 'inizio', 'cessazione', 'un anno', 'cancellazione', 'individuale'] },
    { id: 'd1-o8', q: 'A chi si imputa l’attività d’impresa? Prestanome e società occulta.', answer: 'Si applica il criterio della spendita del nome: è imprenditore chi agisce in nome proprio, anche nell’interesse altrui; quindi è imprenditore il prestanome. Se dopo il fallimento di un imprenditore individuale emerge che l’impresa è riferibile a una società di cui egli è socio illimitatamente responsabile, il tribunale dichiara il fallimento della società e degli altri soci illimitatamente responsabili (art. 147 c. 5 l.f.).', keywords: ['spendita del nome', 'prestanome', 'occulta', '147', 'soci'] },
  ],
  cards: [
    { id: 'd1-c1', front: 'Art. 2082 c.c.', back: 'Imprenditore: chi esercita professionalmente un’attività economica organizzata per produrre o scambiare beni o servizi.' },
    { id: 'd1-c2', front: 'Economicità', back: 'Ricavi che tendono a coprire i costi. Non serve lo scopo di lucro.' },
    { id: 'd1-c3', front: 'Professionalità', back: 'Esercizio abituale; non servono esclusività né continuità assoluta.' },
    { id: 'd1-c4', front: 'Art. 2135 c.c.', back: 'Imprenditore agricolo: fondo, selvicoltura, allevamento, attività connesse; criterio del ciclo biologico.' },
    { id: 'd1-c5', front: 'Art. 2195 c.c.', back: 'Imprenditore commerciale: industria, intermediazione, trasporto, banca e assicurazione, ausiliarie.' },
    { id: 'd1-c6', front: 'Art. 2083 c.c.', back: 'Piccolo imprenditore: prevalenza del lavoro proprio e dei familiari.' },
    { id: 'd1-c7', front: 'Art. 2238 c.c.', back: 'Il professionista è imprenditore se la professione è elemento di un’attività organizzata in forma d’impresa.' },
    { id: 'd1-c8', front: 'Impresa minore', back: 'Congiuntamente: attivo ≤ 300.000, ricavi ≤ 200.000, debiti ≤ 500.000 €.' },
    { id: 'd1-c9', front: 'Grandi imprese (CCII)', back: 'Superano 2 su 3: attivo 20 mln, ricavi 40 mln, 250 dipendenti.' },
    { id: 'd1-c10', front: 'Crisi', back: 'Stato che rende probabile l’insolvenza (flussi inadeguati nei 12 mesi successivi).' },
    { id: 'd1-c11', front: 'Insolvenza', back: 'Il debitore non è più in grado di adempiere regolarmente.' },
    { id: 'd1-c12', front: 'Art. 10 l.f.', back: 'Fallimento entro un anno dalla cancellazione dal registro.' },
    { id: 'd1-c13', front: 'Spendita del nome', back: 'È imprenditore chi agisce in nome proprio: anche il prestanome.' },
  ],
};

export default d1;
