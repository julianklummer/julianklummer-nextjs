import "server-only";
import { languages } from "src/translations/languages";
import { Translation, TranslationSchema } from "./types";

const loadTranslationFile = async (
  lang: (typeof languages)[number]
): Promise<Translation> => {
  const translation = await import(`src/translations/translation.${lang}.json`);
  TranslationSchema.parse(translation);
  return translation;
};

const makeGetTranslation = () => {
  let loadedTranslations: Partial<
    Record<(typeof languages)[number], Translation>
  > = {};

  return async (
    lang: keyof typeof loadedTranslations
  ): Promise<Translation> => {
    if (!(lang in loadedTranslations)) {
      loadedTranslations[lang] = await loadTranslationFile(lang);
    }
    return loadedTranslations[lang]!;
  };
};

export const getTranslation = makeGetTranslation();
