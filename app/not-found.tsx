import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <section className="flex w-full h-screen flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Image
        src="https://illustrations.popsy.co/white/crashed-error.svg"
        width={400}
        height={400}
        alt="404-image"
        priority
      />

      <div className="flex gap-10">
        <Link href="/">
          <Button className="px-5 flex justify-center items-center gap-1">
            <BsArrowLeftShort size={25} />
            Go to Home
          </Button>
        </Link>

        <Link href="/all-blog">
          <Button variant="outline" className="px-10">
            View All Blogs
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default NotFound
