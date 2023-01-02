import Image from "next/image";
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
            icon={
              <Image
                alt=""
                src="/icons/navigation/button/linkedin.svg"
                fill
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              />
            }
          />
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};
