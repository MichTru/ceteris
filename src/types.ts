// Tipi condivisi per contenuti, esercizi e progressi.

export type SceneId =
  | 'domanda-offerta'
  | 'surplus'
  | 'monopolio'
  | 'costi-bp'
  | 'engel'
  | 'prodotto'
  | 'elasticita-lineare'
  | 'cournot'
  | 'smiling'
  | 'conc-perfetta-lp'
  | 'conc-monopolistica'
  | 'ricavi-costi-totali'
  | 'cmlp';

export interface Theory {
  title: string;
  points: string[];
  example?: string;
  tip?: string;
}

interface ExBase {
  id: string;
  /** Argomento breve, usato nelle statistiche e nei punti deboli. */
  topic: string;
  /** Spiegazione mostrata dopo la risposta. */
  explain: string;
  /** Correzione di un errore presente negli appunti. */
  profNote?: string;
}

export interface MCEx extends ExBase {
  type: 'mc';
  q: string;
  options: string[];
  answer: number;
  /** Caso pratico in stile esame: viene mostrato con un riquadro scenario. */
  scenario?: string;
  figure?: SceneId;
}

export interface TFEx extends ExBase {
  type: 'tf';
  q: string;
  answer: boolean;
}

export interface FillEx extends ExBase {
  type: 'fill';
  /** Testo con ___ al posto delle parole mancanti. */
  text: string;
  /** Parole corrette, nell'ordine dei buchi. */
  answers: string[];
  /** Parole extra (distrattori). */
  extra: string[];
}

export interface MatchEx extends ExBase {
  type: 'match';
  q: string;
  pairs: [string, string][];
}

export interface OrderEx extends ExBase {
  type: 'order';
  q: string;
  /** Elementi nell'ordine corretto. */
  items: string[];
}

export interface NumEx extends ExBase {
  type: 'num';
  q: string;
  answer: number;
  /** Tolleranza assoluta. */
  tol: number;
  unit?: string;
  hint?: string;
  /** Come mostrare la risposta corretta (es. "5/16"). */
  shown?: string;
}

export interface HotspotEx extends ExBase {
  type: 'hotspot';
  q: string;
  scene: SceneId;
  answer: string;
}

export type Dir = 'left' | 'right';
export interface ShiftEx extends ExBase {
  type: 'shift';
  q: string;
  /** Spostamenti corretti; se una curva non è elencata deve restare ferma. */
  moves: { D?: Dir; O?: Dir };
}

export type Exercise = MCEx | TFEx | FillEx | MatchEx | OrderEx | NumEx | HotspotEx | ShiftEx;

export interface OpenQ {
  id: string;
  q: string;
  answer: string;
  keywords: string[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Lesson {
  id: string;
  title: string;
  icon: string;
  theory: Theory[];
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  n: number;
  title: string;
  subtitle: string;
  color: string;
  colorDark: string;
  lessons: Lesson[];
  open: OpenQ[];
  cards: Flashcard[];
}

export interface Formula {
  id: string;
  name: string;
  expr: string;
  symbols: string[];
  example: string;
  unit: number;
}
