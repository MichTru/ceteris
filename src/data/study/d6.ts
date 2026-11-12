import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd6',
  intro:
    'Quando un’impresa commerciale diventa insolvente, le esecuzioni individuali lasciano il posto a una procedura collettiva: il fallimento, oggi liquidazione giudiziale. Vediamo chi può fallire, che cosa cambia per il fallito e per i creditori, come il curatore ricostruisce il patrimonio con le revocatorie e come si svolge la procedura fino alla chiusura.',
  sections: [
    {
      title: 'Perché una procedura concorsuale',
      blocks: [
        { t: 'p', text: 'L’insolvenza si regola con una procedura **collettiva** (tutti i creditori) e **universale** (tutto il patrimonio), più efficiente ed equa delle esecuzioni dei singoli. Principio guida: la **par condicio creditorum**, salvo le cause legittime di prelazione.' },
        { t: 'table', head: ['Procedura', 'Natura', 'Chi la gestisce'], rows: [
          ['Fallimento', 'Coattiva, liquidatoria', 'Tribunale, curatore, giudice delegato'],
          ['Concordato preventivo', 'Volontaria, negoziale', 'Debitore sotto vigilanza del commissario'],
          ['Liquidazione coatta amministrativa', 'Imprese vigilate (banche, assicurazioni, cooperative)', 'Autorità amministrativa'],
          ['Amministrazione straordinaria', 'Grandi imprese insolventi', 'Commissari ministeriali'],
        ] },
        { t: 'warn', text: 'Dal **15 luglio 2022** è in vigore il Codice della crisi: il fallimento si chiama **liquidazione giudiziale**. Gli appunti usano la legge fallimentare; la logica è la stessa.' },
      ],
    },
    {
      title: 'Presupposti e iniziativa',
      blocks: [
        { t: 'list', items: ['**Soggettivo**: imprenditore **commerciale**, **privato**, che supera **almeno una** soglia: attivo 300.000 €, ricavi 200.000 €, debiti 500.000 € (art. 1 l.f.).', '**Oggettivo**: **insolvenza**.', 'Niente fallimento se i **debiti scaduti e non pagati** sono **meno di 30.000 €** (art. 15).'] },
        { t: 'p', text: 'Iniziativa (art. 6): **creditori**, **debitore** (autofallimento), **pubblico ministero**. Competente il tribunale della **sede principale** (art. 9), dove si trova la direzione effettiva.' },
        { t: 'example', title: 'Alfa s.r.l.', steps: ['Vende mobili: commerciale e privata.', 'Ricavi 380.000 € > 200.000: supera una soglia.', 'Debiti scaduti 45.000 € ≥ 30.000.'], result: 'Se insolvente, può essere dichiarata fallita.' },
      ],
    },
    {
      title: 'Gli effetti',
      blocks: [
        { t: 'table', head: ['Per chi', 'Effetto', 'Norma'], rows: [
          ['Fallito', 'Spossessamento: perde amministrazione e disponibilità dei beni', '42'],
          ['Fallito', 'Atti successivi inefficaci verso i creditori', '44'],
          ['Fallito', 'Esclusi i beni personali e quelli necessari al mantenimento', '46'],
          ['Creditori', 'Divieto di azioni esecutive e cautelari individuali', '51'],
          ['Creditori', 'Crediti considerati scaduti', '55'],
          ['Creditori', 'Interessi sospesi per i chirografari', '55'],
          ['Creditori', 'Ogni credito accertato nello stato passivo', '52'],
        ] },
        { t: 'flow', title: 'Ordine di soddisfazione', items: ['Prededucibili (sorti nella procedura)', 'Privilegiati, sul ricavato dei beni gravati', 'Chirografari, in proporzione', 'Postergati'] },
        { t: 'p', text: 'L’**esercizio provvisorio** consente di proseguire l’attività se l’interruzione causerebbe un danno grave. L’**esdebitazione** rende inesigibili verso il fallito persona fisica i debiti non pagati, non verso i garanti.' },
      ],
    },
    {
      title: 'Inefficacia e revocatorie',
      blocks: [
        { t: 'p', text: 'Il curatore ricostruisce il patrimonio colpendo gli atti che hanno danneggiato i creditori prima del fallimento.' },
        { t: 'table', head: ['Atto', 'Periodo', 'Conoscenza dell’insolvenza'], rows: [
          ['Atti gratuiti e pagamenti anticipati', '2 anni', 'Inefficaci di diritto (artt. 64-65)'],
          ['Atti onerosi con sproporzione oltre 1/4', '1 anno', 'Presunta'],
          ['Pagamenti di debiti scaduti con mezzi anormali', '1 anno', 'Presunta'],
          ['Garanzie per debiti preesistenti non scaduti', '1 anno', 'Presunta'],
          ['Garanzie per debiti scaduti', '6 mesi', 'Presunta'],
          ['Atti normali (pagamenti, atti onerosi, garanzie contestuali)', '6 mesi', 'La prova il curatore'],
          ['Revocatoria ordinaria (art. 66 l.f., 2901 c.c.)', '5 anni', 'Danno e consapevolezza da provare'],
        ] },
        { t: 'list', items: ['**Esenzioni**: pagamenti nei termini d’uso, rimesse bancarie che non riducono in modo consistente e durevole l’esposizione, compensi ai dipendenti, atti esecutivi di piani di risanamento, concordati e accordi omologati, vendita a giusto prezzo della prima casa.', '**Decadenza**: tre anni dal fallimento, comunque cinque anni dall’atto (69-bis).'] },
        { t: 'example', title: 'Il macchinario svenduto', steps: ['Dieci mesi prima del fallimento: bene da 100.000 € venduto a 60.000 €.', 'Sproporzione 40.000 €; un quarto del ricevuto 15.000 €.', 'Atto anormale nell’anno: conoscenza presunta.'], result: 'Revocabile, salvo prova contraria dell’acquirente.' },
        { t: 'warn', text: 'Gli appunti parlano di un periodo di “due anni” per la revocatoria fallimentare: i termini sono **un anno** e **sei mesi**; i due anni riguardano l’inefficacia degli atti gratuiti.' },
      ],
    },
    {
      title: 'Organi e fasi',
      blocks: [
        { t: 'table', head: ['Organo', 'Ruolo'], rows: [
          ['Tribunale', 'Dichiara il fallimento, nomina gli organi, decide le controversie'],
          ['Giudice delegato', 'Vigila sulla procedura, rende esecutivo lo stato passivo'],
          ['Curatore', 'Amministra il patrimonio, fa inventario, stato passivo, liquidazione, azioni'],
          ['Comitato dei creditori', '3 o 5 creditori; autorizza e dà pareri (art. 40)'],
        ] },
        { t: 'flow', items: ['Istruttoria prefallimentare con audizione del debitore', 'Sentenza: curatore, giudice delegato, udienza di verifica; reclamo in Corte d’appello', 'Inventario dei beni', 'Domande dei creditori almeno 30 giorni prima dell’udienza', 'Stato passivo esecutivo con decreto; opposizioni e impugnazioni', 'Programma di liquidazione approvato dal comitato', 'Vendite e riparti', 'Chiusura (art. 118) ed eventuale riapertura (art. 121, almeno il 10%)'] },
        { t: 'p', text: 'Le domande **tardive** sono ammesse entro **12 mesi** dal decreto di esecutività (prorogabili a **18**); le ultratardive solo se il ritardo non è colpa del creditore. Nel Codice della crisi il termine è di **sei mesi**.' },
      ],
    },
    {
      title: 'Il fallimento delle società',
      blocks: [
        { t: 'p', text: 'Art. 147 l.f.: il fallimento della società produce anche quello dei **soci illimitatamente responsabili**: tutti i soci di **s.n.c.**, gli **accomandatari** di s.a.s. e s.a.p.a. Non falliscono accomandanti e soci di s.p.a. e s.r.l.' },
        { t: 'list', items: ['Il socio **uscito** fallisce entro **un anno** dallo scioglimento del rapporto, per debiti anteriori.', 'Si estende anche a **soci occulti** e **società occulte**.', 'Un solo curatore e un solo giudice delegato, ma **masse separate**: i creditori sociali concorrono su tutti i patrimoni, quelli personali solo sul patrimonio del loro debitore.'] },
        { t: 'warn', text: 'Gli appunti invertono accomandanti e accomandatari e mettono s.p.a. e s.r.l. tra le società con soci illimitatamente responsabili. Correggi: falliscono i soci di s.n.c. e gli **accomandatari**.' },
      ],
    },
  ],
  summary: [
    'Presupposti: imprenditore commerciale privato sopra una soglia, insolvenza, debiti scaduti ≥ 30.000 €.',
    'Iniziativa: creditori, debitore, PM; tribunale della sede principale.',
    'Effetti: spossessamento, divieto di azioni individuali, interessi sospesi sui chirografari, stato passivo.',
    'Revocatoria: anormali un anno (conoscenza presunta), normali sei mesi; ordinaria cinque anni.',
    'Fasi: sentenza, inventario, stato passivo, liquidazione, riparto, chiusura.',
    'Art. 147: falliscono i soci illimitatamente responsabili, anche usciti da meno di un anno e occulti.',
  ],
};

export default c;
