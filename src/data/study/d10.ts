import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd10',
  intro:
    'La s.p.a. funziona attraverso organi con competenze fisse: l’assemblea decide sull’organizzazione e nomina, gli amministratori gestiscono, il collegio sindacale e il revisore controllano. Il capitolo segue il sistema tradizionale organo per organo, con quorum, invalidità delle delibere, doveri e responsabilità, controllo giudiziario, e chiude con il bilancio d’esercizio.',
  sections: [
    {
      title: 'La struttura degli organi',
      blocks: [
        { t: 'p', text: 'La s.p.a. ha tre organi con funzioni assegnate dalla legge e in gran parte **inderogabili**. Variano secondo il sistema scelto: **tradizionale**, **dualistico** o **monistico**. Nel tradizionale la gestione spetta tutta agli **amministratori**, che ne rispondono; le scelte sull’assetto della società e il controllo dei risultati spettano ai **soci**; un organo autonomo controlla legalità e corretta gestione, e un **revisore** la contabilità. Le quotate hanno regole più severe.' },
      ],
    },
    {
      title: 'L’assemblea: competenze',
      blocks: [
        { t: 'p', text: 'È l’organo dei soci con diritto di voto, sempre **collegiale** (art. 2366), che decide a **maggioranza** con quorum diversi per materia. Le competenze sono fissate dalla legge e non si spostano ad altri organi, salvo i casi previsti.' },
        { t: 'table', head: ['Ordinaria (art. 2364)', 'Straordinaria (art. 2365)'], rows: [
          ['Approvazione del **bilancio** e distribuzione degli utili', '**Modifiche dello statuto**'],
          ['**Nomina e revoca** di amministratori, sindaci, revisore', 'Nomina e poteri dei **liquidatori**'],
          ['**Compensi** di amministratori e sindaci', 'Obbligazioni **convertibili**, esclusione dell’emissione dei titoli, assistenza finanziaria per l’acquisto di azioni proprie'],
          ['**Responsabilità** di amministratori e sindaci', '—'],
          ['**Autorizzazioni** ad atti degli amministratori, se previste dallo statuto', '—'],
          ['Altre materie che la legge affida all’assemblea senza specificare (per esempio la deroga al divieto di concorrenza)', '—'],
        ] },
        { t: 'p', text: 'Le **autorizzazioni** non vincolano gli amministratori: possono comunque non compiere l’atto. Se lo compiono **senza** autorizzazione ne rispondono per intero e possono essere revocati per giusta causa. Lo statuto può affidare agli amministratori alcune modifiche statutarie minori o legate alla gestione.' },
      ],
    },
    {
      title: 'L’assemblea: convocazione e quorum',
      blocks: [
        { t: 'list', items: [
          'La convocano gli **amministratori** quando lo ritengono opportuno. È **obbligatoria** almeno una volta l’anno per il **bilancio**, entro **120 giorni** dalla chiusura dell’esercizio (**180** nei casi previsti dallo statuto); per **perdite oltre un terzo** del capitale; per una **causa di scioglimento**; su richiesta di soci con **1/10** del capitale (**1/20** nelle quotate) o della quota minore prevista dallo statuto (art. 2367).',
          'In casi particolari la convocano anche i **sindaci**, il **tribunale**, l’amministratore giudiziario o i liquidatori.',
          'Si tiene nel **comune della sede**, salvo diversa previsione dello statuto (art. 2363).',
          'L’avviso indica data, ora, luogo e **ordine del giorno**. Le delibere su materie fuori dall’ordine del giorno sono **annullabili**, salvo assemblea totalitaria. L’ordine del giorno può essere sintetico ma non generico.',
        ] },
        { t: 'table', head: ['Società', 'Avviso'], rows: [
          ['Non quotate', 'In **Gazzetta Ufficiale** o in un quotidiano indicato dallo statuto, almeno **15 giorni** prima'],
          ['Chiuse', 'Se lo statuto lo prevede, raccomandata, PEC o altro mezzo con prova di ricezione almeno **8 giorni** prima'],
          ['Quotate', 'Sul **sito** della società almeno **30 giorni** prima, con una relazione sulle materie all’ordine del giorno (artt. 125-bis e 125-ter TUF)'],
        ] },
        { t: 'p', text: 'L’assemblea **totalitaria**, con tutto il capitale presente e la maggioranza di amministratori e sindaci, vale anche senza convocazione, ma ciascuno può opporsi a discutere argomenti su cui non si sente informato.' },
        { t: 'h', text: 'Come si calcolano i quorum' },
        { t: 'p', text: 'Il **quorum costitutivo** è il capitale che deve essere presente; il **deliberativo** la maggioranza necessaria. Nel costitutivo non si contano le azioni **senza voto** per statuto, ma si contano quelle prive di voto solo in un caso specifico. Nel deliberativo non si contano mai le azioni senza voto, né quelle del socio in conflitto che si astiene, né quelle con voto sospeso. Con il voto plurimo si contano i **voti**.' },
        { t: 'table', head: ['Società chiuse', 'Costitutivo', 'Deliberativo'], rows: [
          ['Ordinaria 1ª', 'Metà del capitale', 'Maggioranza assoluta dei presenti'],
          ['Ordinaria 2ª', 'Nessuno', 'Maggioranza assoluta dei presenti'],
          ['Straordinaria 1ª', '—', 'Più della metà del capitale sociale'],
          ['Straordinaria 2ª', 'Oltre 1/3 del capitale', '2/3 del capitale presente'],
          ['Materie rilevanti in 2ª (oggetto, trasformazione, scioglimento anticipato, proroga, revoca della liquidazione, sede all’estero, azioni privilegiate)', '—', 'Comunque oltre 1/3 del capitale'],
        ] },
        { t: 'list', items: [
          'In prima convocazione lo statuto può solo **alzare** i quorum, ma non fino all’unanimità o a un veto di fatto di ogni socio.',
          'La **seconda convocazione** si tiene entro **30 giorni**; l’avviso può stare in quello della prima o essere dato dopo, con **8 giorni** di anticipo. Lo statuto può alzarne i quorum, salvo per bilancio e cariche sociali. Le convocazioni successive hanno gli stessi quorum della seconda.',
          'Nelle società **aperte** di regola c’è una **convocazione unica**: per l’ordinaria valgono i quorum della seconda; per la straordinaria costitutivo **1/5** del capitale e deliberativo **2/3** dei presenti.',
        ] },
        { t: 'example', title: 'La modifica dello statuto', steps: ['Capitale 1.000 azioni; in prima convocazione ne sono presenti 560.', 'Votano a favore 480.', 'Serve più della metà del capitale: 501.'], result: 'Respinta, anche se 480 sono la maggioranza dei presenti.' },
        { t: 'warn', text: 'Negli appunti i quorum dell’assemblea ordinaria sono attribuiti all’«art 2386»: sono all’**art. 2368**.' },
      ],
    },
    {
      title: 'L’assemblea: intervento, deleghe, lavori',
      blocks: [
        { t: 'list', items: [
          'Intervengono amministratori, sindaci e i soci con **diritto di voto** (art. 2370). La legittimazione si prova con il **libro dei soci**, con i **titoli** o, per le azioni dematerializzate, con la comunicazione dell’**intermediario**. Nelle quotate conta chi aveva le azioni a una data fissa prima dell’assemblea (record date).',
          'Si può votare per **corrispondenza** o in via **telematica**, se lo statuto lo prevede: chi vota così si considera intervenuto.',
        ] },
        { t: 'h', text: 'Le deleghe (art. 2372)' },
        { t: 'list', items: [
          'Per **iscritto**, conservata dalla società; nulla se **in bianco**; sempre **revocabile**; niente subdelega se il nome non è nella delega (una persona giuridica delegata può mandare un dipendente).',
          'Nelle società che fanno ricorso al mercato vale solo per **singole assemblee**.',
          'Nelle non quotate: vietata a membri degli organi e **dipendenti**; un delegato non può rappresentare più di **20** soci nelle chiuse, e nelle società con azioni diffuse **50, 100 o 200** a seconda del capitale.',
          'Nelle quotate ci sono il **rappresentante designato** dalla società, la **sollecitazione** di deleghe da parte di un promotore con prospetto e modulo, e la **raccolta** di deleghe da parte di associazioni di almeno 50 piccoli azionisti.',
        ] },
        { t: 'warn', text: 'Gli appunti indicano per le società con azioni diffuse i limiti 100 e 200: l’art. 2372 prevede **50, 100 o 200** soci secondo che il capitale sia fino a 5 milioni, fino a 25 milioni o oltre.' },
        { t: 'h', text: 'Lo svolgimento' },
        { t: 'list', items: [
          'Il **presidente** (indicato dallo statuto o eletto dai presenti) verifica la costituzione e la legittimazione, dirige la discussione, sceglie il metodo di voto, proclama i risultati; lo assiste un **segretario** o il **notaio**, obbligatorio per la **straordinaria** (art. 2375). Le sue decisioni si contestano impugnando la delibera.',
          'I soci possono fare **domande** pertinenti ad amministratori e sindaci, salvo segreto aziendale; nelle quotate anche prima dell’assemblea (art. 127-ter TUF). Possono consultare e copiare i documenti depositati in sede.',
          '**Rinvio** fino a **5 giorni** su richiesta di soci con **1/3** del capitale che si dichiarano non informati (art. 2374).',
          'Voto **palese** e simultaneo; niente voto segreto.',
          'Il **verbale** è necessario: indica partecipanti, capitale presente, modalità e risultati del voto, e permette di identificare favorevoli, astenuti e contrari. Può essere redatto dopo, ma senza ritardo.',
        ] },
      ],
    },
    {
      title: 'Conflitto di interessi e abuso',
      blocks: [
        { t: 'p', text: 'Il socio è in **conflitto di interessi** quando ha un interesse patrimoniale personale opposto a quello della società. Non c’è un obbligo generale di **astenersi** e il presidente non può escluderlo, ma la delibera è **annullabile** se il suo voto è stato **determinante** e la delibera **può danneggiare** la società (art. 2373). L’unico divieto di voto assoluto riguarda gli **amministratori** sulle delibere sulla propria responsabilità.' },
        { t: 'list', items: [
          '**Abuso della maggioranza**: la delibera presa per danneggiare la **minoranza**, non nell’interesse sociale, è annullabile per violazione della buona fede, con eventuale risarcimento.',
          '**Ostruzionismo** della minoranza: chi paralizza l’assemblea per un interesse personale ne risponde civilmente; annullare la delibera negativa serve a poco.',
        ] },
      ],
    },
    {
      title: 'L’invalidità delle delibere',
      blocks: [
        { t: 'table', head: ['', 'Annullabilità (art. 2377)', 'Nullità (art. 2379)'], rows: [
          ['Cause', 'Violazione di legge (anche dispositiva) o di **statuto**, di contenuto o di procedimento', '**Mancata convocazione**, **mancanza del verbale**, oggetto **illecito o impossibile**'],
          ['Chi impugna', 'Soci assenti, dissenzienti o astenuti con almeno il **5%** del capitale (1‰ nelle quotate); amministratori; collegio sindacale', '**Chiunque** vi abbia interesse, anche chi ha votato a favore; il giudice d’ufficio'],
          ['Termine', '**90 giorni** dalla delibera o dall’iscrizione', '**Tre anni** dall’iscrizione; **senza limiti** se l’oggetto diventa illecito o impossibile'],
          ['Altri rimedi', 'Chi è sotto il 5% ha solo il **risarcimento**', 'Il verbale fatto prima dell’assemblea successiva **sana** la nullità'],
        ] },
        { t: 'h', text: 'L’annullabilità' },
        { t: 'list', items: [
          'I vizi contano solo se **rilevanti**: la partecipazione di non legittimati se determinante per il quorum costitutivo; voti invalidi o contati male se determinanti per la maggioranza; un verbale incompleto se impedisce di capire contenuto ed effetti.',
          'Si agisce con citazione al tribunale; se l’attore perde la legittimazione durante il processo, resta solo la domanda di risarcimento.',
          'L’impugnazione non sospende la delibera, ma il giudice può **sospenderla** in via cautelare.',
          'Non si annulla se la società **sostituisce** la delibera con una conforme.',
          'L’annullamento vale per **tutti i soci** e obbliga gli amministratori ad adeguarsi, ma non pregiudica i **terzi in buona fede**.',
        ] },
        { t: 'h', text: 'La nullità' },
        { t: 'list', items: [
          'C’è **mancata convocazione** solo se almeno un socio non ha avuto **alcuna notizia** dell’assemblea; un avviso tardivo o incompleto rende la delibera solo annullabile.',
          'C’è **mancanza del verbale** solo se manca del tutto un documento firmato dal presidente con data, oggetto e delibera.',
          'Termini speciali: **180 giorni** per aumenti, riduzioni facoltative del capitale ed emissione di obbligazioni (art. 2379-ter); il **bilancio** non si impugna più dopo l’approvazione del successivo (art. 2434-bis); trasformazioni, fusioni e scissioni non si invalidano dopo l’iscrizione (artt. 2500-bis, 2504-quater, 2506-ter).',
          'Effetti come l’annullamento; anche la nullità si sana con la **sostituzione** della delibera.',
        ] },
        { t: 'p', text: 'Restano due figure di creazione giurisprudenziale. L’**inesistenza**: la delibera è solo apparente, per esempio il verbale di un’assemblea mai convocata né tenuta. L’**inefficacia**: l’assemblea dispone di diritti che non le spettano; la fa valere chiunque ne abbia interesse, senza limiti di tempo.' },
      ],
    },
    {
      title: 'Gli amministratori: nomina e cessazione',
      blocks: [
        { t: 'p', text: 'Gli amministratori hanno la competenza **esclusiva** sulla **gestione**: tutti gli atti che attuano l’oggetto sociale (art. 2380-bis). Possono essere un **amministratore unico** (non ammesso nelle quotate) o un **consiglio**; il numero lo fissa lo statuto.' },
        { t: 'list', items: [
          'Li nomina l’**assemblea ordinaria** (artt. 2364, 2383); i primi, l’atto costitutivo. Eccezioni: un consigliere indipendente nominato dai titolari di **strumenti finanziari partecipativi** (art. 2351) e amministratori nominati da **enti pubblici** soci in proporzione alla loro quota (art. 2449).',
          'Lo statuto può prevedere il **voto di lista** per dare un posto alla minoranza; nelle **quotate** almeno un amministratore viene dalla lista di minoranza (art. 147-ter TUF).',
          'Possono essere **non soci**, salvo diversa previsione.',
          'Sono **ineleggibili** e decadono interdetti, inabilitati, falliti e condannati a pene con interdizione dagli uffici (art. 2382). Requisiti di professionalità e onorabilità valgono per legge solo per quotate, banche e assicurazioni, ma lo statuto può introdurli.',
          'Nelle quotate almeno un **indipendente**, due se il consiglio ha più di sette membri; chi perde l’indipendenza decade.',
          'Dopo l’**accettazione**, anche tacita, la nomina si iscrive entro **30 giorni** (art. 2383). L’**amministratore di fatto**, che gestisce senza nomina, ha gli stessi doveri e responsabilità.',
          '**Divieto di concorrenza** (art. 2390): niente attività concorrente in proprio o per altri, né ruolo di socio illimitatamente responsabile o amministratore di una concorrente, salvo **autorizzazione dell’assemblea**. La violazione porta a revoca per giusta causa e risarcimento.',
        ] },
        { t: 'h', text: 'Durata e cessazione' },
        { t: 'list', items: [
          'Durata massima **tre esercizi**, inderogabile; alla scadenza restano in carica con pieni poteri fino alla sostituzione.',
          '**Dimissioni**: senza forma né motivo, irrevocabili; efficaci subito, salvo che facciano mancare la maggioranza del consiglio.',
          '**Revoca** dell’assemblea in **qualunque momento**; senza **giusta causa** spetta all’amministratore solo il **risarcimento**.',
          'Decadenza per cause legali o statutarie e morte.',
        ] },
        { t: 'h', text: 'Sostituzione (art. 2386)' },
        { t: 'list', items: [
          'Se resta la **maggioranza** nominata dall’assemblea, il consiglio **coopta** un sostituto con l’approvazione dei sindaci; resta fino alla prossima assemblea e, se confermato, scade con gli altri.',
          'Se viene meno la maggioranza, i rimasti convocano subito l’assemblea.',
          'Se cessano **tutti**, il **collegio sindacale** convoca d’urgenza l’assemblea e intanto compie l’ordinaria amministrazione.',
          'Clausola **simul stabunt simul cadent**: se cessa un amministratore, decade tutto il consiglio.',
        ] },
        { t: 'warn', text: 'Negli appunti la cooptazione è attribuita all’«art 2368» e i quorum all’«art 2386»: è il contrario.' },
      ],
    },
    {
      title: 'Il consiglio di amministrazione',
      blocks: [
        { t: 'list', items: [
          'Il **presidente**, nominato dall’assemblea o dal consiglio, convoca, fissa l’ordine del giorno, dirige la discussione e cura che tutti siano **informati** (art. 2381).',
          'La convocazione di **tutti** i consiglieri è essenziale.',
          'Quorum (art. 2388): costitutivo la **maggioranza dei membri in carica**, deliberativo la **maggioranza assoluta dei presenti** (contando gli astenuti). Lo statuto può alzarli, ma non pretendere l’unanimità.',
          'Le delibere contrarie a legge o statuto si impugnano entro **90 giorni** da amministratori assenti o dissenzienti e dal **collegio sindacale**; il socio solo se la delibera lede i suoi diritti. Restano salvi i diritti dei **terzi in buona fede**.',
        ] },
        { t: 'h', text: 'La delega (art. 2381)' },
        { t: 'list', items: [
          'Se lo statuto o l’assemblea lo consentono, il consiglio può delegare ad **amministratori delegati** o a un **comitato esecutivo**, fissando contenuto e limiti.',
          '**Non delegabili**: redazione del **bilancio**, aumento di capitale delegato, riduzione per **perdite**, progetti di **fusione** e **scissione**, emissione di obbligazioni convertibili delegata.',
          'I delegati curano l’**adeguatezza degli assetti** organizzativi, amministrativi e contabili e riferiscono almeno ogni **sei mesi** (tre nelle quotate) su andamento, prospettive e operazioni rilevanti.',
          'Il consiglio **vigila**, può dare direttive, avocare operazioni e **revocare** la delega in ogni momento; valuta gli assetti e i piani strategici.',
          'Tutti devono **agire in modo informato** e ciascuno può chiedere informazioni ai delegati.',
        ] },
        { t: 'h', text: 'Gli interessi degli amministratori (art. 2391)' },
        { t: 'list', items: [
          'L’amministratore con un interesse, proprio o di altri, in un’operazione lo **dichiara** agli altri e ai sindaci; non deve per forza astenersi.',
          'Se è un **amministratore delegato**, si **astiene** e rimette l’operazione al consiglio.',
          'Il consiglio deve **motivare** le ragioni e la convenienza per la società. Se no, la delibera, se può danneggiare la società, è impugnabile entro **90 giorni**.',
          'L’amministratore risponde dei danni, anche per aver sfruttato a suo vantaggio **informazioni o opportunità** della società.',
          'La motivazione richiama l’**eccesso di potere**: scelte del tutto irrazionali, incompatibili con qualunque strategia d’impresa.',
          '**Operazioni con parti correlate** nelle società aperte (art. 2391-bis e regolamento Consob): procedure trasparenti, istruttoria su interesse e convenienza, per le operazioni maggiori parere favorevole di un comitato di **indipendenti**.',
        ] },
        { t: 'h', text: 'I compensi (art. 2389)' },
        { t: 'list', items: [
          'Quelli degli amministratori li fissa l’**assemblea**; quelli del comitato esecutivo l’assemblea o, in mancanza, il consiglio; quelli di presidente e delegati il **consiglio**, sentito il **collegio sindacale**. L’assemblea può fissare un tetto complessivo.',
          'Possono consistere anche in **partecipazione agli utili** o **opzioni** su azioni.',
          'Solo i compensi palesemente eccessivi sono illegittimi. Nelle quotate c’è una **relazione sulla remunerazione** su cui l’assemblea vota (art. 123-ter TUF).',
          'Se nessuno li determina, li fissa il **giudice**.',
        ] },
      ],
    },
    {
      title: 'La rappresentanza',
      blocks: [
        { t: 'list', items: [
          'La rappresentanza **organica** spetta agli amministratori indicati dallo statuto, con firma congiunta o disgiunta; è **generale**, anche in giudizio (art. 2384).',
          'Quella **volontaria** è eventuale: procure **speciali** conferite dai rappresentanti, secondo le regole generali.',
          'I **limiti** del potere posti da statuto o delibere, anche se pubblicati, **non sono opponibili** ai terzi, salvo che si provi che hanno agito **intenzionalmente a danno** della società.',
          'Lo stesso vale per atti fuori dall’oggetto sociale e per il rappresentante che agisce senza la delibera necessaria.',
          'L’atto del rappresentante in **conflitto di interessi**, senza delibera, è **annullabile** su domanda della società se il terzo conosceva o poteva conoscere il conflitto (art. 1394).',
        ] },
      ],
    },
    {
      title: 'La responsabilità degli amministratori',
      blocks: [
        { t: 'p', text: 'Verso la società è una responsabilità **contrattuale**: gli amministratori devono adempiere i doveri di legge e statuto con la **diligenza** richiesta dalla natura dell’incarico e dalle loro **specifiche competenze** (art. 2392).' },
        { t: 'list', items: [
          'Per il dovere generale di diligenza la società prova la **colpa**; per i doveri **specifici** basta provare l’inadempimento e il nesso causale, salvo che l’amministratore dimostri una causa a lui non imputabile.',
          'Non si sindaca il merito delle scelte (**business judgment rule**): si risponde solo di scelte **del tutto irrazionali** o prese senza informarsi.',
          'La responsabilità è **solidale** e vale anche per gli **amministratori di fatto**. I non delegati rispondono se, conoscendo fatti dannosi, non hanno fatto quanto potevano per impedirli o attenuarli.',
          'Non c’è solidarietà per le funzioni attribuite in concreto ad altri.',
          'Esonero per **dissenso**: annotarlo subito nel libro delle adunanze, avvisare il presidente del collegio sindacale e non avere colpe (art. 2392 c. 3).',
        ] },
        { t: 'table', head: ['Azione', 'Chi agisce', 'Presupposti', 'Norma'], rows: [
          ['Sociale', 'Assemblea ordinaria (anche fuori ordine del giorno); collegio sindacale con **2/3**; minoranza con **1/5** del capitale (**1/40** nelle aperte)', 'Violazione dei doveri con danno alla società', '2392-2393-bis'],
          ['Dei creditori', 'Creditori sociali; il **curatore** nelle procedure concorsuali', 'Violati gli obblighi di **conservazione del patrimonio**, ora **insufficiente** a pagarli', '2394'],
          ['Individuale', 'Socio o terzo', 'Danno **diretto** al suo patrimonio, per esempio azioni comprate a un prezzo gonfiato da un bilancio falso', '2395'],
        ] },
        { t: 'h', text: 'L’azione sociale' },
        { t: 'list', items: [
          'Se la delibera passa con almeno **1/5** del capitale, gli amministratori sono **revocati** per legge.',
          'L’assemblea può **rinunciare** o **transigere** senza motivare, salvo il voto contrario di una minoranza qualificata.',
          'Prescrizione **cinque anni** dalla **cessazione** dalla carica.',
          'Per la minoranza la difficoltà è avere le **prove**: i soci non hanno accesso a tutti i libri sociali. Se vince, la società rimborsa le spese che non ha recuperato dagli amministratori.',
        ] },
        { t: 'h', text: 'L’azione dei creditori' },
        { t: 'list', items: [
          'Gli amministratori non rispondono dei debiti della società, ma del danno da **incapienza** causato dalla cattiva gestione.',
          'Prescrizione **cinque anni** da quando il patrimonio è diventato insufficiente.',
          'La **rinuncia** all’azione sociale non vale verso i creditori; la **transazione** sì, ma possono impugnarla con revocatoria se collusiva.',
          'Di solito la esercita il **curatore**. Il danno si presume pari alla **differenza dei netti patrimoniali** tra la causa di scioglimento e la cessazione o l’apertura della procedura (art. 2486); se le scritture mancano o sono inattendibili, alla differenza tra attivo e passivo accertati.',
        ] },
        { t: 'h', text: 'L’azione individuale' },
        { t: 'p', text: 'Il socio o il terzo prova il fatto doloso o colposo e il nesso con il danno subito **direttamente**. Prescrizione **cinque anni** da quando poteva conoscere il danno. La stessa disciplina vale per il **direttore generale** nominato dagli amministratori in base allo statuto (art. 2396), figura apicale subordinata agli amministratori.' },
      ],
    },
    {
      title: 'Il collegio sindacale',
      blocks: [
        { t: 'p', text: 'Vigila sull’osservanza della **legge** e dello **statuto**, sul rispetto dei principi di **corretta amministrazione** e sull’**adeguatezza dell’assetto** organizzativo, amministrativo e contabile (art. 2403). Non giudica la **convenienza** delle scelte e di regola non fa il controllo **contabile**, che spetta al revisore; nelle società chiuse che non redigono il consolidato lo statuto può affidarglielo, e allora tutti i sindaci devono essere revisori.' },
        { t: 'list', items: [
          'Riferisce all’assemblea con la **relazione al bilancio** (art. 2429), dà pareri obbligatori, approva la cooptazione, può fare da **organismo di vigilanza** (d.lgs. 231/2001).',
          'Composizione rigida: **3 o 5** effettivi e **2** supplenti; almeno uno **revisore legale**, gli altri iscritti in albi professionali o professori universitari di materie economiche o giuridiche (art. 2397).',
          'Li nomina l’**assemblea ordinaria** (i primi l’atto costitutivo), salvo enti pubblici e titolari di strumenti finanziari. Nelle quotate c’è un sindaco di **minoranza**, che è il **presidente**.',
          'Durata **tre esercizi**, scadenza simultanea; restano in carica fino alla sostituzione.',
          '**Decadono** per perdita dei requisiti o per **assenza ingiustificata** a due riunioni del collegio nell’esercizio, a due assemblee o a due riunioni consecutive del consiglio.',
          '**Revoca** solo per **giusta causa**, con delibera approvata dal **tribunale** (art. 2400).',
          'Il supplente subentra solo se ha la stessa qualifica del cessato.',
        ] },
        { t: 'h', text: 'L’indipendenza' },
        { t: 'p', text: 'Sono **ineleggibili**, oltre a chi non potrebbe fare l’amministratore: **coniugi, parenti e affini entro il quarto grado** degli amministratori della società o del gruppo; chi ha con la società un rapporto di **lavoro** continuativo o altri rapporti patrimoniali che ne compromettono l’indipendenza. Il **compenso** è fissato alla nomina per tutta la durata e non si può cambiare (art. 2402). Resta un punto debole: l’assemblea nomina sia i controllati sia i controllori.' },
        { t: 'h', text: 'Funzionamento e poteri' },
        { t: 'list', items: [
          'Si riunisce almeno ogni **90 giorni**; decide a maggioranza assoluta dei presenti, con la maggioranza dei sindaci presenti.',
          '**Istruttoria**: ogni sindaco può fare **ispezioni** da solo; le richieste di informazioni agli amministratori sono del collegio. Rifiutarle è reato di impedito controllo. Tutto va nel libro del collegio.',
          '**Valutazione**: collegiale.',
          '**Reazione** collegiale: convocare l’assemblea se gli amministratori non lo fanno o per fatti gravi; **denuncia** al tribunale (art. 2409); **impugnare** delibere di assemblea e consiglio; promuovere l’**azione sociale** con **2/3**.',
          'Reazione individuale: rilievi, interventi in assemblea e in consiglio, segnalazione al PM se il collegio rinuncia alla denuncia.',
        ] },
        { t: 'h', text: 'La denuncia dei soci (art. 2408)' },
        { t: 'p', text: 'Ogni socio può denunciare al collegio fatti censurabili: il collegio ne tiene conto nella relazione all’assemblea. Se la denuncia viene da soci con **1/20** del capitale (**1/50** nelle aperte), il collegio deve **indagare** subito e riferire all’assemblea; se i fatti sono gravi e urgenti, convoca l’assemblea.' },
        { t: 'h', text: 'La responsabilità' },
        { t: 'p', text: 'I sindaci devono la **diligenza professionale**. Rispondono **da soli** per i danni propri (violazione del segreto, false attestazioni) e **in solido** con gli amministratori se il danno non si sarebbe prodotto vigilando come dovevano (art. 2407). Si applicano le regole dell’azione contro gli amministratori; prescrizione **cinque anni**.' },
      ],
    },
    {
      title: 'La revisione legale',
      blocks: [
        { t: 'p', text: 'È regolata dal d.lgs. 39/2010. Il **revisore**, iscritto nel registro tenuto presso il Ministero dell’economia, verifica **con continuità** durante l’esercizio la regolare tenuta della **contabilità** e la corretta rilevazione dei fatti di gestione, ed esprime un **giudizio** sul bilancio, cercando anche eventuali frodi.' },
        { t: 'list', items: [
          'Il giudizio può essere **positivo**, **con rilievi**, **negativo** o l’impossibilità di esprimerlo, sempre motivata.',
          'Lo nomina l’**assemblea** su **proposta motivata** del collegio sindacale, per **tre esercizi**. Negli **enti di interesse pubblico** (quotate, banche, assicurazioni) l’incarico dura di più (7 o 9 esercizi) con obbligo di **rotazione**.',
          'Si revoca solo per **giusta causa**, sentito il collegio; il Ministero (o la Consob per gli EIP) può sanzionarlo fino alla cancellazione.',
          'Deve essere **indipendente**: niente ruoli decisionali, titoli o incarichi nella società.',
          'Ha poteri di **informazione** e di **ispezione** e conserva le carte di lavoro per **dieci anni**.',
          'Risponde **in solido** con gli amministratori verso società, soci e terzi; nella società di revisione anche i dipendenti che hanno lavorato all’incarico. Prescrizione **cinque anni** dalla relazione di revisione.',
        ] },
      ],
    },
    {
      title: 'Il controllo giudiziario (art. 2409)',
      blocks: [
        { t: 'p', text: 'È un rimedio eccezionale. Presupposto: il **fondato sospetto** di **gravi irregolarità** nella gestione, cioè violazioni dei doveri degli amministratori che possono **danneggiare** la società o le controllate, non semplici irregolarità formali.' },
        { t: 'list', items: [
          'Possono fare la denuncia i soci con **1/10** del capitale (**1/20** nelle società aperte; lo statuto può solo abbassare), il **collegio sindacale** e, nelle società aperte, il **PM**.',
        ] },
        { t: 'flow', items: [
          'Il tribunale sente in camera di consiglio amministratori e sindaci',
          'Archivia se la denuncia è infondata, oppure sospende se la società sostituisce amministratori e sindaci con persone adeguate che provvedono (ravvedimento)',
          'Altrimenti ordina un’**ispezione** con un ispettore',
          'Se le irregolarità sono accertate, adotta provvedimenti provvisori e convoca l’assemblea',
          'Nei casi più gravi revoca amministratori ed eventualmente sindaci e nomina un **amministratore giudiziario**',
        ] },
        { t: 'p', text: 'L’amministratore giudiziario resta per il tempo fissato; per gli atti straordinari serve l’autorizzazione del tribunale. Può promuovere l’**azione di responsabilità** contro gli organi revocati. Alla fine convoca l’assemblea per nominare i nuovi organi, mettere in liquidazione la società o chiedere una procedura concorsuale.' },
      ],
    },
    {
      title: 'Le scritture e il bilancio',
      blocks: [
        { t: 'p', text: 'La s.p.a. tiene le **scritture contabili** (art. 2214) e i **libri sociali**: i libri delle adunanze di ogni organo e quelli sui rapporti di investimento, come il **libro dei soci** e quello delle obbligazioni.' },
        { t: 'p', text: 'Il **bilancio** è redatto ogni anno dagli amministratori e approvato dall’assemblea. Deve rappresentare in modo **veritiero e corretto** la situazione patrimoniale e finanziaria e il risultato economico (art. 2423). Ha funzione **informativa** (è depositato e pubblico), **estimativa** (dice se c’è un utile distribuibile) e **organizzativa** (molte regole usano i suoi dati come limite). Per questo la disciplina è **inderogabile**.' },
        { t: 'table', head: ['Documento', 'Che cosa mostra'], rows: [
          ['Stato patrimoniale (art. 2424)', 'Quadro **statico**: attività e passività alla chiusura dell’esercizio'],
          ['Conto economico (art. 2425)', 'Quadro **dinamico**: ricavi e costi dell’esercizio, in forma scalare, fino all’utile o perdita netti'],
          ['Rendiconto finanziario (art. 2425-ter)', 'Le **disponibilità liquide** all’inizio e alla fine e i flussi dell’anno, per **cassa**'],
          ['Nota integrativa (art. 2427)', 'Dati e spiegazioni che completano gli altri documenti'],
          ['Relazione sulla gestione (art. 2428)', 'Accompagna il bilancio ma **non ne fa parte**: analisi della situazione e dell’andamento della gestione'],
        ] },
        { t: 'h', text: 'Le regole' },
        { t: 'list', items: [
          'Al vertice le **clausole generali**: **chiarezza** (esposizione ordinata e leggibile secondo gli schemi di legge), **verità** (elementi reali, completi, valutati in modo oggettivo e ragionevole), **correttezza** (adeguatezza tecnica e buona fede). Prevalgono sulle norme di dettaglio, che si disapplicano se le contrastano (art. 2423 c. 4).',
          'Poi i **principi di redazione** (art. 2423-bis): **prudenza**; **realizzazione**, cioè solo utili realizzati; **dissimmetria**, cioè le perdite anche solo probabili; **continuità**, cioè valori nella prospettiva che l’attività prosegua; **competenza**, cioè costi e ricavi dell’esercizio a prescindere da incassi e pagamenti.',
          'Poi le norme su schemi e valutazioni (artt. 2424-2427) e i **principi contabili** nazionali e internazionali, che servono a interpretare e integrare ma non possono contraddire la legge.',
          'Per quotate, banche e intermediari finanziari gli **IAS/IFRS** sono obbligatori (d.lgs. 38/2005).',
        ] },
        { t: 'h', text: 'Le valutazioni (art. 2426)' },
        { t: 'list', items: [
          '**Immobilizzazioni** al costo, **ammortizzate** se hanno utilità limitata, svalutate se perdono valore in modo durevole.',
          'Costi di **sviluppo** al costo, ma con riserve che ne coprano il valore; **avviamento** solo se **acquistato** a titolo oneroso.',
          '**Crediti** al presumibile valore di **realizzo**.',
        ] },
        { t: 'h', text: 'Il patrimonio netto e le riserve' },
        { t: 'list', items: [
          'Il patrimonio netto comprende il **capitale** (indisponibile, pari ai conferimenti) e le **riserve**, cioè la ricchezza in più che la società trattiene.',
          '**Riserva legale** (art. 2430): il **5%** degli utili ogni anno finché arriva a **1/5** del capitale.',
          '**Riserve statutarie**, previste dallo statuto, e **facoltative**, decise dall’assemblea che non distribuisce gli utili (art. 2433).',
          'Le **perdite** colpiscono nell’ordine utili, riserve facoltative, statutarie, legale e infine il capitale.',
        ] },
        { t: 'example', title: 'La riserva legale', steps: ['Capitale 100.000 €, riserva legale già a 18.000 €, utile 60.000 €.', '5% dell’utile = 3.000 €.', 'Tetto = 1/5 del capitale = 20.000 €.'], result: 'Si accantonano 2.000 €.' },
        { t: 'flow', title: 'Il procedimento', items: [
          'Progetto redatto dal consiglio, collegialmente (non delegabile)',
          'Al collegio sindacale e al revisore almeno 30 giorni prima dell’assemblea',
          'Depositato in sede con le relazioni nei 15 giorni prima',
          'Approvazione dell’assemblea entro 120 (180) giorni dalla chiusura',
          'Deposito nel registro entro 30 giorni',
        ] },
        { t: 'h', text: 'L’invalidità del bilancio' },
        { t: 'p', text: 'I vizi di procedimento rendono la delibera **annullabile**; la violazione di **verità, chiarezza e correttezza** la rende **nulla** per illiceità dell’oggetto. Si può impugnare solo **prima dell’approvazione del bilancio successivo**; se il revisore non ha fatto rilievi, servono soci con almeno il **5%** del capitale (art. 2434-bis).' },
      ],
    },
  ],
  summary: [
    'Ordinaria: bilancio, nomine, compensi, responsabilità, autorizzazioni. Straordinaria: statuto e liquidatori.',
    'Convocazione: bilancio entro 120 (180) giorni, su richiesta di 1/10; avviso 15 giorni (8 nelle chiuse, 30 nelle quotate); totalitaria.',
    'Quorum: ordinaria 1ª metà del capitale; straordinaria 1ª oltre metà del capitale, 2ª oltre 1/3 e 2/3 dei presenti; aperte convocazione unica.',
    'Deleghe scritte, non in bianco, revocabili; rinvio di 5 giorni con 1/3; verbale necessario; conflitto di interessi annullabile se voto determinante e dannoso.',
    'Annullabilità 90 giorni con il 5%; nullità tre anni per convocazione, verbale, oggetto; 180 giorni per operazioni sul capitale.',
    'Amministratori: tre esercizi, revoca libera con danni, cooptazione (2386), CdA a maggioranza, delega con materie riservate, report ogni sei mesi, interessi (2391).',
    'Rappresentanza generale; limiti inopponibili salvo dolo del terzo.',
    'Azione sociale (revoca con 1/5, minoranza 1/5 o 1/40), dei creditori, individuale; prescrizione cinque anni; dissenso annotato.',
    'Collegio sindacale: 3 o 5 più 2 supplenti, tre esercizi, revoca con il tribunale, legalità e adeguatezza; 2408 con 1/20; 2409 con 1/10.',
    'Revisore: tre esercizi, su proposta del collegio. Bilancio: chiarezza, verità, correttezza; prudenza, competenza, continuità; riserva legale 5% fino a 1/5.',
  ],
};

export default c;
