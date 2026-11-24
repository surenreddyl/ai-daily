---
id: "L022"
day: 22
week: 5
module: "w05-analysis"
title: "Charts and stories: turning numbers into something people understand"
slug: "charts-and-stories"
whyItMatters: "A good chart makes a decision obvious; a bad one hides it. AI can draft charts and the story around them in seconds, but you choose the message."
summary: "Decide the one message first, pick the chart type that shows that relationship, let AI build it, then write a headline that says what the chart means."
minutes: 5
level: "practitioner"
tags: ["analysis", "charts", "storytelling"]
roleExamples:
  sales: "Turn a table of quarterly wins by segment into one chart with a headline like \"Mid-market now drives half our new revenue\"."
  marketing: "Ask AI to chart cost per lead by channel over six months and suggest the clearest chart type for showing the trend."
  gm: "Turn a dense monthly KPI table into three charts for the board, each with a one-sentence headline stating what changed."
  general: "For a consumer business, chart weekly sales against promotions to show leadership which promotions worked."
practice:
  task: "Take a table you'll present soon. In an approved assistant with data analysis, upload it and ask: \"What's the single most important message in this data? Suggest the best chart type to show it, explain why, and create it. Then write a headline that states the message in under 12 words.\" Compare its chart with what you'd normally use."
  minutes: 15
  output: "One chart with a clear message headline, ready for your next presentation."
links:
  - title: "Visual Vocabulary"
    url: "https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary"
    type: "doc"
    source: "Financial Times"
    free: true
    lastChecked: "2026-11-24"
  - title: "storytelling with data"
    url: "https://www.storytellingwithdata.com/"
    type: "course"
    source: "Cole Nussbaumer Knaflic"
    free: true
    lastChecked: "2026-11-24"
  - title: "Collaborate with Gemini in Google Sheets"
    url: "https://support.google.com/docs/answer/14356410?hl=en"
    type: "doc"
    source: "Google Docs Editors Help"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "Write the message before you make your next chart."
  - "Replace one chart title with a headline that states the takeaway."
  - "Ask AI to suggest a clearer chart type for one existing slide."
aiPrompts:
  explain: "Explain, for a busy executive, how to choose the right chart for a message (change over time, ranking, part-to-whole, correlation) and why every chart needs a headline that states the takeaway. Mention that people often read correlation as causation. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me to describe a table or set of numbers I present regularly. Then suggest the single most important message, the best chart type to show it, a headline under 12 words, and one thing to remove to make it clearer."
quiz:
  - q: "What should you decide before making a chart?"
    options:
      - "The colours"
      - "The one message the chart needs to show"
      - "How many data series to include"
    answer: 1
    explain: "The message determines the chart type, what to include and what to leave out."
  - q: "Which chart type best shows a trend over 12 months?"
    options:
      - "A line chart"
      - "A pie chart"
      - "A table of numbers"
    answer: 0
    explain: "The FT's Visual Vocabulary lists line charts as the standard way to show change over time."
  - q: "What's a better chart title than \"Sales by quarter\"?"
    options:
      - "\"Chart 3\""
      - "\"Quarterly data, FY26\""
      - "\"Sales recovered in Q3 after two weak quarters\""
    answer: 2
    explain: "A headline that states the takeaway tells busy readers what to notice."
flashcards:
  - front: "Message first"
    back: "Decide what the chart must show before choosing how to show it."
  - front: "Message headline"
    back: "A chart title that states the takeaway, e.g. \"Online now drives 40% of sales\"."
  - front: "Change over time"
    back: "Usually a line chart (or columns for a single series)."
  - front: "Correlation trap"
    back: "Readers often assume two things moving together means one causes the other. Say clearly if it doesn't."
---

## The idea

Numbers alone rarely persuade anyone. A good chart, with a clear headline, can make a decision obvious in seconds. A bad one buries the point.

AI can now build charts from your data and draft the story around them. But the most important part is still yours: deciding **what the chart needs to say**.

## Why it matters

- **Busy readers skim.** A clear chart with a message headline gets read; a dense table doesn't.
- **The right chart prevents misreading.** Pie charts make small differences hard to see; line charts show trends instantly.
- **Speed.** Turning tables into clear charts used to take hours of fiddling. AI does the first draft in seconds.

## How it works

1. **Decide the one message.** "Mid-market is now our biggest growth driver." If you can't say it in a sentence, you're not ready to chart it.
2. **Pick the chart that shows that relationship.** The Financial Times' free **Visual Vocabulary** groups charts by message: change over time (line), ranking (ordered bar), part-to-whole (stacked bar), correlation (scatterplot) and more.
3. **Let AI build it.** Upload the data and ask for that chart, or ask AI to suggest the best type and explain why.
4. **Write a headline that states the takeaway.** Replace "Revenue by segment" with "Mid-market now drives half our new revenue."

**Watch for the correlation trap.** The FT's guide warns that readers tend to assume relationships they see are causal. If two lines move together, say whether one actually causes the other.

## Real-world example

The **Financial Times** publishes its Visual Vocabulary, a guide its journalists use to choose charts, as a free resource. It starts from the question "What do you want to show?" rather than "Which chart looks good?", and gives examples from FT stories for each type.

*An illustrative scenario* shows the same idea in a business setting. A finance director's board pack has 14 tables. She asks AI to identify the one message in each and suggest a chart. The pack shrinks to six charts with message headlines, and the board discussion moves straight to decisions.

**The lesson for leaders:** ask your team for charts with message headlines. Let AI draft them; people choose the message.
