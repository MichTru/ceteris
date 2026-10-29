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

export const CHAPTERS: Record<string, Chapter> = Object.fromEntries(
  [u1, u2, u3, u4, u5, u6, u7, m1, m2, m3, m4, m5, m6, m7].map((c) => [c.unit, c]),
);
