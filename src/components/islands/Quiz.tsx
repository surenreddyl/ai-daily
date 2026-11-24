import { useEffect, useRef, useState } from 'preact/hooks';
import { ensureStarted, isDone, saveQuizResult, setDone } from '../../lib/progress';
import { load, onChange } from '../../lib/storage';

interface Question {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

interface Props {
  slug: string;
  questions: Question[];
}

/** Quick check: one tap per question, instant feedback, score saved on the device. */
export default function Quiz({ slug, questions }: Props) {
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const [previous, setPrevious] = useState<string | null>(null);
  const [done, setDoneState] = useState(false);

  useEffect(() => {
    onChange(() => {
      const r = load().quiz[slug];
      setPrevious(r ? `${r.score} of ${r.total}` : null);
      setDoneState(isDone(slug));
    });
  }, [slug]);

  const answered = picked.filter((p) => p !== null).length;
  const score = picked.filter((p, i) => p === questions[i].answer).length;
  const finished = answered === questions.length;

  // Save the score once, when the last question of an attempt is answered.
  const savedAttempt = useRef(false);
  useEffect(() => {
    if (finished && !savedAttempt.current) {
      savedAttempt.current = true;
      saveQuizResult(slug, score, questions.length);
    }
  }, [finished, score, slug, questions.length]);

  function choose(qi: number, oi: number) {
    setPicked((current) => {
      if (current[qi] !== null) return current;
      const next = current.slice();
      next[qi] = oi;
      return next;
    });
  }

  function retry() {
    savedAttempt.current = false;
    setPicked(questions.map(() => null));
  }

  return (
    <div class="quiz">
      {previous && !finished && <p class="quiz__previous">Your last score: {previous}</p>}
      <ol class="quiz__list">
        {questions.map((question, qi) => {
          const choice = picked[qi];
          const locked = choice !== null;
          const correct = choice === question.answer;
          return (
            <li class="quiz__item" key={qi}>
              <fieldset>
                <legend class="quiz__question">{question.q}</legend>
                <div class="quiz__options">
                  {question.options.map((option, oi) => {
                    let state = '';
                    if (locked && oi === question.answer) state = 'is-correct';
                    else if (locked && oi === choice) state = 'is-wrong';
                    return (
                      <button
                        type="button"
                        key={oi}
                        class={`quiz__option ${state}`}
                        aria-pressed={choice === oi}
                        aria-disabled={locked}
                        onClick={() => choose(qi, oi)}
                      >
                        <span class="quiz__mark" aria-hidden="true">
                          {state === 'is-correct' ? '✓' : state === 'is-wrong' ? '✕' : ''}
                        </span>
                        <span class="quiz__text">{option}</span>
                      </button>
                    );
                  })}
                </div>
                <p class="quiz__feedback" aria-live="polite">
                  {locked && (
                    <>
                      <strong>{correct ? 'Correct.' : 'Not quite.'}</strong> {question.explain}
                    </>
                  )}
                </p>
              </fieldset>
            </li>
          );
        })}
      </ol>

      {finished && (
        <div class="quiz__result" role="status">
          <p class="quiz__score">
            You scored {score} of {questions.length}.{' '}
            {score === questions.length ? 'Excellent.' : 'Review the explanations above, then try again anytime.'}
          </p>
          <div class="quiz__actions">
            {!done && (
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  ensureStarted();
                  setDone(slug, true);
                }}
              >
                Mark lesson as done
              </button>
            )}
            <button type="button" class="btn btn-secondary" onClick={retry}>
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
