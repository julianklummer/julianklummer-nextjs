import { createContext } from 'react'

export type language = 'en' | 'de'

interface LanguageContextInterface {
  language: language
  setLanguage: Function
}

export const LanguageContext = createContext<LanguageContextInterface | null>(
  null
)
