---
id: "L016"
day: 16
week: 4
module: "w04-marketing"
title: "Customer research and personas from real customer voices"
slug: "customer-research-personas"
whyItMatters: "Personas built on guesswork lead to messages nobody responds to. AI can find the real patterns in what customers say, but it can't replace talking to them."
summary: "Feed AI real customer words (reviews, tickets, call notes, surveys), ask for themes with quotes and frequency, draft personas from them, then confirm with real customers."
minutes: 5
level: "practitioner"
tags: ["marketing", "research", "personas", "voice-of-customer"]
roleExamples:
  sales: "Paste notes from your last 20 lost deals and ask for the top five reasons, with quotes, to share with marketing and product."
  marketing: "Upload 300 product reviews and ask for the main buying reasons, frustrations and the exact phrases customers use, then use those phrases in your copy."
  gm: "Analyse a quarter's support tickets by theme and frequency to decide which customer problems deserve investment first."
  general: "For a consumer brand, compare reviews of your product and two competitors to see what customers praise and complain about in each."
practice:
  task: "Collect 30–100 real customer comments: reviews, survey answers, support tickets or call notes (remove names and personal details). Paste them into an approved assistant and ask: \"Find the 5 most common themes. For each, give how many comments mention it and 2 direct quotes. Then list the exact phrases customers use to describe their problem.\" Spot-check three quotes."
  minutes: 15
  output: "Five evidence-backed customer themes with quotes and counts, plus a list of customers' own words for your messaging."
links:
  - title: "Synthetic Users: If, When, and How to Use AI-Generated 'Research'"
    url: "https://www.nngroup.com/articles/synthetic-users/"
    type: "doc"
    source: "Nielsen Norman Group"
    free: true
    lastChecked: "2026-11-24"
  - title: "Personas Make Users Memorable"
    url: "https://www.nngroup.com/articles/persona/"
    type: "doc"
    source: "Nielsen Norman Group"
    free: true
    lastChecked: "2026-11-24"
  - title: "Google's notebook tool for working from your own sources"
    url: "https://notebooklm.google/"
    type: "tool"
    source: "Google"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-16-voice-of-customer"
  alt: "Four steps: collect real customer words, have AI find themes with quotes and counts, draft personas from those themes, then check them with real customers."
checklist:
  - "Gather 30 or more real customer comments and ask AI for themes with quotes."
  - "Add three of your customers' exact phrases to your next piece of copy."
  - "Book two short customer conversations to test one finding."
aiPrompts:
  explain: "Explain, for a busy marketing leader, how to use AI to analyse real customer feedback into themes and personas, and why AI-generated 'synthetic users' can't replace talking to real customers. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me what customer feedback I have access to (reviews, tickets, surveys, call notes). Then give me a step-by-step plan and the exact prompts to turn it into 5 evidence-backed themes and one draft persona, plus 5 questions to test it with real customers."
quiz:
  - q: "What's the best input for AI-assisted customer research?"
    options:
      - "Real customer words: reviews, tickets, surveys, call notes"
      - "The AI's general knowledge of what customers usually want"
      - "Your team's assumptions about customers"
    answer: 0
    explain: "Real words reveal real patterns, and the exact language customers use. AI is great at sorting them at scale."
  - q: "According to Nielsen Norman Group, what's the main problem with AI-generated 'synthetic users'?"
    options:
      - "They're too expensive"
      - "They can't produce text"
      - "They give shallow or overly favourable feedback and can't replace real users"
    answer: 2
    explain: "NN/g found synthetic users can complement research but tend to please and miss the depth of real human behaviour."
  - q: "Why ask AI to count how many comments mention each theme?"
    options:
      - "It makes the report longer"
      - "It separates big patterns from memorable one-offs"
      - "AI can't find themes without counting"
    answer: 1
    explain: "A vivid quote can feel important even if only one customer said it. Counts keep priorities honest."
flashcards:
  - front: "Voice of the customer"
    back: "Customers' own words about needs, frustrations and reasons to buy: reviews, tickets, surveys, calls."
  - front: "Themes with evidence"
    back: "Each pattern backed by a count and direct quotes, so you can trust and check it."
  - front: "Persona"
    back: "A short profile of a typical customer: goals, pains, triggers and objections, based on research."
  - front: "Synthetic users"
    back: "AI pretending to be customers. Useful for ideas, never a replacement for real ones."
---

## The idea

Most companies are sitting on a goldmine of customer insight they never read: hundreds of reviews, support tickets, survey comments and call notes. Reading them all used to take weeks.

AI can **sort real customer words into themes**, count how often each comes up, and pull out the **exact phrases** customers use. That's the raw material for personas and messaging that actually resonate.

## Why it matters

- **Messages land when they use customers' words.** "Saves me chasing invoices" beats "streamlined accounts receivable".
- **Priorities get evidence.** Counts show which problems are common and which are just memorable.
- **It's fast enough to repeat.** You can refresh insight every quarter, not every few years.

## How it works

1. **Collect real customer words.** Reviews, support tickets, survey answers, sales call notes, lost-deal reasons. Remove names and personal details first.
2. **Ask for themes with evidence.** "Find the five most common themes. For each, give a count and two direct quotes."
3. **Draft personas from the themes.** Goals, pains, buying triggers, objections and the words they use, for B2B buyers and consumers alike.
4. **Check with real customers.** Five short conversations will tell you whether the persona rings true.

**Beware "synthetic users".** Some tools let AI pretend to be your customers. Nielsen Norman Group tested this and found synthetic users tend to give shallow, overly favourable feedback. Their conclusion: user research needs real users. Use AI to **analyse** real voices, not to invent them.

## Real-world example

**Nielsen Norman Group**, a leading user-experience research firm, compared AI-generated "synthetic users" with findings from three studies they had run with real people. Some answers sounded plausible. But the AI participants were overly positive and missed the frustrations and messy behaviour that real users showed. In one case, a study cited by NN/g found ChatGPT far outperformed real people on a navigation test, which made it useless as a stand-in.

**The lesson for leaders:** AI is a superb research **assistant**, reading and sorting thousands of real comments in minutes. It is not a research **subject**. Keep real customers in the loop.
