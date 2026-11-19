// Compare websites by domain so https://www.fund.vc/ and fund.vc count as the same investor
const domain = (url) => (url || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].trim();

const known = new Set($input.all().map((item) => domain(item.json.website)).filter(Boolean));
const newInvestors = [];

for (const item of $('Split Out Candidates').all()) {
  const c = item.json;
  const d = domain(c.website);
  if (!d || known.has(d)) continue;
  known.add(d);
  newInvestors.push({ json: {
    investor_name: c.investor_name,
    website: c.website,
    hq_country: c.hq_country || '',
    source: 'discovered',
    discovery_note: `${c.investor_type || ''}: ${c.why_relevant || ''} (found via ${c.evidence_url || 'web search'})`
  } });
}

return newInvestors;
