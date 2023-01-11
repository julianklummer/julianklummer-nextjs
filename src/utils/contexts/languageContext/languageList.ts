import translationsEN from "staticContent/app/translations.en.json";
import translationsDE from "staticContent/app/translations.de.json";
import { translationsSchema } from "staticContent/app/schemas";

type language = {
  identifier: string;
  name: {
    en: string;
    de: string;
  };
};

translationsSchema.parse(translationsEN);
translationsSchema.parse(translationsDE);

export const languageList: language[] = [
  {
    identifier: "en",
    name: {
      en: translationsEN.languageList.english,
      de: translationsDE.languageList.english,
    },
  },
  {
    identifier: "de",
    name: {
      en: translationsEN.languageList.german,
      de: translationsDE.languageList.german,
    },
  },
];
