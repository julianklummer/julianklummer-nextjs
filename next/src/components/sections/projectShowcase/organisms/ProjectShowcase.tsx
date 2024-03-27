import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ProjectTeaser } from "../atoms/ProjectTeaser";
import { getProjectSwiperTranslations } from "../molecules/getProjectSwiperTranslations";
import { ProjectSwiper } from "../molecules/ProjectSwiper";
import { TeaserList } from "../types";
import styles from "./projectShowcase.module.scss";

export const ProjectShowcase: React.FC = async () => {
  const t = await getTranslations({
    locale: useLocale(),
    namespace: "components.projectSwiper",
  });

  const teaserList = (
    JSON.parse(
      `{"teaserList": ${JSON.stringify(t.raw("teaserList" as never))}}`
    ).teaserList as TeaserList
  ).map((data) => <ProjectTeaser {...data} />);

  return (
    <div className={styles.projectShowcaseSection}>
      <div className={styles.projectShowcase}>
        <h2 className={styles.headline}>{t("headline")}</h2>
        <p className={styles.description}>{t("description")}</p>
        <ProjectSwiper
          translations={getProjectSwiperTranslations(t)}
          teaserList={teaserList}
        />
      </div>
    </div>
  );
};
