# 2. Build the mini flow by hand

Goal: one investor website in, one assessment out, with **one example of each key node** of the full agent. If you get stuck, import [`workflows/01-mini-investor-scout.json`](../workflows/01-mini-investor-scout.json) and compare.

```
Form ──► AI Agent ──► Set (LinkedIn link) ──┬──► Google Sheets (save)
           │  │  │                          └──► If (7+/10) ──► Gmail draft
       Claude │ Output parser
        fetch_webpage
```

## Credentials first

In n8n, open **Overview > Credentials > Create credential** and add:

| Credential | How |
|---|---|
| **Anthropic** | Paste your API key from the Claude Console. |
| **Google Sheets OAuth2** | Click **Sign in with Google** and allow access. |
| **Gmail OAuth2** | Click **Sign in with Google** and allow access. |

## The nodes

Create a new workflow named `Mini Investor Scout`, then add these nodes in order. Keep the node names exactly as written: expressions refer to them.

### 1. Investor Form (n8n Form Trigger)
- Form title: `Research one investor`
- Field 1: label `Investor website`, field name `website`, required.
- Field 2: label `Your startup`, type Textarea, field name `startup`, required. Paste your impact card as the default value.

### 2. Investor Scout (AI Agent)
- Source for prompt: **Define below**. Prompt: copy [`prompts/mini-agent-user.md`](../prompts/mini-agent-user.md).
- Turn on **Require Specific Output Format**.
- Options > **System Message**: copy [`prompts/mini-agent-system.md`](../prompts/mini-agent-system.md).
- Options > **Max Iterations**: `5`.

Under the agent, plug three sub-nodes:

**Chat Model: Anthropic Chat Model**, renamed `Claude`
- Model: `claude-haiku-5-5` (cheap and fast). Options > Maximum Number of Tokens: `8192`.

**Tool: HTTP Request Tool**, renamed `fetch_webpage`
- Description: `Reads the text of one public web page.`
- URL: click the sparkle icon so the AI fills it (`$fromAI('url', ...)`).
- **Optimize Response**: on. Expected response type: HTML. Only content: on. Elements to omit: `script, style, svg, noscript, iframe, img, nav, footer`. Truncate response: on, max length `4000`.
- Options > Response > **Never Error**: on. Settings > On Error: **Continue**.

**Output Parser: Structured Output Parser**, renamed `Answer Format`
- Schema type: Generate from JSON example. Paste [`prompts/mini-output-format.json`](../prompts/mini-output-format.json).

### 3. Add LinkedIn Link (Edit Fields / Set)
Add these fields (all from `$json.output`): `investor_name`, `website` (from the form), `impact_thesis`, `impact_alignment` (number), `key_partner`, `linkedin_search_url`, `email_subject`, `email_body`. For the LinkedIn search link, use this expression:

```
{{ ($json.output.key_partner && !$json.output.key_partner.toLowerCase().startsWith("not found")) ? "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent($json.output.key_partner.split(",")[0] + " " + $json.output.investor_name) : "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent($json.output.investor_name + " partner") }}
```

### 4. Save Result (Google Sheets > Append row in sheet)
- Document: your spreadsheet. Sheet: `mini_results`. Mapping: **Map Automatically**.

### 5. Good Fit? (If)
- Condition: `{{ $json.impact_alignment }}` is greater than or equal to `7`.

### 6. Create Gmail Draft (Gmail > Draft > Create), on the **true** branch
- Subject: `{{ $json.email_subject }}`
- Message: `{{ $json.email_body }}` plus a review line, for example `REVIEW BEFORE SENDING: impact {{ $json.impact_alignment }}/10. Check the partner: {{ $json.linkedin_search_url }}`

## Test it

Click **Execute workflow**, fill the form with one investor website, and watch the agent logs: you will see each `fetch_webpage` call and the URL Claude chose. Then check the `mini_results` tab and your Gmail drafts.
