import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd9',
  intro:
    'La s.p.a. è la società pensata per raccogliere capitale da molti investitori che non vogliono gestire né rischiare oltre quanto hanno messo. In questo capitolo la seguiamo dalla nascita: atto costitutivo, iscrizione, nullità, modifiche e patti parasociali; poi il capitale e i conferimenti, che devono essere effettivi; le azioni con i loro diritti, le categorie e la circolazione; aumento e riduzione del capitale, opzione e recesso; infine obbligazioni e strumenti finanziari.',
  sections: [
    {
      title: 'L’idea della s.p.a.',
      blocks: [
        { t: 'p', text: 'La s.p.a. nasce per raccogliere risorse presso investitori **anonimi**, che non vogliono occuparsi della gestione né rispondere dei debiti. La gestione va ad **amministratori** professionali; gli investitori, come soci, mantengono il potere di **controllo**. Il potere e i risultati si distribuiscono secondo il capitale investito: è il principio **plutocratico**.' },
        { t: 'list', items: [
          '**Autonomia patrimoniale perfetta**: delle obbligazioni sociali risponde solo la società con il suo patrimonio (art. 2325). Il socio rischia solo il conferimento.',
          'Il capitale è diviso in **azioni**: frazioni standard e uguali, facili da valutare e da **trasferire** senza toccare l’organizzazione.',
          'Le antenate sono le **compagnie coloniali** dei secoli XVI e XVII. Tappe moderne: il codice civile del 1942, il **TUF** (d.lgs. 58/1998) per le società quotate, la **riforma** del d.lgs. 6/2003, che ha ampliato l’autonomia statutaria e curato di più amministrazione e controlli.',
        ] },
        { t: 'p', text: 'Il tipo è unico, ma l’uso è vario: grandi e piccole, aperte o chiuse (familiari), che si rivolgono o no al mercato, quotate o no, private o pubbliche. Per questo c’è un regime **comune**, uno per le società che fanno **ricorso al mercato del capitale di rischio** e uno per le altre; le **quotate** hanno in più le regole del TUF.' },
      ],
    },
    {
      title: 'La s.p.a. con socio unico',
      blocks: [
        { t: 'p', text: 'Se tutte le azioni appartengono a una persona, dalla nascita o dopo, la società **non si scioglie**. Ma ci sono oneri in più.' },
        { t: 'list', items: [
          '**Conferimenti**: il socio unico fondatore versa subito **tutto** il denaro. Se diventa unico dopo, versa il residuo entro **90 giorni** (art. 2342).',
          '**Pubblicità**: gli amministratori depositano nel registro una **dichiarazione** con i dati del socio unico, e lo stesso quando torna la pluralità; se non lo fanno può farlo il socio (art. 2362).',
          'Se mancano i versamenti o la pubblicità, in caso di **insolvenza** della società il socio unico risponde **illimitatamente** delle obbligazioni sorte mentre era unico (art. 2325). È una responsabilità **sussidiaria**, e il socio **non fallisce** con la società.',
          'I **contratti** tra la società e il socio unico sono opponibili ai creditori solo se risultano dal **libro delle adunanze del CdA** o da atto scritto con **data certa** anteriore al pignoramento (art. 2362 c. 5).',
        ] },
      ],
    },
    {
      title: 'La costituzione',
      blocks: [
        { t: 'p', text: 'Non basta il contratto o l’atto unilaterale: serve un **procedimento** che si chiude con l’**iscrizione** nel registro, da cui la società acquista la **personalità giuridica** (art. 2331).' },
        { t: 'h', text: 'Atto costitutivo e statuto (art. 2328)' },
        { t: 'p', text: 'Si redige per **atto pubblico**, così il notaio certifica le dichiarazioni e controlla la conformità alla legge. Lo **statuto** contiene le regole di funzionamento e, anche se è un atto separato, è **parte integrante** dell’atto costitutivo.' },
        { t: 'table', head: ['Contenuto', 'Note'], rows: [
          ['Dati dei soci e dei promotori, numero di azioni di ciascuno', '—'],
          ['**Denominazione** con «società per azioni», **sede** e sedi secondarie', 'Per la sede basta il comune'],
          ['**Oggetto** sociale', '—'],
          ['**Durata**; se a tempo indeterminato, il periodo (massimo un anno) dopo cui il socio può recedere', '—'],
          ['**Capitale** sottoscritto e versato', '—'],
          ['Numero, eventuale valore nominale, caratteristiche e circolazione delle **azioni**', 'Struttura finanziaria: se manca, vale la legge'],
          ['Valore dei **conferimenti in natura** e dei crediti', 'Idem'],
          ['Regole sulla ripartizione degli **utili**', 'Idem'],
          ['**Benefici** ai promotori o fondatori', 'Al massimo **un decimo** degli utili netti per **cinque anni**'],
          ['Spese di costituzione a carico della società', '—'],
          ['**Sistema di amministrazione**, numero e poteri degli amministratori, chi rappresenta', 'Se manca, sistema **tradizionale** (CdA e collegio sindacale)'],
          ['Numero dei **sindaci**, **primi** amministratori, sindaci e revisore', 'Struttura di governo'],
        ] },
        { t: 'h', text: 'Le condizioni (art. 2329)' },
        { t: 'list', items: [
          'Capitale **interamente sottoscritto**, di almeno **50.000 €**: è un impegno reale, non un programma.',
          'Rispetto delle regole sui **conferimenti**: almeno il **25%** del denaro versato in **banca** e il **100%** degli altri conferimenti, con valore pari al capitale.',
          'Le **autorizzazioni** eventualmente richieste per l’oggetto.',
        ] },
        { t: 'flow', items: [
          'Atto costitutivo per atto pubblico',
          'Il **notaio** lo deposita al registro entro **20 giorni**, con i documenti delle condizioni; se non lo fa, può farlo ogni socio (art. 2330)',
          'L’ufficio fa un controllo solo **formale**',
          'Iscrizione: nasce la persona giuridica',
        ] },
        { t: 'h', text: 'Prima dell’iscrizione' },
        { t: 'list', items: [
          'Degli atti compiuti in nome della società rispondono **illimitatamente e solidalmente** chi li ha compiuti, il socio unico fondatore e i soci che li hanno decisi o autorizzati; nella costituzione per pubblica sottoscrizione, i **promotori** (art. 2338).',
          'La società, una volta iscritta, risponde se li **approva**, liberando chi ha agito; si ritiene debba approvare quelli necessari alla costituzione.',
          'I sottoscrittori sono vincolati ai conferimenti; il vincolo cade se l’iscrizione non avviene entro **90 giorni**.',
          'È vietato emettere **azioni** prima dell’iscrizione.',
          'Per il resto la società in formazione segue le regole della **società semplice**.',
        ] },
      ],
    },
    {
      title: 'Nullità e modifiche dello statuto',
      blocks: [
        { t: 'def', term: 'Nullità (art. 2332)', text: 'Dopo l’iscrizione la nullità si pronuncia solo per: mancanza dell’**atto pubblico**; **illiceità dell’oggetto**; mancanza di ogni indicazione su **denominazione, conferimenti, capitale o oggetto**. Non valgono le altre cause generali, né annullabilità o inefficacia.' },
        { t: 'list', items: [
          'Non è **retroattiva**: gli atti compiuti dopo l’iscrizione restano efficaci.',
          'I soci restano obbligati ai **conferimenti** finché i creditori non sono pagati.',
          'La sentenza nomina i **liquidatori**: la società si scioglie (art. 2484).',
          'La nullità si **sana** eliminandone la causa, con iscrizione nel registro.',
          'Per il resto valgono le regole generali: azione **imprescrittibile**, la può fare chiunque vi abbia interesse.',
          'La nullità di una singola **clausola** non si estende all’atto, anche se era determinante. Quella della singola **partecipazione** non è retroattiva: il socio riceve la quota di liquidazione, non il conferimento.',
        ] },
        { t: 'h', text: 'Modifiche dello statuto (art. 2436)' },
        { t: 'list', items: [
          'Le decide l’**assemblea straordinaria**, con i suoi quorum. Per alcune materie non strategiche lo statuto può affidarle agli **amministratori** (o al consiglio di sorveglianza).',
          'Il **notaio** che verbalizza controlla la legalità e chiede l’iscrizione entro **30 giorni**.',
          'Se ritiene la delibera illegittima, lo comunica agli amministratori. Questi entro **30 giorni** possono convocare l’assemblea per rimediare o ricorrere al **tribunale**, che può ordinare l’iscrizione con decreto reclamabile. Se non fanno nulla, la delibera diventa **inefficace**.',
          'La modifica ha effetto solo dall’**iscrizione**. Poi si deposita il testo aggiornato dello statuto (pubblicità notizia).',
          'L’invalidità delle modifiche segue le regole sulle **delibere** (artt. 2377 ss.). Aumenti e riduzioni di capitale, trasformazioni, fusioni e scissioni non si possono più invalidare dopo l’iscrizione (artt. 2379-ter, 2500-bis, 2504-quater).',
        ] },
        { t: 'warn', text: 'Gli appunti dicono che le modifiche del capitale si approvano in assemblea **ordinaria**: aumenti e riduzioni del capitale sono competenza dell’assemblea **straordinaria** (salvo delega agli amministratori e la riduzione obbligatoria per perdite).' },
      ],
    },
    {
      title: 'I patti parasociali',
      blocks: [
        { t: 'p', text: 'Sono accordi tra alcuni o tutti i soci, **esterni** allo statuto, che vincolano il **voto** (**sindacati di voto**) o la **vendita** delle azioni (**sindacati di blocco**). Servono a proteggere l’investimento di ciascuno, non lo scopo sociale.' },
        { t: 'list', items: [
          'Hanno efficacia solo **obbligatoria** tra chi li firma: violarli porta al più al **risarcimento**, non rende invalide le delibere né le vendite di azioni.',
          'Per i patti su voto, circolazione e controllo delle s.p.a.: durata massima **cinque anni** (un termine più lungo si riduce a cinque); senza termine, ciascuno può **recedere** con **180 giorni** di preavviso (art. 2341-bis).',
          'Nelle società che fanno ricorso al mercato del capitale di rischio vanno **comunicati** alla società, dichiarati all’apertura di ogni assemblea, verbalizzati e depositati al registro (art. 2341-ter). Per le quotate ci sono gli artt. 122-123 TUF.',
        ] },
        { t: 'warn', text: 'Gli appunti scrivono «180 gg (3 mesi)»: 180 giorni sono **sei mesi**.' },
      ],
    },
    {
      title: 'Il capitale sociale',
      blocks: [
        { t: 'p', text: 'La raccolta è **essenziale** con le azioni, che creano gli azionisti, titolari di diritti patrimoniali e amministrativi; **eventuale** con gli strumenti finanziari partecipativi e con le **obbligazioni**, che sono capitale di **debito**.' },
        { t: 'list', items: [
          'Il capitale deve essere di almeno **50.000 €** e **interamente sottoscritto** (art. 2329); la cifra è nello statuto e si cambia solo modificandolo.',
          '**Vincolo di non distribuzione**: niente utili se il capitale è perso finché non è reintegrato o ridotto (art. 2433); la restituzione dei conferimenti passa per la **riduzione reale**, con l’opposizione dei creditori (art. 2445).',
          'Se scende sotto il minimo, la società deve **ricostituirlo**, **trasformarsi** o **sciogliersi** (artt. 2447, 2484), salvo concordato o accordi di ristrutturazione, che sospendono queste regole.',
        ] },
        { t: 'h', text: 'I conferimenti' },
        { t: 'table', head: ['Conferimento', 'Regola'], rows: [
          ['Denaro', 'È la regola, se lo statuto non dice altro. Almeno il **25%** alla sottoscrizione, depositato in banca fino all’iscrizione (il **100%** con socio unico)'],
          ['Beni in natura e crediti', 'Azioni **liberate subito**; il bene in proprietà o godimento deve essere subito disponibile'],
          ['Opera e servizi', '**Vietati** (art. 2342 c. 5): la società non ne avrebbe il pieno controllo'],
          ['Prestazioni accessorie (art. 2345)', 'Oltre al conferimento, prestazioni **non in denaro** previste dallo statuto; le azioni circolano solo con il consenso degli amministratori; si modificano con il consenso di tutti'],
        ] },
        { t: 'list', items: [
          'Chi cede azioni non liberate resta obbligato con l’acquirente per **tre anni** dall’annotazione nel libro dei soci.',
          '**Socio moroso** (art. 2344): dopo una diffida pubblicata in Gazzetta Ufficiale e **15 giorni**, la società offre le sue azioni agli altri soci in proporzione, poi sul mercato tramite banca. Se nessuno compra, il socio **decade**: le azioni si annullano e il capitale si riduce; la società trattiene quanto riscosso e chiede i danni. Il moroso **non vota**.',
        ] },
        { t: 'h', text: 'La stima dei conferimenti in natura (art. 2343)' },
        { t: 'flow', items: [
          'Relazione **giurata** di un esperto nominato dal **tribunale**, allegata all’atto: il valore è almeno pari a quello attribuito',
          'Gli **amministratori** controllano la stima entro **180 giorni** dall’iscrizione; nel frattempo le azioni sono inalienabili e depositate',
          'Se il valore è inferiore di **oltre un quinto**, il capitale si **riduce** e si annullano le azioni scoperte, salvo che il socio versi la differenza o receda',
          'Gli amministratori depositano al registro una dichiarazione sui beni e il loro valore',
        ] },
        { t: 'p', text: 'La stima garantisce che le azioni corrispondano al rischio reale e che i terzi possano fidarsi del capitale dichiarato. Non serve (art. 2343-ter) quando si conferiscono **titoli** al prezzo medio di mercato, beni al **fair value** del bilancio revisionato senza rilievi dell’esercizio precedente, o beni valutati da un **esperto indipendente** qualificato da non più di **sei mesi**.' },
        { t: 'h', text: 'Gli acquisti pericolosi (art. 2343-bis)' },
        { t: 'p', text: 'Se nei **due anni** dall’iscrizione la società compra da **promotori, fondatori, soci o amministratori** beni o crediti per almeno **un decimo** del capitale, serve l’**autorizzazione dell’assemblea**, con una **stima** a disposizione dei soci nei 15 giorni prima. Sono esclusi gli acquisti correnti a condizioni normali, quelli sotto controllo dell’autorità e quelli in mercati regolamentati. Se si viola la procedura, amministratori e venditore rispondono in solido dei danni.' },
        { t: 'h', text: 'Gli apporti fuori capitale' },
        { t: 'list', items: [
          '**Sovrapprezzo**: una somma in più rispetto al valore nominale. È obbligatorio negli aumenti con esclusione dell’opzione (art. 2441 c. 6).',
          '**Conferimenti non proporzionali** (art. 2346 c. 4): un socio conferisce più di quanto gli corrisponde in azioni, per darne di più a un altro. Il totale dei conferimenti non può essere inferiore al capitale.',
          '**Versamenti in conto capitale** o a fondo perduto: risorse date per esigenze future o per coprire perdite, senza aumentare il capitale. Si restituiscono solo in liquidazione.',
        ] },
      ],
    },
    {
      title: 'Le azioni',
      blocks: [
        { t: 'p', text: 'La parola «azione» ha tre significati: **parte del capitale**, **insieme di diritti** e obblighi del socio, **documento** che serve a esercitarli e trasferirli. Le azioni sono l’unità minima di investimento: **fungibili**, spersonalizzate, percepite come un bene che circola.' },
        { t: 'list', items: [
          'Il **valore nominale** è la parte di capitale coperta dal conferimento ed è uguale per tutte; se lo statuto non lo indica, si ricava dividendo il capitale per il numero di azioni (art. 2346).',
          'Il **valore reale** è diverso: c’è un valore **contabile**, dal bilancio, e uno **effettivo**, che considera anche le prospettive di reddito.',
          '**Indivisibili** (art. 2347): in comproprietà i diritti li esercita un **rappresentante comune**. Lo statuto può raggrupparle o frazionarle cambiando il valore nominale.',
          '**Inscindibili**: non si possono cedere singoli diritti separati dall’azione.',
          '**Uguali** (art. 2348): uguali diritti per azioni della stessa categoria. Le differenze dipendono dalla **categoria**, mai dalla persona del socio.',
        ] },
        { t: 'h', text: 'I diritti dell’azionista' },
        { t: 'list', items: [
          '**Patrimoniali**: **utili** e **quota di liquidazione**. Il diritto all’utile nasce solo se c’è un utile **realmente conseguito** da un bilancio approvato, se il patrimonio netto resta almeno pari al capitale e se l’**assemblea** delibera di distribuirlo (art. 2433).',
          '**Amministrativi**: **intervento** in assemblea e **voto** (artt. 2351, 2370), con cui il socio incide sull’organizzazione e, nominando e revocando gli amministratori, sulla gestione.',
        ] },
        { t: 'h', text: 'Il voto' },
        { t: 'list', items: [
          '**Un’azione, un voto** (art. 2351 c. 1).',
          'Azioni **senza voto**, a voto **limitato** a certi argomenti o **condizionato**: insieme non oltre la **metà** del capitale.',
          'Azioni a **voto plurimo**, anche per argomenti o condizioni: fino a **dieci** voti per azione (l. 21/2024). Vietate nelle **quotate** (art. 127-sexies TUF), dove è ammesso il voto maggiorato per chi detiene a lungo.',
          'Lo statuto può fissare un **tetto** ai voti di un socio o **scaglionarli**.',
        ] },
        { t: 'warn', text: 'Gli appunti indicano un massimo di tre voti per azione: dal 2024 il limite è **dieci**. Correggi anche «clausola di godimento» in **clausola di gradimento** e «art 126-sexies cc» in **art. 127-sexies TUF**.' },
        { t: 'h', text: 'Azioni speciali (art. 2348)' },
        { t: 'p', text: 'Lo statuto può creare **categorie** con diritti diversi per genere o misura. Non c’è un elenco chiuso; i limiti sono il divieto di **patto leonino**, l’equilibrio rischio-potere nel voto e il divieto di voto plurimo nelle quotate.' },
        { t: 'list', items: [
          '**Privilegiate**: utile maggiorato o garantito, minore incidenza delle perdite.',
          '**Correlate** (art. 2350): diritti legati ai risultati di un **settore** dell’attività.',
          '**Di godimento** (art. 2353): date a chi è stato rimborsato del valore nominale in una riduzione non proporzionale. Di regola senza voto, partecipano agli utili solo dopo un dividendo pari all’interesse legale alle altre azioni, e in liquidazione dopo il rimborso delle altre.',
          '**Ai dipendenti** (art. 2349): assegnate con utili, se lo statuto lo prevede.',
          'È discusso se una categoria possa avere **veto** o il diritto di nominare amministratori.',
          'Se una delibera **pregiudica** i diritti di una categoria, serve anche l’approvazione della sua **assemblea speciale** (art. 2376), che funziona come la straordinaria.',
        ] },
        { t: 'h', text: 'Pegno, usufrutto, sequestro (art. 2352)' },
        { t: 'p', text: 'Il **voto** spetta, salvo patto contrario, al **creditore pignoratizio** o all’**usufruttuario**; in caso di sequestro al **custode**. L’**opzione** resta sempre al **socio**. Gli altri diritti amministrativi con pegno o usufrutto spettano sia al socio sia all’altro; con sequestro al custode.' },
        { t: 'h', text: 'Diritti della minoranza' },
        { t: 'list', items: [
          'Chiedere la **convocazione** dell’assemblea (art. 2367), il **rinvio** della riunione (art. 2374), **impugnare** le delibere (art. 2377).',
          '**Denunciare** al collegio sindacale fatti censurabili degli amministratori (art. 2408) o al **tribunale** il fondato sospetto di **gravi irregolarità** (art. 2409).',
        ] },
      ],
    },
    {
      title: 'Titoli azionari e circolazione',
      blocks: [
        { t: 'list', items: [
          'Fuori dai mercati regolamentati le azioni possono essere **titoli cartacei**; quelle quotate esistono solo in forma **scritturale** (artt. 83-bis ss. TUF). Lo statuto può anche **escludere** l’emissione dei titoli.',
          'Ai titoli si applicano le regole dei titoli di credito: **acquisto in buona fede** senza rivendicazione (art. 1994) e inopponibilità delle eccezioni verso i precedenti possessori (art. 1993).',
          'Le azioni delle società italiane devono essere **nominative**, salvo eccezioni come le azioni di risparmio e le Sicav.',
          'Si trasferiscono con **doppia annotazione** sul titolo e nel libro dei soci (art. 2022) o con **girata autenticata** (art. 2023). Se le azioni non sono liberate, firma anche il giratario. Chi ha una serie continua di girate è legittimato.',
          'Con la **dematerializzazione** circolazione e legittimazione passano per i conti degli **intermediari**, che rilasciano le certificazioni. I diritti patrimoniali si esercitano solo tramite loro; quelli amministrativi anche personalmente.',
          'Senza titoli, il trasferimento vale verso la società dall’iscrizione nel **libro dei soci** (art. 2355).',
        ] },
        { t: 'h', text: 'Limiti alla circolazione (art. 2355-bis)' },
        { t: 'p', text: 'La regola è la **libera** circolazione, ma lo statuto può limitarla per proteggere gli assetti. I limiti devono risultare dal titolo.' },
        { t: 'list', items: [
          '**Divieto** di trasferimento per massimo **cinque anni** dalla costituzione o dall’introduzione della clausola.',
          '**Prelazione**: chi vende deve offrire prima agli altri soci.',
          '**Gradimento**: il trasferimento richiede il consenso di un organo secondo criteri fissati prima. Il **mero gradimento**, senza criteri, vale solo se prevede l’**obbligo di acquisto** da parte di società o soci o il **recesso** di chi vuole vendere.',
          'Se si violano, il trasferimento è **inefficace verso la società**: l’acquirente non può esercitare i diritti.',
        ] },
      ],
    },
    {
      title: 'Aumento e riduzione del capitale',
      blocks: [
        { t: 'table', head: ['Operazione', 'Chi decide', 'Regole'], rows: [
          ['Aumento a pagamento', 'Assemblea straordinaria, o amministratori delegati dallo statuto per **5 anni** fino a un tetto (art. 2443)', 'Prima vanno liberate le azioni già emesse (art. 2438). Se non è tutto sottoscritto nel termine, l’aumento vale per la parte raccolta solo se la delibera lo prevede'],
          ['Aumento gratuito (art. 2442)', 'Assemblea straordinaria', 'Riserve disponibili passano a capitale; nuove azioni uguali alle vecchie ai soci in proporzione, oppure aumento del valore nominale'],
          ['Riduzione reale (art. 2445)', 'Assemblea straordinaria', 'Eseguibile dopo **90 giorni** dall’iscrizione se i creditori non si oppongono; con opposizione decide il tribunale'],
          ['Riduzione per perdite oltre 1/3 (art. 2446)', 'Assemblea convocata senza indugio', 'Se entro l’esercizio successivo la perdita non scende sotto il terzo, la riduzione è **obbligatoria**; se l’assemblea non la fa, la dispone il tribunale su richiesta di amministratori e sindaci'],
          ['Perdite sotto il minimo (art. 2447)', 'Assemblea senza indugio', 'Ridurre e insieme aumentare sopra il minimo, **trasformare** o **sciogliere**'],
        ] },
        { t: 'p', text: 'La riduzione **nominale** abbassa il valore nominale di tutte le azioni o ne estingue alcune. Le azioni si estinguono anche con lo scioglimento del rapporto di un socio (moroso, recesso).' },
        { t: 'example', title: 'Delta s.p.a.', steps: ['Capitale 300.000 €; netto sceso a 180.000 €.', 'Perdita 120.000 € > un terzo (100.000).', 'Convocare l’assemblea; se nell’esercizio dopo resta oltre il terzo, ridurre il capitale.', 'Il netto resta sopra 50.000 €: non scatta il 2447.'] },
        { t: 'h', text: 'Il diritto di opzione (art. 2441)' },
        { t: 'p', text: 'Le nuove azioni vanno offerte ai soci **in proporzione** a quelle che hanno: così non cambiano i rapporti tra soci e gli amministratori non possono scegliere a chi venderle. L’offerta si deposita al registro e si pubblica sul sito; il termine per esercitarla è di almeno **15 giorni**.' },
        { t: 'list', items: [
          'Nelle non quotate chi ha esercitato l’opzione ha la **prelazione** sulle azioni rimaste (inoptate).',
          'Nelle quotate i diritti non esercitati si offrono in **borsa**.',
          'L’opzione si può **escludere** solo quando le azioni si liberano con **conferimenti in natura**, quando lo esige l’**interesse della società**, o per offrirle ai **dipendenti** della società o del gruppo. Si paga un **sovrapprezzo**.',
        ] },
      ],
    },
    {
      title: 'Il recesso',
      blocks: [
        { t: 'p', text: 'È il potere del socio di uscire con una dichiarazione unilaterale e farsi liquidare. Serve contro cambiamenti importanti decisi dalla maggioranza.' },
        { t: 'table', head: ['Cause', 'Esempi', 'Norma'], rows: [
          ['**Inderogabili**', 'Modifica significativa dell’**oggetto**, **trasformazione**, sede all’**estero**, revoca della liquidazione, eliminazione di cause di recesso, modifiche ai criteri di liquidazione o ai diritti di **voto** e di partecipazione. Nullo ogni patto che lo escluda o lo renda più gravoso', 'Art. 2437 c. 1'],
          ['**Derogabili**', '**Proroga** del termine, introduzione o rimozione di **vincoli alla circolazione**', 'Art. 2437 c. 2'],
          ['**Statutarie**', 'Ulteriori cause legate a mutamenti organizzativi, non a semplici vicende economiche', 'Art. 2437 c. 4'],
          ['**Ad nutum**', 'Società **a tempo indeterminato** non quotata: in ogni momento con **180 giorni** di preavviso (lo statuto può portarlo fino a un anno)', 'Art. 2437 c. 3'],
        ] },
        { t: 'warn', text: 'Gli appunti dicono che nelle non quotate il recesso libero spetta sempre: spetta solo se la società è **a tempo indeterminato**, con 180 giorni di preavviso.' },
        { t: 'list', items: [
          'Può recedere chi **non ha votato a favore**, anche solo per una parte delle azioni.',
          'Si esercita con **raccomandata** entro **15 giorni** dall’iscrizione della delibera; se la causa non è una delibera, entro **30 giorni** dalla conoscenza del fatto. Le azioni restano depositate.',
          '**Valore** delle non quotate: lo fissano gli **amministratori**, sentiti sindaci e revisore, considerando patrimonio a valori **reali**, prospettive di reddito ed eventuale valore di mercato. I soci possono conoscerlo nei 15 giorni prima dell’assemblea e contestarlo: allora decide un **esperto** del tribunale.',
          '**Quotate**: media dei prezzi di chiusura dei **sei mesi** prima dell’avviso di convocazione (art. 2437-ter).',
        ] },
        { t: 'flow', title: 'Liquidazione del recedente (art. 2437-quater)', items: [
          'Offerta in **opzione** agli altri soci al valore stimato',
          'Collocamento presso **terzi** da parte degli amministratori',
          '**Acquisto** da parte della società con riserve disponibili e utili',
          '**Riduzione** del capitale; se i creditori si oppongono con successo, **scioglimento** (o revoca della delibera che ha causato il recesso)',
        ] },
      ],
    },
    {
      title: 'Le obbligazioni',
      blocks: [
        { t: 'p', text: 'Con le **obbligazioni** la società raccoglie capitale di **debito**: deve restituire la somma a scadenza e pagare **interessi**. Sono titoli **di massa**, emessi in serie di uguale valore in un’unica operazione. Possono essere semplici o più complesse, con interessi legati a parametri.' },
        { t: 'list', items: [
          'Le emettono gli **amministratori**, salvo diversa previsione di legge o statuto, con **verbale notarile** depositato e iscritto (art. 2410).',
          '**Postergate**: rimborsate solo dopo gli altri creditori. **Partecipative**: interessi variabili secondo l’andamento della società (art. 2411). Alle obbligazioni si assimilano gli strumenti di debito con rimborso legato ai risultati.',
          'Titoli nominativi o al portatore, con le indicazioni dell’art. 2414; c’è un **libro delle obbligazioni**.',
        ] },
        { t: 'warn', text: 'Gli appunti citano l’art. 2440 per la competenza ad emettere e l’art. 2441 per obbligazioni postergate e partecipative: sono gli **artt. 2410** e **2411**.' },
        { t: 'h', text: 'Il limite all’emissione (art. 2412)' },
        { t: 'p', text: 'Non oltre il **doppio** di **capitale + riserva legale + riserve disponibili** dell’ultimo bilancio approvato; i sindaci attestano il rispetto. Nel calcolo entrano anche le garanzie date per obbligazioni di altre società.' },
        { t: 'example', title: 'Il limite di emissione', steps: ['Capitale 500.000 + riserva legale 80.000 + riserve disponibili 120.000 = 700.000 €.', 'Doppio: 1.400.000 €.'], result: 'Oltre, solo nei casi di esenzione.' },
        { t: 'list', items: [
          'Sottoscrizione da **investitori professionali** vigilati; se rivendono a non professionali, ne garantiscono la solvenza.',
          'Obbligazioni destinate alla **quotazione** o che danno diritto ad acquistare **azioni**.',
          'Obbligazioni garantite da **ipoteca di primo grado** sugli immobili della società, fino a **due terzi** del loro valore: non si contano.',
          '**Autorizzazione governativa** per ragioni di economia nazionale.',
        ] },
        { t: 'h', text: 'La tutela degli obbligazionisti' },
        { t: 'list', items: [
          'L’**assemblea degli obbligazionisti**, che funziona come la straordinaria, decide su fondo spese, nomina e revoca del rappresentante comune, modifiche delle condizioni del prestito, proposte di concordato e altri interessi comuni.',
          'Il **rappresentante comune**, anche non obbligazionista (art. 2417), nominato dall’assemblea o dal tribunale: esegue le delibere, tutela gli interessi comuni, assiste all’assemblea dei soci e consulta i libri.',
          'Fuori dagli interessi comuni ognuno agisce **individualmente**, salvo che l’assemblea abbia approvato la condotta della società (art. 2419).',
        ] },
        { t: 'h', text: 'Le obbligazioni convertibili (art. 2420-bis)' },
        { t: 'p', text: 'Danno il diritto di trasformare il credito in **azioni** secondo un rapporto di cambio: il capitale di debito diventa capitale di rischio. Le delibera l’**assemblea straordinaria**, perché insieme serve un **aumento di capitale** al servizio della conversione. Vanno offerte in **opzione** ai soci. Se poi si fa un altro aumento a pagamento, l’opzione spetta anche agli obbligazionisti, in proporzione al cambio; aumenti gratuiti e riduzioni per perdite adeguano il rapporto; una riduzione reale è ammessa solo dopo aver dato la possibilità di convertire.' },
      ],
    },
    {
      title: 'Gli strumenti finanziari partecipativi',
      blocks: [
        { t: 'p', text: 'Accanto ad azioni e obbligazioni la società può raccogliere risorse con strumenti **atipici**. Quelli **partecipativi** (art. 2346 c. 6) devono essere previsti dallo **statuto** e possono essere emessi anche a fronte di **opera o servizi**.' },
        { t: 'list', items: [
          'Danno almeno un diritto agli **utili**; il resto lo decide lo statuto.',
          'Possono avere **voto su argomenti specifici** e il diritto di nominare un componente **indipendente** del CdA o del consiglio di sorveglianza o un sindaco (art. 2351).',
          'Non votano nell’assemblea dei soci: hanno un’**assemblea speciale**, che approva le delibere che pregiudicano i loro diritti (art. 2376).',
        ] },
      ],
    },
  ],
  summary: [
    'S.p.a.: risponde solo la società; socio unico illimitato in caso di insolvenza se mancano versamenti o pubblicità, ma non fallisce.',
    'Atto pubblico, capitale ≥ 50.000 sottoscritto, 25% del denaro versato, deposito del notaio in 20 giorni, personalità con l’iscrizione; vincolo dei sottoscrittori 90 giorni.',
    'Nullità tassative e non retroattive (2332). Modifiche: assemblea straordinaria, controllo notarile, efficacia dall’iscrizione (2436).',
    'Patti parasociali: efficacia obbligatoria, massimo cinque anni, recesso con 180 giorni.',
    'Stima giurata dei conferimenti in natura, revisione in 180 giorni (oltre 1/5); niente opera e servizi; acquisti pericolosi autorizzati; socio moroso.',
    'Azioni indivisibili, inscindibili, uguali; un’azione un voto; senza voto fino a metà; voto plurimo fino a 10; categorie e assemblee speciali.',
    'Circolazione: nominative, girata o doppia annotazione; divieto massimo 5 anni, prelazione, gradimento (il mero gradimento con acquisto o recesso).',
    'Aumento (opzione ≥ 15 giorni, esclusione con sovrapprezzo), riduzione reale (90 giorni), perdite oltre 1/3 (2446) e sotto il minimo (2447).',
    'Recesso 2437: inderogabile, derogabile, statutario, ad nutum per tempo indeterminato; 15 giorni; liquidazione con opzione, terzi, acquisto, riduzione.',
    'Obbligazioni: amministratori, limite del doppio (2412) con esenzioni; assemblea e rappresentante comune; convertibili dall’assemblea straordinaria. Strumenti partecipativi anche per opera.',
  ],
};

export default c;
