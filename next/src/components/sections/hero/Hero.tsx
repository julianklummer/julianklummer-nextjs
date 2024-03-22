import Image from "next/image";
import profileImage from "../../../../public/assets/images/profile.jpeg";
import styles from "./hero.module.scss";

interface Props {
  headline: string;
  sublineStart: string;
}

export const Hero: React.FC<Props> = ({ headline, sublineStart }) => {
  return (
    <div className={styles.hero}>
      <span className={styles.heroImage}>
        <Image
          src={profileImage}
          alt={
            // TODO add translation
            "test"
            // languageContext.language === "de" ? "Profilbild" : "Profile picture"
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
