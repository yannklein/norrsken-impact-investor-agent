# Prompts

| File | Used in | Where to paste it |
|---|---|---|
| `research-agent-system.md` | Full research agent | AI Agent > Options > System Message |
| `research-agent-user.md` | Full research agent | AI Agent > Prompt (Define below). Starts with `=` because it is an n8n expression. |
| `research-output-format.json` | Full research agent | Structured Output Parser > JSON example |
| `mini-agent-system.md` | Mini flow | AI Agent > Options > System Message |
| `mini-agent-user.md` | Mini flow | AI Agent > Prompt |
| `mini-output-format.json` | Mini flow | Structured Output Parser > JSON example |
| `discovery-agent-system.md` | Discovery (optional) | AI Agent > Options > System Message |
| `discovery-agent-user.md` | Discovery (optional) | AI Agent > Prompt |
| `discovery-output-format.json` | Discovery (optional) | Structured Output Parser > JSON example |
| `discovery-dedupe.js` | Discovery (optional) | Code node "Keep Only New Investors" |
| `mcp-build-prompt.md` | Claude + n8n MCP | A Claude chat with the n8n connector on |
| `skill-prompt.md` | Claude skill | A Claude chat |

What makes these prompts work:

- **A job description, not a question:** role, tools, limits, how to score, output format.
- **Hard limits in numbers:** "at most 2 fetches", "max 150 words". Vague limits get ignored.
- **"Unknown means not found":** gives the model a safe way out instead of inventing.
- **Page text is data:** protects against instructions hidden in websites.
- **The AI scores, a formula decides:** the 60/40 overall score is computed in n8n, not by the model.
