// Builds internal links that work both locally ("/") and on GitHub Pages ("/ai-daily/").
export function withBase(path: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
