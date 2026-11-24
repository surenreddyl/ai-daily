// Date helpers that use the learner's LOCAL calendar day (not UTC),
// so "today" flips at the learner's midnight.

export function todayISO(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function toUTCDay(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d) / 86_400_000;
}

/** Whole calendar days from `fromISO` to `toISO` (negative if `toISO` is earlier). */
export function daysBetween(fromISO: string, toISO: string): number {
  return Math.round(toUTCDay(toISO) - toUTCDay(fromISO));
}
