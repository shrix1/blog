"use client"
import MultiSelect from "@/components/select/MultiSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"

const InputFields: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [category, setCategory] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title === "" || description === "" || category.length === 0) {
      setError(true)
    } else {
      setError(false)
      console.log({ title, description, category })
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p className="text-red-400 text-xs m-1">Required</p>}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Write your Blog here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && (
            <p className="text-red-400 text-xs m-1">
              Minimum 100 words Required
            </p>
          )}
        </div>

        <div>
          <Label>Catogory</Label>
          <MultiSelect setCategory={setCategory} />
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
          <Button className="px-10" role="submit" type="submit">
            Add Blog
          </Button>
        </div>
      </form>
    </main>
  )
}

export default InputFields
