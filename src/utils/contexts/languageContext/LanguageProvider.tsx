import { useMemo, useState } from "react";
import type { language } from "./LanguageContext";
import { LanguageContext } from "./LanguageContext";

export interface LanguageHelperInterface {
  language?: language;
  children?: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageHelperInterface> = (props) => {
  const [language, setLanguage] = useState<language>(
    props.language ? props.language : "en"
  );

  const languageMemo = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={languageMemo}>
      {props.children}
    </LanguageContext.Provider>
  );
};
