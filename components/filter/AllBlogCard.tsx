"use client"
import { DBBlogData } from "@/types/props"
import React, { useState } from "react"
import BlogCard from "./BlogCard"
import { useSearchStore } from "@/store/mainStore"

const AllBlogCard = ({ blogs }: { blogs: DBBlogData[] }) => {
  const search = useSearchStore((state) => state.search)
  const [data, setData] = useState(blogs)

  return (
    <>
      {data
        .filter((item: any) => {
          if (search === "") {
            return item
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item
          }
        })
        .map((item: DBBlogData, index: React.Key | null | undefined) => {
          return (
            <div
              key={index}
              className="grid place-items-center flex-col w-full gap-3"
            >
              <BlogCard data={item} />
            </div>
          )
        })}
    </>
  )
}

export default AllBlogCard
