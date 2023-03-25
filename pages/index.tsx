import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useContext } from "react";
import { Hero } from "src/components/sections/hero/Hero";
import { SkillBox } from "src/components/sections/skillBox/organisms/skillBox/SkillBox";
import { testData } from "src/components/sections/skillBox/testData";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import { Locale } from "src/utils/contexts/languageContext/types";
import { indexDataSchema } from "staticContent/pages/index/schemas";
import { indexData } from "staticContent/pages/index/types";

interface Props {
  data: indexData;
  locale: Locale;
}

export default function Index({ data, locale }: Props) {
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
        <SkillBox data={testData} />
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

  return {
    props: {
      data,
      locale,
    },
  };
}
