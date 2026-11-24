---
id: "L038"
day: 38
week: 8
module: "w08-risk"
title: "Bias and fairness: when AI treats people unequally"
slug: "bias-and-fairness"
whyItMatters: "AI learns from past data, including past unfairness. Without checks it can quietly repeat discrimination in hiring, lending, pricing or service."
summary: "AI can inherit bias from historical data. Be most careful where AI affects people's opportunities, test outcomes across groups, keep humans deciding, and ask vendors how they test for bias."
minutes: 5
level: "practitioner"
tags: ["bias", "fairness", "ethics", "hiring", "risk"]
roleExamples:
  sales: "If AI scores leads or territories, check whether it systematically deprioritises certain regions or customer types for reasons unrelated to real potential."
  marketing: "Review AI-generated images and copy for stereotypes, and check that AI targeting doesn't exclude groups in ways that could be unfair or unlawful."
  gm: "Before any AI tool is used in hiring, promotion or pay decisions, ask the vendor how it tests for bias and insist that people make the final decision."
  general: "For a consumer business, check whether AI-driven offers or prices differ across customer groups, and whether you could justify the difference."
practice:
  task: "List any AI tools your team uses (or is considering) that affect people: candidates, employees, customers, suppliers. For each, ask an approved assistant: \"What kinds of bias could this tool have, where would it come from, and how could I test for it?\" Write three questions to ask the vendor or your data team."
  minutes: 15
  output: "A bias risk list for AI tools that affect people, with three questions for each vendor or data team."
links:
  - title: "Amazon scraps a secret AI recruiting tool that showed bias against women"
    url: "https://www.cnbc.com/2018/10/10/amazon-scraps-a-secret-ai-recruiting-tool-that-showed-bias-against-women.html"
    type: "case"
    source: "Reuters via CNBC"
    free: true
    lastChecked: "2026-11-24"
  - title: "AI Act: regulatory framework"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    type: "doc"
    source: "European Commission"
    free: true
    lastChecked: "2026-11-24"
  - title: "MeitY unveils India AI Governance Guidelines"
    url: "https://www.newsonair.gov.in/meity-unveils-india-ai-governance-guidelines-to-promote-safe-and-responsible-ai-adoption"
    type: "doc"
    source: "Akashvani News (All India Radio)"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "List the AI tools in your area that affect people's opportunities."
  - "Ask one vendor how they test their tool for bias."
  - "Confirm people make the final call on hiring, pay and credit decisions."
aiPrompts:
  explain: "Explain AI bias for a busy executive: how bias enters through historical data, why hiring, lending and pricing are highest risk, the Amazon recruiting tool example, how the EU AI Act treats these uses, and practical steps to test and reduce bias. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me which AI tools in my work affect people (customers, candidates, staff). For each, describe how bias could creep in, a simple way to check outcomes across groups, and three questions to ask the vendor."
quiz:
  - q: "Why did Amazon's experimental recruiting tool show bias against women?"
    options:
      - "It learned from ten years of past CVs, mostly from men, and penalised CVs mentioning \"women's\""
      - "Someone programmed it to prefer men"
      - "It only received CVs from women"
    answer: 0
    explain: "Trained on historical patterns in a male-dominated field, it learned to downgrade signals associated with women. Amazon scrapped it."
  - q: "Where is AI bias most serious?"
    options:
      - "Choosing a font"
      - "Where AI affects people's opportunities, such as hiring, lending, pricing or access to services"
      - "Summarising a meeting"
    answer: 1
    explain: "The EU AI Act classifies uses such as CV-sorting and credit scoring as high-risk for exactly this reason."
  - q: "What's a practical way to check an AI tool for bias?"
    options:
      - "Ask the AI if it's biased"
      - "Assume vendors have handled it"
      - "Compare its outcomes across different groups and ask the vendor how they test"
    answer: 2
    explain: "Look at results, not just promises. If outcomes differ across groups, find out why."
flashcards:
  - front: "AI bias"
    back: "When AI produces systematically unfair results for certain groups, often learned from past data."
  - front: "Historical bias"
    back: "Past unfairness baked into the data an AI learns from."
  - front: "Outcome testing"
    back: "Comparing AI results across groups to spot unfair differences."
  - front: "High-risk uses"
    back: "Hiring, credit, education and access to services. Keep people in charge."
---

## The idea

AI learns patterns from past data. If the past was unfair (who got hired, who got loans, who got the best offers), AI can **learn and repeat that unfairness**, quickly and at scale, often without anyone noticing.

This is **AI bias**. It's most serious where AI affects people's **opportunities**: jobs, credit, pricing, access to services.

*This lesson is general information, not legal advice. Check with your legal or compliance team.*

## Why it matters

- **Harm to people.** Unfair decisions affect livelihoods and lives.
- **Legal risk.** Discrimination laws apply whether a person or an algorithm decided. The EU AI Act classifies uses such as **CV-sorting** and **credit scoring** as high-risk, with strict obligations from December 2027.
- **India's direction.** India's AI Governance Guidelines (November 2025) are built around the principle "Do No Harm", with a flexible approach to managing risk.
- **Reputation.** "Our AI did it" is no defence in the press.

## How it works

1. **Find where AI affects people.** Hiring, performance, pay, credit, pricing, customer service priority, marketing targeting.
2. **Ask where bias could come from.** Historical data, missing groups in the data, or proxies (such as postcode standing in for income or community).
3. **Test outcomes.** Compare results across groups: gender, age, region, language. Large unexplained differences are a warning sign.
4. **Keep humans deciding, and ask vendors.** People make the final call on high-stakes decisions (Day 35). Ask vendors: "How do you test for bias, and can we see the results?"

## Real-world example

In 2018, Reuters reported that **Amazon** had scrapped an experimental AI recruiting tool. The system had been trained on CVs submitted to the company over a **10-year period**, mostly from men, reflecting the tech industry. It learned to **penalise CVs that included the word "women's"**, as in "women's chess club captain", and downgraded graduates of two all-women's colleges.

According to Reuters' sources, Amazon's recruiters looked at the tool's recommendations but never relied solely on them, and Amazon declined to comment on the engine. But the lesson stuck: even a sophisticated company's AI repeated historical bias.

**The lesson for leaders:** wherever AI touches people's opportunities, test outcomes, ask hard questions of vendors, and keep a human decision-maker.
