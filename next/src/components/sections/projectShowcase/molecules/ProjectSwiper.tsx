"use client";
import { Translation } from "@/translations/types";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import ArrowSvg from "src/icons/arrow.svg";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { A11y, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectTeaser } from "../atoms/ProjectTeaser";
import styles from "./projectSwiper.module.scss";

type Props = {
  translations: Translation["components"]["projectSwiper"];
};

export const ProjectSwiper: React.FC<Props> = ({ translations }) => {
  const [instance, setSwiperInstance] = useState<SwiperType>();
  const [isLastSlideActive, setIsLastSlideActive] = useState<boolean>(false);
  const [isFirstSlideActive, setIsFirstSlideActive] = useState<boolean>(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const swiperWrapper = useRef<HTMLDivElement>(null);
  const id = useId();

  const containerClassList = [styles.projectSwiperContainer];
  if (isIntersecting) containerClassList.push(styles._animated);

  const intersectionObserver = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting !== isIntersecting) {
            setIsIntersecting(entry.isIntersecting);
          }
        },
        {
          threshold: 0.6,
        }
      ),
    []
  );

  useEffect(() => {
    if (!swiperWrapper.current) return;
    intersectionObserver.observe(swiperWrapper.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [swiperWrapper, intersectionObserver]);

  return (
    <div ref={swiperWrapper} className={containerClassList.join(" ")}>
      <Swiper
        className={styles.projectSwiper}
        modules={[A11y, Keyboard, Mousewheel]}
        spaceBetween={"4%"}
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
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        preventClicks={true}
        updateOnWindowResize={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        a11y={{
          id,
          containerMessage: translations.swiper.containerMessage,
          firstSlideMessage: translations.swiper.firstSlideMessage,
          lastSlideMessage: translations.swiper.lastSlideMessage,
        }}
        focusableElements='*[tabindex="0"]'
        onTransitionEnd={(swiper) => {
          setIsFirstSlideActive(swiper.activeIndex === 0);
          setIsLastSlideActive(
            swiper.activeIndex ===
              swiper.slides.length - swiper.slidesPerViewDynamic()
          );
        }}
      >
        {translations.teaserList.map((teaser, index) => (
          <SwiperSlide
            className={styles.slide}
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
          >
            <ProjectTeaser {...teaser} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navWrapper}>
        <button
          className={styles.buttonPrev}
          aria-controls={id}
          title={translations.swiper.buttonPrev}
          aria-label={translations.swiper.buttonPrev}
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
          title={translations.swiper.buttonNext}
          aria-label={translations.swiper.buttonNext}
          disabled={isLastSlideActive}
          onClick={() => {
            instance?.slideNext();
          }}
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};
