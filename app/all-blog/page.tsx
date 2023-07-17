import BlogCard from "@/components/filter/BlogCard"
import Filter from "@/components/filter/Filter"
import React from "react"
import Greeting from "@/components/filter/Greeting"
import { PropsBlogData } from "@/types/props"
import { getSSRBlogs } from "../api/blog/getBlogs"

const Page = async () => {
  const { blogs } = await getSSRBlogs()

  return (
    <main className="w-full flex py-4 px-6 items-center h-[90vh] flex-col gap-5 ">
      <Greeting />
      <Filter />

      <hr className="w-full lg:w-1/2" />

      {blogs.map((item: PropsBlogData, index: React.Key | null | undefined) => {
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
