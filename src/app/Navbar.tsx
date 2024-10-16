'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  //@ts-ignore
  const {data, status, loading } = useSession();
  console.table({ data, status, loading});

  return (
    <nav className="shadow-md py-3 w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/" className="nav-link text-2xl font-bold">🛒 NEXTECOM</Link>

        <div className="flex gap-5">
          <Link href={'login'} className="nav-link">Login</Link>
          <Link href={"/register"} className="nav-link">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;