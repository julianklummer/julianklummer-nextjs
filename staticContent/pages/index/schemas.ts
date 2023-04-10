import { tabCategorylSchema } from "src/components/sections/skillBox/schema";
import { z } from "zod";

export const indexDataSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    headline: z.string(),
    sublineStart: z.string(),
  }),
});

export const skillBoxSchema = z.array(tabCategorylSchema);
