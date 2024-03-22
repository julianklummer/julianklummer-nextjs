"use client";
import LanguageSVG from "@/icons/navigation/button/language.svg";
import { useRouter } from "next/router";
import { Locale } from "node_modules/next/dist/compiled/@vercel/og/satori";
import { useEffect, useRef, useState } from "react";
import styles from "./languageToggle.module.scss";

// TODO: Refactor language toggle for app router
export const LanguageToggle: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

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
        title={
          languageContext.language === "de"
            ? "Sprache wechseln"
            : "Change language"
        }
        aria-label={
          languageContext.language === "de"
            ? "Sprache wechseln"
            : "Change language"
        }
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
