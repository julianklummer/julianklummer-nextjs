import { locales } from "../locales";
import { Locale } from "../types";

export function isLocale(locale: string): asserts locale is Locale {
  if (locales.includes(locale as Locale)) return;
  throw new Error("Locale is not valid.");
}
