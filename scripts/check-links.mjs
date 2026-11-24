// Checks every external link in the lesson files.
// Usage: npm run links
// Exit code 1 if any link is clearly broken (404, 410, 5xx, DNS failure, timeout).
// 401/403/429 are reported as "check manually": many sites block automated checks.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const LESSONS_DIR = 'src/content/lessons';
const TIMEOUT_MS = 20_000;
const UA = 'Mozilla/5.0 (compatible; AIDailyLinkChecker/1.0)';

async function collectLinks() {
  const files = (await readdir(LESSONS_DIR)).filter((f) => f.endsWith('.md'));
  const found = new Map(); // url -> [files]
  // Links are read exactly as written: quoted `url:` values in the top block,
  // Markdown links in the body, and lesson videos (checked via their watch page).
  const patterns = [
    { re: /url:\s*"([^"]+)"/g, toUrl: (m) => m[1] },
    { re: /\]\((https?:\/\/[^)\s]+)\)/g, toUrl: (m) => m[1] },
    { re: /youtubeId:\s*"([A-Za-z0-9_-]{11})"/g, toUrl: (m) => `https://www.youtube.com/watch?v=${m[1]}` },
  ];
  for (const file of files) {
    const text = await readFile(join(LESSONS_DIR, file), 'utf8');
    for (const { re, toUrl } of patterns) {
      for (const match of text.matchAll(re)) {
        const url = toUrl(match);
        if (!found.has(url)) found.set(url, []);
        if (!found.get(url).includes(file)) found.get(url).push(file);
      }
    }
  }
  return found;
}

async function check(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: { 'user-agent': UA },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (res.ok) return { status: res.status, verdict: 'ok' };
      if (method === 'HEAD') continue; // some servers reject HEAD; retry with GET
      if ([401, 403, 429].includes(res.status)) return { status: res.status, verdict: 'manual' };
      return { status: res.status, verdict: 'broken' };
    } catch (err) {
      if (method === 'HEAD') continue;
      return { status: err.name === 'TimeoutError' ? 'timeout' : 'error', verdict: 'broken' };
    }
  }
}

const links = await collectLinks();
console.log(`Checking ${links.size} links...\n`);
let broken = 0;
let manual = 0;
for (const [url, files] of links) {
  const { status, verdict } = await check(url);
  const icon = verdict === 'ok' ? 'OK    ' : verdict === 'manual' ? 'CHECK ' : 'BROKEN';
  console.log(`${icon} ${String(status).padEnd(7)} ${url}  (${files.join(', ')})`);
  if (verdict === 'broken') broken++;
  if (verdict === 'manual') manual++;
}
console.log(`\n${links.size - broken - manual} ok, ${manual} to check manually, ${broken} broken.`);
process.exit(broken > 0 ? 1 : 0);
