import React from "react"
// import UserInfo from "./UserInfo"
// import BlogOverview from "./BlogOverview"
import { PropsBlogData } from "@/types/props"

// const getCorrectBlogs = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/blog", {
//       cache: "no-store",
//     })
//     if (!res.ok) throw new Error("Something went wrong")
//     return res.json()
//   } catch (err) {
//     console.log(err)
//   }
// }

const Page = async ({ params }: { params: { name: string } }) => {
  // const { name } = params
  // const { blogs } = await getCorrectBlogs()

  // const filteredData = blogs.filter(
  //   (item: PropsBlogData) =>
  //     item.title.replace(/[^\w]/gi, "-").replaceAll(" ", "-") === name
  // )

  return (
    <section className="w-full h-[90vh] flex flex-col gap-5 items-center py-8 px-10 lg:px-0">
      {/* <UserInfo data={filteredData} />
      <hr className="w-full lg:w-1/2" />
      <BlogOverview data={filteredData} /> */}
    </section>
  )
}

export default Page
