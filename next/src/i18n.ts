import "server-only";
import { TranslationSchema } from "./translations/types";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { isLocale } from "./translations/utils/isLocale";

export default getRequestConfig(async ({ locale }) => {
  try {
    isLocale(locale);
    const translation = await import(
      `./translations/translation.${locale}.json`
    );
    TranslationSchema.parse(translation);

    return {
      messages: translation,
    };
  } catch (error) {
    console.log("Error: ", error);
    notFound();
  }
});
