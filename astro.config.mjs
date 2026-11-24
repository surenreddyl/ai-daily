import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import rehypeDiagram from './src/lib/rehype-diagram.mjs';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow
// (e.g. https://<user>.github.io and /ai-daily). Locally they default to the root.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [preact()],
  markdown: {
    rehypePlugins: [rehypeDiagram],
  },
});
