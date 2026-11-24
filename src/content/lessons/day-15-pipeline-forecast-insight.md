---
id: "L015"
day: 15
week: 3
module: "w03-sales"
title: "Pipeline and forecast insight: asking better questions of your deal data"
slug: "pipeline-forecast-insight"
whyItMatters: "Most pipeline reviews debate opinions. AI can analyse your deal data in minutes and point to the deals, risks and patterns worth a leader's attention."
summary: "Export your pipeline, remove sensitive details, and ask AI specific questions about stuck deals, risks and patterns. Check the maths and use it to sharpen, not replace, your judgement."
minutes: 5
level: "practitioner"
tags: ["sales", "pipeline", "forecasting", "data"]
roleExamples:
  sales: "Export your open deals and ask: \"Which deals have had no activity for 30 days, which have a close date in the past, and which are missing a decision maker?\""
  marketing: "Ask which lead sources produce deals that actually close, not just the most leads, using last year's closed-won and closed-lost data."
  gm: "Before the quarterly review, ask AI to compare this quarter's pipeline with the last four: coverage, average deal size, and win rate by stage."
  general: "For a consumer business, analyse weekly sales by channel and region and ask what changed most compared with last month."
practice:
  task: "Export your open pipeline from the CRM to a spreadsheet. Remove or replace customer names if your assistant isn't approved for that data. Upload it to an approved assistant with data analysis and ask: \"Which 5 deals are most at risk, and why? Which deals have close dates in the past or no activity in 30 days? Show the numbers behind each answer.\" Check two answers against the spreadsheet."
  minutes: 15
  output: "A short list of at-risk deals with the evidence for each, ready for your next pipeline review."
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
  - title: "Navigating the Jagged Technological Frontier"
    url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700"
    type: "case"
    source: "Harvard Business School working paper (with BCG)"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "Export your pipeline and ask AI to find stuck or overdue deals."
  - "Ask for the numbers behind every AI conclusion, and check two of them."
  - "Bring one AI-surfaced insight to your next pipeline review."
aiPrompts:
  explain: "Explain, for a busy sales leader, how AI tools with data analysis can help with pipeline reviews and forecasting: what to upload, what questions to ask, and why you must check the maths and protect customer data. Keep it under 200 words."
  applyToRole: "I'm a {role}. Suggest the 8 most useful questions I could ask an AI about my pipeline or sales data, explain what each answer would tell me, and list the spreadsheet columns I'd need to export to answer them."
quiz:
  - q: "Which question will get the most useful answer from AI about your pipeline?"
    options:
      - "\"How's my pipeline looking?\""
      - "\"Which open deals have a close date in the past or no activity in 30 days? Show the numbers.\""
      - "\"Will we hit our number?\""
    answer: 1
    explain: "Specific, checkable questions get specific, checkable answers. Vague questions get vague reassurance."
  - q: "AI says your win rate on deals over $100k is 45%. What should you do before quoting it in a board pack?"
    options:
      - "Check the calculation against the data, or ask AI to show its working"
      - "Quote it; AI is good at maths"
      - "Round it up to 50% for simplicity"
    answer: 0
    explain: "Analysis tools usually calculate correctly, but filters, missing data or misread columns can mislead. Verify key numbers."
  - q: "What's the right role for AI in forecasting?"
    options:
      - "Replace the sales leader's forecast call"
      - "Nothing; forecasting is too sensitive"
      - "Surface risks and patterns faster, so leaders spend review time on judgement"
    answer: 2
    explain: "AI sharpens questions and spots patterns; leaders still own the call, using what they know about customers and context."
flashcards:
  - front: "Data analysis mode"
    back: "A feature in many assistants that reads spreadsheets and runs calculations, often showing its working."
  - front: "Stale deal"
    back: "An opportunity with no activity for weeks, or a close date already in the past."
  - front: "Show your working"
    back: "Ask AI to show the numbers and steps behind each conclusion so you can check them."
  - front: "Pipeline coverage"
    back: "Open pipeline value compared with your target, a common early warning signal."
---

## The idea

Pipeline reviews often turn into debates: "this one will close", "I'm confident about that one". Meanwhile the CRM holds the data that could settle the argument, if anyone had time to analyse it.

Many AI assistants can now **read a spreadsheet, run the calculations and explain what they found**. Export your pipeline, ask specific questions, and you'll know where to look before the meeting starts.

## Why it matters

- **Review time goes to the right deals.** AI surfaces stuck, overdue and risky deals, so the conversation focuses there.
- **Patterns become visible.** Win rates by stage, deal size or lead source take seconds to calculate instead of an afternoon.
- **Forecasts get more honest.** Data-backed questions make optimism easier to challenge, kindly.

## How it works

1. **Export and protect.** Export open deals (and last year's closed deals for patterns) to a spreadsheet. Replace customer names if your assistant isn't approved for that data (Day 5).
2. **Ask specific questions.** "Which deals have close dates in the past?" "Which have no activity in 30 days?" "What's our win rate by stage this year compared with last?"
3. **Ask for the working.** "Show the numbers behind each answer." Data analysis tools can show their calculations; check two of them.
4. **Bring insight, not verdicts.** Use what AI finds to ask better questions in the review. The leader still makes the forecast call.

Remember the **jagged frontier** (Day 2): AI is usually strong at sorting and calculating, and weaker at knowing what a customer is really thinking. That's your job.

## Real-world example

*An illustrative scenario.* A regional sales director uploads 140 open opportunities before the quarterly review. In two minutes the AI finds 23 deals with close dates already passed and 11 with no activity in over 30 days, adding up to almost a third of the quarter's "committed" forecast.

She checks a sample against the CRM, confirms it, and opens the review by asking each rep about those deals first. The forecast drops, but becomes believable, and two stalled deals get rescued with an executive call.

**The lesson for leaders:** let AI do the counting before the meeting, so the meeting can be about judgement.
