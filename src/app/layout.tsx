import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";

const notoJp = Noto_Sans_JP({ subsets: ["latin"] });
const notoKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chanho.dev",
  description: "Chanho Kim dev blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoKr.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
