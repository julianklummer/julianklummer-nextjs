import { useRouter } from "next/router";
import TranslationIcon from "public/icons/navigation/button/translation.svg";
import { useContext, useState } from "react";
import { LanguageContext } from "src/utils/contexts/languageContext/LanguageContext";
import { languageList } from "src/utils/contexts/languageContext/languageList";
import { Locale } from "src/utils/contexts/languageContext/types";

import styles from "./languageToggle.module.scss";

export const LanguageToggle: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (!languageContext) throw new Error("LanguageContext not found.");

  const handleLanguageSelect = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    locale: Locale
  ): void => {
    e.preventDefault();
    console.log(router.asPath);
    if (locale != languageContext.language) {
      router.push(router.asPath, router.asPath, { locale: locale });
      languageContext.setLanguage(locale);
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        id="language-toggle"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={styles.languageToggle}
        onClick={() => setIsOpen(!isOpen)}
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
                onClick={(event) =>
                  handleLanguageSelect(event, language.identifier)
                }
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
