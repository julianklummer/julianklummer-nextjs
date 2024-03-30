import createMiddleware from "next-intl/middleware";
import { locales } from "@/translations/locales";

export const translationMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix: "as-needed",
});
