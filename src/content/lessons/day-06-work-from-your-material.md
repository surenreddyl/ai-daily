---
id: "L006"
day: 6
week: 2
module: "w02-prompting"
title: "Give it your material: working from documents, notes and data"
slug: "work-from-your-material"
whyItMatters: "AI answers from memory are generic and sometimes wrong. Answers from your own documents are specific, checkable and far more useful."
summary: "Paste or upload your material first, then ask the AI to work only from it and to show where each point came from. This is called grounding."
minutes: 5
level: "foundation"
tags: ["prompting", "documents", "grounding"]
roleExamples:
  sales: "Upload the client's latest annual report and ask for their top three priorities, each with the page it came from."
  marketing: "Paste 50 customer reviews and ask for the five most common themes, with two direct quotes for each."
  gm: "Upload the monthly ops report and ask: \"Using only this report, what are the three biggest risks and what evidence supports each?\""
  general: "Give it the facts first; ask it for the thinking second; ask it to show its sources third."
practice:
  task: "Take a document you need to understand this week, such as a report, contract summary or meeting transcript (follow your Day 5 traffic light). Upload or paste it into an approved assistant. Ask: \"Using only this document, summarise the five most important points. For each, quote the sentence it's based on. If something isn't in the document, say so.\" Spot-check two quotes against the original."
  minutes: 15
  output: "A five-point summary of a real document, with quotes you've verified."
links:
  - title: "Morgan Stanley uses AI evals to shape the future of financial services"
    url: "https://openai.com/index/morgan-stanley/"
    type: "case"
    source: "OpenAI customer story"
    free: true
    lastChecked: "2026-11-24"
  - title: "Uploading files and audio to ChatGPT"
    url: "https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt"
    type: "doc"
    source: "OpenAI Help Center"
    free: true
    lastChecked: "2026-11-24"
  - title: "Prompting best practices"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    type: "doc"
    source: "Anthropic"
    free: true
    lastChecked: "2026-11-24"
  - title: "Google's notebook tool for working from your own sources"
    url: "https://notebooklm.google/"
    type: "tool"
    source: "Google"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-06-grounding"
  alt: "Four steps: gather your material, paste or upload it first, ask your question using only that material, and get a grounded answer that quotes its sources."
checklist:
  - "For your next AI question about a document, paste or upload the document first."
  - "Add \"Using only this material\" and \"quote your source\" to one prompt this week."
  - "Spot-check two AI quotes against the original document."
quiz:
  - q: "What does \"grounding\" an AI answer mean?"
    options:
      - "Asking the AI to be more careful"
      - "Giving it your own material and asking it to answer only from that"
      - "Using the most expensive version of the tool"
    answer: 1
    explain: "Grounding puts the facts in the context window, so the AI reasons over your material instead of guessing from memory."
  - q: "Which instruction best helps you check an AI summary of a long report?"
    options:
      - "\"Make it sound professional.\""
      - "\"Keep it short.\""
      - "\"For each point, quote the sentence it's based on.\""
    answer: 2
    explain: "Quotes let you verify each point in seconds. If a quote isn't in the document, you've caught an error."
  - q: "Morgan Stanley had experts grade its advisor assistant's answers before rollout. Why does that matter?"
    options:
      - "It showed the answers met their quality bar on real questions before advisors relied on them"
      - "It was required to switch the AI on"
      - "It made the AI respond faster"
    answer: 0
    explain: "Grounding improves answers; testing on real questions proves it. Serious AI deployments do both."
flashcards:
  - front: "Grounding"
    back: "Giving AI your own source material and asking it to answer only from that material."
  - front: "\"Using only this…\""
    back: "A phrase that keeps the AI working from your material instead of its general memory."
  - front: "Ask for quotes"
    back: "Request the exact sentence behind each point so you can verify it quickly."
  - front: "\"If it's not there, say so\""
    back: "Gives the AI permission to admit a gap instead of filling it with a guess."
---

## The idea

On Day 2 you saw that an AI model is most reliable when the facts are in its **context window**, the material in front of it right now. So the most powerful prompting habit is simple: **give it your material first, then ask.**

This is called **grounding**. Instead of "What are Acme's priorities?" (answered from patchy memory), you upload Acme's annual report and ask, "Using only this report, what are Acme's priorities?"

## Why it matters

- **Accuracy jumps.** The AI summarises and reasons over real facts instead of guessing.
- **Answers get specific.** Your numbers, your customers, your language, not generic advice.
- **You can check it.** When answers point back to a source, verification takes seconds.

## How it works

1. **Gather the material.** Reports, notes, transcripts, spreadsheets, emails. Follow your Day 5 rules on what may go into which tool.
2. **Put it in first.** Paste text, or upload files if your assistant supports it. Most now handle PDFs, documents and spreadsheets.
3. **Ask, with boundaries.** "Using only the material above…" keeps it on your facts. Add: "If the answer isn't in the material, say so."
4. **Ask for receipts.** "Quote the sentence each point is based on" or "give the page or section". Then spot-check one or two.

**Tip:** for very long or many documents, say what matters: "Focus on the risks section and the financial tables."

## Real-world example

**Morgan Stanley** built an assistant for its wealth-management advisors on OpenAI's models. It answers questions from the firm's own library of research, procedures and guidance, rather than from the AI's general knowledge.

Before rolling it out, the firm ran **evaluations**: advisors and prompt engineers graded the AI's answers on real questions for accuracy, and the team refined the system until it met their bar. According to OpenAI's customer story, over 98% of advisor teams now actively use the assistant.

**The lesson for leaders:** grounding makes AI useful on your business, and testing on real questions makes it trustworthy. You can apply the same two ideas in a single chat today.
