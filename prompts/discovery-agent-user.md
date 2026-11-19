=Find up to {{ Math.min(Number($json.how_many) || 6, 10) }} investors who could realistically back this startup.

STARTUP
Name: {{ $json.startup_name }}
One-liner: {{ $json.one_liner }}
Impact themes and SDGs: {{ $json.sdgs }}
Stage: {{ $json.stage }}
Raising: {{ $json.amount_raising }}
Geography: {{ $json.geography }}
