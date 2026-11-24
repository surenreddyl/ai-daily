---
id: "L008"
day: 8
week: 2
module: "w02-prompting"
title: "Ask for structure: tables, frameworks and one-page briefs"
slug: "ask-for-structure"
whyItMatters: "Leaders decide from structured information. Asking AI for a table or a one-page brief turns hours of reading into minutes of deciding."
summary: "Name the structure you want (table, framework, brief), define exactly what goes in each part, and AI turns messy input into decision-ready output."
minutes: 5
level: "foundation"
tags: ["prompting", "structure", "decisions"]
roleExamples:
  sales: "\"From these call notes, make a table: stakeholder, role, what they care about, concerns, next step.\""
  marketing: "\"Compare these three agency proposals in a table: cost, timeline, strengths, risks, questions to ask. Then recommend one in two sentences.\""
  gm: "\"Turn this 20-page project update into a one-page brief: status (red/amber/green), top three risks, decisions needed from me, by when.\""
  general: "Don't ask for \"a summary\". Ask for the exact shape of summary you'd want on your desk."
practice:
  task: "Take something messy from your week, such as meeting notes, an email thread or a long report. Ask an approved assistant: \"Turn this into a one-page brief with these sections: Bottom line (2 sentences), Key facts (5 bullets), Risks (table: risk, impact, owner), Decisions needed (with deadlines).\" Check it against the source."
  minutes: 15
  output: "A one-page brief from real material, in a structure you can reuse every week."
links:
  - title: "2017 Letter to Shareholders"
    url: "https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders"
    type: "case"
    source: "Jeff Bezos, Amazon"
    free: true
    lastChecked: "2026-11-24"
  - title: "Prompting best practices"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
  - title: "Prompt engineering guide"
    url: "https://platform.openai.com/docs/guides/prompt-engineering"
    type: "doc"
    source: "OpenAI"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-08-structure"
  alt: "Four steps: start with messy input, name the structure you want, define the columns or sections, and get ready-to-use output."
checklist:
  - "Turn one messy input into a table with columns you chose."
  - "Create your own one-page brief template and save it."
  - "Ask for \"bottom line first\" in at least two prompts this week."
quiz:
  - q: "Which prompt is most likely to give you decision-ready output?"
    options:
      - "\"Summarise these notes.\""
      - "\"Make a table of these notes with columns: issue, impact, owner, decision needed.\""
      - "\"Tell me what you think about these notes.\""
    answer: 1
    explain: "Naming the structure and its columns tells the AI exactly what to extract, so you can scan and decide."
  - q: "What does \"bottom line first\" mean in a brief?"
    options:
      - "Put the conclusion or recommendation at the top, before the detail"
      - "Put the financial figures at the bottom"
      - "Keep it to one line"
    answer: 0
    explain: "Busy readers get the answer first and read on only if they need the supporting detail."
  - q: "What's the point of Amazon's six-page narrative memos, as Jeff Bezos describes them?"
    options:
      - "To save printing costs"
      - "To replace meetings entirely"
      - "To force clear, structured thinking before a decision meeting"
    answer: 2
    explain: "Bezos argues that writing a well-structured memo forces clarity. AI can produce a fast first draft of that structure."
flashcards:
  - front: "Name the structure"
    back: "Tell the AI the exact shape you want: table, pros and cons, 2x2, one-page brief."
  - front: "Define the parts"
    back: "List the columns or sections and what each must contain."
  - front: "Bottom line first"
    back: "Recommendation or conclusion at the top; detail underneath."
  - front: "Reusable template"
    back: "A structure you paste into prompts every week, e.g. your standard one-page brief."
---

## The idea

When you ask AI to "summarise", you get whatever shape it chooses. When you ask for a **specific structure** (a table with named columns, a framework, a one-page brief with set sections) you get output you can scan, compare and act on.

## Why it matters

- **Decisions need comparison.** Tables put options side by side; prose hides the differences.
- **Structure exposes gaps.** An empty "owner" column or a missing risk is obvious in a table and invisible in a paragraph.
- **Consistency saves time.** If every project update arrives in the same one-page shape, you can read ten in the time one used to take.

## How it works

1. **Start with the messy input.** Notes, transcripts, email threads, reports. Paste them in (Day 6).
2. **Name the structure.** "A table", "pros and cons", "a 2x2 of effort versus impact", "a one-page brief".
3. **Define every part.** Columns for a table, sections for a brief, plus rules: "max five bullets", "bottom line first", "flag anything uncertain with (?)".
4. **Check and reuse.** Scan against the source, then save the structure as a template you paste into future prompts.

Useful structures to try: **comparison table**, **pros/cons/risks**, **SWOT**, **RACI** (who's responsible, accountable, consulted, informed), **timeline**, and the **one-page brief**.

## Real-world example

**Amazon** is famous for replacing slide decks with six-page narrative memos in senior meetings. In his 2017 letter to shareholders, Jeff Bezos explains that great memos take real effort, often a week or more, because the structure forces the author to think clearly.

AI doesn't replace that thinking, but it changes the starting point. A leader can now turn a pile of notes into a well-structured first draft in minutes, then spend their time on the judgement: checking, sharpening and deciding.

**The lesson for leaders:** define the structures you want to receive, share them with your team, and let AI do the first pass.
