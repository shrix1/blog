"use client"
import React, { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { FiEdit3, FiTrash } from "react-icons/fi"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useSettings } from "@/store/mainStore"

const Settings = ({ _id }: { _id: string | undefined }) => {
  const router = useRouter()
  const [setIsLoading] = useSettings((state) => [state.setIsLoading])

  const handleDelete = async () => {
    setIsLoading(true)
    const res = await fetch(
      `https://blog-shrix1.vercel.app/api/blog?id=${_id}`,
      {
        method: "DELETE",
      }
    )

    if (res.ok) {
      setIsLoading(false)
      router.refresh()
    }
  }

  return (
    <div className="flex gap-3">
      {/* edit */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="px-2 py-0"
              onClick={() => router.push(`/edit-blog/${_id}`)}
            >
              <FiEdit3 />
            </Button>
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="px-2 py-0">
                  <FiTrash />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you Want to Delete ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your blog and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-500 text-white hover:bg-red-900"
                    onClick={handleDelete}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
