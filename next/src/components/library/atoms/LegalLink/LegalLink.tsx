"use client";
import styles from "./legalLink.module.scss";

export const LegalLink: React.FC = () => {
  const handleFocus = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleClick = () => {
    alert(
      // TODO: Add translation
      test
      // languageContext.language === "de"
      // ? "Bitte senden Sie mir eine kurze Mail an contact@julianklummmer.de und ich sende Ihnen die benötigten Informationen."
      // : "Please send me a short email to contact@julianklummmer.de and I will send you the required information."
    );
  };

  return (
    <button
      className={styles.legalLink}
      onFocus={handleFocus}
      onClick={handleClick}
    >
      {/* TODO: Add translation */}
      Impressum
      {/* {languageContext.language === "de" ? "Impressum" : "Legal"} */}
    </button>
  );
};
