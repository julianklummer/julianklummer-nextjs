import "server-only";
import { Locale, Translation, TranslationSchema } from "../types";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { isLocale } from "./isLocale";
import { locales } from "../locales";

// const makeCreateRequestConfig = (): Parameters<typeof getRequestConfig>[0] => {
//   let loadedTranslations: Partial<Record<Locale, Translation>> = {};

//   return ;
// };

export default getRequestConfig(async ({ locale }) => {
  try {
    isLocale(locale);
    const translation = await import(`../translation.${locale}.json`);
    TranslationSchema.parse(translation);

    return {
      messages: translation,
    };
  } catch (error) {
    notFound();
  }
});
