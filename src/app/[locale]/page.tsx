import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full">
      <nav className="shadow-md py-3 w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="nav-link text-2xl font-bold">🛒 NEXTECOM</Link>

        <div className="flex gap-5">
          <Link href={"/login"} className="nav-link">{t("login")}</Link>
          <Link href={"/register"} className="nav-link">{t("register")}</Link>
          <LanguageSwitcher/>
        </div>
      </div>
    </nav>
    
    <div className='max-w-screen-2xl mx-auto p-4'>
      {t("title") + t("about")}
    </div>
    </div>
  );
}