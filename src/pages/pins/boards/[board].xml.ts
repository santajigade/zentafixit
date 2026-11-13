import type { APIRoute } from 'astro';
import { SITE } from '../../../data/site';
import { getCategory } from '../../../data/categories';
import { postUrl } from '../../../lib/posts';
import { pinBQueue, pinId, BOARDS } from '../../../lib/pins';
import { cleanText, cleanTitle } from '../../../lib/pin-image';

// One RSS feed per Pinterest board (/pins/boards/<board>.xml). Each item is the guide's SECOND pin (design B),
// released 7 days after its first pin, so nothing is posted twice with the same image.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tag = (s: string) => '#' + s.replace(/&/g, 'And').replace(/[^A-Za-z0-9]/g, '');

export function getStaticPaths() {
  return BOARDS.map((b) => ({ params: { board: b.slug }, props: { b } }));
}

export const GET: APIRoute = async ({ props }) => {
  const b = (props as any).b as (typeof BOARDS)[number];
  const items = (await pinBQueue())
    .filter(({ post }) => b.cats.includes(post.data.category))
    .slice(0, 60)
    .map(({ post: p, date }) => {
      const cat = getCategory(p.data.category)!;
      const link = `${SITE.url}${postUrl(p)}?utm_source=pinterest&utm_medium=social&utm_campaign=pins-b`;
      const img = `${SITE.url}/pins/b/${pinId(p)}.jpg`;
      const tags = [tag(cat.name), '#HomeRepair', '#DIY', '#HomeMaintenance'].join(' ');
      return `<item><title>${esc(cleanTitle(p.data.title))}</title><link>${esc(link)}</link><guid isPermaLink="false">zf-pinb-${pinId(p)}</guid>
<pubDate>${new Date(date + 'T09:00:00+05:30').toUTCString()}</pubDate><category>${esc(cat.name)}</category>
<description>${esc(`${cleanText(p.data.description)} Quick checks, diagrams and safety tips in the free guide. ${tags}`)}</description>
<enclosure url="${img}" type="image/jpeg" length="0"/><media:content url="${img}" medium="image" type="image/jpeg" width="1000" height="1500"/></item>`;
    });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel>
<title>${esc(`${SITE.name}: ${b.name}`)}</title><link>${SITE.url}/</link><description>${esc(b.name)} guides from ${SITE.name}</description><language>en-us</language>
${items.join('\n')}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
