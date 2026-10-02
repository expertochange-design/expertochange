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
    rating: z.number().int().min(1).max(5),
    takeaways: z.array(z.string()).length(3),
    recommendedFor: z.string(),
  }),
});

const memories = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/memories' }),
  schema: z.object({ ...base }),
});

export const collections = { portfolio, books, memories };
