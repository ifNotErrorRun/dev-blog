"use server";

import React from "react";
import Link from "next/link";
import { getDictionary } from "../../lib/i18n/dictionaries";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import NavItem from "@/components/atom/NavItem";
import TypographyH3 from "@/components/atom/TypographyH3";
import ThemeToggle from "@/components/atom/ThemeToggle";
import LangToggle from "@/components/atom/LangToggle";

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
    <div className="flex justify-center w-full py-3">
      <div className="flex flex-col xl:w-[1024px] lg:w-[768px]">
        <nav className="flex justify-between">
          <TypographyH3>
            <Link href={`/${lang}`}>{t.global.title}</Link>
          </TypographyH3>
          <div className="grid grid-flow-col-dense gap-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem link={`/${lang}`} label={t.global.home} />
                <NavItem link={`/${lang}/about`} label={t.global.about} />
                <NavItem link={`/${lang}/articles`} label={t.global.articles} />
                <NavItem link={`/${lang}/series`} label={t.global.series} />
                <NavItem link={`/${lang}/tags`} label={t.global.tags} />
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <LangToggle />
          </div>
        </nav>
        <Separator className="my-3" />

        <div className="mt-5 p-10 justify-start">{children}</div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }, { locale: "jp" }];
}
