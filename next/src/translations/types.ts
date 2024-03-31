import { SkillTabCategoryListSchema } from "src/components/sections/skillBox/types";
import { StationListSchema } from "src/components/sections/stationBox/types";
import { z } from "zod";
import { locales } from "./locales";
import { TeaserListSchema } from "@/components/sections/projectShowcase/types";

export const TranslationSchema = z.object({
  components: z.object({
    navigation: z.object({
      socialLink: z.string(),
      languageToggle: z.object({
        label: z.string(),
        languages: z.object({
          en: z.string(),
          de: z.string(),
        }),
      }),
    }),
    hero: z.object({
      imageAlt: z.string(),
    }),
    skillBox: z.object({
      navigationHeadline: z.string(),
      navigationChangeCategory: z.string(),
      skillTabCategoryList: SkillTabCategoryListSchema,
    }),
    stationBox: z.object({
      headline: z.string(),
      openCloseAccordion: z.string(),
      stationList: StationListSchema,
    }),
    projectShowcase: z.object({
      headline: z.string(),
      description: z.string(),
      swiper: z.object({
        containerMessage: z.string(),
        firstSlideMessage: z.string(),
        lastSlideMessage: z.string(),
        buttonNext: z.string(),
        buttonPrev: z.string(),
      }),
      teaserList: TeaserListSchema,
    }),
    legal: z.object({
      label: z.string(),
      alert: z.string(),
    }),
  }),
});

export type Translation = z.infer<typeof TranslationSchema>;

export type Locale = (typeof locales)[number];
