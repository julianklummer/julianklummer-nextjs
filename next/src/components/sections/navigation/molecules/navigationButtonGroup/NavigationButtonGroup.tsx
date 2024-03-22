import { LanguageToggle } from "@/components/library/atoms/LanguageToggle/LanguageToggle";
import GithubSVG from "@/icons/navigation/button/github.svg";
import LinkedInSVG from "@/icons/navigation/button/linkedin.svg";
import { IconLink } from "src/components/library/atoms/IconLink/IconLink";
import styles from "./navigationButtonGroup.module.scss";

export const NavigationButtonGroup: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigationButtonGroup} role="list">
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title={
              // TODO: Add translation
              "test"
              // languageContext.language === "en"
              // ? "Open LinkedIn Profile"
              // : "Zum LinkedIn Profil"
            }
            href="https://www.linkedin.com/in/julian-klummer-515a78170/"
            target="_blank"
            icon={<LinkedInSVG />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title={
              // TODO: Add translation
              "test"
              // languageContext.language === "en"
              // ? "Open Github Profile"
              // : "Zum Github Profil"
            }
            href="https://github.com/julianklummer"
            target="_blank"
            icon={<GithubSVG />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};
