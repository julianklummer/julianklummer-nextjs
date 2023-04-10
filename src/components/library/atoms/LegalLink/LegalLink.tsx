import { useContext } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import styles from "./legalLink.module.scss";

export const LegalLink: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found.");

  const handleFocus = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleClick = () => {
    alert(
      languageContext.language === "de"
        ? "Bitte senden Sie mir eine kurze Mail an contact@julianklummmer.de und ich sende Ihnen die benötigten Informationen."
        : "Please send me a short email to contact@julianklummmer.de and I will send you the required information."
    );
  };

  return (
    <button
      className={styles.legalLink}
      onFocus={handleFocus}
      onClick={handleClick}
    >
      {languageContext.language === "de" ? "Impressum" : "Legal"}
    </button>
  );
};
