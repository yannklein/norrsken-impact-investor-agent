# 0. Before the workshop: accounts and keys

Plan about 30 minutes. Doing this at home means we can spend the whole session building.

## 1. n8n Cloud free trial

1. Go to [n8n.io](https://n8n.io) and click **Get started** to start the free trial.
2. Pick an instance name, for example `yourname`. Your n8n will live at `https://yourname.app.n8n.cloud`.
3. The trial gives you the Pro plan features for **14 days** and 1,000 executions. When it ends, the instance is deleted unless you upgrade, and nothing is charged.

Tip: export your workflows (Workflow menu `...` > Download) before the trial ends if you want to keep them.

## 2. Anthropic API key (Claude for n8n)

n8n talks to Claude through the **API**, which is billed separately from any Claude subscription.

1. Go to [platform.claude.com](https://platform.claude.com) (the Claude Console) and sign up.
2. Open **Billing** and buy a small amount of credit. 5 USD covers far more than the workshop: a full run of 15 investors costs about 0.03 USD.
3. Leave **auto-reload off**. Prepaid credit is then a hard cap: when it runs out, calls stop.
4. Open **API keys**, create a key named `n8n-workshop`, and copy it somewhere safe. You only see it once.

## 3. Google account

You need one Google account for **Google Sheets** (the investor list and the results) and **Gmail** (the drafts). A personal Gmail account works.

Then [make your copy of the workshop Google Sheet](https://docs.google.com/spreadsheets/d/1FUw1UpJiMafm3VGmVjDdInVT5uHBMHgciDh5H6Tz1SY/copy): one click, it lands in your Drive. More in [guide 1](01-google-sheet.md).

## 4. Claude account

Any Claude plan works for connecting n8n as a custom connector, including the free plan (which allows one custom connector). We use it in [guide 3](03-connect-n8n-to-claude.md).

## 5. Your impact card

Write these down in a note. The agent can only match what you make explicit.

| Field | Example (Sobrante) |
|---|---|
| One-liner | We turn unsold food from Barcelona's restaurants and markets into safe, protein-rich animal feed. |
| Problem and beneficiaries | Food surplus goes to landfill and emits methane; farmers depend on imported soy feed. Beneficiaries: farmers, food businesses, the climate. |
| SDGs (2 or 3) | SDG 12.3, SDG 13, SDG 15 |
| Impact KPI with a number | 420 t of food waste diverted in the 2026 pilot |
| Business model and traction | B2B collection fees + feed sales. 38 restaurants, 3 markets, 12 farms buying monthly. |
| Stage and round | Seed, EUR 1.5M |
| Geography | Barcelona, then Spain and Southern Europe |

Also list 5 to 15 investors you are curious about: name, website, country.
