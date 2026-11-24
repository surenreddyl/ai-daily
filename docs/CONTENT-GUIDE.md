# How to write an AI Daily lesson

## Content status

| Week | Module | Days | Status |
|---|---|---|---|
| 1 | Foundations of generative AI | 1–5 | ✅ Live |
| 2 | Prompting for business results | 6–10 | ✅ Live |
| 3 | AI for sales | 11–15 | ✅ Live (Phase 6) |
| 4 | AI for marketing | 16–20 | ✅ Live (Phase 6) |
| 5 | AI for analysis and decisions | 21–25 | ✅ Written (Phase 7) |
| 6 | Everyday productivity with AI assistants | 26–30 | ✅ Written (Phase 7) |
| 7–12 | Agents, risk, tools, use cases, adoption, what's next | 31–60 | Planned |

Productivity lessons cover Microsoft 365 and Google Workspace equally, with ChatGPT and Claude as the fallback (Phase 7 default).

Examples should mix B2B and B2C (owner's choice, Phase 6).

Each lesson is one file in `src/content/lessons/`, named `day-NN-short-name.md`
(for example `day-04-ai-for-email.md`). Copy an existing lesson and change it. That's the easiest way.

If a field is missing or too long, `npm run build` stops and names the file and the field.

## The top block (between the `---` lines)

| Field | What to write | Rules |
|---|---|---|
| `id` | `L` + three digits | `L004` for Day 4 |
| `day` / `week` | Day 1–60, week 1–12 | 5 lessons per week |
| `module` | The week's module id | See `src/content/modules/modules.json` |
| `title` | Plain, specific headline | Up to 80 characters |
| `slug` | The web address name | lowercase-and-dashes, unique |
| `whyItMatters` | One sentence for a busy leader | Up to 160 characters |
| `summary` | Two sentences: what it is | Up to 300 characters |
| `minutes` | Reading time | Up to 10 (aim for 5) |
| `level` | `foundation`, `practitioner` or `builder` | |
| `tags` | A few topic words | At least one |
| `roleExamples` | One line each: `sales`, `marketing`, `gm`, `general` | Concrete, not generic |
| `practice` | `task`, `minutes` (up to 15), `output` | Doable with a free tool |
| `links` | At least 2: `title`, `url`, `type`, `source`, `free`, `lastChecked` | `type` is doc, course, video, tool or case |
| `quiz` | 3–5 questions: `q`, `options`, `answer`, `explain` | `answer` counts from 0 (0 = first option) |
| `flashcards` | 3–6 cards: `front` (the term), `back` (the meaning) | Front up to 60 chars, back up to 200 |
| `checklist` | 3–5 small actions for "Apply it this week" | Each up to 140 characters, doable within a week |
| `aiPrompts` | `explain` and `applyToRole` prompts for the Ask AI panel | 80–900 characters; `applyToRole` must contain `{role}` |
| `video` (optional) | `youtubeId`, `title`, `source`, `minutes` | `youtubeId` = the 11 characters after `v=` in the link |
| `diagram` (optional) | `src`, `alt`, `caption` | `src` = file name in `public/diagrams` without `.svg`; `alt` describes it in words |

Put dates in quotes: `lastChecked: "2026-11-24"`.

## The body (below the top block)

Four sections, in this order:

1. `## The idea`: what it is, in plain words.
2. `## Why it matters`: why a business leader should care.
3. `## How it works`: 3–5 numbered steps.
4. `## Real-world example`: a real company or a realistic scenario, with the lesson for leaders.
   If it's a made-up scenario, start with *An illustrative scenario.* so readers never mistake it for a real case.

If the lesson has a `diagram`, it appears automatically at the end of the "How it works" section.

Don't add "Try it today" or "Go deeper" sections. The page builds those from `practice` and `links`.

## Writing good quiz questions

- Test the **one idea that matters**, not trivia or numbers from the example.
- Use 3 options (4 at most). Wrong options should be tempting misconceptions, not jokes.
- Vary which option is correct, so it isn't always the first one.
- The `explain` line teaches. Say *why*, in one sentence (up to 240 characters).
- Prefer "what should you do" scenarios over definitions.

## Writing flashcards

- One term or idea per card. The front is the term; the back is a plain-English meaning a busy leader can repeat.
- Reuse the lesson's own words, so the cards reinforce the reading.

## Choosing a video

- Only add one when it genuinely helps: a clear explainer, ideally under 20 minutes, from a reputable creator.
- Avoid videos that are mostly about one product version; they date fast.
- Check that the video plays, and note its length in `minutes`.

## Writing the checklist

- 3–4 small, concrete actions a busy leader can do within a week.
- Start each with a verb: "Run…", "Save…", "Ask…".

## Writing the Ask AI prompts

The Ask AI panel has four prompts. You write two; the other two ("Quiz me", "Challenge me") are built automatically from the title and summary.

- **`explain`**: ask the AI to re-explain today's idea for "a busy executive", with one analogy or example, under 200 words, ending with a check question.
- **`applyToRole`**: start with "I'm a {role}." and ask for something concrete and doable this week (3 ideas, a template, a table). `{role}` becomes "sales leader", "marketing leader", "general manager or operations leader" or "business leader".
- Never include names, companies or anything personal. The prompt is visible to the learner and goes to their own assistant.
- Prefer prompts where the AI asks the learner a question first. It makes the practice interactive.
- Use plain quotes inside prompts (`'like this'`), because the whole prompt is already in double quotes.

## Diagrams

- Diagrams are simple SVG drawings in `public/diagrams/`. They use the site's colour classes (`dg-box`, `dg-accent`, `dg-text`, `dg-sub`, `dg-line`, `dg-head`), so they work in light and dark mode. Copy an existing one to start.
- Keep them narrow (400 wide) with short labels, so they stay readable on a phone.
- After editing a diagram file locally, also save its lesson file (or delete the `.astro` folder) so the preview picks up the change.

## Style

- Write for a smart, busy executive. No jargon without a one-line explanation.
- Short paragraphs, bold the one phrase that matters most.
- Keep the whole lesson readable in 5 minutes (about 450–600 words).
- Facts and figures must come from a source in `links`.
- Run `npm run links` before publishing to catch broken links.
