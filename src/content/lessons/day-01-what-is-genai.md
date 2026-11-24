---
id: "L001"
day: 1
week: 1
module: "w01-foundations"
title: "What generative AI actually is"
slug: "what-is-generative-ai"
whyItMatters: "Every AI tool your team is being pitched rests on this one idea. Understand it and you can judge claims, risks and value yourself."
summary: "Generative AI creates new text, images or code by learning patterns from vast numbers of examples. It predicts plausible content; it does not look facts up."
minutes: 5
level: "foundation"
tags: ["basics", "generative-ai"]
roleExamples:
  sales: "Draft a tailored follow-up email from your call notes in under a minute."
  marketing: "Produce ten headline variations for an A/B test, then polish the best two."
  gm: "Turn a 30-page board pack into a one-page brief of decisions and risks."
  general: "Summarise a long email thread into what was decided and who owes what."
practice:
  task: "Open a free AI assistant (Claude, ChatGPT or Gemini). Paste a long email thread you are part of, with anything confidential removed, and ask: \"Summarise this in 5 bullets: decisions made, open questions, and who owns each next step.\" Compare the result with your own reading."
  minutes: 10
  output: "A 5-bullet summary, plus one note on what the AI got right and one thing it missed."
links:
  - title: "Generative AI for Everyone"
    url: "https://www.coursera.org/learn/generative-ai-for-everyone"
    type: "course"
    source: "DeepLearning.AI (Andrew Ng) on Coursera"
    free: true
    lastChecked: "2026-11-24"
  - title: "Elements of AI: a free introduction for non-experts"
    url: "https://www.elementsofai.com/"
    type: "course"
    source: "University of Helsinki & MinnaLearn"
    free: true
    lastChecked: "2026-11-24"
  - title: "Klarna AI assistant handles two-thirds of customer service chats"
    url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
    type: "case"
    source: "Klarna press release"
    free: true
    lastChecked: "2026-11-24"
video:
  youtubeId: "2IK3DFHRFfw"
  title: "Generative AI in a Nutshell"
  source: "Henrik Kniberg on YouTube"
  minutes: 18
diagram:
  src: "day-01-genai-flow"
  alt: "Four steps in a column: the model learns from examples, gets your prompt, predicts the answer piece by piece, and then you review and decide."
checklist:
  - "Use an AI assistant for one real task this week, such as summarising a thread or drafting an email."
  - "Spot one confident statement in an AI answer and check it against a source."
  - "Tell one colleague what generative AI is in one sentence."
quiz:
  - q: "What makes generative AI different from older, traditional AI?"
    options:
      - "It creates new content, such as text or images, rather than only scoring or sorting existing data"
      - "It only works with numbers and spreadsheets"
      - "It always looks up verified facts in a database"
    answer: 0
    explain: "Traditional AI answers narrow questions (fraud or not?). Generative AI produces something new: a draft, a summary, an image."
  - q: "A generative AI tool gives you a confident, well-written answer. What should you assume?"
    options:
      - "It's correct, because it sounds authoritative"
      - "It's a draft: plausible, but facts need checking"
      - "It came from a verified source"
    answer: 1
    explain: "It predicts plausible content. Confidence of tone says nothing about accuracy, so treat outputs as drafts you review."
  - q: "What's the main lesson for leaders from Klarna's AI assistant?"
    options:
      - "AI can fully replace customer service with no oversight"
      - "AI pilots rarely produce measurable results"
      - "Efficiency gains can be large, but customer experience still needs human design and a route to a person"
    answer: 2
    explain: "Klarna reported big efficiency gains, then also committed to keeping a human option. Value and quality go together."
flashcards:
  - front: "Generative AI"
    back: "AI that creates new content (text, images, audio, code) by learning patterns from large numbers of examples."
  - front: "Prompt"
    back: "The instruction and context you give an AI tool to tell it what you want."
  - front: "Prediction, not lookup"
    back: "Generative AI writes the most plausible next words. It doesn't check facts unless it's connected to a source."
  - front: "Human in the loop"
    back: "A person reviews and decides before AI output is used, especially for anything external or high-stakes."
---

## The idea

Generative AI is software that **creates** something new, such as a paragraph, an image, a summary or a piece of code, instead of only sorting or scoring what already exists.

Older AI answered narrow questions: *Is this transaction fraud? Which lead is most likely to buy?* Generative AI handles open requests: *Write the follow-up email. Draft the campaign brief. Explain this contract clause in plain English.*

## Why it matters

- **It works in language**, the medium most business work happens in: emails, proposals, reports and meetings.
- **Anyone can use it.** You instruct it in plain English. No code, no data team.
- **It is cheap to try.** The free versions of the major assistants are good enough to test real work today.

The catch: it can sound confident and still be wrong. Knowing *why* (that's Day 2) separates good users from risky ones.

## How it works

1. **It learns from examples.** The model is trained on a vast amount of text (or images, audio, code) and learns the patterns of which words, ideas and structures tend to go together.
2. **You give it a request.** This is your *prompt*: an instruction plus any context you add.
3. **It predicts, piece by piece.** It writes the most likely next word, then the next, building an answer that fits both what it learned and what you gave it.
4. **You review.** The output is a draft, not a verdict. You check facts, adjust tone and decide.

**Key point:** it *predicts* plausible content. It does not look facts up, unless the tool is connected to a source such as web search or your company files.

## Real-world example

In February 2024 the payments company **Klarna** reported that its AI customer-service assistant handled two-thirds of its customer chats in its first month, about 2.3 million conversations. Klarna estimated that was the work of 700 full-time agents. In 2025 Klarna also said it would make sure customers can always reach a human.

**The lesson for leaders:** big efficiency gains are real, but the quality of the customer experience still needs human design and oversight.
