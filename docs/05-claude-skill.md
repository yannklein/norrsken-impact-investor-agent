# 5. Same job as a Claude skill

A **skill** is a saved set of instructions in the Claude app. No nodes and no credentials: you describe the job once, then ask for it in a chat.

To create it, paste the prompt from [`prompts/skill-prompt.md`](../prompts/skill-prompt.md) into Claude. Claude drafts the skill, tests it on one fund and offers to save it. After that, ask: "Research these 5 funds for my startup" with a list of names and websites.

## Skill or n8n workflow?

| | Claude skill | n8n workflow |
|---|---|---|
| Setup | Minutes, in plain language | An hour or two: nodes, keys, tests |
| Runs when | You ask, in a chat | On a form, a schedule or a webhook, unattended |
| Research | Full web search, even when a site blocks bots | Only the tools you give it |
| Scoring | The AI applies your formula, usually | A fixed formula in code, every time |
| Output | A chat or a sheet, format can drift | Same columns every run, wired to Gmail |
| Cost | Included in your Claude plan, within its limits | API: about 0.03 USD for 15 investors |

Pick a skill to explore and for one-off research. Pick n8n when it must run every week, without you.

**Best of both:** connect n8n to Claude with the MCP connector ([guide 3](03-connect-n8n-to-claude.md)). You ask in plain language, Claude runs the workflow and explains the results, and n8n keeps the fixed rules.

## About LinkedIn

The skill only **opens a LinkedIn search tab** for you. LinkedIn's terms forbid automated reading of its pages, whatever tool does it, and the account at risk is yours. Keep the looking, the clicking and the messaging human.
