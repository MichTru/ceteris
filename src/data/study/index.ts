import type { Chapter } from '../../types';
import u1 from './u1';
import u2 from './u2';
import u3 from './u3';
import u4 from './u4';
import u5 from './u5';
import u6 from './u6';
import u7 from './u7';
import m1 from './m1';
import m2 from './m2';
import m3 from './m3';
import m4 from './m4';
import m5 from './m5';
import m6 from './m6';
import m7 from './m7';
import d1 from './d1';
import d2 from './d2';
import d3 from './d3';
import d4 from './d4';
import d5 from './d5';
import d6 from './d6';
import d7 from './d7';
import d8 from './d8';
import d9 from './d9';
import d10 from './d10';
import d11 from './d11';
import d12 from './d12';

export const CHAPTERS: Record<string, Chapter> = Object.fromEntries(
  [u1, u2, u3, u4, u5, u6, u7, m1, m2, m3, m4, m5, m6, m7, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12].map((c) => [c.unit, c]),
);
