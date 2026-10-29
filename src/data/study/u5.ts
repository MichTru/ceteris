import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u5',
  intro:
    'Finora l’impresa è stata una scatola chiusa che massimizza il profitto. Ora la apriamo: vediamo da dove nasce la teoria neoclassica, perché è stata criticata, perché non è stata buttata via e quali teorie alternative spiegano meglio la grande impresa (manageriali, comportamentali, costi di transazione e agenzia), fino alle strutture organizzative.',
  sections: [
    {
      title: 'Che cos’è un’impresa',
      blocks: [
        { t: 'def', term: 'Impresa', text: 'Istituzione economica che si occupa di produzione e scambio di beni e servizi, attraverso le sue componenti organizzative interne e i suoi legami esterni.' },
        { t: 'p', text: 'L’impresa neoclassica è una **stilizzazione**: un atomo che si muove nel mercato per massimizzare il profitto. Serve a capire alcuni meccanismi, ma non rappresenta la varietà delle imprese reali.' },
        { t: 'table', head: ['Epoca', 'Forma di impresa', 'Caratteristica'], rows: [
          ['Comuni', 'Impresa artigiana', 'L’artigiano è imprenditore, lavoratore e direttore'],
          ['Dal XIII secolo, commerci internazionali', 'Impresa mercantile', 'Il mercante compra dagli artigiani e rivende oltremare, assumendosi tutto il rischio'],
          ['Rivoluzione industriale', 'Impresa industriale capitalistica', 'Divisione netta tra proprietari dei mezzi di produzione e operai; nasce l’economia'],
        ] },
        { t: 'h', text: 'Come si forma il prezzo?' },
        { t: 'p', text: '**Adam Smith** (1776, La ricchezza delle nazioni) vuole capire come prosperano le nazioni: con la divisione del lavoro (la fabbrica di spilli) e un mercato sempre più esteso. La **mano invisibile** trasforma l’egoismo individuale in benessere collettivo.' },
        { t: 'table', head: ['Economista', 'Il prezzo dipende da…', 'Idea'], rows: [
          ['Adam Smith (1723-1790)', 'Offerta', 'Costi + profitto (mark-up) = prezzo'],
          ['William S. Jevons (1835-1882)', 'Domanda', 'Il valore dipende dall’utilità per chi compra'],
          ['Alfred Marshall (1842-1924)', 'Incontro di domanda e offerta', 'Prezzo e quantità determinati insieme (Principles of Economics, 1890)'],
        ] },
        { t: 'p', text: 'La teoria neoclassica dell’impresa è quindi una **teoria dei prezzi**: l’impresa è una black box descritta da una funzione di produzione y = f(x) che associa a ogni insieme di input il massimo output.' },
        { t: 'example', title: 'Il marziano di Herbert Simon', steps: ['Un marziano guarda la Terra con un telescopio che mostra le strutture sociali: organizzazioni in verde, mercati in rosso.', 'Secondo la teoria neoclassica vedrebbe una rete di linee rosse (mercati) che collegano punti verdi (imprese).', 'In realtà vedrebbe grandi aree verdi collegate da linee rosse: quasi tutti lavoriamo dentro un’organizzazione.'], result: 'La visione atomistica trascura ciò che avviene dentro l’impresa.' },
      ],
    },
    {
      title: 'Critiche e difese della teoria neoclassica',
      blocks: [
        { t: 'p', text: '“Unboxing” della black box: quattro aree di critica.' },
        { t: 'table', head: ['Area', 'Teoria neoclassica', 'Realtà'], rows: [
          ['Obiettivi', 'Massimo profitto unico obiettivo', 'Separazione tra proprietà e controllo: si negozia un profitto soddisfacente e altri obiettivi (prestigio, vendite, quota di mercato)'],
          ['Complessità organizzativa', 'Impresa atomistica e antropomorfa (impresa = imprenditore)', 'Organizzazioni gerarchiche complesse, asimmetrie informative principale-agente, stakeholder interni ed esterni'],
          ['Incertezza e informazione', 'Informazione perfetta, previsioni accurate', 'Asimmetrie informative, incertezza (pandemie, conflitti), razionalità limitata'],
          ['Processo decisionale', 'Si produce dove R’ = C’; si decide solo il mix input-output', 'Si decide con convenzioni e pratiche (costo medio + markup); l’imprenditore decide su innovazione, strategie, pubblicità'],
        ] },
        { t: 'def', term: 'Razionalità limitata (Simon)', text: 'Individui e organizzazioni non possono immagazzinare informazioni infinite, conoscere tutte le opzioni né prevedere perfettamente il futuro.' },
        { t: 'h', text: 'La buttiamo? No' },
        { t: 'table', head: ['Autore', 'Difesa'], rows: [
          ['Milton Friedman (Nobel 1976)', 'Una scienza deve permettere previsioni accurate, non descrivere perfettamente la realtà'],
          ['Fritz Machlup', 'I decisori tendono intuitivamente al massimo profitto, come chi guida un’auto senza conoscerne il motore'],
          ['Armen Alchian', 'Interpretazione “darwinista”: sopravvivono le imprese che massimizzano il profitto (non confermato empiricamente)'],
        ] },
        { t: 'tree', root: 'Teorie alternative', children: [
          { label: 'Manageriali', sub: ['Ruolo dei manager e separazione tra proprietà e controllo'] },
          { label: 'Comportamentali', sub: ['L’impresa non ha obiettivi propri: negoziazione tra stakeholder'] },
          { label: 'Costi di transazione', sub: ['Perché esistono le imprese: make or buy'] },
          { label: 'Agenzia', sub: ['Rapporto principale-agente'] },
        ] },
      ],
    },
    {
      title: 'La grande impresa americana e le teorie manageriali',
      blocks: [
        { t: 'p', text: 'Le teorie alternative nascono dall’osservazione della realtà: inizio ’900, gli Stati Uniti diventano la prima potenza e si afferma la **grande impresa verticalmente integrata** per rispondere ai **consumi di massa**.' },
        { t: 'list', items: ['Molti prodotti, più lavoratori, più fasi produttive.', 'Reparti specializzati (marketing…), maggiore complessità.', 'Più supervisione: nasce una gerarchia con molti ruoli.', 'Dimensioni fisiche enormi: l’impresa diventa una piccola città.'] },
        { t: 'table', head: ['Taylorismo', 'Fordismo'], rows: [
          ['Organizzazione scientifica del lavoro', 'Produzione di massa (“qualunque colore, purché sia nero”)'],
          ['Scomposizione e parcellizzazione delle fasi', 'Fabbriche enormi e città operaie'],
          ['Misura di tempi e modi', 'Prodotti standardizzati ed economie di scala'],
          ['Catena di montaggio, gerarchia', 'Grandi scorte; grande impresa al centro di una rete di fornitori'],
        ] },
        { t: 'p', text: 'Queste imprese durano a lungo: all’inizio del 2000 la maggior parte delle prime 500 imprese USA era nata tra il 1880 e il 1920. Con la crescita emerge una figura nuova: il **manager**.' },
        { t: 'flow', title: 'Perché nasce il potere dei manager', items: ['Più complessità e specializzazione: servono squadre di manager', 'Più dimensioni: nessun proprietario può finanziare tutto', 'L’impresa si quota in borsa: proprietà diffusa', 'Il manager (amministratore delegato) controlla senza essere proprietario', 'Divaricazione tra proprietà e controllo'] },
        { t: 'list', items: ['**Berle e Means**: nel 1966 nell’85% delle grandi imprese nessun azionista superava il 5%.', '**Chandler** (1965): il fenomeno è anche un’opportunità; le imprese USA di maggior successo hanno investito in manager specializzati capaci di sfruttare infrastrutture, innovazione ed economie di scala.'] },
        { t: 'h', text: 'Perché i manager si allontanano dal massimo profitto' },
        { t: 'list', items: ['Lo **status** dipende dalla dimensione della propria divisione: il contributo al profitto è difficile da misurare, mentre più collaboratori segnalano importanza. Si punta a far crescere le vendite anche con strategie di breve.', '**Williamson** (1963): l’utilità dei manager cresce con le **spese discrezionali**: staff (prestigio e potere) ed emolumenti personali (jet, auto). Le risorse vengono sottratte ai dividendi.'] },
        { t: 'h', text: 'Come limitare la discrezionalità' },
        { t: 'list', ordered: true, items: ['Legare la retribuzione dei manager alla performance e ai dividendi.', '**Minaccia di takeover**: se il valore delle azioni scende troppo, un’acquisizione ostile (OPA) può sostituire il management.', '**Finanziatori esterni**: possono imporre disciplina, ma anche spingere verso scelte di breve periodo.'] },
        { t: 'warn', text: 'Le teorie manageriali spiegano bene i contesti con grandi imprese (USA, Regno Unito), molto meno quelli di piccola e media impresa (Italia, Francia, Germania, Giappone, Corea del Sud).' },
      ],
    },
    {
      title: 'Le teorie comportamentali',
      blocks: [
        { t: 'p', text: 'L’impresa **non ha obiettivi propri**: non è un’unità omogenea ma un insieme di **stakeholder** (azionisti, manager, operai, reparti, ma anche consumatori, governi, fornitori) con obiettivi diversi e diversa capacità di farsi sentire (**voice**). Il comportamento finale nasce da negoziazione e conflitto.' },
        { t: 'table', head: ['Obiettivo (Cyert e March, 1963)', 'Chi lo persegue'], rows: [
          ['Produzione (occupazione, flessibilità)', 'Reparto produzione'],
          ['Scorte (magazzini pieni)', 'Produzione e commerciale'],
          ['Vendite (fatturato costante e crescente)', 'Reparto commerciale'],
          ['Quota di mercato', 'Management'],
          ['Profitto', 'Azionisti'],
        ] },
        { t: 'p', text: 'Le decisioni avvengono in condizioni di **razionalità limitata**: nessuno ha informazioni complete, sia per la capacità limitata di memorizzare sia perché ognuno conosce soprattutto ciò che fa (**learning by doing**). Le decisioni sono quindi frutto di conflitti, negoziazioni e contrattazioni, non di un calcolo razionale.' },
        { t: 'def', term: 'Profitto soddisfacente', text: 'Invece di massimizzare, l’impresa si accontenta di un profitto che copra i costi, garantisca dignità economica e mantenga i rapporti con tutti gli stakeholder, evitando defezioni. I conflitti si risolvono con meccanismi di compensazione.' },
      ],
    },
    {
      title: 'La teoria dei costi di transazione',
      blocks: [
        { t: 'p', text: 'Domanda di partenza: **perché esistono le imprese?** Produzione e scambio sono una serie di relazioni regolate da contratti (anche senza un foglio di carta). Perché non avvengono tutte sul mercato?' },
        { t: 'example', title: 'Il maglione rosso', steps: ['Potrei andare dal pastore, poi dal tessitore, poi dal tintore.', 'Nessuno lo fa: il costo opportunità in tempo e risorse sarebbe enorme.'] },
        { t: 'table', head: ['Mercato', 'Impresa'], rows: [
          ['Coordinato dai prezzi', 'Coordinata da un ordine gerarchico (il “capo”)'],
          ['Struttura orizzontale, scambi liberi', 'Sistema pianificato'],
        ] },
        { t: 'def', term: 'Costi di transazione (Coase, 1937)', text: 'Costi d’uso del mercato, legati all’incertezza dello scambio. Nascono perché i **contratti sono sempre incompleti**: le parti non possono prevedere tutte le circostanze.' },
        { t: 'list', items: ['**Prima** del contratto: raccolta di informazioni, negoziazione.', '**Dopo**: controllo dell’esecuzione, eventuali cause legali.'] },
        { t: 'p', text: 'Internalizzare una relazione (per esempio assumere un lavoratore) conviene perché basta definire i contorni generali della prestazione, poi i dettagli li decide il datore di lavoro.' },
        { t: 'h', text: 'Cosa genera i costi di transazione (Williamson)' },
        { t: 'list', ordered: true, items: ['**Razionalità limitata**: limiti fisici (non posso conoscere tutti i fornitori del mondo) ed espressivi (non so trasmettere tutto ciò che so).', '**Opportunismo**: perseguire il proprio interesse con l’inganno (omissioni strategiche, false promesse). Pesa di più con pochi attori e scambi ripetuti.', '**Blocco informativo**: l’informazione è accessibile solo a una parte; legato al vantaggio della prima mossa.', '**Atmosfera**: sul mercato i comportamenti possono essere spietati, nell’impresa c’è un clima di squadra.'] },
        { t: 'h', text: 'Make or buy?' },
        { t: 'tree', root: 'La scelta make or buy', children: [
          { label: 'Make (internalizzare)', sub: ['Prestazioni specifiche: investimenti non recuperabili, competenze poco spendibili altrove', 'Prestazioni frequenti: dipendenza dal fornitore → integrazione verticale', 'Forte incertezza'] },
          { label: 'Buy (mercato)', sub: ['Costi di organizzazione interna: coordinamento con grandi numeri', 'Controllo qualità senza la concorrenza come stimolo'] },
        ] },
        { t: 'example', title: 'Il lavoratore specializzato', steps: ['Compro sul mercato una prestazione lavorativa. Il lavoratore acquisisce competenze utili solo da me.', 'Rinnovando il contratto, io ne approfitto per chiedere più ore; lui, che ha investito tempo, chiede aumenti.', 'Ogni rinnovo richiede negoziazioni lunghe e costose.'], result: 'Conviene assumerlo: make.' },
        { t: 'key', items: ['Se i costi di transazione sono **maggiori** dei costi di organizzazione interna → **make**.', 'Se i costi di organizzazione interna sono **maggiori** → **buy**.', 'Senza costi di organizzazione interna, per Coase esisterebbe un’unica grande impresa.'] },
      ],
    },
    {
      title: 'Teoria dell’agenzia e strutture organizzative',
      blocks: [
        { t: 'p', text: 'Il **principale** affida un’attività all’**agente**, ma i loro interessi divergono e il principale non può controllare direttamente l’agente (datore e dipendente, proprietà e manager).' },
        { t: 'table', head: ['Problema', 'Cosa è nascosto', 'Esempio', 'Effetto'], rows: [
          ['Selezione avversa', 'Informazione (prima del contratto)', 'Mercato delle auto usate (“bidoni”): non conosco la qualità e scelgo in base al prezzo', 'Restano sul mercato solo i prodotti peggiori'],
          ['Azzardo morale', 'Azione (dopo il contratto)', 'Assicurazione dentistica: taccio lo stato dei denti e poi mi rifaccio l’arcata', 'Le rate salgono, chi era in salute esce, resta chi sta peggio'],
        ] },
        { t: 'h', text: 'Le strutture organizzative' },
        { t: 'p', text: 'I problemi di agenzia esistono anche dentro l’impresa e crescono con le dimensioni. Nessuna struttura è migliore in assoluto: ciascuna si adatta a un tipo di impresa.' },
        { t: 'table', head: ['Struttura', 'Per chi', 'Vantaggi', 'Svantaggi'], rows: [
          ['Funzionale (U)', 'Piccole imprese monoprodotto, mercati stabili; prevalente fino al 1850', 'Specializzazione dei reparti; economie di scala nelle funzioni', 'Direzione sommersa di decisioni operative; lenta davanti agli shock; poco tempo per la strategia; reparti difficili da valutare; enfasi sulla produzione'],
          ['Multidivisionale (M)', 'Imprese multiprodotto o su più mercati; divisioni per prodotto o area', 'La direzione pensa al lungo periodo; risultati delle divisioni misurabili', 'Serve il giusto decentramento (troppo: azzardo morale; poco: congestione); coordinamento tra divisioni; duplicazioni'],
          ['M per gruppi', 'Multiprodotto e multiregione', 'Divisioni con problemi comuni', 'Complessità'],
          ['A matrice', 'Imprese a commessa o in transizione da U a M; PMI in mercati instabili', 'Flessibilità, economie di scala, coordinamento sui progetti', 'Doppio livello manageriale, indicazioni contrastanti, frustrazione, disordine'],
          ['A portafoglio (holding)', 'Grandissime imprese molto diversificate', 'Facile comprare e vendere sussidiarie; rischio ripartito', 'Coordinamento debole'],
        ] },
        { t: 'p', text: 'Il passaggio dalla forma U alla M è legato a tre invenzioni che hanno reso raggiungibili mercati lontani: **navi a vapore, ferrovie, telegrafo**.' },
      ],
    },
  ],
  summary: [
    'Impresa: istituzione di produzione e scambio con organizzazione interna e legami esterni.',
    'Prezzo: Smith offerta, Jevons domanda, Marshall incontro di entrambe.',
    'Critiche: obiettivi, complessità, incertezza (razionalità limitata), processo decisionale.',
    'Difese: Friedman (previsioni), Machlup (il guidatore), Alchian (darwinismo).',
    'Teorie manageriali: separazione proprietà-controllo; status e spese discrezionali; rimedi: retribuzione, takeover, finanziatori.',
    'Teorie comportamentali: stakeholder, 5 obiettivi di Cyert e March, profitto soddisfacente.',
    'Coase: contratti incompleti → costi di transazione. Williamson: razionalità limitata, opportunismo, blocco informativo, atmosfera.',
    'Make se costi di transazione > costi di organizzazione interna, altrimenti buy.',
    'Agenzia: selezione avversa (informazione nascosta), azzardo morale (azione nascosta).',
    'Strutture: U, M, M per gruppi, matrice, portafoglio.',
  ],
};

export default c;
