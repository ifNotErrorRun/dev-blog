"use server";

import TypographyH1 from "@/components/atom/TypographyH1";
import { getDictionary } from "../dictionaries";

interface Props {
  params: { lang: string };
}

export default async function Home({ params: { lang } }: Props) {
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.title}</TypographyH1>
    </>
  );
}
