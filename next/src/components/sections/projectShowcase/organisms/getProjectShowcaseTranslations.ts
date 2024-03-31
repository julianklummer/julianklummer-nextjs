import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { ProjectShowcase } from "./ProjectShowcase";

export const getProjectShowcaseTranslations: GetTranslationsFunction<
  typeof ProjectShowcase
> = (t) => ({
  headline: t("projectShowcase.headline" as never),
  description: t("projectShowcase.description" as never),
  swiper: {
    containerMessage: t("projectShowcase.swiper.containerMessage" as never),
    firstSlideMessage: t("projectShowcase.swiper.firstSlideMessage" as never),
    lastSlideMessage: t("projectShowcase.swiper.lastSlideMessage" as never),
    buttonNext: t("projectShowcase.swiper.buttonNext" as never),
    buttonPrev: t("projectShowcase.swiper.buttonPrev" as never),
  },
  // TODO: Move to contentful instead of translationfile
  ...JSON.parse(
    `{"teaserList": ${JSON.stringify(
      t.raw("projectShowcase.teaserList" as never)
    )}}`
  ),
});
