import BlogCard from "@/components/filter/BlogCard"
import Filter from "@/components/filter/Filter"
import React from "react"
import data from "./InputData"

const Page = () => {
  return (
    <main className="w-full flex p-8 items-center h-[90vh] flex-col gap-10">
      <Filter />

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
