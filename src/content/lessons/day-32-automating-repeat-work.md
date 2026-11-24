---
id: "L032"
day: 32
week: 7
module: "w07-agents"
title: "Automating repeat work: connecting AI to the tools you already use"
slug: "automating-repeat-work"
whyItMatters: "The same small tasks repeat hundreds of times a month. Connecting AI to your everyday tools turns them into automatic workflows, with checks where they count."
summary: "Pick a frequent, rule-based task, map its trigger and steps, add one AI step (summarise, classify, draft), keep a check before anything external, and measure the time saved."
minutes: 5
level: "practitioner"
tags: ["automation", "workflows", "productivity"]
roleExamples:
  sales: "When a website enquiry arrives, AI summarises it, scores it against your ideal customer, creates the CRM record and drafts a reply for the rep to approve."
  marketing: "When a new customer review is posted, AI tags its theme and sentiment, adds it to a tracking sheet and flags negative reviews for a same-day response."
  gm: "When a supplier invoice arrives by email, AI extracts the key fields into a spreadsheet for finance to check, instead of retyping them."
  general: "For a consumer service desk, AI classifies incoming tickets by type and urgency and routes them to the right team."
practice:
  task: "Pick one task you or your team do at least 20 times a month. Write it down as: Trigger (what starts it), Steps (what happens), Output (what's produced). Ask an approved assistant: \"Help me design an automation for this. Which step could AI do? Where should a person check? Which tools might connect it (e.g. Power Automate, Zapier, Google Workspace)? What could go wrong?\" Estimate monthly time saved."
  minutes: 15
  output: "A one-page automation design for a real repeated task, with a check point and estimated time saved."
links:
  - title: "Power Automate"
    url: "https://www.microsoft.com/en-us/power-platform/products/power-automate"
    type: "tool"
    source: "Microsoft"
    free: false
    lastChecked: "2026-11-24"
  - title: "Zapier and AI"
    url: "https://zapier.com/ai"
    type: "tool"
    source: "Zapier"
    free: false
    lastChecked: "2026-11-24"
  - title: "Building effective AI agents"
    url: "https://www.anthropic.com/research/building-effective-agents"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-32-automation"
  alt: "Four steps: a trigger happens, AI does one clear step such as summarising or classifying, a rule or person checks it, then the action runs."
checklist:
  - "Map one repeated task as trigger, steps and output."
  - "Identify the one step AI could do and the one place a person should check."
  - "Ask IT which automation tools your company already has."
aiPrompts:
  explain: "Explain, for a busy executive, how to automate repeated work by connecting AI to everyday tools: triggers, AI steps like summarising or classifying, human checks, and tools such as Power Automate, Zapier or Google Workspace. Keep it under 200 words."
  applyToRole: "I'm a {role}. Suggest 5 repeated tasks in my role that could be automated with an AI step. For each, describe the trigger, the AI step, where a human should check, the tools that could connect it, and a rough time saving per month."
quiz:
  - q: "What's the best first candidate for automation?"
    options:
      - "A frequent, rule-based task with a clear trigger and output"
      - "A rare, complex negotiation"
      - "A task nobody understands"
    answer: 0
    explain: "High frequency and clear rules make savings large and risks manageable."
  - q: "Where should a human check in an AI automation?"
    options:
      - "Never; automation means no humans"
      - "Before anything goes outside the company or can't easily be undone"
      - "Only once a year"
    answer: 1
    explain: "Internal, reversible steps can often run alone. External or irreversible ones deserve a check, at least at first."
  - q: "What's the role of the AI step in a workflow?"
    options:
      - "To replace every other step"
      - "To decide company strategy"
      - "One clear job such as summarise, classify, extract or draft"
    answer: 2
    explain: "Giving AI one well-defined job in a fixed workflow keeps results predictable and easy to check (Day 31)."
flashcards:
  - front: "Trigger"
    back: "The event that starts an automation: a new email, form, order or ticket."
  - front: "AI step"
    back: "One clear job inside a workflow: summarise, classify, extract or draft."
  - front: "Check point"
    back: "A rule or person that reviews output before it goes external."
  - front: "Automation tools"
    back: "Services such as Power Automate or Zapier that connect apps and run workflows."
---

## The idea

Much of a team's week is the same small tasks repeated: reading an enquiry and logging it, sorting tickets, copying invoice details, tagging reviews. Automation tools have connected apps for years. Now they can include an **AI step** that reads, summarises, classifies or drafts.

This is usually a **workflow** (Day 31): fixed steps with AI doing one clear job. It's more predictable than a free-roaming agent, and often all you need.

## Why it matters

- **Small tasks add up.** A two-minute task done 400 times a month is over 13 hours.
- **Faster responses.** Enquiries and complaints get handled in minutes, not days.
- **Fewer errors.** Copying and retyping is where mistakes creep in.

## How it works

1. **A trigger happens.** A new form submission, email, order, review or support ticket.
2. **AI does one clear step.** Summarise the enquiry, classify the ticket, extract invoice fields, draft a reply.
3. **A rule or person checks.** Especially before anything goes to a customer or can't easily be undone. As trust grows, low-risk steps can run alone.
4. **The action runs.** CRM updated, task created, reply sent, spreadsheet filled.

**Which tools?** Many companies already have one: **Microsoft Power Automate** for Microsoft 365, workflow features in Google Workspace, or services like **Zapier** that connect thousands of apps. Ask IT what's approved before connecting anything to customer data.

## Real-world example

*An illustrative scenario.* A B2B equipment supplier receives about 300 website enquiries a month. A sales coordinator used to read each one, look up the company, create a CRM record and forward it.

The team builds a simple automation: each new enquiry triggers an AI step that summarises it and scores it against their ideal customer profile. A CRM record is created automatically, and the assigned rep gets a drafted reply to review. Response time drops from two days to two hours, and the coordinator moves to higher-value work. A consumer retailer uses the same pattern to route customer emails to the right team.

**The lesson for leaders:** ask each team for its most repeated task, and automate one step at a time, with a check before anything goes external.
