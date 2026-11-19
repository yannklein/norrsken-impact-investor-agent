# 3. Connect n8n to Claude (MCP) and let Claude build the full agent

The **n8n MCP server** lets Claude see, build and run workflows in your n8n. You connect it once, then you can ask Claude in plain language: "build me a workflow that...", "run the investor research for Sobrante", "why did this execution fail?".

## Part A: turn on MCP in n8n (2 minutes)

1. In n8n, open **Settings > Instance-level MCP**.
2. Click **Enable MCP access**. You need to be the instance owner, which you are on your own trial.
3. Under **Connect a client**, copy the **Server URL**. It ends in `/mcp-server/http`, for example `https://yourname.app.n8n.cloud/mcp-server/http`.

## Part B: add n8n as a connector in Claude (3 minutes)

1. In Claude (web or desktop app), open **Customize > Connectors** and choose **Add custom connector**.
2. Name: `n8n`. URL: paste the Server URL. Click **Add**.
3. Click **Connect**. Claude sends you to your n8n: approve the access request.
4. In a new chat, open the tools menu and check that the **n8n** connector is switched on.

Shortcut: in n8n's **Connect a client** panel you can pick Claude.ai and use the one-click setup instead.

## Part C: let Claude see your workflows

By default Claude can't run or change existing workflows. To allow one, open it in n8n, then **Workflow menu `...` > Settings > Available in MCP**. Workflows Claude creates through MCP are available automatically.

## Part D: ask Claude to build the full agent

Paste the prompt from [`prompts/mcp-build-prompt.md`](../prompts/mcp-build-prompt.md) into a new Claude chat with the n8n connector on. Replace the spreadsheet name if yours is different.

Claude will read the n8n SDK reference, build the workflow, validate it and save it in your n8n. Then:

1. Open the new workflow in n8n.
2. Select your **Anthropic**, **Google Sheets** and **Gmail** credentials on the nodes that ask for them.
3. Compare it with the mini flow you built by hand: same node types, plus a **Loop**, a **Filter**, a **score formula** and an **If**.
4. Run it on 3 investors first.

If Claude's version misbehaves, import [`workflows/02-impact-investor-research-agent.json`](../workflows/02-impact-investor-research-agent.json): it is the tested reference.

## Useful things to ask Claude afterwards

- "Run the research workflow with my impact card and show me the 4 best matches from the matches tab."
- "Why did the last execution fail?"
- "Add a column with the fund's ticket size to the results."
- "Lower the draft threshold to 6 and explain what changes."

Your Claude plan covers this chat. The agent **inside** n8n still uses your Anthropic API key, billed on your API credit.
