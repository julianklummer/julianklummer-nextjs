import "server-only";
import { Locale, Translation, TranslationSchema } from "./types";

const loadTranslationFile = async (locale: Locale): Promise<Translation> => {
  const translation = await import(
    `src/translations/translation.${locale}.json`
  );
  TranslationSchema.parse(translation);
  return translation;
};

const makeGetTranslation = () => {
  let loadedTranslations: Partial<Record<Locale, Translation>> = {};

  return async (locale: Locale): Promise<Translation> => {
    if (!(locale in loadedTranslations)) {
      loadedTranslations[locale] = await loadTranslationFile(locale);
    }
    return loadedTranslations[locale]!;
  };
};

export const getTranslation = makeGetTranslation();
