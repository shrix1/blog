"use client"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiEdit3, FiTrash } from "react-icons/fi"

const Settings = ({ _id }: { _id: string | undefined }) => {
  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this blog?")

    if (confirm) {
      await fetch(`https://blog-shrix1.vercel.app/api/blog?id=${_id}`, {
        method: "DELETE",
      })
    }
  }

  return (
    <div className="flex gap-3">
      {/* edit */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/add-blog">
              <Button variant="outline" className="px-2 py-0">
                <FiEdit3 />
              </Button>
            </Link>
          </TooltipTrigger>

          <TooltipContent className="py-0.5 px-2">
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Delete */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="px-2 py-0"
              onClick={handleDelete}
            >
              <FiTrash />
            </Button>
          </TooltipTrigger>

          <TooltipContent className="py-0.5 px-2">
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default Settings
