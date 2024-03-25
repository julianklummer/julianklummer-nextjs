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
    navigation: z.object({
      socialLink: z.string(),
    }),
    hero: z.object({
      headline: z.string(),
      subline: z.string(),
      imageAlt: z.string(),
    }),
    languageToggle: z.object({
      label: z.string(),
      languages: z.object({
        en: z.string(),
        de: z.string(),
      }),
    }),
    about: z.object({
      text: z.string(),
    }),
    skillBox: z.object({
      navigationHeadline: z.string(),
      navigationChangeCategory: z.string(),
      skillTabCategoryList: SkillTabCategoryListSchema,
    }),
    stationBox: z.object({
      headline: z.string(),
      stationList: StationListSchema,
    }),
    legal: z.object({
      title: z.string(),
      alert: z.string(),
    }),
  }),
});

export type Translation = z.infer<typeof TranslationSchema>;

export type Locale = (typeof locales)[number];
