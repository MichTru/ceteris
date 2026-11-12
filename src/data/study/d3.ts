import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd3',
  intro:
    'L’azienda è lo strumento dell’impresa: il complesso dei beni organizzati per esercitarla. La legge ne regola soprattutto la circolazione: quando la vendita di beni è cessione d’azienda, che forma serve, cosa succede a contratti, crediti e debiti, e quale divieto di concorrenza grava su chi vende. Lo stesso schema vale, con differenze, per usufrutto e affitto.',
  sections: [
    {
      title: 'Nozione di azienda',
      blocks: [
        { t: 'def', term: 'Azienda (art. 2555)', text: 'Il **complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa**.' },
        { t: 'list', items: ['Comprende beni materiali e immateriali, crediti, contratti; ogni bene resta giuridicamente autonomo.', 'Basta un **titolo di godimento**: non serve la proprietà di ogni bene.', 'L’**avviamento** è l’attitudine a produrre reddito; in bilancio solo se acquistato a titolo oneroso (art. 2426 n. 6).', 'L’azienda sopravvive alla sospensione dell’attività finché non è disgregata.', '**Ramo d’azienda** (2112): articolazione funzionalmente autonoma.'] },
        { t: 'key', items: ['Impresa = attività. Azienda = beni organizzati. Avviamento = valore dell’organizzazione.'] },
      ],
    },
    {
      title: 'Il trasferimento',
      blocks: [
        { t: 'p', text: 'C’è cessione d’azienda quando i beni trasferiti hanno **autonomia funzionale**: l’acquirente può esercitare l’attività senza procurarsi altri elementi essenziali. Si possono escludere singoli beni, ma non quelli essenziali.' },
        { t: 'flow', title: 'Forma (art. 2556)', items: ['Forma libera in principio', 'Più quella richiesta dal contratto (donazione: atto pubblico) e dai beni (immobili, marchi, auto)', 'Imprese soggette a registrazione: forma scritta ad probationem', 'Atto pubblico o scrittura autenticata depositata nel registro dal notaio'] },
        { t: 'h', text: 'Divieto di concorrenza (art. 2557)' },
        { t: 'p', text: 'Per **cinque anni** l’alienante non può iniziare una nuova impresa che per oggetto, ubicazione o altre circostanze sia idonea a **sviare la clientela** dell’azienda ceduta. Vale per l’attività in proprio e per conto di terzi (fare l’amministratore di una concorrente), non per il mero investimento finanziario. Le parti possono ampliarlo, ma non oltre i cinque anni e senza impedire ogni attività professionale. Per l’azienda agricola riguarda solo le attività connesse.' },
      ],
    },
    {
      title: 'Contratti, crediti, debiti',
      blocks: [
        { t: 'table', head: ['Elemento', 'Regola', 'Norma'], rows: [
          ['Contratti non personali', 'L’acquirente subentra automaticamente; il terzo può recedere entro tre mesi per giusta causa', '2558'],
          ['Contratti personali', 'Restano all’alienante, salvo consenso del terzo', '2558'],
          ['Crediti', 'Cessione efficace verso i terzi dall’iscrizione; il debitore che paga in buona fede all’alienante è liberato', '2559'],
          ['Debiti', 'L’acquirente risponde se risultano dai libri contabili; l’alienante resta obbligato in solido salvo consenso dei creditori', '2560'],
          ['Debiti di lavoro', 'Solidarietà dell’acquirente anche se non risultano dai libri', '2112'],
        ] },
        { t: 'example', title: 'L’officina Rossi', steps: ['La Rossi s.n.c. cede l’officina alla Verdi s.r.l. con scrittura autenticata.', 'Il contratto di fornitura dei ricambi passa alla Verdi.', 'Il debito verso la banca, che risulta dai libri, è dovuto da Verdi e Rossi in solido.', 'Il credito verso un cliente passa alla Verdi dall’iscrizione nel registro.', 'Per cinque anni la Rossi non può aprire un’officina concorrente vicina.'] },
        { t: 'warn', text: 'L’art. 2560 tutela i creditori ed è **inderogabile**: un patto tra le parti che esclude la responsabilità dell’acquirente vale solo internamente.' },
      ],
    },
    {
      title: 'Usufrutto e affitto d’azienda',
      blocks: [
        { t: 'list', items: ['Gestione sotto la **ditta** dell’azienda, **conservando l’efficienza** di organizzazione e impianti e senza **mutare la destinazione** (2561).', 'Subentro nei **contratti** non personali come nella cessione.', 'I **crediti** passano solo con un patto espresso.', 'I **debiti** anteriori restano al concedente (non si applica il 2560), salvo quelli di lavoro.', 'Le differenze di inventario a fine rapporto si regolano in denaro.', 'Il concedente non può fare concorrenza per la durata del rapporto.'] },
        { t: 'table', head: ['', 'Cessione', 'Affitto'], rows: [
          ['Debiti anteriori', 'Acquirente se nei libri, alienante in solido', 'Restano al concedente (salvo lavoro)'],
          ['Crediti', 'Passano con l’iscrizione', 'Solo con patto espresso'],
          ['Concorrenza', 'Cinque anni per l’alienante', 'Per il concedente finché dura il rapporto'],
        ] },
      ],
    },
  ],
  summary: [
    'Azienda (2555): beni organizzati per l’impresa; basta un titolo di godimento; avviamento in bilancio solo se acquistato.',
    'Cessione se i beni hanno autonomia funzionale; forma scritta ad probationem e deposito nel registro (2556).',
    'Divieto di concorrenza: cinque anni, idoneità a sviare la clientela (2557).',
    'Contratti non personali: successione automatica, recesso del terzo in tre mesi per giusta causa (2558).',
    'Crediti efficaci dall’iscrizione (2559); debiti: acquirente se nei libri, alienante in solido (2560).',
    'Affitto e usufrutto: ditta, efficienza, destinazione; i debiti anteriori restano al concedente.',
  ],
};

export default c;
