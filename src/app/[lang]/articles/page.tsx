"use server";

import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";

import TypographyH1 from "@/components/atom/TypographyH1";
import getAllArticles from "@/lib/md/getAllArticles";

interface Props {
  params: { lang: string };
}

export default async function ArticlesPage({ params: { lang } }: Props) {
  const t = await getDictionary(lang);
  const allArticles = await getAllArticles(lang);

  return (
    <>
      <TypographyH1>{t.global.articles}</TypographyH1>
      <div className="mt-10 grid gap-y-2">
        {allArticles.map(({ title, slug }: Slug) => (
          <Link key={slug} href={slug}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
}
