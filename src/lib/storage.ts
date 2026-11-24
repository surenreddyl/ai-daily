// The ONLY module that touches localStorage. Everything is saved on the
// learner's own device under one versioned key; nothing is sent anywhere.

const KEY = 'aidaily:v1';

/** Fired on `window` whenever saved data changes, so every widget can refresh. */
export const CHANGE_EVENT = 'aidaily:change';

export type Role = 'sales' | 'marketing' | 'gm' | 'other';

export interface Profile {
  role: Role | null;
  name: string;
  /** True once the learner has finished or skipped the welcome questions. */
  onboarded: boolean;
}

export interface QuizResult {
  score: number;
  total: number;
  date: string;
}

export interface AppState {
  version: 1;
  /** Local date (YYYY-MM-DD) of the learner's first visit; drives "today's lesson". */
  startDate: string | null;
  /** Lesson slug -> local date it was marked done. */
  done: Record<string, string>;
  profile: Profile;
  /** Lesson slug -> latest quiz result. */
  quiz: Record<string, QuizResult>;
  /** Lesson slug -> indexes of ticked "apply it this week" items. */
  checklist: Record<string, number[]>;
}

const ROLES: Role[] = ['sales', 'marketing', 'gm', 'other'];

function empty(): AppState {
  return {
    version: 1,
    startDate: null,
    done: {},
    profile: { role: null, name: '', onboarded: false },
    quiz: {},
    checklist: {},
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || parsed.version !== 1) return empty();
    const base = empty();
    const profile = isRecord(parsed.profile) ? parsed.profile : {};
    return {
      version: 1,
      startDate: typeof parsed.startDate === 'string' ? parsed.startDate : null,
      done: isRecord(parsed.done) ? ({ ...parsed.done } as Record<string, string>) : base.done,
      profile: {
        role: ROLES.includes(profile.role as Role) ? (profile.role as Role) : null,
        name: typeof profile.name === 'string' ? profile.name.slice(0, 40) : '',
        onboarded: profile.onboarded === true,
      },
      quiz: isRecord(parsed.quiz) ? ({ ...parsed.quiz } as Record<string, QuizResult>) : base.quiz,
      checklist: isRecord(parsed.checklist)
        ? ({ ...parsed.checklist } as Record<string, number[]>)
        : base.checklist,
    };
  } catch {
    // Private browsing, blocked storage or corrupted data: start fresh.
    return empty();
  }
}

export function save(state: AppState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable: the site still works, progress just isn't remembered.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function update(change: (state: AppState) => void): AppState {
  const state = load();
  change(state);
  save(state);
  return state;
}

/** Deletes everything this site has saved on the device. */
export function clearAll(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Nothing to clear.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Runs `callback` now and whenever saved data changes (including from another tab). */
export function onChange(callback: () => void): void {
  callback();
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener('storage', (e) => {
    if (e.key === KEY || e.key === null) callback();
  });
}
