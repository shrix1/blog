import React from "react"
import Image from "next/image"
import InputFields from "./InputFields"

const Page = () => {
  return (
    <main className="w-full h-[90vh] flex justify-center items-center flex-col gap-5">
      <div className="flex justify-center items-center gap-3 w-full">
        <Image
          width={100}
          height={100}
          alt="blogging-image"
          src="https://illustrations.popsy.co/white/microphone.svg"
          className="dark:bg-white/50 dark:rounded-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">Write a Blog</h1>
          <p className="opacity-70">
            Platform for individuals to share their unique perspectives,
            meaningful stories <br />
            with the world.
          </p>
        </div>
      </div>

      <hr className="w-1/2 border dark:border-white/20" />
      <div className="w-1/2 px-10">
        <InputFields />
      </div>
    </main>
  )
}

export default Page
