import React from "react"
import UserInfo from "./UserInfo"
import BlogOverview from "./BlogOverview"
import { PropsBlogData } from "@/types/props"
import { getISRBlogs } from "@/app/api/blog/getBlogs"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { name: string }
}): Promise<Metadata> {
  const { name } = params

  return {
    title: `Blog it! | ${name.replaceAll("-", " ")}`,
    description: `Blog title is ${name}`,
  }
}

const Page = async ({ params }: { params: { name: string } }) => {
  const { name } = params
  const { blogs } = await getISRBlogs()

  const filteredData = blogs.filter(
    (item: PropsBlogData) =>
      item.title.trim().replace(/[^\w]/gi, "-").replaceAll(" ", "-") === name
  )

  return (
    <section className="w-full h-[90vh] flex flex-col gap-5 items-center py-8 px-10 lg:px-0">
      <UserInfo data={filteredData} />
      <hr className="w-full lg:w-1/2" />
      <BlogOverview data={filteredData} />
    </section>
  )
}

export default Page
