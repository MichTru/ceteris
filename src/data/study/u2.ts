import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u2',
  intro:
    'Due strumenti per misurare il mercato. Il surplus dice quanto benessere ricavano consumatori e produttori dallo scambio. L’elasticità dice quanto reagisce la quantità quando cambia il prezzo, il reddito o il prezzo di un altro bene. All’esame servono sia le definizioni sia i calcoli.',
  sections: [
    {
      title: 'Surplus e benessere',
      blocks: [
        { t: 'p', text: 'La curva di domanda è decrescente: per ogni quantità indica la **disponibilità massima a pagare**. Chi compra paga il prezzo di mercato, che è uguale o inferiore a quanto era disposto a pagare.' },
        { t: 'def', term: 'Surplus del consumatore', text: 'Differenza tra la disponibilità massima a pagare e il prezzo effettivamente pagato. Graficamente: l’area **sopra il prezzo di equilibrio P\\* e sotto la curva di domanda**.' },
        { t: 'example', title: 'Il libro a 30 $', steps: ['Disponibilità a pagare: Aleisha 59 $, Brad 45 $, Claudia 35 $, Darren ed Edwina meno di 30 $.', 'Darren ed Edwina non comprano: il prezzo supera quanto avevano preventivato.', 'Claudia: 35 − 30 = 5 $. Brad: 45 − 30 = 15 $. Aleisha: 59 − 30 = 29 $.'], result: 'Surplus del consumatore = 5 + 15 + 29 = 49 $.' },
        { t: 'p', text: 'Con migliaia di consumatori la domanda diventa una curva continua invece che a gradini. Se il prezzo sale (da P\\* a P2) il surplus del consumatore **diminuisce** (meno persone accedono al bene, e chi compra paga di più); se il prezzo scende, aumenta. È una grandezza **soggettiva**: in Emilia-Romagna e in Sicilia le disponibilità a pagare, e quindi le funzioni, sono diverse.' },
        { t: 'def', term: 'Surplus del produttore', text: 'Differenza tra il prezzo incassato P\\* e il prezzo minimo a cui l’impresa sarebbe stata disposta a vendere (letto sulla curva di offerta). Graficamente: l’area **sotto il prezzo e sopra la curva di offerta**.' },
        { t: 'figure', scene: 'surplus', caption: 'Surplus del consumatore (sopra P\\*) e del produttore (sotto P\\*).' },
        { t: 'key', items: ['Prezzo più alto → meno surplus del consumatore, più surplus del produttore (e viceversa).', 'Per i neoclassici non c’è motivo di preferire l’uno o l’altro: conta il **benessere sociale complessivo** = somma dei due surplus.', 'Le diverse strutture di mercato (concorrenza perfetta, monopolio…) si giudicano proprio su quanto benessere complessivo producono.'] },
      ],
    },
    {
      title: 'L’elasticità della domanda al prezzo',
      blocks: [
        { t: 'def', term: 'Elasticità della domanda al prezzo (η, eta)', text: 'Misura la sensibilità della quantità domandata alle variazioni del prezzo, ceteris paribus.' },
        { t: 'formula', expr: 'η = (ΔQ / Q) ÷ (ΔP / P)', note: 'variazione percentuale della quantità diviso variazione percentuale del prezzo' },
        { t: 'h', text: 'Perché non basta la pendenza' },
        { t: 'p', text: 'Il rapporto ΔQ/ΔP dipende dall’unità di misura: un euro in meno fa entrare 8.000 spettatori in più allo stadio (−8.000) o vendere 100 litri di latte in più (−100). Quale domanda è più elastica? Non si può dire. Con le **variazioni percentuali** si ottiene un **numero puro**, confrontabile tra settori diversi.' },
        { t: 'h', text: 'Le proprietà da sapere' },
        { t: 'list', items: ['È **sempre negativa**: prezzo e quantità si muovono in direzioni opposte. Spesso si confronta il valore assoluto.', 'Varia **lungo la curva**, anche se la curva è una retta: l’elasticità non è la pendenza.'] },
        { t: 'table', head: ['Valore di |η|', 'Significato', 'Nome'], rows: [
          ['0', 'La quantità non cambia', 'Perfettamente rigida'],
          ['tra 0 e 1', 'La quantità varia meno del prezzo', 'Anelastica (rigida)'],
          ['1', 'Variano nella stessa proporzione', 'Unitaria'],
          ['maggiore di 1', 'La quantità varia più del prezzo', 'Elastica'],
          ['∞', 'Qualunque variazione di prezzo azzera o rende infinita la quantità', 'Perfettamente elastica'],
        ] },
        { t: 'h', text: 'Perché cambia lungo una retta' },
        { t: 'formula', expr: 'η = (ΔQ / ΔP) × (P / Q)', note: 'ΔQ/ΔP è l’inverso della pendenza, costante su una retta; P/Q invece cambia da punto a punto' },
        { t: 'figure', scene: 'elasticita-lineare', caption: 'Su una domanda lineare: tratto alto elastico, punto medio unitario, tratto basso rigido.' },
        { t: 'p', text: 'Ai **prezzi alti** P/Q è grande: la domanda è elastica. Nel **punto medio** l’elasticità è unitaria. Ai **prezzi bassi** P/Q è piccolo: la domanda è rigida. Per un bene di lusso la parte più sensibile è proprio quella dei prezzi alti.' },
        { t: 'h', text: 'I due metodi di calcolo' },
        { t: 'table', head: ['Metodo', 'Come si calcola la variazione %', 'Quando'], rows: [
          ['Semplice', '(finale − iniziale) ÷ iniziale', 'Variazioni piccole'],
          ['Punto medio', '(finale − iniziale) ÷ [(finale + iniziale)/2]', 'Variazioni ampie: più preciso'],
        ] },
        { t: 'warn', text: 'Scegli **un solo** metodo e usalo sia per la quantità sia per il prezzo. Mescolarli è un errore.' },
        { t: 'example', title: 'Giuseppe e i libri (reddito 10.000 €)', steps: ['Il prezzo passa da 8 a 10 €, la quantità da 40 a 32.', 'Metodo semplice: ΔQ% = (32 − 40)/40 = −20%; ΔP% = (10 − 8)/8 = +25%.', 'η = −0,20 ÷ 0,25 = −0,8.', 'Punto medio: ΔQ% = −8/36 = −0,222; ΔP% = 2/9 = 0,222; η = −1.'], result: 'η = −0,8 (semplice) oppure −1 (punto medio).' },
      ],
    },
    {
      title: 'Casi estremi e determinanti dell’elasticità',
      blocks: [
        { t: 'table', head: ['Caso', 'Curva', 'η', 'Esempio'], rows: [
          ['Perfettamente elastica', 'Orizzontale', '∞', 'A 4 € si compra quanto si vuole; appena sopra, nulla'],
          ['Perfettamente rigida', 'Verticale', '0', 'La dose del tossicodipendente, a qualunque prezzo'],
          ['Elasticità unitaria', 'Iperbole equilatera', '1 ovunque', 'Prezzo +20% → quantità −20%'],
        ] },
        { t: 'h', text: 'Da cosa dipende l’elasticità' },
        { t: 'tree', root: 'Determinanti dell’elasticità della domanda', children: [
          { label: 'Gusti e preferenze', sub: ['Bene considerato frivolo → elastica', 'Bene considerato necessario → rigida', 'Dipende dal consumatore, non dal bene (l’abito da sera)'] },
          { label: 'Sostituti disponibili', sub: ['Con alternative → elastica (Coca-Cola → Pepsi)', 'Senza alternative → rigida (il caffè)'] },
          { label: 'Ampiezza del mercato', sub: ['Una marca di sigarette è più elastica delle sigarette in genere'] },
          { label: 'Periodo di riferimento', sub: ['Breve periodo → più rigida', 'Lungo periodo → più elastica (auto a metano → auto elettrica)'] },
        ] },
        { t: 'example', title: 'Il prezzo del metano', steps: ['Il metano sale da P0 a P1. Nel breve periodo non vendo subito l’auto a metano: mi muovo lungo una curva quasi verticale e la quantità scende di poco (Q1′).', 'Se il prezzo resta alto, nel lungo periodo compro un’auto elettrica: salto su una nuova curva e consumo molto meno (Q1).', 'Unendo i nuovi equilibri si ottiene la domanda di lungo periodo, più piatta.'], result: 'Nel lungo periodo la domanda è più elastica.' },
      ],
    },
    {
      title: 'Elasticità e ricavo',
      blocks: [
        { t: 'formula', expr: 'RT = P × Q', note: 'il ricavo delle imprese è la spesa dei consumatori' },
        { t: 'table', head: ['Domanda', 'Se il prezzo sale…', 'Ricavo', 'Esempio'], rows: [
          ['Anelastica (tratto basso)', 'la quantità cala meno che proporzionalmente', 'Aumenta', 'Da 1 € × 100 = 100 € a 3 € × 80 = 240 €'],
          ['Elastica (tratto alto)', 'la quantità cala più che proporzionalmente', 'Diminuisce', 'Da 4 € × 50 = 200 € a 5 € × 20 = 100 €'],
        ] },
        { t: 'p', text: 'Un produttore preferisce una domanda **rigida**: può alzare il prezzo senza perdere troppe vendite e il ricavo aumenta. Conoscere l’elasticità è fondamentale per non fare “autogol” sui prezzi.' },
        { t: 'example', title: 'La metropolitana di New York (1995)', steps: ['Il biglietto passa da 1,25 $ a 1,50 $; i passeggeri calano del 4,3%.', 'ΔP% = (1,50 − 1,25)/1,25 = 0,25/1,25 = 20%.', 'η = −4,3% ÷ 20% = −0,215: domanda rigida.', 'Il ricavo aumenta: la metro si deve prendere comunque.'], result: 'La stima è di breve periodo: nel lungo ci si organizza diversamente e la quantità può calare molto di più.' },
      ],
    },
    {
      title: 'Elasticità al reddito, incrociata e dell’offerta',
      blocks: [
        { t: 'formula', expr: 'ηY = (ΔQ / Q) ÷ (ΔY / Y)', note: 'elasticità al reddito' },
        { t: 'p', text: 'Qui il **segno conta**: dice che tipo di bene è e in che tratto della curva di Engel ci troviamo.' },
        { t: 'table', head: ['Valore', 'Tipo di bene', 'Tratto della curva di Engel'], rows: [
          ['> 0', 'Normale', 'Y1 – Y2'],
          ['< 0', 'Inferiore', 'oltre Y3'],
          ['= 0', 'Reddito insufficiente o saturazione', '0 – Y1 oppure Y2 – Y3'],
        ] },
        { t: 'p', text: 'I beni di lusso sono molto elastici al reddito, quelli necessari (cibo, vestiario, carburante) più rigidi.' },
        { t: 'example', title: 'Giuseppe, elasticità al reddito', steps: ['A 12 € il reddito passa da 10.000 a 12.000 € (+20%) e la quantità da 24 a 30 (+25%).', 'ηY = 25% ÷ 20% = 1,25 → bene normale.', 'A 16 €: quantità da 8 a 12 (+50%) → ηY = 2,5.'], result: 'Si tiene fermo il prezzo e si fa cambiare solo il reddito: ceteris paribus.' },
        { t: 'formula', expr: 'ε1,2 = (ΔQ1 / Q1) ÷ (ΔP2 / P2)', note: 'elasticità incrociata: quantità di un bene rispetto al prezzo di un altro' },
        { t: 'table', head: ['Segno', 'Relazione', 'Esempio'], rows: [
          ['> 0', 'Sostituti', 'Sale il prezzo della Pepsi → più domanda di Coca-Cola'],
          ['< 0', 'Complementari', 'Scende il prezzo delle racchette → più domanda di palline'],
          ['= 0', 'Indipendenti', 'Nessun effetto'],
        ] },
        { t: 'formula', expr: 'ε = (ΔQs / Qs) ÷ (ΔP / P)', note: 'elasticità dell’offerta: sempre positiva' },
        { t: 'list', items: ['ε = 0: la quantità offerta non varia (curva verticale).', 'ε = ∞: sotto il prezzo di riferimento non si offre nulla, sopra quantità infinite (curva orizzontale).', 'ε = 1 in ogni punto per un’offerta lineare che parte dall’origine (nessun costo fisso).'] },
        { t: 'h', text: 'Offerta e shock' },
        { t: 'p', text: 'Nel **breve periodo l’offerta è rigida**: se la domanda di petrolio sale, si possono solo sfruttare al massimo i giacimenti esistenti. La pressione si scarica **sul prezzo** più che sulla quantità. Nel lungo periodo l’offerta diventa più piatta e l’aggiustamento avviene sulle quantità.' },
        { t: 'example', title: 'Mascherine e fiori', steps: ['COVID: la domanda di mascherine si moltiplica; i prezzi esplodono. Poi altri produttori si riconvertono (Martini produce disinfettante: aveva l’alcol e le competenze) e i prezzi scendono.', 'San Valentino: salgono di più i prezzi dei fiori che dei cioccolatini. Le rose non si possono produrre in anticipo e immagazzinare; i cioccolatini sì.'] },
      ],
    },
    {
      title: 'Casi d’esame',
      blocks: [
        { t: 'example', title: 'Sigarette: sensibilizzare o tassare?', steps: ['Team A: campagna shock → la curva di domanda si sposta a sinistra (da 20 a 10 sigarette al giorno al prezzo di 2 €).', 'Team B: imposta → il prezzo passa da 2 a 4 €, movimento lungo la curva (da 20 a 12).', 'A sembra più efficace (−10 contro −8), ma è un’ipotesi: chi fuma non legge i pacchetti e l’effetto svanisce nel lungo periodo.', 'B è più realistico, anche se la curva dovrebbe essere più verticale: le sigarette creano dipendenza.'], result: 'Negli appunti la scelta ragionata è B.' },
        { t: 'example', title: 'Mucca pazza', steps: ['Il solo annuncio del rischio fa crollare la domanda di carne bovina.', 'L’offerta nel breve è rigida: il prezzo crolla.', 'Pollo e maiale (sostituti) aumentano di prezzo: anche la loro offerta non può crescere subito.', 'Nel lungo periodo gli allevatori si riconvertono e il mercato si riequilibra.'] },
        { t: 'example', title: 'Il sindaco di Ferrara e la droga', steps: ['Squadra A: arrestare gli spacciatori → meno offerta. Con domanda rigida la quantità cala poco e il prezzo sale molto: servono più soldi per una dose e gli scippi possono aumentare.', 'Squadra B: campagne di rieducazione → meno domanda. La quantità cala di più, ma il prezzo crolla e gli spacciatori cercano nuovi clienti; su chi è già dipendente la campagna non ha effetto.'], result: 'Nessuna soluzione è perfetta: bisogna ragionare su elasticità e obiettivo.' },
      ],
    },
  ],
  summary: [
    'Surplus del consumatore: sopra P\\* e sotto la domanda. Del produttore: sotto P\\* e sopra l’offerta.',
    'Benessere sociale = somma dei due surplus.',
    'η = ΔQ% ÷ ΔP%: sempre negativa, numero puro, varia lungo la curva.',
    '|η| > 1 elastica, < 1 rigida, = 1 unitaria; orizzontale ∞, verticale 0.',
    'Domanda rigida: prezzo su → ricavo su. Elastica: prezzo su → ricavo giù.',
    'Determinanti: gusti, sostituti, ampiezza del mercato, periodo.',
    'Reddito: > 0 normale, < 0 inferiore. Incrociata: > 0 sostituti, < 0 complementari.',
    'Offerta rigida nel breve: gli shock si scaricano sui prezzi.',
  ],
};

export default c;
