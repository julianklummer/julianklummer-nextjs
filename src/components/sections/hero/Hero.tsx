import Image from "next/image";
import profileImage from "../../../../public/images/profile.jpeg";
import styles from "./hero.module.scss";

interface Props {
  headline: string;
  subline: string;
}

export const Hero: React.FC<Props> = ({ headline, subline }) => {
  return (
    <div className={styles.hero}>
      <span className={styles.heroImage}>
        <Image
          src={profileImage}
          /* TODO: Add translation */
          alt="Profilbild"
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
        <small className={styles.heroSubline}>{subline}</small>
      </h1>
    </div>
  );
};
