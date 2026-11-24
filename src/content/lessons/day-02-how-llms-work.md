---
id: "L002"
day: 2
week: 1
module: "w01-foundations"
title: "How large language models think (and why they make things up)"
slug: "how-llms-work"
whyItMatters: "Knowing how these models produce answers tells you when to trust them, when to double-check, and why they sometimes invent facts."
summary: "A large language model (LLM) is a giant prediction engine for text. It is brilliant with what you give it and unreliable on facts it has to recall."
minutes: 5
level: "foundation"
tags: ["basics", "llm", "hallucination"]
roleExamples:
  sales: "Paste the client's annual report into the chat before asking for talking points, rather than trusting the model's memory of the company."
  marketing: "Treat any statistic the AI offers as unverified until you find the original source."
  gm: "Use AI freely for drafting and structuring; require a human check on numbers, names and claims before anything goes external."
  general: "Give the model the facts; ask it for the thinking and the writing."
practice:
  task: "Ask an AI assistant five questions about something you know deeply, such as your company, product or market. Note any errors. Then paste in a page of correct facts and ask the same questions again. Watch how the answers change."
  minutes: 10
  output: "A short note: one error it made from memory, and how the answer improved once you supplied the facts."
video:
  youtubeId: "LPZh9BOjkQs"
  title: "Large Language Models explained briefly"
  source: "3Blue1Brown on YouTube"
  minutes: 8
diagram:
  src: "day-02-context-window"
  alt: "Patterns from training plus your context window combine to produce the answer the model predicts. Your context window is the most reliable input."
checklist:
  - "Before your next AI question about your company or a client, paste in the key facts first."
  - "Add one line to your prompts this week: \"If you are not sure, say so.\""
  - "Note one task where AI was excellent and one where it struggled: your own jagged frontier."
links:
  - title: "Generative AI exists because of the transformer (visual explainer)"
    url: "https://ig.ft.com/generative-ai/"
    type: "doc"
    source: "Financial Times"
    free: true
    lastChecked: "2026-11-24"
  - title: "Navigating the Jagged Technological Frontier"
    url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700"
    type: "case"
    source: "Harvard Business School working paper (with BCG)"
    free: true
    lastChecked: "2026-11-24"
  - title: "Intro to Large Language Models"
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g"
    type: "video"
    source: "Andrej Karpathy on YouTube (1 hr, for the curious)"
    free: true
    lastChecked: "2026-11-24"
quiz:
  - q: "At its core, what does a large language model do?"
    options:
      - "Searches the internet for the best answer"
      - "Predicts what text should come next, based on patterns it learned"
      - "Retrieves stored copies of documents it was trained on"
    answer: 1
    explain: "An LLM is a prediction engine for text. Writing, summarising and reasoning all emerge from that one skill at huge scale."
  - q: "Why do AI hallucinations happen?"
    options:
      - "The model aims for plausible text, so it fills gaps with confident guesses"
      - "Someone programmed it to make things up"
      - "It only happens when the internet connection drops"
    answer: 0
    explain: "Plausible isn't the same as true. When the right fact isn't in its patterns or your context, a plausible one fills the gap."
  - q: "What's the most reliable way to get accurate answers about your own company?"
    options:
      - "Ask the question more politely"
      - "Use the longest possible question"
      - "Paste the relevant facts or documents into the conversation first"
    answer: 2
    explain: "The context window is the model's working memory. Give it the facts and it reasons over them instead of guessing."
flashcards:
  - front: "LLM"
    back: "Large language model: the engine inside tools like Claude, ChatGPT and Gemini that predicts and generates text."
  - front: "Hallucination"
    back: "A fluent, confident answer that is wrong or made up, caused by the model filling gaps with plausible text."
  - front: "Context window"
    back: "The model's working memory for one conversation: everything you type or paste in."
  - front: "Jagged frontier"
    back: "AI is excellent at some tasks and quietly poor at others that look just as easy. Learn where the edge is for your work."
---

## The idea

A large language model, or **LLM**, is the engine inside tools like Claude, ChatGPT and Gemini. At heart it does one thing: given some text, it predicts what text should come next, extremely well.

That one skill, scaled up, produces writing, summarising, translating and reasoning that feels remarkably human.

## Why it matters

Understanding the engine tells you how to drive it:

- **Strong:** working with material you provide, such as summarising, rewriting, comparing, structuring and drafting.
- **Weak:** recalling exact facts, figures, quotes and recent events from memory.
- **Risky:** it rarely says "I don't know". When it lacks the facts, it can produce a fluent, confident and wrong answer. This is called a **hallucination**.

## How it works

1. **Training.** The model reads a huge library of text and learns patterns: grammar, facts, styles, how arguments flow. It doesn't store pages; it stores *patterns*.
2. **Tuning.** People then rate its answers to teach it to be helpful, follow instructions and avoid harm.
3. **Your conversation.** Everything you type, plus any documents you paste in, goes into its *context window*: its working memory for this chat.
4. **Prediction.** It writes the answer one small chunk at a time, each time choosing what most plausibly comes next.

Why hallucinations happen: the model optimises for *plausible*, not *true*. If the right fact isn't in its patterns or your context, a plausible-sounding one fills the gap. **The fix is to give it the facts in the context window.**

## Real-world example

In a 2023 field study by Harvard Business School and BCG, 758 consultants were given tasks with and without GPT-4. On tasks the AI handled well, AI users finished 12% more tasks, 25% faster, at over 40% higher quality. But on one task outside the AI's strengths, AI users were **19 percentage points less likely** to get the right answer than those working alone.

The researchers called this the **"jagged frontier"**: AI is excellent at some tasks and quietly poor at others that look just as easy. Your job is learning where that edge lies for your work.
