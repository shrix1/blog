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
      className="w-1/2 space-y-2 rounded-xl p-3 relative group cursor-pointer"
      onClick={() => router.push(`/all-blog/${title.replaceAll(" ", "-")}`)}
    >
      <p className="text-xs opacity-40">
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
