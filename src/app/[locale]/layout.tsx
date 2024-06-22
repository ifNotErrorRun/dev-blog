import TopNavBar from "@/components/atoms/top-nav-bar";
import { useTranslations } from "next-intl";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const t = useTranslations("global");

  return (
    <div className="p-10">
      <TopNavBar />
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
      <>{children}</>
    </div>
  );
}
