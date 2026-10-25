// Corso attivo (Economia o Matematica), salvato nello stato.
import { getState, useStore } from '../engine/store';
import { courseById, type Course } from './index';

export function useCourse(): Course {
  const id = useStore((s) => s.course);
  return courseById(id);
}

export const currentCourse = (): Course => courseById(getState().course);
