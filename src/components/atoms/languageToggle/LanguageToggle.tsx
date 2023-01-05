import TranslationIcon from "public/icons/navigation/button/translation.svg";
import { useContext } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import styles from "./languageToggle.module.scss";

export const LanguageToggle: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error(
      "LanguageContext not found. LanguageToggle musst be used within a LanguageContextProvider."
    );
  }

  const handleClick = () => {
    languageContext.setLanguage(
      languageContext.language === "en" ? "de" : "en"
    );
  };

  return (
    <button className={styles.languageToggle} onClick={handleClick}>
      <TranslationIcon />
    </button>
  );
};
