import { Copyright } from "@/components/library/atoms/Copyright/Copyright";
import { LegalLink } from "@/components/library/atoms/LegalLink/LegalLink";
import { SectionRow } from "@/components/library/morphGrid/sectionRow/SectionRow";
import { Hero } from "@/components/sections/hero/Hero";
import { Navigation } from "@/components/sections/navigation/organisms/navigation/Navigation";
import { SkillBox } from "@/components/sections/skillBox/organisms/skillBox/SkillBox";
import { StationBox } from "@/components/sections/stationBox/organisms/stationBox/StationBox";
import { TextBox } from "@/components/sections/textBox/TextBox";
import { Locale } from "@/translations/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import profileImage from "public/assets/images/profile.jpeg";
import styles from "./page.module.scss";

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.index" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "components" });

  // TODO: Move content out of translations files
  const { skillTabCategoryList } = JSON.parse(
    `{"skillTabCategoryList": ${JSON.stringify(
      t.raw("skillBox.skillTabCategoryList")
    )}}`
  );
  const { stationList } = JSON.parse(
    `{"stationList": ${JSON.stringify(t.raw("stationBox.stationList"))}}`
  );

  return (
    <>
      <header className={styles.appHeader}>
        <Navigation />
      </header>
      <div>
        <Hero
          headline={t("hero.headline")}
          subline={t("hero.subline")}
          image={{
            src: profileImage,
            alt: t("hero.imageAlt"),
          }}
        />
        <SkillBox tabCategoryList={skillTabCategoryList} />
        <SectionRow>
          <TextBox text={t.raw("about.text")} />
          <StationBox stationList={stationList} />
        </SectionRow>
      </div>
      <footer className={styles.appFooter}>
        <span>
          <Copyright />
          <LegalLink
            translations={{
              label: t("legal.label"),
              alert: t("legal.alert"),
            }}
          />
        </span>
      </footer>
    </>
  );
}
