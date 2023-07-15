"use client"
import { PropsBlogData } from "@/types/props"
import React from "react"
import { Badge } from "../ui/badge"
import { HiOutlineArrowRight } from "react-icons/hi"
import { useRouter } from "next/navigation"

const BlogCard = ({ data }: { data: PropsBlogData }) => {
  const { title, description, category, time, date } = data
  const router = useRouter()

  return (
    <section
      className="w-full lg:w-1/2 space-y-2 rounded-xl p-4 relative group cursor-pointer hover:shadow-xl 
      transition-all duration-300 hover:bg-gray-300/10 dark:hover:bg-white/5 border-2 
      border-transparent hover:border-gray-300/40 dark:hover:border-white/5"
      onClick={() => router.push(`/all-blog/${title.replaceAll(" ", "-")}`)}
    >
      <p className="text-xs dark:opacity-50 opacity-70">
        {date} | {time}
      </p>
      <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
      <p className="line-clamp-2 opacity-70 text-sm">{description}</p>

      <div className="flex gap-2 ">
        {category.map((item, index) => {
          return (
            <div key={index}>
              <Badge variant="secondary" className="font-normal">
                # {item}
              </Badge>
            </div>
          )
        })}
      </div>

      <div className="absolute right-3 -rotate-45 bottom-3 opacity-0 group-hover:opacity-70">
        <HiOutlineArrowRight size={30} />
      </div>
    </section>
  )
}

export default BlogCard
