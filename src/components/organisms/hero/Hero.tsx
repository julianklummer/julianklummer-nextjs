import Image from "next/image";
import profilePic from "../../../../public/images/business-2022.png";
import styles from "./hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <div>
      <Image
        className={styles.heroImage}
        src={profilePic}
        alt="Picture of the author"
        width={355}
      />
      <h1 className={styles.heroTitle}>Julian Klummer</h1>
    </div>
  );
};
