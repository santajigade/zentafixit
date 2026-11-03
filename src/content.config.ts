import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    pubDate: z.coerce.date(), // post goes live on this date (scheduled publishing)
    updatedDate: z.coerce.date().optional(),
    reviewedBy: z.string().optional(),
    reviewedDate: z.coerce.date().optional(), // set ONLY after a real review
    category: z.string(),
    subcategory: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
