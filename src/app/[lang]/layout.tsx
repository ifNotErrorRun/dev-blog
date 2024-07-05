"use server";

import NavItem from "@/components/atom/NavItem";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { getDictionary } from "../dictionaries";
import { cn } from "@/lib/utils";
import "../global.css";

interface Props {
  params: { lang: string };
  children: React.ReactNode;
}

export default async function MainLayout({
  params: { lang },
  children,
}: Props) {
  const t = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body className={cn(`min-h-screen bg-background antialiased`)}>
        <div className="p-5">
          <div className="flex justify-between content-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem link={`/${lang}`} label={t.global.home} />
                <NavItem link={`/${lang}/articles`} label={t.global.articles} />
                <NavItem link={`/${lang}/series`} label={t.global.series} />
                <NavItem link={`/${lang}/tags`} label={t.global.tags} />
                <NavItem link={`/${lang}/resume`} label={t.global.resume} />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="p-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }, { locale: "jp" }];
}
