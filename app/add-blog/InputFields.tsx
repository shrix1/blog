"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"

const InputFields = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <main className="w-full">
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="title" className="text-lg">
            Title
          </Label>
          <Input type="text" id="title" />
        </div>

        <div></div>
      </form>
    </main>
  )
}

export default InputFields
