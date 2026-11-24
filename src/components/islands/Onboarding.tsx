import { useEffect, useRef, useState } from 'preact/hooks';
import { load, onChange, update, type Role } from '../../lib/storage';
import { ROLE_OPTIONS } from '../../lib/personalize';

/** First-visit welcome: two optional questions, shown once. */
export default function Onboarding() {
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [name, setName] = useState('');
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    onChange(() => setVisible(!load().profile.onboarded));
  }, []);

  useEffect(() => {
    if (visible) headingRef.current?.focus();
  }, [visible]);

  if (!visible) return null;

  function finish(saveAnswers: boolean) {
    update((s) => {
      if (saveAnswers) {
        s.profile.role = role;
        s.profile.name = name.trim().slice(0, 40);
      }
      s.profile.onboarded = true;
    });
  }

  return (
    <section class="card onboarding" aria-labelledby="welcome-heading">
      <p class="eyebrow">Welcome to AI Daily</p>
      <h2 id="welcome-heading" tabIndex={-1} ref={headingRef}>
        Two quick questions to tailor your lessons
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          finish(true);
        }}
      >
        <fieldset class="onboarding__roles">
          <legend>What's your role?</legend>
          <div class="choice-grid">
            {ROLE_OPTIONS.map((opt) => (
              <label class={`choice ${role === opt.value ? 'is-selected' : ''}`} key={opt.value}>
                <input
                  type="radio"
                  name="role"
                  value={opt.value}
                  checked={role === opt.value}
                  onChange={() => setRole(opt.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label class="field">
          <span class="field__label">
            What should we call you? <span class="field__hint">(optional)</span>
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

        <p class="onboarding__privacy">Saved on this device only. You can change it anytime in Profile.</p>

        <div class="onboarding__actions">
          <button type="submit" class="btn btn-primary">
            Start learning
          </button>
          <button type="button" class="btn btn-link" onClick={() => finish(false)}>
            Skip
          </button>
        </div>
      </form>
    </section>
  );
}
