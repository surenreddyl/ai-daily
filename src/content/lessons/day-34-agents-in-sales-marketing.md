---
id: "L034"
day: 34
week: 7
module: "w07-agents"
title: "Agents in sales and marketing workflows, with human checkpoints"
slug: "agents-in-sales-marketing"
whyItMatters: "Agents can now research, enrich, route and draft across sales and marketing tools. The teams that win add speed without letting AI talk to customers unchecked."
summary: "Map a sales or marketing workflow, let agents take the research and preparation steps, and keep human checkpoints before anything reaches a customer or changes key records."
minutes: 5
level: "practitioner"
tags: ["agents", "sales", "marketing", "workflows"]
roleExamples:
  sales: "An agent enriches new leads overnight (company size, industry, recent news), scores them and drafts first emails; reps review and send in the morning."
  marketing: "An agent pulls last week's campaign results from several tools, drafts the weekly report and suggests three tests; the marketer checks and decides."
  gm: "Ask your sales and marketing leads to map one workflow end to end and mark which steps an agent prepares and which a person approves."
  general: "For a consumer brand, an agent drafts personalised win-back offers within set limits, and a marketer approves each campaign before it goes out."
practice:
  task: "Map one sales or marketing workflow from start to finish (for example: new lead → research → score → first email → follow-up → CRM update). Mark each step as: Agent can do it (A), Agent prepares and human approves (A+H), or Human only (H). Ask an approved assistant to challenge your choices: \"Where am I giving the agent too much freedom, or too little?\""
  minutes: 15
  output: "A workflow map with every step marked A, A+H or H, reviewed for risk."
links:
  - title: "Building effective AI agents"
    url: "https://www.anthropic.com/research/building-effective-agents"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
  - title: "CAN-SPAM Act: A Compliance Guide for Business"
    url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
    type: "doc"
    source: "US Federal Trade Commission"
    free: true
    lastChecked: "2026-11-24"
  - title: "Lumen's strategic leap: how Copilot is redefining productivity"
    url: "https://www.microsoft.com/en/customers/story/1771760434465986810-lumen-microsoft-copilot-telecommunications-en-united-states"
    type: "case"
    source: "Microsoft customer story"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "Map one sales or marketing workflow and mark each step A, A+H or H."
  - "Make sure no agent sends customer messages without approval at first."
  - "Track one measure (response time, meetings booked) before and after."
aiPrompts:
  explain: "Explain, for a busy sales or marketing leader, how AI agents can help across workflows (lead research, enrichment, scoring, drafting, reporting) and why human checkpoints matter before customer contact or record changes. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me to describe one workflow I own from start to finish. Then mark each step as agent-only, agent-prepares-human-approves, or human-only, explain why, and suggest the first step to pilot with an agent."
quiz:
  - q: "Which sales step is the safest place to start with an agent?"
    options:
      - "Researching and enriching new leads before a rep reviews them"
      - "Negotiating final prices with customers"
      - "Signing contracts"
    answer: 0
    explain: "Research and preparation are internal and easy to check. Customer-facing commitments need human judgement."
  - q: "What does 'A+H' mean in a workflow map?"
    options:
      - "Two agents work together"
      - "The agent prepares, and a human approves before it continues"
      - "Humans are removed from the step"
    answer: 1
    explain: "Agent preparation with human approval gives speed with control, ideal for customer emails and offers."
  - q: "An agent drafts outreach emails at scale. Which rules still apply?"
    options:
      - "None. Agent-written emails are exempt"
      - "Only internal company rules"
      - "The same consent, honesty and opt-out rules as any outreach"
    answer: 2
    explain: "Laws like CAN-SPAM and data protection rules apply however a message was written (Day 12)."
flashcards:
  - front: "Lead enrichment"
    back: "Adding company and contact details to a lead, a strong first job for an agent."
  - front: "A / A+H / H"
    back: "Agent only; agent prepares, human approves; human only."
  - front: "Customer-facing checkpoint"
    back: "A human approves before any message, offer or promise reaches a customer."
  - front: "Before-and-after measure"
    back: "Track one number, such as response time, to prove an agent's value."
---

## The idea

Sales and marketing are full of multi-step work: research a lead, enrich the record, score it, draft an email, follow up, report results. AI **agents** (Day 31) and **automations** (Day 32) can now handle many of these steps across your CRM, email and marketing tools.

The question isn't whether to use them, but **which steps they do alone and where a person approves**.

## Why it matters

- **Speed to lead.** Agents can research and prepare overnight, so reps start the day with ready-to-send drafts.
- **Consistency.** Every lead gets the same research and scoring, not just the ones a busy rep remembers.
- **Reputation risk.** An agent emailing customers unchecked can damage relationships, and break outreach rules, at scale.

## How it works

1. **Map the workflow.** Write every step from start to finish: lead arrives → research → score → first email → follow-up → CRM update.
2. **Mark each step:**
   - **A** (agent only): internal, reversible, easy to check. Research, enrichment, tagging.
   - **A+H** (agent prepares, human approves): emails, offers, anything a customer sees.
   - **H** (human only): pricing decisions, negotiations, sensitive conversations.
3. **Pilot one step.** Start with an internal "A" step, measure it, then expand.
4. **Review and adjust.** Check a sample of agent work weekly. Move steps between A, A+H and H as trust is earned, or lost.

## Real-world example

At **Lumen Technologies** (Day 11), AI assistance cut sellers' research for customer outreach from about four hours to 15 minutes, according to its revenue chief. That's a company-reported figure, and the preparation step is exactly where agents shine.

*An illustrative scenario* shows the next step: a B2B software team lets an agent enrich and score inbound leads overnight and draft first emails. Reps approve each email in the morning. Response time falls from a day to an hour, and because humans approve every customer message, there are no embarrassing mistakes. After three months they let the agent send routine meeting confirmations on its own, and keep approval for everything else.

**The lesson for leaders:** let agents prepare; let people decide what reaches the customer. Expand autonomy step by step, based on evidence.
