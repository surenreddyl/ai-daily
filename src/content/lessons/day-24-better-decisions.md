---
id: "L024"
day: 24
week: 5
module: "w05-analysis"
title: "Better decisions: criteria, trade-offs and checking for bias"
slug: "better-decisions"
whyItMatters: "Smart people still make biased decisions. AI can't decide for you, but it can make you set criteria, compare options fairly and question your favourite."
summary: "Set criteria before looking at options, score options on the same criteria, ask AI to check for bias and missing evidence, and run a premortem before you commit."
minutes: 5
level: "practitioner"
tags: ["decisions", "bias", "strategy"]
roleExamples:
  sales: "Choosing which three accounts get extra investment: set criteria first (potential, fit, relationship), then ask AI to score each and challenge your instinct."
  marketing: "Picking an agency: define weighted criteria before the pitches, then ask AI to compare proposals and point out where you might be swayed by a great presentation."
  gm: "Deciding whether to open a new location: list criteria, score options, then ask AI what evidence would make you change your mind."
  general: "For a consumer product decision, compare three suppliers on cost, quality, reliability and ethics, scored the same way."
practice:
  task: "Pick a real decision you're facing (anonymise if needed). Ask an approved assistant: \"Help me decide well. First, ask me what matters, and turn it into 4–6 weighted criteria. Then score my options against them in a table. Then tell me which biases might be affecting my preference, what evidence would change the answer, and run a quick premortem on the leading option.\""
  minutes: 15
  output: "A scored decision table, a bias check and a premortem for a real decision."
links:
  - title: "The Big Idea: Before You Make That Big Decision…"
    url: "https://hbr.org/2011/06/the-big-idea-before-you-make-that-big-decision"
    type: "doc"
    source: "Kahneman, Lovallo and Sibony, Harvard Business Review"
    free: false
    lastChecked: "2026-11-24"
  - title: "Confirmation bias"
    url: "https://en.wikipedia.org/wiki/Confirmation_bias"
    type: "doc"
    source: "Wikipedia"
    free: true
    lastChecked: "2026-11-24"
  - title: "Performing a Project Premortem"
    url: "https://hbr.org/2007/09/performing-a-project-premortem"
    type: "doc"
    source: "Gary Klein, Harvard Business Review"
    free: false
    lastChecked: "2026-11-24"
diagram:
  src: "day-24-decision-check"
  alt: "Four steps: set criteria first, score every option on the same criteria, check for bias by asking what evidence would change your mind, then run a premortem and decide."
checklist:
  - "Write decision criteria before looking at options for your next big choice."
  - "Ask AI: \"What evidence would change this decision?\""
  - "Run a quick premortem before committing to one important decision."
aiPrompts:
  explain: "Explain, for a busy executive, how to make better decisions with AI's help: setting criteria first, scoring options consistently, common biases such as confirmation bias, and the premortem. Make clear that AI supports judgement rather than replacing it. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me about a decision I'm facing. Then help me set 4–6 weighted criteria, score my options in a table, name 2 biases that might affect me, ask what evidence would change my mind, and run a short premortem on my favourite option."
quiz:
  - q: "Why set decision criteria before looking at the options?"
    options:
      - "So the criteria aren't bent to favour an option you already like"
      - "Because AI requires it"
      - "To make the decision take longer"
    answer: 0
    explain: "Once you like an option, it's easy to pick criteria that justify it. Criteria first keeps the comparison fair."
  - q: "What is confirmation bias?"
    options:
      - "Confirming meetings in advance"
      - "The tendency to favour information that supports what you already believe"
      - "Asking AI to confirm your answer"
    answer: 1
    explain: "As Kahneman, Lovallo and Sibony note, confirmation bias leads people to ignore evidence that contradicts their preconceived notions."
  - q: "According to Kahneman, Lovallo and Sibony, what has awareness of biases done for business decisions?"
    options:
      - "Eliminated bias in most companies"
      - "Made decisions slower but perfect"
      - "Done little to improve their quality, so practical checks are needed"
    answer: 2
    explain: "Knowing about biases isn't enough. Building checks into how decisions are made is what helps."
flashcards:
  - front: "Criteria first"
    back: "Decide what matters, and how much, before comparing options."
  - front: "Decision table"
    back: "Options scored against the same weighted criteria, side by side."
  - front: "Confirmation bias"
    back: "Favouring evidence that supports what you already believe."
  - front: "\"What would change our mind?\""
    back: "A powerful question that exposes weak evidence and hidden assumptions."
---

## The idea

Even experienced leaders fall for their favourite option, then find reasons to justify it. AI can't make the decision for you, but it can act as a **structured, unbiased sparring partner**: helping you set criteria, compare options fairly and question your instinct before you commit.

## Why it matters

- **Big decisions are expensive to reverse.** A bit of structure up front prevents costly mistakes.
- **Knowing about bias isn't enough.** In a well-known Harvard Business Review article, Nobel laureate Daniel Kahneman and co-authors Dan Lovallo and Olivier Sibony observe that awareness of biases has done little to improve the quality of business decisions. Practical checks are needed.
- **Fairer comparisons.** Scoring every option on the same criteria stops the best-presented option from winning by default.

## How it works

1. **Set criteria first.** Before looking closely at options, decide what matters and how much: cost, risk, speed, fit with strategy, customer impact. AI can help by asking you questions.
2. **Score the options.** Ask AI to build a table scoring every option against the same weighted criteria, with reasons.
3. **Check for bias.** Ask: "Which biases might be affecting my preference? What evidence would change this answer? What's missing?" **Confirmation bias** (favouring evidence that supports what you already believe) is the most common trap.
4. **Run a premortem, then decide.** "Assume we chose this and it failed a year from now. Why?" (Day 9). Fix the top risks, then commit.

AI's role is to sharpen your thinking, not replace your judgement or accountability.

## Real-world example

*An illustrative scenario.* A marketing director must choose between three agencies. One gave a dazzling pitch, and she's leaning towards it. Before deciding, she sets weighted criteria with AI: relevant experience, team quality, cost, and results on similar briefs.

Scored side by side, the dazzling agency ranks second: strong on creativity, weak on results evidence. Asked "what evidence would change your mind?", she requests case-study results from the top two. The quieter agency's numbers are clearly better, and she chooses it with confidence, and a clear rationale for her CEO.

**The lesson for leaders:** for any decision that's hard to reverse, insist on criteria first and one question: "What would change our mind?"
