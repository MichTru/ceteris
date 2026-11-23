import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd12',
  intro:
    'Ultimo capitolo: come si divide il rischio d’impresa tra più società (controllo, collegamento, direzione e coordinamento), le società a scopo mutualistico (cooperative e mutue assicuratrici) e le operazioni straordinarie che cambiano forma o struttura delle società: trasformazione, fusione e scissione.',
  sections: [
    {
      title: 'Articolare il rischio d’impresa',
      blocks: [
        { t: 'p', text: 'Chi è debitore risponde con **tutti i suoi beni**, presenti e futuri (art. 2740). Per esporre al rischio di un’attività solo una parte del patrimonio servono strumenti appositi.' },
        { t: 'list', items: [
          'Il **gruppo di società**: chi controlla più società dirige attività che fanno capo a soggetti giuridici distinti, ciascuno con il proprio patrimonio, ma con un unico centro economico, la **capogruppo**. La legge non lo vieta: vuole evitare che l’integrazione danneggi i **creditori** e i **soci di minoranza** delle singole società.',
          'Nella sola **s.p.a.**, i **patrimoni destinati** a uno specifico affare (art. 2447-bis), separati dal resto del patrimonio, nel limite del **10%** del patrimonio netto.',
        ] },
        { t: 'warn', text: 'Gli appunti citano «art 2470» per la responsabilità patrimoniale: è l’**art. 2740**.' },
      ],
    },
    {
      title: 'Controllo e collegamento',
      blocks: [
        { t: 'p', text: 'In Italia la proprietà delle società è spesso concentrata e c’è quasi sempre un socio di **controllo**. Già il controllo fa scattare regole su vigilanza e informazione. L’ordinamento ha più nozioni di controllo; quella del codice è nell’art. 2359.' },
        { t: 'table', head: ['Figura (art. 2359)', 'Criterio'], rows: [
          ['Controllo **di diritto**', 'Maggioranza dei voti nell’assemblea ordinaria'],
          ['Controllo **di fatto**', 'Voti sufficienti per un’**influenza dominante** nell’assemblea ordinaria'],
          ['Controllo **contrattuale**', 'Influenza dominante per **vincoli contrattuali** (per esempio un’esclusiva)'],
          ['**Collegamento**', '**Influenza notevole**, presunta con **1/5** dei voti in assemblea ordinaria (**1/10** se quotata)'],
        ] },
        { t: 'p', text: 'Per il controllo di diritto e di fatto si contano anche i voti di **controllate**, **fiduciarie** e **persone interposte** (controllo indiretto), non quelli esercitati per conto di terzi.' },
        { t: 'h', text: 'Le regole sul controllo' },
        { t: 'list', items: [
          '**Vigilanza**: gli organi delegati riferiscono al consiglio e ai sindaci anche sulle operazioni delle **controllate** (art. 2381).',
          '**Informazione**: partecipazioni e rapporti con controllate in voci apposite dello stato patrimoniale (art. 2424); analisi dei settori anche tramite controllate nella relazione sulla gestione (art. 2428); deposito in sede dei bilanci delle controllate (art. 2429); **bilancio consolidato** (d.lgs. 127/1991), che rappresenta il gruppo come un’unica impresa eliminando partecipazioni, crediti, debiti e operazioni interne.',
          '**Tutela del capitale**: la controllata **non può sottoscrivere** azioni o quote della controllante; può **acquistarle**, se interamente liberate, nei limiti di utili distribuibili e riserve disponibili; se la controllante fa ricorso al mercato, non oltre **1/5** del suo capitale (artt. 2359-bis ss.).',
        ] },
      ],
    },
    {
      title: 'Direzione e coordinamento',
      blocks: [
        { t: 'p', text: 'Ciò che caratterizza il **gruppo** è l’attività di **direzione e coordinamento** della capogruppo: la **pianificazione** delle principali scelte delle società del gruppo secondo una politica comune. Può riguardare società di ogni tipo. La legge non la definisce, ma la **presume**, salvo prova contraria, in capo a chi **consolida** i bilanci o **controlla** (art. 2497-sexies), e la estende a chi la esercita per **contratto** o clausola statutaria (art. 2497-septies). Ci sono anche regole sulla crisi dei gruppi nel Codice della crisi.' },
        { t: 'h', text: 'Le norme fisiologiche: trasparenza' },
        { t: 'list', items: [
          'La società diretta indica la capogruppo negli **atti** e nella **corrispondenza** e si iscrive in un’apposita **sezione del registro**; gli amministratori che non lo fanno, o non cancellano l’iscrizione quando la direzione cessa, rispondono dei danni (art. 2497-bis).',
          'Nella **relazione sulla gestione** si indicano i rapporti con la capogruppo e le altre società del gruppo e l’effetto della direzione sui risultati; nella **nota integrativa** un prospetto con i dati essenziali dell’ultimo bilancio della capogruppo.',
          'Le **decisioni influenzate** dalla capogruppo vanno **motivate analiticamente**, con le ragioni e gli interessi che le hanno determinate, non con formule generiche, e riportate nella relazione sulla gestione (art. 2497-ter).',
        ] },
        { t: 'h', text: 'Le norme patologiche' },
        { t: 'def', term: 'Responsabilità della capogruppo (art. 2497)', text: 'La **società o ente** che esercita direzione e coordinamento nell’**interesse imprenditoriale proprio o altrui**, **violando i principi di corretta gestione** societaria e imprenditoriale, risponde verso i **soci** della società diretta per il danno alla **redditività e al valore** della partecipazione, e verso i suoi **creditori** per la lesione dell’**integrità del patrimonio**.' },
        { t: 'list', items: [
          'Riguarda solo società ed enti, **non le persone fisiche** al vertice.',
          'Non c’è responsabilità se il danno manca alla luce del **risultato complessivo** della direzione (**vantaggi compensativi**) o è stato eliminato con operazioni apposite. Il vantaggio lo prova la capogruppo, salvo che risulti dalla relazione sulla gestione.',
          'Rispondono **in solido** chi ha **partecipato** al fatto (amministratori e sindaci, anche di fatto, della capogruppo e della diretta, soci della capogruppo, società sorelle) e chi ne ha tratto **consapevolmente beneficio**, nei limiti del vantaggio ottenuto.',
          'Soci e creditori agiscono solo se **non sono stati soddisfatti** dalla società diretta; nelle procedure concorsuali agisce il **curatore**.',
          'Prevale la tesi della natura **contrattuale**, con effetti su prova e prescrizione.',
          '**Finanziamenti** infragruppo (art. 2497-quinquies): i finanziamenti della capogruppo o delle società sorelle alla società diretta sono **postergati** come quelli dei soci di s.r.l.; non quelli della diretta verso la capogruppo.',
        ] },
        { t: 'h', text: 'Il recesso del socio della società diretta (art. 2497-quater)' },
        { t: 'list', items: [
          'Se la capogruppo delibera una **trasformazione** che ne cambia lo scopo sociale, o modifica il proprio **oggetto** in modo da alterare sensibilmente le condizioni economiche e patrimoniali della società diretta.',
          'Se il socio ottiene una **condanna** della capogruppo per responsabilità.',
          'All’**inizio** o alla **fine** della direzione e coordinamento, se la società non è quotata, non c’è stata un’OPA e cambiano davvero le condizioni di rischio dell’investimento.',
        ] },
      ],
    },
    {
      title: 'Le cooperative: scopo e requisiti',
      blocks: [
        { t: 'p', text: 'Nascono a metà Ottocento contro le disuguaglianze della rivoluzione industriale: un’impresa **democratica** che migliora il benessere dei meno abbienti con beni e lavoro. L’art. **45 della Costituzione** ne riconosce la **funzione sociale**, e per questo godono di agevolazioni.' },
        { t: 'list', items: [
          'Requisiti (art. 2511): **scopo mutualistico** e **capitale variabile**.',
          'Si applicano le regole della **s.p.a.**; l’atto costitutivo può scegliere quelle della **s.r.l.** se i soci cooperatori sono meno di **20** o l’attivo non supera **1 milione** (art. 2519). Sotto i **9** soci la s.r.l. è obbligatoria: allora bastano **3** soci persone fisiche (art. 2522).',
          'Hanno **personalità giuridica** e delle obbligazioni risponde solo la cooperativa (art. 2518).',
        ] },
        { t: 'h', text: 'Lo scopo mutualistico' },
        { t: 'p', text: 'Il codice non lo definisce. Secondo la Relazione al codice consiste nel fornire **beni, servizi o occasioni di lavoro** direttamente ai soci a **condizioni migliori** del mercato: il fine dei soci è soddisfare un **bisogno economico**, non remunerare il capitale.' },
        { t: 'list', items: [
          'Resta l’esercizio in comune di un’attività economica e può esserci **lucro oggettivo**; il **lucro soggettivo** è solo **limitato**.',
          'L’atto costitutivo può prevedere attività con i **terzi** (art. 2521), utile per finanziare la cooperativa.',
          'I soci sono i destinatari elettivi delle prestazioni, ma non necessariamente esclusivi. Le prestazioni nascono da **scambi mutualistici**, contratti distinti dal rapporto sociale; il vantaggio è proporzionale agli scambi.',
          'Principio della **porta aperta**: chi ha i requisiti va favorito nell’ingresso e chi non è più interessato nell’uscita. Ne deriva il **capitale variabile**: entrate e uscite non richiedono modifiche dell’atto costitutivo, e non c’è un capitale minimo.',
          'Carattere **democratico**: **voto capitario**, un voto a testa qualunque sia la quota (art. 2538), e un **limite** al possesso di quote o azioni.',
        ] },
      ],
    },
    {
      title: 'La mutualità prevalente',
      blocks: [
        { t: 'p', text: 'La distinzione tra cooperative **a mutualità prevalente** e **diverse** serve soprattutto a riservare alle prime le **agevolazioni fiscali**, in cambio di forti limiti al lucro soggettivo. Anche le altre possono avere agevolazioni di altro tipo.' },
        { t: 'list', items: [
          'Sono a mutualità prevalente quelle che operano **prevalentemente** con i soci consumatori o utenti, o si avvalgono prevalentemente del **lavoro** o degli apporti dei soci. Si iscrivono in una sezione dell’**albo delle cooperative**, dove depositano i bilanci (art. 2512).',
          'La prevalenza si misura con **criteri legali** (oltre il **50%** dei ricavi, del costo del lavoro o dei beni, secondo il tipo di scambio), documentati da amministratori e sindaci nella nota integrativa (art. 2513).',
        ] },
        { t: 'table', head: ['Clausole obbligatorie (art. 2514)', 'Contenuto'], rows: [
          ['Dividendi', 'Non oltre l’interesse massimo dei **buoni postali fruttiferi** più **2,5 punti**, sul capitale versato'],
          ['Strumenti finanziari dei soci', 'Non oltre **2 punti** in più del limite dei dividendi'],
          ['Riserve', '**Non distribuibili** ai soci'],
          ['Scioglimento', 'Patrimonio, dedotti capitale e dividendi maturati, ai **fondi mutualistici** per la cooperazione'],
        ] },
        { t: 'p', text: 'Si perde la qualifica se per **due esercizi** consecutivi non si rispettano i criteri di prevalenza o se si modificano le clausole con le maggioranze dell’assemblea straordinaria.' },
      ],
    },
    {
      title: 'Le cooperative: costituzione e soci',
      blocks: [
        { t: 'list', items: [
          'Costituzione come nelle società di capitali: atto pubblico, deposito del notaio entro **20 giorni**, 25% del denaro in banca, stima dei conferimenti in natura; personalità con l’iscrizione. Nullità e modifiche come nella s.p.a., ma entrate e uscite di soci non modificano l’atto (art. 2524).',
          'L’atto costitutivo indica: soci (almeno **9**, o **3** con regole della s.r.l.); denominazione con «**società cooperativa**»; quote nei limiti di legge; **oggetto** con riferimento ai requisiti e agli interessi dei soci; **requisiti e procedura di ammissione**, non discriminatori (non può essere socio chi fa impresa in concorrenza); regole su recesso, esclusione, utili e **ristorni**. I rapporti mutualistici sono spesso in **regolamenti** approvati dall’assemblea con maggioranza straordinaria.',
          'Partecipazioni in **azioni** (modello s.p.a.) o **quote** (modello s.r.l.). Nessun socio può avere più di **100.000 €**; con oltre 500 soci l’atto può alzare il limite fino al **2%** del capitale (art. 2525).',
          'Si possono emettere **obbligazioni** e, nel modello s.p.a., **strumenti finanziari** (art. 2526), con assemblee speciali e rappresentanti comuni.',
        ] },
        { t: 'h', text: 'Ammissione e trasferimento' },
        { t: 'list', items: [
          'L’**ammissione** la decidono gli **amministratori** su domanda; va comunicata e annotata nel libro dei soci. Il **rigetto** va motivato e comunicato entro **60 giorni**, anche per ragioni di opportunità; entro altri **60 giorni** l’interessato può chiedere che decida l’**assemblea**, la cui decisione vincola gli amministratori (art. 2528).',
          'Il **trasferimento** della partecipazione è inefficace verso la società senza l’**autorizzazione** degli amministratori (art. 2530). Se l’atto costitutivo lo vieta, il socio può recedere dopo **due anni** dall’ingresso con **90 giorni** di preavviso.',
          'Chi cede una partecipazione non liberata risponde dei versamenti per **un anno** (art. 2536).',
        ] },
        { t: 'h', text: 'Uscita del socio' },
        { t: 'list', items: [
          '**Recesso** nei casi di legge e statuto, mai **parziale** (art. 2532), per evitare che chi riduce la quota mantenga lo stesso voto. Si comunica per raccomandata; gli amministratori lo esaminano entro **60 giorni** limitandosi a verificarne i presupposti; se lo negano, il socio può fare opposizione al tribunale entro **60 giorni**.',
          'Il recesso ha effetto subito sul rapporto sociale; sui rapporti mutualistici alla chiusura dell’esercizio se comunicato **tre mesi** prima, altrimenti alla chiusura del successivo.',
          '**Esclusione** (art. 2533) per: mancato **conferimento** dopo intimazione; **gravi inadempienze** verso legge, contratto, regolamento o rapporto mutualistico; perdita dei **requisiti**; interdizione, inabilitazione o condanna con interdizione dai pubblici uffici; impossibilità del conferimento; **fallimento** del socio; altre cause statutarie che specificano queste. È sempre **deliberata**, mai automatica, e scioglie subito anche i rapporti mutualistici.',
          '**Morte**: gli eredi ricevono la liquidazione o, se lo statuto lo prevede e hanno i requisiti, subentrano (art. 2534).',
          'La quota si liquida sulla base del **bilancio** dell’esercizio in cui il rapporto si scioglie (art. 2535).',
        ] },
      ],
    },
    {
      title: 'Le cooperative: organi, utili, scioglimento',
      blocks: [
        { t: 'list', items: [
          '**Assemblea**: voto **capitario**; nelle cooperative **consortili** il voto può essere proporzionale agli scambi. Votano i soci iscritti da almeno **90 giorni**. Nelle grandi cooperative non quotate ci sono le **assemblee separate**, che nominano delegati all’assemblea generale (art. 2540).',
          '**Amministratori**: la **maggioranza** scelta tra i soci cooperatori (o persone indicate dai soci enti); alcuni possono essere nominati dallo Stato o da enti pubblici, ma la maggioranza resta di nomina assembleare (art. 2542).',
          '**Collegio sindacale** obbligatorio nei casi della s.r.l. e se sono emessi strumenti finanziari non partecipativi.',
          '**Vigilanza** amministrativa del Ministero sul rispetto dello scopo mutualistico, e **controllo giudiziario** (art. 2409) per tutte.',
        ] },
        { t: 'h', text: 'Bilancio, utili, ristorni' },
        { t: 'list', items: [
          'Amministratori e sindaci indicano nel bilancio i **criteri** seguiti per lo scopo mutualistico (art. 2545).',
          'Almeno il **30%** degli utili va a **riserva legale**, perché il capitale è variabile e senza minimo.',
          'Le non quotate distribuiscono **dividendi** solo se il patrimonio netto supera **un quarto** dell’indebitamento; percentuali e regole le fissa l’atto costitutivo (art. 2545-quinquies).',
          'Il **ristorno** è il vantaggio mutualistico dato a posteriori: la cooperativa vende ai soci a prezzi di mercato (o li paga a valori di mercato) e poi restituisce l’**avanzo** in proporzione alla **quantità e qualità degli scambi**. Non è un utile: non si distribuisce se c’è una perdita, non segue il capitale e non ha i limiti dei dividendi (art. 2545-sexies).',
        ] },
        { t: 'h', text: 'Scioglimento e insolvenza' },
        { t: 'list', items: [
          'Oltre alle cause delle società di capitali: **perdita totale** del capitale (art. 2545-duodecies) e numero di soci sotto il minimo non ricostituito entro **un anno** (art. 2522).',
          'In caso di **insolvenza** l’autorità di vigilanza dispone la **liquidazione coatta amministrativa**; quelle che svolgono attività commerciale possono anche fallire, secondo il criterio della **prevenzione** (art. 2545-terdecies).',
          'Nelle cooperative a **mutualità prevalente** il residuo della liquidazione, dedotti capitale e dividendi, va ai **fondi mutualistici**.',
        ] },
        { t: 'warn', text: 'Gli appunti dicono che tutte le cooperative devono devolvere il residuo di liquidazione ai fondi mutualistici: l’obbligo deriva dalle clausole dell’art. 2514 e riguarda le cooperative a **mutualità prevalente**.' },
        { t: 'h', text: 'Le mutue assicuratrici' },
        { t: 'p', text: 'Sono cooperative particolari in cui si diventa e si resta **socio** solo stipulando un **contratto di assicurazione** con la società; il rapporto sociale si scioglie con l’assicurazione (art. 2546). Nelle **cooperative di assicurazione**, invece, socio e assicurato sono rapporti distinti. I contributi dei soci sono insieme apporto e premio, e possono variare entro il massimo dell’atto costitutivo. Atto pubblico, iscrizione dopo l’**autorizzazione** dell’**IVASS**, che le vigila; risponde solo il patrimonio sociale.' },
      ],
    },
    {
      title: 'La trasformazione',
      blocks: [
        { t: 'p', text: 'Un tempo era solo il cambio di **tipo** societario senza estinzione. Dal 2003 comprende anche trasformazioni **eterogenee**, che cambiano lo **scopo** o la **forma giuridica** dell’ente. Il tratto comune è la **continuità**: l’ente trasformato **conserva diritti e obblighi** e prosegue tutti i rapporti, anche processuali (art. 2498). Così si evita il costo di liquidare e ricostituire.' },
        { t: 'list', items: [
          'È possibile anche durante una **procedura concorsuale**, se compatibile (art. 2499).',
          'Ha effetto dall’ultimo adempimento pubblicitario; dopo l’**iscrizione** l’invalidità non si può più pronunciare (art. 2500-bis).',
          'Sono ammesse anche trasformazioni **atipiche**, se non ledono norme inderogabili né interessi di soci e terzi.',
        ] },
        { t: 'table', head: ['Tipo', 'Decisione', 'Responsabilità dei soci'], rows: [
          ['**Progressiva** (persone → capitali)', 'Maggioranza secondo gli **utili**, con **recesso** del dissenziente (art. 2500-ter); atto pubblico', 'Restano illimitatamente responsabili per i debiti **anteriori**, salvo consenso dei creditori, presunto se non negato entro **60 giorni** dalla comunicazione (art. 2500-quinquies)'],
          ['**Regressiva** (capitali → persone)', 'Maggioranze delle modifiche statutarie più il **consenso** di chi diventa illimitatamente responsabile (art. 2500-sexies)', 'Rispondono illimitatamente **anche** dei debiti **anteriori**'],
          ['**Eterogenea da** società di capitali (in consorzi, cooperative, associazioni, fondazioni, comunioni d’azienda)', '**Due terzi** degli aventi diritto al voto più il consenso di chi diventa illimitatamente responsabile (art. 2500-septies)', 'Efficace **60 giorni** dopo la pubblicità; i creditori possono **opporsi** (art. 2500-novies)'],
          ['**Eterogenea in** società di capitali', 'Maggioranza nei consorzi; quella per lo scioglimento anticipato in associazioni e società consortili; **unanimità** nella comunione d’azienda (art. 2500-octies)', 'Stima del patrimonio; opposizione dei creditori'],
        ] },
        { t: 'list', items: [
          'Nella **progressiva** il capitale si fissa sui **valori attuali**, con la stima di un esperto del tribunale (s.p.a.) o di un revisore scelto dai soci (s.r.l.); se è sotto il minimo, servono nuovi conferimenti. Ogni socio riceve azioni o quote **proporzionali** alla sua partecipazione; il **socio d’opera** in proporzione alla sua quota di **utili** (art. 2500-quater).',
          'Nella **regressiva** gli amministratori redigono una **relazione** su motivi ed effetti, depositata in sede **30 giorni** prima della delibera; le partecipazioni restano proporzionali.',
          'Le cooperative a **mutualità prevalente** non possono trasformarsi in società lucrative. Le altre sì, con il voto di almeno **metà dei soci** e devolvendo il patrimonio effettivo, dedotti capitale e dividendi, ai fondi mutualistici (artt. 2545-decies, 2545-undecies).',
        ] },
      ],
    },
    {
      title: 'La fusione',
      blocks: [
        { t: 'p', text: 'Unifica due o più società in una sola (art. 2501). **In senso stretto**: nasce una nuova società. **Per incorporazione**: una società esistente assorbe le altre. Le fuse o incorporate si **estinguono**; la risultante o incorporante assume diritti e obblighi e prosegue tutti i rapporti, anche processuali (art. 2504-bis). I soci ricevono azioni o quote della risultante secondo il **rapporto di cambio**.' },
        { t: 'list', items: [
          '**Omogenea** tra società dello stesso tipo, **eterogenea** tra tipi diversi (con trasformazione di qualcuna), anche tra enti con scopo diverso nei limiti delle trasformazioni eterogenee.',
          'Unico divieto: le società in **liquidazione** che hanno **iniziato a distribuire l’attivo**. È ammessa per società in procedura concorsuale.',
        ] },
        { t: 'flow', title: 'Il procedimento', items: [
          '**Progetto** comune redatto dagli amministratori (nella s.p.a. non delegabile): società coinvolte, atto costitutivo della risultante, **rapporto di cambio** ed eventuale **conguaglio** in denaro non oltre il **10%** del valore nominale, data degli effetti contabili, trattamenti particolari (art. 2501-ter)',
          'Iscrizione nel registro o pubblicazione sul sito almeno **30 giorni** prima della decisione (15 tra società non azionarie), salvo rinuncia unanime dei soci',
          '**Situazione patrimoniale** riferita a non oltre **120 giorni** prima del deposito del progetto (art. 2501-quater)',
          '**Relazione degli amministratori** che giustifica il progetto e il rapporto di cambio (art. 2501-quinquies)',
          '**Relazione degli esperti** sulla **congruità del rapporto di cambio** e sull’adeguatezza dei metodi usati (art. 2501-sexies)',
          'Deposito in sede dei documenti e dei bilanci degli ultimi tre esercizi nei **30 giorni** prima della decisione (art. 2501-septies)',
          '**Decisione** di ogni società e iscrizione',
          '**Opposizione** dei creditori entro **60 giorni** dall’iscrizione (30 tra società non azionarie)',
          '**Atto di fusione** per atto pubblico, depositato entro **30 giorni**',
          'Effetti dall’**ultima iscrizione**; poi niente invalidità',
        ] },
        { t: 'h', text: 'La decisione' },
        { t: 'list', items: [
          '**Società di persone**: maggioranza secondo gli **utili**, con **recesso** del dissenziente (art. 2502).',
          '**S.p.a.**: maggioranze dell’**assemblea straordinaria**; il dissenziente recede solo se la fusione comporta una modifica che gli dà quel diritto (per esempio cambio di oggetto o di tipo).',
          '**S.r.l.**: a maggioranza, in **assemblea**, con **recesso** del dissenziente (art. 2473).',
          'La decisione può modificare il progetto solo senza toccare i diritti di soci e terzi. Le delibere delle società di capitali passano il controllo del notaio.',
          '**Semplificazioni**: per l’incorporazione di società possedute al **100%** non serve il rapporto di cambio; con il **90%** si alleggeriscono le relazioni. In entrambi i casi l’atto costitutivo può affidare la decisione agli **amministratori** (artt. 2505, 2505-bis).',
        ] },
        { t: 'h', text: 'I creditori' },
        { t: 'list', items: [
          'L’**opposizione** sospende l’operazione finché il tribunale non decide; il tribunale può autorizzarla se il pericolo è infondato o la società presta **garanzia** (art. 2503).',
          'Si può fare una fusione **anticipata** con il consenso di tutti i creditori anteriori, pagando i dissenzienti, depositando le somme in banca o con una relazione di una società di revisione che escluda la necessità di garanzie.',
          'Se dalla fusione risulta una società di capitali, i soci illimitatamente responsabili **non sono liberati** dai debiti anteriori senza il consenso dei creditori, presunto dopo **60 giorni** di silenzio.',
        ] },
        { t: 'h', text: 'Atto ed effetti' },
        { t: 'p', text: 'L’**atto di fusione**, sempre per **atto pubblico** (anche se la risultante è una società di persone), esegue le decisioni ed è depositato entro **30 giorni**. L’**iscrizione** ha efficacia **costitutiva**. Seguono l’annullamento delle vecchie azioni, l’emissione delle nuove, la liquidazione dei recedenti. Dopo l’iscrizione l’**invalidità** non si può più pronunciare, neanche per vizi gravi come un rapporto di cambio palesemente incongruo: restano solo i **risarcimenti** (art. 2504-quater).' },
      ],
    },
    {
      title: 'La scissione',
      blocks: [
        { t: 'p', text: 'La società assegna tutto o parte del suo patrimonio a una o più società **beneficiarie**, nuove o esistenti, e le azioni o quote delle beneficiarie vanno direttamente ai **soci** della scissa secondo un rapporto di cambio (art. 2506).' },
        { t: 'table', head: ['Forma', 'Che cosa succede'], rows: [
          ['**Totale**', 'Tutto il patrimonio passa a più beneficiarie; la scissa si **estingue senza liquidazione**'],
          ['**Parziale**', 'Solo una parte passa; la scissa resta e i soci ricevono anche partecipazioni delle beneficiarie'],
          ['**In senso stretto**', 'Beneficiarie **nuove**: l’atto di scissione ne è l’atto costitutivo'],
          ['**Per incorporazione**', 'Beneficiarie **esistenti**, che aumentano il capitale per dare azioni ai soci della scissa'],
          ['**Omogenea / eterogenea**', 'Beneficiarie dello stesso tipo della scissa / almeno una di tipo diverso'],
          ['**Non proporzionale**', 'Partecipazioni assegnate in misura diversa da quella originaria, a maggioranza; i dissenzienti possono **far acquistare** le loro partecipazioni al valore del recesso (art. 2506-bis)'],
          ['**Asimmetrica**', 'Alcuni soci ricevono partecipazioni della **scissa** invece che delle beneficiarie; serve il **consenso unanime** (art. 2506 c. 2)'],
        ] },
        { t: 'list', items: [
          'Stessi limiti della fusione: vietata alle società in liquidazione che hanno iniziato a distribuire l’attivo; ammessa in procedura concorsuale.',
          'Il **progetto**, redatto dagli amministratori di tutte le società, descrive con esattezza gli elementi del patrimonio assegnati a ciascuna beneficiaria e i criteri di distribuzione delle partecipazioni; segue le regole di pubblicità della fusione.',
          'La **relazione degli amministratori** spiega i criteri di distribuzione e il valore effettivo del netto assegnato. La **relazione degli esperti** si può omettere se le beneficiarie sono nuove e le partecipazioni proporzionali.',
          'L’atto di scissione si stipula dopo **60 giorni** dall’ultima iscrizione della decisione, termine in cui i creditori anteriori possono fare **opposizione**; è possibile la stipula anticipata come nella fusione. Atto pubblico; efficacia dall’**ultima iscrizione**; poi niente invalidità, solo risarcimenti.',
        ] },
        { t: 'h', text: 'Attivo e passivo' },
        { t: 'list', items: [
          'Gli elementi dell’**attivo** non attribuiti dal progetto si dividono tra le beneficiarie in proporzione al netto assegnato; nella parziale restano alla scissa.',
          'Per gli elementi del **passivo** non attribuiti rispondono **in solido** le beneficiarie, ciascuna nei limiti del **netto effettivo** ricevuto; nella parziale anche la scissa (art. 2506-bis).',
          'Ogni società risponde **in solido** dei debiti della scissa non pagati dalla società a cui sono stati assegnati, nei limiti del netto ricevuto (art. 2506-quater).',
        ] },
        { t: 'example', title: 'Gamma si scinde', steps: ['Uno riceve un netto di 300.000 €, Due di 100.000 €.', 'Un debito da 150.000 € assegnato a Uno non viene pagato.'], result: 'Due risponde in solido fino a 100.000 €.' },
      ],
    },
  ],
  summary: [
    'Rischio: art. 2740; si separa con il gruppo o, nella s.p.a., con patrimoni destinati fino al 10% del netto.',
    'Controllo di diritto, di fatto, contrattuale; collegamento con 1/5 dei voti (1/10 quotate); consolidato; la controllata non sottoscrive azioni della controllante.',
    'Direzione e coordinamento presunta per chi consolida o controlla; pubblicità e motivazione analitica; capogruppo responsabile verso soci e creditori, salvo vantaggi compensativi.',
    'Finanziamenti infragruppo postergati; recesso del socio della diretta per eventi della capogruppo.',
    'Cooperative: scopo mutualistico, capitale variabile, porta aperta, voto capitario, limite 100.000 €; 9 soci (3 con regole s.r.l.).',
    'Mutualità prevalente: oltre il 50% con i soci; dividendi limitati, riserve indivisibili, devoluzione ai fondi; si perde dopo due esercizi.',
    'Ammissione degli amministratori, rigetto motivato in 60 giorni con ricorso all’assemblea; recesso mai parziale; esclusione sempre deliberata.',
    'Riserva legale 30%; ristorni in base agli scambi; insolvenza con liquidazione coatta; mutue: socio solo se assicurato.',
    'Trasformazione: continuità; progressiva con consenso presunto dei creditori in 60 giorni; regressiva con consenso dei soci illimitati; eterogenea con due terzi ed efficacia dopo 60 giorni.',
    'Fusione: progetto, 30 giorni, situazione patrimoniale, esperti, decisione, opposizione in 60 giorni, atto pubblico, niente invalidità dopo l’iscrizione.',
    'Scissione: totale o parziale, non proporzionale o asimmetrica; beneficiarie solidali nei limiti del netto ricevuto.',
  ],
};

export default c;
