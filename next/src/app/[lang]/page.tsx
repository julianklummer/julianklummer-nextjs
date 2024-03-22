import { Copyright } from "@/components/library/atoms/Copyright/Copyright";
import { LegalLink } from "@/components/library/atoms/LegalLink/LegalLink";
import { SkillBox } from "@/components/sections/skillBox/organisms/skillBox/SkillBox";
import type { Metadata } from "next";
import { Hero } from "src/components/sections/hero/Hero";
import { Navigation } from "src/components/sections/navigation/organisms/navigation/Navigation";
import { getTranslation } from "src/translations/getTranslation";
import { languages } from "src/translations/languages";
import styles from "./page.module.scss";
import { SectionRow } from "@/components/library/morphGrid/sectionRow/SectionRow";
import { StationBox } from "@/components/sections/stationBox/organisms/stationBox/StationBox";
import { TextBox } from "@/components/sections/textBox/TextBox";

type Props = {
  params: {
    lang: (typeof languages)[number];
  };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  return {
    title: (await getTranslation(lang)).meta.index.title,
    description: (await getTranslation(lang)).meta.index.description,
  };
}

export async function getData(lang: (typeof languages)[number]) {
  return {
    translation: await getTranslation(lang),
  };
}

export default async function Page({ params: { lang } }: Props) {
  const { translation } = await getData(lang);

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
