import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import profileImage from "../../../../public/images/profile.jpeg";
import styles from "./hero.module.scss";

interface Props {
  headline: string;
  sublineStart: string;
}

export const Hero: React.FC<Props> = ({ headline, sublineStart }) => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found.");

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
        <small className={styles.heroSubline}>{sublineStart}</small>
      </h1>
    </div>
  );
};
