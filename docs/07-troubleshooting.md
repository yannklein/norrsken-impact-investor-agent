# 7. Troubleshooting and lessons learned

Every problem below happened while building this agent.

| Symptom | Cause | Fix |
|---|---|---|
| A run uses hundreds of thousands of tokens and doesn't stop | The agent loops: no cap on steps, long pages resent at every step | Max iterations 5, "at most 2 fetches" in the prompt, pages cut at 4,000 characters. Stop the run with the square button. |
| The agent reads the wrong fund's website ("my first fetch went to another investor by mistake") | Several investors researched at the same time inside one AI Agent node | Put a **Loop Over Items** (batch size 1) before the agent so it gets one investor at a time |
| "Max iterations reached" | The agent needed more steps, often after reading the wrong pages | Fix the loop first; keep max iterations at 5 |
| `investor_name` and `website` are empty in the results | After a loop, `$("Load Investor List").item` can't find the matching row | Ask the agent to copy the name and website into its answer, and read them from `$json.output` |
| Scores of 0 and 0 with confidence "low" | The site blocks bots (Cloudflare "Just a moment...") or the agent read only a menu | Check the fund yourself. Omitting `nav, footer` helps with big menus. |
| One call suddenly uses 40,000 tokens | An error page (404) was returned untruncated | HTTP Request Tool > Options > Response > **Never Error**: error pages then go through the same 4,000-character cut |
| Retrying a failed agent re-runs everything | "Retry On Fail" on the agent node re-runs all items | Keep retry off; use On Error: continue plus the Filter node |
| Google Sheets: "The caller does not have permission" | The credential can't open the file (common with service accounts) | Use Google Sheets OAuth2, or share the sheet with the service account's email as Editor |
| No Gmail drafts | No investor reached 6.5 | Normal: read impact and business separately, add better-fitting funds, or lower the threshold knowingly |
| The draft mentions a portfolio company that doesn't exist | The model invented it | The "never invent" rule reduces this; you still check every draft |

## Discovery workflow notes

- It needs a **Perplexity** API key for the `web_search` tool (Perplexity Search API, about 5 USD per 1,000 searches).
- It allows up to 4 searches and 10 page reads per run. Every candidate must be confirmed on its own website before it is added.
- New funds are added with `source = discovered`. Run the research workflow afterwards to qualify them.
