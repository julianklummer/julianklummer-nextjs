import { z } from "zod";

export const translationsSchema = z.object({
  languageList: z.object({
    english: z.string(),
    german: z.string(),
  }),
});
