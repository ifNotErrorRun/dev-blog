import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ko", "jp"],

  // Used when no locale matches
  defaultLocale: "jp",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ko|jp)/:path*"],
};
