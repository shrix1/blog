"use client"
import { DBBlogData } from "@/types/props"
import React from "react"
import { Badge } from "../ui/badge"
import { HiOutlineArrowRight } from "react-icons/hi"
import { useRouter } from "next/navigation"
import Settings from "./Settings"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "../ui/button"

const BlogCard = ({
  data,
  username,
}: {
  data: DBBlogData
  username?: string
}) => {
  const { title, description, catogory, time, date, _id } = data
  const router = useRouter()
  const path = usePathname()
  const { data: session } = useSession()

  return (
    <section
      className={` w-full lg:w-1/2 space-y-2 rounded-xl p-4 relative group hover:shadow-xl 
      transition-all duration-300 hover:bg-gray-300/10 dark:hover:bg-white/5 border-2 
      border-transparent hover:border-gray-300/40 dark:hover:border-white/5 
      ${path.startsWith("/blog") ? "cursor-default" : "cursor-pointer"}`}
      onClick={() =>
        path.startsWith("/blog")
          ? null
          : router.push(`/all-blog/${title.trim().replace(/[^\w]/gi, "-")}`)
      }
    >
      <div className="flex justify-between items-center">
        <p className="text-xs dark:opacity-50 opacity-70">
          {date} | {time}
        </p>

        {path.startsWith("/blog") &&
        session?.user?.name?.trim().toLowerCase() === username ? (
          <Settings _id={_id} />
        ) : null}
      </div>
      <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
      <p className="line-clamp-2 opacity-70 text-sm">{description}</p>

      <div className="flex gap-2 ">
        {catogory.map((item, index) => {
          return (
            <div key={index}>
              <Badge variant="secondary" className="font-normal">
                # {item}
              </Badge>
            </div>
          )
        })}
      </div>

      {path.startsWith("/blog") ? (
        <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100">
          <Button
            className="px-2 py-1 h-7"
            onClick={() =>
              router.push(`/all-blog/${title.trim().replace(/[^\w]/gi, "-")}`)
            }
          >
            View
          </Button>
        </div>
      ) : (
        <div className="absolute right-3 -rotate-45 bottom-3 opacity-0 group-hover:opacity-70">
          <HiOutlineArrowRight size={30} />
        </div>
      )}
    </section>
  )
}

export default BlogCard
