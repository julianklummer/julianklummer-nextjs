import Image from "next/image";
import { Teaser } from "../types";
import { getStaticProjectImageData } from "../utils/getStaticProjectImageData";
import styles from "./projectTeaser.module.scss";

export const ProjectTeaser: React.FC<Teaser> = ({ headline, url, image }) => {
  return (
    <article className={styles.projectTeaser}>
      <span className={styles.image}>
        <Image
          src={getStaticProjectImageData(image.srcId)}
          alt={image.alt}
          placeholder="blur"
        />
      </span>
      <h3 className={styles.headline}>{headline}</h3>
      <a
        className={styles.link}
        title={headline}
        aria-label={headline}
        href={url}
        target="_blank"
      >
        /
      </a>
    </article>
  );
};
