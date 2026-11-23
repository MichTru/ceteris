import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd1',
  intro:
    'Il diritto commerciale regola l’impresa e chi la esercita. Tutto parte da una definizione, l’art. 2082: da lì si capisce chi è imprenditore, quali categorie esistono (agricolo, commerciale, piccolo, pubblico, privato) e quali regole si applicano a ciascuna. Seguono le professioni intellettuali, le definizioni del Codice della crisi e le regole su inizio, fine e imputazione dell’impresa, compresi prestanome e soci occulti.',
  sections: [
    {
      title: 'Che cos’è il diritto commerciale',
      blocks: [
        { t: 'def', term: 'Diritto commerciale', text: 'L’insieme delle norme di **diritto privato** che disciplinano in modo specifico le **attività produttive** e il loro esercizio.' },
        { t: 'p', text: 'Sono **produttive** le attività che creano **nuova ricchezza**: nuovi beni, materiali o immateriali, o nuovi servizi che soddisfano bisogni e a cui la comunità attribuisce un valore economico. Rientra anche la loro **circolazione**, cioè lo scambio.' },
        { t: 'p', text: 'Perché serve una branca a parte? Perché le regole comuni dei contratti (libro IV del codice civile) e degli enti (libro I) non bastano a governare gli interessi tipici dei rapporti tra imprese e tra imprese e privati. Gli interessi protetti sono soprattutto questi:' },
        { t: 'table', head: ['Interesse', 'Strumento'], rows: [
          ['Una concorrenza sana tra imprese', 'Disciplina antitrust'],
          ['La tutela di chi fa credito all’impresa', 'Scritture contabili, pubblicità'],
          ['Trasparenza e correttezza della gestione', 'Scritture contabili, statuto dell’imprenditore'],
          ['Rapporti tra soci e con i terzi secondo logiche capitalistiche', 'Diritto delle società'],
          ['La stabilità delle imprese e la gestione dei dissesti', 'Procedure concorsuali'],
        ] },
        { t: 'p', text: 'Anche il **diritto pubblico** si occupa di economia, ma con logiche e finalità proprie. Il diritto commerciale, invece, regola l’**azione dell’impresa nel mercato** e i rapporti che vi si svolgono. Dentro il diritto privato è considerato un **ordinamento speciale**, con principi autonomi legati alle particolarità delle attività economiche.' },
        { t: 'h', text: 'Due grandi blocchi' },
        { t: 'list', items: [
          '**Diritto dell’impresa** (o statuto dell’imprenditore). Non è una disciplina completa di ogni aspetto dell’attività: per molti profili valgono le regole comuni del diritto privato. Si concentra su **informazione del mercato** (pubblicità), **organizzazione** dell’apparato produttivo, **azione nel mercato** (contratti, concorrenza) e **crisi** dell’impresa.',
          '**Diritto delle società**: le società sono organismi di diritto privato con una propria sfera di **autonomia giuridica e patrimoniale**.',
        ] },
        { t: 'p', text: 'In origine lo statuto dell’impresa era pensato per l’impresa **medio-grande**. Col tempo anche imprese agricole, piccole imprese e professioni intellettuali sono state progressivamente attratte verso la disciplina dell’impresa commerciale: si parla di **«commercializzazione»**, e per questo le differenze tra categorie si sono ridotte.' },
      ],
    },
    {
      title: 'Le fonti',
      blocks: [
        { t: 'p', text: 'Dal 1942 non esiste più un codice di commercio separato: la materia sta nel **codice civile**, affiancato da molte leggi speciali e dal diritto europeo.' },
        { t: 'table', head: ['Fonte', 'Contenuto'], rows: [
          ['Codice civile, libro IV', 'Contratti e obbligazioni'],
          ['Codice civile, libro V', 'Lavoro, impresa, società'],
          ['R.d. 267/1942 (legge fallimentare)', 'Procedure concorsuali, fino al 2022'],
          ['L. 3/2012', 'Sovraindebitamento, fino al 2022'],
          ['D.lgs. 14/2019 (Codice della crisi d’impresa e dell’insolvenza)', 'Riunisce le procedure concorsuali; in vigore dal 15 luglio 2022'],
          ['D.lgs. 30/2005 (Codice della proprietà industriale)', 'Marchi, brevetti, concorrenza'],
          ['L. 287/1990', 'Tutela della concorrenza (antitrust)'],
          ['D.lgs. 58/1998 (TUF)', 'Mercati finanziari e società quotate'],
          ['D.lgs. 385/1993 (TUB)', 'Banche'],
          ['Codice delle assicurazioni', 'Imprese assicurative'],
          ['Diritto UE e accordi internazionali', 'Armonizzano le discipline degli Stati; i regolamenti valgono direttamente, le direttive vanno recepite'],
        ] },
        { t: 'warn', text: 'Gli appunti dicono che il Codice della crisi «dovrebbe entrare in vigore a settembre 2021»: è stato rinviato più volte ed è **in vigore dal 15 luglio 2022**. Da allora il «fallimento» si chiama **liquidazione giudiziale**.' },
      ],
    },
    {
      title: 'Chi è imprenditore',
      blocks: [
        { t: 'def', term: 'Imprenditore (art. 2082 c.c.)', text: 'Chi esercita **professionalmente** un’**attività economica organizzata** al fine della **produzione o dello scambio di beni o di servizi**.' },
        { t: 'p', text: 'Più che una persona, l’articolo descrive un **comportamento**: un’attività produttiva qualificata da tre requisiti (organizzazione, professionalità, economicità). Quell’attività si chiama **impresa**. Quella dell’art. 2082 non è l’unica nozione di impresa dell’ordinamento: è quella che serve a decidere **a chi si applica lo statuto dell’imprenditore** del codice civile.' },
        { t: 'h', text: 'I requisiti uno per uno' },
        { t: 'list', items: [
          '**Attività produttiva**: non basta godere di beni già esistenti, bisogna produrre beni o servizi nuovi o farli circolare. E deve servire i bisogni del **mercato**, non solo quelli di chi produce (chi coltiva l’orto per sé non è imprenditore).',
          '**Organizzazione**: l’imprenditore si serve di fattori produttivi diversi dal proprio lavoro (capitale, lavoro altrui) e li **coordina**. Si discute quanto debba pesare questa organizzazione rispetto al lavoro personale; l’opinione prevalente richiede almeno un coordinamento di fattori diversi. L’insieme dei beni organizzati è l’**azienda** (art. 2555). Può bastare anche **un solo affare**, se l’organizzazione è articolata e complessa.',
          '**Professionalità**: l’attività non è sporadica, saltuaria od occasionale. Non vuol dire avere titoli o competenze: riguarda solo il **modo** di esercitarla, cioè l’abitualità. Non servono esclusività né continuità senza pause (vale anche l’attività stagionale).',
          '**Economicità**: l’attività è condotta con **metodo economico**, cioè programmata per coprire i costi con i ricavi. Non è impresa chi eroga beni o servizi gratuitamente. Chi tende a coprire i costi ma non ci riesce resta imprenditore: semplicemente è in crisi, e lì intervengono le procedure concorsuali.',
        ] },
        { t: 'warn', text: 'Errore tipico: dire che l’imprenditore deve avere **scopo di lucro**. Basta il **metodo economico**: anche una cooperativa che punta al pareggio è imprenditore. Economicità e lucro sono concetti diversi.' },
        { t: 'example', title: 'È impresa?', steps: ['Marta incassa gli affitti di tre appartamenti ereditati: **no**, è godimento di beni già esistenti.', 'Uno stabilimento balneare aperto quattro mesi l’anno: **sì**, l’attività stagionale è professionale.', 'Un costruttore che realizza un solo palazzo da vendere: **sì**, un unico affare ma con un’organizzazione complessa.', 'Un ente che distribuisce pasti gratis: **no**, manca l’economicità.', 'Un’impresa che vende sotto costo e chiude in perdita: **sì**, era programmata per coprire i costi; è un’impresa in crisi.'] },
      ],
    },
    {
      title: 'Le categorie di imprenditori',
      blocks: [
        { t: 'p', text: 'Il legislatore dà una definizione **comune** (art. 2082) e poi distingue le categorie con regole proprie. Tre criteri:' },
        { t: 'tree', root: 'Categorie di impresa', children: [
          { label: 'Per l’oggetto dell’attività', sub: ['Agricola (art. 2135)', 'Commerciale (art. 2195)'] },
          { label: 'Per la dimensione', sub: ['Piccola (art. 2083)', 'Medio-grande'] },
          { label: 'Per il soggetto', sub: ['Pubblica', 'Privata'] },
        ] },
        { t: 'h', text: 'L’imprenditore agricolo' },
        { t: 'def', term: 'Imprenditore agricolo (art. 2135 c. 1)', text: 'Chi esercita **coltivazione del fondo, selvicoltura, allevamento di animali** e **attività connesse**.' },
        { t: 'p', text: 'Con la riforma del **2001** (nuovi commi 2 e 3) la nozione si è allargata. Oggi il criterio è la cura di un **ciclo biologico** vegetale o animale, o di una sua **fase necessaria**, che **utilizza o può utilizzare** il fondo, il bosco o le acque dolci, salmastre o marine. Prima il legame con il fondo era essenziale; ora basta che possa esserci: è agricolo anche l’allevamento in batteria o la coltura in serra.' },
        { t: 'p', text: 'Le **attività connesse** non sarebbero agricole di per sé, ma lo diventano se le svolge lo **stesso imprenditore agricolo** e riguardano prodotti ottenuti **prevalentemente** dalla sua attività principale (trasformazione, conservazione, vendita), oppure beni e servizi forniti usando **prevalentemente** le attrezzature dell’azienda agricola (per esempio l’agriturismo).' },
        { t: 'list', items: [
          '**Regime di favore**: meno oneri dell’impresa commerciale.',
          '**Non fallisce**: è esclusa dalle procedure concorsuali tradizionali (fallimento, oggi liquidazione giudiziale), ma per lo stesso motivo non accedeva al concordato preventivo.',
          'In caso di crisi può usare le procedure di **sovraindebitamento** e gli **accordi di ristrutturazione dei debiti**: sono procedure **volontarie**, mentre il fallimento colpisce l’imprenditore commerciale anche contro la sua volontà.',
          '**Registro delle imprese**: oggi si iscrive anche l’impresa agricola, in una sezione speciale.',
          '**Scritture contabili**: esonerata, finché non esercita l’attività in forma di società commerciale.',
        ] },
        { t: 'p', text: 'Questo favore è criticato: alcune imprese e consorzi agricoli oggi sono grandi e usano macchinari industriali, e il trattamento di vantaggio non sempre ha più ragione di esistere.' },
        { t: 'h', text: 'L’imprenditore commerciale' },
        { t: 'p', text: 'Non esiste una vera definizione. L’**art. 2195** elenca le attività soggette a iscrizione nel registro: industriale diretta alla produzione di beni o servizi, intermediaria nella circolazione dei beni, di trasporto, bancaria o assicurativa, ausiliaria delle precedenti. L’elenco però non è esaustivo: la categoria è **residuale**, perché **ciò che non è agricolo è commerciale**. Non esiste una terza categoria.' },
        { t: 'h', text: 'Il piccolo imprenditore' },
        { t: 'def', term: 'Piccolo imprenditore (art. 2083)', text: 'Coltivatori diretti del fondo, artigiani, piccoli commercianti e chi esercita un’attività professionale organizzata **prevalentemente con il lavoro proprio e dei componenti della famiglia**.' },
        { t: 'p', text: 'Ciò che lo caratterizza è la **prevalenza del lavoro proprio** (e dei familiari) sugli altri fattori produttivi: il suo apporto personale non è sostituibile.' },
        { t: 'list', items: [
          'È **esonerato dalle scritture contabili**.',
          'Si iscrive nel registro delle imprese in una sezione speciale: l’esonero dall’iscrizione è caduto con la riforma del registro.',
          'L’esonero dal fallimento non dipende dall’art. 2083 ma da **soglie quantitative**: per la legge fallimentare (art. 1 c. 2) bastava superarne **una** per essere assoggettati. Il Codice della crisi usa le stesse soglie per l’**impresa minore**.',
          'Se è insolvente accede alle procedure di **sovraindebitamento**.',
        ] },
        { t: 'h', text: 'Professioni intellettuali' },
        { t: 'p', text: 'I professionisti producono **servizi professionali**. Le professioni si dividono in **protette**, con un ordinamento proprio in aggiunta agli artt. 2229 ss. c.c. (avvocati, medici, notai), e **non protette**, senza regole specifiche.' },
        { t: 'p', text: 'Un professionista che lavora a tempo pieno ha in sé i requisiti dell’art. 2082. Eppure per l’**art. 2238** lo statuto dell’imprenditore si applica solo se **l’esercizio della professione costituisce elemento di un’attività organizzata in forma d’impresa**: il medico che gestisce una clinica, non il medico nel suo studio. Il criterio è oggettivo: se il servizio viene ceduto con un **contratto d’opera intellettuale** (artt. 2230 ss.), che richiede intellettualità e prestazione **personale** (art. 2232: sostituti e ausiliari sotto la propria responsabilità), il professionista non è imprenditore.' },
        { t: 'table', head: ['Categoria', 'Registro', 'Scritture', 'Fallimento / liquidazione giudiziale'], rows: [
          ['Commerciale non piccolo', 'Sezione ordinaria', 'Obbligatorie', 'Sì, sopra soglia'],
          ['Piccolo imprenditore', 'Sezione speciale', 'Esonerato', 'Dipende dalle soglie'],
          ['Agricolo', 'Sezione speciale', 'Esonerato', 'No'],
          ['Ente pubblico economico', 'Sezione ordinaria', 'Obbligatorie', 'No'],
          ['Professionista intellettuale', 'No, salvo art. 2238', 'No', 'No, salvo art. 2238'],
        ] },
      ],
    },
    {
      title: 'Impresa pubblica e impresa privata',
      blocks: [
        { t: 'p', text: 'Si parla di **impresa pubblica** quando un’attività d’impresa commerciale è esercitata da un **ente pubblico** o comunque riconducibile a esso. Tre figure:' },
        { t: 'table', head: ['Figura', 'Cosa fa', 'Regole'], rows: [
          ['Ente pubblico economico', 'Persegue il fine istituzionale principalmente con un’attività commerciale, che può coincidere con il fine stesso', 'Pubblicità e scritture; non fallisce'],
          ['Società in mano pubblica', 'Società comune il cui controllo è di un ente pubblico', 'Disciplina delle società private: fallisce'],
          ['Ente pubblico non economico', 'Persegue molti fini istituzionali; solo talvolta alcune iniziative sono vere imprese', 'Non fallisce; non è soggetto all’iscrizione se l’attività commerciale è solo accessoria'],
        ] },
        { t: 'p', text: 'Tra le società a partecipazione interamente pubblica ci sono le **società in house providing**: lo statuto sottopone la gestione a un **controllo analogo** a quello che l’ente esercita sui propri uffici, con poteri di comando più intensi di quelli di un normale socio.' },
        { t: 'p', text: 'L’ente pubblico può gestire anche **servizi pubblici**:' },
        { t: 'list', items: ['**A rilevanza economica** (gas, luce, acqua): si possono offrire con un margine di profitto, quindi esiste un mercato concorrenziale. La gestione avviene tramite società, anche in house.', '**Privi di rilevanza economica** (tipicamente i servizi sociali): si offrono solo per coprire i costi, quindi un mercato concorrenziale non è immaginabile.'] },
        { t: 'warn', text: '**Nessun ente pubblico**, economico o no, è soggetto a fallimento o concordato preventivo. Se invece l’impresa ha forma di **società**, si applica la disciplina di qualsiasi altra società, anche se il socio di controllo è pubblico.' },
        { t: 'h', text: 'L’impresa privata' },
        { t: 'p', text: 'È l’attività d’impresa esercitata in forma di diritto privato: **impresa individuale**, **società** o **altro ente privato non societario** (GEIE, consorzio con attività esterna, rete d’impresa, associazione, fondazione). Tra individuale e società non cambia molto: le società commerciali e le cooperative hanno sempre obbligo di pubblicità e di scritture contabili.' },
        { t: 'p', text: 'Più discusso il caso di **associazioni e fondazioni**, perché il codice civile non dice se si applica loro lo statuto dell’impresa. L’orientamento prevalente dice di **sì, per intero**, quando esercitano un’attività commerciale, che sia esclusiva, principale o solo secondaria. La riforma del **Terzo settore** (d.lgs. 117/2017 e 112/2017) ha confermato questa lettura.' },
      ],
    },
    {
      title: 'Le definizioni del Codice della crisi',
      blocks: [
        { t: 'p', text: 'Il **Codice della crisi d’impresa e dell’insolvenza** (d.lgs. 14/2019) raccoglie le procedure concorsuali prima divise tra legge fallimentare e legge 3/2012 sul sovraindebitamento. Restano fuori la liquidazione coatta amministrativa e l’amministrazione straordinaria delle grandi imprese in crisi. All’inizio detta alcune definizioni chiave.' },
        { t: 'def', term: 'Crisi', text: 'Stato di difficoltà economico-finanziaria che rende **probabile** l’insolvenza; per le imprese si manifesta come inadeguatezza dei flussi di cassa prospettici a far fronte alle obbligazioni. Il testo oggi in vigore precisa: quelle dei **successivi dodici mesi**.' },
        { t: 'def', term: 'Insolvenza', text: 'Stato del debitore che si manifesta con **inadempimenti o altri fatti esteriori** che dimostrano che **non è più in grado** di soddisfare regolarmente le proprie obbligazioni.' },
        { t: 'def', term: 'Sovraindebitamento', text: 'Crisi o insolvenza di consumatore, professionista, impresa minore, imprenditore agricolo, start-up innovativa e di ogni altro debitore non soggetto alla liquidazione giudiziale, alla liquidazione coatta amministrativa o ad altre procedure liquidatorie.' },
        { t: 'table', head: ['Nozione', 'Soglie', 'Come si legge'], rows: [
          ['Impresa minore', 'Attivo ≤ 300.000 € annui nei tre esercizi precedenti; ricavi ≤ 200.000 € annui nei tre esercizi; debiti anche non scaduti ≤ 500.000 €', 'Servono **tutti e tre** insieme; aggiornabili ogni tre anni con decreto'],
          ['Grandi imprese', 'Stato patrimoniale 20 mln €; ricavi netti 40 mln €; 250 dipendenti medi', 'Basta superarne **almeno due**'],
        ] },
        { t: 'example', title: 'Bottega Rossi', steps: ['Attivo 280.000: sotto soglia.', 'Ricavi 210.000: **sopra** soglia.', 'Debiti 400.000: sotto soglia.'], result: 'Non è impresa minore: basta superare un solo limite per uscire dalla categoria.' },
        { t: 'list', items: [
          '**Consumatore**: persona fisica che agisce per scopi estranei all’attività imprenditoriale, commerciale, artigiana o professionale, anche se socia di una società di persone, per i debiti estranei a quelli sociali.',
          '**Società pubbliche**: a controllo pubblico, a partecipazione pubblica e in house (d.lgs. 175/2016).',
          '**Gruppo di imprese**: società, imprese ed enti (escluso lo Stato) sottoposti a **direzione e coordinamento** (artt. 2497 e 2545-septies) per partecipazione o per contratto. Si presume, salvo prova contraria, che la eserciti chi consolida i bilanci, e che vi siano sottoposte le controllate.',
          '**Gruppi di rilevante dimensione**: madre e figlie da includere nel bilancio consolidato oltre i limiti della direttiva 2013/34/UE.',
          '**COMI** (centro degli interessi principali): il luogo in cui il debitore gestisce i suoi interessi in modo **abituale e riconoscibile dai terzi**.',
        ] },
      ],
    },
    {
      title: 'Inizio e fine dell’impresa',
      blocks: [
        { t: 'p', text: 'Vale il **criterio dell’effettività**: conta se il fenomeno impresa esiste davvero, non le formalità. Restano comunque dei dubbi in dottrina e giurisprudenza.' },
        { t: 'list', items: [
          '**Inizio**: la disciplina si applica da quando il soggetto compie atti concreti di esercizio, anche senza adempimenti formali. Contano anche la fase di **organizzazione** e gli **atti preparatori** (acquisto di macchinari, assunzioni), purché collegati e coordinati tra loro. Il motivo: con quegli atti l’imprenditore assume obbligazioni, nascono creditori e finanziatori da tutelare.',
          '**Fine**: la disciplina smette di applicarsi quando il fenomeno impresa viene meno nella realtà. Non basta che si fermino le macchine: conta anche la conclusione della **liquidazione**, cioè della disgregazione del complesso aziendale per pagare i creditori e, se resta qualcosa, soci o imprenditore.',
        ] },
        { t: 'flow', title: 'Fallimento dopo la cessazione (art. 10 l.f., oggi art. 33 CCII)', items: ['Cancellazione dal registro delle imprese', 'Il fallimento resta possibile **entro un anno**, se l’insolvenza è anteriore alla cessazione o nell’anno successivo', 'Impresa individuale o società cancellata **d’ufficio**: creditori e pubblico ministero possono provare che l’attività è continuata', 'In quel caso l’anno decorre dalla **cessazione effettiva**'] },
        { t: 'p', text: 'La cancellazione fa presumere l’estinzione dell’impresa. La presunzione è **assoluta** se la società si è cancellata volontariamente; **relativa** se la cancellazione è d’ufficio, per esempio per gravi inadempimenti: in quel caso si può dimostrare che l’attività è proseguita, spostando in avanti l’inizio dell’anno.' },
        { t: 'p', text: 'E l’impresa **mai iscritta** (società irregolare)? Non c’è una data di cancellazione. Per un orientamento minoritario, poiché va trattata peggio di chi è in regola, potrebbe fallire senza limiti di tempo. Prevale invece il **principio di effettività**, confermato dall’art. 33 CCII: l’anno decorre da quando l’attività è **effettivamente cessata**.' },
      ],
    },
    {
      title: 'A chi si imputa l’impresa',
      blocks: [
        { t: 'p', text: 'Bisogna capire chi è l’**imprenditore in senso giuridico**, cioè chi deve rispettare gli obblighi dello statuto e chi rischia il fallimento. Due criteri:' },
        { t: 'table', head: ['Criterio', 'Tipo', 'Chi è imprenditore'], rows: [
          ['Spendita del nome', 'Formale', 'Chi agisce **in nome proprio**'],
          ['Interesse perseguito', 'Sostanziale', 'Chi ha l’interesse all’attività e ne decide le sorti'],
        ] },
        { t: 'p', text: 'Se nome e interesse coincidono, nessun problema. Il caso difficile è quello del **prestanome**, spesso nullatenente, dietro cui c’è un **soggetto occulto** che decide e finanzia senza esporsi, per non rispondere con il proprio patrimonio. La regola base resta la **spendita del nome**: imprenditore è il prestanome. Così però il rischio ricadrebbe tutto sui creditori.' },
        { t: 'p', text: 'Per questo la giurisprudenza ha cercato di coinvolgere anche l’occulto. Lo qualifica come **impresa fiancheggiatrice**: fornisce le risorse per gli investimenti, prende le decisioni e partecipa ai risultati. Conseguenze:' },
        { t: 'list', items: [
          'Se fallisce l’impresa palese, il fallimento si ripercuote anche sul patrimonio di chi la fiancheggia.',
          'Se fallisce l’impresa fiancheggiatrice, ne restano fuori i creditori dell’impresa palese che non si sono fatti dare garanzie dall’occulto.',
        ] },
        { t: 'warn', text: '**Soci occulti e società occulta** (art. 147 l.f., oggi art. 256 CCII): il fallimento di una società con soci illimitatamente responsabili si estende ai soci, **anche occulti**, se si prova che sono davvero soci. E se dopo il fallimento di un imprenditore individuale emerge che l’impresa era di una società di cui egli era socio illimitatamente responsabile, falliscono anche la società e gli altri soci.' },
      ],
    },
  ],
  summary: [
    'Diritto commerciale: norme di diritto privato sulle attività produttive; tutela concorrenza, credito, trasparenza, stabilità delle imprese.',
    'Imprenditore (2082): attività economica organizzata, esercitata professionalmente, per produrre o scambiare beni o servizi; basta l’economicità, non il lucro.',
    'Agricolo (2135, ciclo biologico, connesse, non fallisce); commerciale (2195, residuale); piccolo (2083, prevalenza del lavoro proprio e familiare).',
    'Professionista imprenditore solo se la professione è elemento di un’attività organizzata in forma d’impresa (2238).',
    'Enti pubblici mai soggetti a fallimento; le società in mano pubblica sì. Associazioni e fondazioni con attività commerciale: statuto dell’impresa.',
    'Impresa minore: attivo ≤ 300.000, ricavi ≤ 200.000, debiti ≤ 500.000 €, tutte insieme; grandi imprese: superare due soglie su tre.',
    'Effettività per inizio e fine; fallimento entro un anno dalla cancellazione; imputazione per spendita del nome, con estensione a soci occulti.',
  ],
};

export default c;
