import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const Loading = () => {
  return (
    <main className="w-full flex py-4 px-6 items-center h-[90vh] flex-col gap-5 ">
      <div className="w-full lg:w-1/2 flex justify-start">
        <Skeleton className="w-40 p-3 text-left" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-3 ">
        <Skeleton className="w-full lg:w-[70%] p-5" />

        <div className="flex gap-3 w-full">
          <Skeleton className="w-1/2 p-4" />
          <Skeleton className="w-1/2 p-4" />
          <Skeleton className="w-1/2 p-4" />
        </div>
      </div>

      <hr className="w-full lg:w-1/2" />

      {Array(4)
        .fill(0)
        .map((_, index) => {
          return (
            <section
              key={index}
              className="w-full lg:w-1/2 flex gap-3 flex-col p-3 border rounded-lg"
            >
              <Skeleton className="w-40 p-2" />
              <Skeleton className="w-full p-4" />

              <div className="flex flex-col gap-2 w-full">
                <Skeleton className="w-full p-2" />
                <Skeleton className="w-[75%] p-2" />
              </div>

              <div className="flex gap-4">
                <Skeleton className="w-20 p-2" />
                <Skeleton className="w-20 p-2" />
                <Skeleton className="w-20 p-2" />
              </div>
            </section>
          )
        })}
    </main>
  )
}

export default Loading
