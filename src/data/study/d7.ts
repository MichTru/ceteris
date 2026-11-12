import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd7',
  intro:
    'Il fallimento non è l’unica strada. L’imprenditore in crisi può proporre un accordo ai creditori: il concordato preventivo, gli accordi di ristrutturazione, i piani di risanamento. Il capitolo segue il concordato dalla domanda all’esecuzione, confronta gli strumenti negoziali e riassume il Codice della crisi, comprese le procedure per i sovraindebitati.',
  sections: [
    {
      title: 'Il concordato preventivo',
      blocks: [
        { t: 'p', text: 'Procedura **giudiziale e volontaria**: l’imprenditore propone un pagamento anche **parziale o dilazionato**, conserva la gestione, blocca le azioni dei creditori e, se tutto va bene, ottiene l’**esdebitazione**.' },
        { t: 'list', items: ['Presupposto **soggettivo**: come il fallimento.', 'Presupposto **oggettivo**: **stato di crisi**, che comprende l’insolvenza.', 'La proposta incide sui **chirografari**; i privilegiati sono pagati per intero o almeno per il valore dei beni gravati.', 'Si possono formare **classi** omogenee con trattamenti diversi.'] },
        { t: 'table', head: ['Tipo', 'Come si pagano i creditori'], rows: [
          ['Remissorio', 'Riduzione dei debiti'],
          ['Dilatorio', 'Dilazione delle scadenze'],
          ['In continuità diretta', 'Con i flussi dell’attività del debitore'],
          ['In continuità indiretta', 'Attività proseguita da affittuario, cessionario, conferitaria'],
          ['Liquidatorio', 'Vendita dei beni, cessione ai creditori, assuntore'],
        ] },
        { t: 'key', items: ['Liquidatorio: almeno il **20%** ai chirografari.', 'Proposte concorrenti: creditori con almeno il **10%**, se il debitore non assicura il **40%** (liquidatorio) o il **30%** (continuità).', 'Vendite dell’azienda tramite **procedure competitive** (163-bis).'] },
        { t: 'warn', text: 'Gli appunti dicono che nel concordato in continuità bisogna pagare almeno il 30%: è invece la soglia che apre le proposte concorrenti. Il minimo del 20% vale per il liquidatorio.' },
      ],
    },
    {
      title: 'Dalla domanda all’esecuzione',
      blocks: [
        { t: 'flow', items: ['Ricorso al tribunale con proposta, piano e documenti', 'Relazione del professionista: veridicità dei dati e fattibilità del piano', 'Decreto di ammissione: controllo di legittimità, nomina del commissario', 'Relazione del commissario ai creditori', 'Voto: maggioranza dei crediti (e delle classi)', 'Omologazione, con eventuale cram down', 'Esecuzione sorvegliata dal commissario'] },
        { t: 'p', text: 'Con il **concordato in bianco** si deposita la domanda senza piano e si hanno **60-120 giorni** per completarla, godendo subito del blocco delle azioni; il tribunale può nominare un commissario e imporre obblighi informativi.' },
        { t: 'table', head: ['Effetto dell’ammissione', 'Contenuto'], rows: [
          ['Spossessamento attenuato', 'Ordinaria amministrazione libera; straordinaria con autorizzazione del giudice delegato'],
          ['Blocco delle azioni', 'I creditori anteriori non possono agire fino all’omologazione'],
          ['Continuità', 'Pagamento autorizzato dei fornitori strategici; finanziamenti prededucibili'],
          ['Contratti pendenti', 'Sospensione fino a 60 giorni su richiesta del debitore'],
        ] },
        { t: 'list', items: ['Votano i **chirografari** e i privilegiati per la parte non coperta.', 'Maggioranza dei **crediti** ammessi e, con le classi, nel **maggior numero di classi**.', '**Cram down**: con opposizioni il tribunale omologa se la proposta conviene rispetto al fallimento.', 'Il concordato vincola **tutti** i creditori anteriori, libera i **soci illimitatamente responsabili**, esdebita il debitore ma **non i garanti**.', 'Grave inadempimento: **risoluzione**; frode: **annullamento**.'] },
      ],
    },
    {
      title: 'Concordato fallimentare',
      blocks: [
        { t: 'p', text: 'Si propone **dentro** il fallimento e, se omologato, lo **chiude** (art. 124 l.f.).' },
        { t: 'list', items: ['Proponenti: creditori o terzi; il **fallito** solo dopo **un anno** dalla sentenza ed entro **due anni** dal decreto di esecutività del passivo.', 'Deposito al **giudice delegato** con il parere del **curatore** e del **comitato dei creditori**.', '**Silenzio-assenso**: chi non dissente si considera favorevole.'] },
      ],
    },
    {
      title: 'Accordi e piani',
      blocks: [
        { t: 'table', head: ['Strumento', 'Chi vincola', 'Tratti chiave'], rows: [
          ['Accordo stragiudiziale', 'Solo chi lo firma', 'Pagamenti revocabili in caso di fallimento; niente prededuzione'],
          ['Piano di risanamento attestato', 'Chi vi aderisce', 'Atti esecutivi esenti da revocatoria'],
          ['Accordo di ristrutturazione (182-bis)', 'Aderenti; estranei pagati per intero', '60% dei crediti, omologazione, estranei entro 120 giorni, anche agricolo'],
          ['Accordo agevolato (CCII)', 'Aderenti', '30% dei crediti, rinunciando a moratoria e misure protettive'],
          ['Accordo a efficacia estesa (CCII)', 'Anche i dissenzienti della stessa categoria', 'Piano non liquidatorio'],
          ['Convenzione di moratoria (CCII)', 'Creditori della categoria', 'Solo dilatoria'],
        ] },
        { t: 'example', title: 'L’azienda agricola', steps: ['Debiti per 2 milioni; accordo con banche titolari di 1,3 milioni.', '1,3 / 2 = 65% > 60%.'], result: 'Può chiedere l’omologazione; gli estranei vanno pagati per intero.' },
      ],
    },
    {
      title: 'Il Codice della crisi',
      blocks: [
        { t: 'p', text: 'Obiettivi: **emersione anticipata** della crisi e preferenza per il **risanamento**. Assetti adeguati, indicatori, obblighi di segnalazione degli organi di controllo e dei **creditori pubblici qualificati** (Agenzia delle entrate, INPS, agente della riscossione), misure premiali.' },
        { t: 'warn', text: 'Gli appunti descrivono l’**allerta** gestita dagli **OCRI**: nella versione entrata in vigore nel 2022 è stata sostituita dalla **composizione negoziata della crisi**, con un esperto indipendente.' },
        { t: 'table', head: ['Istituto', 'Regola nel Codice'], rows: [
          ['Liquidazione giudiziale', 'Nuovo nome del fallimento; soglia 30.000 €'],
          ['Domande tardive', 'Sei mesi'],
          ['Liquidazione dell’attivo', 'Inizio entro 12 mesi, fine entro 5 anni (7)'],
          ['Esdebitazione', 'Diritto dopo tre anni'],
          ['Concordato liquidatorio', 'Risorse esterne che aumentano di almeno il 10% il soddisfacimento; minimo 20%'],
          ['Concordato nella liquidazione giudiziale', 'Nuove risorse che aumentano l’attivo di oltre il 10%'],
        ] },
        { t: 'h', text: 'Sovraindebitamento' },
        { t: 'list', items: ['**Ristrutturazione dei debiti del consumatore** (67 ss.).', '**Concordato minore** (74 ss.) per professionisti, imprese minori, agricoli.', '**Liquidazione controllata** (268 ss.).', '**Debitore incapiente meritevole** (283): esdebitazione anche senza offrire nulla; paga se entro quattro anni ha utilità per almeno il 10%.', 'Tutte con l’assistenza dell’**OCC**.'] },
      ],
    },
  ],
  summary: [
    'Concordato preventivo: crisi, proposta ai chirografari, classi; il debitore conserva la gestione.',
    'Liquidatorio almeno 20%; proposte concorrenti con il 10% se sotto 40% (30% in continuità).',
    'Ammissione con controllo di legittimità; straordinaria amministrazione autorizzata; voto a maggioranza dei crediti; cram down.',
    'Concordato fallimentare: chiude il fallimento; silenzio-assenso; il fallito propone dopo un anno.',
    'Accordi 182-bis: 60%, omologazione, estranei pagati in 120 giorni; nel CCII anche agevolati (30%) ed estesi.',
    'CCII: liquidazione giudiziale, composizione negoziata, esdebitazione dopo tre anni, procedure per i sovraindebitati.',
  ],
};

export default c;
