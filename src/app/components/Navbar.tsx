'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const {data, status } = useSession();
  console.log(data, status);

  return (
    <nav className="shadow-md py-3 w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/" rel="preload" className="nav-link text-2xl font-bold">🛒 NEXTECOM</Link>

        {status === "authenticated" ? (
          <div className="flex">
            <Link href={'/dashboard/user'} className="nav-link">{data?.user?.name}</Link>
            <a className="nav-link pointer" onClick={() => signOut({ callbackUrl: "/login"})}>Logout</a>
          </div>
        ) : status === "loading" ? (
          <a className="nav-link text-red-500">Loading...</a>
        ) : (
          <div className="flex gap-5">
          <Link href={'/login'} className="nav-link">Login</Link>
          <Link href={"/register"} className="nav-link">Register</Link>
        </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;