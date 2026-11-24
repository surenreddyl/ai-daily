---
id: "L023"
day: 23
week: 5
module: "w05-analysis"
title: "\"What if?\": scenario planning and simple models with AI"
slug: "scenario-planning"
whyItMatters: "No forecast is ever right. Leaders who've thought through a few plausible futures react faster when one arrives. AI makes that thinking quick and cheap."
summary: "Name the big uncertainties, ask AI to build two or three plausible scenarios and a simple model for each, plan your response, and pick early signals to watch."
minutes: 5
level: "practitioner"
tags: ["analysis", "strategy", "scenarios", "planning"]
roleExamples:
  sales: "Model next year's revenue under three scenarios (strong demand, flat, a key competitor cuts prices) and what you'd change in each."
  marketing: "Ask AI to sketch three scenarios for a launch (fast adoption, slow, a competitor launches first) with the budget response for each."
  gm: "Build a simple spreadsheet model of margin under different raw material costs and exchange rates, and the price or cost actions you'd take."
  general: "For a consumer business, explore scenarios for a festive season: strong spending, cautious spending, and a supply delay."
practice:
  task: "Pick a plan or budget for the next 12 months. Ask an approved assistant: \"Help me with scenario planning. First ask me about the 2 or 3 biggest uncertainties. Then describe 3 plausible, different scenarios (not just best and worst case). For each: what happens to [revenue/costs/demand], what we should do, and 2 early warning signs.\" If you have numbers, ask it to build a simple model and show the formulas."
  minutes: 15
  output: "Three short scenarios with a response plan and early warning signs for each."
links:
  - title: "Shell Scenarios"
    url: "https://www.shell.com/news-and-insights/scenarios.html"
    type: "case"
    source: "Shell"
    free: true
    lastChecked: "2026-11-24"
  - title: "Scenario planning"
    url: "https://en.wikipedia.org/wiki/Scenario_planning"
    type: "doc"
    source: "Wikipedia"
    free: true
    lastChecked: "2026-11-24"
  - title: "Get started with Copilot in Excel"
    url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel"
    type: "doc"
    source: "Microsoft Support"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-23-scenarios"
  alt: "Four steps: name the big uncertainties, build two or three different scenarios, plan a response for each, and pick early signposts to watch."
checklist:
  - "Sketch three scenarios for one important plan with AI."
  - "Write down two early warning signs for each scenario."
  - "Check the formulas in any AI-built model before you rely on it."
aiPrompts:
  explain: "Explain scenario planning for a busy executive: how it differs from forecasting, why to use two or three plausible scenarios rather than best and worst case, and how AI can help build scenarios and simple models. Mention Shell's long use of scenarios. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me about one plan or target I'm responsible for. Then help me identify the 3 biggest uncertainties, build 3 plausible scenarios, and for each give the impact, my best response and 2 early warning signs to watch."
quiz:
  - q: "How is scenario planning different from forecasting?"
    options:
      - "It explores several plausible futures instead of betting on one prediction"
      - "It predicts the future more precisely"
      - "It only looks at the best case"
    answer: 0
    explain: "Scenarios prepare you to respond to different futures. A single forecast is almost always wrong in some way."
  - q: "Where did practical business scenario planning start, according to its history?"
    options:
      - "In a 2020s software company"
      - "At Royal Dutch Shell in the early 1970s, given urgency by the 1973 oil shock"
      - "In a government tax office"
    answer: 1
    explain: "Pierre Wack began developing scenario planning at Shell in 1971. The 1973 oil shock showed why it mattered."
  - q: "AI builds you a revenue model with three scenarios. What should you check?"
    options:
      - "Only the colours of the charts"
      - "Nothing; the model is automatically correct"
      - "The formulas and assumptions behind each scenario"
    answer: 2
    explain: "Models are only as good as their assumptions. Ask AI to show formulas and check the inputs make sense."
flashcards:
  - front: "Scenario"
    back: "A plausible, internally consistent story about how the future could unfold."
  - front: "Key uncertainties"
    back: "The big unknowns that most affect your plan, such as demand, prices or a competitor's move."
  - front: "Signposts"
    back: "Early signals that tell you which scenario is starting to happen."
  - front: "Not best and worst"
    back: "Good scenarios are different stories, not just optimistic and pessimistic versions of one."
---

## The idea

Every plan rests on a forecast, and every forecast is wrong in some way. **Scenario planning** accepts that. Instead of betting on one future, you describe two or three **plausible, different futures**, decide what you'd do in each, and watch for early signs of which one is arriving.

It used to take workshops and consultants. AI makes a solid first version possible in an afternoon.

## Why it matters

- **Faster reactions.** If you've already thought through "a competitor cuts prices by 15%", you act in days, not months.
- **Better conversations.** Scenarios replace arguments about the "right" forecast with "what would we do if…?"
- **Stress-tested plans.** You see which decisions work in every scenario, and which only work if everything goes right.

## How it works

1. **Name the big uncertainties.** Two or three unknowns that matter most: demand, input costs, exchange rates, a competitor's move, regulation.
2. **Build two or three scenarios.** Ask AI for plausible, *different* stories, not just best and worst case. Give each a memorable name.
3. **Plan a response for each.** What would you do, and when? Ask AI to build a simple spreadsheet model if you have numbers, and to show its formulas.
4. **Pick signposts to watch.** Two early warning signs per scenario, such as order volumes, competitor pricing or supplier lead times.

AI can also play devil's advocate (Day 9): "Which scenario are we under-preparing for?"

## Real-world example

**Shell** is the classic case. Practical business scenario planning was pioneered there by Pierre Wack from 1971, and the 1973 oil shock two years later showed why thinking beyond a single forecast mattered. Shell has used scenarios for decades, still publishes them, and in the 1990s its chief executive credited them with part of the company's success. (To be fair, the evidence for scenarios' value is largely anecdotal, and much of it comes from Shell itself.)

You don't need Shell's resources. A leader with an AI assistant can draft three scenarios, a simple model and a watch list in an afternoon, then refine them with the team.

**The lesson for leaders:** for your next annual plan, add three scenarios and a signpost list alongside the forecast.
