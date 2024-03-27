import { GetTranslationsFunction } from "@/components/types/GetTranslationsFunction";
import { ProjectSwiper } from "./ProjectSwiper";

export const getProjectSwiperTranslations: GetTranslationsFunction<
  typeof ProjectSwiper
> = (t) => ({
  containerMessage: t("swiper.containerMessage" as never),
  firstSlideMessage: t("swiper.firstSlideMessage" as never),
  lastSlideMessage: t("swiper.lastSlideMessage" as never),
  buttonNext: t("swiper.buttonNext" as never),
  buttonPrev: t("swiper.buttonPrev" as never),
});
