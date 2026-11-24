# Decisions

One line per key decision. Newest at the bottom.

- 2026-11-24 · Phase 1 scope: Today, Lesson and Library pages, 3 sample lessons, "Mark as done". Everything else is parked for later phases.
- 2026-11-24 · "Today's lesson" uses a personal start: Day 1 on a learner's first visit, then one day per calendar day. Owner can switch to a shared calendar later.
- 2026-11-24 · If a learner is ahead of the published lessons, Today shows the latest lesson with an "all caught up" note.
- 2026-11-24 · Progress (start date and done lessons) stays in the browser under one key, `aidaily:v1`. No accounts, nothing sent anywhere.
- 2026-11-24 · Phase 1 adds only two packages: `astro` (the site builder) and `@astrojs/check` (the error check). No Preact until a phase needs interactive widgets.
- 2026-11-24 · Lesson body holds the idea, why it matters, how it works and the example. "Try it today" and "Go deeper" are rendered from the `practice` and `links` fields so they're never written twice.
- 2026-11-24 · Quiz, flashcards, checklist, AI prompts, video, image and diagram fields are optional for now and become required in the phase that uses them.
- 2026-11-24 · Fonts are the device's own system fonts: fast and free, with no third-party requests.
- 2026-11-24 · Added `src/lib/paths.ts` so links work both locally and under the GitHub Pages sub-path.
- 2026-11-24 · Phase 2 scope: welcome questions, greeting, role-first examples, streaks, quiz, flashcards, Profile page. Going live is deferred until the owner has a GitHub account.
- 2026-11-24 · Added `preact` + `@astrojs/preact` for the interactive widgets, as the project memory specifies. Measured cost: about 9 KB compressed for Preact and its helpers, loaded only on pages with widgets.
- 2026-11-24 · Welcome asks only role and an optional first name, with Skip. "Other" role features the "Everyone" example.
- 2026-11-24 · Streak = consecutive calendar days with at least one lesson marked done. It stays alive until the end of the next day, so it never shows 0 before today's lesson.
- 2026-11-24 · Quiz (3–5 questions) and flashcards (3–6 cards) are now required on every lesson. The build fails if a quiz answer doesn't match an option.
- 2026-11-24 · Saved data keeps the same key `aidaily:v1` with new fields (profile, quiz scores). Older saved data loads safely with defaults.
- 2026-11-24 · Reset needs a second confirmation tap and clears only this site's data on this device.
- 2026-11-24 · Phase 3 scope: click-to-play video, diagrams, "Apply it this week" checklist, Days 1–3 upgraded, Days 4–10 written. No new packages.
- 2026-11-24 · Video facade shows a branded placeholder, not YouTube's thumbnail, so nothing is requested from Google until the learner taps play. Uses youtube-nocookie.com.
- 2026-11-24 · `youtubeId` became a `video` object (id, title, source, minutes), so the placeholder can show a title without contacting YouTube.
- 2026-11-24 · Diagrams are hand-drawn SVGs inlined at build time (a small rehype step) so they follow light/dark colours. Chosen over Mermaid: no library, no layout shift, works offline.
- 2026-11-24 · `diagram` became an object (src, alt, caption). Alt text is required.
- 2026-11-24 · Checklist (3–5 items) is required on every lesson. Ticks are saved per lesson on the device.
- 2026-11-24 · Every statistic in a lesson was checked against its source page. Made-up scenarios are labelled "An illustrative scenario".
