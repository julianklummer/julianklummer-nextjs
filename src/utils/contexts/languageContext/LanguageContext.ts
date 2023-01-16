import { createContext } from "react";
import { Locale } from "./types";

interface LanguageContext {
  language: Locale;
  setLanguage: Function;
}

export const LanguageContext = createContext<LanguageContext | null>(null);
