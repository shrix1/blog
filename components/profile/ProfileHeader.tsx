"use client"
import React from "react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { useSession } from "next-auth/react"
import { PropsBlogData } from "@/types/props"

const ProfileHeader = ({ filteredUser }: PropsBlogData[] | any) => {
  const { data: session } = useSession()
  const { user, email, img } = filteredUser[0]

  return (
    <section className="w-full lg:w-1/2 flex justify-center flex-col gap-3 items-center">
      {session?.user?.image && (
        <Avatar className="w-24 h-24">
          <AvatarImage src={img} alt="user profile picture" />
          <AvatarFallback>
            {user && user.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize text-xl font-semibold">{user}</h1>
        <p className="text-xs opacity-60">{email}</p>
      </div>
    </section>
  )
}

export default ProfileHeader
