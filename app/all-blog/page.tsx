import React from "react"
import Greeting from "@/components/filter/Greeting"
import { getSSRBlogs } from "../api/blog/getBlogs"
import AllBlogCard from "@/components/filter/AllBlogCard"
import Filter from "@/components/filter/Filter"
import { DBBlogData } from "@/types/props"

const Page = async () => {
  const { blogs }: { blogs: DBBlogData[] } = await getSSRBlogs()

  return (
    <main className="w-full flex py-4 px-6 items-center h-[90vh] flex-col gap-5 ">
      <Greeting />
      <Filter />

      <hr className="w-full lg:w-1/2" />

      <AllBlogCard blogs={blogs} />
    </main>
  )
}

export default Page
