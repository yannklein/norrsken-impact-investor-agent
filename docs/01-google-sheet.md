# 1. Get your own copy of the Google Sheet

All three workflows read and write one spreadsheet with three tabs: `investors`, `matches` and `mini_results`.

**[Click here to make your copy](https://docs.google.com/spreadsheets/d/1FUw1UpJiMafm3VGmVjDdInVT5uHBMHgciDh5H6Tz1SY/copy)**, then click **Make a copy**. The copy lands in your own Google Drive and you can edit it freely.

You can also [view the original](https://docs.google.com/spreadsheets/d/1FUw1UpJiMafm3VGmVjDdInVT5uHBMHgciDh5H6Tz1SY/edit?usp=sharing) first. It is read-only: always work in your copy.

Keep the tab names and the header names exactly as they are: the workflows look them up by name.

## What's in it

| Tab | Content |
|---|---|
| `investors` | 15 sample impact investors for Sobrante. The research agent reads this list. |
| `matches` | Empty. The research agent writes one row per investor here. |
| `mini_results` | The mini flow writes one row per run here. |

## Use your own investors

Replace the sample rows in **investors** with your own. Keep the header row:

| Column | Required | Example |
|---|---|---|
| `investor_name` | yes | Rubio Impact Ventures |
| `website` | yes, starting with `https://` | https://rubio.vc |
| `hq_country` | helpful | Netherlands |
| `source` | no | curated or discovered |
| `discovery_note` | no | Filled by the discovery workflow |

Start with 3 to 5 investors while you test. Each investor costs a fraction of a cent, but a short list makes runs fast.

In n8n, the Google Sheets nodes ask you to pick a **Document**: choose your copy, not the original.
