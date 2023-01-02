import TranslationIcon from "public/icons/navigation/button/translation.svg";
import { useContext } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";

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
    <button onClick={handleClick}>
      <TranslationIcon />
      {languageContext.language === "de" ? "English" : "Deutsch"}
    </button>
  );
};
