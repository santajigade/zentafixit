import { getPublishedPosts, postUrl } from '../lib/posts';
import { getCategory } from '../data/categories';

export async function GET() {
  const posts = await getPublishedPosts();
  const items = posts.map((p) => {
    const cat = getCategory(p.data.category)?.name ?? '';
    return {
      t: p.data.title,
      d: p.data.description,
      u: postUrl(p),
      c: cat,
      k: [p.data.title, p.data.description, cat, p.data.subcategory, ...p.data.tags].join(' ').toLowerCase(),
    };
  });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
