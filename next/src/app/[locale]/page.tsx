import { fetchData } from "@/apiConnector/fetchData";
import { startQuery } from "@/apiConnector/queries/startQuery";
import { StartSchema } from "@/apiConnector/types/Start";
import { Copyright } from "@/components/library/atoms/Copyright/Copyright";
import { getLegalLinkTranslations } from "@/components/library/atoms/LegalLink/getLegalLinkTranslations";
import { LegalLink } from "@/components/library/atoms/LegalLink/LegalLink";
import { SectionRow } from "@/components/library/morphGrid/sectionRow/SectionRow";
import { Hero } from "@/components/sections/hero/Hero";
import { Navigation } from "@/components/sections/navigation/organisms/navigation/Navigation";
import { getProjectShowcaseTranslations } from "@/components/sections/projectShowcase/organisms/getProjectShowcaseTranslations";
import { ProjectShowcase } from "@/components/sections/projectShowcase/organisms/ProjectShowcase";
import { getSkillBoxTranslations } from "@/components/sections/skillBox/organisms/skillBox/getSkillBoxTranslations";
import { SkillBox } from "@/components/sections/skillBox/organisms/skillBox/SkillBox";
import { getStationBoxTranslations } from "@/components/sections/stationBox/organisms/stationBox/getStationBoxTranslations";
import { StationBox } from "@/components/sections/stationBox/organisms/stationBox/StationBox";
import { TextBox } from "@/components/sections/textBox/TextBox";
import { Locale } from "@/translations/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import profileImage from "public/assets/images/profile.jpeg";
import Markdown from "react-markdown";
import styles from "./page.module.scss";

export const dynamic = "force-static";

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { start: content } = await fetchData({
    query: startQuery,
    schema: StartSchema,
    variables: {
      locale: locale === "en" ? "en-US" : "de",
    },
  });

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function Page({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "components" });
  const { start: content } = await fetchData({
    query: startQuery,
    schema: StartSchema,
    variables: {
      locale: locale === "en" ? "en-US" : "de",
    },
  });

  return (
    <>
      <header className={styles.appHeader}>
        <Navigation />
      </header>
      <div>
        <Hero
          headline={content.heroHeadline}
          subline={content.heroSubline}
          image={{
            src: profileImage,
            alt: t("hero.imageAlt"),
          }}
        />

        <SkillBox translations={getSkillBoxTranslations(t)} />
        <SectionRow>
          <TextBox>
            <Markdown>{content.about}</Markdown>
          </TextBox>
          <StationBox translations={getStationBoxTranslations(t)} />
        </SectionRow>
        <ProjectShowcase translations={getProjectShowcaseTranslations(t)} />
      </div>
      <footer className={styles.appFooter}>
        <span>
          <Copyright />
          <LegalLink translations={getLegalLinkTranslations(t)} />
        </span>
      </footer>
    </>
  );
}
