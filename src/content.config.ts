import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each entry lives at <collection>/<lang>/<slug>.md. The same slug in
// en/ and fa/ links the two language versions of one piece.
// `image` is the picture shown when a post is shared (X, Telegram, WhatsApp…),
// a path relative to the post file. Without it, the section photo is used.
const base = (image: () => z.ZodType<ImageMetadata>) => ({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  image: image().optional(),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) => z.object({
    ...base(image),
    role: z.string(),
    organization: z.string(),
    period: z.string(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/books' }),
  schema: ({ image }) => z.object({
    ...base(image),
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
  schema: ({ image }) => z.object({ ...base(image) }),
});

export const collections = { portfolio, books, memories };
