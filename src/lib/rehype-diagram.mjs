// Places a lesson's diagram (public/diagrams/<src>.svg) at the end of its
// "How it works" section. The SVG is inlined so it follows the site's colours
// in light and dark mode. Lessons without a `diagram` field are untouched.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Resolved from this file's location, so it works whatever folder the build starts in.
const DIAGRAMS_DIR = new URL('../../public/diagrams/', import.meta.url);

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default function rehypeDiagram() {
  return (tree, file) => {
    const diagram = file.data?.astro?.frontmatter?.diagram;
    if (!diagram?.src) return;

    let svg;
    try {
      svg = readFileSync(fileURLToPath(new URL(`${diagram.src}.svg`, DIAGRAMS_DIR)), 'utf8');
    } catch {
      throw new Error(`Diagram file not found: public/diagrams/${diagram.src}.svg`);
    }
    svg = svg
      .replace(/<\?xml[^>]*>\s*/, '')
      .replace('<svg', `<svg role="img" aria-label="${escapeHtml(diagram.alt ?? '')}" focusable="false"`);

    const nodes = tree.children;
    const start = nodes.findIndex(
      (n) => n.type === 'element' && n.tagName === 'h2' && /how it works/i.test(textOf(n)),
    );
    if (start === -1) {
      throw new Error(`Lesson has a diagram but no "## How it works" heading (${diagram.src})`);
    }
    let end = nodes.findIndex((n, i) => i > start && n.type === 'element' && n.tagName === 'h2');
    if (end === -1) end = nodes.length;

    const caption = diagram.caption ? `<figcaption>${escapeHtml(diagram.caption)}</figcaption>` : '';
    nodes.splice(end, 0, { type: 'raw', value: `<figure class="diagram">${svg}${caption}</figure>` });
  };
}
