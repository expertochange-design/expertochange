import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each entry lives at <collection>/<lang>/<slug>.md. The same slug in
// en/ and fa/ links the two language versions of one piece.
const base = {
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
};

const portfolio = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    ...base,
    role: z.string(),
    organization: z.string(),
    period: z.string(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/books' }),
  schema: z.object({
    ...base,
    author: z.string(),
    // Optional: a note can go up before the book is rated.
    rating: z.number().int().min(1).max(5).optional(),
    takeaways: z.array(z.string()).length(3),
    recommendedFor: z.string(),
    // A book covered in several posts: the same series name on each, and part
    // 0, 1, 2… for their order. The books list shows a series as one entry.
    series: z.string().optional(),
    part: z.number().int().min(0).optional(),
  }),
});

const memories = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/memories' }),
  schema: z.object({ ...base }),
});

export const collections = { portfolio, books, memories };
