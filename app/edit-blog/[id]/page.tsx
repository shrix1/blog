import React from "react"
import Image from "next/image"
import EditForm from "@/components/editform/EditForm"
import { getSSRBlogs } from "@/app/api/blog/getBlogs"
import { DBBlogData } from "@/types/props"

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const { blogs } = await getSSRBlogs()

  const { title, description, catogory } = blogs.find(
    (blog: DBBlogData) => blog._id === id
  )

  return (
    <main className="w-full min-h-[90vh] py-6 max-h-full flex justify-center items-center flex-col gap-5 px-8">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3 w-full">
        <Image
          width={100}
          height={100}
          alt="blogging-image"
          src="https://illustrations.popsy.co/white/student-in-the-classroom.svg"
          className="dark:bg-white/50 dark:rounded-2xl"
          priority
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Edit a Blog</h1>
          <p className="opacity-70 text-sm md:text-base ">
            Platform for individuals to share their unique perspectives,
            meaningful <br className="hidden lg:inline" />
            stories with the world.
          </p>
        </div>
      </div>

      <hr className="w-full lg:w-1/2 border dark:border-white/20" />
      <div className="w-full lg:w-1/2 px-6 md:px-10">
        <EditForm
          title={title}
          description={description}
          catogory={catogory}
          id={id}
        />
      </div>
    </main>
  )
}

export default Page
