import { Skeleton } from "@/components/ui/skeleton"
import React from "react"
import { IoMdImage } from "react-icons/io"

const Loading = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col gap-5 items-center py-8 px-10 lg:px-0">
      <div className="w-full lg:w-1/2 flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="md:flex flex-col gap-2 hidden ">
            <Skeleton className="w-36 p-1.5" />
            <Skeleton className="w-40 p-1" />
          </div>
        </div>

        <div className="flex flex-col justify-end items-end gap-1">
          <Skeleton className="w-36 p-1.5" />
          <Skeleton className="w-40 p-1.5" />
        </div>
      </div>

      <hr className="w-full lg:w-1/2" />

      <section className="w-full lg:w-1/2 flex flex-col gap-3">
        <Skeleton className="w-full p-5" />

        <div className="flex gap-3 w-full">
          <Skeleton className="w-24 p-2" />
          <Skeleton className="w-24 p-1" />
          <Skeleton className="w-24 p-2" />
        </div>

        <div className="w-full border-2 h-[300px] rounded-lg flex flex-col gap-2 justify-center items-center">
          <Skeleton>
            <IoMdImage size={50} className="opacity-10" />
          </Skeleton>
          <Skeleton className="w-1/2 p-2" />
        </div>

        <div className="flex gap-2 flex-col">
          <Skeleton className="w-full p-2" />
          <div className="flex gap-1">
            <Skeleton className="w-1/2 p-2" />
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-full p-2" />
          </div>
          <Skeleton className="w-full p-2" />
          <div className="flex gap-1">
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-1/2 p-2" />
            <Skeleton className="w-1/4 p-2" />
          </div>
          <Skeleton className="w-full p-2" />
          <Skeleton className="w-full p-2" />
          <div className="flex gap-1">
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-1/4 p-2" />
          </div>
          <div className="flex gap-1">
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-1/3 p-2" />
            <Skeleton className="w-1/4 p-2" />
          </div>
          <div className="flex gap-1">
            <Skeleton className="w-full p-2" />
            <Skeleton className="w-1/3 p-2" />
            <Skeleton className="w-1/4 p-2" />
            <Skeleton className="w-1/4 p-2" />
            <Skeleton className="w-1/4 p-2" />
            <Skeleton className="w-1/4 p-2" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Loading
