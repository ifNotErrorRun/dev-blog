"use server";

import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";

import TypographyH1 from "@/components/atom/TypographyH1";
import { getAllMD } from "@/lib/md/md-utils";

interface Props {
  params: { lang: string };
}

export default async function ArticlesPage({ params: { lang } }: Props) {
  debugger;
  const t = await getDictionary(lang);
  const mdList = await getAllMD(lang);

  return (
    <>
      <TypographyH1>{t.global.articles}</TypographyH1>
      <div className="mt-10 grid gap-y-2">
        {mdList.map(({ title, slug }: Slug) => (
          <Link key={slug} href={slug}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
}
