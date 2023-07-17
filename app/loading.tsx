import { Skeleton } from "@/components/ui/skeleton"
import React from "react"
import { IoMdImage } from "react-icons/io"

const Loading = () => {
  return (
    <main className="w-full h-[90vh] flex flex-col justify-between">
      <section className="w-full flex flex-col lg:flex-row lg:justify-center lg:items-center px-10 lg:px-28 pt-10 gap-10 lg:gap-28">
        <div
          className="w-[200px] border h-[200px] lg:w-[500px] lg:h-[500px] xl:w-[900px] xl:h-[500px]
         rounded-2xl grid place-items-center"
        >
          <Skeleton>
            <IoMdImage size={50} className="opacity-10" />
          </Skeleton>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Skeleton className="w-[200px] p-6" />

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
          </div>

          <div className="flex gap-3 mt-3">
            <Skeleton className="w-36 p-4" />
            <Skeleton className="w-36 p-4" />
          </div>
        </div>
      </section>

      <div className="w-full flex gap-2 justify-center items-center">
        <Skeleton className="w-16 p-2" />
        <Skeleton className="w-36 p-2" />
      </div>
    </main>
  )
}

export default Loading
