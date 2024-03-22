import { Copyright } from "@/components/library/atoms/Copyright/Copyright";
import { LegalLink } from "@/components/library/atoms/LegalLink/LegalLink";
import { SectionRow } from "@/components/library/morphGrid/sectionRow/SectionRow";
import { SkillBox } from "@/components/sections/skillBox/organisms/skillBox/SkillBox";
import { StationBox } from "@/components/sections/stationBox/organisms/stationBox/StationBox";
import { TextBox } from "@/components/sections/textBox/TextBox";
import { Locale } from "@/translations/types";
import type { Metadata } from "next";
import { Hero } from "src/components/sections/hero/Hero";
import { Navigation } from "src/components/sections/navigation/organisms/navigation/Navigation";
import { getTranslation } from "src/translations/getTranslation";
import styles from "./page.module.scss";

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: (await getTranslation(locale)).meta.index.title,
    description: (await getTranslation(locale)).meta.index.description,
  };
}

export async function getData(locale: Locale) {
  return {
    translation: await getTranslation(locale),
  };
}

export default async function Page({ params: { locale } }: Props) {
  const { translation } = await getData(locale);

  return (
    <>
      <header className={styles.appHeader}>
        <Navigation />
      </header>
      <div>
        <Hero
          headline={translation.components.hero.headline}
          sublineStart={translation.components.hero.sublineStart}
        />
        <SkillBox
          tabCategoryList={translation.components.skillBox.skillTabCategoryList}
        />
        <SectionRow>
          <TextBox text={translation.components.about.text} />
          <StationBox
            stationList={translation.components.stationBox.stationList}
          />
        </SectionRow>
      </div>
      <footer className={styles.appFooter}>
        <span>
          <Copyright />
          <LegalLink />
        </span>
      </footer>
    </>
  );
}
