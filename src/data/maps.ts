// Mappe concettuali: per ogni unità un concetto centrale, i rami principali e i dettagli.
// Formato: "# Ramo" apre un ramo, "- Nodo | dettaglio" aggiunge un nodo al ramo.

export interface MapLeaf {
  label: string;
  detail?: string;
}
export interface MapBranch {
  label: string;
  leaves: MapLeaf[];
}
export interface ConceptMap {
  center: string;
  branches: MapBranch[];
}

const SRC: Record<string, string> = {
  u1: `Domanda e offerta
# Domanda
- Decrescente nel prezzo | Se il prezzo sale, la quantità domandata scende.
- Ceteris paribus | Varia solo il prezzo, tutto il resto resta fermo.
- Misura il desiderio | Quanto si vuole comprare, non quanto si compra davvero.
# Cosa sposta la domanda
- Prezzo degli altri beni | Sostituti, complementari, indipendenti.
- Reddito | Bene normale: la domanda sale; bene inferiore: scende (curva di Engel).
- Gusti e aspettative
# Offerta
- Crescente nel prezzo | Più alto il prezzo, più conviene produrre.
- Si sposta con costi e tecnologia | Input più cari riducono l’offerta.
# Equilibrio
- Qd = Qs | Al prezzo di equilibrio P* domanda e offerta coincidono.
- Stabile per i neoclassici | L’eccesso di domanda fa salire il prezzo, quello di offerta lo fa scendere.
# Le quattro leggi
- D↑: P↑ Q↑
- D↓: P↓ Q↓
- O↑: P↓ Q↑
- O↓: P↑ Q↓
- Shock simultanei | L’esito dipende da quanto si spostano le due curve.
# Movimento o spostamento
- Cambia il prezzo | Ci si muove lungo la curva.
- Cambia un altro fattore | Si sposta tutta la curva.`,

  u2: `Surplus ed elasticità
# Surplus
- Del consumatore | Area sopra P* e sotto la curva di domanda.
- Del produttore | Area sotto P* e sopra la curva di offerta.
- Benessere sociale | Somma dei due surplus.
# Elasticità al prezzo η
- η = ΔQ% ÷ ΔP% | Sempre negativa, numero puro, cambia lungo la curva.
- |η| > 1: elastica
- |η| < 1: rigida
- Casi estremi | Domanda orizzontale: ∞; verticale: 0.
# Da cosa dipende
- Sostituti disponibili
- Ampiezza del mercato
- Periodo di tempo | Nel lungo periodo la domanda è più elastica.
- Gusti e necessità
# Elasticità e ricavo
- Domanda rigida | Prezzo ↑ → ricavo ↑.
- Domanda elastica | Prezzo ↑ → ricavo ↓.
- Unitaria | Il ricavo è massimo.
# Altre elasticità
- Al reddito | Positiva per i beni normali, negativa per gli inferiori.
- Incrociata | Positiva per i sostituti, negativa per i complementari.
- Dell’offerta | Rigida nel breve: gli shock si scaricano sui prezzi.
# Casi d’esame
- Metro di New York
- Fiori a San Valentino
- Mucca pazza
- Droga e spacciatori`,

  u3: `Produzione e costi
# Orizzonti temporali
- Breve periodo | Varia solo il lavoro L.
- Lungo periodo | Variano lavoro e capitale.
- Lunghissimo periodo | Cambia anche la tecnologia.
# Produzione nel breve
- Prodotto medio PM = PT/L
- Prodotto marginale P’ | Taglia il PM nel suo punto di massimo.
- Rendimenti decrescenti | Con il capitale fisso, prima o poi PM e P’ scendono.
# Costo opportunità
- Esplicito + implicito | Si conta anche ciò a cui si rinuncia.
- Esempio dell’università | 75.000 € tra spese e reddito rinunciato.
# Costi di breve
- CT = CF + CV
- CMF sempre decrescente | Il costo fisso si spalma su più unità.
- C’ taglia il CMT nel minimo | È la capacità ottimale di breve.
# Lungo periodo
- Principio di sostituzione | P’K/pK = P’L/pL.
- CMLP a forma di U
- Economie di scala | Reali e pecuniarie.
- Diseconomie di scala | Problemi di coordinamento e motivazione.
# Dimensione e profitto
- Scala efficiente minima | Dove il CMLP smette di scendere.
- Indice a ⅓ SEM | Misura lo svantaggio delle imprese piccole.
- Massimo profitto: R’ = C’ | Vale per ogni forma di mercato.`,

  u4: `Forme di mercato
# Struttura e barriere
- Barriere all’entrata | Costi in più per chi entra.
- Barriere all’uscita | Costi non recuperabili per chi esce.
- Potere di mercato | Capacità di fissare il prezzo sopra il costo marginale.
# Concorrenza perfetta
- Cinque caratteristiche | Molte imprese, prodotto omogeneo, informazione perfetta, libera entrata e uscita, imprese price taker.
- P = C’
- Lungo periodo: P = min CMT | Restano solo profitti normali.
# Monopolio
- R’ = C’, prezzo sulla domanda
- Perdita secca | Benessere perso rispetto alla concorrenza.
- Tipi di monopolio | Legale, tecnologico, naturale (subadditività dei costi).
# Oligopolio
- Cournot | Si sceglie la quantità: 1/3 + 1/3 = 2/3 del mercato.
- Stackelberg | Leader 1/2, follower 1/4: totale 3/4.
- Bertrand | Si sceglie il prezzo: p = C’.
- Cartelli instabili | Dilemma del prigioniero, equilibrio di Nash.
# Concorrenza monopolistica
- Prodotti differenziati
- CMT tangente alla domanda | Profitti nulli nel lungo periodo.
- Capacità in eccesso
# Misure e paradigma
- Rapporto CN | Somma delle prime n quote di mercato.
- Indice HH | Somma dei quadrati delle quote, tra 1/N e 1.
- Test SSNIP | Monopolista ipotetico; attenzione all’errore del cellophane.
- Paradigma S-C-P | Struttura → condotta → performance, con effetti di ritorno.`,

  u5: `Teorie dell’impresa
# Che cos’è un’impresa
- Istituzione di produzione e scambio | Con un’organizzazione interna e legami con l’esterno.
- Teoria del valore | Smith: offerta. Jevons: domanda. Marshall: incontro di entrambe.
# Critiche ai neoclassici
- Obiettivi diversi dal profitto
- Complessità dell’impresa
- Incertezza | Razionalità limitata (Simon).
- Processo decisionale
# Difese
- Friedman | Conta che il modello preveda bene, non che sia realistico.
- Machlup | Il guidatore sorpassa senza fare calcoli.
- Alchian | Darwinismo: sopravvive chi si comporta come se massimizzasse.
# Teorie manageriali
- Proprietà separata dal controllo | Berle e Means.
- Obiettivi dei manager | Status, crescita, spese discrezionali (Williamson, 1963).
- Rimedi | Retribuzione legata ai risultati, takeover, finanziatori.
# Teorie comportamentali
- Stakeholder
- Cyert e March | Cinque obiettivi: produzione, scorte, vendite, quota di mercato, profitto.
- Profitto soddisfacente
# Costi di transazione
- Coase (1937) | Contratti incompleti → costi di transazione.
- Williamson | Razionalità limitata, opportunismo, blocco informativo, atmosfera.
- Make or buy | Si produce in casa se i costi di transazione superano quelli di organizzazione interna.
# Agenzia e strutture
- Selezione avversa | Informazione nascosta prima del contratto.
- Azzardo morale | Azione nascosta dopo il contratto.
- Forme organizzative | U, M, M per gruppi, matrice, portafoglio.`,

  u6: `Altre forme d’impresa
# Zaibatsu
- Famiglia e holding piramidale
- Banca del gruppo
- Legame con lo Stato
- Big Four | Mitsui, Mitsubishi, Sumitomo, Yasuda.
# Keiretsu
- Rete senza testa
- Banca al centro | Partecipazioni incrociate tra le imprese.
- Orizzontali e verticali | Big Six; Toyota con i suoi fornitori.
# Chaebol
- Famiglia senza holding
- Lealtà e successione padre-figlio
- Stato che controlla la performance | Il governo Park premiava chi esportava.
# Impresa pubblica
- Interesse pubblico
- Profitto come vincolo
- Rimedi alle inefficienze | Concorrenza e manager sostituibili.
# Cooperativa
- Scopo mutualistico
- Una testa, un voto
- Ristorni | E il 3% degli utili ai fondi mutualistici.
- Limiti di capitalizzazione
# Sociale e multinazionale
- Impresa sociale | Finalità sociale; colma i vuoti del welfare.
- Multinazionale | Integrazione operativa e di conoscenza tra paesi.
- Greenfield e brownfield | Partecipazioni al 10%, 50%, 100%.`,

  u7: `Sistemi di imprese
# Fiducia e reputazione
- Imprese indipendenti ma vicine
- Abbassano i costi di transazione
# Cluster e distretti
- Cluster | Concentrazione nello spazio, guardata per la performance economica.
- Distretto industriale | Fatto sociale e storico (Becattini), anche sviluppo umano.
# Efficienza collettiva
- Economie esterne | Lavoro, input, conoscenza; pecuniarie e tecnologiche.
- Azione collettiva | Verticale, orizzontale, multilaterale.
# Rischi
- Concorrenza di prezzo
- Free rider
- Congestione
- Iperspecializzazione
# Distretti italiani
- Anni ’70, crisi del fordismo
- Produzione flessibile
- Complementari alla grande impresa
# Reti e catene globali
- Prossimità relazionale | Le reti non hanno bisogno di vicinanza fisica.
- Governance delle GVC | Captive, relazionale, modulare.
- Smiling curve | Valore alto a monte e a valle, basso nella produzione.`,

  m1: `Insiemi e funzioni
# Insiemi numerici
- ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ
- Razionali | Decimali finiti o periodici.
- Irrazionali | Algebrici o trascendenti.
# Intervalli e piano
- Parentesi quadra include | La tonda esclude.
- Verso ±∞ sempre tonda
- Quattro quadranti
# Funzione
- A ogni x un solo y | Test della retta verticale.
- Dominio | Denominatore ≠ 0, radice pari ≥ 0, argomento del logaritmo > 0.
- Immagine e codominio
# Monotonia
- Crescente | Δf/Δx > 0.
- Decrescente | Δf/Δx < 0.
# Iniettività
- Test della retta orizzontale
- Strettamente monotona ⇒ iniettiva | Il contrario non vale.
# Funzione inversa
- Esiste se la funzione è biiettiva
- Ricavo x e rinomino
- Simmetrica rispetto a y = x | Domini e codomini si scambiano.`,

  m2: `Funzioni elementari
# Rette e valore assoluto
- y = mx + q | m è la pendenza, q l’intercetta.
- Valore assoluto | Grafico a V.
# Potenze e radici
- xⁿ con n pari | Decrescente fino a 0, poi crescente.
- xⁿ con n dispari | Sempre crescente.
- Radice pari | Solo x ≥ 0.
- Radice dispari | Definita su tutto ℝ.
# Esponenziale
- Base a > 0, a ≠ 1
- Sempre positiva
- Passa per (0, 1)
# Logaritmo
- Argomento > 0
- Passa per (1, 0)
- Proprietà | log(xy) = log x + log y; log(x/y) = log x − log y; log xᵏ = k log x.
# Funzioni composte
- g(f(x)) | L’immagine di f deve stare nel dominio di g.
- L’ordine conta
# Costi, ricavi, profitto
- P = R − C
- Pareggio: P = 0
- Massimo nel vertice | x = −b/(2a), se a < 0.`,

  m3: `Successioni
# Definizione
- Funzione da ℕ₊ a ℝ
- Termine generale o ricorrenza
- Definitivamente | Da un certo n₀ in poi.
# Progressioni
- Aritmetica | a + (n − 1)d.
- Geometrica | a · qⁿ⁻¹.
# Interesse
- Semplice | C(1 + nr).
- Composto | C(1 + r)ⁿ.
# Limite
- Definizione con ε e n₀ | |s_n − S| < ε per ogni n > n₀.
- Per eccesso e per difetto | 1/n → 0⁺; 1 − 1/n → 1⁻.
- Il limite è unico
# Comportamento
- Convergente
- Divergente
- Irregolare
- Monotone: il limite esiste sempre`,

  m4: `Limiti e continuità
# Limite
- Destro = sinistro | Solo così il limite esiste.
- f(x₀) non conta
- Gerarchia degli infiniti | ln x ≪ xⁿ ≪ eˣ.
# Forme indeterminate
- 0/0, ∞/∞, 0·∞, +∞ − ∞
- 0⁰, 1^∞, ∞⁰
- Polinomi ∞/∞ | Si confrontano i gradi.
- 0/0 | Si scompone e si semplifica.
# Asintoti
- Verticale | Limite infinito in un punto.
- Orizzontale | Limite finito all’infinito.
- Obliquo | m = lim f/x, q = lim (f − mx).
# Continuità
- f(x₀) esiste
- Il limite è finito
- Limite = f(x₀)
# Discontinuità
- 1ª specie: salto
- 2ª specie | Almeno un limite infinito o inesistente.
- 3ª specie: eliminabile
# Teoremi
- Teorema degli zeri (Bolzano)
- Weierstrass | Su [a, b] ci sono massimo e minimo.
- Serve la continuità su [a, b]`,

  m5: `Derivate
# Definizione
- Rapporto incrementale | Pendenza della secante.
- Limite per h → 0 | Pendenza della tangente.
- Retta tangente | y = f′(x₀)(x − x₀) + f(x₀).
# Derivate fondamentali
- (xⁿ)′ = nxⁿ⁻¹
- (eˣ)′ = eˣ
- (ln x)′ = 1/x
- (√x)′ = 1/(2√x)
# Regole
- Prodotto | f′g + fg′.
- Quoziente | (f′g − fg′)/g².
- Funzione composta | g′(f(x)) · f′(x).
# In economia
- Costo marginale C′(x) | Costo di un’unità in più.
- Ricavo marginale R′(x)
# Derivabilità
- Derivabile ⇒ continua | Il contrario non vale.
- Punti angolosi
- Cuspidi
- Flessi a tangente verticale
# De l’Hôpital
- Solo con 0/0 o ∞/∞
- Derivate separate | Si deriva numeratore e denominatore, non il quoziente.
- 0·∞ va riscritto`,

  m6: `Studio di funzione
# Massimi e minimi
- Globale ⇒ locale
- Teorema di Fermat | Estremo interno e derivabile ⇒ f′ = 0.
# Monotonia
- Teorema di Lagrange | f′(c) = [f(b) − f(a)]/(b − a).
- f′ > 0 ⇒ crescente
- f′ < 0 ⇒ decrescente
# Punti stazionari
- f′ da + a −: massimo
- f′ da − a +: minimo
- Test della derivata seconda | f″ > 0 minimo, f″ < 0 massimo.
# Su [a, b]
- Si confrontano stazionari, non derivabili ed estremi
# Concavità e flessi
- f″ ≥ 0: convessa
- f″ ≤ 0: concava
- Flesso | Dove f″ cambia segno.
# Ottimizzazione
- Minimo costo medio | C′ = C/x.
- Massimo profitto | R′ = C′ e P″ < 0.`,

  m7: `Integrali
# Primitive
- F′ = f
- Differiscono per una costante
# Integrali immediati
- ∫ xⁿ = xⁿ⁺¹/(n + 1)
- ∫ 1/x = ln|x|
- ∫ eˣ = eˣ
- ∫ f′/f = ln|f|
# Metodi
- Linearità
- Per parti | ∫ f g′ = f g − ∫ f′ g.
# In economia
- C(x) = ∫ C′(x) dx
- La costante è il costo fisso
# Integrale definito
- F(b) − F(a)
- Scambiare gli estremi cambia il segno
# Aree
- f < 0 ⇒ integrale negativo
- Spezza negli zeri | E somma i valori assoluti.`,

  d1: `L’imprenditore
# Chi è (art. 2082)
- Attività economica | Basta coprire i costi, non serve il lucro.
- Organizzata
- Professionale | Abituale, anche se non esclusiva.
- Produzione o scambio di beni o servizi | Il mero godimento non è impresa.
# Categorie
- Agricolo (art. 2135) | Cura di un ciclo biologico; non fallisce.
- Commerciale (art. 2195) | Categoria residuale.
- Piccolo (art. 2083) | Prevale il lavoro proprio e dei familiari.
- Professionista (art. 2238) | Imprenditore solo se la professione è parte di un’impresa.
# Codice della crisi
- Crisi | Probabile insolvenza: flussi inadeguati nei 12 mesi successivi.
- Insolvenza | Non riesce più a pagare regolarmente.
- Sovraindebitamento
- Impresa minore | Attivo ≤ 300.000, ricavi ≤ 200.000, debiti ≤ 500.000 €.
# Inizio e fine
- Conta l’attività reale
- Fallimento entro un anno dalla cancellazione
# Imputazione
- Spendita del nome | È imprenditore chi agisce in nome proprio.
- Imprenditore occulto`,

  d2: `Pubblicità e organizzazione
# Registro delle imprese
- Tenuto dalle Camere di commercio | Sotto la vigilanza del giudice.
- Atti tipici, controllo formale
# Efficacia dell’iscrizione
- Dichiarativa (art. 2193) | Iscritto = opponibile ai terzi; non iscritto = inopponibile, salvo conoscenza.
- Costitutiva | Società di capitali e cooperative.
- Normativa | Società di persone.
- Notizia | Sezione speciale.
# Ausiliari
- Institore | Poteri generali, anche in giudizio.
- Procuratore | Un settore, niente giudizio.
- Commesso | Solo atti ordinari.
# Assetti adeguati (art. 2086)
- Per intercettare la crisi in tempo
# Scritture contabili (art. 2214)
- Libro giornale e degli inventari
- Senza abrasioni
- Conservate dieci anni`,

  d3: `L’azienda
# Nozione (art. 2555)
- Beni organizzati per l’impresa
- Basta un titolo di godimento | Non serve esserne proprietari.
- Avviamento | In bilancio solo se acquistato.
# Trasferimento
- Autonomia funzionale dei beni
- Forma (art. 2556) | Scritta per la prova; deposito nel registro delle imprese.
- Divieto di concorrenza (art. 2557) | Cinque anni.
# Contratti (art. 2558)
- Successione automatica | Se non hanno carattere personale.
- Recesso del terzo | Entro tre mesi, per giusta causa.
# Crediti e debiti
- Crediti (art. 2559) | Efficaci verso i terzi dall’iscrizione.
- Debiti (art. 2560) | L’acquirente risponde se sono nei libri; l’alienante resta obbligato in solido.
# Usufrutto e affitto (art. 2561)
- Conservare ditta ed efficienza
- Debiti anteriori al concedente
# Lavoratori (art. 2112)
- Il rapporto continua | Cedente e cessionario in solido per i crediti.`,

  d4: `I contratti d’impresa
# Vendita
- Effetti con il consenso
- Vizi | Denuncia in 8 giorni, azione entro un anno dalla consegna.
# Somministrazione
- Prestazioni periodiche o continuative
- Patto di preferenza | Al massimo cinque anni.
# Locazione
- Massimo 30 anni
- Commerciale: almeno 6 anni
- Prelazione e cessione con l’azienda
# Appalto
- Organizzazione e rischio dell’appaltatore
- Varianti fino a 1/6 del prezzo
- Vizi | Denuncia in 60 giorni, azione in due anni.
- Rovina | Responsabilità per dieci anni.
# Subfornitura
- Scritta a pena di nullità
- Pagamento in 60 giorni | Penale del 5% oltre 30 giorni di ritardo.
- Subaffidamento max 50%
# Trasporto e deposito
- Clausole limitative nulle | Prescrizione in un anno.
- Albergo | Fino a cento volte il prezzo giornaliero della camera.
# Distribuzione e collaboratori
- Agenzia | Zona, stabilità, esclusiva, indennità.
- Mandato e commissione
- Mediazione | Imparziale, provvigione da entrambe le parti.
- Concessione e franchising`,

  d5: `Consorzi e titoli di credito
# Consorzio (art. 2602)
- Organizzazione comune di fasi
- Scritto a pena di nullità
- Decisioni a maggioranza per teste
# Attività esterna
- Fondo consortile
- Risponde solo il fondo | Per le obbligazioni assunte in nome del consorzio.
# Principi dei titoli
- Legittimazione (art. 1992)
- Eccezioni limitate (art. 1993)
- Acquisto in buona fede (art. 1994)
# Circolazione
- Al portatore: consegna
- All’ordine: girata
- Nominativo: doppia intestazione
# Cambiale
- Titolo esecutivo se in regola col bollo
- Avallo
- Obbligati diretti e di regresso
# Assegni
- Bancario | Presentazione in 8 o 15 giorni.
- Circolare | Presentazione in 30 giorni; prescrizione in tre anni.`,

  d6: `Il fallimento
# Presupposti
- Imprenditore commerciale privato
- Sopra le soglie (art. 1 l.f.)
- Stato di insolvenza
- Debiti scaduti ≥ 30.000 €
# Iniziativa
- Creditori, debitore, PM
- Tribunale della sede principale
# Effetti
- Spossessamento | Il fallito perde l’amministrazione dei beni.
- Niente azioni individuali
- Interessi sospesi per i chirografari
# Revocatorie
- Atti anormali: un anno | Conoscenza dell’insolvenza presunta.
- Atti normali: sei mesi | Il curatore prova la conoscenza.
- Ordinaria: cinque anni
- Atti esenti
# Organi e fasi
- Tribunale, giudice delegato, curatore, comitato
- Stato passivo
- Liquidazione e riparto
- Chiusura e riapertura
# Fallimento delle società (art. 147)
- Falliscono i soci illimitati
- Anche usciti da meno di un anno e occulti`,

  d7: `Concordati e Codice della crisi
# Concordato preventivo
- Presupposto: crisi
- Il debitore resta alla guida
- Classi di creditori
- Liquidatorio: almeno il 20%
# Procedura
- Ammissione | Controllo di legittimità del tribunale.
- Atti straordinari autorizzati
- Voto a maggioranza dei crediti
- Cram down | Omologazione nonostante le opposizioni.
# Concordato fallimentare
- Chiude il fallimento
- Silenzio-assenso
# Accordi e piani
- Accordi di ristrutturazione | 60% dei crediti, estranei pagati in 120 giorni.
- Agevolati (30%) ed estesi
- Piano attestato
# Codice della crisi
- Liquidazione giudiziale | Sostituisce il fallimento.
- Composizione negoziata
- Esdebitazione
- Sovraindebitamento | Concordato minore e liquidazione controllata.`,

  d8: `Società di persone
# Contratto di società (art. 2247)
- Conferimenti
- Attività economica in comune
- Divisione degli utili
# Tipi (art. 2249)
- Società semplice | Non può svolgere attività commerciale.
- Società in nome collettivo
- Società in accomandita semplice
# Autonomia patrimoniale
- Perfetta nelle società di capitali
- Imperfetta nelle società di persone | Beneficio di escussione (artt. 2268 e 2304).
# S.n.c.
- Tutti illimitatamente responsabili
- Amministrazione disgiuntiva
- Modifiche all’unanimità
# Uscita del socio
- Morte
- Recesso | Tre mesi di preavviso.
- Esclusione | A maggioranza per teste, efficace dopo 30 giorni.
- Liquidazione della quota | Entro sei mesi.
# S.a.s.
- Accomandatari | Illimitatamente responsabili e amministratori.
- Accomandanti | Rispondono nei limiti della quota.
- Divieto di immistione (art. 2320)`,

  d9: `S.p.a.: nascita, capitale, azioni
# Il tipo
- Risponde solo la società
- Socio unico | Responsabile illimitato se mancano versamenti o pubblicità.
# Costituzione
- Atto pubblico
- 25% del capitale versato
- Iscrizione | Nasce la persona giuridica.
- Nullità tassative (art. 2332)
# Conferimenti
- Stima giurata dei beni in natura
- Niente opera e servizi
- Acquisti pericolosi (art. 2343-bis)
# Azioni
- Un’azione, un voto
- Senza voto fino a metà del capitale
- Voto plurimo fino a 10 voti
- Limiti alla circolazione
# Operazioni sul capitale
- Diritto di opzione
- Perdite oltre 1/3 (art. 2446)
- Sotto il minimo legale (art. 2447)
- Recesso (art. 2437)
# Finanziamento
- Obbligazioni | Fino al doppio di capitale e riserve (art. 2412).
- Obbligazioni convertibili
- Strumenti finanziari partecipativi
- Patti parasociali | Durata massima cinque anni.`,

  d10: `S.p.a.: organi e bilancio
# Assemblea
- Ordinaria | Bilancio, nomine, compensi, responsabilità.
- Straordinaria | Modifiche dello statuto e liquidatori.
- Quorum | Ordinaria in 1ª: metà del capitale. Straordinaria in 1ª: oltre metà del capitale.
# Invalidità delle delibere
- Annullabilità | 90 giorni, soci con il 5%.
- Nullità | Convocazione, verbale, oggetto: tre anni.
# Amministratori
- Durata massima tre esercizi
- Revoca libera, con risarcimento
- Cooptazione (art. 2386)
- Delega e materie riservate
# Responsabilità
- Azione sociale | Anche dalla minoranza: 1/5 (1/40 nelle quotate).
- Azione dei creditori
- Azione individuale
# Controlli
- Collegio sindacale | 3 o 5 membri effettivi.
- Revisore legale
- Denuncia al tribunale (art. 2409) | Soci con 1/10 del capitale.
# Bilancio
- Chiarezza, verità, correttezza
- Riserva legale | 5% dell’utile fino a 1/5 del capitale.`,

  d11: `S.r.l., s.a.p.a., liquidazione
# Costituzione
- Capitale 10.000 € | Anche da 1 €, con regole particolari.
- S.r.l. semplificata | Solo persone fisiche.
# Partecipazioni
- Quote, non azioni
- Diritti particolari dei soci
- Conferimento d’opera ammesso
# Uscita del socio
- Recesso | Preavviso di 180 giorni.
- Esclusione | Solo se prevista dall’atto costitutivo.
# Decisioni e amministrazione
- Metà del capitale per decidere
- Assemblea per le modifiche
- Ogni socio può agire in responsabilità
# Controllo
- Organo di controllo sopra le soglie | 4 milioni di attivo, 4 di ricavi, 20 dipendenti.
# S.a.p.a.
- Accomandatari amministratori di diritto
# Scioglimento e liquidazione
- Cause (art. 2484)
- Liquidatori
- Bilancio finale e cancellazione
- Creditori verso i soci | Nei limiti di quanto ricevuto nel riparto.`,

  d12: `Gruppi, cooperative, operazioni straordinarie
# Controllo (art. 2359)
- Di diritto
- Di fatto
- Contrattuale
- Collegamento | Influenza notevole: 1/5 dei voti.
# Direzione e coordinamento
- Presunta per chi controlla
- Pubblicità e motivazione
- Responsabilità della capogruppo (art. 2497) | Salvo vantaggi compensativi.
# Cooperative
- Scopo mutualistico
- Capitale variabile
- Voto capitario
- Riserva del 30% e ristorni
- Mutualità prevalente | Dividendi limitati, riserve indivisibili.
# Trasformazione
- Continuità dei rapporti (art. 2498)
- Progressiva | Consenso presunto dei creditori dopo 60 giorni.
- Regressiva | Consenso dei soci che diventano illimitati.
# Fusione
- Progetto e relazione degli esperti
- Opposizione dei creditori in 60 giorni
- Atto pubblico
- Niente invalidità dopo l’iscrizione
# Scissione
- Beneficiarie solidali | Nei limiti del netto ricevuto.`,
};

function parse(src: string): ConceptMap {
  const lines = src.split('\n').map((l) => l.trim()).filter(Boolean);
  const map: ConceptMap = { center: lines[0], branches: [] };
  for (const l of lines.slice(1)) {
    if (l.startsWith('# ')) map.branches.push({ label: l.slice(2), leaves: [] });
    else if (l.startsWith('- ')) {
      const [label, detail] = l.slice(2).split(' | ');
      map.branches[map.branches.length - 1].leaves.push({ label, detail });
    }
  }
  return map;
}

export const MAPS: Record<string, ConceptMap> = Object.fromEntries(Object.entries(SRC).map(([k, v]) => [k, parse(v)]));
