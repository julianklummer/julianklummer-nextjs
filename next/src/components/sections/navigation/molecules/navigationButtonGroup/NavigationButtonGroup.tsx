import { LanguageToggle } from "@/components/library/atoms/LanguageToggle/LanguageToggle";
import GithubSVG from "@/icons/navigation/button/github.svg";
import LinkedInSVG from "@/icons/navigation/button/linkedin.svg";
import { getTranslations } from "next-intl/server";
import { IconLink } from "src/components/library/atoms/IconLink/IconLink";
import styles from "./navigationButtonGroup.module.scss";

export const NavigationButtonGroup: React.FC = async () => {
  const t = await getTranslations("components.navigation");

  return (
    <nav>
      <ul className={styles.navigationButtonGroup} role="list">
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title={t("socialLink", { name: "LinkedIn" })}
            href="https://www.linkedin.com/in/julian-klummer-515a78170/"
            target="_blank"
            icon={<LinkedInSVG />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title={t("socialLink", { name: "Github" })}
            href="https://github.com/julianklummer"
            target="_blank"
            icon={<GithubSVG />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <LanguageToggle
            translations={{
              label: t("languageToggle.label"),
              languages: {
                en: t("languageToggle.languages.en"),
                de: t("languageToggle.languages.de"),
              },
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
