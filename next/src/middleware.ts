import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./translations/locales";
import { parse } from "accept-language-parser";
import { translationMiddleware } from "./middleware/translation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico|apple-icon.png).*)"],
};
