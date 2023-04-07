import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { LanguageProvider } from "src/utils/contexts/languageContext/LanguageProvider";
import { Locale } from "src/utils/contexts/languageContext/types";
import { indexDataSchema } from "staticContent/pages/index/schemas";
import { indexData } from "staticContent/pages/index/types";
import { Navigation } from "../src/components/sections/navigation/organisms/navigation/Navigation";
import styles from "./index.module.scss";

interface Props {
  data: indexData;
  locale: Locale;
}

export default function Index({ data, locale }: Props) {
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
        <div></div>
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

  return {
    props: {
      data,
      locale,
    },
  };
}
