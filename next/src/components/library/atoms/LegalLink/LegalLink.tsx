"use client";
import { Translation } from "@/translations/types";
import styles from "./legalLink.module.scss";

type Props = {
  translations: Translation["components"]["legal"];
};

export const LegalLink: React.FC<Props> = ({ translations }) => {
  const handleFocus = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleClick = () => {
    alert(translations.alert);
  };

  return (
    <button
      className={styles.legalLink}
      onFocus={handleFocus}
      onClick={handleClick}
    >
      {translations.alert}
    </button>
  );
};
