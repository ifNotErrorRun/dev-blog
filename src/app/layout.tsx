import { ThemeProvider } from "@/lib/theme/theme-provider";
import { cn } from "@/lib/utils";
import "./global.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html suppressHydrationWarning>
        <head />
        <body className={cn(`min-h-screen bg-background antialiased`)}>
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
    </>
  );
}
