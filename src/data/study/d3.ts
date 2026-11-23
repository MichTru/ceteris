import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd3',
  intro:
    'L’azienda è lo strumento dell’impresa: il complesso dei beni organizzati per esercitarla. La legge ne regola soprattutto la circolazione: quando la vendita di beni è cessione d’azienda, che forma serve, cosa succede a contratti, crediti e debiti, e quale divieto di concorrenza grava su chi vende. Lo stesso schema vale, con differenze importanti, per usufrutto e affitto.',
  sections: [
    {
      title: 'Nozione di azienda',
      blocks: [
        { t: 'def', term: 'Azienda (art. 2555)', text: 'Il **complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa**.' },
        { t: 'list', items: [
          '«Beni» in senso ampio: cose materiali e immateriali, ma anche **crediti, rapporti giuridici, contratti**. Ognuno resta giuridicamente **autonomo** e mantiene il proprio regime.',
          'L’imprenditore non deve essere proprietario di tutto: basta un **titolo** che gli consenta di usare i beni (locazione, leasing, comodato).',
          'L’**avviamento** è l’attitudine del complesso a produrre nuova ricchezza e reddito, cioè il valore aggiunto dell’organizzazione. In bilancio si iscrive solo se **acquistato a titolo oneroso** e con il consenso del collegio sindacale (art. 2426 n. 6).',
          'L’azienda **sopravvive** all’interruzione dell’attività, finché il complesso non è concretamente **disgregato** o non perde ogni legame con il mercato che serviva.',
        ] },
        { t: 'def', term: 'Ramo d’azienda (art. 2112)', text: 'Un’**articolazione funzionalmente autonoma** di un’attività economica organizzata, identificata come tale da cedente e cessionario al momento del trasferimento.' },
        { t: 'warn', text: 'Gli appunti, per l’iscrizione dell’avviamento in bilancio, citano l’art. 2464 (conferimenti nella s.r.l.): la norma giusta è l’**art. 2426 n. 6**.' },
        { t: 'key', items: ['Impresa = attività. Azienda = beni organizzati. Avviamento = valore dell’organizzazione.'] },
      ],
    },
    {
      title: 'Quando c’è trasferimento d’azienda',
      blocks: [
        { t: 'p', text: 'La disciplina degli artt. 2556 ss. riguarda soprattutto la **circolazione** dell’azienda e dei suoi rami. Il problema pratico è capire se una vendita di beni è una semplice compravendita o una **cessione d’azienda**, con tutte le sue conseguenze.' },
        { t: 'def', term: 'Il criterio: autonomia funzionale', text: 'C’è trasferimento d’azienda se i beni ceduti consentono a chi li riceve di **esercitare l’attività** senza dover acquisire altri elementi essenziali. Altrimenti è una vendita, donazione, locazione o usufrutto di singoli beni.' },
        { t: 'list', items: [
          'Se si cede **tutta** l’azienda, basta identificarla con elementi esterni (luogo, settore): il trasferimento comprende tutti i beni che la compongono, **senza elencarli** uno per uno.',
          'Le parti possono **escludere** singoli beni, purché **non essenziali**. Se escludono un bene essenziale, non è più cessione d’azienda.',
          'Le regole valgono per qualsiasi titolo: vendita, conferimento in società, donazione, permuta.',
        ] },
        { t: 'h', text: 'La forma' },
        { t: 'flow', title: 'Forma (art. 2556)', items: ['In principio la forma è **libera**: l’azienda non ha una propria legge di circolazione', 'Va rispettata la forma richiesta dal tipo di contratto (donazione: atto pubblico) e per i singoli beni (immobili, marchi e brevetti, auto)', 'Per le imprese soggette a registrazione: forma **scritta ad probationem**', 'Atto pubblico o scrittura privata autenticata, depositati nel registro delle imprese entro 30 giorni a cura del **notaio**'] },
        { t: 'p', text: 'Restano necessari anche gli adempimenti pubblicitari dei singoli beni: **registri immobiliari** per gli immobili, **Ufficio italiano brevetti e marchi** per i diritti di proprietà industriale, **Pubblico registro automobilistico** per i veicoli.' },
      ],
    },
    {
      title: 'Il divieto di concorrenza',
      blocks: [
        { t: 'def', term: 'Art. 2557', text: 'Per **cinque anni** dal trasferimento chi aliena l’azienda deve astenersi dall’**iniziare una nuova impresa** che, per oggetto, ubicazione o altre circostanze, sia idonea a **sviare la clientela** dell’azienda ceduta.' },
        { t: 'list', items: [
          'Riguarda l’attività **in proprio** e **per conto di terzi**: viola il divieto anche chi diventa amministratore di una società concorrente.',
          'Vale per l’impresa individuale e per la **partecipazione a una società**, se è un modo di esercitare l’attività. Un **mero investimento finanziario** è lecito.',
          'L’estensione si valuta **in concreto**: conta l’idoneità a sviare la clientela.',
          'Le parti possono regolarlo nel contratto e anche ampliarlo, ma **non oltre i cinque anni** e senza impedire all’alienante **ogni** attività professionale.',
          'Si applica a ogni cessione, volontaria o coattiva, a qualunque titolo.',
          'Per l’**azienda agricola** vale solo per le **attività connesse**, se c’è un concreto rischio di sviamento.',
          'Vale anche per chi concede l’azienda in **usufrutto o affitto**, per tutta la durata del rapporto.',
        ] },
      ],
    },
    {
      title: 'Contratti, crediti, debiti',
      blocks: [
        { t: 'h', text: 'I contratti (art. 2558)' },
        { t: 'p', text: 'L’acquirente **subentra automaticamente** nei contratti stipulati per l’esercizio dell’azienda che **non hanno carattere personale**. È un effetto di legge: non serve la volontà delle parti, non conta se l’acquirente li conosceva e **non serve il consenso** del terzo contraente.' },
        { t: 'list', items: [
          'Riguarda i **contratti pendenti**: a prestazioni corrispettive non ancora eseguite da nessuna delle due parti. Se resta solo un credito o un debito, si applicano gli artt. 2559 e 2560.',
          'Il **terzo contraente** può **recedere entro tre mesi** dalla notizia del trasferimento se c’è una **giusta causa** (per esempio l’acquirente è inaffidabile). Resta salva la responsabilità dell’alienante per i danni.',
          'I contratti **personali** (prestazione infungibile per oggetto o per persona) **restano all’alienante**. Possono passare all’acquirente solo con il **consenso del terzo**.',
          'Le parti possono escludere singoli contratti, ma non quelli che danno la disponibilità di un bene **essenziale**: altrimenti non c’è più cessione d’azienda.',
        ] },
        { t: 'warn', text: 'Gli appunti collegano il recesso del terzo entro tre mesi ai contratti personali. Nel codice è il contrario: il recesso per giusta causa riguarda i contratti **non personali**, che passano senza il consenso del terzo; i personali passano solo se il terzo acconsente.' },
        { t: 'h', text: 'Crediti e debiti' },
        { t: 'p', text: '**Crediti (art. 2559)**: la cessione dei crediti dell’azienda ha effetto verso i terzi dal momento dell’**iscrizione** del trasferimento nel registro, anche senza notifica al debitore o sua accettazione. Il debitore che paga **in buona fede** all’alienante è comunque liberato, anche dopo l’iscrizione.' },
        { t: 'p', text: '**Debiti (art. 2560)**: l’acquirente ne risponde **solo se risultano dai libri contabili obbligatori**. L’alienante non è liberato: resta obbligato **in solido**, salvo che i creditori acconsentano alla sua liberazione. La regola protegge i creditori ed è **inderogabile**.' },
        { t: 'table', head: ['Elemento', 'Regola', 'Norma'], rows: [
          ['Contratti non personali', 'L’acquirente subentra automaticamente; il terzo può recedere entro tre mesi per giusta causa', '2558'],
          ['Contratti personali', 'Restano all’alienante, salvo consenso del terzo', '2558'],
          ['Crediti', 'Cessione efficace verso i terzi dall’iscrizione; il debitore che paga in buona fede all’alienante è liberato', '2559'],
          ['Debiti', 'L’acquirente risponde se risultano dai libri contabili; l’alienante resta obbligato in solido salvo consenso dei creditori', '2560'],
          ['Debiti di lavoro', 'Solidarietà dell’acquirente anche se non risultano dai libri', '2112'],
        ] },
        { t: 'example', title: 'L’officina Rossi', steps: ['La Rossi s.n.c. cede l’officina alla Verdi s.r.l. con scrittura autenticata.', 'Il contratto di fornitura dei ricambi passa alla Verdi.', 'Il debito verso la banca, che risulta dai libri, è dovuto da Verdi e Rossi in solido.', 'Il credito verso un cliente passa alla Verdi dall’iscrizione nel registro.', 'Per cinque anni la Rossi non può aprire un’officina concorrente vicina.'] },
        { t: 'warn', text: 'L’art. 2560 tutela i creditori ed è **inderogabile**: un patto tra le parti che esclude la responsabilità dell’acquirente vale solo nei loro rapporti interni.' },
      ],
    },
    {
      title: 'Usufrutto e affitto d’azienda',
      blocks: [
        { t: 'p', text: 'L’azienda può anche essere data in **godimento**: con l’usufrutto o l’affitto il concedente resta proprietario e un altro soggetto gestisce l’impresa.' },
        { t: 'list', items: [
          'L’usufruttuario o l’affittuario esercita l’impresa **sotto la ditta** che la contraddistingue (art. 2561 c. 1).',
          'Deve **conservare l’efficienza** dell’organizzazione e degli impianti e le normali dotazioni di scorte, **senza mutare la destinazione** dell’azienda (art. 2561 c. 2).',
          'Per gestire può **disporre dei beni** aziendali del concedente, anche se non ne diventa proprietario. I beni che immette nell’azienda diventano invece del concedente.',
          'Le differenze tra l’inventario iniziale e quello finale si **regolano in denaro**.',
          'All’inizio subentra nei **contratti** in corso, con le stesse regole della cessione (artt. 2558 e 2112). Alla fine il concedente subentra nei contratti pendenti, salvo quelli sproporzionati rispetto alle dimensioni dell’azienda.',
          'I **crediti** passano solo con un **patto espresso**.',
          'I **debiti** restano a chi li ha assunti: l’art. 2560 non si applica, salvo i **debiti di lavoro** (art. 2112).',
          'Il concedente non può fare **concorrenza** per la durata del rapporto.',
        ] },
        { t: 'table', head: ['', 'Cessione', 'Affitto o usufrutto'], rows: [
          ['Proprietà', 'Passa all’acquirente', 'Resta al concedente'],
          ['Contratti non personali', 'Passano all’acquirente', 'Passano all’affittuario, poi tornano al concedente'],
          ['Debiti anteriori', 'Acquirente se nei libri, alienante in solido', 'Restano al concedente (salvo lavoro)'],
          ['Crediti', 'Passano con l’iscrizione', 'Solo con patto espresso'],
          ['Concorrenza', 'Cinque anni per l’alienante', 'Per il concedente finché dura il rapporto'],
        ] },
      ],
    },
  ],
  summary: [
    'Azienda (2555): beni organizzati per l’impresa; basta un titolo di godimento; avviamento in bilancio solo se acquistato (2426 n. 6); ramo = articolazione funzionalmente autonoma.',
    'Cessione se i beni hanno autonomia funzionale; si possono escludere solo beni non essenziali.',
    'Forma libera, ma scritta ad probationem per le imprese registrate; atto pubblico o scrittura autenticata depositati nel registro (2556).',
    'Divieto di concorrenza: cinque anni, idoneità a sviare la clientela; vale anche per conto di terzi, non per il mero investimento (2557).',
    'Contratti non personali: successione automatica, recesso del terzo in tre mesi per giusta causa (2558).',
    'Crediti efficaci dall’iscrizione (2559); debiti: acquirente se nei libri, alienante in solido, regola inderogabile (2560).',
    'Affitto e usufrutto: ditta, efficienza, destinazione; crediti solo con patto; i debiti anteriori restano al concedente.',
  ],
};

export default c;
