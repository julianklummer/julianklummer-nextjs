import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ProjectSwiper } from "../molecules/ProjectSwiper";
import { getProjectSwiperTranslations } from "./getProjectSwiperTranslations";
import styles from "./projectShowcase.module.scss";

export const ProjectShowcase: React.FC = async () => {
  const t = await getTranslations({
    locale: useLocale(),
    namespace: "components",
  });

  return (
    <section className={styles.projectShowcaseSection}>
      <div className={styles.projectShowcase}>
        <h2 className={styles.headline}>{t("projectSwiper.headline")}</h2>
        <p className={styles.description}>{t("projectSwiper.description")}</p>
        <ProjectSwiper translations={getProjectSwiperTranslations(t)} />
      </div>
    </section>
  );
};
