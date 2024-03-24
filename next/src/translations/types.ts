import { SkillTabCategoryListSchema } from "src/components/sections/skillBox/types";
import { StationListSchema } from "src/components/sections/stationBox/types";
import { z } from "zod";
import { locales } from "./locales";

export const TranslationSchema = z.object({
  meta: z.object({
    index: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  components: z.object({
    hero: z.object({
      headline: z.string(),
      subline: z.string(),
      imageAlt: z.string(),
    }),
    languageToggle: z.object({
      english: z.string(),
      german: z.string(),
    }),
    about: z.object({
      text: z.string(),
    }),
    skillBox: z.object({
      skillTabCategoryList: SkillTabCategoryListSchema,
    }),
    stationBox: z.object({
      stationList: StationListSchema,
    }),
  }),
});

export type Translation = z.infer<typeof TranslationSchema>;

export type Locale = (typeof locales)[number];
