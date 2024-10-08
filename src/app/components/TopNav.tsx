import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="flex shadow-md py-4 px-8 justify-between mb-3">
      <Link href={"/"} className="nav-link">🛒NEXTECOM</Link>

      <div className="flex gap-5">
        <Link href={"/login"} className="nav-link">Login</Link>
        <Link href={"/register"} className="nav-link">Register</Link>
      </div>
    </nav>
  )
}

export default TopNav;