import { z, ZodSchema } from "zod";

export const StartSchema = z.object({
  start: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeadline: z.string(),
    heroSubline: z.string(),
    about: z.string(),
  }),
});

export type Start = z.infer<typeof StartSchema>;
