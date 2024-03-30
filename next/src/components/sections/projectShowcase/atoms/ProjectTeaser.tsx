"use client";
import Image from "next/image";
import ArrowCircle from "src/icons/arrow-circle.svg";
import { Teaser } from "../types";
import { getStaticProjectImageData } from "../utils/getStaticProjectImageData";
import styles from "./projectTeaser.module.scss";

export const ProjectTeaser: React.FC<Teaser> = ({
  headline,
  tooltip,
  url,
  image,
}) => {
  const handleClick = () => {
    window?.open(url, "_blank")?.focus();
  };

  return (
    <article
      tabIndex={0}
      className={styles.projectTeaser}
      onClick={handleClick}
      title={tooltip}
    >
      <a
        className={styles.link}
        href={url}
        target="_blank"
        onClick={(event) => event.preventDefault()}
      >
        <span className={styles.linkText}>{headline}</span>
        <ArrowCircle className={styles.linkIcon} />
      </a>
      <span className={styles.image}>
        <Image
          src={getStaticProjectImageData(image.srcId)}
          alt={image.alt}
          placeholder="blur"
          width={360}
          height={450}
          sizes="
          (max-width: 479px) 390px,
          (max-width: 767px) 300px,
          (max-width: 1280px) 320px,
          360px"
        />
      </span>
    </article>
  );
};
