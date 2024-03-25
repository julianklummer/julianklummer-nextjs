"use client";
import LanguageSVG from "@/icons/navigation/button/language.svg";
import { locales } from "@/translations/locales";
import { Locale, Translation } from "@/translations/types";
import { usePathname, useRouter } from "@/utils/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import styles from "./languageToggle.module.scss";

type Props = {
  translations: Translation["components"]["navigation"]["languageToggle"];
};

export const LanguageToggle: React.FC<Props> = ({ translations }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const currentLanguage = useLocale();
  const pathname = usePathname();

  const changeLanguage = (newLocale: Locale): void => {
    if (newLocale !== currentLanguage) {
      router.push(pathname, { locale: newLocale });
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

  const handleClickoutSide = (event: MouseEvent): void => {
    if (!dropdownRef.current?.contains(event.target as Node)) setIsOpen(false);
  };

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
        title={translations.label}
        aria-label={translations.label}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={styles.languageToggle}
        onClick={() => setIsOpen(!isOpen)}
        ref={toggleRef}
      >
        <LanguageSVG />
      </button>
      {isOpen && (
        <ul
          aria-labelledby="language-toggle"
          id="language-listbox"
          className={styles.languageToggleListbox}
          aria-hidden={!isOpen}
          role="listbox"
          ref={dropdownRef}
        >
          {locales.map((locale) => {
            return (
              <li
                key={`language-${locale}`}
                className={styles.languageToggleListboxItem}
                role="option"
                data-option={locale}
                aria-selected={currentLanguage === locale}
                onClick={handleOptionClick}
                onKeyDown={handleOptionKeydown}
                tabIndex={0}
              >
                {translations.languages[locale]}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
