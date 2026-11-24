import { useState } from 'preact/hooks';

interface Card {
  front: string;
  back: string;
}

/** One card at a time: tap to flip, then move to the next. */
export default function Flashcards({ cards }: { cards: Card[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + cards.length) % cards.length);
    setFlipped(false);
  }

  return (
    <div class="flashcards">
      <button
        type="button"
        class={`flashcard ${flipped ? 'is-flipped' : ''}`}
        aria-pressed={flipped}
        aria-label={flipped ? `Answer: ${card.back}. Tap to see the term.` : `${card.front}. Tap to reveal the answer.`}
        onClick={() => setFlipped((f) => !f)}
      >
        <span class="flashcard__inner">
          <span class="flashcard__face flashcard__front" aria-hidden="true">
            <span class="flashcard__label">Term</span>
            <span class="flashcard__text">{card.front}</span>
            <span class="flashcard__hint">Tap to flip</span>
          </span>
          <span class="flashcard__face flashcard__back" aria-hidden="true">
            <span class="flashcard__label">Meaning</span>
            <span class="flashcard__text">{card.back}</span>
          </span>
        </span>
      </button>
      <div class="flashcards__nav">
        <button type="button" class="btn btn-secondary" onClick={() => go(-1)} aria-label="Previous card">
          ←
        </button>
        <span class="flashcards__count" aria-live="polite">
          Card {index + 1} of {cards.length}
        </span>
        <button type="button" class="btn btn-secondary" onClick={() => go(1)} aria-label="Next card">
          →
        </button>
      </div>
    </div>
  );
}
