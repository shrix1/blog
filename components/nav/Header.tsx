import React from "react"
import ThemeSetter from "../ThemeSetter"
import LoginDropDown from "./LoginDropDown"
import Link from "next/link"
import { CgEditUnmask } from "react-icons/cg"

const Header = () => {
  return (
    <header className="w-full p-2 border-b border-border">
      <nav className="flex justify-around items-center">
        <h1 className="font-bold tracking-wide">
          <Link href="/" className="flex gap-2 items-center justify-center">
            <CgEditUnmask /> Blog It!
          </Link>
        </h1>
        <div className="flex gap-3 items-center">
          <ThemeSetter />
          <LoginDropDown />
        </div>
      </nav>
    </header>
  )
}

export default Header
