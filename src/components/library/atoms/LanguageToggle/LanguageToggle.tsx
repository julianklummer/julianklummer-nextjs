import { useRouter } from "next/router";
import TranslationIcon from "public/icons/navigation/button/translation.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import { languageList } from "src/utils/contexts/languageContext/languageList";
import { Locale } from "src/utils/contexts/languageContext/types";

import styles from "./languageToggle.module.scss";

export const LanguageToggle: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  if (!languageContext) throw new Error("LanguageContext not found.");

  const changeLanguage = (locale: Locale): void => {
    if (locale !== languageContext.language) {
      router.push(router.asPath, router.asPath, { locale: locale });
      languageContext.setLanguage(locale);
    }
    setIsOpen(false);
  };

  const handleOptionClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    event.preventDefault();
    changeLanguage(event.currentTarget.dataset.option as Locale);
  };

  const handleOptionKeydown = (
    event: React.KeyboardEvent<HTMLLIElement>
  ): void => {
    if (event.key === "Enter") {
      changeLanguage(event.currentTarget.dataset.option as Locale);
    } else if (event.key === "Escape") {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  };

  const handleClickoutSide = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("mouseup", handleClickoutSide);
    } else {
      document.body.removeEventListener("mouseup", handleClickoutSide);
    }
    return () =>
      document.body.removeEventListener("mouseup", handleClickoutSide);
  }, [isOpen]);

  return (
    <>
      <button
        id="language-toggle"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={styles.languageToggle}
        onClick={() => setIsOpen(!isOpen)}
        ref={toggleRef}
      >
        <TranslationIcon />
      </button>
      {isOpen && (
        <ul
          aria-labelledby="language-toggle"
          id="language-listbox"
          className={styles.languageToggleListbox}
          aria-hidden={!isOpen}
          role="listbox"
        >
          {languageList.map((language) => {
            return (
              <li
                key={`language-${language.identifier}`}
                id={language.identifier}
                className={styles.languageToggleListboxItem}
                role="option"
                aria-selected={languageContext.language === language.identifier}
                data-option={language.identifier}
                onClick={handleOptionClick}
                onKeyDown={handleOptionKeydown}
                tabIndex={0}
              >
                {language.name[languageContext.language]}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
