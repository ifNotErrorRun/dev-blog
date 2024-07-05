import { TypographyH1 } from "@/components/atom/TypographyH1";
import { useTranslations } from "next-intl";

export default function Resume() {
  const t = useTranslations("global");
  return (
    <>
      <TypographyH1>{t("resume")}</TypographyH1>
    </>
  );
}
