import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd10',
  intro:
    'La s.p.a. funziona attraverso organi con competenze separate: l’assemblea decide sull’organizzazione e nomina, gli amministratori gestiscono, i sindaci e il revisore controllano. Il capitolo segue questo schema, con tutti i quorum, le regole sull’invalidità delle delibere, le azioni di responsabilità e il bilancio d’esercizio.',
  sections: [
    {
      title: 'L’assemblea',
      blocks: [
        { t: 'table', head: ['Ordinaria (2364)', 'Straordinaria (2365)'], rows: [
          ['Approvazione del bilancio e degli utili', 'Modifiche dello statuto'],
          ['Nomina e revoca di amministratori, sindaci, revisore', 'Nomina e poteri dei liquidatori'],
          ['Compensi', 'Obbligazioni convertibili'],
          ['Responsabilità di amministratori e sindaci', 'Aumenti di capitale a pagamento'],
        ] },
        { t: 'list', items: ['Convocata dagli **amministratori**; per il bilancio entro **120 giorni** (180 se previsto); su richiesta di **1/10** del capitale (1/20 nelle quotate).', 'Avviso con ordine del giorno: **15 giorni** prima (Gazzetta o quotidiano); **8 giorni** con raccomandata nelle società chiuse; **30 giorni** sul sito nelle quotate.', '**Totalitaria**: intero capitale e maggioranza di amministratori e sindaci, anche senza convocazione.', 'Seconda convocazione entro 30 giorni dalla prima.'] },
        { t: 'table', head: ['Società chiuse', 'Costitutivo', 'Deliberativo'], rows: [
          ['Ordinaria 1ª', 'Metà del capitale', 'Maggioranza assoluta dei presenti'],
          ['Ordinaria 2ª', 'Nessuno', 'Maggioranza assoluta dei presenti'],
          ['Straordinaria 1ª', '—', 'Più della metà del capitale sociale'],
          ['Straordinaria 2ª', 'Oltre 1/3 del capitale', '2/3 del capitale presente'],
          ['Materie rilevanti in 2ª', '—', 'Comunque oltre 1/3 del capitale'],
        ] },
        { t: 'example', title: 'La modifica dello statuto', steps: ['Capitale 1.000 azioni; in prima convocazione ne sono presenti 560.', 'Votano a favore 480.', 'Serve più della metà del capitale: 501.'], result: 'Respinta, anche se 480 sono la maggioranza dei presenti.' },
        { t: 'list', items: ['Delega di voto scritta, non in bianco, revocabile; vietata a membri degli organi e dipendenti; nelle società chiuse massimo 20 soci per delegato.', '**Rinvio** fino a **5 giorni** su richiesta di 1/3 del capitale.', 'Verbale del presidente e del segretario; del **notaio** per la straordinaria. Voto palese.'] },
      ],
    },
    {
      title: 'Invalidità delle delibere',
      blocks: [
        { t: 'p', text: '**Conflitto di interessi** (2373): niente obbligo generale di astensione, ma la delibera è annullabile se il voto del socio in conflitto è **determinante** e la delibera **può danneggiare** la società. L’**abuso della maggioranza** contro la minoranza rende la delibera annullabile.' },
        { t: 'table', head: ['', 'Annullabilità (2377)', 'Nullità (2379)'], rows: [
          ['Cause', 'Non conformità a legge o statuto', 'Mancata convocazione, mancanza del verbale, oggetto illecito o impossibile'],
          ['Chi impugna', 'Soci assenti, dissenzienti, astenuti con il 5% (1‰ quotate); amministratori; sindaci', 'Chiunque vi abbia interesse; anche d’ufficio'],
          ['Termine', '90 giorni', 'Tre anni; senza limiti per oggetto illecito'],
          ['Altri rimedi', 'Risarcimento per chi è sotto soglia; sostituzione della delibera', 'Verbale tardivo sana la nullità'],
        ] },
        { t: 'list', items: ['Aumenti, riduzioni, obbligazioni: **180 giorni** (2379-ter).', 'Bilancio: non impugnabile dopo l’approvazione del successivo (2434-bis).', 'Fusione, scissione, trasformazione: nessuna invalidità dopo l’iscrizione.', 'Annullamento e nullità non pregiudicano i terzi in buona fede.'] },
      ],
    },
    {
      title: 'Gli amministratori',
      blocks: [
        { t: 'list', items: ['Gestione **esclusiva** (2380-bis); amministratore unico o consiglio.', 'Nomina dell’assemblea, anche non soci, per **massimo tre esercizi**; ineleggibili interdetti, inabilitati, falliti, condannati (2382).', '**Revoca** in qualunque momento; senza giusta causa spetta il risarcimento.', '**Cooptazione** (2386): se resta la maggioranza nominata dall’assemblea, il CdA sostituisce con l’approvazione dei sindaci; altrimenti si convoca l’assemblea.', '**Divieto di concorrenza** salvo autorizzazione dell’assemblea (2390).'] },
        { t: 'list', items: ['CdA: quorum costitutivo **maggioranza dei membri in carica**, deliberativo **maggioranza assoluta dei presenti** (2388); impugnazione delle delibere in 90 giorni.', '**Delega** a comitato esecutivo o amministratori delegati (2381); non delegabili bilancio, aumento delegato, riduzioni per perdite, progetti di fusione e scissione. Report almeno ogni **sei mesi**. Tutti agiscono **in modo informato**.', '**Interessi** (2391): dichiararli; il delegato si astiene; delibera motivata.', '**Rappresentanza** (2384): generale; limiti statutari **inopponibili** ai terzi salvo dolo.'] },
        { t: 'warn', text: 'Negli appunti i quorum sono attribuiti all’“art 2386” e la cooptazione all’“art 2368”: è il contrario.' },
      ],
    },
    {
      title: 'Responsabilità degli amministratori',
      blocks: [
        { t: 'table', head: ['Azione', 'Chi agisce', 'Presupposti', 'Norma'], rows: [
          ['Sociale', 'Assemblea; collegio sindacale (2/3); minoranza 1/5 (1/40 aperte)', 'Violazione dei doveri con danno alla società', '2392-2393-bis'],
          ['Dei creditori', 'Creditori sociali; curatore nel fallimento', 'Violata la conservazione del patrimonio, ora insufficiente', '2394'],
          ['Individuale', 'Socio o terzo', 'Danno diretto al suo patrimonio', '2395'],
        ] },
        { t: 'list', items: ['Diligenza dell’incarico e delle **specifiche competenze**; non si sindacano scelte razionali.', 'Solidarietà; i non delegati rispondono se non si attivano su fatti pregiudizievoli conosciuti. Esonero: **dissenso annotato** e comunicato al collegio.', 'L’azione sociale votata da almeno **1/5** del capitale comporta la **revoca**; prescrizione **cinque anni**; rinuncia salvo opposizione di 1/5.', 'Dopo una causa di scioglimento il danno si presume pari alla **differenza dei netti patrimoniali** (2486).'] },
      ],
    },
    {
      title: 'Controlli',
      blocks: [
        { t: 'h', text: 'Collegio sindacale' },
        { t: 'list', items: ['**3 o 5** effettivi e **2** supplenti; almeno un revisore legale.', 'Nomina dell’assemblea, **tre esercizi**, revoca solo per **giusta causa** con decreto del tribunale; ineleggibili parenti fino al **quarto grado** degli amministratori.', 'Vigila su **legge, statuto, corretta amministrazione, adeguatezza degli assetti**; non sulla convenienza.', 'Riunioni almeno ogni **90 giorni**; decade chi manca a due riunioni senza motivo.', 'Poteri: ispezione individuale, convocazione dell’assemblea, denuncia al tribunale, impugnazione delle delibere.', 'Denuncia dei soci (2408): con 1/20 del capitale il collegio deve indagare.', 'Responsabilità solidale se vigilando avrebbe evitato il danno (2407).'] },
        { t: 'h', text: 'Revisione legale e controllo giudiziario' },
        { t: 'p', text: 'Il **revisore** (d.lgs. 39/2010) controlla la contabilità e dà un giudizio sul bilancio; nominato dall’assemblea su proposta motivata del collegio, per tre esercizi.' },
        { t: 'p', text: 'Con l’**art. 2409** soci con **1/10** del capitale (1/20 nelle aperte), il collegio o il PM (società aperte) denunciano al tribunale il **fondato sospetto di gravi irregolarità**. Il tribunale può ordinare un’ispezione e, nei casi gravi, nominare un **amministratore giudiziario**.' },
      ],
    },
    {
      title: 'Il bilancio',
      blocks: [
        { t: 'list', items: ['Documenti: **stato patrimoniale, conto economico, rendiconto finanziario, nota integrativa**; la relazione sulla gestione lo accompagna.', 'Clausole generali: **chiarezza**, rappresentazione **veritiera e corretta**.', 'Principi: **prudenza**, **continuità**, **competenza**, prevalenza della sostanza, costanza dei criteri.', 'Avviamento solo se acquistato; crediti al presumibile realizzo.', 'Quotate, banche, assicurazioni: **IAS/IFRS**.'] },
        { t: 'example', title: 'La riserva legale', steps: ['Capitale 100.000 €, riserva legale già a 18.000 €, utile 60.000 €.', '5% dell’utile = 3.000 €.', 'Tetto = 1/5 del capitale = 20.000 €.'], result: 'Si accantonano 2.000 €.' },
        { t: 'flow', items: ['Progetto del CdA (non delegabile)', 'Al collegio e al revisore 30 giorni prima', 'Depositato in sede 15 giorni prima', 'Approvazione dell’assemblea entro 120 (180) giorni', 'Deposito nel registro entro 30 giorni'] },
        { t: 'p', text: 'Le perdite si coprono con utili, riserve facoltative, statutarie, legale, poi capitale. Si distribuiscono solo **utili realmente conseguiti**. Il bilancio che viola verità e chiarezza è **nullo**.' },
      ],
    },
  ],
  summary: [
    'Ordinaria: bilancio, nomine, compensi, responsabilità. Straordinaria: statuto e liquidatori.',
    'Quorum: ordinaria 1ª metà del capitale; straordinaria 1ª oltre metà del capitale, 2ª oltre 1/3 e 2/3 dei presenti.',
    'Annullabilità 90 giorni con il 5%; nullità tre anni per convocazione, verbale, oggetto.',
    'Amministratori: tre esercizi, revoca libera con danni, cooptazione, delega con materie riservate.',
    'Azione sociale, dei creditori, individuale; minoranza 1/5 (1/40).',
    'Collegio sindacale: 3 o 5, legalità e adeguatezza; art. 2409 con 1/10.',
    'Bilancio: chiarezza, verità, correttezza; riserva legale 5% fino a 1/5 del capitale.',
  ],
};

export default c;
