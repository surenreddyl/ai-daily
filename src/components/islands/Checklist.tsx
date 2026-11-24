import { useEffect, useState } from 'preact/hooks';
import { onChange } from '../../lib/storage';
import { checkedItems, toggleChecklistItem } from '../../lib/progress';

/** "Apply it this week" actions; ticks are saved on the device. */
export default function Checklist({ slug, items }: { slug: string; items: string[] }) {
  const [checked, setChecked] = useState<number[]>([]);

  useEffect(() => {
    onChange(() => setChecked(checkedItems(slug)));
  }, [slug]);

  const count = items.filter((_, i) => checked.includes(i)).length;

  return (
    <div class="checklist">
      <ul class="checklist__list">
        {items.map((item, i) => (
          <li key={i}>
            <label class={`checklist__item ${checked.includes(i) ? 'is-checked' : ''}`}>
              <input type="checkbox" checked={checked.includes(i)} onChange={() => toggleChecklistItem(slug, i)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <p class="checklist__count" aria-live="polite">
        {count === items.length ? '✓ All done. Nice work.' : `${count} of ${items.length} done`}
      </p>
    </div>
  );
}
