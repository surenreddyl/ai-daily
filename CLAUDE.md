# AI Daily — Project Memory

## Vision
A free, browser-hosted learning tool. Each day the user opens it and learns ONE key AI item
via a crisp 1-page lesson with links to explore, practice, and real applications.
Includes a Library of all items, profile-based personalization, streaks, and rich media.
Shareable with others. No logins, no backend, no running cost. Later: installable app.

## Owner & users
- Owner: non-developer business executive (VP, sales & marketing). Reviews every phase.
- Learners: business leaders (sales, marketing, GM, ops), busy, mobile-first, 10–15 min/day.

## Working rules (MUST follow)
1. Plan first. For any change touching >1 file, present a numbered plan and wait for "approved".
2. Build ONLY the current phase. List any out-of-scope idea under "Parking lot"; do not build it.
3. After each task: run `npm run check` and `npm run build`; fix failures before reporting.
4. Report in plain business language: What changed / Why / How to test it in the browser
   (exact URL + clicks) / Risks or trade-offs / Suggested commit message. No unexplained jargon.
5. Stop at the end of each phase for review. Never start the next phase unprompted.
6. Never commit secrets or API keys. Never put an owner API key in client code.
7. Ask one clarifying question when requirements are ambiguous rather than guessing.
8. Prefer boring, well-documented solutions and few dependencies. Justify any new package.

## Tech stack
- Astro (current stable), static output, TypeScript. Content collections with Zod schemas.
- Interactive islands: Preact (onboarding, quiz, flashcards, checklist, AI panel).
- Styling: plain CSS with design tokens (CSS custom properties) in src/styles/tokens.css.
- Storage: localStorage via ONE module src/lib/storage.ts (versioned key "aidaily:v1").
- Diagrams: Mermaid, lazy-loaded only on pages that use it; or static SVG in /public/diagrams.
- Video: YouTube via privacy-enhanced, click-to-load facade (store videoId, not iframe HTML).
- PWA: web manifest + service worker (offline shell + visited lessons).
- Hosting: GitHub Pages via GitHub Actions. Keep output portable to Cloudflare Pages.

## Folder structure
src/content/lessons/      day-01-what-is-genai.md ... (one file per lesson)
src/content/modules/      modules.json (12 weekly modules)
src/content.config.ts     Zod schemas (single source of truth for lesson format)
src/components/           UI components (.astro) + islands/ (Preact)
src/lib/                  storage.ts, progress.ts, personalize.ts, prompts.ts, dates.ts
src/pages/                index (Today), library, lesson/[slug], profile, about
src/styles/               tokens.css, global.css
public/                   images/, diagrams/, icons/, manifest.webmanifest
scripts/                  check-links.mjs
docs/                     DECISIONS.md (one line per key decision), CONTENT-GUIDE.md

## Lesson schema (frontmatter) — see src/content.config.ts
id, day (1–60), week, module, title, slug, whyItMatters (≤160 chars), summary,
minutes, level (foundation|practitioner|builder), tags[],
roleExamples {sales, marketing, gm, general},
practice {task, minutes, output}, links[{title, url, type: doc|course|video|tool|case,
source, free: bool, lastChecked: YYYY-MM-DD}], youtubeId?, image?, diagram?,
quiz[{q, options[], answer, explain}], flashcards[{front, back}], checklist[],
aiPrompts {explain, applyToRole}
Body: Markdown 1-pager: The idea → Why it matters → How it works (diagram) →
Real-world example → Try it today → Go deeper.

## Design guidelines
- Calm, premium, executive feel. Generous whitespace, one accent color, max ~70ch line length.
- Mobile-first; tap targets ≥44px; works at 360px wide.
- WCAG 2.2 AA: contrast ≥4.5:1, visible focus, keyboard-operable, alt text, reduced-motion support.
- Lesson must be readable in ≤5 minutes; practice ≤15 minutes.

## Commands
npm run dev | npm run check | npm run build | npm run preview | npm run links
