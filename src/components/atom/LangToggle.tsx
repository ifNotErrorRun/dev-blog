"use client";

import * as React from "react";
import Image from "next/image";
import jpnIcon from "@/assets/flag/japan.svg";
import korIcon from "@/assets/flag/korea.svg";
import engIcon from "@/assets/flag/united-kingdom.svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, usePathname, useRouter } from "next/navigation";

const LangToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { lang }: { lang: string } = useParams();

  const setLang = (lang: string) => {
    const replacedPathname = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(replacedPathname);
  };

  const getFlag = (lang: string) => {
    switch (lang) {
      case "en":
        return engIcon;
      case "jp":
        return jpnIcon;
      case "ko":
        return korIcon;
      default:
        return engIcon;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Image src={getFlag(lang)} alt="Current flag" width={36} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("en")}>
          <Image
            src={engIcon}
            alt="United State flag"
            width={30}
            className="me-2"
          />
          <p>English</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("jp")}>
          <Image src={jpnIcon} alt="Japan flag" width={30} className="me-2" />
          <p>日本語</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("ko")}>
          <Image src={korIcon} alt="Korea flag" width={30} className="me-2" />
          <p>한국어</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
