import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u7',
  intro:
    'Tra il mercato puro e la grande impresa integrata esistono forme intermedie: imprese indipendenti che si scambiano beni sul mercato ma traggono vantaggio dalla vicinanza, geografica o di relazione. Sono i sistemi di imprese: cluster, distretti industriali, reti e catene globali del valore. Riducono i costi di transazione senza integrarsi.',
  sections: [
    {
      title: 'Sistemi di imprese, fiducia e reputazione',
      blocks: [
        { t: 'def', term: 'Sistemi di imprese', text: 'Imprese indipendenti tra loro, che scambiano sul mercato ma traggono vantaggio da una certa **prossimità** (geografica o relazionale), che rende la relazione diversa da un semplice contratto.' },
        { t: 'table', head: ['Mercato', 'Impresa', 'Sistema di imprese'], rows: [
          ['Scambi orizzontali e liberi', 'Gerarchia', 'Imprese indipendenti ma vicine'],
          ['Incertezza, contratti imperfetti', 'Certezza', 'Fiducia e reputazione'],
          ['Costi di transazione alti', 'Integrazione verticale come risposta', 'Si abbassano i costi senza integrarsi'],
        ] },
        { t: 'def', term: 'Fiducia', text: 'Aspettativa che la controparte si comporti correttamente.' },
        { t: 'def', term: 'Reputazione', text: 'Insieme di informazioni trasmissibili sulla storia di comportamenti corretti di un operatore.' },
        { t: 'flow', items: ['Scambi ripetuti tra imprese stabili', 'Circolano informazioni su capacità tecniche e morali', 'Nasce fiducia, calano le asimmetrie (selezione avversa)', 'Comportarsi da opportunista rovinerebbe la reputazione', 'I costi di transazione scendono senza integrazione'] },
        { t: 'p', text: 'Le forme di organizzazione si dispongono lungo un continuo: a un estremo i rapporti basati su **fiducia e reputazione** (distretti), all’altro quelli basati sulla **gerarchia** (Zaibatsu, Keiretsu).' },
      ],
    },
    {
      title: 'Cluster e distretti industriali',
      blocks: [
        { t: 'p', text: 'Luoghi circoscritti in cui la produzione si specializza in certi beni o servizi e le imprese godono dei vantaggi della **prossimità geografica**. Oltre alle imprese ci sono scuole, università, agenzie di sviluppo, centri di innovazione, associazioni di categoria. Esempi: Silicon Valley, distretti italiani, città specializzate del Guangdong.' },
        { t: 'table', head: ['', 'Cluster', 'Distretto industriale'], rows: [
          ['Definizione', 'Insieme di imprese e attività complementari specializzate in beni collegati (anche di una filiera), localizzate in un’area', 'Entità socio-territoriale: comunità di persone e popolazione di imprese in un’area storicamente determinata (Becattini, 1989)'],
          ['Il luogo è', 'Spazio fisico: non importa quale', 'Fatto sociale: la storia conta'],
          ['Imprese', 'Stesso prodotto o fasi diverse', 'Spesso un’impresa media e una miriade di PMI specializzate'],
          ['Relazioni', 'Economiche', 'Radicate socialmente: contatti anche nella vita quotidiana, alta fiducia'],
          ['Successo misurato con', 'Performance economica, internazionalizzazione, competitività', 'Performance economica e sviluppo umano'],
        ] },
        { t: 'example', title: 'Prato', steps: ['Una grande impresa tessile sta per fallire.', 'Alcuni imprenditori rilevano i macchinari e aprono piccole fabbriche continuando la produzione.', 'Da qui nasce uno dei distretti più antichi d’Italia: la storia del luogo spiega il distretto.'] },
      ],
    },
    {
      title: 'Efficienza collettiva',
      blocks: [
        { t: 'def', term: 'Efficienza collettiva', text: 'L’insieme dei guadagni di efficienza a cui le imprese accedono insieme grazie alla prossimità geografica. Nasce da **economie esterne** e **azione collettiva**.' },
        { t: 'h', text: 'Economie esterne: da dove nascono' },
        { t: 'tree', root: 'Economie esterne', children: [
          { label: 'Mercato del lavoro specializzato', sub: ['Le imprese attraggono lavoratori con competenze specifiche', 'Scuole e università formano manodopera', 'Meno costi per cercare e formare personale'] },
          { label: 'Input produttivi locali', sub: ['Fornitori di materie prime, macchinari e servizi si avvicinano', 'Meno costi per cercare gli input'] },
          { label: 'Flussi di conoscenza', sub: ['Conoscenza tecnica e di mercato circola più in fretta', 'Si imparano le soluzioni del vicino; si educano anche i gusti'] },
        ] },
        { t: 'table', head: ['Tipo di economia esterna', 'Esempio'], rows: [
          ['Pecuniaria', 'Un produttore compra molto input e ne fa scendere il prezzo per tutti'],
          ['Tecnologica', 'Un lavoratore cambia impresa nel cluster e porta con sé le competenze'],
        ] },
        { t: 'warn', text: 'Per la teoria neoclassica le economie esterne sono **fallimenti di mercato** (esternalità): se il lavoratore formato se ne va, si investe meno in formazione. Nei sistemi di imprese, invece, spiegano i **rendimenti crescenti**.' },
        { t: 'h', text: 'Azione collettiva' },
        { t: 'table', head: ['Tipo', 'Chi coinvolge', 'Esempi'], rows: [
          ['Verticale', 'Imprese a monte e a valle della stessa filiera', 'Partecipazione congiunta a fiere'],
          ['Orizzontale', 'Imprese che fanno lo stesso prodotto', 'Macchinario costoso condiviso, acquisti comuni, R&S congiunta'],
          ['Multilaterale', 'Attori del territorio, non solo imprese', 'Servizi alle imprese: analisi di mercato, consulenza, credito, export'],
        ] },
      ],
    },
    {
      title: 'Rischi dei cluster e distretti italiani',
      blocks: [
        { t: 'table', head: ['Rischio', 'Conseguenza'], rows: [
          ['Concorrenza eccessiva sui prezzi', 'Produzioni standardizzate a basso valore aggiunto'],
          ['Difficile coordinamento', 'Free rider nei progetti comuni di innovazione'],
          ['Congestione', 'Inquinamento e peggioramento della qualità della vita (piastrelle nel Guangdong)'],
          ['Iperspecializzazione', 'Poca resilienza agli shock su una filiera'],
        ] },
        { t: 'list', items: ['I cluster leader mondiali **diversificano** in attività correlate.', 'Le imprese partecipano ad **azioni collettive**.', 'Ci sono **istituzioni di supporto** e piattaforme di innovazione.', 'Hanno **legami fuori dal cluster**.', 'Puntano all’**upgrading** invece che alla concorrenza di prezzo.'] },
        { t: 'h', text: 'I distretti italiani' },
        { t: 'p', text: 'Nascono negli anni ’70, quando entra in crisi il **fordismo**: troppo rigido davanti all’instabilità internazionale e ai gusti che cambiano. La risposta è la **produzione flessibile** delle piccole e medie imprese, basata sulla fiducia.' },
        { t: 'list', items: ['**Comitati di distretto**: istituzioni, imprese, sindacati e associazioni coordinano le strategie.', '**Fondazioni**: rafforzano l’identità e cercano partner internazionali.', '**Centri specializzati**: formazione, progettazione, ricerca, design, controllo qualità.', 'Associazioni, consorzi, osservatori.'] },
        { t: 'p', text: 'Grazie all’efficienza collettiva i distretti italiani hanno reagito meglio alle crisi.' },
        { t: 'table', head: ['Critica', 'Risposta'], rows: [
          ['Troppa enfasi sulle piccole imprese a scapito della crescita', 'Il distretto funziona dove la produzione è divisibile senza perdere economie di scala; distretti e grandi imprese sono complementari'],
          ['Sistemi chiusi per il radicamento storico', 'Servono legami con l’esterno per vendere la produzione in eccesso'],
          ['Serve per forza una comunità storica?', 'No: un distretto può nascere da una scelta consapevole; la fiducia si può costruire nel tempo'],
        ] },
      ],
    },
    {
      title: 'Reti e catene globali del valore',
      blocks: [
        { t: 'def', term: 'Rete di imprese', text: 'Insieme stabile di relazioni, più o meno formalizzate, tra imprese distinte (nodi e collegamenti). Al posto della prossimità geografica c’è una **prossimità relazionale**: obiettivi condivisi (un prodotto, una tecnologia), anche tra imprese lontane.' },
        { t: 'tree', root: 'Classificazione delle reti', children: [
          { label: 'Per formalizzazione', sub: ['Formali', 'Informali'] },
          { label: 'Centralizzate', sub: ['Piramidali: un’impresa gestisce i fornitori a livelli', 'Concentriche: la grande impresa al centro attiva rapporti bilaterali'] },
          { label: 'Non centralizzate', sub: ['Rapporto paritario tra tutti'] },
        ] },
        { t: 'def', term: 'Catena globale del valore (GVC)', text: 'Rete transnazionale delle attività necessarie a portare un bene al consumatore finale, dalla progettazione in poi, con fasi separate sul piano organizzativo e geografico. È guidata da un’impresa leader. Alternativa alla multinazionale: controllo della filiera senza produrre direttamente né integrarsi.' },
        { t: 'p', text: 'Può essere guidata **a monte dal produttore** oppure **a valle dal compratore** (le catene di supermercati che gestiscono la filiera dei prodotti a scaffale).' },
        { t: 'table', head: ['Governance', 'Fornitori', 'Rapporto con il leader'], rows: [
          ['Captive', 'Piccoli, poche competenze, prodotti semplici', 'Forte controllo del leader; fornitori “catturati”, difficilmente cambiano catena'],
          ['Relazionale', 'Molto competenti, conoscenza tacita', 'Interazione continua, anche nella R&S'],
          ['Modulare', 'Competenti, lavorano su moduli indipendenti', 'Seguono le specifiche e possono servire più catene (l’elettronica dell’auto)'],
        ] },
        { t: 'h', text: 'La smiling curve' },
        { t: 'figure', scene: 'smiling', caption: 'Smiling curve: più valore aggiunto a monte (R&S, design) e a valle (marketing, servizi), meno nella produzione.' },
        { t: 'p', text: 'Le fasi non producono lo stesso valore. Nel tempo la curva è diventata **più sorridente**: è cresciuta la distanza tra il valore delle fasi a monte e a valle e quello della produzione. Per un territorio ospitare una fase invece di un’altra fa un’enorme differenza: per Apple, il valore che resta a Taiwan con l’assemblaggio è molto diverso da quello che resta negli USA con ricerca, marketing e servizi.' },
      ],
    },
  ],
  summary: [
    'Sistemi di imprese: indipendenti ma vicine; fiducia e reputazione abbassano i costi di transazione.',
    'Cluster: spazio fisico, performance economica. Distretto: fatto sociale e storico (Becattini), anche sviluppo umano.',
    'Efficienza collettiva = economie esterne (lavoro, input, conoscenza; pecuniarie e tecnologiche) + azione collettiva (verticale, orizzontale, multilaterale).',
    'Rischi: concorrenza di prezzo, free rider, congestione, iperspecializzazione.',
    'Distretti italiani: anni ’70, crisi del fordismo, produzione flessibile; complementari alla grande impresa.',
    'Reti: prossimità relazionale; GVC guidate da un leader, governance captive, relazionale, modulare.',
    'Smiling curve: valore alto a monte e a valle, basso in produzione.',
  ],
};

export default c;
