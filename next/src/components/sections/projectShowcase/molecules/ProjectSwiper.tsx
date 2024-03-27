"use client";
import { Translation } from "@/translations/types";
import { useId, useState } from "react";
import ArrowSvg from "src/icons/arrow.svg";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { A11y, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./projectSwiper.module.scss";

type Props = {
  translations: Translation["components"]["projectSwiper"]["swiper"];
  teaserList: React.ReactNode[];
};

export const ProjectSwiper: React.FC<Props> = ({
  translations,
  teaserList,
}) => {
  const [instance, setSwiperInstance] = useState<SwiperType>();
  const [isLastSlideActive, setIsLastSlideActive] = useState<boolean>(false);
  const [isFirstSlideActive, setIsFirstSlideActive] = useState<boolean>(true);
  const id = useId();

  return (
    <>
      <Swiper
        className={styles.projectSwiper}
        modules={[A11y, Keyboard, Mousewheel]}
        spaceBetween={"5%"}
        slidesPerView={1}
        freeMode={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        updateOnWindowResize={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        a11y={{
          id,
          containerMessage: translations.containerMessage,
          firstSlideMessage: translations.firstSlideMessage,
          lastSlideMessage: translations.lastSlideMessage,
        }}
        onTransitionEnd={(swiper) => {
          setIsFirstSlideActive(swiper.activeIndex === 0);
          setIsLastSlideActive(
            swiper.activeIndex ===
              swiper.slides.length - swiper.slidesPerViewDynamic()
          );
        }}
      >
        {teaserList.map((teaser) => (
          <SwiperSlide>{teaser}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navWrapper}>
        <button
          className={styles.buttonPrev}
          aria-controls={id}
          title={translations.buttonPrev}
          aria-label={translations.buttonPrev}
          disabled={isFirstSlideActive}
          onClick={() => {
            instance?.slidePrev();
          }}
        >
          <ArrowSvg />
        </button>
        <button
          className={styles.buttonNext}
          aria-controls={id}
          title={translations.buttonNext}
          aria-label={translations.buttonNext}
          disabled={isLastSlideActive}
          onClick={() => {
            instance?.slideNext();
          }}
        >
          <ArrowSvg />
        </button>
      </div>
    </>
  );
};
