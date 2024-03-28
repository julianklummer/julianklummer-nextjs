import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { ProjectSwiper } from "../molecules/ProjectSwiper";
import { TeaserList } from "../types";

export const getProjectSwiperTranslations: GetTranslationsFunction<
  typeof ProjectSwiper
> = (t) => ({
  swiper: {
    containerMessage: t("projectSwiper.swiper.containerMessage" as never),
    firstSlideMessage: t("projectSwiper.swiper.firstSlideMessage" as never),
    lastSlideMessage: t("projectSwiper.swiper.lastSlideMessage" as never),
    buttonNext: t("projectSwiper.swiper.buttonNext" as never),
    buttonPrev: t("projectSwiper.swiper.buttonPrev" as never),
  },
  // TODO: Move to content source instead of translationfile
  ...JSON.parse(
    `{"teaserList": ${JSON.stringify(
      t.raw("projectSwiper.teaserList" as never)
    )}}`
  ),
});
