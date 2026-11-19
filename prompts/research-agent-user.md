=Research this investor and assess how well it fits the startup below.

INVESTOR (copy this name and website exactly into investor_name and website)
Name: {{ $json.investor_name }}
Website: {{ $json.website }}
HQ country: {{ $json.hq_country }}

STARTUP IMPACT PROFILE
Name: {{ $("Impact Profile Form").first().json.startup_name }}
Founder: {{ $("Impact Profile Form").first().json.founder_name }}
One-liner: {{ $("Impact Profile Form").first().json.one_liner }}
Problem and beneficiaries: {{ $("Impact Profile Form").first().json.problem_beneficiaries }}
SDGs: {{ $("Impact Profile Form").first().json.sdgs }}
Impact KPIs: {{ $("Impact Profile Form").first().json.impact_kpis }}
Business model and traction: {{ $("Impact Profile Form").first().json.business_model }}
Stage: {{ $("Impact Profile Form").first().json.stage }}
Raising: {{ $("Impact Profile Form").first().json.amount_raising }}
Geography: {{ $("Impact Profile Form").first().json.geography }}
