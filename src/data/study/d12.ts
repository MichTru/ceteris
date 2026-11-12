import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd12',
  intro:
    'Ultimo capitolo: come si articola il rischio d’impresa tra più società (gruppi e direzione e coordinamento), le società a scopo mutualistico (cooperative e mutue assicuratrici) e le operazioni straordinarie che cambiano la forma o la struttura delle società: trasformazione, fusione e scissione.',
  sections: [
    {
      title: 'Controllo e collegamento',
      blocks: [
        { t: 'p', text: 'Chi è debitore risponde con tutti i suoi beni (art. 2740). Per separare i rischi si usano più società (il **gruppo**) o, nella s.p.a., **patrimoni destinati** a uno specifico affare (2447-bis, fino al 10% del netto).' },
        { t: 'table', head: ['Figura (art. 2359)', 'Criterio'], rows: [
          ['Controllo di diritto', 'Maggioranza dei voti in assemblea ordinaria'],
          ['Controllo di fatto', 'Voti sufficienti per un’influenza dominante'],
          ['Controllo contrattuale', 'Influenza dominante per vincoli contrattuali'],
          ['Collegamento', 'Influenza notevole: presunta con 1/5 dei voti (1/10 quotate)'],
        ] },
        { t: 'list', items: ['Si contano i voti delle controllate, fiduciarie e persone interposte.', 'Informazione: bilancio consolidato, relazione sulla gestione.', 'La controllata non sottoscrive azioni della controllante; può acquistarle nei limiti di utili e riserve (nelle aperte max 1/5 del capitale).'] },
        { t: 'warn', text: 'Gli appunti citano “art 2470” per la responsabilità patrimoniale: è l’**art. 2740**.' },
      ],
    },
    {
      title: 'Direzione e coordinamento',
      blocks: [
        { t: 'p', text: 'Si **presume** che la eserciti chi consolida o controlla (2497-sexies), anche in base a contratto o statuto (2497-septies).' },
        { t: 'table', head: ['Norme', 'Contenuto'], rows: [
          ['Fisiologiche', 'Pubblicità negli atti e nel registro (2497-bis); dati della capogruppo in nota integrativa; motivazione analitica delle decisioni influenzate (2497-ter)'],
          ['Patologiche', 'Responsabilità della capogruppo (2497); postergazione dei finanziamenti (2497-quinquies); recesso del socio (2497-quater)'],
        ] },
        { t: 'def', term: 'Responsabilità della capogruppo (art. 2497)', text: 'La **società o ente** che, nell’interesse imprenditoriale proprio o altrui, viola i **principi di corretta gestione** risponde verso i **soci** della eterodiretta (redditività e valore della partecipazione) e verso i suoi **creditori** (integrità del patrimonio). Non risponde se il danno è compensato dai **vantaggi complessivi** del gruppo.' },
        { t: 'list', items: ['In solido chi ha partecipato al fatto e chi ne ha tratto consapevolmente beneficio, nei limiti del vantaggio.', 'Soci e creditori agiscono solo se la società eterodiretta non li ha soddisfatti; nel fallimento agisce il curatore.', 'Recesso: trasformazione o cambio dell’oggetto della capogruppo, condanna della capogruppo, inizio o fine della direzione con alterazione del rischio (non quotate).'] },
      ],
    },
    {
      title: 'Le cooperative',
      blocks: [
        { t: 'p', text: 'Requisiti (2511): **scopo mutualistico** e **capitale variabile**. Forniscono ai soci beni, servizi o lavoro a condizioni migliori tramite **scambi mutualistici**; possono operare con terzi; risponde solo la cooperativa.' },
        { t: 'list', items: ['Modello s.p.a. o s.r.l. (obbligatorio sotto 9 soci; minimo 3 persone fisiche).', '**Porta aperta**; capitale variabile senza modifiche dell’atto costitutivo; limite di **100.000 €** per socio.', '**Voto capitario**: un voto a testa, per gli iscritti da almeno 90 giorni.', 'Ammissione decisa dagli amministratori; rigetto motivato in 60 giorni, con possibile ricorso all’assemblea.', 'Trasferimento autorizzato dagli amministratori; recesso mai parziale; esclusione sempre deliberata.', 'Amministratori in maggioranza soci; vigilanza ministeriale e art. 2409.', 'Riserva legale almeno il **30%** degli utili; **ristorni** in base agli scambi.', 'Insolvenza: liquidazione coatta amministrativa (e fallimento se commerciale, per prevenzione).'] },
        { t: 'table', head: ['Mutualità prevalente (2512-2514)', 'Contenuto'], rows: [
          ['Prevalenza', 'Attività soprattutto con i soci (oltre il 50%), iscrizione all’albo'],
          ['Dividendi', 'Non oltre buoni postali fruttiferi + 2,5 punti'],
          ['Riserve', 'Non distribuibili ai soci'],
          ['Scioglimento', 'Patrimonio ai fondi mutualistici'],
          ['Perdita della qualifica', 'Due esercizi senza prevalenza o modifica delle clausole'],
        ] },
        { t: 'p', text: 'Nelle **mutue assicuratrici** si è soci solo stipulando un contratto di assicurazione con la società; vigila l’IVASS.' },
      ],
    },
    {
      title: 'La trasformazione',
      blocks: [
        { t: 'p', text: 'Cambia il tipo senza estinzione: l’ente **conserva diritti e obblighi** e prosegue tutti i rapporti (2498). Dopo l’iscrizione l’invalidità non si pronuncia (2500-bis).' },
        { t: 'table', head: ['Tipo', 'Decisione', 'Responsabilità dei soci'], rows: [
          ['Progressiva (persone → capitali)', 'Maggioranza secondo gli utili, recesso del dissenziente', 'Restano responsabili per i debiti anteriori, salvo consenso dei creditori (silenzio di 60 giorni)'],
          ['Regressiva (capitali → persone)', 'Maggioranze statutarie + consenso di chi diventa illimitatamente responsabile', 'Rispondono anche dei debiti anteriori'],
          ['Eterogenea (capitali ↔ consorzi, cooperative, fondazioni…)', 'Due terzi degli aventi diritto + consenso di chi diventa illimitato', 'Efficace 60 giorni dopo la pubblicità; opposizione dei creditori'],
        ] },
        { t: 'list', items: ['Progressiva: capitale sui **valori attuali** con stima; quote in proporzione, al socio d’opera secondo gli utili.', 'Regressiva: relazione degli amministratori depositata **30 giorni** prima.', 'Le cooperative a **mutualità prevalente** non possono diventare società lucrative.'] },
      ],
    },
    {
      title: 'Fusione e scissione',
      blocks: [
        { t: 'p', text: 'La **fusione** riunisce più società: **in senso stretto** (nasce una nuova società) o **per incorporazione**. Le fuse o incorporate si estinguono; la risultante prosegue tutti i rapporti (2504-bis).' },
        { t: 'flow', items: ['Progetto comune con il rapporto di cambio (conguaglio ≤ 10%)', 'Iscrizione o pubblicazione almeno 30 giorni prima', 'Situazione patrimoniale (≤ 120 giorni), relazioni di amministratori ed esperti', 'Decisione delle società', 'Opposizione dei creditori entro 60 giorni', 'Atto pubblico depositato entro 30 giorni', 'Effetti dall’ultima iscrizione; poi niente invalidità'] },
        { t: 'list', items: ['Gli esperti si pronunciano sulla **congruità del rapporto di cambio**.', 'Vietata alle società in liquidazione che hanno iniziato a distribuire l’attivo.', 'Semplificazioni: incorporazione di società possedute al 100% (niente cambio) o al 90%.', 'Società di persone che confluiscono in società di capitali: i soci non sono liberati senza consenso dei creditori.'] },
        { t: 'p', text: 'Con la **scissione** una società assegna il patrimonio a una o più **beneficiarie** e i soci ricevono le loro partecipazioni. **Totale** (la scissa si estingue) o **parziale**; **non proporzionale** (i dissenzienti possono far comprare le loro quote) o **asimmetrica** (consenso unanime).' },
        { t: 'list', items: ['Passivo non attribuito: responsabilità solidale delle beneficiarie nei limiti del netto ricevuto (2506-bis).', 'Ogni società risponde in solido dei debiti non pagati dalla società che li ha ricevuti, nei limiti del netto assegnato (2506-quater).', 'Si applicano le regole della fusione: opposizione, atto pubblico, stabilità dopo l’iscrizione.'] },
        { t: 'example', title: 'Gamma si scinde', steps: ['Uno riceve un netto di 300.000 €, Due di 100.000 €.', 'Un debito da 150.000 € assegnato a Uno non viene pagato.'], result: 'Due risponde in solido fino a 100.000 €.' },
      ],
    },
  ],
  summary: [
    'Controllo di diritto, di fatto, contrattuale; collegamento con 1/5 dei voti.',
    'Direzione e coordinamento presunta per chi controlla; pubblicità e motivazione; responsabilità della capogruppo con vantaggi compensativi.',
    'Cooperative: scopo mutualistico, capitale variabile, voto capitario, riserva del 30%, ristorni.',
    'Mutualità prevalente: dividendi limitati, riserve indivisibili, devoluzione ai fondi.',
    'Trasformazione: continuità; progressiva con consenso presunto dei creditori in 60 giorni; regressiva con consenso dei soci illimitati.',
    'Fusione: progetto, esperti, opposizione in 60 giorni, atto pubblico, niente invalidità dopo l’iscrizione.',
    'Scissione: beneficiarie solidali nei limiti del netto ricevuto.',
  ],
};

export default c;
