import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../data/site';
import { getCategory } from '../data/categories';

export type Post = CollectionEntry<'blog'>;

/** Posts that are live: not draft, publish date reached, and reviewed (if required). */
// Set SHOW_DRAFTS=1 when building a private review preview: shows unreviewed and future posts too.
const SHOW_DRAFTS = process.env.SHOW_DRAFTS === '1';

export async function getPublishedPosts(): Promise<Post[]> {
  const now = new Date();
  const posts = await getCollection('blog', ({ data }) =>
    SHOW_DRAFTS || (!data.draft && data.pubDate <= now && (!SITE.requireReview || !!data.reviewedDate)),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postUrl = (p: Post) => `/${p.data.category}/${p.id}/`;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function validatePost(p: Post) {
  const c = getCategory(p.data.category);
  if (!c) throw new Error(`Post "${p.id}": unknown category "${p.data.category}"`);
  if (!c.subcategories.some((s) => s.slug === p.data.subcategory))
    throw new Error(`Post "${p.id}": unknown subcategory "${p.data.subcategory}" in "${c.slug}"`);
}
