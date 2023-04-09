import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useEffect } from "react";
import { Copyright } from "src/components/library/atoms/Copyright/Copyright";
import { SectionRow } from "src/components/library/morphGrid/sectionRow/SectionRow";
import { Hero } from "src/components/sections/hero/Hero";
import { Navigation } from "src/components/sections/navigation/organisms/navigation/Navigation";
import { SkillBox } from "src/components/sections/skillBox/organisms/skillBox/SkillBox";
import { skillList } from "src/components/sections/skillBox/types";
import { StationBox } from "src/components/sections/stationBox/organisms/stationBox/StationBox";
import { stationListSchema } from "src/components/sections/stationBox/schema";
import { stationList } from "src/components/sections/stationBox/types";
import { TextBox } from "src/components/sections/textBox/TextBox";
import { LanguageProvider } from "src/utils/contexts/languageContext/LanguageProvider";
import { Locale } from "src/utils/contexts/languageContext/types";
import {
  indexDataSchema,
  skillBoxSchema,
} from "staticContent/pages/index/schemas";
import { skillBox as skillBoxDE } from "staticContent/pages/index/skillBox.de";
import { skillBox as skillBoxEN } from "staticContent/pages/index/skillBox.en";
import { stationBox as stationListDE } from "staticContent/pages/index/stationBox.de";
import { stationBox as stationListEN } from "staticContent/pages/index/stationBox.en";
import { indexData } from "staticContent/pages/index/types";
import styles from "./index.module.scss";
interface Props {
  data: indexData;
  skillList: skillList;
  stationList: stationList;
  aboutContent: string;
  locale: Locale;
}

export default function Index({
  data,
  skillList,
  stationList,
  aboutContent,
  locale,
}: Props) {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      document.body.classList.add(styles._scrolled);
    } else {
      document.body.classList.remove(styles._scrolled);
    }
  };

  const handleResize = () => {
    if (!document.body.classList.contains(styles._resizing)) {
      document.body.classList.add(styles._resizing);

      setTimeout(() => {
        document.body.classList.remove(styles._resizing);
      }, 1000);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageProvider language={locale}>
        <header className={styles.appHeader}>
          <Navigation />
        </header>
        <div>
          <Hero headline={data.hero.headline} subline={data.hero.subline} />
          <SkillBox tabCategoryList={skillList} />
          <SectionRow>
            <TextBox text={aboutContent} />
            <StationBox stationList={stationList} />
          </SectionRow>
        </div>
        <footer className={styles.appFooter}>
          <Copyright />
        </footer>
      </LanguageProvider>
    </>
  );
}

export async function getStaticProps({ locale }: Pick<Props, "locale">) {
  const fileContents = fs.readFileSync(
    `staticContent/pages/index/index.${locale}.mdx`,
    "utf8"
  );
  const { data } = matter(fileContents);
  indexDataSchema.parse(data);

  const aboutContents = fs.readFileSync(
    `staticContent/pages/index/about.${locale}.mdx`,
    "utf8"
  );
  const aboutContent = matter(aboutContents).content;

  const skillList = locale === "en" ? await skillBoxEN : await skillBoxDE;
  skillBoxSchema.parse(skillList);
  const stationList =
    locale === "en" ? await stationListEN : await stationListDE;
  stationListSchema.parse(stationList);

  return {
    props: {
      data,
      skillList,
      stationList,
      aboutContent,
      locale,
    },
  };
}
