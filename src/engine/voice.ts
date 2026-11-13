// Voce: lettura ad alta voce (sintesi del telefono) e dettatura (riconoscimento vocale del telefono).
import { useEffect, useRef, useState } from 'react';

export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window;

let itVoice: SpeechSynthesisVoice | null = null;
function pickVoice() {
  if (!canSpeak) return;
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('it'));
  // preferisce le voci di qualità migliore quando ci sono
  itVoice = vs.find((v) => /premium|enhanced|alice|federica|luca/i.test(v.name)) ?? vs[0] ?? null;
}
if (canSpeak) {
  pickVoice();
  speechSynthesis.addEventListener?.('voiceschanged', pickVoice);
}

/** Legge un testo in italiano. */
export function speak(text: string, on?: { start?: () => void; end?: () => void }) {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'it-IT';
  if (itVoice) u.voice = itVoice;
  u.rate = 1;
  u.onstart = () => on?.start?.();
  u.onend = () => on?.end?.();
  u.onerror = () => on?.end?.();
  speechSynthesis.speak(u);
}

export function stopSpeaking() {
  if (canSpeak) speechSynthesis.cancel();
}

type Rec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: any) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: any) => void) | null;
};
const RecCtor: (new () => Rec) | undefined =
  typeof window !== 'undefined' ? ((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition) : undefined;

export const canDictate = !!RecCtor;

/** Dettatura: aggiunge al testo le frasi riconosciute. */
export function useDictation(onFinal: (t: string) => void) {
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState('');
  const [error, setError] = useState('');
  const rec = useRef<Rec | null>(null);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  useEffect(() => () => rec.current?.abort(), []);

  const start = () => {
    if (!RecCtor || listening) return;
    stopSpeaking();
    const r = new RecCtor();
    r.lang = 'it-IT';
    r.continuous = true;
    r.interimResults = true;
    r.onresult = (e: any) => {
      let tmp = '';
      for (let k = e.resultIndex; k < e.results.length; k++) {
        const res = e.results[k];
        if (res.isFinal) cb.current(res[0].transcript.trim());
        else tmp += res[0].transcript;
      }
      setInterim(tmp);
    };
    r.onerror = (e: any) => {
      if (e?.error === 'not-allowed' || e?.error === 'service-not-allowed') setError('Consenti l’uso del microfono per rispondere a voce.');
    };
    r.onend = () => {
      setListening(false);
      setInterim('');
    };
    rec.current = r;
    setError('');
    try {
      r.start();
      setListening(true);
    } catch {
      setListening(false);
    }
  };
  const stop = () => rec.current?.stop();
  return { listening, interim, error, start, stop };
}
