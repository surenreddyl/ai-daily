---
id: "L005"
day: 5
week: 1
module: "w01-foundations"
title: "Using AI safely at work: three rules that cover most risks"
slug: "using-ai-safely"
whyItMatters: "One careless paste or unchecked fact can create a legal, customer or reputation problem. Three simple habits prevent nearly all of it."
summary: "Protect data, verify what you use, and stay accountable. These three habits let you use AI confidently without creating avoidable risk."
minutes: 5
level: "foundation"
tags: ["risk", "privacy", "governance"]
roleExamples:
  sales: "Replace client names and deal values with placeholders before asking an unapproved tool to improve a proposal."
  marketing: "Check every statistic, quote and claim in AI-drafted copy against its original source before publishing."
  gm: "Publish a one-page team guide: approved tools, what never to paste, and who reviews AI output before it goes external."
  general: "If you wouldn't post it on a public website, don't paste it into an AI tool your company hasn't approved."
practice:
  task: "Write your personal \"AI traffic light\" for your role. Green: information that is fine to use with AI. Amber: information to anonymise first. Red: information that must never go into an AI tool. List three examples in each colour, then check them against your company's policy."
  minutes: 10
  output: "A three-colour list of your own work information that you can follow without thinking."
links:
  - title: "Samsung bans generative AI tools after internal data leak"
    url: "https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/"
    type: "case"
    source: "TechCrunch"
    free: true
    lastChecked: "2026-11-24"
  - title: "Mata v. Avianca: lawyers sanctioned over invented cases"
    url: "https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc."
    type: "case"
    source: "Wikipedia"
    free: true
    lastChecked: "2026-11-24"
  - title: "Airline held liable for its chatbot's bad advice"
    url: "https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know"
    type: "case"
    source: "BBC"
    free: true
    lastChecked: "2026-11-24"
  - title: "Data controls in ChatGPT"
    url: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt"
    type: "doc"
    source: "OpenAI Help Center"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "Read your company's AI policy, or ask who owns it if you can't find one."
  - "Write your green, amber and red list and keep it where you work."
  - "Before sending anything AI-drafted this week, check every name, number and claim."
aiPrompts:
  explain: "Explain the three habits for using AI safely at work (protect data, verify output, own the result) for a busy executive, with one short real-world example for each. Keep it practical and under 200 words."
  applyToRole: "I'm a {role}. Help me build my personal AI traffic light: list typical information in my role and sort it into green (fine to use with AI), amber (anonymise first) and red (never paste). Then give me 3 anonymisation tricks I can use today."
quiz:
  - q: "You want AI help improving a proposal with client names and pricing. Your company hasn't approved the tool. What should you do?"
    options:
      - "Paste it in; the tool is popular so it must be safe"
      - "Replace names and figures with placeholders, or use an approved tool"
      - "Paste it in, then delete the chat afterwards"
    answer: 1
    explain: "Unapproved tools may keep or use what you paste. Anonymise first, or use a tool your company has approved for that data."
  - q: "What went wrong in Mata v. Avianca?"
    options:
      - "Lawyers filed court papers citing cases that ChatGPT had invented, without checking them"
      - "A chatbot leaked confidential court documents"
      - "A judge used AI to write a ruling"
    answer: 0
    explain: "The citations looked real but didn't exist. The lawyers were sanctioned because they submitted AI output without verifying it."
  - q: "Air Canada's chatbot gave a customer wrong refund information. Who did the tribunal hold responsible?"
    options:
      - "The AI vendor"
      - "The customer, for trusting a chatbot"
      - "Air Canada, the company that deployed the chatbot"
    answer: 2
    explain: "Using AI doesn't transfer accountability. If your company publishes or deploys it, your company owns the result."
flashcards:
  - front: "Protect"
    back: "Keep confidential, personal and client data out of AI tools that aren't approved for it."
  - front: "Verify"
    back: "Check names, numbers, quotes and citations before you use AI output, especially externally."
  - front: "Own it"
    back: "You and your company are accountable for AI output you use, publish or deploy."
  - front: "Anonymise"
    back: "Replace real names, figures and identifiers with placeholders before using a less trusted tool."
---

## The idea

AI tools are safe to use at work when you follow three habits: **protect** what you paste in, **verify** what you take out, and **own** the result. Almost every AI mishap in the news broke one of these.

## Why it matters

- **Data you paste can travel.** Consumer AI tools may store conversations, and some use them to improve their models unless you opt out. Business plans usually offer stronger terms, but only if you use them.
- **Fluent isn't true.** As Day 2 showed, AI can invent facts, figures and sources that look completely real.
- **Accountability doesn't move to the machine.** Customers, courts and regulators hold the person or company responsible.

## How it works

1. **Protect.** Know your tool's status. Use company-approved tools for company data. For anything else, anonymise: swap real names, figures and identifiers for placeholders like `[Client A]` and `[£X]`. Never paste passwords, customer personal data, unreleased financials or source code into an unapproved tool.
2. **Verify.** Check every name, number, quote and citation before it leaves your hands. Ask the AI where a claim came from, then check that source yourself. The higher the stakes, the deeper the check.
3. **Own it.** Treat AI output as a junior colleague's draft: useful, fast, and your responsibility once you send it. Be open with your team about where you used AI, and follow your company's policy on disclosure.

## Real-world example

In 2023 **Samsung** engineers pasted internal source code into ChatGPT to help fix bugs. The company then banned staff from using generative AI tools on company devices while it put safeguards in place.

The same year, in **Mata v. Avianca**, New York lawyers filed a brief citing court cases that ChatGPT had made up. They were fined $5,000. And in 2024 a Canadian tribunal ruled that **Air Canada** had to honour wrong refund advice its website chatbot gave a customer.

**The lesson for leaders:** each failure was a habit, not a technology problem. Clear rules and a quick check would have prevented all three.
