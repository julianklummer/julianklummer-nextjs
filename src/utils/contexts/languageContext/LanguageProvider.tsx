import { useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Locale } from "./types";

interface Props {
  language?: Locale;
  children?: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = (props) => {
  const [language, setLanguage] = useState<Locale>(
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
