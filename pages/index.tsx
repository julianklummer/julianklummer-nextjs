import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useContext } from "react";
import { Hero } from "src/components/sections/hero/Hero";
import { SkillBox } from "src/components/sections/skillBox/organisms/skillBox/SkillBox";
import { skillList } from "src/components/sections/skillBox/types";
import { StationBox } from "src/components/sections/stationBox/organisms/stationBox/StationBox";
import { stationListSchema } from "src/components/sections/stationBox/schema";
import { stationList } from "src/components/sections/stationBox/types";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
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

interface Props {
  data: indexData;
  skillList: skillList;
  stationList: stationList;
  locale: Locale;
}

export default function Index({ data, skillList, stationList, locale }: Props) {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found.");
  if (languageContext.language !== locale) languageContext?.setLanguage(locale);

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero headline={data.hero.headline} subline={data.hero.subline} />
        <SkillBox tabCategoryList={skillList} />
        <StationBox stationList={stationList} />
      </div>
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
      locale,
    },
  };
}
