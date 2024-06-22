import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ko", "jp"],

  // Used when no locale matches
  defaultLocale: "jp",
});

export const config = {
  matcher: [
    "/((?!api|_next|static|public|images|favicon.ico|robots.txt).*)",
    "/(en|ko|jp)(/(?!api|_next|static|public|images|favicon.ico|robots.txt).*)",
  ],
};
