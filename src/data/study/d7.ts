import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd7',
  intro:
    'Il fallimento non è l’unica strada. L’imprenditore in crisi può proporre un accordo ai creditori: il concordato preventivo, il concordato fallimentare, gli accordi di ristrutturazione, i piani di risanamento. Il capitolo segue il concordato dalla domanda all’esecuzione, confronta gli strumenti negoziali e poi riassume il Codice della crisi, comprese le procedure per i sovraindebitati.',
  sections: [
    {
      title: 'Il concordato preventivo',
      blocks: [
        { t: 'p', text: 'È una procedura concorsuale **giudiziale** ma **volontaria**. L’imprenditore in crisi **conserva la gestione** dell’impresa, ottiene una **moratoria** sui debiti esistenti e propone ai creditori di soddisfarli, anche solo **in parte** o **più tardi**. Se la maggioranza approva e il tribunale **omologa**, i debiti si riducono a quanto promesso, anche verso chi ha votato contro.' },
        { t: 'list', items: [
          'Presupposto **soggettivo**: lo stesso del fallimento, cioè imprenditore commerciale, privato, sopra almeno una soglia.',
          'Presupposto **oggettivo**: lo **stato di crisi**, nozione più ampia che **comprende** l’insolvenza. Per questo il concordato può anche **prevenire** il fallimento.',
          'La proposta incide sui **chirografari**: i **privilegiati** vanno pagati per intero o almeno per quanto si ricaverebbe dalla vendita dei beni gravati.',
          'Può essere assistita da **garanzie** reali o personali, del debitore o di terzi, per tutti o alcuni creditori.',
          'Si possono formare **classi** di creditori con posizione giuridica e interessi economici omogenei, con trattamenti diversi tra le classi.',
          'Nelle società la proposta la decidono gli **amministratori** nelle società di capitali e i **soci** che hanno la maggioranza nelle società di persone; la domanda la firma il legale rappresentante (art. 152).',
        ] },
        { t: 'table', head: ['Tipo', 'Come si pagano i creditori'], rows: [
          ['Remissorio', 'Riduzione dei debiti'],
          ['Dilatorio', 'Dilazione delle scadenze'],
          ['In continuità diretta', 'Con i flussi dell’attività, che prosegue il debitore stesso'],
          ['In continuità indiretta', 'L’attività prosegue con un altro soggetto: affittuario, cessionario, società conferitaria'],
          ['Liquidatorio', 'Vendita dei beni, assegnazione dei beni ai creditori, cessione a un **assuntore** che si accolla i debiti, conferimento dell’azienda in una società le cui quote vanno ai creditori'],
        ] },
        { t: 'h', text: 'I limiti alla proposta (legge fallimentare)' },
        { t: 'list', items: [
          '**Liquidatorio**: deve assicurare ai chirografari almeno il **20%**. È una condizione di ammissibilità controllata dal tribunale.',
          'Se la proposta prevede il trasferimento dell’azienda a un acquirente già individuato, si apre una **procedura competitiva** (art. 163-bis): la vendita viene pubblicizzata per cercare offerte migliori, così il debitore non può far comprare a un soggetto a lui vicino. Se vince un’offerta concorrente, il debitore deve adeguare il piano.',
          '**Proposte concorrenti**: i creditori che hanno almeno il **10%** dei crediti possono presentare una proposta propria se quella del debitore non assicura almeno il **40%** dei chirografari nel liquidatorio o il **30%** in continuità. I creditori votano poi la proposta che preferiscono.',
        ] },
        { t: 'warn', text: 'Gli appunti dicono che nel concordato in continuità bisogna pagare almeno il 30%: in continuità **non c’è una soglia minima** di ammissibilità; il 30% è la soglia sotto cui si aprono le **proposte concorrenti**. Il minimo del 20% vale per il liquidatorio.' },
      ],
    },
    {
      title: 'La domanda',
      blocks: [
        { t: 'p', text: 'Si presenta con **ricorso** al tribunale competente, firmato dal debitore (artt. 152 e 161), ed è pubblicata nel **registro delle imprese**. Contiene la **proposta**, il **piano** e i documenti.' },
        { t: 'list', items: [
          'Una relazione aggiornata sulla situazione **patrimoniale, economica e finanziaria**.',
          'Uno **stato analitico delle attività**.',
          'L’**elenco dei creditori** con crediti e cause di prelazione: nel concordato **non c’è** una verifica dei crediti come nello stato passivo.',
          'Una descrizione analitica di **modi e tempi** di adempimento, con l’utilità che ciascun creditore ne ricava.',
          'La **relazione di un professionista indipendente**, che attesta la **veridicità** dei dati e la **fattibilità** del piano.',
        ] },
        { t: 'h', text: 'Le regole del concordato in continuità' },
        { t: 'list', items: [
          'Il piano indica anche **ricavi e costi attesi** dalla prosecuzione, le **risorse finanziarie** necessarie e come coprirle.',
          'Il professionista attesta che la continuità è **funzionale al miglior soddisfacimento** dei creditori rispetto alla liquidazione.',
          'Dalla domanda all’omologazione il debitore può, con autorizzazione del tribunale, **pagare i fornitori strategici** anteriori, essenziali per proseguire, e ottenere **finanziamenti** (ponte, per arrivare alla procedura, o esecutivi, per attuare il piano). Questi finanziamenti sono **prededucibili** e i rimborsi non sono revocabili in un successivo fallimento.',
        ] },
        { t: 'h', text: 'Il concordato in bianco (con riserva)' },
        { t: 'p', text: 'Si deposita la domanda **senza proposta e piano** e si hanno **60-120 giorni** per completarla. Il vantaggio è avere subito gli effetti dell’apertura: **blocco** delle azioni esecutive e cautelari dalla data della domanda e **sospensione** dell’istruttoria prefallimentare finché il tribunale non decide sull’ammissione.' },
        { t: 'list', items: [
          'Il tribunale può nominare subito un **commissario giudiziale**, perché il debitore non disperda il patrimonio nell’attesa.',
          'Può imporre **obblighi informativi** periodici sulla situazione dell’impresa.',
          'Può **abbreviare** il termine se vede rischi per i creditori.',
        ] },
      ],
    },
    {
      title: 'Ammissione ed effetti',
      blocks: [
        { t: 'p', text: 'Il tribunale fa un controllo di **legittimità** (art. 162): presupposti e documentazione. Non giudica la **convenienza**, che spetta ai creditori con il voto. Se va tutto bene apre la procedura con **decreto** e nomina giudice delegato e **commissario giudiziale**; altrimenti rigetta e, se ci sono ricorsi e presupposti, può dichiarare il fallimento.' },
        { t: 'table', head: ['Effetto dell’apertura', 'Contenuto'], rows: [
          ['Spossessamento attenuato', 'Il debitore gestisce l’impresa: **ordinaria amministrazione** libera, **straordinaria** solo con autorizzazione del giudice delegato. Gli atti non autorizzati sono inefficaci e possono portare alla revoca della procedura'],
          ['Blocco delle azioni', 'I creditori anteriori non possono iniziare o proseguire azioni esecutive e cautelari fino all’omologazione'],
          ['Continuità', 'L’attività prosegue; pagamenti a fornitori strategici e nuovi finanziamenti con autorizzazione'],
          ['Contratti pendenti', 'Proseguono; su richiesta del debitore possono essere **sospesi** per non più di **60 giorni** o sciolti'],
          ['Atti anteriori', 'Niente revocatorie: il concordato non mira a ricostruire il patrimonio'],
          ['Esdebitazione', 'Effetto naturale se il concordato va a buon fine, senza bisogno di chiederla'],
        ] },
      ],
    },
    {
      title: 'Voto, omologazione, esecuzione',
      blocks: [
        { t: 'h', text: 'La relazione del commissario' },
        { t: 'p', text: 'Il commissario **vigila** sul debitore e sulla correttezza della procedura. Prima del voto manda ai creditori una relazione su **cause della crisi**, **condotta** del debitore, eventuali **proposte concorrenti** e su quanto i creditori otterrebbero con il **fallimento**. Se scopre frodi, occultamento di attivo o atti dannosi, lo segnala al tribunale, che può **revocare** la procedura e, su ricorso, dichiarare il fallimento.' },
        { t: 'h', text: 'Il voto' },
        { t: 'list', items: [
          'Votano i **chirografari** e i **privilegiati** che rinunciano alla prelazione o per la parte non coperta dal valore del bene.',
          'La proposta passa con la **maggioranza dei crediti** ammessi al voto.',
          'Con le **classi** serve in più la maggioranza nel **maggior numero di classi** (art. 177 l.f.).',
          'Se nessuna proposta raggiunge la maggioranza, la procedura si chiude e, se ci sono i presupposti, si può arrivare al fallimento.',
        ] },
        { t: 'warn', text: 'Gli appunti dicono che con le classi serve la maggioranza «in ciascuna classe»: la legge fallimentare chiede la maggioranza nel **maggior numero** di classi.' },
        { t: 'h', text: 'L’omologazione' },
        { t: 'list', items: [
          'Il tribunale verifica la **regolarità** della procedura, che il piano sia ancora **fattibile**, che il debitore si sia comportato **correttamente** (senza nascondere attivo o inventare passivo) e che i crediti ammessi al voto **esistano davvero**.',
          'Se i dissenzienti fanno **opposizione**, il tribunale entra nel **merito**: confronta la proposta con l’alternativa del fallimento e può omologare anche contro il dissenso se la proposta è conveniente (**cram down**).',
        ] },
        { t: 'h', text: 'L’esecuzione' },
        { t: 'list', items: [
          'Cessano i vincoli dell’apertura; il commissario resta e **sorveglia** l’adempimento del piano.',
          'Il concordato vincola **tutti** i creditori anteriori.',
          'Libera i **soci illimitatamente responsabili**.',
          '**Esdebita** il debitore, ma **non i garanti**.',
          'Inadempimento grave: **risoluzione**. Frode ai creditori: **annullamento**. In entrambi i casi il debitore rischia il fallimento.',
        ] },
        { t: 'flow', title: 'Il percorso', items: [
          'Ricorso con proposta, piano, documenti e attestazione',
          'Decreto di apertura e nomina del commissario',
          'Relazione del commissario ai creditori',
          'Voto a maggioranza dei crediti',
          'Omologazione, con eventuale cram down',
          'Esecuzione sorvegliata dal commissario',
        ] },
      ],
    },
    {
      title: 'Il concordato fallimentare',
      blocks: [
        { t: 'p', text: 'Si propone **dentro** un fallimento già aperto, dopo lo spossessamento, e se omologato lo **chiude** (art. 124 l.f.). Il contenuto della proposta è come quello del concordato preventivo.' },
        { t: 'table', head: ['', 'Concordato preventivo', 'Concordato fallimentare'], rows: [
          ['Quando', 'Prima del fallimento', 'Durante il fallimento'],
          ['Chi propone', 'Il debitore (e i creditori con proposte concorrenti)', 'Creditori o terzi; il **fallito** solo dopo **un anno** dalla sentenza ed entro **due anni** dal decreto di esecutività del passivo'],
          ['A chi si deposita', 'Al tribunale', 'Al **giudice delegato**'],
          ['Pareri', 'Relazione del commissario', 'Parere del **curatore** sulla convenienza e del **comitato dei creditori**; del tribunale se ci sono classi'],
          ['Voto', 'Maggioranza dei crediti', 'Maggioranza dei crediti, con **silenzio-assenso**: chi non dissente si considera favorevole'],
        ] },
        { t: 'p', text: 'Il limite per il fallito spinge l’imprenditore a muoversi **in tempo**, con il concordato preventivo, invece di aspettare il fallimento. Se ci sono opposizioni, il tribunale valuta nel merito la convenienza rispetto alla liquidazione. L’omologazione vincola tutti i creditori e chiude il fallimento.' },
      ],
    },
    {
      title: 'Accordi stragiudiziali e accordi di ristrutturazione',
      blocks: [
        { t: 'p', text: 'Per non far esplodere la crisi, il debitore spesso tratta **in privato** con alcuni creditori: riduzione del debito o dilazione. Questi accordi possono derogare alla **par condicio** ma hanno **efficacia relativa**: vincolano solo chi li firma, e gli altri creditori possono continuare ad agire.' },
        { t: 'list', items: [
          'Se poi arriva il fallimento, i **pagamenti** fatti in esecuzione dell’accordo sono **revocabili**, perché hanno favorito alcuni creditori.',
          'Chi ha **finanziato** il debitore per eseguire l’accordo **non** ha la prededuzione.',
        ] },
        { t: 'p', text: 'Per evitare questi rischi si può chiedere l’**omologazione** al tribunale: è l’**accordo di ristrutturazione dei debiti** (art. 182-bis l.f.). Può consistere in riduzione del capitale, dilazione, rinuncia agli interessi, conversione dei crediti in **partecipazioni**, postergazioni o rinunce a garanzie. La legge non ne limita il contenuto e non impone la par condicio.' },
        { t: 'list', items: [
          'Deve aderire chi rappresenta almeno il **60%** dei crediti.',
          'I creditori **estranei** vanno pagati **per intero** entro **120 giorni** dall’omologazione (o dalla scadenza, se successiva).',
          'Possono usarlo anche gli imprenditori **agricoli**.',
          'Pubblicando l’accordo nel **registro delle imprese**, e anche già durante le trattative con un controllo preventivo del tribunale, il debitore ottiene il **blocco** delle azioni esecutive e cautelari e l’inefficacia delle prelazioni acquisite dopo.',
          'Il debitore **non subisce lo spossessamento**, ma nuovi finanziamenti e pagamenti di debiti anteriori richiedono l’**autorizzazione** del tribunale.',
          'Manca un organo che vigili: sono i creditori a controllare, chiedendo informazioni e la **risoluzione** se il debitore non adempie. Ogni creditore può chiedere l’**annullamento** se emergono frodi.',
          'Gli estranei possono fare **opposizione** prima dell’omologazione.',
        ] },
        { t: 'example', title: 'L’azienda agricola', steps: ['Debiti per 2 milioni; accordo con banche titolari di 1,3 milioni.', '1,3 / 2 = 65% > 60%.'], result: 'Può chiedere l’omologazione; gli estranei vanno pagati per intero.' },
      ],
    },
    {
      title: 'Il Codice della crisi: principi',
      blocks: [
        { t: 'p', text: 'Il **Codice della crisi d’impresa e dell’insolvenza** (d.lgs. 14/2019) sostituisce la legge fallimentare e la legge sul sovraindebitamento (l. 3/2012). Doveva entrare in vigore nel 2020; dopo vari rinvii è in vigore dal **15 luglio 2022**. Resta fuori l’**amministrazione straordinaria** delle grandi imprese, guidata dal potere politico più che da quello giudiziario.' },
        { t: 'list', items: [
          'Ispirato al diritto europeo: far **emergere presto** la crisi, prima dell’insolvenza, e favorire la **ristrutturazione** e la **continuità aziendale**, anche con un altro imprenditore, rispetto alla liquidazione.',
          'Un **procedimento unitario** di accesso, qualunque sia il debitore e il fine. Se ci sono più domande, ha **priorità** quella che regola la crisi senza liquidazione, se conveniente per i creditori e non abusiva (art. 7).',
          'Procedure di **gruppo** uniche, con masse separate.',
          'Riti semplificati; il fallimento diventa **liquidazione giudiziale**.',
          'L’imprenditore individuale deve adottare **misure** idonee e quello collettivo **assetti adeguati** a rilevare la crisi in tempo e reagire.',
          'Obblighi di **segnalazione** a carico degli organi di controllo e dei **creditori pubblici qualificati** (Agenzia delle entrate, INPS, agente della riscossione).',
          '**Misure premiali** per chi si attiva in tempo: più tempo per le misure protettive e per proporre concordato o accordi, riduzione di interessi e sanzioni fiscali, attenuazione della responsabilità penale.',
        ] },
        { t: 'warn', text: 'Gli appunti descrivono l’**allerta** gestita dagli **OCRI** e gli indicatori del CNDCEC: nella versione entrata in vigore nel 2022 l’allerta è stata sostituita dalla **composizione negoziata della crisi**, un percorso volontario e riservato con un **esperto indipendente** che aiuta l’imprenditore a trattare con i creditori.' },
      ],
    },
    {
      title: 'Il Codice della crisi: gli strumenti',
      blocks: [
        { t: 'tree', root: 'Strumenti di regolazione della crisi', children: [
          { label: 'Accordi', sub: ['Non omologabili: accordi in esecuzione di piani di risanamento', 'Omologabili: accordi di ristrutturazione (ordinari, agevolati, a efficacia estesa) e convenzioni di moratoria'] },
          { label: 'Strumenti giudiziali', sub: ['Concordato preventivo', 'Per i sovraindebitati: ristrutturazione dei debiti del consumatore e concordato minore'] },
          { label: 'Procedure liquidatorie', sub: ['Liquidazione giudiziale', 'Liquidazione controllata del sovraindebitato'] },
        ] },
        { t: 'h', text: 'Piani di risanamento' },
        { t: 'p', text: 'Nella legge fallimentare comparivano quasi di passaggio, tra le esenzioni dalla revocatoria. Ora sono uno strumento autonomo per ogni imprenditore. L’accento è sugli **accordi** che eseguono il piano, che devono essere **scritti** e avere **data certa**. Il piano ha una struttura rigida, con le azioni da compiere, e il professionista ne attesta la fattibilità **giuridica ed economica**.' },
        { t: 'h', text: 'Accordi di ristrutturazione (artt. 57 ss.)' },
        { t: 'table', head: ['Strumento', 'Chi vincola', 'Tratti chiave'], rows: [
          ['Accordo stragiudiziale', 'Solo chi lo firma', 'Pagamenti revocabili in caso di fallimento; niente prededuzione'],
          ['Piano di risanamento attestato', 'Chi vi aderisce', 'Atti esecutivi esenti da revocatoria'],
          ['Accordo di ristrutturazione', 'Aderenti; estranei pagati per intero', '60% dei crediti, omologazione, estranei entro 120 giorni; anche agricolo, non minore'],
          ['Accordo agevolato', 'Aderenti', 'Basta il **30%** dei crediti, se il debitore rinuncia alla moratoria per gli estranei e non chiede misure protettive'],
          ['Accordo a efficacia estesa', 'Anche i dissenzienti della stessa categoria', 'Il trattamento accettato dalla maggioranza di una categoria omogenea si estende agli altri; piano non liquidatorio'],
          ['Convenzione di moratoria', 'Creditori della categoria', 'Solo **dilatoria**, mai remissoria'],
        ] },
        { t: 'list', items: [
          'L’accordo si può **modificare** anche in esecuzione: il piano va riformulato e vale se i creditori, avvisati, non si oppongono entro **30 giorni** o se l’opposizione è respinta.',
          'Si può omologare anche senza l’adesione dell’**amministrazione finanziaria**, quando è decisiva per la maggioranza, se l’accordo è per lei più conveniente della liquidazione.',
        ] },
        { t: 'h', text: 'Concordato preventivo nel Codice' },
        { t: 'list', items: [
          'Per l’imprenditore commerciale **non minore** in crisi o insolvenza (art. 85).',
          'Il **liquidatorio** è ammesso solo con **risorse esterne** che aumentino di almeno il **10%** il soddisfacimento rispetto alla liquidazione giudiziale, e deve assicurare almeno il **20%** ai chirografari (art. 84).',
          'Il tribunale verifica l’ammissibilità giuridica e la **fattibilità economica** del piano.',
          'La domanda **in bianco** resta, ma le **misure protettive** non sono automatiche: le concede il giudice. Gli atti straordinari si autorizzano solo con informazioni sul piano; restano informativa periodica e commissario.',
          'Contratti pendenti: anche quelli non ancora eseguiti per intero nelle prestazioni principali da **entrambe** le parti (art. 97).',
          'Niente più **adunanza**: i creditori votano in via **telematica**. Contro la sentenza di omologazione c’è **reclamo**.',
          'Il liquidatore può esercitare l’azione sociale di responsabilità; se il debitore non esegue il piano, il tribunale può dare al **commissario** i poteri per farlo al suo posto (art. 118).',
        ] },
        { t: 'warn', text: 'Gli appunti citano l’art. 66 per l’accordo agevolato e una moratoria di 180 giorni: nel testo in vigore l’accordo agevolato è all’**art. 60** e il termine per pagare gli estranei è di **120 giorni**.' },
      ],
    },
    {
      title: 'La liquidazione giudiziale',
      blocks: [
        { t: 'p', text: 'È la procedura liquidatoria per l’insolvenza dell’imprenditore commerciale **non minore** (art. 121). Resta la soglia dei **30.000 €** di debiti scaduti (art. 49).' },
        { t: 'table', head: ['Istituto', 'Regola nel Codice'], rows: [
          ['Iniziativa', 'Anche le **autorità amministrative** di controllo e vigilanza (art. 37)'],
          ['Esdebitazione', 'Un **diritto** dopo **tre anni** dall’apertura, o alla chiusura se prima'],
          ['Curatore', 'Tiene un **registro informatico** giornaliero delle operazioni'],
          ['Compensazione', 'Esclusa per crediti acquistati dopo la domanda o nell’anno prima (art. 155)'],
          ['Atti gratuiti inefficaci', 'I beni tornano alla procedura con la sola **trascrizione** della sentenza (art. 163)'],
          ['Rimborsi di finanziamenti soci e infragruppo', 'Trattati come i pagamenti anticipati: inefficaci'],
          ['Revocatoria', 'Periodo calcolato a ritroso dalla **domanda** (art. 166)'],
          ['Contratti pendenti', 'Prededucibili solo i crediti maturati nella procedura; i contratti personali si sciolgono, salvo scelta del curatore'],
          ['Domande tardive', '**Sei mesi**'],
          ['Esercizio dell’impresa', 'L’apertura non fa cessare automaticamente l’attività (art. 211)'],
          ['Liquidazione dell’attivo', 'Programma per sezioni; inizio entro **12 mesi**, fine entro **5 anni** (prorogabili a 7)'],
          ['Riparti', 'Progetto inviato in via telematica; riconosciuto il rango dei crediti postergati'],
          ['Chiusura', 'Possibile anche con giudizi ancora pendenti'],
          ['Concordato nella liquidazione giudiziale', 'Ammesso con nuove risorse che aumentino l’attivo di almeno il **10%** (art. 240)'],
        ] },
        { t: 'list', items: [
          'Nelle **società** il curatore esercita ogni azione di responsabilità e può compiere le operazioni sull’organizzazione e la struttura finanziaria previste nel programma.',
          'L’estensione ai soci illimitatamente responsabili vale anche per gli **enti collettivi non societari**; il **PM** può chiedere l’estensione ai soci occulti.',
          'Viene riconosciuta la **supersocietà di fatto**: una s.n.c. di fatto tra imprese o persone, ricavata dall’attività svolta in concreto.',
        ] },
      ],
    },
    {
      title: 'Il sovraindebitamento',
      blocks: [
        { t: 'p', text: 'Riguarda chi **non può** finire in liquidazione giudiziale o coatta: **consumatori**, **professionisti**, **imprenditori minori**, **agricoli** e altri. Le procedure passano per l’**OCC** (organismo di composizione della crisi) e, se vanno a buon fine, portano all’**esdebitazione**.' },
        { t: 'table', head: ['Procedura', 'Per chi', 'Come funziona'], rows: [
          ['Ristrutturazione dei debiti del consumatore (artt. 67 ss.)', 'Solo il **consumatore**, cioè chi si è indebitato per scopi estranei all’attività professionale', 'Con l’OCC presenta piano e proposta; il giudice li dichiara ammissibili, può concedere misure protettive e omologa con sentenza. Se il debitore non esegue, l’omologazione si revoca'],
          ['Concordato minore (artt. 74 ss.)', 'Tutti i sovraindebitati **tranne il consumatore**', 'Come un concordato preventivo semplificato, orientato alla continuità. Serve l’adesione della maggioranza dei crediti; il giudice omologa con sentenza'],
          ['Liquidazione controllata (artt. 268 ss.)', 'Tutti i sovraindebitati', 'Liquidatoria. La chiedono il debitore, i creditori o, per l’imprenditore, il PM; un **liquidatore** fa il lavoro del curatore'],
        ] },
        { t: 'h', text: 'Il debitore incapiente meritevole (art. 283)' },
        { t: 'p', text: 'La persona fisica che non può offrire **nulla** ai creditori, nemmeno in futuro, può ottenere l’esdebitazione se è **meritevole**: niente atti in frode, niente dolo o colpa grave nell’indebitarsi. La domanda passa per l’OCC; il tribunale decide con **decreto**, reclamabile dai creditori entro **30 giorni**. Resta un solo obbligo: pagare se entro **quattro anni** arrivano utilità rilevanti che permettono di soddisfare i creditori per almeno il **10%**.' },
      ],
    },
  ],
  summary: [
    'Concordato preventivo: crisi (che include l’insolvenza), proposta ai chirografari, classi; il debitore conserva la gestione.',
    'Liquidatorio almeno 20%; proposte concorrenti con il 10% dei crediti se sotto 40% (30% in continuità); vendite con procedure competitive.',
    'In bianco: 60-120 giorni, blocco immediato delle azioni. Ammissione con controllo di legittimità; straordinaria amministrazione autorizzata; contratti sospesi fino a 60 giorni.',
    'Voto: maggioranza dei crediti e del maggior numero di classi; omologazione con cram down; esdebita il debitore, non i garanti; risoluzione e annullamento.',
    'Concordato fallimentare: chiude il fallimento; il fallito propone dopo un anno e entro due dal passivo esecutivo; silenzio-assenso.',
    'Accordi 182-bis: 60%, omologazione, estranei pagati in 120 giorni, anche agricoli. Nel Codice anche agevolati (30%), a efficacia estesa, moratoria.',
    'Codice della crisi: emersione anticipata, composizione negoziata, liquidazione giudiziale, esdebitazione dopo tre anni, tardive in sei mesi.',
    'Sovraindebitamento: ristrutturazione del consumatore, concordato minore, liquidazione controllata, incapiente meritevole (quattro anni, 10%).',
  ],
};

export default c;
