import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { Hero } from "src/components/organisms/hero/Hero";
import { indexDataSchema } from "staticContent/pages/index/schemas";
import { indexData } from "staticContent/pages/index/types";
interface Props {
  data: indexData;
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero headline={data.hero.headline} subline={data.hero.subline} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fileContents = fs.readFileSync(
    "staticContent/pages/index/index.en.mdx",
    "utf8"
  );
  const { data } = matter(fileContents);
  indexDataSchema.parse(data);
  return { props: { data } };
}
