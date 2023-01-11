import { createContext } from "react";
import { Locale } from "./types";

interface LanguageContextInterface {
  language: Locale;
  setLanguage: Function;
}

export const LanguageContext = createContext<LanguageContextInterface | null>(
  null
);
