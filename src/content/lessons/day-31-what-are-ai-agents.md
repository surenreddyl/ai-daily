---
id: "L031"
day: 31
week: 7
module: "w07-agents"
title: "What AI agents are (and aren't): from answering to acting"
slug: "what-are-ai-agents"
whyItMatters: "Every vendor now sells 'agents'. Knowing what an agent really is helps you spot real value, avoid hype, and decide where AI should act on its own."
summary: "An AI agent doesn't just answer; it plans steps and uses tools to complete a goal. Start with the simplest approach that works, and keep humans approving anything important."
minutes: 5
level: "practitioner"
tags: ["agents", "automation", "strategy"]
roleExamples:
  sales: "An agent researches 20 target accounts, finds the right contact at each, and drafts a first email for your approval: steps you'd otherwise do by hand."
  marketing: "An agent monitors competitor websites weekly, summarises changes in pricing or messaging, and drafts a briefing note."
  gm: "Ask any vendor pitching an 'agent': what steps does it take on its own, which tools can it touch, and where does a human approve?"
  general: "For a consumer service, an agent might check an order's status, process a simple return and email the customer, handing complex cases to a person."
practice:
  task: "List five tasks in your week that involve several steps across different tools (for example, research a prospect, update the CRM, draft an email). For each, ask an approved assistant: \"Could an AI agent do this? What steps and tools would it need, what could go wrong, and where should a human approve?\" Rank the five from best to worst candidate."
  minutes: 15
  output: "A ranked list of five tasks with a view on which could suit an AI agent, and where humans must stay involved."
links:
  - title: "Building effective AI agents"
    url: "https://www.anthropic.com/research/building-effective-agents"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
  - title: "Using AI Right Now: A Quick Guide"
    url: "https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide"
    type: "doc"
    source: "Ethan Mollick, One Useful Thing"
    free: true
    lastChecked: "2026-11-24"
  - title: "Klarna AI assistant handles two-thirds of customer service chats"
    url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
    type: "case"
    source: "Klarna press release"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-31-agent"
  alt: "Four steps: you set a goal, the agent makes a plan, it acts using tools such as calendar, email and CRM, then it checks and reports back for your approval."
checklist:
  - "List five multi-step tasks and rate each as a candidate for an AI agent."
  - "Ask the next vendor who pitches an 'agent' which actions it takes without approval."
  - "Note one task where a simple prompt or workflow would work better than an agent."
aiPrompts:
  explain: "Explain AI agents for a busy executive: how they differ from a chat assistant and from a fixed automated workflow, what they can do with tools, why the simplest solution is often best, and where humans should stay in control. Keep it under 200 words."
  applyToRole: "I'm a {role}. Suggest 5 tasks in my role that an AI agent could realistically help with today. For each, list the steps and tools involved, the main risk, and exactly where a human should approve before the agent continues."
quiz:
  - q: "What's the main difference between a chat assistant and an AI agent?"
    options:
      - "An agent plans steps and uses tools to complete a goal, not just answer"
      - "An agent is always more accurate"
      - "An agent doesn't use a language model"
    answer: 0
    explain: "Agents act: they break a goal into steps and use tools like email, calendars, CRMs or the web."
  - q: "According to Anthropic's guidance on building agents, what should you start with?"
    options:
      - "The most autonomous agent available"
      - "The simplest solution that works, adding complexity only when needed"
      - "A fully custom agent for every task"
    answer: 1
    explain: "Anthropic recommends the simplest solution possible. Often a good prompt or a fixed workflow beats a complex agent."
  - q: "A vendor's agent can send emails to customers on its own. What's your first question?"
    options:
      - "\"What colour is the interface?\""
      - "\"Can it send more emails?\""
      - "\"Which actions happen without human approval, and how are mistakes caught?\""
    answer: 2
    explain: "The more an agent can do on its own, the more important approval points, limits and monitoring become."
flashcards:
  - front: "AI agent"
    back: "AI that plans steps and uses tools to complete a goal, not just answer a question."
  - front: "Workflow"
    back: "AI steps in a fixed, predefined sequence: predictable and easier to control."
  - front: "Tools"
    back: "What an agent can use or change: email, calendar, CRM, files, web browser."
  - front: "Approval point"
    back: "A step where a human must confirm before the agent continues."
---

## The idea

So far you've used AI that **answers**: you ask, it responds, you act. An **AI agent** goes further. You give it a goal, and it **plans the steps and uses tools** (email, calendar, CRM, a web browser, files) to complete it, checking its own progress along the way.

Anthropic, which makes Claude, draws a useful line between **workflows**, where AI follows predefined steps, and **agents**, where AI decides its own steps and which tools to use.

## Why it matters

- **Real productivity gains.** Multi-step, repetitive work (research, data entry, follow-ups) is where agents can save hours.
- **Real risks.** An agent that can send emails, change records or spend money can make mistakes at speed.
- **Lots of hype.** Many products called "agents" are simple workflows. That's often fine, but you should know what you're buying.

## How it works

1. **You set a goal.** "Book meetings with these five clients next week."
2. **The agent makes a plan.** Check calendars, draft invitations, propose times.
3. **It acts using tools.** Reads your calendar, drafts emails, updates the CRM, within the permissions you give it.
4. **It checks and reports back.** A well-designed agent pauses for your **approval** on anything important, such as sending external emails or committing money.

**Start simple.** Anthropic's guidance for builders is to find the simplest solution that works and add complexity only when needed. For leaders, that means a good prompt or a fixed workflow (Day 32) is often better than a fully autonomous agent.

## Real-world example

**Klarna's** customer service assistant (Day 1) is an early large-scale example of AI acting, not just chatting. In its first month it handled two-thirds of customer service chats, resolving issues such as refunds and payments across many markets.

And in 2025, Klarna also moved to make sure customers can always reach a human. Even a successful AI deployment works best with people available for what AI handles poorly.

**The lesson for leaders:** when someone pitches an agent, ask three questions: what can it do on its own, what tools can it touch, and where does a human approve?
