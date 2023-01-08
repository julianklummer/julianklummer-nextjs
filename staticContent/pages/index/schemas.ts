import { z } from "zod";

export const indexDataSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    headline: z.string(),
    subline: z.string(),
  }),
});
