// Single source of truth for the lesson format.
// If a lesson file breaks these rules, `npm run build` stops and explains why.
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const modules = defineCollection({
  loader: file('src/content/modules/modules.json'),
  schema: z.object({
    id: z.string(),
    week: z.number().int().min(1).max(12),
    title: z.string(),
    summary: z.string(),
  }),
});

const roleExamples = z.object({
  sales: z.string().min(1),
  marketing: z.string().min(1),
  gm: z.string().min(1),
  general: z.string().min(1),
});

const link = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  type: z.enum(['doc', 'course', 'video', 'tool', 'case']),
  source: z.string().min(1),
  free: z.boolean(),
  lastChecked: z.coerce.date(),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string().regex(/^L\d{3}$/, 'id must look like L001'),
    day: z.number().int().min(1).max(60),
    week: z.number().int().min(1).max(12),
    module: reference('modules'),
    title: z.string().min(1).max(80),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'slug: lowercase letters, numbers and dashes only'),
    whyItMatters: z.string().min(1).max(160),
    summary: z.string().min(1).max(300),
    minutes: z.number().int().min(1).max(10),
    level: z.enum(['foundation', 'practitioner', 'builder']),
    tags: z.array(z.string()).min(1),
    roleExamples,
    practice: z.object({
      task: z.string().min(1),
      minutes: z.number().int().min(1).max(15),
      output: z.string().min(1),
    }),
    links: z.array(link).min(2),

    quiz: z
      .array(
        z
          .object({
            q: z.string().min(1),
            options: z.array(z.string().min(1)).min(2).max(5),
            answer: z.number().int().min(0),
            explain: z.string().min(1).max(240),
          })
          .refine((item) => item.answer < item.options.length, {
            message: 'quiz answer must point to one of the options (0 = first option)',
            path: ['answer'],
          }),
      )
      .min(3)
      .max(5),
    flashcards: z
      .array(z.object({ front: z.string().min(1).max(60), back: z.string().min(1).max(200) }))
      .min(3)
      .max(6),

    checklist: z.array(z.string().min(1).max(140)).min(3).max(5),

    // Optional media.
    video: z
      .object({
        youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/, 'youtubeId is the 11 characters after v= in the link'),
        title: z.string().min(1),
        source: z.string().min(1),
        minutes: z.number().int().min(1).max(30).optional(),
      })
      .optional(),
    diagram: z
      .object({
        src: z.string().regex(/^[a-z0-9-]+$/, 'diagram src: file name in public/diagrams, without .svg'),
        alt: z.string().min(20, 'describe the diagram in words for screen readers'),
        caption: z.string().max(160).optional(),
      })
      .optional(),
    image: z.string().optional(),
    aiPrompts: z.object({
      explain: z.string().min(80).max(900),
      applyToRole: z
        .string()
        .min(80)
        .max(900)
        .refine((s) => s.includes('{role}'), 'applyToRole must include {role} so it can be personalised'),
    }),
  }),
});

export const collections = { modules, lessons };
