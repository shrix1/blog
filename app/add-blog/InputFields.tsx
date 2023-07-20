"use client"
import MultiSelect from "@/components/select/MultiSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { BiLoaderCircle } from "react-icons/bi"
import { useSession } from "next-auth/react"

const InputFields = () => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [category, setCategory] = useState<
    { label: string; value: string }[] | any
  >([])
  const [error, setError] = useState<boolean>(false)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const correctCatorgy: string[] = category.map((item: any) => item.label)
  const { data: session } = useSession()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title === "" || description === "" || category.length === 0) {
      setError(true)
    } else {
      setLoading(true)
      setError(false)
      try {
        const res = await fetch("https://blog-shrix1.vercel.app/api/blog/", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            title,
            description,
            catogory: correctCatorgy,
            user: session?.user?.name,
            email: session?.user?.email,
            img: session?.user?.image,
            date: new Date().toLocaleDateString(),
            time: new Date().getHours() + ":" + new Date().getMinutes(),
          }),
        })
        setTitle("")
        setDescription("")
        setCategory([])

        if (res.ok) {
          router.push(`/all-blog/${title.trim().replace(/[^\w]/gi, "-")}`)
        }
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
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
          <Button className="w-32" role="submit" type="submit">
            {loading ? (
              <BiLoaderCircle size={20} className="animate-spin" />
            ) : (
              "Add Blog"
            )}
          </Button>
        </div>
      </form>
    </main>
  )
}

export default InputFields
