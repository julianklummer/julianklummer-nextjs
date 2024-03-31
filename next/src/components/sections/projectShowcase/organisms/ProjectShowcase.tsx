import { Translation } from "@/translations/types";
import { ProjectSwiper } from "../molecules/ProjectSwiper";
import styles from "./projectShowcase.module.scss";

type Props = {
  translations: Translation["components"]["projectShowcase"];
};

export const ProjectShowcase: React.FC<Props> = async ({ translations }) => {
  return (
    <section className={styles.projectShowcaseSection}>
      <div className={styles.projectShowcase}>
        <h2 className={styles.headline}>{translations.headline}</h2>
        <p className={styles.description}>{translations.description}</p>
        <ProjectSwiper translations={translations} />
      </div>
    </section>
  );
};
