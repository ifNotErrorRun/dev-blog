"use client";

import { TypographyH1 } from "@/components/atom/TypographyH1";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Resume() {
  const t = useTranslations("global");
  const { title } = useParams();

  return (
    <>
      <TypographyH1>{title}</TypographyH1>
      <p className="mt-5">test article body</p>
    </>
  );
}
