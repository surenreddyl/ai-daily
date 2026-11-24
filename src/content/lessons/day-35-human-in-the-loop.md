---
id: "L035"
day: 35
week: 7
module: "w07-agents"
title: "Human in the loop: deciding where people must stay in charge"
slug: "human-in-the-loop"
whyItMatters: "As AI does more on its own, the key leadership decision is where people must stay in charge. Getting it right lets you move fast without losing control."
summary: "Sort AI tasks by risk: automate low-risk work, have people approve medium-risk work, and keep people deciding high-risk matters such as hiring, credit and safety. Review regularly."
minutes: 5
level: "practitioner"
tags: ["governance", "agents", "risk", "oversight"]
roleExamples:
  sales: "Let AI log calls automatically (low risk), have reps approve AI-drafted quotes (medium), and keep discount approvals above a threshold with managers (high)."
  marketing: "Let AI tag content automatically, require approval for anything published, and keep decisions about sensitive targeting with people."
  gm: "Create a simple register of AI uses in your area, each labelled low, medium or high risk, with the human role for each, and review it quarterly."
  general: "In any team, AI should never make final decisions about hiring, firing, pay or access to credit without meaningful human review."
practice:
  task: "List every way your team uses AI today, or plans to (aim for 8–10). For each, ask: Is it internal or customer-facing? Can mistakes be undone easily? Does it affect someone's job, money, health or rights? Label each Low, Medium or High risk and write the human role: none, approve, or decide. Ask an approved assistant to challenge your labels."
  minutes: 15
  output: "A simple AI use register for your team, with a risk level and human role for each use."
links:
  - title: "AI Act: regulatory framework"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    type: "doc"
    source: "European Commission"
    free: true
    lastChecked: "2026-11-24"
  - title: "AI Risk Management Framework"
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
    type: "doc"
    source: "US National Institute of Standards and Technology"
    free: true
    lastChecked: "2026-11-24"
  - title: "Airline held liable for its chatbot giving passenger bad advice"
    url: "https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know"
    type: "case"
    source: "BBC"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-35-human-in-loop"
  alt: "Three risk levels and a review step: low risk is automated, medium risk means AI drafts and you approve, high risk means you decide, and everything is logged and reviewed."
checklist:
  - "List your team's AI uses and label each low, medium or high risk."
  - "Name the human role (none, approve or decide) for every use."
  - "Put a quarterly review of your AI use register in the calendar."
aiPrompts:
  explain: "Explain 'human in the loop' for a busy executive: sorting AI uses by risk, which decisions should stay with people (such as hiring and credit), how the EU AI Act treats high-risk uses, and why regular review matters. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me how my team uses or plans to use AI. Then build me a simple AI use register: each use, its risk level (low, medium, high), the human role (none, approve, decide), and one control to add for each high-risk use."
quiz:
  - q: "Which AI use should stay 'human decides'?"
    options:
      - "Automatically tagging internal documents"
      - "Deciding which job candidates to reject"
      - "Summarising a meeting for attendees"
    answer: 1
    explain: "Decisions about people's jobs, money, health or rights are high risk. People must make the final call."
  - q: "How does the EU AI Act treat AI used for sorting CVs in recruitment?"
    options:
      - "As high-risk, with strict obligations"
      - "As banned in all cases"
      - "As having no rules at all"
    answer: 0
    explain: "The European Commission lists employment uses such as CV-sorting as high-risk, with strict rules applying from December 2027."
  - q: "Why review your AI use register regularly?"
    options:
      - "To make it longer"
      - "Because regulators require daily reviews"
      - "AI tools, uses and risks change, so tasks may need to move between risk levels"
    answer: 2
    explain: "As trust grows or problems appear, adjust what AI does alone and where people step in."
flashcards:
  - front: "Human in the loop"
    back: "A person reviews or decides at defined points in an AI process."
  - front: "Low / medium / high risk"
    back: "Automate; AI drafts and a person approves; a person decides."
  - front: "AI use register"
    back: "A simple list of your AI uses, each with its risk level and human role."
  - front: "High-risk uses"
    back: "Decisions about hiring, credit, health, safety or legal rights. Keep people in charge."
---

## The idea

Over Week 7 you've seen AI move from answering to **acting**: agents, automations and customer-facing assistants. The leadership question that follows is simple to ask and important to get right: **where must people stay in charge?**

The answer depends on **risk**: how much harm a mistake could cause, and how easily it can be undone.

## Why it matters

- **Speed where it's safe.** Clear rules let teams automate low-risk work without endless debate.
- **Control where it counts.** Decisions affecting people's jobs, money, health or rights need human judgement.
- **Regulation is formalising this.** The EU AI Act classifies uses such as **CV-sorting for recruitment** and **credit scoring** as **high-risk**, with strict obligations from **2 December 2027**. India's AI Governance Guidelines (2025) take a lighter-touch approach, but share the same spirit: "Do No Harm".

## How it works

1. **Low risk: automate.** Internal, reversible, easy to check: tagging, logging, first drafts for your own use.
2. **Medium risk: AI drafts, a person approves.** Anything a customer sees, quotes, reports, published content.
3. **High risk: a person decides.** Hiring, firing, pay, credit, health, legal and safety decisions. AI can inform; people decide, with real authority to disagree.
4. **Log, review, adjust.** Keep a simple **AI use register**, check samples regularly, and move tasks between levels as evidence builds.

**Meaningful, not rubber-stamp.** A human "in the loop" who approves hundreds of AI decisions an hour without looking isn't oversight. Give reviewers time, information and authority.

## Real-world example

The **Air Canada** chatbot case (Day 33) shows what happens without clear human oversight. A customer-facing AI gave wrong refund information, nobody caught it, and a tribunal held the company responsible.

*An illustrative scenario* shows the alternative: a regional bank's operations head builds an AI use register for her area. Document sorting is automated; customer letters are AI-drafted and staff-approved; loan decisions stay with credit officers, who see the AI's analysis but make the call. When regulators ask how AI is governed, she has a one-page answer.

**The lesson for leaders:** don't ask "should we use AI?" Ask "for this task, is the human role none, approve, or decide?", and write it down.
