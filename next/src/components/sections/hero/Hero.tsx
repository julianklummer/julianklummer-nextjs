import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";

type Props = {
  headline: string;
  subline: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const Hero: React.FC<Props> = ({ headline, subline, image }) => {
  return (
    <div className={styles.hero}>
      <span className={styles.heroImage}>
        <Image
          src={image.src}
          alt={image.alt}
          placeholder="blur"
          priority
          fill
          sizes="(max-width: 479px) 308px,
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
