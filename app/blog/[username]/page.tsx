import ProfileHeader from "@/components/profile/ProfileHeader"
import { DBBlogData } from "@/types/props"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiEdit3 } from "react-icons/fi"
import BlogCard from "@/components/filter/BlogCard"
import { getSSRBlogs } from "@/app/api/blog/getBlogs"
import { Metadata } from "next"
import LoadingState from "./LoadingState"

export async function generateMetadata({
  params,
}: {
  params: { username: string }
}): Promise<Metadata> {
  const { username } = params

  return {
    title: `Blog it! | ${username.replaceAll("-", " ")}`,
    description: `Blog written by ${username}`,
  }
}

const Page = async ({ params }: { params: { username: string } }) => {
  const { username } = params
  const { blogs } = await getSSRBlogs()

  const filteredData = blogs.filter(
    (item: DBBlogData) =>
      item.user
        .trim()
        .replace(/[^\w]/gi, "-")
        .replaceAll(" ", "-")
        .toLowerCase() === username
  )

  return (
    <>
      <LoadingState />
      <main className="w-full h-[90vh] py-6 flex flex-col gap-3 items-center px-3 lg:px-0">
        <ProfileHeader filteredUser={filteredData} />

        <hr className="w-full lg:w-1/2" />

        <div className="flex justify-between flex-col gap-2 md:gap-0 md:flex-row w-full lg:w-1/2 items-center">
          <p>
            <span className="opacity-70">Number of Blogs written :</span>
            <span className="font-bold"> {filteredData.length}</span>
          </p>

          <Link href="/add-blog">
            <Button>
              Write your's Now
              <FiEdit3 className="ml-2" />
            </Button>
          </Link>
        </div>

        <hr className="w-full lg:w-1/2" />

        {filteredData.map(
          (item: DBBlogData, index: React.Key | null | undefined) => {
            return (
              <div
                key={index}
                className="grid place-items-center flex-col w-full gap-3"
              >
                <BlogCard data={item} username={username} />
              </div>
            )
          }
        )}
      </main>
    </>
  )
}

export default Page
