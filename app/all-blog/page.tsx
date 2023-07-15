import BlogCard from "@/components/filter/BlogCard"
import Filter from "@/components/filter/Filter"
import React from "react"
import data from "./InputData"
import Greeting from "@/components/filter/Greeting"

const Page = () => {
  return (
    <main className="w-full flex py-4 px-6 items-center h-[90vh] flex-col gap-5 ">
      <Greeting />
      <Filter />

      <hr className="w-full lg:w-1/2" />
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="grid place-items-center flex-col w-full gap-3"
          >
            <BlogCard data={item} />
          </div>
        )
      })}
    </main>
  )
}

export default Page
