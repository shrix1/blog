"use client"
import { useSession } from "next-auth/react"
import React from "react"
import { FiSmile } from "react-icons/fi"

const Greeting = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <h1 className="flex items-center w-full lg:w-1/2 font-medium text-lg -mb-3">
          Hello, <span className="font-bold"> {session?.user?.name}</span>
          <FiSmile className="stroke-[2px] ml-1" />
        </h1>
      ) : null}
    </>
  )
}

export default Greeting
