import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import profileImage from "../../../../public/images/profile.jpeg";
import styles from "./hero.module.scss";

interface Props {
  headline: string;
  sublineStart: string;
  sublineList: string[];
}

export const Hero: React.FC<Props> = ({
  headline,
  sublineStart,
  sublineList,
}) => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found.");

  const sublineSwitcherRef = useRef<HTMLSpanElement>(null);
  const [sublineIndex, setSublineIndex] = useState(0);

  useEffect(() => {
    if (sublineSwitcherRef.current) {
      sublineSwitcherRef.current?.addEventListener(
        "animationend",
        (event: AnimationEvent) => {
          if (event.animationName.includes("fade-out")) {
            setSublineIndex(
              sublineIndex + 1 >= sublineList.length ? 0 : sublineIndex + 1
            );
          }
        }
      );

      const sublineSwitcherInterval = setInterval(() => {
        sublineSwitcherRef.current?.classList.remove(styles.textSwitcherFadeIn);
        sublineSwitcherRef.current?.classList.add(styles.textSwitcherFadeOut);
        sublineSwitcherRef.current?.addEventListener("animationend", () => {
          sublineSwitcherRef.current?.classList.add(styles.textSwitcherFadeIn);
          sublineSwitcherRef.current?.classList.remove(
            styles.textSwitcherFadeOut
          );
        });
      }, 3000);

      return () => {
        clearInterval(sublineSwitcherInterval);
      };
    }
  });

  return (
    <div className={styles.hero}>
      <span className={styles.heroImage}>
        <Image
          src={profileImage}
          alt={
            languageContext.language === "de" ? "Profilbild" : "Profile picture"
          }
          placeholder="blur"
          priority
          fill
          sizes="(max-width: 479) 308px,
          (max-width: 1280px) 354px,
          380px"
        />
      </span>

      <h1 className={styles.heroH1}>
        <span className={styles.heroHeadline}>{headline}</span>
        <small className={styles.heroSubline}>
          {sublineStart + " "}
          <span className={styles.textSwitcher} ref={sublineSwitcherRef}>
            {sublineList[sublineIndex]}
          </span>
        </small>
      </h1>
    </div>
  );
};
