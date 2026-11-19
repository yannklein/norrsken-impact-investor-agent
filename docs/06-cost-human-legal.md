# 6. Cost, human in the loop, legal

## Cost

Measured on 19 November 2026, full run of 15 investors with Claude Haiku 5.5:

| | |
|---|---|
| Model calls | 40 |
| Page reads | 31 |
| Tokens | 211,757 input + 25,678 output, about 16,000 per investor |
| Cost | about 0.034 USD (Haiku 5.5: 0.10 USD per million input tokens, 0.50 USD per million output tokens) |
| Time | 2.5 minutes |

Prices change: check the [Claude pricing page](https://platform.claude.com/docs/en/about-claude/pricing).

**This is a separate bill from your Claude subscription.** A Claude plan covers the Claude apps. n8n calls Claude through an API key, billed per token on prepaid API credit in the Claude Console. Using a subscription login inside other tools is against Anthropic's consumer terms.

**The first run of this agent, before we capped it, passed 1.7 million tokens** (8 agent steps, 8,000-character pages, 2 investors in parallel). Five levers to cut cost:

1. A smaller model for simple tasks (Haiku before Sonnet).
2. Strip pages to text before the AI reads them (Optimize Response, omit nav and footer).
3. Cap the number of tool calls (max iterations, and "at most 2 fetches" in the prompt).
4. Filter with rules before calling AI.
5. Measure one run on 3 items, then multiply.

## Human in the loop

| Step | What the AI does | Example |
|---|---|---|
| 1. Label | Sort, tag, classify | "This email is from an investor" |
| 2. Recommend | Score and rank | "These 4 funds fit best" |
| **3. Draft (this workflow)** | Prepare, you send | Gmail drafts |
| 4. Act on approval | Acts after your click | "Send?" button |
| 5. Act alone | No human | Only for reversible, low-stakes tasks |

Anything sent in your name, about money, people or legal matters stays a draft. Overclaiming impact to an impact investor is a credibility killer: check every number in every draft.

## Four legal reflexes

| Risk | In this workflow | Rule of thumb |
|---|---|---|
| Scraping | Only funds' public websites; LinkedIn via a search link you click | Respect terms of service; prefer APIs |
| Personal data | Partner names and work emails are GDPR data | Keep only what you need; honour opt-outs |
| Emails in your name | Gmail drafts, never sent automatically | You are liable for what you send |
| High-risk uses | Adapting it to hiring? | EU AI Act: recruitment AI is high-risk; a human decides |

Also: web pages can hide instructions aimed at AI (prompt injection). The system prompt tells the agent to treat page text as data, and the agent has no tool that can send or delete anything.

Practical guidance, not legal advice. Check your own case with a lawyer.
