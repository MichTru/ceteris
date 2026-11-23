import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd4',
  intro:
    'L’impresa vive di contratti: compra, vende, si fa fornire, prende in locazione, fa costruire, trasporta, deposita, distribuisce i prodotti e si fa aiutare da dipendenti, mandatari, agenti e mediatori. Per ogni contratto conviene sapere tre cose: la definizione e l’elemento che lo distingue dagli altri, gli obblighi delle parti, i termini da ricordare. Le tabelle raccolgono tutti i numeri.',
  sections: [
    {
      title: 'La compravendita',
      blocks: [
        { t: 'def', term: 'Compravendita (art. 1470)', text: 'Il trasferimento della proprietà di una cosa o di un altro diritto **verso il corrispettivo di un prezzo**. Se si scambiano due cose o due diritti è **permuta** (art. 1552).' },
        { t: 'p', text: 'La forma è **libera**, salvo che la natura del bene ne richieda una (per gli immobili lo scritto, art. 1350). Di regola ha **effetti reali** (art. 1376): la proprietà passa con il **semplice consenso**. In alcuni casi ha solo **effetti obbligatori**: dal contratto nasce l’obbligo del venditore di far acquistare la proprietà, che passerà dopo.' },
        { t: 'table', head: ['Vendita obbligatoria', 'Quando passa la proprietà'], rows: [
          ['Cosa futura (art. 1472)', 'Quando la cosa viene a esistenza'],
          ['Cose generiche (art. 1378)', 'Con l’individuazione'],
          ['Con riserva di proprietà (art. 1523)', 'Con il pagamento dell’ultima rata; i rischi passano però subito al compratore'],
        ] },
        { t: 'h', text: 'Gli obblighi del venditore (art. 1476)' },
        { t: 'list', items: [
          '**Consegnare** la cosa, cioè mettere il compratore in condizione di disporne nel tempo e nel luogo pattuiti o, in mancanza, secondo gli artt. 1182, 1183 e 1510.',
          'Nella vendita obbligatoria, **far acquistare** la proprietà e poi consegnare.',
          '**Garantire dall’evizione**: il venditore deve trasferire un bene davvero suo e libero. Se un terzo rivendica il bene e il compratore lo perde tutto (**evizione totale**), ha diritto alla restituzione del prezzo, al rimborso delle spese e al risarcimento (art. 1483). Se lo perde in parte (**evizione parziale**), può chiedere la **risoluzione** se non avrebbe comprato senza quella parte, altrimenti la **riduzione del prezzo**, più i danni (artt. 1484, 1489).',
          '**Garantire dai vizi** (art. 1490): difetti che rendono la cosa **inidonea all’uso** o ne **diminuiscono apprezzabilmente il valore**.',
        ] },
        { t: 'h', text: 'La garanzia per vizi' },
        { t: 'list', items: [
          'Non è dovuta se il compratore **conosceva** i vizi o erano **facilmente riconoscibili**, salvo che il venditore abbia dichiarato che la cosa ne era esente (art. 1491).',
          'Il compratore deve **denunciare** il vizio entro **otto giorni** dalla consegna (vizio apparente) o dalla scoperta (vizio occulto) (art. 1495).',
          'Può chiedere la **risoluzione** o la **riduzione del prezzo** (art. 1492); l’azione si prescrive in **un anno** dalla consegna.',
          'Ha diritto anche al **risarcimento**, salvo che il venditore provi di aver ignorato i vizi senza colpa (art. 1494).',
          'La stessa disciplina vale se manca una **qualità promessa** o essenziale per l’uso (art. 1497).',
        ] },
        { t: 'p', text: 'Nella vendita a **consumatori** ci sono in più la **garanzia di conformità** del venditore e la responsabilità del **produttore** per i danni da prodotto difettoso a persone o ad altre cose (Codice del consumo). Le parti possono aggiungere **garanzie convenzionali**.' },
        { t: 'p', text: 'Il compratore deve **pagare il prezzo** (art. 1498), fissato nel contratto o, se il contratto lo prevede, da un terzo (art. 1473).' },
      ],
    },
    {
      title: 'La somministrazione',
      blocks: [
        { t: 'def', term: 'Somministrazione o fornitura (art. 1559)', text: 'Una parte si obbliga, verso un prezzo, a eseguire a favore dell’altra prestazioni **periodiche o continuative** di cose.' },
        { t: 'list', items: [
          'Valgono le **garanzie** della vendita (art. 1570).',
          'Se è a **tempo indeterminato**, ciascuna parte può **recedere** con congruo preavviso (art. 1569).',
          'Se una singola prestazione non viene eseguita, l’altra parte può chiedere la **risoluzione** se l’inadempimento ha **notevole importanza** e mina la **fiducia** nell’esattezza dei successivi adempimenti (art. 1564).',
          '**Patto di esclusiva** (artt. 1567-1568): il somministrante non fornisce ad altri nella zona, oppure il somministrato non si rifornisce da altri.',
          '**Patto di preferenza** (art. 1566): il somministrato si impegna a preferire lo stesso fornitore per un nuovo contratto, a parità delle condizioni offerte da terzi, per **massimo cinque anni**.',
        ] },
      ],
    },
    {
      title: 'Locazione, noleggio e contratti digitali',
      blocks: [
        { t: 'def', term: 'Locazione (art. 1571)', text: 'Il locatore si obbliga a far **godere** al conduttore una cosa mobile o immobile per un certo tempo, verso un **corrispettivo** (canone). Se la cosa è **produttiva**, come un’azienda, è **affitto** (art. 1615). Senza canone è **comodato** (art. 1803).' },
        { t: 'table', head: ['Regola', 'Valore'], rows: [
          ['Durata massima (art. 1573)', '30 anni'],
          ['Minimo uso commerciale', '6 anni (l. 392/1978)'],
          ['Minimo uso abitativo', '4 anni (l. 431/1998)'],
          ['Forma', 'Libera per i mobili; scritta per gli immobili oltre 9 anni e per tutti gli abitativi'],
          ['Trascrizione', 'Immobili oltre 9 anni (art. 2643)'],
          ['Opponibilità all’acquirente', 'Con data certa anteriore alla vendita (art. 1599)'],
        ] },
        { t: 'list', items: [
          'Il conduttore ha un **diritto personale di godimento**. Il locatore lo garantisce dai **vizi** della cosa, anche sopravvenuti, e dalle **molestie di diritto** di terzi; contro le **molestie di fatto** il conduttore agisce da sé (artt. 1578, 1581, 1585).',
          'Senza data certa, il conduttore può opporre all’acquirente la sua **detenzione**, ma solo per la durata prevista per le locazioni senza termine (art. 1574).',
          'Il locatore fa le **riparazioni necessarie**, il conduttore quelle di **piccola manutenzione**. Per le **cose mobili** conservazione e manutenzione ordinaria spettano al conduttore (art. 1576).',
        ] },
        { t: 'h', text: 'Tutele per l’impresa del conduttore (l. 392/1978)' },
        { t: 'list', items: [
          '**Prelazione** (art. 38): se il locatore vende un immobile non abitativo usato per un’attività **a contatto con il pubblico**, il conduttore ha diritto di essere preferito.',
          '**Cessione del contratto** senza consenso del locatore se si cede o si affitta **insieme l’azienda** (art. 36).',
        ] },
        { t: 'p', text: 'Il **rent to buy** (l. 164/2014) concede subito il godimento di un immobile e imputa i canoni, in tutto o in parte, al **prezzo** se il conduttore esercita il diritto di acquistare entro un termine. Se non lo esercita, il concedente restituisce la parte dei canoni che era anticipo di prezzo.' },
        { t: 'h', text: 'Il noleggio' },
        { t: 'p', text: 'In senso proprio è regolato solo dal **codice della navigazione** (navi e aerei). Nella prassi il termine indica altri contratti: il noleggio di beni mobili è **locazione**; quello di veicoli **senza conducente** è locazione, **con conducente** è **trasporto** (art. 1678). Spesso «noleggio» indica anche il **leasing operativo**: godimento di un bene tecnologico che invecchia in fretta, per una durata pari alla sua vita economica, con opzione d’acquisto finale.' },
        { t: 'h', text: 'Contratti digitali' },
        { t: 'list', items: [
          '**Vendita di prodotti digitali** a distanza: il digitale riguarda sia la conclusione del contratto sia la consegna del bene.',
          '**Licenza d’uso di software**: il titolare (licenziante) consente all’altro di usare il programma per un periodo. Clausole tipiche: **non esclusività** (la licenza si può dare a molti), **non trasferibilità**, **non modificabilità**.',
          '**Cloud computing**: uso di spazi di memoria o ambienti su server remoti del provider. Clausola tipica: **SLA** (service level agreement), cioè la qualità del servizio garantita.',
          '**Servizi della società dell’informazione**: **hosting** (spazio su server per pagine web), **adesione ai social network** (creazione, uso e cancellazione del profilo), **pubblicità radiotelevisiva** (spazi nel palinsesto). Sono contratti **atipici**, ricostruiti dai testi usati nella prassi.',
          'Clausola ricorrente: la **manleva**, con cui il cliente tiene indenne il fornitore dalle pretese di terzi per i contenuti caricati, che il fornitore non può controllare. Il fornitore si riserva spesso anche il diritto di modificare lo spazio concesso.',
        ] },
      ],
    },
    {
      title: 'Appalto e subfornitura',
      blocks: [
        { t: 'def', term: 'Appalto (art. 1655)', text: 'L’appaltatore si obbliga a compiere un’**opera o un servizio** con **organizzazione dei mezzi necessari** e **gestione a proprio rischio**, verso un corrispettivo in denaro.' },
        { t: 'p', text: 'Si distingue dalla **vendita** perché la prestazione principale è un **fare**, anche quando il risultato è un prodotto. Si distingue dal **contratto d’opera** (art. 2222) perché qui c’è un’**organizzazione d’impresa**, lì il lavoro **prevalentemente proprio** del prestatore.' },
        { t: 'list', items: [
          '**Subappalto** solo se il committente lo **autorizza** (art. 1656). L’appaltatore risponde comunque del lavoro del subappaltatore, e il committente resta estraneo al contratto di subappalto.',
          '**Revisione del prezzo** (art. 1664): ciascuna parte può chiederla per aumenti o diminuzioni **imprevedibili** del costo di materiali o manodopera oltre **un decimo** del prezzo, o per difficoltà di esecuzione geologiche, idriche e simili.',
          '**Varianti** (artt. 1659-1661, in buona parte derogabili): quelle proposte dall’appaltatore valgono solo se il committente le **approva per iscritto**; quelle **necessarie** per eseguire a regola d’arte l’appaltatore non può rifiutarle e ha diritto a un adeguamento del prezzo; quelle **ordinate dal committente** sono ammesse entro **un sesto** del prezzo, con diritto dell’appaltatore al compenso.',
          '**Recesso** del committente in qualsiasi momento, anche a lavori iniziati, tenendo indenne l’appaltatore di **spese, lavori eseguiti e mancato guadagno** (art. 1671).',
          '**Impossibilità sopravvenuta** non imputabile: il committente paga la parte eseguita **solo se gli è utile** (art. 1672).',
          'A opera finita il committente la **verifica** e la **accetta** (art. 1665): da lì nasce il diritto al prezzo e il **rischio** passa al committente (art. 1673).',
        ] },
        { t: 'h', text: 'Le garanzie' },
        { t: 'p', text: 'Anche dopo l’accettazione il committente può far valere la garanzia per **vizi e difformità**. Per quelli **occulti** sempre; per quelli **conosciuti o riconoscibili** solo se ha accettato **con riserva** (o se l’appaltatore li ha taciuti in malafede). Può chiedere l’**eliminazione** dei vizi a spese dell’appaltatore, la **riduzione del prezzo** e i danni, o la **risoluzione** se l’opera è del tutto inadatta alla sua destinazione (art. 1668).' },
        { t: 'table', head: ['Garanzia', 'Denuncia', 'Azione'], rows: [
          ['Vizi e difformità (art. 1667)', '60 giorni dalla scoperta', '2 anni dalla consegna'],
          ['Rovina e gravi difetti di immobili (art. 1669)', 'Un anno dalla scoperta', 'Un anno dalla denuncia, se il difetto emerge entro 10 anni dal compimento'],
        ] },
        { t: 'example', title: 'La villa e la piscina', steps: ['Prezzo dell’appalto: 600.000 €.', 'Un sesto: 100.000 €.', 'La piscina chiesta dal committente costa 90.000 €: rientra.'], result: 'L’appaltatore deve eseguire la variante, con diritto al compenso.' },
        { t: 'p', text: 'L’**appalto pubblico**, commissionato dallo Stato o da enti pubblici per un interesse collettivo, segue il **codice dei contratti pubblici**: scelta del contraente con **gara** e poteri più ampi dell’amministrazione di modificare il contratto. Gli appunti citano il d.lgs. 50/2016; dal 2023 vale il nuovo codice, d.lgs. 36/2023.' },
        { t: 'h', text: 'La subfornitura (l. 192/1998)' },
        { t: 'def', term: 'Subfornitura', text: 'Un imprenditore si obbliga a lavorare materie prime o semilavorati forniti dal committente, o a fornirgli prodotti o servizi da **incorporare** nella sua attività o in un bene complesso, secondo **progetti, conoscenze tecniche, modelli o prototipi** del committente.' },
        { t: 'list', items: [
          'Forma **scritta a pena di nullità**, con caratteristiche tecniche dei prodotti e prezzo (art. 2).',
          '**Pagamento** entro il termine pattuito, comunque non oltre **60 giorni** dalla consegna (**90** con accordi tra associazioni di categoria). In caso di ritardo, interessi di mora automatici e, oltre **30 giorni**, una **penale del 5%** dell’importo (art. 3).',
          '**Nulle** le clausole che riservano a una parte di **modificare unilateralmente** il contratto o di **recedere senza congruo preavviso** (art. 6).',
          'Il subfornitore non può affidare a terzi più del **50%** del valore della fornitura senza autorizzazione (art. 4).',
        ] },
      ],
    },
    {
      title: 'Trasporto, viaggio, deposito',
      blocks: [
        { t: 'def', term: 'Trasporto (art. 1678)', text: 'Il **vettore** si obbliga, verso corrispettivo, a trasferire **persone o cose** da un luogo a un altro.' },
        { t: 'p', text: 'Vale per ogni mezzo (strada, ferrovia, mare, aria, posta), salvo le deroghe del codice della navigazione e delle leggi speciali. L’obbligazione è **di risultato**. Il termine è eventuale ma, se c’è, conta molto per la responsabilità. La forma è **libera**; lo scritto **ad probationem** serve solo per il trasporto marittimo e per quello aereo di cose.' },
        { t: 'list', items: [
          '**Persone** (art. 1681): il vettore risponde dei **sinistri** al viaggiatore, del **ritardo** e dell’inadempimento, e della perdita o avaria delle cose che il viaggiatore porta con sé, **salvo provi** di aver adottato tutte le misure idonee a evitare il danno. Sono **nulle** le clausole che limitano la responsabilità per i sinistri al viaggiatore. Prescrizione: **un anno** (art. 2951).',
          '**Cose** (art. 1693): il vettore ha l’obbligo di **custodia** della merce, strumentale al trasferimento, e risponde di perdita e avaria.',
        ] },
        { t: 'h', text: 'Il contratto di viaggio' },
        { t: 'list', items: [
          '**Organizzazione** di viaggio: il **tour operator** stipula in nome proprio trasporti, soggiorni e servizi e li vende come **pacchetto turistico** a prezzo complessivo (Codice del turismo, d.lgs. 79/2011).',
          '**Intermediazione** di viaggio: l’**agenzia** (travel agent) procura al turista un pacchetto già organizzato da un tour operator, agendo come sua **mandataria con rappresentanza**.',
          'Chi compra un pacchetto ha diritto anche al risarcimento del **danno da vacanza rovinata**.',
        ] },
        { t: 'h', text: 'Il deposito' },
        { t: 'def', term: 'Deposito (art. 1766)', text: 'Il **depositario** riceve dal depositante una **cosa mobile** con l’obbligo di **custodirla** e **restituirla in natura**.' },
        { t: 'list', items: [
          'È un contratto **reale**: si perfeziona con la **consegna**. Forma libera, esecuzione continuata.',
          'Si presume **gratuito**, salvo che dalla professione del depositario o da altre circostanze risulti il contrario (art. 1767).',
          'Il depositario **non può usare** la cosa, la custodisce con la diligenza del **buon padre di famiglia** e la **restituisce a richiesta** (artt. 1768, 1770, 1771).',
          'Il depositante rimborsa le spese di conservazione, tiene indenne il depositario dalle perdite e, se il deposito è oneroso, paga il compenso.',
        ] },
        { t: 'table', head: ['Deposito in albergo', 'Responsabilità'], rows: [
          ['Cose portate dal cliente (art. 1783)', 'Fino a **cento volte** il prezzo giornaliero della camera'],
          ['Cose consegnate in custodia o rifiutate senza motivo (art. 1784)', '**Illimitata**'],
          ['Danno per colpa dell’albergatore o dei suoi ausiliari (art. 1785-bis)', '**Illimitata**'],
          ['Forza maggiore o colpa del cliente', 'Nessuna'],
        ] },
        { t: 'list', items: [
          '**Deposito irregolare** (art. 1782): di denaro o cose fungibili con facoltà di servirsene. Il depositario ne diventa **proprietario** e restituisce altrettante cose dello stesso genere.',
          '**Deposito di titoli in amministrazione** (art. 1838): la banca custodisce i titoli e ne cura gli incassi.',
        ] },
      ],
    },
    {
      title: 'Distribuzione: concessione e franchising',
      blocks: [
        { t: 'def', term: 'Concessione di vendita', text: 'Il **concedente**, di solito il produttore, si obbliga a fornire i suoi prodotti al **concessionario**, che si obbliga ad **acquistarli e rivenderli** in nome proprio, con o senza esclusiva, con un’attività promozionale spesso controllata dal concedente.' },
        { t: 'p', text: 'È **atipico**: gli si applica per lo più la disciplina della **somministrazione**. Si distingue dall’**agenzia** perché il concessionario compra la merce e la rivende: sopporta il rischio dell’organizzazione e quello del mancato pagamento dei clienti.' },
        { t: 'def', term: 'Affiliazione commerciale o franchising (l. 129/2004)', text: 'L’**affiliante** concede all’**affiliato**, verso un corrispettivo, l’uso di **marchio, insegna, denominazione** e un’**assistenza tecnica e commerciale** per vendere beni prodotti dall’affiliante o dall’affiliato.' },
        { t: 'list', items: [
          'Ogni punto vendita è un’**impresa autonoma** dell’affiliato.',
          'Contratto **scritto a pena di nullità**, di durata non inferiore a **tre anni**.',
          'Contenuto previsto dalla legge (art. 3): investimenti e spese iniziali, modo di calcolare le **royalties**, eventuale esclusiva.',
          'L’affiliante deve **informare** l’affiliato sulla rete e sull’attività; se dà informazioni false, il contratto è **annullabile** (art. 6).',
          'L’affiliato non può spostare la sede senza consenso, salvo forza maggiore, e deve mantenere la **riservatezza**.',
        ] },
      ],
    },
    {
      title: 'I collaboratori dell’impresa',
      blocks: [
        { t: 'p', text: 'Accanto ai **dipendenti**, che con il contratto di lavoro subordinato collaborano **sotto la direzione** dell’imprenditore (art. 2094) e si distinguono in dirigenti, quadri, impiegati e operai (art. 2095), l’impresa usa **collaboratori autonomi**. Se si tratta di curare affari dell’impresa servono mandato, agenzia o mediazione; per altri servizi, il **contratto d’opera** (art. 2222): un’opera o un servizio con lavoro prevalentemente proprio e senza subordinazione.' },
        { t: 'h', text: 'Il mandato' },
        { t: 'def', term: 'Mandato (art. 1703)', text: 'Il mandatario si obbliga a compiere **uno o più atti giuridici per conto** del mandante.' },
        { t: 'list', items: [
          'Dà il potere di agire **per conto** altrui, non di spenderne il nome: per questo serve anche una **procura** (artt. 1704-1705).',
          '**Con rappresentanza**: gli effetti si producono direttamente sul mandante. **Senza rappresentanza**: il mandatario agisce in nome proprio, acquista i diritti e assume gli obblighi, poi **ritrasferisce** al mandante.',
          'Si presume **oneroso** (art. 1709); può riguardare un affare o una categoria di affari, a tempo determinato o no.',
          'Il **mandante** fornisce i mezzi necessari (**provvista**, art. 1719), può dare **istruzioni** vincolanti e può **revocare** in ogni momento, pagando i danni se manca giusta causa (art. 1725). Se il mandato è **anche nell’interesse del mandatario**, la revoca richiede **giusta causa** (art. 1723).',
          'Il **mandatario** esegue con la diligenza del **buon padre di famiglia** (art. 1710), segue le istruzioni e se ne discosta solo per circostanze nuove che non può comunicare in tempo, comportandosi come avrebbe voluto il mandante (art. 1711). Informa il mandante delle circostanze sopravvenute, gli dà il **rendiconto** (art. 1713), può farsi **sostituire** (art. 1717) e può **rinunciare**, pagando i danni se senza giusta causa (art. 1727).',
        ] },
        { t: 'h', text: 'L’agenzia' },
        { t: 'def', term: 'Agenzia (art. 1742)', text: 'L’agente assume **stabilmente** l’incarico di **promuovere**, per conto del preponente e verso retribuzione, la conclusione di contratti in una **zona determinata**.' },
        { t: 'list', items: [
          'L’agente lavora con **organizzazione propria** e a proprio rischio: cerca clienti, li contatta, conduce le trattative. La conclusione spetta al preponente, salvo che l’agente abbia il potere di rappresentanza: allora è **rappresentante di commercio** (art. 1752).',
          'Il contratto si **prova per iscritto**.',
          'Elementi essenziali: **stabilità**, **zona**, obbligo di **promuovere**.',
          'L’agente segue le istruzioni, fa conoscere i prodotti e informa il preponente sul mercato (art. 1746). Il preponente paga la **provvigione** (art. 1748), di solito una percentuale sugli affari.',
          '**Esclusiva reciproca** (art. 1743), salvo patto contrario: il preponente non usa altri agenti nella stessa zona e ramo, e l’agente non lavora per imprese concorrenti.',
          'Se è a tempo indeterminato, recesso con **preavviso** (art. 1750). Alla fine l’agente ha diritto all’**indennità di fine rapporto** (art. 1751) ed è libero, salvo un **patto di non concorrenza** (art. 1751-bis).',
        ] },
        { t: 'h', text: 'La mediazione' },
        { t: 'def', term: 'Mediatore (art. 1754)', text: 'Chi **mette in relazione** due o più parti per la conclusione di un affare **senza essere legato** a nessuna di esse da collaborazione, dipendenza o rappresentanza.' },
        { t: 'list', items: [
          'Non ha l’**obbligo** di attivarsi: è questo che lo distingue da mandatario e agente. È **imparziale**, anche se l’incarico gli arriva da una sola parte.',
          'Se l’affare si **conclude per effetto del suo intervento**, ha diritto alla **provvigione da ciascuna parte** (art. 1755), anche se poi il contratto non viene eseguito. In mancanza di accordo la misura la fissano gli usi o le Camere di commercio.',
          'Se l’affare **non si conclude**, ha diritto solo al **rimborso delle spese** da chi lo ha incaricato (art. 1756).',
          'Ha diritto alla provvigione solo il mediatore **abilitato** (l. 39/1989).',
        ] },
        { t: 'table', head: ['Contratto', 'Elemento chiave', 'Regole'], rows: [
          ['Concessione di vendita', 'Il concessionario compra e rivende in nome proprio', 'Atipico, disciplina della somministrazione'],
          ['Franchising (l. 129/2004)', 'Uso di marchio, insegna, know-how', 'Scritto a pena di nullità, almeno tre anni'],
          ['Mandato (1703)', 'Atti giuridici per conto altrui', 'Con o senza rappresentanza; presunto oneroso'],
          ['Agenzia (1742)', 'Promozione stabile di contratti in una zona', 'Esclusiva reciproca, provvigione, indennità di fine rapporto'],
          ['Mediazione (1754)', 'Mette in relazione le parti, imparziale', 'Provvigione da entrambe se l’affare si conclude'],
        ] },
      ],
    },
    {
      title: 'I bisogni finanziari',
      blocks: [
        { t: 'table', head: ['Bisogno', 'Contratti'], rows: [
          ['Reperire il denaro per l’attività', 'Contratti di finanziamento, soprattutto con le banche'],
          ['Far circolare i pagamenti in entrata e in uscita', 'Servizi bancari e di pagamento'],
          ['Coprirsi dal rischio di perdite future', 'Assicurazione: verso un premio, l’assicurato ottiene un indennizzo se si verifica l’evento temuto'],
        ] },
      ],
    },
  ],
  summary: [
    'Vendita: effetti reali con il consenso (obbligatori per cosa futura, generica, riserva di proprietà); evizione e vizi; denuncia in 8 giorni, azione in un anno.',
    'Somministrazione: prestazioni periodiche o continuative; recesso con preavviso; esclusiva; preferenza max cinque anni.',
    'Locazione: max 30 anni, commerciale min 6, abitativa min 4; opponibile con data certa; prelazione e cessione con l’azienda.',
    'Appalto: organizzazione e rischio dell’appaltatore; subappalto autorizzato; varianti entro 1/6; recesso con indennizzo; vizi 60 giorni e due anni; rovina entro dieci anni.',
    'Subfornitura: scritta a pena di nullità, pagamento entro 60 giorni, penale 5%, subaffidamento oltre il 50% solo autorizzato.',
    'Trasporto: obbligazione di risultato, clausole limitative per i sinistri nulle, prescrizione un anno. Deposito: reale, presunto gratuito; albergo cento volte il prezzo della camera.',
    'Concessione: compra e rivende. Franchising: scritto, almeno tre anni.',
    'Mandato per conto altrui, rappresentanza solo con procura; agenzia stabile in una zona con esclusiva e indennità; mediatore imparziale, provvigione se l’affare si conclude.',
  ],
};

export default c;
