---
id: "L021"
day: 21
week: 5
module: "w05-analysis"
title: "From spreadsheet to insight: asking AI to analyse your data"
slug: "spreadsheet-to-insight"
whyItMatters: "Most leaders wait days for analysis they could get in minutes. AI can read a spreadsheet, run the numbers and explain them, if you ask the right question."
summary: "Start with a business question, upload clean data without personal details, ask AI to show its working, and check key numbers before you act."
minutes: 5
level: "practitioner"
tags: ["analysis", "data", "spreadsheets"]
roleExamples:
  sales: "Upload last quarter's sales by rep and region and ask: \"Where did we grow and shrink most compared with last year, and which customers drove it?\""
  marketing: "Upload campaign results and ask which audiences and channels gave the lowest cost per customer, with the numbers shown."
  gm: "Upload monthly operating costs and ask which three cost lines grew fastest, and whether volume explains it."
  general: "For a consumer business, upload weekly sales by store and ask which stores are slowing and what they have in common."
practice:
  task: "Pick a real business question and a spreadsheet that could answer it (remove customer names and personal data). Upload it to an approved assistant with data analysis: ChatGPT, Claude, Copilot in Excel or Gemini in Google Sheets. Ask: \"[Your question]. Show the numbers and the steps you took. List any assumptions or data problems you noticed.\" Check two numbers yourself."
  minutes: 15
  output: "An answer to a real business question, with the numbers behind it checked."
links:
  - title: "Get started with Copilot in Excel"
    url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel"
    type: "doc"
    source: "Microsoft Support"
    free: true
    lastChecked: "2026-11-24"
  - title: "Collaborate with Gemini in Google Sheets"
    url: "https://support.google.com/docs/answer/14356410?hl=en"
    type: "doc"
    source: "Google Docs Editors Help"
    free: true
    lastChecked: "2026-11-24"
  - title: "Data analysis with ChatGPT"
    url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt"
    type: "doc"
    source: "OpenAI Help Center"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-21-analysis-loop"
  alt: "Four steps: start with a business question, upload clean and safe data, ask for the answer with the working shown, then check key numbers before deciding."
checklist:
  - "Answer one real business question with AI and a spreadsheet this week."
  - "Ask AI to list any data problems or assumptions it noticed."
  - "Spot-check two numbers before sharing any AI analysis."
aiPrompts:
  explain: "Explain, for a busy executive, how AI data analysis works when you upload a spreadsheet: what it does well, what can go wrong (messy data, misread columns, wrong filters), and how to check the result. Keep it under 200 words."
  applyToRole: "I'm a {role}. Suggest 5 business questions I could answer this month by uploading a spreadsheet to an AI assistant. For each, list the columns I'd need, the exact prompt to use, and one thing to check in the answer."
quiz:
  - q: "What's the best way to start an AI data analysis?"
    options:
      - "Upload the data and ask \"What's interesting?\""
      - "With a specific business question the data can answer"
      - "Ask for as many charts as possible"
    answer: 1
    explain: "A clear question gets a focused, useful answer. \"What's interesting?\" gets a tour of the obvious."
  - q: "Why ask AI to list assumptions and data problems?"
    options:
      - "It surfaces issues like missing months or duplicate rows that could skew the answer"
      - "It makes the analysis longer"
      - "AI won't calculate anything otherwise"
    answer: 0
    explain: "Messy data produces confident but wrong answers. Asking for problems up front helps you judge reliability."
  - q: "What should you remove before uploading a sales spreadsheet to an AI tool your company hasn't approved?"
    options:
      - "Nothing; numbers are never sensitive"
      - "The column headings"
      - "Customer names and any personal or confidential details"
    answer: 2
    explain: "Follow your Day 5 traffic light: anonymise or use an approved tool for sensitive data."
flashcards:
  - front: "Business question first"
    back: "Start with what you need to decide, then use data to answer it."
  - front: "Show the working"
    back: "Ask AI for numbers, steps and assumptions so you can check its answer."
  - front: "Messy data"
    back: "Gaps, duplicates and inconsistent labels that can quietly distort results."
  - front: "Spot-check"
    back: "Verify two key numbers yourself before acting on or sharing an analysis."
---

## The idea

You no longer need to wait for an analyst to answer every question about your numbers. AI assistants with **data analysis** (in ChatGPT and Claude, Copilot in Excel, and Gemini in Google Sheets) can read a spreadsheet, run calculations and explain what they found in plain English.

The skill isn't technical. It's asking a **clear business question** and **checking the answer**.

## Why it matters

- **Decisions get faster.** Questions that took days of back-and-forth can be answered in a meeting.
- **Leaders get closer to the data.** You can explore follow-up questions yourself: "And what about just the north region?"
- **Analysts get freed up** for the deeper, harder questions.

## How it works

1. **Start with a business question.** "Which regions are slowing, and why?" beats "Analyse this."
2. **Upload clean, safe data.** Remove customer names and personal details unless your tool is approved for them (Day 5). Tidy headings help.
3. **Ask, and ask for the working.** "Show the numbers and the steps you took. List any assumptions or data problems." Good tools show the calculations they ran.
4. **Check, then decide.** Spot-check two numbers against the spreadsheet. Ask follow-ups. Then act.

**Which tool?** Use what your company provides: Copilot in Excel for Microsoft 365, Gemini in Google Sheets for Google Workspace, or ChatGPT or Claude with file upload. The approach is the same in all of them.

## Real-world example

*An illustrative scenario.* The operations head of a 40-store consumer electronics chain asks why same-store sales fell 4% last quarter. She uploads weekly sales by store, with no customer data, and asks AI to find which stores declined most and what they have in common.

In minutes it shows that most of the decline came from nine stores, seven of them near a new competitor. It also flags that two stores have missing weeks, which she gets corrected. A question that used to take a week of analyst time is answered before lunch.

**The lesson for leaders:** ask the question yourself, ask AI to show its working, and check before you decide.
