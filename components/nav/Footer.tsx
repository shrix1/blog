import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1>
        Build by{" "}
        <Link
          href="https://github.com/shrix1"
          className="underline underline-offset-2"
        >
          Shriprasanna
        </Link>{" "}
      </h1>
    </div>
  )
}

export default Footer
