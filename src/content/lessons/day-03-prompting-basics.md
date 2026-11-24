---
id: "L003"
day: 3
week: 1
module: "w01-foundations"
title: "Prompting basics: brief AI like a smart new hire"
slug: "prompting-basics"
whyItMatters: "The gap between a generic AI answer and a useful one is usually the prompt. Five minutes of technique saves hours every week."
summary: "A good prompt gives context, a clear task, the format you want and an example. Then you refine the answer in conversation."
minutes: 5
level: "foundation"
tags: ["prompting", "basics"]
roleExamples:
  sales: "\"You are helping me prepare for a renewal call with a mid-size logistics client worried about price. Here are my notes: [...] List their 3 likely objections and a one-line response to each.\""
  marketing: "\"Our audience is CFOs at manufacturing firms. Rewrite this product paragraph for them in under 80 words, plain English, ending with one clear call to action. Here is an example of the tone we like: [...]\""
  gm: "\"Here is last quarter's ops review. Summarise it for the leadership team as a table: issue, impact, owner, decision needed.\""
  general: "Start with who it's for and why, say exactly what you want back, and show an example if you have one."
practice:
  task: "Pick a writing task you do every week (a status update, a follow-up email, a summary). First write a one-line prompt and run it. Then rewrite the prompt using the four parts: context, task, format, example. Run it again and compare."
  minutes: 15
  output: "A saved \"before and after\" prompt pair, with the improved version ready to reuse next week."
links:
  - title: "Google Workspace with Gemini: Prompt Guide"
    url: "https://workspace.google.com/learning/content/gemini-prompt-guide"
    type: "doc"
    source: "Google"
    free: true
    lastChecked: "2026-11-24"
  - title: "Prompt engineering overview"
    url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
  - title: "Learn Prompting: introduction"
    url: "https://learnprompting.org/docs/introduction"
    type: "course"
    source: "Learn Prompting"
    free: true
    lastChecked: "2026-11-24"
  - title: "Prompt engineering guide"
    url: "https://platform.openai.com/docs/guides/prompt-engineering"
    type: "doc"
    source: "OpenAI"
    free: true
    lastChecked: "2026-11-24"
video:
  youtubeId: "jC4v5AS4RIM"
  title: "Master the Perfect ChatGPT Prompt Formula"
  source: "Jeff Su on YouTube (works with any assistant)"
  minutes: 8
diagram:
  src: "day-03-prompt-parts"
  alt: "The four parts of a strong prompt in order: context, task, format and example, followed by a fifth step: iterate on the draft."
checklist:
  - "Rewrite one of your regular prompts using context, task, format and example."
  - "Reply to a first AI draft with at least two short refinements before you use it."
  - "Save your best prompt of the week somewhere you can find it again."
aiPrompts:
  explain: "Explain the four parts of a strong prompt (context, task, format, example) and why iterating matters, for a busy executive. Show one weak prompt and the same prompt rewritten with all four parts. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me what task I do most often each week. Then help me write a reusable prompt for it using context, task, format and example. Ask one question at a time, then give me the final prompt with [BLANKS] for the parts that change."
quiz:
  - q: "What's the best mental model for writing a prompt?"
    options:
      - "Typing keywords into a search engine"
      - "Briefing a capable new hire who knows nothing about your business"
      - "Writing computer code"
    answer: 1
    explain: "The AI is capable but has no context about your customer, company or standards. A clear brief gets a useful result."
  - q: "Which of these is NOT one of the four parts of a strong prompt?"
    options:
      - "Context"
      - "Format"
      - "Flattery"
      - "Example"
    answer: 2
    explain: "The four parts are context, task, format and example. Politeness is fine but doesn't replace a clear brief."
  - q: "The first answer is close but too long and too formal. What should you do?"
    options:
      - "Start a new chat and hope for better"
      - "Reply with a short instruction like \"Shorter and warmer\" and refine"
      - "Give up: the tool isn't good enough"
    answer: 1
    explain: "Treat the first answer as a draft and iterate in conversation, just as you'd give a colleague feedback."
flashcards:
  - front: "Context"
    back: "Who it's for, what's going on, and any material the AI needs. Paste it in."
  - front: "Task"
    back: "Exactly what you want, with a clear verb: summarise, draft, compare, list, critique."
  - front: "Format"
    back: "Length, structure and tone, e.g. \"5 bullets\", \"a table\", \"under 100 words, warm but direct\"."
  - front: "Example"
    back: "A sample of what good looks like. Showing beats describing."
  - front: "Iterate"
    back: "Refine the first draft with short follow-ups: \"Shorter.\" \"More confident.\" \"Give me two options.\""
---

## The idea

A **prompt** is the instruction you give an AI. The best mental model: you are briefing a very capable new hire who knows nothing about your company, your customer or what "good" looks like for you.

Vague brief, generic result. Clear brief, useful result.

## Why it matters

- Most disappointing AI answers come from one-line prompts, not weak tools.
- A good prompt cuts editing time from twenty minutes to two.
- Good prompts can be **saved and shared**, so one person's skill becomes the whole team's.

## How it works

Use four parts. You don't need all four every time, but the more that's at stake, the more you include.

1. **Context:** who it's for, what's going on, and any material it needs (paste it in).
2. **Task:** exactly what you want done, with a clear verb: *summarise, draft, compare, list, critique*.
3. **Format:** length, structure and tone, for example *"5 bullets", "a table", "under 100 words, warm but direct"*.
4. **Example:** a sample of what good looks like. Nothing beats showing.

Then **iterate**. Treat the first answer as a draft and reply as you would to a colleague: *"Shorter." "More confident." "Add a line on pricing." "Give me two alternatives."*

## Real-world example

A sales leader asks: *"Write a follow-up email to a client."* The result is bland and generic, and goes unused.

The same leader tries again:

> *"Context: I met Priya, Head of Procurement at a 500-person logistics firm. She liked our delivery tracking but worried about the 12-month contract. Task: draft a follow-up email. Format: under 120 words, friendly and confident, one clear next step (a 20-minute call next week). Example of my tone: 'Great speaking today. Here's the one thing I'd want you to take away…'"*

The second email needs one small edit and goes out in two minutes. Same tool, better brief.
