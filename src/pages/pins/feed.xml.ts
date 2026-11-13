import type { APIRoute } from 'astro';
import { SITE } from '../../data/site';
import { getCategory } from '../../data/categories';
import { postUrl } from '../../lib/posts';
import { pinQueue, pinId, manualPins } from '../../lib/pins';
import { cleanText, cleanTitle } from '../../lib/pin-image';

// RSS 2.0 feed for Pinterest "Connect RSS feed": the latest 60 released pins (4 new a day).
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tag = (s: string) => '#' + s.replace(/&/g, 'And').replace(/[^A-Za-z0-9]/g, '');

export const GET: APIRoute = async () => {
  const items = (await pinQueue())
    .filter(({ post }) => !manualPins.has(pinId(post)))
    .slice(0, 60)
    .map(({ post: p, date }) => {
      const cat = getCategory(p.data.category)!;
      const link = `${SITE.url}${postUrl(p)}?utm_source=pinterest&utm_medium=social&utm_campaign=pins`;
      const img = `${SITE.url}/pins/${pinId(p)}.jpg`;
      const tags = [tag(cat.name), '#HomeRepair', '#DIY', '#FixItYourself'].join(' ');
      return `<item><title>${esc(cleanTitle(p.data.title))}</title><link>${esc(link)}</link><guid isPermaLink="false">zf-pin-${pinId(p)}</guid>
<pubDate>${new Date(date + 'T09:00:00+05:30').toUTCString()}</pubDate><category>${esc(cat.name)}</category>
<description>${esc(`${cleanText(p.data.description)} Free step-by-step guide with diagrams and safety tips. ${tags}`)}</description>
<enclosure url="${img}" type="image/jpeg" length="0"/><media:content url="${img}" medium="image" type="image/jpeg" width="1000" height="1500"/></item>`;
    });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel>
<title>${esc(SITE.name)}: fix-it guides</title><link>${SITE.url}/</link><description>${esc(SITE.description)}</description><language>en-us</language>
${items.join('\n')}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
