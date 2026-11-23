import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd5',
  intro:
    'Due temi accomunati dalla circolazione della ricchezza tra imprese. Prima le forme di cooperazione, in cui gli imprenditori collaborano restando autonomi: consorzi, società consortili, reti, associazioni temporanee. Poi i titoli di credito: perché chi li acquista è al sicuro, come circolano, cambiale e assegni, e i pagamenti elettronici.',
  sections: [
    {
      title: 'Cooperare restando autonomi',
      blocks: [
        { t: 'p', text: 'Con gli strumenti di **cooperazione** gli imprenditori, con un contratto, collaborano ma conservano di regola la propria **autonomia giuridica ed economica**. Con le forme di **concentrazione** invece nascono legami di partecipazione nella proprietà: si forma un’unica entità economica (il **gruppo**) o addirittura un nuovo soggetto (la **fusione**).' },
        { t: 'table', head: ['Forme strutturate', 'Forme flessibili'], rows: [
          ['Consorzi e società consortili', 'Contratti di rete e associazioni temporanee di imprese'],
          ['Richiedono sempre un’organizzazione comune', 'Possono non avere un’organizzazione rigida'],
          ['Collaborazione stabile e duratura', 'Spesso collaborazione occasionale per un obiettivo preciso'],
        ] },
      ],
    },
    {
      title: 'Il consorzio',
      blocks: [
        { t: 'def', term: 'Consorzio (art. 2602)', text: 'Contratto con cui più imprenditori istituiscono un’**organizzazione comune** per la **disciplina** o per lo **svolgimento** di determinate fasi delle rispettive imprese.' },
        { t: 'p', text: 'È uno strumento di **coordinamento** tra imprese. Se coordina lo svolgimento di fasi delle imprese, i consorziati cercano un **vantaggio economico diretto** (la **mutualità consortile**): un risparmio di spesa o un ricavo maggiore grazie a un ciclo produttivo o distributivo più razionale. Può servire anche a **limitare la concorrenza** tra i consorziati, ma oggi solo entro i limiti della **disciplina antitrust** (art. 2 l. 287/1990).' },
        { t: 'h', text: 'Costituzione e organizzazione' },
        { t: 'list', items: [
          'Contratto tra imprenditori in forma **scritta a pena di nullità** (art. 2603). Sono davvero essenziali solo **oggetto**, **obblighi** dei consorziati e **contributi** dovuti; gli altri elementi si ricavano dai principi generali o, per la durata, da norme suppletive.',
          'La legge detta poche regole derogabili e lascia ampio spazio all’autonomia privata.',
          '**Organo deliberativo**: tutti i consorziati, con il principio di **maggioranza**, calcolata **per teste** salvo patto diverso (art. 2606).',
          'Le **modifiche** del contratto si fanno per iscritto a pena di nullità e all’**unanimità**, salvo patto diverso (art. 2607).',
          '**Organo esecutivo** (art. 2608): le persone che dirigono il consorzio. Rispondono verso i consorziati secondo le regole del **mandato** e controllano che i consorziati adempiano i loro obblighi, compreso il versamento dei contributi.',
        ] },
        { t: 'h', text: 'Scioglimento e uscita' },
        { t: 'list', items: [
          'Il consorzio si scioglie per **scadenza del termine**, **conseguimento dell’oggetto** o impossibilità di conseguirlo, **volontà unanime** dei consorziati o delibera a **maggioranza** se c’è **giusta causa**, oltre alle cause previste dal contratto (art. 2611).',
          'Il singolo consorziato può uscire per **recesso** o essere **escluso**, nei casi previsti dal contratto e se perde la **qualità di imprenditore**.',
          'La quota di chi esce **accresce** proporzionalmente quelle degli altri (art. 2609).',
        ] },
        { t: 'warn', text: 'Negli appunti compaiono «art 2062» e «art 2069»: sono gli artt. **2602** e **2609**.' },
      ],
    },
    {
      title: 'Il consorzio con attività esterna',
      blocks: [
        { t: 'p', text: 'Nel consorzio con **attività interna** l’organizzazione serve solo a regolare i rapporti tra consorziati. In quello con **attività esterna** c’è un **ufficio** destinato a operare con i **terzi**: il consorzio diventa un soggetto autonomo.' },
        { t: 'list', items: [
          'È un **centro autonomo di imputazione**. Svolge un’attività **ausiliaria** delle imprese consorziate (art. 2195), quindi è **imprenditore commerciale** ed è soggetto alla **liquidazione giudiziale** (ex fallimento).',
          'Un **estratto del contratto** va iscritto nella sezione ordinaria del **registro delle imprese**, così come ogni modifica (art. 2612). Sta in giudizio in persona di chi ne ha la presidenza o la direzione.',
          'Ha **autonomia patrimoniale**: contributi e beni acquistati formano il **fondo consortile**. Per tutta la durata i consorziati non possono chiederne la **divisione** e i loro **creditori particolari** non possono aggredirlo (art. 2614).',
          'Entro **due mesi** dalla chiusura dell’esercizio redige una **situazione patrimoniale** secondo le norme sul bilancio delle s.p.a. e la deposita al registro (art. 2615-bis).',
        ] },
        { t: 'table', head: ['Obbligazione', 'Chi risponde (art. 2615)'], rows: [
          ['Assunta **in nome del consorzio** dai suoi rappresentanti', 'Solo il **fondo consortile**'],
          ['Assunta dagli organi **per conto di un singolo consorziato**', 'Quel consorziato, **in solido** con il fondo'],
          ['Consorziato insolvente', 'Il suo debito verso il consorzio si ripartisce tra gli altri, in proporzione alle quote'],
        ] },
        { t: 'warn', text: 'Gli appunti parlano di responsabilità «sussidiaria» del fondo per le obbligazioni assunte per conto dei consorziati: l’art. 2615 dice che il consorziato risponde **solidalmente** con il fondo.' },
      ],
    },
    {
      title: 'Società consortili, reti, ATI',
      blocks: [
        { t: 'p', text: 'Lo scopo consortile può essere l’oggetto di una **società consortile** (art. 2615-ter): si può usare **qualsiasi tipo societario** tranne la **società semplice**, e anche la **cooperativa**, in cui i soci realizzano lo scopo mutualistico integrando le proprie imprese o alcune fasi di esse.' },
        { t: 'p', text: 'La disciplina è discussa. La tesi prevalente applica **solo le norme del tipo** scelto. Una differenza però è scritta nella legge: l’atto costitutivo può obbligare i soci a versare, oltre ai conferimenti, **contributi periodici** per far funzionare l’impresa comune, cosa che in una società normale non si potrebbe imporre.' },
        { t: 'h', text: 'Il contratto di rete (art. 3 d.l. 5/2009)' },
        { t: 'p', text: 'Più imprenditori vogliono accrescere, da soli o insieme, la propria **capacità innovativa** e **competitività**. Sulla base di un **programma comune di rete** si obbligano a collaborare in ambiti predeterminati, a **scambiarsi informazioni o prestazioni** industriali, commerciali, tecniche o tecnologiche, o a **esercitare in comune** attività che rientrano nell’oggetto delle loro imprese. Non serve un’organizzazione comune: è più flessibile del consorzio.' },
        { t: 'list', items: [
          'Per le **agevolazioni fiscali** va redatto su **modello standard** ministeriale, per **atto pubblico** o **scrittura privata autenticata**.',
          'Deve indicare gli **obiettivi strategici** e come misurarne l’avanzamento.',
          'Deve contenere il **programma di rete**: diritti e obblighi di ciascuno e modi per realizzare lo scopo comune.',
          'Se c’è un **fondo patrimoniale comune**: misura e criteri di valutazione di conferimenti e contributi, regole di gestione. Al fondo si applicano, in quanto compatibili, gli artt. 2614 e 2615.',
          'Il fondo comune non dà da solo **soggettività** alla rete. Per le obbligazioni dell’organo comune legate al programma, i terzi possono rivalersi **solo sul fondo comune**.',
        ] },
        { t: 'h', text: 'Le associazioni temporanee di imprese' },
        { t: 'p', text: 'Sono una cooperazione **occasionale e contingente**: non creano un’organizzazione né un nuovo soggetto. Sono **contratti associativi atipici** (innominati). La legge ne disciplina alcune, come quelle per partecipare agli **appalti pubblici** (codice dei contratti pubblici).' },
      ],
    },
    {
      title: 'Perché esistono i titoli di credito',
      blocks: [
        { t: 'def', term: 'Titolo di credito', text: 'Documento, **cartaceo o elettronico**, che menziona un diritto il quale **circola insieme al documento**; è legittimato a esercitarlo chi ha il documento (artt. 1992 ss.).' },
        { t: 'p', text: 'Con la normale **cessione del credito** chi acquista rischia: il cedente potrebbe non essere titolare, e il debitore può opporgli tutte le eccezioni che aveva verso il cedente. La circolazione **cartolare** risolve il problema: il diritto è **incorporato** nel documento, e questo rende gli acquisti rapidi e sicuri.' },
        { t: 'table', head: ['Principio', 'Norma', 'Effetto'], rows: [
          ['Legittimazione attiva', 'Art. 1992 c. 1', 'Il possessore esercita il diritto **senza altre prove** di titolarità. Per i titoli scritturali conta l’**intestazione del conto** (art. 83-quinquies TUF)'],
          ['Legittimazione passiva', 'Art. 1992 c. 2', 'Il debitore che paga al possessore **senza dolo o colpa grave** è liberato, anche se il possessore non è il vero titolare'],
          ['Letteralità', 'Art. 1993', 'Il contenuto del diritto è **solo quello scritto** nel titolo'],
          ['Autonomia reale', 'Art. 1994', 'Chi acquista il possesso **in buona fede** secondo la legge di circolazione **non subisce rivendicazione**, anche se il dante causa non era titolare'],
          ['Autonomia obbligatoria', 'Art. 1993', 'La posizione di ogni acquirente è **indipendente** da quella dei precedenti'],
          ['Astrattezza', '—', 'Il titolo si **separa dal rapporto** che lo ha generato, irrilevante per i successivi possessori'],
        ] },
        { t: 'p', text: 'L’art. 1994 corrisponde all’art. 1153 sul possesso di beni mobili. La **buona fede** si presume (art. 1147) e consiste nell’ignorare che il titolo era di altri. Per i titoli **scritturali** vale lo stesso: chi ottiene la registrazione in base a un titolo idoneo e in buona fede non subisce pretese dei precedenti titolari (TUF).' },
        { t: 'p', text: 'In pratica: chi compra una cambiale o un’azione non deve temere che chi gliela cede non ne fosse titolare, né che il rapporto sia stato modificato o estinto prima di lui, perché nessuna di queste eccezioni gli è opponibile se **non risulta dal titolo**.' },
      ],
    },
    {
      title: 'Le eccezioni',
      blocks: [
        { t: 'p', text: 'Per l’art. 1993 il debitore può opporre al possessore solo le eccezioni **personali** a lui e quelle **reali**, opponibili a tutti. Quelle fondate sui rapporti con i **precedenti possessori** valgono solo se il possessore, acquistando, ha agito **intenzionalmente a danno del debitore**.' },
        { t: 'tree', root: 'Eccezioni del debitore', children: [
          { label: 'Reali: contro qualunque possessore', sub: [
            'Fondate sul testo e sulla forma del titolo (somma inferiore, difetti di forma, pagamenti parziali o proroghe annotati)',
            'Non riferibilità della firma al debitore: falsità, incapacità o difetto di rappresentanza all’emissione, violenza fisica',
          ] },
          { label: 'Personali: solo verso un possessore', sub: [
            'Difetto di titolarità (acquisto nullo, mala fede) o di legittimazione (manca il possesso qualificato)',
            'Rapporti personali con l’attuale possessore (per esempio compensazione)',
            'Rapporti con i precedenti possessori: inopponibili, salvo acquisto intenzionale a danno del debitore',
          ] },
        ] },
        { t: 'p', text: 'Per i titoli scritturali l’emittente può opporre all’intestatario del conto solo le eccezioni **personali** a lui e quelle **comuni** a tutti i titolari degli stessi diritti (art. 83-septies TUF).' },
        { t: 'example', title: 'La merce mai consegnata', steps: ['Andrea emette una cambiale a Bruno per merce mai arrivata.', 'Bruno la gira a Carla, che non sa nulla.', 'L’eccezione di mancata consegna è personale verso Bruno.'], result: 'Andrea deve pagare Carla; si rivarrà su Bruno. Se Carla avesse preso la cambiale apposta per togliere ad Andrea l’eccezione, Andrea potrebbe opporla anche a lei.' },
      ],
    },
    {
      title: 'Tipi di titoli e circolazione',
      blocks: [
        { t: 'list', items: [
          '**Titoli di finanziamento**: un credito a una somma di denaro (cambiali, obbligazioni).',
          '**Titoli partecipativi**: la partecipazione economica e organizzativa a un’impresa (azioni).',
          '**Altri valori finanziari**: diritti d’opzione, quote di fondi comuni e simili.',
          '**Titoli rappresentativi di merci** (art. 1996): il diritto alla consegna di merci depositate o trasportate, il loro possesso e il potere di disporne trasferendo il titolo.',
        ] },
        { t: 'p', text: 'Si ritiene, non senza contrasti, che valga il principio di **atipicità**: si possono creare titoli diversi da quelli previsti. Ma è titolo di credito solo il documento emesso per un’operazione di **finanziamento** facilmente **negoziabile**. Conta come il documento viene percepito dal **destinatario medio**: se appare destinato a circolare è un titolo, a prescindere dall’intento dell’emittente (art. 1366).' },
        { t: 'table', head: ['Titolo', 'Come circola', 'Chi è legittimato'], rows: [
          ['Al portatore (art. 2003)', 'Semplice consegna', 'Chi lo possiede'],
          ['All’ordine (art. 2008)', 'Consegna con **girata**: firma del girante sul titolo con il nome del nuovo creditore', 'Chi lo possiede in base a una **serie continua di girate**'],
          ['Nominativo (artt. 2021-2023)', 'Annotazione del nuovo titolare sul titolo e nel **registro dell’emittente**, oppure girata autenticata e poi aggiornamento del registro', 'Chi lo possiede con la **doppia intestazione**'],
          ['Scritturale (TUF)', 'Registrazioni tra i conti di cedente e cessionario', 'L’intestatario del conto'],
        ] },
        { t: 'p', text: 'Per i titoli all’ordine e nominativi si parla di **possesso qualificato**.' },
      ],
    },
    {
      title: 'La cambiale',
      blocks: [
        { t: 'p', text: 'Cambiale e assegno hanno una struttura simile: una **promessa** di pagamento del sottoscrittore al prenditore, oppure un **ordine** di pagamento del traente al trattario. La funzione è diversa: **cambiale tratta** e **pagherò** servono al **credito**, cioè a pagare più tardi; **assegno bancario** e **circolare** servono al **pagamento**, usando somme depositate in banca.' },
        { t: 'table', head: ['', 'Cambiale tratta', 'Pagherò (cambiale propria)'], rows: [
          ['Struttura', 'Ordine del traente al trattario di pagare il prenditore', 'Promessa dell’emittente di pagare il prenditore'],
          ['A chi si chiede il pagamento', 'Al trattario (che diventa obbligato se accetta)', 'All’emittente'],
        ] },
        { t: 'list', items: [
          '**Completa**: tutto ciò che regola il diritto sta nel documento, senza rinvii ad altri.',
          '**All’ordine**: circola con la **girata**, e il giratario diventa portatore legittimo (r.d. 1669/1933).',
          '**Astratta**: il rapporto tra traente ed emittente e primo prenditore non risulta dal titolo.',
          'Ogni firma aggiunta crea un’obbligazione cambiaria. Con l’**avallo** si garantisce il debito di un altro: l’avallante si obbliga **come l’avallato** (art. 35).',
          '**Indipendenza**: l’invalidità di un’obbligazione non tocca le altre (art. 7).',
          'Obbligati **diretti**: emittente, accettante e loro avallanti. **Di regresso**: traente, giranti e loro avallanti.',
          'Se è **bollata** è **titolo esecutivo**: il creditore può pignorare subito, senza sentenza né decreto ingiuntivo.',
        ] },
        { t: 'flow', title: 'Alla scadenza', items: [
          'Il portatore legittimo chiede il pagamento al trattario o all’emittente.',
          'Se l’obbligato principale non paga, il portatore può rivolgersi a sua scelta a qualunque altro obbligato.',
          'Se paga l’emittente o l’accettante, si estinguono tutti i rapporti cambiari.',
          'Se paga un altro obbligato, si rivale sui giranti precedenti, sul traente e sui loro avallanti.',
        ] },
      ],
    },
    {
      title: 'Gli assegni',
      blocks: [
        { t: 'p', text: 'L’**assegno bancario** presuppone un **conto corrente** con cui la banca autorizza il cliente a emettere assegni su di essa. Il cliente (**traente**) ordina alla banca (**trattaria**) di pagare una somma al portatore legittimo (**beneficiario**).' },
        { t: 'list', items: [
          '**Requisiti** (art. 1 r.d. 1736/1933): la parola assegno bancario, l’**ordine incondizionato** di pagare una somma determinata, il nome della banca trattaria, il luogo di pagamento, data e luogo di emissione, la **firma** del traente.',
          'Può essere intestato a un beneficiario, al portatore o allo stesso traente. Quello intestato circola con **girata**, salvo la clausola di **non trasferibilità**; quello al portatore con la consegna.',
          'È **titolo esecutivo**. Se non viene pagato, il mancato pagamento si constata con il **protesto** di un pubblico ufficiale e si esercita il **regresso** contro i giranti.',
          'Se lo si incassa nella banca trattaria, questa verifica copertura, firma, assenza di alterazioni e continuità delle girate. Se lo si versa in un’altra banca, l’importo è accreditato **salvo buon fine**.',
        ] },
        { t: 'p', text: 'L’**assegno circolare** ha la struttura di una **promessa**, come il pagherò: lo emette la **banca**, su richiesta del cliente, ed è lei a obbligarsi direttamente verso il beneficiario. Requisiti (art. 83): la parola assegno circolare, la **promessa incondizionata**, il prenditore, luogo e data di emissione, la firma della banca.' },
        { t: 'table', head: ['', 'Assegno bancario', 'Assegno circolare'], rows: [
          ['Struttura', 'Ordine del correntista alla banca', 'Promessa di pagamento della banca'],
          ['Presentazione', '**8 giorni** su piazza (stesso comune della filiale), **15** fuori piazza', '**30 giorni**'],
          ['Se si presenta in ritardo', 'Si perde il regresso contro i giranti; la banca può pagare finché il traente non revoca', '—'],
          ['Prescrizione contro la banca', '—', '**Tre anni**'],
        ] },
      ],
    },
    {
      title: 'I pagamenti elettronici',
      blocks: [
        { t: 'p', text: 'Negli strumenti **alternativi** non passano monete: si sposta un importo da un conto a un altro.' },
        { t: 'list', items: [
          '**Bonifico**: su iniziativa del **pagatore**, che ordina di trasferire una somma dal suo conto a un altro.',
          '**Addebito diretto**: su iniziativa del **beneficiario**, in base al consenso dato dal pagatore (d.lgs. 11/2010).',
          '**Carte di debito**: il conto si muove subito. **Carte di credito**: l’addebito sul conto è rinviato a dopo.',
        ] },
        { t: 'p', text: 'La **direttiva PSD** (2007/64/CE, recepita con d.lgs. 11/2010, che ha inserito il titolo V-ter nel TUB) regola tutti i pagamenti in euro nell’Unione, nazionali o transfrontalieri e **senza limiti di importo**. Si applica a banche, istituti di moneta elettronica, istituti di pagamento e Poste, e a tutti i clienti, con regole diverse per consumatori, microimprese e grandi imprese. È una disciplina **trasversale**: quando distingue, lo fa tra operazioni su iniziativa del **pagatore** e su iniziativa del **beneficiario**.' },
        { t: 'p', text: 'La **PSD2** (direttiva 2015/2366/UE) l’ha aggiornata a internet e mobile e ha aperto il mercato a nuovi operatori (**Third Party Provider**), con due nuovi servizi: l’**informazione sui conti**, per avere un quadro unico di più conti, e la **disposizione di ordini di pagamento**, per pagare online con un bonifico tramite un terzo, dando al venditore la certezza dell’incasso. Il regolamento UE 2015/751 fissa i limiti alle commissioni interbancarie sulle carte.' },
      ],
    },
  ],
  summary: [
    'Cooperazione: le imprese restano autonome. Forme strutturate (consorzi) e flessibili (reti, ATI).',
    'Consorzio: organizzazione comune per fasi delle imprese; scritto a pena di nullità; maggioranza per teste, modifiche all’unanimità.',
    'Attività esterna: imprenditore commerciale, iscrizione, fondo consortile intoccabile; in nome del consorzio risponde solo il fondo.',
    'Società consortile: qualsiasi tipo tranne la società semplice; contributi periodici. Rete: programma comune, fondo che risponde da solo.',
    'Titoli di credito: legittimazione (1992), letteralità ed eccezioni (1993), acquisto in buona fede (1994).',
    'Eccezioni reali verso tutti; personali verso un possessore; quelle verso i precedenti solo se acquisto a danno del debitore.',
    'Portatore: consegna; ordine: girata; nominativo: doppia intestazione; scritturale: conto.',
    'Cambiale: completa, astratta, esecutiva se bollata; avallo; indipendenza; obbligati diretti e di regresso.',
    'Assegno bancario 8/15 giorni; circolare 30 giorni e prescrizione tre anni.',
  ],
};

export default c;
