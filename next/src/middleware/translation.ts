import createMiddleware from "next-intl/middleware";
import { localePrefix } from "../utils/navigation";
import { locales } from "@/translations/locales";

export const translationMiddleware = createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});
