import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const Loading = () => {
  return (
    <main className="w-full h-[90vh] py-6 flex flex-col gap-3 items-center">
      <section className="w-full lg:w-1/2 flex justify-center flex-col gap-3 items-center">
        <Skeleton className="w-24 h-24 rounded-full" />

        <div className="flex flex-col gap-2 justify-center items-center">
          <Skeleton className="w-36 p-3" />
          <Skeleton className="w-48 p-2" />
        </div>
      </section>

      <hr className="w-full lg:w-1/2" />

      <div className="flex justify-between flex-col gap-2 md:gap-0 md:flex-row w-full lg:w-1/2 items-center">
        <div className="flex gap-2">
          <Skeleton className="w-40 p-3" />
          <Skeleton className="w-10 p-3" />
        </div>
        <Skeleton className="w-36 p-3" />
      </div>

      <hr className="w-full lg:w-1/2" />

      {Array(4)
        .fill(0)
        .map((_, index) => {
          return (
            <section
              key={index}
              className="w-full lg:w-1/2 flex gap-3 flex-col p-3 border border-border/30 rounded-lg"
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
