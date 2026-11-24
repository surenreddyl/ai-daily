---
id: "L020"
day: 20
week: 4
module: "w04-marketing"
title: "Measuring marketing with AI: analysis and reporting leaders read"
slug: "measuring-marketing"
whyItMatters: "Marketing reports often show lots of numbers and little meaning. AI can find what changed and why, and write the one-page story leaders actually read."
summary: "Export campaign and channel data, ask AI specific questions about what changed and why, check the key numbers, and turn the findings into a short, decision-focused report."
minutes: 5
level: "practitioner"
tags: ["marketing", "analytics", "reporting"]
roleExamples:
  sales: "Ask AI to connect marketing-sourced leads with closed deals from last quarter and show which campaigns actually produced revenue."
  marketing: "Upload monthly channel data and ask: \"What changed most versus last month and last year, and what are the three most likely reasons?\" Then check the reasons."
  gm: "Ask for a one-page summary of marketing performance: spend, results, cost per result, and the two decisions needed this month."
  general: "For a consumer brand, compare weekly sales by channel with promotions and weather, and ask which factors seem to move sales most."
practice:
  task: "Export last month's marketing data (by channel or campaign: spend, visits, leads or sales). Remove any personal data. Upload it to an approved assistant with data analysis and ask: \"What changed most versus the month before? Show the numbers. Give 3 possible explanations and how I could check each.\" Then ask: \"Write a one-page summary for leadership: headline, 3 key facts, 1 risk, 2 decisions needed.\""
  minutes: 15
  output: "A checked analysis of last month's results and a one-page summary ready for leadership."
links:
  - title: "Data analysis with ChatGPT"
    url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt"
    type: "doc"
    source: "OpenAI Help Center"
    free: true
    lastChecked: "2026-11-24"
  - title: "Get started with Copilot in Excel"
    url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel"
    type: "doc"
    source: "Microsoft Support"
    free: true
    lastChecked: "2026-11-24"
  - title: "2017 Letter to Shareholders"
    url: "https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders"
    type: "case"
    source: "Jeff Bezos, Amazon"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "Ask AI what changed most in last month's marketing data, with the numbers."
  - "Check every AI-suggested explanation before repeating it."
  - "Send leadership a one-page, decision-focused marketing summary."
aiPrompts:
  explain: "Explain, for a busy marketing leader, how to use AI to analyse marketing performance data and write reports leaders read: what to upload, which questions to ask, why correlation isn't cause, and how to turn findings into decisions. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me what marketing or sales data I can export. Then suggest 6 questions to ask AI about it, the spreadsheet columns I'd need, and a one-page report template (headline, key facts, risk, decisions) for my leadership team."
quiz:
  - q: "AI notices leads jumped 30% the same month you launched a new campaign. What should you conclude?"
    options:
      - "The campaign definitely caused the jump"
      - "It's a lead worth checking, since other factors such as seasonality or a price change could explain it"
      - "AI analysis is unreliable"
    answer: 1
    explain: "Two things happening together isn't proof one caused the other. Ask AI for alternative explanations and how to test them."
  - q: "What makes a marketing report useful to senior leaders?"
    options:
      - "A clear headline, a few key facts, risks and the decisions needed"
      - "Every metric available, on 20 slides"
      - "Only good news"
    answer: 0
    explain: "Leaders need meaning and decisions, not data dumps. AI can draft the story once the analysis is checked."
  - q: "Before sharing an AI-calculated cost per lead with the board, you should…"
    options:
      - "Trust it; AI calculated it"
      - "Round it to make it look better"
      - "Check how it was calculated and confirm it against the source data"
    answer: 2
    explain: "Filters, missing rows or misread columns can produce plausible but wrong numbers. Verify anything decision-critical."
flashcards:
  - front: "What changed and why"
    back: "The two questions every performance review should answer. AI can find the first fast; you test the second."
  - front: "Correlation vs causation"
    back: "Two things moving together isn't proof one caused the other."
  - front: "One-page report"
    back: "Headline, three key facts, one risk, two decisions needed."
  - front: "Verify key numbers"
    back: "Check any figure that will drive a decision against the source data."
---

## The idea

Most marketing teams have more data than ever, and less time to make sense of it. Reports grow longer while leaders read less.

AI assistants with **data analysis** can read your exported numbers, spot **what changed**, suggest **possible reasons** and draft a **short story** for leadership. Your job is to check the numbers and test the reasons.

## Why it matters

- **Faster insight.** Questions that took an analyst a day can be answered in minutes.
- **Better decisions.** A one-page story with decisions needed beats a 20-slide data dump.
- **Credibility.** Marketing earns trust when it connects activity to results, honestly.

## How it works

1. **Export and protect.** Download campaign or channel data: spend, visits, leads, sales, by week or month. Remove personal data.
2. **Ask what changed.** "What changed most versus last month and last year? Show the numbers."
3. **Test the why.** "Give three possible explanations and how I could check each." Remember: **correlation isn't causation**. A campaign launch and a sales jump in the same month may be coincidence, seasonality or a price change.
4. **Write for decisions.** "Write a one-page summary: headline, three key facts, one risk, two decisions needed." Check every number in it before it goes out.

## Real-world example

In his 2017 letter to shareholders, Jeff Bezos explains why **Amazon** senior meetings start with carefully written, narratively structured memos rather than slides: the writing forces clarity about what matters.

AI makes that discipline easier for marketing reporting. *An illustrative scenario:* a consumer brand's marketing director uploads three months of channel data. AI spots that paid social cost per sale doubled while email sales rose 40%. It suggests three explanations, she checks them, and the real cause is an audience-targeting change. Her one-page memo recommends shifting budget, and leadership approves it in ten minutes.

**The lesson for leaders:** ask your team for one checked page of meaning every month, not more charts. AI can do the heavy lifting; people own the conclusions.
