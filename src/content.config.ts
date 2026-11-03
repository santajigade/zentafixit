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
    // Featured image: 1200×630. Put `<slug>.webp` (page) and `<slug>.jpg` (social share) in public/images/featured/
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
    difficulty: z.enum(['easy', 'moderate', 'hard']).default('easy'),
    time: z.string().default('15 min'), // e.g. '10 to 30 min'
    tools: z.array(z.string()).default([]),
    risk: z.enum(['low', 'caution', 'danger']).default('low'), // electrical/gas work = caution or danger
    // "What are you seeing?" troubleshooter: label + heading anchor it jumps to
    symptoms: z.array(z.object({ label: z.string(), to: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
