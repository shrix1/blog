"use client"
import React from "react"
import { FiEdit3 } from "react-icons/fi"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSession } from "next-auth/react"

const WriteBlogButtton = () => {
  const { status } = useSession()

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/add-blog">
              <Button
                variant="outline"
                disabled={status === "authenticated" ? false : true}
                className="border-2 border-border"
              >
                Write a Blog <FiEdit3 className="ml-2" />
              </Button>
            </Link>
          </TooltipTrigger>

          {status === "authenticated" ? null : (
            <TooltipContent className="py-0.5 px-2">
              <p>Login in to write a blog</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

export default WriteBlogButtton
