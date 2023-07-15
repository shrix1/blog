import React from "react"
import data from "@/app/all-blog/InputData"
import UserInfo from "./UserInfo"
import BlogOverview from "./BlogOverview"

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params
  const urlName = name.replaceAll("-", " ")
  const filteredData = data.filter((item) => item.title === urlName)

  return (
    <section className="w-full h-[90vh] flex flex-col gap-5 items-center py-8 ">
      <UserInfo data={filteredData} />
      <hr className="w-1/2" />
      <BlogOverview data={filteredData} />
    </section>
  )
}

export default Page
