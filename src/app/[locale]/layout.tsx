"use client";

import NavItem from "@/components/atom/NavItem";
import {
  NavigationMenuIndicator,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const t = useTranslations("global");

  return (
    <div className="p-5">
      <div className="flex justify-between content-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavItem link="/" label={t("home")} />
            <NavItem link="/articles" label={t("articles")} />
            <NavItem link="/series" label={t("series")} />
            <NavItem link="/tags" label={t("tags")} />
            <NavItem link="/resume" label={t("resume")} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="p-10">{children}</div>
    </div>
  );
}
