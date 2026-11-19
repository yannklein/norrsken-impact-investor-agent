# Impact Investor Research Agent

Workshop material for **Le Wagon x Norrsken: build an AI agent that finds your impact investors** (2 hours, hands-on, no code).

You give the agent your startup's impact profile and a list of investors. For each investor, Claude reads the fund's own website, scores **impact alignment** and **business fit**, checks for impact-washing, and drafts an intro email. A fixed formula (60% impact, 40% business) ranks the funds, results land in a Google Sheet, and strong matches (6.5/10 or more) become **Gmail drafts**. Nothing is ever sent automatically.

The examples use **Sobrante**, a fictional Barcelona startup that turns unsold food into animal feed. Replace it with your own startup at any time.

## What's in this repo

| Folder | What it holds |
|---|---|
| [`workflows/`](workflows) | The three n8n workflows as JSON, ready to import |
| [`prompts/`](prompts) | Every prompt used by the agents, plus the output formats |
| [`docs/`](docs) | Step-by-step guides, from account setup to troubleshooting |

### The three workflows

| File | What it does | When you use it |
|---|---|---|
| `01-mini-investor-scout.json` | One investor website in, one assessment out. One example of each key node. | You build it **by hand** during the workshop. The file is your safety net. |
| `02-impact-investor-research-agent.json` | The full agent: researches every investor in your sheet, one at a time, scores them and creates drafts. | Built live **with Claude through the n8n MCP connector**, then you import or rebuild it. |
| `03-impact-investor-discovery.json` | Optional. Searches the web for new investors, checks each one on its own website, adds new ones to your sheet. | After the workshop. Needs a Perplexity API key. |

## Before the workshop (30 minutes, please do it at home)

Follow [docs/00-before-the-workshop.md](docs/00-before-the-workshop.md). In short:

1. Start an **n8n Cloud free trial** (14 days, no cost if you don't upgrade).
2. Create an **Anthropic API key** on the Claude Console and add a small amount of prepaid credit (5 USD is plenty).
3. Have a **Google account** for Sheets and Gmail, and [make your copy of the workshop Google Sheet](https://docs.google.com/spreadsheets/d/1FUw1UpJiMafm3VGmVjDdInVT5uHBMHgciDh5H6Tz1SY/copy).
4. Have a **Claude account** (the free plan works) for the MCP part.
5. Write down your startup's **impact card**: problem, beneficiaries, 2 or 3 SDGs, one impact KPI with a number, traction, stage, amount raised, geography.

## The guides

1. [Before the workshop: accounts and keys](docs/00-before-the-workshop.md)
2. [Get your own copy of the Google Sheet](docs/01-google-sheet.md)
3. [Build the mini flow by hand](docs/02-build-the-mini-flow.md)
4. [Connect n8n to Claude (MCP) and let Claude build the full agent](docs/03-connect-n8n-to-claude.md)
5. [Import and run the workflows](docs/04-import-and-run.md)
6. [Same job as a Claude skill](docs/05-claude-skill.md)
7. [Cost, human in the loop, legal](docs/06-cost-human-legal.md)
8. [Troubleshooting and lessons learned](docs/07-troubleshooting.md)

## What it costs

Measured on a full run of 15 investors with Claude Haiku 5.5: about **16,000 tokens per investor** and **about 0.03 USD for the whole run**. This is billed on your Anthropic API credit, **not** on a Claude subscription: the two are separate bills. Details in [docs/06-cost-human-legal.md](docs/06-cost-human-legal.md).

## Ground rules baked into the agent

- It only reads the investor's **own public website**, at most 2 pages per fund.
- It never invents names, numbers or portfolio companies: unknown means "not found".
- It treats web page text as data, never as instructions.
- It never reads LinkedIn. You get a LinkedIn **search link** and you check the person yourself.
- It only creates **drafts**. You read, edit and send.

---

Created with ❤️ by Yann Klein for Le Wagon x Norrsken. Practical guidance, not legal advice.
