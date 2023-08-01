import React from "react"

const Loading = ({ text }: { text: string }) => {
  return (
    <section className="fixed -mt-14 flex justify-center items-center w-full h-screen z-[100] dark:bg-white/10 bg-black/10 backdrop-blur-[2px] ">
      <div
        className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-b-black/70
        border-t-black dark:border-b-white/70 grid place-items-center dark:border-t-white"
      />
      <h1 className="dark:text-white absolute animate-bounce text-black font-bold">
        {text}
      </h1>
    </section>
  )
}

export default Loading
