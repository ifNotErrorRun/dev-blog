"use server";

import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";

import TypographyH1 from "@/components/atom/TypographyH1";

interface Props {
  params: { lang: string };
}

export default async function ArticlesPage({ params: { lang } }: Props) {
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.articles}</TypographyH1>
      <div className="mt-5">
        <Link href={"articles/this-is-test-article-page"}>test article</Link>
      </div>
    </>
  );
}
