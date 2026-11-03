import rss from '@astrojs/rss';
import { getPublishedPosts, postUrl } from '../lib/posts';
import { SITE } from '../data/site';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: postUrl(p) })),
  });
}
