import GithubSvg from "public/icons/navigation/button/github.svg";
import LinkedInSvg from "public/icons/navigation/button/linkedin.svg";
import { IconLink } from "src/components/library/atoms/IconLink/IconLink";
import { LanguageToggle } from "src/components/library/atoms/LanguageToggle/LanguageToggle";
import styles from "./navigationButtonGroup.module.scss";

export const NavigationButtonGroup: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigationButtonGroup}>
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title="Open LinkedIn Profile"
            href="https://www.linkedin.com/in/julian-klummer-515a78170/"
            target="_blank"
            icon={<LinkedInSvg />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <IconLink
            title="Open Github Profile"
            href="https://github.com/Julian-Kl"
            target="_blank"
            icon={<GithubSvg />}
          />
        </li>
        <li className={styles.navigationButtonGroupItem}>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};
