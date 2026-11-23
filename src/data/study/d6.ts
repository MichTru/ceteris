import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd6',
  intro:
    'Quando un’impresa commerciale diventa insolvente, le esecuzioni dei singoli creditori lasciano il posto a una procedura collettiva: il fallimento, oggi liquidazione giudiziale. Vediamo perché esiste, chi può fallire, che cosa cambia per il fallito e per i creditori, come il curatore ricostruisce il patrimonio, come si svolge la procedura dalla sentenza alla chiusura e che cosa succede quando fallisce una società.',
  sections: [
    {
      title: 'Crisi, insolvenza e procedure concorsuali',
      blocks: [
        { t: 'p', text: 'C’è **crisi** quando l’impresa, invece di creare valore aggiunto, lo disperde: costa più di quanto produce e i ricavi non coprono le perdite. Quando la crisi porta all’incapacità di pagare i debiti si parla di **insolvenza**.' },
        { t: 'p', text: 'Per l’impresa **commerciale** l’insolvenza è regolata da una disciplina speciale, il diritto fallimentare. Invece di tante esecuzioni individuali si apre una sola procedura **collettiva** (coinvolge tutti i creditori) e **universale** (riguarda tutto il patrimonio): è più **efficiente**, perché costa meno, e più **equa**, perché tratta i creditori allo stesso modo. Si apre un **concorso** sul patrimonio del debitore, retto dalla **par condicio creditorum**: tutti soddisfatti in proporzione, salve le **cause legittime di prelazione** (pegno, ipoteca, privilegio).' },
        { t: 'table', head: ['Procedura', 'Natura', 'Chi la gestisce'], rows: [
          ['Fallimento (liquidazione giudiziale)', 'Coattiva, liquidatoria', 'Tribunale, giudice delegato, curatore'],
          ['Concordato preventivo', 'Volontaria, negoziale', 'Il debitore, sotto la vigilanza del commissario giudiziale'],
          ['Liquidazione coatta amministrativa', 'Imprese vigilate (banche, assicurazioni, cooperative)', 'Autorità amministrativa di vigilanza'],
          ['Amministrazione straordinaria', 'Grandi imprese insolventi', 'Commissari nominati dal Ministero'],
        ] },
        { t: 'h', text: 'Perché ci sono procedure alternative al fallimento' },
        { t: 'list', items: [
          'Le **soluzioni negoziate** (concordato preventivo, accordi di ristrutturazione, concordato fallimentare) si possono usare **prima** dell’insolvenza, e anche dopo danno spesso risultati migliori del fallimento.',
          'Vogliono **salvare il complesso produttivo**: l’imprenditore resta alla guida o cede l’impresa, uscendone in modo più utile per i creditori e più onorevole.',
          'In alcune procedure (liquidazione coatta, amministrazione straordinaria) prevale l’**autorità amministrativa**, perché riguardano imprese di grande rilievo economico o vigilate.',
        ] },
        { t: 'warn', text: 'Dal **15 luglio 2022** è in vigore il **Codice della crisi d’impresa e dell’insolvenza** (d.lgs. 14/2019): il fallimento si chiama **liquidazione giudiziale** e la parola «fallito» non si usa più. Gli appunti seguono la legge fallimentare (r.d. 267/1942): la logica è la stessa, cambiano nomi e articoli.' },
      ],
    },
    {
      title: 'Che cos’è il fallimento',
      blocks: [
        { t: 'p', text: 'È una procedura **esecutiva**, **concorsuale** e **coattiva**: l’imprenditore la subisce anche contro la sua volontà. Porta alla **liquidazione integrale** del patrimonio e alla fine dell’**impresa**, ma non per forza dell’**azienda**: invece di vendere i beni uno per uno, gli organi possono vendere l’azienda o i rami ancora produttivi, con **procedure competitive** che informino il mercato e ottengano il prezzo migliore.' },
        { t: 'p', text: 'Il fallito (o gli amministratori della società) perde il potere di gestire l’impresa e il patrimonio: è lo **spossessamento**. I poteri passano agli organi della procedura, prima di tutto **curatore** e **giudice delegato**.' },
      ],
    },
    {
      title: 'Presupposti e iniziativa',
      blocks: [
        { t: 'list', items: [
          '**Presupposto soggettivo**: imprenditore **commerciale**, **privato** (gli enti pubblici sono esclusi) e non piccolo, cioè che supera **almeno una** soglia dell’art. 1 l.f.: attivo patrimoniale oltre **300.000 €** o ricavi oltre **200.000 €** in uno dei tre esercizi precedenti, oppure debiti anche non scaduti oltre **500.000 €**.',
          '**Presupposto oggettivo**: lo **stato di insolvenza**, cioè l’incapacità non temporanea di adempiere regolarmente le obbligazioni.',
          'Non si dichiara il fallimento se i **debiti scaduti e non pagati** risultanti dall’istruttoria sono **meno di 30.000 €** (art. 15).',
        ] },
        { t: 'example', title: 'Alfa s.r.l.', steps: ['Vende mobili: commerciale e privata.', 'Ricavi 380.000 € > 200.000: supera una soglia.', 'Debiti scaduti 45.000 € ≥ 30.000.'], result: 'Se insolvente, può essere dichiarata fallita.' },
        { t: 'h', text: 'Chi chiede il fallimento (art. 6)' },
        { t: 'list', items: [
          'Uno o più **creditori**: devono indicare il credito e i presupposti, ma il tribunale ha comunque propri poteri di indagine.',
          'Lo stesso **debitore** (**autofallimento**), per non aggravare il dissesto. Nelle società decidono gli **amministratori** o i soci di maggioranza, salvo diversa previsione dello statuto.',
          'Il **pubblico ministero**, quando in un processo civile o penale scopre l’insolvenza di un imprenditore, per esempio perché emergono reati fallimentari, che si possono perseguire solo dopo la dichiarazione di fallimento.',
        ] },
        { t: 'p', text: 'È competente il tribunale del luogo della **sede principale** (art. 9): quella legale o, se diversa, quella dove si trova davvero la **direzione** dell’impresa, dove conviene che lavori il curatore.' },
      ],
    },
    {
      title: 'Gli effetti per il fallito',
      blocks: [
        { t: 'list', items: [
          '**Spossessamento** (art. 42): perde l’amministrazione e la disponibilità dei beni, e non può più esercitare l’impresa.',
          'Gli atti che compie dopo sono **inefficaci verso i creditori** (art. 44). Restano però validi tra le parti: il terzo potrà agire contro il debitore, per esempio per l’evizione subita.',
          '**Beni esclusi** (art. 46), se il fallito è persona fisica: quelli **strettamente personali** e quanto serve al **mantenimento** suo e della famiglia.',
          '**Cristallizzazione** del patrimonio: blocco delle azioni individuali e sospensione degli interessi sui crediti chirografari.',
          'Alla fine tutto il patrimonio viene **monetizzato**; i beni eventualmente non venduti tornano nella libera disponibilità del debitore.',
        ] },
        { t: 'p', text: 'L’**esercizio provvisorio** permette al curatore di proseguire l’attività, se interromperla all’improvviso causerebbe ai creditori un danno maggiore. Può essere disposto con la sentenza o dopo, nel corso della procedura.' },
        { t: 'h', text: 'L’esdebitazione' },
        { t: 'p', text: 'Il fallito **persona fisica** può ottenere dal tribunale che i debiti rimasti non pagati diventino **inesigibili** verso di lui. Servono alcune condizioni: piena **collaborazione** con gli organi, **scritture tenute correttamente**, nessuna esdebitazione ottenuta di recente e altre. Il debito non si estingue: resta esigibile verso **garanti** e coobbligati. I creditori non soddisfatti possono impugnare il provvedimento se mancano i requisiti. Il Codice della crisi la estende anche alle società.' },
      ],
    },
    {
      title: 'Gli effetti per i creditori',
      blocks: [
        { t: 'table', head: ['Effetto', 'Norma'], rows: [
          ['Divieto di iniziare o proseguire **azioni esecutive e cautelari** individuali', 'Art. 51'],
          ['Tutti i crediti si considerano **scaduti** alla data del fallimento, così concorrono anche quelli non ancora scaduti', 'Art. 55'],
          ['**Interessi sospesi** sui crediti chirografari', 'Art. 55'],
          ['Ogni credito va **accertato** nello stato passivo, anche se privilegiato', 'Art. 52'],
        ] },
        { t: 'p', text: 'Il divieto di azioni individuali dura quanto la procedura. Alla chiusura, i creditori non pagati per intero possono di nuovo agire contro il debitore, salvo esdebitazione.' },
        { t: 'flow', title: 'Ordine di soddisfazione', items: [
          '**Prededucibili**: crediti sorti nella procedura o per essa, per esempio con l’esercizio provvisorio. Pagati per intero.',
          '**Privilegiati** e garantiti (pegno, ipoteca, privilegio): sul ricavato dei beni gravati. Per la parte non soddisfatta diventano chirografari.',
          '**Chirografari**: in proporzione, secondo la par condicio.',
          '**Postergati**: solo dopo tutti gli altri.',
        ] },
        { t: 'p', text: 'La par condicio vale **dentro ciascuna categoria**: nessun creditore di rango inferiore è pagato prima che siano soddisfatti per intero quelli di rango superiore.' },
      ],
    },
    {
      title: 'Inefficacia e revocatorie',
      blocks: [
        { t: 'p', text: 'Il curatore ricostruisce il patrimonio colpendo gli atti che, prima del fallimento, hanno danneggiato i creditori. Ha a disposizione quattro tipi di azioni: revocatoria **ordinaria**, revocatoria **fallimentare**, azioni di **responsabilità** e azioni **recuperatorie**.' },
        { t: 'h', text: 'Atti inefficaci di diritto' },
        { t: 'p', text: 'Sono inefficaci verso i creditori, senza bisogno di provare nulla, gli **atti a titolo gratuito** compiuti nei **due anni** prima del fallimento (art. 64) e i **pagamenti di debiti non ancora scaduti** il giorno del fallimento, se eseguiti nei due anni precedenti (art. 65).' },
        { t: 'h', text: 'La revocatoria ordinaria (art. 66 l.f., art. 2901 c.c.)' },
        { t: 'p', text: 'Riguarda atti di disposizione degli ultimi **cinque anni**, ma è difficile da vincere. Il curatore deve provare il **danno** ai creditori e che il debitore **conosceva il pregiudizio** (o, per atti anteriori al credito, che l’atto era **dolosamente preordinato** a pregiudicarlo). Per gli atti a titolo oneroso deve provare anche che il **terzo** era consapevole del pregiudizio e, per atti anteriori, partecipe della dolosa preordinazione.' },
        { t: 'h', text: 'La revocatoria fallimentare (art. 67 l.f.)' },
        { t: 'p', text: 'Rende inefficaci atti onerosi, pagamenti e garanzie compiuti quando l’imprenditore era **già insolvente**, se il terzo lo **sapeva**. Il curatore non deve provare la frode. Gli atti si dividono in **anormali**, per i quali la conoscenza dell’insolvenza si **presume** e tocca al terzo la prova contraria, e **normali**, per i quali la prova spetta al **curatore**.' },
        { t: 'table', head: ['Atto', 'Periodo', 'Conoscenza dell’insolvenza'], rows: [
          ['Atti onerosi in cui il fallito dà **oltre un quarto** in più di quanto riceve', '1 anno', 'Presunta'],
          ['Pagamenti di debiti scaduti con **mezzi anormali** (non denaro o mezzi usuali)', '1 anno', 'Presunta'],
          ['Pegni, ipoteche per **debiti preesistenti non scaduti**', '1 anno', 'Presunta'],
          ['Pegni, ipoteche per **debiti scaduti**', '6 mesi', 'Presunta'],
          ['Atti normali: pagamenti di debiti scaduti, atti onerosi senza anomalie, garanzie per debiti contestuali', '6 mesi', 'La prova il curatore'],
        ] },
        { t: 'example', title: 'Il macchinario svenduto', steps: ['Dieci mesi prima del fallimento: bene da 100.000 € venduto a 60.000 €.', 'Sproporzione 40.000 €; un quarto del ricevuto 15.000 €.', 'Atto anormale nell’anno: conoscenza presunta.'], result: 'Revocabile, salvo prova contraria dell’acquirente.' },
        { t: 'h', text: 'Atti esenti da revocatoria' },
        { t: 'list', items: [
          'Pagamenti di beni e servizi nell’esercizio dell’impresa **nei termini d’uso**.',
          '**Rimesse** su conto corrente che non riducono in modo **consistente e durevole** il debito verso la banca.',
          'Compensi per **lavoro** a dipendenti e collaboratori, anche non subordinati.',
          'Atti, pagamenti e garanzie in esecuzione di un **piano di risanamento** attestato, di un **concordato preventivo** (anche dopo il deposito del ricorso) o di un **accordo di ristrutturazione** omologato.',
          'Vendite a **giusto prezzo** di immobili destinati ad **abitazione principale** dell’acquirente o di parenti e affini fino al terzo grado.',
        ] },
        { t: 'p', text: 'Le revocatorie **decadono** dopo **tre anni** dal fallimento e comunque dopo **cinque anni** dall’atto (art. 69-bis).' },
        { t: 'warn', text: 'Gli appunti parlano di un periodo di «due anni» per la revocatoria fallimentare: i termini dell’art. 67 sono **un anno** e **sei mesi**; i due anni riguardano l’inefficacia di atti gratuiti e pagamenti anticipati. Nel Codice della crisi i periodi si contano dal **deposito della domanda**, non dalla sentenza.' },
        { t: 'h', text: 'Azioni di responsabilità e recuperatorie' },
        { t: 'p', text: 'Spesso il dissesto nasce da una gestione **negligente** di amministratori e sindaci, che devono gestire secondo la **corretta amministrazione**: informarsi prima di decidere, valutare vantaggi e rischi, tenere conto delle condizioni attuali e future dell’impresa. Con l’**azione di responsabilità** il curatore chiede al tribunale di accertare gli inadempimenti, il **nesso causale** con il danno e la sua misura, e di condannare al risarcimento. Prima di agire valuta non solo la fondatezza, ma anche se i responsabili hanno un **patrimonio** da cui recuperare.' },
        { t: 'p', text: 'Le **azioni recuperatorie** servono a riprendere beni e diritti del fallito che si trovano presso terzi.' },
      ],
    },
    {
      title: 'Gli organi',
      blocks: [
        { t: 'table', head: ['Organo', 'Ruolo'], rows: [
          ['Tribunale', 'Dichiara il fallimento, nomina e può revocare giudice delegato e curatore, decide le controversie che non spettano al giudice delegato (art. 23)'],
          ['Giudice delegato', 'Vigila sul curatore e sulla regolarità della procedura, rende esecutivo lo stato passivo'],
          ['Curatore', 'Amministra il patrimonio: inventario, stato passivo, programma di liquidazione, vendite, azioni. È un professionista iscritto negli elenchi del tribunale (avvocati, commercialisti e simili)'],
          ['Comitato dei creditori', '**3 o 5** creditori scelti dal giudice delegato, sentiti curatore e creditori, che rappresentino in modo equilibrato quantità e qualità dei crediti. Autorizza gli atti o dà pareri; ha ampi poteri di ispezione (art. 40)'],
        ] },
      ],
    },
    {
      title: 'Le fasi della procedura',
      blocks: [
        { t: 'h', text: 'Istruttoria prefallimentare' },
        { t: 'p', text: 'Il tribunale accerta i presupposti e la legittimazione di chi ha chiesto il fallimento. Convoca il debitore (o amministratori e sindaci) e acquisisce bilanci e scritture degli **ultimi tre esercizi**. Se il debitore non si presenta o non consegna le scritture, magari dicendo di averle perse, il fallimento può essere dichiarato lo stesso: tocca a lui provare di essere **sotto le soglie**.' },
        { t: 'p', text: 'Contro la **sentenza** di fallimento e contro il **rigetto** del ricorso si propone **reclamo** alla **Corte d’appello** entro **30 giorni** (artt. 18 e 22).' },
        { t: 'h', text: 'La sentenza' },
        { t: 'p', text: 'È notificata al debitore e ai creditori ricorrenti e iscritta nel **registro delle imprese**. Contiene la nomina del **giudice delegato** e del **curatore**, l’ordine di depositare bilanci e scritture, la data dell’**udienza di verifica** del passivo e il termine per le domande dei creditori. Può autorizzare l’**esercizio provvisorio**.' },
        { t: 'warn', text: 'Gli appunti mettono la nomina del comitato dei creditori nella sentenza: lo nomina il **giudice delegato entro 30 giorni** dalla sentenza (art. 40). Il deposito delle scritture, per l’art. 16, va fatto entro **tre giorni**, non 24 ore.' },
        { t: 'h', text: 'Inventario' },
        { t: 'p', text: 'Il curatore va nelle sedi dell’impresa ed **elenca e stima** tutti i beni, con il cancelliere e, se serve, un perito. Controlla non solo le scritture contabili ma anche **catasto** e **PRA** per immobili e veicoli.' },
        { t: 'h', text: 'Lo stato passivo' },
        { t: 'flow', items: [
          'Il curatore individua i creditori dalle scritture e da altri controlli e li avvisa.',
          'I creditori presentano la **domanda di ammissione** almeno **30 giorni prima** dell’udienza, via PEC: documenti, importo e natura del credito (chirografario o privilegiato, con il titolo del privilegio).',
          'Il curatore redige lo **stato passivo provvisorio**, usando anche cassetto fiscale, enti previdenziali ed estratti conto, e lo comunica ai creditori: ammessi, ammessi in parte o con riserva, degradati a chirografari, esclusi.',
          'All’**udienza** i creditori producono documenti e contestano; il giudice delegato può modificare il progetto.',
          'Il giudice delegato lo rende definitivo con il **decreto di esecutività**.',
          'Contro il decreto: **opposizione** del creditore escluso o ammesso solo in parte, **impugnazione** di un creditore contro l’ammissione di un altro. Decide il tribunale con un giudizio pieno.',
        ] },
        { t: 'warn', text: 'Gli appunti invertono i nomi: nella legge fallimentare (art. 98) l’**opposizione** è del creditore escluso o ammesso in parte, l’**impugnazione** è contro l’ammissione di un altro credito.' },
        { t: 'table', head: ['Domanda', 'Termine', 'Regole'], rows: [
          ['Tempestiva', 'Fino a 30 giorni prima dell’udienza', 'Verifica ordinaria'],
          ['Tardiva (art. 101)', 'Entro **12 mesi** dal decreto di esecutività, prorogabili a **18**', 'Udienze periodiche; concorre ai riparti successivi, e a quelli già fatti se privilegiata o se il ritardo non è colpa sua'],
          ['Ultratardiva', 'Oltre 12 o 18 mesi', 'Ammessa solo se il ritardo è dipeso da **causa non imputabile** al creditore'],
        ] },
        { t: 'h', text: 'Il programma di liquidazione' },
        { t: 'p', text: 'Il curatore indica come intende **monetizzare** il patrimonio: vendita dell’**azienda** o di rami produttivi, oppure vendita dei **singoli beni**. La scelta dipende dai possibili acquirenti, dal ricavo atteso e dai tempi. Può proporre l’**esercizio provvisorio**, che però crea nuovi costi e nuovi creditori prededucibili, oppure l’**affitto dell’azienda**: il rischio passa all’affittuario, i creditori incassano il canone e l’affittuario ha la **prelazione** se l’azienda viene venduta. Il programma indica anche le **azioni** (revocatorie, di responsabilità, recuperatorie) che intende promuovere, spiegando perché sono fondate e utili. Il **comitato dei creditori** lo approva.' },
        { t: 'p', text: 'Prima dell’approvazione non si può vendere nulla, salvo i beni **deperibili**. Poi si vende e si procede ai **riparti** secondo l’ordine dei crediti.' },
        { t: 'h', text: 'Chiusura e riapertura' },
        { t: 'list', items: [
          'Cause di chiusura (art. 118): **nessuna domanda** di ammissione (per esempio per un accordo stragiudiziale), **ripartizione finale** compiuta, **pagamento integrale** dei creditori, **concordato fallimentare**.',
          'Effetti: il debitore torna a gestire il patrimonio residuo, gli organi decadono, i creditori possono di nuovo agire per la parte non pagata, salvo esdebitazione, e comunque verso i garanti.',
          '**Riapertura** (art. 121): se nel patrimonio sopravvengono beni utili, o se il debitore o altri offrono di pagare almeno il **10%** dei debiti vecchi e nuovi. La chiedono curatore o creditori; il tribunale richiama, se possibile, lo stesso curatore e lo stesso giudice delegato.',
        ] },
      ],
    },
    {
      title: 'Il fallimento delle società',
      blocks: [
        { t: 'p', text: 'Art. 147 l.f.: il fallimento della società produce anche quello dei **soci illimitatamente responsabili**, cioè tutti i soci di **s.n.c.** e gli **accomandatari** di s.a.s. e s.a.p.a. Non falliscono gli **accomandanti** né i soci di **s.p.a.** e **s.r.l.**, che rispondono solo nei limiti del conferimento.' },
        { t: 'list', items: [
          'Il socio **uscito** fallisce se il fallimento della società arriva entro **un anno** dallo scioglimento del suo rapporto, e solo per i debiti anteriori.',
          'Il fallimento si estende ai **soci occulti** e alle **società occulte**.',
          'Si aprono tanti fallimenti quanti sono i soci, oltre a quello della società, con **un solo curatore** e **un solo giudice delegato**, ma **masse separate**.',
          'I **creditori sociali** concorrono sul patrimonio della società e su quelli di tutti i soci con una sola domanda; i **creditori personali** di un socio solo sul patrimonio del loro debitore.',
          'Il socio che paga più della sua parte si **rivale** sugli altri soci.',
        ] },
        { t: 'table', head: ['Effetto sulla società', 'Regola'], rows: [
          ['Società di persone', 'Si scioglie; la liquidazione segue la legge fallimentare invece del codice civile'],
          ['Società di capitali prima del 2006', 'Il fallimento ne causava lo scioglimento'],
          ['Società di capitali dopo la riforma', 'Lo scioglimento non è automatico: si scioglie se, alla fine, non resta un patrimonio con cui proseguire'],
          ['Organi sociali', 'Restano in carica, ma con poteri ridotti dallo spossessamento'],
        ] },
        { t: 'warn', text: 'Gli appunti invertono accomandanti e accomandatari e mettono s.p.a. e s.r.l. tra le società con soci illimitatamente responsabili. Correggi: falliscono i soci di s.n.c. e gli **accomandatari**.' },
      ],
    },
    {
      title: 'Verso le soluzioni negoziate',
      blocks: [
        { t: 'p', text: 'Accanto al fallimento, coattivo, ci sono procedure **volontarie**: è l’imprenditore a proporre un accordo ai creditori, soprattutto ai chirografari. Un accordo **stragiudiziale** vincola solo chi lo firma. Gli accordi **giudiziali** (concordato preventivo, accordi di ristrutturazione, concordato fallimentare, composizione della crisi da sovraindebitamento) si svolgono sotto il controllo del **tribunale**, che garantisce serietà e legalità, e se approvati dalla **maggioranza** vincolano **tutti** i creditori, anche dissenzienti.' },
        { t: 'list', items: [
          'L’impresa non si estingue per forza: il debitore continua l’attività, evita lo spossessamento e conserva il patrimonio.',
          'C’è un **effetto esdebitativo**: la parte dei debiti non coperta dall’accordo diventa inesigibile se la procedura va a buon fine.',
          'I creditori di solito ottengono di più e prima, perché possono contare anche sui **flussi futuri** dell’impresa che continua.',
        ] },
      ],
    },
  ],
  summary: [
    'Procedura concorsuale: collettiva, universale, par condicio salvo prelazioni. Oggi liquidazione giudiziale (CCII, dal 15 luglio 2022).',
    'Presupposti: imprenditore commerciale privato sopra almeno una soglia (300.000 attivo, 200.000 ricavi, 500.000 debiti), insolvenza, debiti scaduti ≥ 30.000 €.',
    'Iniziativa: creditori, debitore, PM; tribunale della sede principale; reclamo in Corte d’appello in 30 giorni.',
    'Fallito: spossessamento (42), atti inefficaci (44), beni esclusi (46); esdebitazione per la persona fisica.',
    'Creditori: stop alle azioni individuali (51), crediti scaduti e interessi sospesi sui chirografari (55), accertamento nello stato passivo (52).',
    'Ordine: prededucibili, privilegiati, chirografari, postergati.',
    'Inefficaci atti gratuiti e pagamenti anticipati nei due anni. Revocatoria: anormali un anno (garanzie per debiti scaduti sei mesi), normali sei mesi; ordinaria cinque anni; decadenza 3 anni dal fallimento, 5 dall’atto.',
    'Fasi: istruttoria, sentenza, inventario, stato passivo, programma di liquidazione, vendite e riparti, chiusura (118), riapertura (121, almeno 10%).',
    'Art. 147: falliscono i soci illimitatamente responsabili, anche usciti da meno di un anno e occulti; masse separate.',
  ],
};

export default c;
