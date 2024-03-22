import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./translations/locales";
import { parse } from "accept-language-parser";
import { translationMiddleware } from "./middleware/translation";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) return parse(acceptLanguage)[0].code;
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  translationMiddleware(request);
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico|apple-icon.png).*)"],
};
