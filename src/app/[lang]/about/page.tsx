"use server";

import { getDictionary } from "@/lib/i18n/dictionaries";

import TypographyH1 from "@/components/atom/TypographyH1";
import Link from "next/link";

interface Props {
  params: { lang: string };
}

export default async function AboutPage({ params: { lang } }: Props) {
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.about}</TypographyH1>
      <div className="mt-5">
        <Link href={`/${lang}/about/resume`}>{t.global.resume}</Link>
      </div>
    </>
  );
}
