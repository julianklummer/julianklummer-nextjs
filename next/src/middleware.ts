import { NextRequest, NextResponse } from "next/server";
import { languages } from "./translations/languages";
import { parse } from "accept-language-parser";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) return parse(acceptLanguage)[0].code;
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico|apple-icon.png).*)"],
};
