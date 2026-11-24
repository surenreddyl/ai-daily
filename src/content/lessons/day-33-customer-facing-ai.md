---
id: "L033"
day: 33
week: 7
module: "w07-agents"
title: "Customer-facing AI: chatbots and service assistants done right"
slug: "customer-facing-ai"
whyItMatters: "A good AI assistant gives customers instant help; a bad one damages trust and creates legal risk. The difference: design, limits and a route to a human."
summary: "Ground the assistant in your real policies, limit what it can promise, make it easy to reach a person, be open that it's AI, and monitor conversations closely."
minutes: 5
level: "practitioner"
tags: ["customer-service", "chatbots", "agents", "risk"]
roleExamples:
  sales: "Use an AI assistant on your website to answer product questions and book demos, with a clear hand-off to a salesperson for pricing and negotiation."
  marketing: "Review a sample of chatbot conversations monthly to learn what customers actually ask, and turn the gaps into FAQ content."
  gm: "Before launch, set three rules: the bot only answers from approved policy documents, it never invents discounts or exceptions, and a human is one click away."
  general: "For a consumer brand, let the assistant handle order tracking and simple returns, and route complaints and vulnerable customers to people."
practice:
  task: "Pick a customer-facing process (FAQs, order status, booking, complaints). Ask an approved assistant: \"Help me design a customer AI assistant for this. List: what it should handle, what it must never do or promise, which documents it should answer from, when it must hand over to a human, and 5 tests I should run before launch.\" Then try your current website chat, if you have one, against those tests."
  minutes: 15
  output: "A one-page design brief for a safe customer-facing AI assistant, with launch tests."
links:
  - title: "Airline held liable for its chatbot giving passenger bad advice"
    url: "https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know"
    type: "case"
    source: "BBC"
    free: true
    lastChecked: "2026-11-24"
  - title: "Klarna AI assistant handles two-thirds of customer service chats"
    url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
    type: "case"
    source: "Klarna press release"
    free: true
    lastChecked: "2026-11-24"
  - title: "AI Act: regulatory framework"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    type: "doc"
    source: "European Commission"
    free: true
    lastChecked: "2026-11-24"
checklist:
  - "List what your customer AI must never promise or decide."
  - "Check that customers can reach a human in one or two steps."
  - "Review ten real customer AI conversations each month."
aiPrompts:
  explain: "Explain, for a busy executive, how to deploy customer-facing AI assistants safely: grounding answers in real policies, limiting what they can promise, an easy route to a human, transparency that it's AI, and monitoring. Use the Air Canada chatbot case as a warning. Keep it under 200 words."
  applyToRole: "I'm a {role}. Help me design guardrails for a customer-facing AI assistant in my area: 5 things it should handle, 5 things it must never do, when it hands over to a human, and a monthly review checklist."
quiz:
  - q: "What did the Air Canada chatbot case establish?"
    options:
      - "The company that deploys a chatbot is responsible for what it tells customers"
      - "Chatbots are legally separate from the company"
      - "Customers can't rely on websites"
    answer: 0
    explain: "A Canadian tribunal ordered Air Canada to honour wrong refund advice its chatbot gave. The company owns its AI's answers."
  - q: "What's the most important source for a customer AI's answers?"
    options:
      - "The AI's general knowledge"
      - "Your approved, up-to-date policy and product documents"
      - "Competitors' websites"
    answer: 1
    explain: "Grounding in real policies (Day 6) keeps answers accurate and consistent."
  - q: "What did Klarna do in 2025 after its AI handled most customer chats?"
    options:
      - "Removed all human agents"
      - "Stopped using AI entirely"
      - "Made sure customers can always reach a human"
    answer: 2
    explain: "Even a successful AI deployment works best with people available for complex or sensitive cases."
flashcards:
  - front: "Grounded answers"
    back: "The assistant answers only from approved policies and product information."
  - front: "Guardrails"
    back: "Limits on what the AI can say, promise or do, such as no invented discounts."
  - front: "Human hand-off"
    back: "An easy, quick route from the bot to a person."
  - front: "Transparency"
    back: "Telling customers they're talking to AI, increasingly a legal expectation."
---

## The idea

Customer-facing AI (website chat, support assistants, booking bots) can give customers instant, 24/7 help. Done well, it's a genuine service improvement. Done badly, it frustrates customers, invents answers, and can make promises your company has to honour.

The difference isn't the AI model. It's the **design**: what it answers from, what it can promise, and how easily customers reach a person.

## Why it matters

- **Your company owns the answers.** Courts and regulators treat your chatbot as you.
- **Trust is fragile.** One confidently wrong answer about a refund or price is remembered.
- **Rules are tightening.** The EU AI Act's transparency rules, coming into effect from August 2026, include making people aware when they interact with an AI system. Check what applies in your markets, including India and others.

## How it works

1. **Ground it in real policies.** The assistant answers only from approved, up-to-date documents (Day 6).
2. **Limit what it can promise.** No invented discounts, exceptions, legal or medical advice. For anything outside its scope: "Let me connect you with a colleague."
3. **Make a human easy to reach.** One or two steps, not a maze. Route complaints and vulnerable customers to people.
4. **Be open, and monitor.** Say it's an AI assistant. Review real conversations every month, fix the gaps, and track customer satisfaction, not just cost per chat.

## Real-world example

In 2024, a Canadian tribunal ruled that **Air Canada** had to honour a bereavement refund its website chatbot had wrongly told a customer he could claim. The airline argued the chatbot was responsible for its own information; the tribunal disagreed. The company deploying the bot is responsible for what it says.

In contrast, **Klarna's** assistant handled two-thirds of customer chats in its first month, and in 2025 Klarna moved to make sure customers can always reach a human. Scale and safeguards together.

**The lesson for leaders:** before launching customer AI, write down what it must never do, test it hard, and keep a person one click away.
