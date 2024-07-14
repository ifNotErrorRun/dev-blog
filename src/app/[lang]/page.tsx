"use server";

import { getDictionary } from "../../lib/i18n/dictionaries";

import TypographyH1 from "@/components/atom/TypographyH1";
// import MessageEventContainer from "@/components/doodle/MessageEventContainer";

interface Props {
  params: { lang: string };
}

export default async function Home({ params: { lang } }: Props) {
  const t = await getDictionary(lang);

  return (
    <>
      <TypographyH1>{t.global.title}</TypographyH1>
      {/* <MessageEventContainer /> */}
    </>
  );
}
