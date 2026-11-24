import { useEffect, useRef, useState } from 'preact/hooks';
import { clearAll, load, onChange, update, type Role } from '../../lib/storage';
import { currentStreaks, doneCount, quizAverage } from '../../lib/progress';
import { ROLE_OPTIONS } from '../../lib/personalize';

interface Stats {
  done: number;
  current: number;
  best: number;
  quiz: number | null;
}

function readStats(): Stats {
  const { current, best } = currentStreaks();
  return { done: doneCount(), current, best, quiz: quizAverage() };
}

export default function Profile({ todayUrl }: { todayUrl: string }) {
  const [role, setRole] = useState<Role | null>(null);
  const [name, setName] = useState('');
  const [stats, setStats] = useState<Stats>({ done: 0, current: 0, best: 0, quiz: null });
  const [saved, setSaved] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const p = load().profile;
    setRole(p.role);
    setName(p.name);
    onChange(() => setStats(readStats()));
  }, []);

  useEffect(() => {
    if (confirming) cancelRef.current?.focus();
  }, [confirming]);

  const days = (n: number) => `${n} day${n === 1 ? '' : 's'}`;

  return (
    <div>
      <h2 class="visually-hidden">Your progress</h2>
      <dl class="stats">
        <div class="stat">
          <dt>Lessons done</dt>
          <dd>{stats.done}</dd>
        </div>
        <div class="stat">
          <dt>Current streak</dt>
          <dd>{days(stats.current)}</dd>
        </div>
        <div class="stat">
          <dt>Best streak</dt>
          <dd>{days(stats.best)}</dd>
        </div>
        <div class="stat">
          <dt>Quiz average</dt>
          <dd>{stats.quiz === null ? '–' : `${stats.quiz}%`}</dd>
        </div>
      </dl>

      <section class="profile-section" aria-labelledby="about-you">
        <h2 id="about-you">About you</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            update((s) => {
              s.profile.role = role;
              s.profile.name = name.trim().slice(0, 40);
              s.profile.onboarded = true;
            });
            setSaved(true);
          }}
          onInput={() => setSaved(false)}
        >
          <fieldset>
            <legend>Your role</legend>
            <div class="choice-grid">
              {ROLE_OPTIONS.map((opt) => (
                <label class={`choice ${role === opt.value ? 'is-selected' : ''}`} key={opt.value}>
                  <input
                    type="radio"
                    name="role"
                    value={opt.value}
                    checked={role === opt.value}
                    onChange={() => {
                      setRole(opt.value);
                      setSaved(false);
                    }}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label class="field" style={{ marginTop: 'var(--space-5)' }}>
            <span class="field__label">
              First name <span class="field__hint">(optional)</span>
            </span>
            <input
              type="text"
              class="field__input"
              autocomplete="given-name"
              maxLength={40}
              value={name}
              onInput={(e) => setName((e.target as HTMLInputElement).value)}
            />
          </label>
          <button type="submit" class="btn btn-primary">
            Save changes
          </button>
          <p class="saved-note" role="status">
            {saved ? '✓ Saved' : ''}
          </p>
        </form>
      </section>

      <section class="profile-section" aria-labelledby="reset-heading">
        <h2 id="reset-heading">Start over</h2>
        <div class="danger-zone">
          {!confirming ? (
            <>
              <p>Clears your role, name, streaks, quiz scores and completed lessons on this device.</p>
              <button type="button" class="btn btn-secondary" onClick={() => setConfirming(true)}>
                Reset my progress
              </button>
            </>
          ) : (
            <div role="alertdialog" aria-labelledby="confirm-text">
              <p id="confirm-text">
                <strong>Are you sure?</strong> This permanently deletes your progress on this device and can't be
                undone.
              </p>
              <div class="onboarding__actions">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    clearAll();
                    window.location.href = todayUrl;
                  }}
                >
                  Yes, reset everything
                </button>
                <button type="button" class="btn btn-secondary" ref={cancelRef} onClick={() => setConfirming(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
