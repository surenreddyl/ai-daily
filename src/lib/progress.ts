import { load, update } from './storage';
import { daysBetween, todayISO } from './dates';

/** Records the learner's start date on first use and returns it. */
export function ensureStarted(): string {
  const state = load();
  if (state.startDate) return state.startDate;
  const today = todayISO();
  update((s) => {
    s.startDate = today;
  });
  return today;
}

/** Personal schedule: Day 1 on the first visit, then one new day per calendar day. */
export function currentDay(startDate: string, today: string = todayISO()): number {
  return Math.max(1, daysBetween(startDate, today) + 1);
}

export function isDone(slug: string): boolean {
  return Boolean(load().done[slug]);
}

export function setDone(slug: string, done: boolean): void {
  update((s) => {
    if (done) s.done[slug] = todayISO();
    else delete s.done[slug];
  });
}

export function doneCount(): number {
  return Object.keys(load().done).length;
}

export interface Streaks {
  current: number;
  best: number;
}

/**
 * A streak is consecutive calendar days with at least one lesson marked done.
 * The current streak stays alive until the end of the day after the last one,
 * so it doesn't show 0 in the morning before today's lesson.
 */
export function streaks(doneDates: string[], today: string = todayISO()): Streaks {
  const days = [...new Set(doneDates)].sort();
  if (days.length === 0) return { current: 0, best: 0 };

  let best = 1;
  let run = 1;
  for (let i = 1; i < days.length; i++) {
    run = daysBetween(days[i - 1], days[i]) === 1 ? run + 1 : 1;
    best = Math.max(best, run);
  }

  const last = days[days.length - 1];
  const gap = daysBetween(last, today);
  const current = gap <= 1 ? run : 0;
  return { current, best: Math.max(best, current) };
}

export function currentStreaks(): Streaks {
  return streaks(Object.values(load().done));
}

export function saveQuizResult(slug: string, score: number, total: number): void {
  update((s) => {
    s.quiz[slug] = { score, total, date: todayISO() };
  });
}

export function checkedItems(slug: string): number[] {
  const items = load().checklist[slug];
  return Array.isArray(items) ? items.filter((n) => Number.isInteger(n)) : [];
}

export function toggleChecklistItem(slug: string, index: number): void {
  update((s) => {
    const current = new Set(Array.isArray(s.checklist[slug]) ? s.checklist[slug] : []);
    if (current.has(index)) current.delete(index);
    else current.add(index);
    s.checklist[slug] = [...current].sort((a, b) => a - b);
  });
}

/** Average quiz score across lessons, as a whole percentage, or null if none taken. */
export function quizAverage(): number | null {
  const results = Object.values(load().quiz).filter((r) => r.total > 0);
  if (results.length === 0) return null;
  const avg = results.reduce((sum, r) => sum + r.score / r.total, 0) / results.length;
  return Math.round(avg * 100);
}
