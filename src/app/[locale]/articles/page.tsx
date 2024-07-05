"use client";

import { TypographyH1 } from "@/components/atom/TypographyH1";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Article() {
  const t = useTranslations("global");
  const pathname = usePathname();

  return (
    <>
      <TypographyH1>{t("articles")}</TypographyH1>
      <div className="mt-5">
        <Link href={`${pathname}/this-is-test-article-page`}>test article</Link>
      </div>
    </>
  );
}
