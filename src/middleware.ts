"use server";

import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ko", "jp"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language");
  if (!acceptLanguage) return locales[0];
  const preferredLocales = acceptLanguage
    .split(",")
    .map((locale) => locale.split(";")[0].trim());

  for (const locale of preferredLocales) {
    if (locales.includes(locale)) return locale;
  }

  return locales[0];
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
