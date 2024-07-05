import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function GlobalLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn(`min-h-screen bg-background antialiased`)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
