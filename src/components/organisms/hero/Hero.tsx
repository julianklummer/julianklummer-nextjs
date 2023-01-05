import Image from "next/image";
import profilePic from "../../../../public/images/business-2022.png";
import styles from "./hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={profilePic}
        alt="Profilbild"
        width={355}
      />
      <h1>
        <span className={styles.heroHeadline}>Julian Klummer</span>
        <small className={styles.heroSubline}>
          Ambitious web specialist passionated about frontend development and
          beyond.
        </small>
      </h1>
    </div>
  );
};
