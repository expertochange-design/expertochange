// Pulls visit counts per page from GoatCounter into src/data/popularity.json,
// so the lists can offer "most popular first". Runs before every build.
// Needs PUBLIC_GOATCOUNTER_CODE (the site code, as in <code>.goatcounter.com) and
// GOATCOUNTER_TOKEN (an API key with "read statistics"). Without them, or if the
// request fails, it keeps the existing file and the build goes on.
import { writeFile } from 'node:fs/promises';

const code = process.env.PUBLIC_GOATCOUNTER_CODE;
const token = process.env.GOATCOUNTER_TOKEN;
const out = new URL('../src/data/popularity.json', import.meta.url);

if (!code || !token) {
  console.log('popularity: no GoatCounter settings, keeping the saved counts');
  process.exit(0);
}

try {
  const counts = {};
  const start = '2026-01-01';
  const end = new Date().toISOString().slice(0, 10);
  // The 100 most visited pages; plenty for a personal site's pieces.
  const url = `https://${code}.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=100`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
  if (!res.ok) throw new Error(`GoatCounter answered ${res.status}`);
  const { hits = [] } = await res.json();
  for (const h of hits) {
    // Paths may carry the GitHub Pages base path; keep only the /en/... or /fa/... part.
    const path = h.path.replace(/^.*?(?=\/(en|fa)\/)/, '');
    counts[path] = (counts[path] ?? 0) + (h.count ?? 0);
  }
  await writeFile(out, JSON.stringify(counts, null, 2) + '\n');
  console.log(`popularity: saved counts for ${Object.keys(counts).length} pages`);
} catch (err) {
  console.warn(`popularity: ${err.message}; keeping the saved counts`);
}
