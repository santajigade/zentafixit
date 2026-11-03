import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeInlineSvg from './src/lib/rehype-inline-svg.mjs';

export default defineConfig({
  site: 'https://zentafixit.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeInlineSvg] },
  build: { format: 'directory' },
});
