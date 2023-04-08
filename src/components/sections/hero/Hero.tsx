import Image from "next/image";
import profilePic from "../../../../public/images/business-2022.png";
import styles from "./hero.module.scss";

interface Props {
  headline: string;
  subline: string;
}

export const Hero: React.FC<Props> = ({ headline, subline }) => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={profilePic}
        alt="Profilbild"
        width={220}
        height={220}
      />
      <h1 className={styles.heroH1}>
        <span className={styles.heroHeadline}>{headline}</span>
        <small className={styles.heroSubline}>{subline}</small>
      </h1>
    </div>
  );
};
