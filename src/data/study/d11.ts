import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd11',
  intro:
    'La s.r.l. è la società di capitali delle piccole e medie imprese: responsabilità limitata come nella s.p.a., ma soci protagonisti e grande libertà statutaria, con alcuni tratti delle società di persone. Il capitolo la segue dalla costituzione all’uscita del socio, con le decisioni dei soci, l’amministrazione e i controlli; poi presenta la s.a.p.a. e chiude con lo scioglimento e la liquidazione delle società di capitali.',
  sections: [
    {
      title: 'L’idea della s.r.l.',
      blocks: [
        { t: 'p', text: 'È il tipo più diffuso, pensato per le imprese medio-piccole con pochi soci che vogliono partecipare alla vita della società. La legge valorizza il **ruolo attivo dei soci** e l’**autonomia statutaria**, con limiti a tutela dei terzi. Alcuni tratti la avvicinano alle società di persone: l’**esclusione** per giusta causa, il conferimento d’**opera**, i **diritti particolari** dei singoli soci.' },
        { t: 'p', text: 'Accanto alla disciplina di base c’è una normativa speciale per le **s.r.l. PMI** (meno di 250 dipendenti e fatturato fino a 50 milioni o attivo fino a 43 milioni) e per le s.r.l. con **capitale ridotto**.' },
        { t: 'table', head: ['Aspetto', 'S.r.l.', 'S.p.a.'], rows: [
          ['Partecipazione', 'Quota unica, non azioni', 'Azioni'],
          ['Costituzione', 'Solo simultanea', 'Anche per pubblica sottoscrizione'],
          ['Conferimento d’opera', 'Ammesso con polizza o fideiussione', 'Vietato'],
          ['Stima dei beni in natura', 'Revisore o società di revisione scelti dal socio', 'Esperto nominato dal tribunale'],
          ['25% del denaro', 'Sostituibile con polizza o fideiussione', 'Versato in banca'],
          ['Aumento di capitale', 'Diritto di sottoscrizione ≥ 30 giorni', 'Opzione ≥ 15 giorni'],
          ['Proprie partecipazioni', 'Vietato acquistarle (salvo PMI)', 'Ammesso nei limiti di legge'],
          ['Durata degli amministratori', 'Libera, anche indeterminata', 'Massimo tre esercizi'],
          ['Gestione', 'Soci possono decidere anche su materie gestorie', 'Esclusiva degli amministratori'],
          ['Azione di responsabilità', 'Ogni socio', 'Assemblea o minoranza di 1/5'],
          ['Organo di controllo', 'Eventuale, obbligatorio sopra soglie', 'Sempre'],
        ] },
      ],
    },
    {
      title: 'Costituzione e socio unico',
      blocks: [
        { t: 'list', items: [
          'Per **contratto** o **atto unilaterale** (art. 2463), solo con costituzione **simultanea**.',
          '**Atto pubblico** con: dati dei soci; elementi della società; capitale sottoscritto e versato, conferimenti, valore dei beni in natura e quota di ciascuno; regole di funzionamento. Lo **statuto** non è previsto ma si può redigere come nella s.p.a.; la legge tace sui patti parasociali.',
          'Il **notaio** controlla la legalità e deposita entro **20 giorni**; con l’iscrizione la società acquista la **personalità giuridica**. Nullità solo nei casi dell’art. 2332.',
          '**Modifiche** dell’atto costitutivo: decise dai soci in **assemblea** con il voto di almeno **metà del capitale**, verbalizzate dal notaio, che le deposita entro **30 giorni** (o segnala le irregolarità agli amministratori, che possono riconvocare o ricorrere al tribunale). Efficaci dall’iscrizione (art. 2480).',
        ] },
        { t: 'h', text: 'Con socio unico' },
        { t: 'list', items: [
          'Gli amministratori o il socio depositano entro **30 giorni** una **dichiarazione** con i dati del socio unico, e una nuova quando torna la pluralità (art. 2470).',
          'Il socio unico versa subito **tutto** il capitale; se diventa unico dopo, il residuo entro **90 giorni** (art. 2464).',
          'Negli atti e nella corrispondenza va indicato che c’è un **unico socio** (art. 2250).',
          'I **contratti** con il socio unico sono opponibili ai creditori solo se risultano dal libro delle decisioni degli amministratori o da atto con **data certa** anteriore al **pignoramento** (art. 2478).',
          'Se mancano versamenti o pubblicità, in caso di **insolvenza** il socio risponde **illimitatamente** delle obbligazioni sorte mentre era unico.',
        ] },
        { t: 'warn', text: 'Negli appunti: «art 2550» per l’indicazione del socio unico è l’**art. 2250**; la data certa deve essere anteriore al **pignoramento**, non al «pagamento».' },
      ],
    },
    {
      title: 'Capitale e conferimenti',
      blocks: [
        { t: 'list', items: [
          'Capitale minimo **10.000 €**. Si può conferire ogni elemento dell’attivo valutabile; i conferimenti **diversi dal denaro** devono essere previsti dall’atto costitutivo (art. 2464).',
          '**Denaro**: almeno il **25%** alla sottoscrizione, sostituibile con una **polizza** o una **fideiussione** bancaria di pari importo.',
          '**Beni in natura e crediti**: liberati subito, con **relazione giurata** di un revisore legale o società di revisione **scelti dal socio** (art. 2465).',
          '**Opera o servizi**: ammessi, se il socio presta una **polizza** o una **fideiussione** per l’intero valore, sostituibile con un versamento in denaro.',
          '**Socio moroso** (art. 2466): diffida degli amministratori; dopo **30 giorni** la quota si offre agli altri soci in proporzione; poi, se l’atto costitutivo lo consente, si vende all’incanto; se nessuno compra, il socio è **escluso**, la società trattiene quanto versato e riduce il capitale. Intanto il moroso non partecipa alle decisioni.',
          'Chi cede una quota non liberata resta obbligato in solido con l’acquirente per **tre anni** dall’iscrizione del trasferimento (art. 2472).',
        ] },
        { t: 'h', text: 'Capitale ridotto e s.r.l. semplificata' },
        { t: 'list', items: [
          'Si può costituire una s.r.l. con capitale **da 1 € a 10.000 €**: conferimenti solo in **denaro**, versati per **intero** agli amministratori.',
          'Va destinato a **riserva legale** almeno **1/5** degli utili finché la riserva, **sommata al capitale**, arriva a **10.000 €** (art. 2463 c. 5).',
          'La **s.r.l. semplificata** (art. 2463-bis) ha solo soci **persone fisiche**, capitale da 1 a 10.000 €, atto costitutivo su **modello standard** ministeriale non modificabile e costi ridotti.',
        ] },
        { t: 'warn', text: 'Gli appunti dicono che la riserva deve arrivare a 10.000 € «a prescindere dal capitale»: per l’art. 2463 la soglia si raggiunge con **riserva più capitale**.' },
        { t: 'h', text: 'Aumento e riduzione del capitale' },
        { t: 'list', items: [
          '**Aumento nominale**: riserve disponibili passano a capitale.',
          '**Aumento reale**: nuovi conferimenti. I soci hanno il **diritto di sottoscrivere** in proporzione, entro un termine di almeno **30 giorni**. Si può escludere a favore di terzi, se l’atto costitutivo lo consente, con **recesso** dei dissenzienti; si può prevedere che la parte non sottoscritta vada ad altri soci o a terzi.',
          '**Riduzione reale** (art. 2482): rimborso ai soci o liberazione dai versamenti dovuti. Si esegue dopo **90 giorni** dall’iscrizione della **delibera**, se nessun creditore anteriore si oppone; altrimenti decide il tribunale.',
          '**Perdite oltre un terzo** (art. 2482-bis): se entro l’esercizio successivo non scendono sotto il terzo, la riduzione è **obbligatoria**; se l’assemblea non provvede, amministratori, organo di controllo o revisore chiedono al **tribunale**.',
          '**Perdite sotto il minimo** (art. 2482-ter): gli amministratori convocano subito l’assemblea, che riduce e insieme aumenta il capitale sopra il minimo, trasforma la società o la mette in **liquidazione**.',
        ] },
        { t: 'warn', text: 'Gli appunti fanno decorrere i 90 giorni della riduzione reale «dall’iscrizione della società»: decorrono dall’iscrizione della **delibera di riduzione**.' },
      ],
    },
    {
      title: 'Le quote',
      blocks: [
        { t: 'list', items: [
          'Non possono essere **azioni** (art. 2468): ogni socio ha **una** partecipazione, qualunque sia il suo peso. Non è indivisibile: se ne può cedere una parte.',
          'Fuori dalle PMI le quote **non** si possono offrire al pubblico.',
          'Di regola sono **proporzionali** al conferimento, e i diritti proporzionali alla quota, ma l’atto costitutivo può derogare.',
        ] },
        { t: 'h', text: 'I diritti particolari (art. 2468 c. 3)' },
        { t: 'list', items: [
          'L’atto costitutivo può attribuire a **singoli soci** diritti particolari sull’**amministrazione** (nominare amministratori o gradirne la nomina, essere amministratore, veto su certi atti) o sugli **utili** (quote diverse da quella del capitale).',
          'Sono legati alla **persona** del socio, non alla quota: si estinguono se la quota viene ceduta.',
          'Si modificano solo con il consenso di **tutti** i soci, salvo diversa previsione; se vengono toccati di fatto da un’operazione decisa a maggioranza, il socio contrario può **recedere**.',
          'Nelle **s.r.l. PMI** si possono creare **categorie di quote** con diritti oggettivi, e le quote si possono collocare su **portali online** (d.l. 179/2012).',
        ] },
        { t: 'h', text: 'Il trasferimento' },
        { t: 'list', items: [
          'Le quote si trasferiscono **liberamente** tra vivi e per morte, salvo l’atto costitutivo (art. 2469).',
          'Se l’atto costitutivo le rende **intrasferibili** o pone condizioni, il socio o gli eredi possono **recedere**; l’atto può escludere il recesso per non più di **due anni**.',
          'L’atto di trasferimento va fatto con **firma autenticata** e il notaio lo **deposita** entro **30 giorni**: verso la società vale dal deposito (art. 2470).',
          'Se la stessa quota è venduta due volte, prevale chi per primo, **in buona fede**, ha iscritto il trasferimento, anche se il suo atto è successivo.',
          'Nelle PMI con quote su portali, il trasferimento può avvenire con annotazione dell’intermediario.',
          'Le quote si possono **pignorare**, dare in **pegno** o **usufrutto**, sequestrare. Se sono intrasferibili, in caso di espropriazione si cerca un accordo; altrimenti si vende all’incanto, ma la società può presentare entro **10 giorni** un acquirente allo stesso prezzo (art. 2471).',
        ] },
        { t: 'warn', text: 'Gli appunti richiamano l’art. 2437 per il recesso in caso di quote intrasferibili: per la s.r.l. la norma è l’**art. 2469**.' },
      ],
    },
    {
      title: 'Finanziamenti dei soci e titoli di debito',
      blocks: [
        { t: 'list', items: [
          'La s.r.l. **non** può acquistare o prendere in garanzia **quote proprie**, né finanziarne l’acquisto: l’atto è **nullo** (art. 2474). Le PMI possono farlo per piani di incentivazione di dipendenti, collaboratori e amministratori.',
          '**Finanziamenti dei soci** (art. 2467): il rimborso è **postergato** agli altri creditori se il finanziamento è stato concesso quando c’era un **eccessivo squilibrio** dell’indebitamento rispetto al patrimonio netto, o quando sarebbe stato ragionevole un **conferimento**. Vale per finanziamenti in qualsiasi forma.',
          '**Titoli di debito** (art. 2483): se l’atto costitutivo lo prevede, indicando chi decide e con quali limiti. La decisione si iscrive nel registro. Possono sottoscriverli solo **investitori professionali** vigilati; chi li rivende risponde della solvenza della società, salvo che l’acquirente sia anch’esso professionale o un socio. Per cambiare le condizioni serve il consenso di tutti i possessori o della maggioranza, se previsto.',
        ] },
      ],
    },
    {
      title: 'L’uscita del socio',
      blocks: [
        { t: 'h', text: 'Il recesso (art. 2473)' },
        { t: 'list', items: [
          'Spetta ai soci che **non hanno consentito**: cambiamento significativo dell’**oggetto**; cambiamento del **tipo**; **fusione** o **scissione**; revoca della **liquidazione**; trasferimento della **sede all’estero**; eliminazione di cause statutarie di recesso; operazioni che modificano sostanzialmente l’oggetto o i **diritti particolari**; aumento di capitale offerto a **terzi**.',
          'L’atto costitutivo può aggiungere altre cause e regola i modi, senza rendere troppo difficile il recesso legale.',
          'Società a **tempo indeterminato**: recesso libero con almeno **180 giorni** di preavviso, che l’atto costitutivo può portare a **un anno**.',
          'Rimborso entro **180 giorni** dalla comunicazione, in proporzione al patrimonio valutato a **valori reali**, non contabili. Si rimborsa tramite acquisto degli altri soci o di terzi, poi con riserve disponibili, infine riducendo il capitale; se i creditori si oppongono con successo, la società si scioglie.',
        ] },
        { t: 'h', text: 'L’esclusione (art. 2473-bis)' },
        { t: 'list', items: [
          'Opera solo se l’**atto costitutivo** prevede **specifiche** ipotesi di **giusta causa**: violazione degli obblighi sociali, comportamenti incompatibili con l’attività, perdita di requisiti, altri fatti della persona del socio.',
          'L’atto costitutivo stabilisce anche la procedura. La decisione va comunicata con la motivazione; l’escluso può **opporsi** in tribunale.',
          'La quota si liquida come nel recesso, ma **senza** riduzione del capitale.',
        ] },
      ],
    },
    {
      title: 'Le decisioni dei soci',
      blocks: [
        { t: 'p', text: 'I soci hanno una competenza **potenziale su tutto**, anche sulla gestione, che concorre con quella degli amministratori. L’atto costitutivo può ampliarla, non comprimerla (salvo per singole partecipazioni).' },
        { t: 'table', head: ['Competenze', 'Contenuto'], rows: [
          ['**Necessarie** (art. 2479 c. 2)', 'Approvazione del **bilancio** e distribuzione degli utili; **nomina** degli amministratori, dei sindaci o del revisore; **modifiche** dell’atto costitutivo; operazioni che modificano sostanzialmente l’**oggetto** o i diritti dei soci'],
          ['**Normali**, derogabili', 'Nomina degli amministratori (lo statuto può dare il potere a un socio); distribuzione degli utili'],
          ['**Eventuali** (art. 2479 c. 1)', 'Argomenti che uno o più **amministratori** o soci con **1/3** del capitale sottopongono ai soci'],
          ['**Statutarie**', 'Altre competenze gestorie, senza limiti di materia'],
        ] },
        { t: 'h', text: 'Come si decide' },
        { t: 'list', items: [
          'Se l’atto costitutivo lo prevede, con **consultazione scritta** o **consenso espresso per iscritto**. Tutti devono essere informati e poter partecipare; il voto è revocabile fino alla chiusura; un amministratore o 1/3 del capitale possono chiedere l’assemblea. Decide la maggioranza che rappresenti almeno **metà del capitale**.',
          'L’**assemblea** è obbligatoria per le **modifiche** dell’atto costitutivo, le operazioni che cambiano oggetto o diritti, e quando lo chiedono un amministratore o 1/3 del capitale.',
          'Convocazione nei modi dell’atto costitutivo; in mancanza con **raccomandata 8 giorni** prima, nella sede. La convocano amministratori e organo di controllo.',
          'Intervengono tutti i soci, anche con delega. Il **voto** pesa in proporzione alla quota.',
          'Quorum: costituita con **metà del capitale**, delibera a **maggioranza assoluta** dei presenti; per modifiche e operazioni rilevanti serve il voto favorevole di **più della metà del capitale** (art. 2479-bis). L’atto costitutivo può cambiarli.',
          'Il **verbale** va nel libro delle decisioni dei soci; per le modifiche è un atto pubblico. Le delibere hanno effetto subito, le modifiche dall’iscrizione.',
        ] },
        { t: 'h', text: 'L’invalidità (art. 2479-ter)' },
        { t: 'table', head: ['Vizio', 'Chi impugna', 'Termine'], rows: [
          ['Non conformità a legge o atto costitutivo (anche conflitto di interessi e abuso del voto, se lesivi)', 'Soci che non hanno consentito, amministratori, organo di controllo', '**90 giorni** dalla trascrizione nel libro'],
          ['**Assenza assoluta di informazione** (equivale alla mancata convocazione) o oggetto **illecito o impossibile**', 'Chiunque vi abbia interesse', '**Tre anni**; senza limiti se l’oggetto diventa illecito'],
        ] },
      ],
    },
    {
      title: 'Amministrazione e responsabilità',
      blocks: [
        { t: 'list', items: [
          'Gli amministratori sono nominati dai **soci**, salvo diversa previsione, anche **non soci** (art. 2475). La nomina si iscrive; la sua invalidità non è opponibile ai terzi ignari.',
          'Elaborano e attuano i piani strategici; i soci possono decidere anche sulla gestione, ma gli amministratori restano responsabili e devono rifiutarsi di eseguire decisioni dannose.',
          'La **durata** la fissa l’atto costitutivo o la nomina: anche **indeterminata**. Sono rieleggibili.',
          '**Revoca** possibile anche senza giusta causa, con **risarcimento**; per la carica a tempo indeterminato basta un **congruo preavviso**. Chi è amministratore per **diritto particolare** si revoca solo in via giudiziaria.',
        ] },
        { t: 'h', text: 'I modelli' },
        { t: 'list', items: [
          '**Amministratore unico** o più amministratori: di regola un **consiglio**, ma l’atto costitutivo può scegliere l’amministrazione **disgiuntiva** o **congiuntiva** come nelle società di persone (artt. 2257-2258), o un sistema misto.',
          'Restano sempre **collegiali**: progetto di **bilancio**, progetti di **fusione** e **scissione**, **aumento** di capitale delegato.',
          'Per il consiglio si applicano per analogia le regole della s.p.a.',
          '**Conflitto di interessi** (art. 2475-ter): la delibera del consiglio presa con il voto determinante dell’amministratore in conflitto, se dannosa, è impugnabile entro **90 giorni** da amministratori, sindaci e revisore. Il contratto concluso dal rappresentante in conflitto è **annullabile** se il terzo conosceva o poteva conoscere il conflitto.',
          '**Rappresentanza** generale (art. 2475-bis): i limiti, anche iscritti, non sono opponibili ai terzi salvo che abbiano agito **intenzionalmente** a danno della società.',
        ] },
        { t: 'h', text: 'La responsabilità (art. 2476)' },
        { t: 'list', items: [
          'Gli amministratori rispondono **solidalmente** verso la società per la violazione dei doveri di legge e atto costitutivo, salvo chi è senza colpa e, conoscendo il fatto, ha fatto constare il **dissenso**.',
          '**Ogni socio**, qualunque sia la quota, può promuovere l’**azione di responsabilità** e chiedere la **revoca cautelare** degli amministratori per gravi irregolarità.',
          'Gli amministratori rispondono anche verso i **creditori** (conservazione del patrimonio) e verso soci e terzi danneggiati direttamente.',
          'Rispondono **in solido** anche i **soci** che hanno **intenzionalmente** deciso o autorizzato atti dannosi.',
        ] },
        { t: 'h', text: 'Il controllo dei soci' },
        { t: 'p', text: 'Ogni socio, anche non amministratore, ha diritto di avere **notizie** sugli affari sociali e di **consultare** tutti i documenti dell’amministrazione, anche tramite professionisti di fiducia. È un diritto **inderogabile**, che gli amministratori non possono negare.' },
        { t: 'warn', text: 'Gli appunti citano l’«art 2486» per la nomina dell’amministratore da parte di un socio: è un diritto particolare dell’**art. 2468**.' },
      ],
    },
    {
      title: 'L’organo di controllo',
      blocks: [
        { t: 'p', text: 'Nella s.r.l. l’organo di controllo è **eventuale**. Diventa **obbligatorio** (art. 2477) se la società:' },
        { t: 'list', items: [
          'è tenuta al **bilancio consolidato**;',
          '**controlla** una società obbligata alla revisione legale;',
          'ha superato per **due esercizi** consecutivi **almeno uno** di questi limiti: **4 milioni** di attivo, **4 milioni** di ricavi, **20 dipendenti** in media.',
        ] },
        { t: 'list', items: [
          'L’obbligo **cessa** se per **tre esercizi** consecutivi non si supera nessun limite.',
          'L’organo è **monocratico** se lo statuto non dice altro; si applicano le regole dei **sindaci** di s.p.a. Si può nominare un organo di controllo o un revisore.',
          'Lo nominano i **soci** entro **30 giorni** dall’approvazione del bilancio che supera i limiti; altrimenti il **tribunale**, su richiesta di qualsiasi interessato o del conservatore del registro.',
          'Fuori dai casi obbligatori, l’atto costitutivo può prevedere un organo di controllo o un revisore con competenze coerenti con la funzione.',
          'Il **controllo giudiziario** (art. 2409) si applica anche senza organo di controllo: possono chiederlo i soci con **1/10** del capitale e il sindaco.',
        ] },
        { t: 'warn', text: 'Gli appunti includono il capitale pari al minimo della s.p.a. tra i casi di nomina obbligatoria: criterio abrogato nel 2014.' },
      ],
    },
    {
      title: 'La s.a.p.a.',
      blocks: [
        { t: 'p', text: 'Ha **accomandatari** e **accomandanti** come la s.a.s., ma le partecipazioni sono **azioni** come nella s.p.a., di cui segue le regole in quanto compatibili.' },
        { t: 'list', items: [
          'Gli **accomandanti** rispondono nei limiti della quota (art. 2452), senza le eccezioni della s.a.s.; gli **accomandatari** **solidalmente e illimitatamente**, ma in via **sussidiaria**, dopo l’escussione del patrimonio sociale.',
          'Gli accomandatari sono **amministratori di diritto**, a tempo indeterminato; il nome di almeno uno compare nella denominazione con l’indicazione «s.a.p.a.» (art. 2453).',
          '**Revoca** degli amministratori con la maggioranza dell’**assemblea straordinaria** di s.p.a.; senza giusta causa dà diritto ai danni. Il revocato **non risponde** delle obbligazioni sorte dopo l’iscrizione della cessazione (art. 2456).',
          'I **nuovi** amministratori li nomina l’assemblea con la maggioranza straordinaria, ma la nomina deve essere **approvata** dagli amministratori rimasti; con l’accettazione il nominato diventa accomandatario (art. 2457).',
          'Le **modifiche** dell’atto costitutivo richiedono la maggioranza dell’assemblea straordinaria e il consenso di **tutti** gli accomandatari (art. 2460).',
          'Come contrappeso, gli accomandatari **non votano** su nomina e revoca dei **sindaci** e sull’**azione di responsabilità**.',
          'Oltre alle cause comuni, si scioglie se cessano **tutti** gli amministratori e non sono sostituiti entro **180 giorni** (art. 2458).',
        ] },
      ],
    },
    {
      title: 'Lo scioglimento delle società di capitali',
      blocks: [
        { t: 'p', text: 'Con lo **scioglimento** la società non si estingue: conserva la personalità giuridica ed entra in **liquidazione** (artt. 2484-2496).' },
        { t: 'h', text: 'Le cause (art. 2484)' },
        { t: 'list', items: [
          '**Decorso del termine**, salvo proroga con modifica dello statuto.',
          '**Conseguimento dell’oggetto** o **impossibilità** di conseguirlo, assoluta, definitiva e oggettiva, salvo che l’assemblea modifichi lo statuto.',
          '**Impossibilità di funzionamento** o **inattività** dell’assemblea, quando impedisce delibere essenziali come bilancio e nomine.',
          '**Riduzione del capitale sotto il minimo**, se l’assemblea non lo ricostituisce né trasforma la società (artt. 2447, 2482-ter).',
          '**Recesso** di un socio, se per rimborsarlo serve ridurre il capitale e i creditori si oppongono con successo.',
          '**Delibera** dell’assemblea straordinaria.',
          'Altre cause di legge (per esempio la **nullità**, art. 2332, e l’apertura della **liquidazione giudiziale** o **controllata**) e cause **statutarie**, per le quali l’atto costitutivo indica chi le accerta.',
        ] },
        { t: 'h', text: 'Gli effetti' },
        { t: 'list', items: [
          'Lo scioglimento ha effetto dall’**iscrizione** della delibera o della dichiarazione con cui gli amministratori **accertano** la causa (art. 2484).',
          'Gli amministratori devono accertare la causa **senza indugio** (art. 2485); se non lo fanno, provvede il **tribunale** su richiesta di soci, amministratori o sindaci. Poi convocano l’assemblea per la liquidazione.',
          'Da subito possono gestire solo per **conservare l’integrità e il valore** del patrimonio (art. 2486). Se vanno oltre o non fanno il necessario, rispondono dei danni verso società, soci, creditori e terzi.',
          'Il danno si presume pari alla **differenza dei netti patrimoniali** tra la cessazione dalla carica (o l’apertura della procedura) e il momento della causa di scioglimento; se le scritture mancano, alla differenza tra **passivo e attivo** accertati nella procedura.',
        ] },
      ],
    },
    {
      title: 'La liquidazione',
      blocks: [
        { t: 'flow', items: [
          'L’**assemblea** nomina i **liquidatori** con le maggioranze delle modifiche statutarie, fissando **criteri**, **poteri** (anche sulla cessione dell’azienda) e atti per conservare il **valore** dell’impresa, compreso l’esercizio provvisorio (art. 2487). Se non provvede, li nomina il **tribunale**',
          'Iscrizione della nomina: cessano gli amministratori, che consegnano libri, situazione dei conti e rendiconto; la denominazione aggiunge «**in liquidazione**» (art. 2487-bis)',
          'I liquidatori compiono **tutti gli atti utili** alla liquidazione, anche proseguire l’attività, salvo limiti statutari (art. 2489)',
          'Chiedono ai soci i **versamenti** ancora dovuti; possono distribuire **acconti** solo se i fondi bastano a pagare i creditori, altrimenti ne rispondono (art. 2491)',
          'Redigono ogni anno il **bilancio di liquidazione**, con una relazione su andamento, tempi e criteri (art. 2490)',
          'Pagati i creditori, redigono il **bilancio finale** con il **piano di riparto** e lo depositano: ogni socio può fare **reclamo** al tribunale entro **90 giorni**; senza reclami è approvato (artt. 2492-2493)',
          'Chiedono la **cancellazione**: la società si **estingue** (art. 2495)',
        ] },
        { t: 'list', items: [
          'Se più liquidatori, di regola agiscono **collegialmente**, con rappresentanza disgiunta, per tutta la liquidazione.',
          'Devono la **professionalità e diligenza** dell’incarico e rispondono come gli amministratori. Hanno diritto a un **compenso**.',
          'Li **revoca** l’assemblea (con danni se manca la giusta causa) o il **tribunale** su richiesta di soci, sindaci o PM.',
          'Durante la liquidazione restano le regole su soci, assemblee e organi, in quanto compatibili (art. 2488). Prima della distribuzione dell’attivo si possono deliberare **fusione**, **scissione**, **trasformazione** e operazioni sul capitale (non l’aumento gratuito).',
          'La liquidazione si può **revocare** con la maggioranza delle modifiche statutarie, eliminando la causa di scioglimento (art. 2487-ter). I dissenzienti possono **recedere**, i creditori **opporsi** come nella riduzione del capitale.',
        ] },
        { t: 'h', text: 'Dopo la cancellazione' },
        { t: 'p', text: 'La cancellazione **estingue** la società. I creditori non pagati possono agire contro i **soci** fino a quanto hanno **riscosso** nel riparto e contro i **liquidatori** se il mancato pagamento dipende da loro **colpa** (art. 2495). Se la società era parte di un processo, subentrano gli ex soci. È discusso se la cancellazione sia irreversibile quando restano beni non distribuiti.' },
      ],
    },
  ],
  summary: [
    'S.r.l.: soci protagonisti, autonomia statutaria; atto pubblico, costituzione simultanea, 10.000 € (o da 1 €), semplificata per persone fisiche.',
    'Socio unico: dichiarazione in 30 giorni, versamento integrale, contratti con data certa; altrimenti responsabilità illimitata in caso di insolvenza.',
    'Conferimento d’opera con polizza; stima del revisore scelto dal socio; 25% sostituibile con polizza; socio moroso escluso.',
    'Quote non azioni; diritti particolari personali modificabili all’unanimità; trasferimento libero, deposito del notaio in 30 giorni; niente quote proprie.',
    'Finanziamenti dei soci postergati in caso di squilibrio (2467); titoli di debito solo a investitori professionali.',
    'Recesso: cause dell’art. 2473, 180 giorni di preavviso a tempo indeterminato, rimborso in 180 giorni; esclusione solo se prevista dall’atto costitutivo.',
    'Decisioni: competenze necessarie, anche gestorie su richiesta di 1/3; assemblea per le modifiche con metà del capitale; impugnazione 90 giorni o tre anni.',
    'Amministratori anche a tempo indeterminato, modelli disgiuntivo e congiuntivo; ogni socio agisce in responsabilità e consulta i documenti; organo di controllo sopra 4 mln, 4 mln, 20 dipendenti.',
    'S.a.p.a.: accomandatari amministratori di diritto, revoca a maggioranza straordinaria, veto sulle modifiche, scioglimento se mancano per 180 giorni.',
    'Scioglimento dall’iscrizione; amministratori solo conservativi (2486); liquidatori, bilanci, bilancio finale con reclamo in 90 giorni, cancellazione; creditori contro i soci nei limiti del riparto.',
  ],
};

export default c;
