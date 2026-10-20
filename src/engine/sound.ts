// Suoni generati con Web Audio API: nessun file esterno.
import { getState } from './store';

let ctx: AudioContext | null = null;

function ac() {
  if (!ctx) {
    const C = window.AudioContext || (window as any).webkitAudioContext;
    if (!C) return null;
    ctx = new C();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 0.18) {
  const a = ac();
  if (!a) return;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.value = freq;
  const t = a.currentTime + start;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export const sfx = {
  correct() {
    if (!getState().sound) return;
    tone(660, 0, 0.14, 'triangle');
    tone(990, 0.09, 0.22, 'triangle');
  },
  wrong() {
    if (!getState().sound) return;
    tone(220, 0, 0.18, 'square', 0.08);
    tone(170, 0.12, 0.26, 'square', 0.08);
  },
  tap() {
    if (!getState().sound) return;
    tone(520, 0, 0.05, 'sine', 0.08);
  },
  complete() {
    if (!getState().sound) return;
    [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.11, 0.3, 'triangle', 0.16));
  },
  flip() {
    if (!getState().sound) return;
    tone(400, 0, 0.06, 'sine', 0.06);
    tone(600, 0.04, 0.06, 'sine', 0.06);
  },
};
