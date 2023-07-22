"use client"
import MultiSelect from "@/components/select/MultiSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { BiLoaderCircle } from "react-icons/bi"

const EditForm = ({
  title,
  description,
  catogory,
  id,
}: {
  title: string
  description: string
  catogory: string[]
  id: string
}) => {
  const [newTitle, setNewTitle] = useState<string>(title)
  const [newDescription, setNewDescription] = useState<string>(description)
  const [newCategory, setNewCategory] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)

    e.preventDefault()
    if (!newTitle || !newDescription || newCategory.length === 0) {
      setError(true)
      setLoading(false)
      return
    }

    try {
      const res = await fetch(
        `https://blog-shrix1.vercel.app/api/blog/${id}/`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newDescription,
            newCategory,
            date: new Date().toLocaleDateString(),
            time: new Date().getHours() + ":" + new Date().getMinutes(),
          }),
        }
      )

      if (!res.ok) {
        throw new Error("Failed to update blog")
      }

      setLoading(false)
      router.push(`/all-blog/${title.trim().replace(/[^\w]/gi, "-")}`)
      router.refresh()
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <main className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          {error && <p className="text-red-400 text-xs m-1">Required</p>}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Write your Blog here"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="min-h-[320px] max-h-full"
          />
          {error && (
            <p className="text-red-400 text-xs m-1">
              Minimum 100 words Required
            </p>
          )}
        </div>

        <div>
          <Label>Catogory</Label>
          <MultiSelect setCategory={setNewCategory} value={catogory} />
          <p className="m-1 text-xs text-black/50">
            Category is important to Approach more audience
          </p>
          {error && (
            <p className="text-red-400 text-xs m-1">
              Atleaset 1 Catogory Required
            </p>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <Button className="w-32" role="submit" type="submit">
            {loading ? (
              <BiLoaderCircle size={20} className="animate-spin" />
            ) : (
              "Update Blog"
            )}
          </Button>
        </div>
      </form>
    </main>
  )
}

export default EditForm
