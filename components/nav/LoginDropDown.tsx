"use client"
import { Button } from "@/components/ui/button"
import { AiFillGoogleCircle } from "react-icons/ai"
import { ImGithub } from "react-icons/im"
import { AiOutlineLogout } from "react-icons/ai"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"

export default function LoginDropDown() {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {session?.user?.image && (
              <Avatar>
                <AvatarImage
                  src={session?.user?.image}
                  alt="user profile picture"
                />
                <AvatarFallback>
                  {session?.user?.name &&
                    session?.user?.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              <div>
                <h1 className="capitalize text-sm">{session?.user?.name}</h1>
                <p className="text-[10px] opacity-50">{session?.user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link
                href={`/blog/${session?.user?.name
                  ?.trim()
                  .replace(/[^\w]/gi, "-")
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
              >
                <DropdownMenuItem>My Blogs</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut()}
                className="text-red-500 focus:bg-red-500/20 focus:text-red-500"
              >
                Logout
                <DropdownMenuShortcut>
                  <AiOutlineLogout size={20} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Login / Signup</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => signIn("github")}
                className="flex justify-around"
              >
                <ImGithub size={20} />
                Continue with Github
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signIn("google")}
                className="flex justify-around"
              >
                <AiFillGoogleCircle size={20} />
                Continue with Google
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
