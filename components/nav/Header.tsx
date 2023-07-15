import React from "react"
import ThemeSetter from "../ThemeSetter"
import LoginDropDown from "./LoginDropDown"

const Header = () => {
  return (
    <header className="w-full p-2 border-b ">
      <nav className="flex justify-around items-center">
        <h1 className="font-bold tracking-wide">Blog It!</h1>
        <div className="flex gap-3 items-center">
          <ThemeSetter />
          <LoginDropDown />
        </div>
      </nav>
    </header>
  )
}

export default Header
