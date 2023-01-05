import LinkedInSvg from "public/icons/navigation/button/linkedin.svg";
import { IconLink } from "src/components/atoms/IconLink/IconLink";
import { LanguageToggle } from "src/components/atoms/LanguageToggle/LanguageToggle";
import styles from "./navigationButtonGroup.module.scss";

export const NavigationButtonGroup: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigationButtonGroup}>
        <li>
          <IconLink
            title="Open LinkedIn Profile"
            href="https://www.linkedin.com/in/julian-klummer-515a78170/"
            icon={<LinkedInSvg />}
          />
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};
