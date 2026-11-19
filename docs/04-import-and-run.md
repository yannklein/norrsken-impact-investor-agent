# 4. Import and run the workflows

Use this if you want the tested versions, or as a fallback during the workshop.

## Import

1. Download the JSON file from [`workflows/`](../workflows) (open it, then **Download raw file**).
2. In n8n: **Create workflow**, then the **`...` menu > Import from File**, and pick the JSON.
3. Open each node with a red warning and select your credential:
   - `Claude`: your **Anthropic** credential.
   - Google Sheets nodes: your **Google Sheets OAuth2** credential, then pick your spreadsheet **Norrsken WS - Impact Investors** in the Document field.
   - Gmail node: your **Gmail OAuth2** credential.
   - `web_search` (discovery only): a **Perplexity** credential.
4. Save.

## Run the research agent

1. Put 3 investors in the `investors` tab for the first test.
2. Click **Execute workflow**. The form opens: keep the Sobrante defaults or paste your own impact card, and submit.
3. Watch the run. Each investor takes 10 to 20 seconds. Open the agent's logs to see which pages Claude read.
4. Check the `matches` tab and your Gmail drafts.

## Reading the results

| Column | Meaning |
|---|---|
| `impact_alignment` | 0 to 10: does their thesis **and** their real portfolio match your problem and SDGs? |
| `business_fit` | 0 to 10: stage, ticket size, geography |
| `overall_score` | 60% impact + 40% business, computed by a formula, not by the AI |
| `impact_washing_flag` | They talk impact, but the portfolio doesn't back it up |
| `reasoning` | Why, plus consistency notes and the agent's confidence |

Read impact and business separately: two funds at 6.8 can have opposite profiles. A low-confidence row usually means the agent couldn't read the site; check it yourself.

## Make it yours

- Your startup: change the form defaults.
- Your investors: edit the `investors` tab.
- Your scoring: change the weights in **Compute Score and LinkedIn Link** and the threshold in **Strong Match?** (also in the `draft_created` field).
- Deeper research: switch the model to Sonnet. It costs more and takes longer.
