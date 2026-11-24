---
id: "L037"
day: 37
week: 8
module: "w08-risk"
title: "Privacy and data protection when using AI"
slug: "privacy-data-protection"
whyItMatters: "AI runs on data, often personal data about customers and staff. India's new data rules and laws like the GDPR make getting this right a leadership duty."
summary: "Use only the personal data you need, keep it in approved tools, anonymise when unsure, and be transparent with people. India's DPDP Act is phasing in through 2027."
minutes: 5
level: "practitioner"
tags: ["privacy", "data-protection", "dpdp", "gdpr", "risk"]
roleExamples:
  sales: "Don't paste customer contact lists or deal details into unapproved AI tools; use your company's approved assistant or anonymise first."
  marketing: "Before using AI to personalise campaigns, confirm you have valid consent for that use of customers' data and that your privacy notice covers it."
  gm: "Ask your legal or compliance team how India's DPDP Rules timeline affects your AI projects, especially consent notices and customer data rights from May 2027."
  general: "For a consumer business, make sure any AI chatbot that collects personal details explains clearly what it collects and why."
practice:
  task: "List three AI uses in your team that involve personal data (customers, employees or prospects). For each, answer: What personal data is used? Is it the minimum needed? Is the tool approved for it? Do people know their data is used this way? Ask an approved assistant to spot gaps, then share your list with your legal or compliance contact."
  minutes: 15
  output: "A short privacy check of three AI uses in your team, ready to discuss with legal or compliance."
links:
  - title: "India's Digital Personal Data Protection framework comes into effect"
    url: "https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/"
    type: "doc"
    source: "AZB & Partners (law firm update)"
    free: true
    lastChecked: "2026-11-24"
  - title: "Digital Personal Data Protection Act, 2023"
    url: "https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Act,_2023"
    type: "doc"
    source: "Wikipedia"
    free: true
    lastChecked: "2026-11-24"
  - title: "What is GDPR, the EU's data protection law?"
    url: "https://gdpr.eu/what-is-gdpr/"
    type: "doc"
    source: "GDPR.eu"
    free: true
    lastChecked: "2026-11-24"
  - title: "Samsung bans generative AI tools after internal data leak"
    url: "https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/"
    type: "case"
    source: "TechCrunch"
    free: true
    lastChecked: "2026-11-24"
diagram:
  src: "day-37-privacy"
  alt: "Four steps: use less personal data, use approved tools, anonymise when unsure, and be transparent with people about how their data is used."
checklist:
  - "Check three AI uses in your team for personal data and approval."
  - "Ask legal or compliance how the DPDP Rules timeline affects your AI projects."
  - "Remove personal details before using any AI tool that isn't approved for them."
aiPrompts:
  explain: "Explain, for a busy executive in India, how data protection applies to AI use: India's DPDP Act 2023 and the phased DPDP Rules notified in November 2025, the EU's GDPR as a global reference, and four practical habits: minimise, use approved tools, anonymise, be transparent. Note this is general information, not legal advice. Keep it under 200 words."
  applyToRole: "I'm a {role}. Ask me which AI uses in my work involve personal data. For each, help me check: what data, is it the minimum, is the tool approved, do people know, and what question I should take to my legal or compliance team."
quiz:
  - q: "When do the main obligations of India's DPDP framework (notice, consent, data principal rights) take effect?"
    options:
      - "13 May 2027, the final phase of the rollout"
      - "They took effect in 2020"
      - "There is no date; they're voluntary"
    answer: 0
    explain: "The DPDP Rules notified in November 2025 phase in over 18 months, with the substantive obligations from 13 May 2027."
  - q: "What's the safest default when you're unsure whether an AI tool may handle personal data?"
    options:
      - "Paste it in and delete the chat later"
      - "Remove or replace personal details, or use an approved tool"
      - "Ask the AI if it's safe"
    answer: 1
    explain: "Anonymise or use an approved tool (Day 5). When in doubt, check with your legal or compliance team."
  - q: "Why does the EU's GDPR matter to an Indian business?"
    options:
      - "It doesn't, ever"
      - "It replaces India's law"
      - "It can apply when you handle personal data of people in the EU, and it's a common global reference point"
    answer: 2
    explain: "Many Indian businesses serve EU customers. Your legal team can confirm which laws apply to you."
flashcards:
  - front: "DPDP Act 2023"
    back: "India's Digital Personal Data Protection Act, passed in August 2023."
  - front: "DPDP Rules 2025"
    back: "Notified November 2025; phased rollout, with the main obligations from 13 May 2027."
  - front: "Data minimisation"
    back: "Use only the personal data a task really needs."
  - front: "GDPR"
    back: "The EU's data protection law, a global reference point that can apply to Indian businesses serving EU residents."
---

## The idea

AI is only as safe as the data you feed it. Customer names, phone numbers, purchase histories, employee records: much of what makes AI useful is **personal data**, and laws increasingly govern how it's used.

For Indian businesses, the big change is the **Digital Personal Data Protection (DPDP) Act, 2023**, now being phased in. Globally, the **EU's GDPR** remains the best-known reference point.

*This lesson is general information, not legal advice. Check with your legal or compliance team.*

## Why it matters

- **India's rules are arriving.** The DPDP Rules were notified in **November 2025**, with an **18-month phased rollout**: the Data Protection Board first, consent manager provisions from **13 November 2026**, and the main obligations (notice and consent standards, duties of businesses, children's data, people's rights over their data) from **13 May 2027**.
- **AI multiplies data use.** Pasting customer lists into chat tools, or using customer data to train or personalise, raises consent and security questions.
- **Leaks are real.** In 2023, Samsung banned staff from using generative AI tools after engineers pasted internal code into ChatGPT (Day 5).

## How it works

Four habits that hold up under most data protection laws:

1. **Use less personal data.** Only what the task really needs. Often a summary or anonymised version works just as well.
2. **Use approved tools.** Business plans with proper terms and admin controls, not personal accounts.
3. **Anonymise when unsure.** Replace names, phone numbers and IDs with placeholders before using a tool not approved for that data.
4. **Be transparent.** Tell people how their data is used, including by AI. India's DPDP Rules require notices that are clear and itemised.

**Serving customers abroad?** If you handle personal data of people in the EU, the GDPR may apply too. Your legal team can map which rules cover which data.

## Real-world example

*An illustrative scenario.* A Mumbai-based consumer lending app wants to use AI to personalise payment reminders. The marketing head's first plan is to upload the full customer database to a new AI tool.

Her compliance colleague suggests a different path: use only the fields needed (name, due date, amount), run it in the company's approved AI environment, and update the privacy notice to explain AI-personalised reminders, ahead of the DPDP Rules' main obligations in May 2027. The campaign launches two weeks later, with far less risk.

**The lesson for leaders:** treat personal data in AI like cash: use only what you need, keep it in safe places, and be able to explain where it went.
