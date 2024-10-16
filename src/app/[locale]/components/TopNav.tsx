'use client'

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const TopNav = () => {
  return (
    <nav className="flex shadow-md py-4 px-8 justify-between mb-3">
      <Link href={"/"} className="nav-link">🛒NEXTECOM</Link>

      <div className="flex gap-5">
        <Link href={"/login"} className="nav-link">Login</Link>
        <Link href={"/register"} className="nav-link">Register</Link>
        <LanguageSwitcher/>
      </div>
    </nav>
  )
}

export default TopNav;