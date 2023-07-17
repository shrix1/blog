"use client"
import React from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import CatogoryDropdown from "./CatorgoryDropdow"
import { useSearchStore } from "@/store/mainStore"

const Filter = () => {
  const [search, setSearch] = useSearchStore((state) => [
    state.search,
    state.setSearch,
  ])

  return (
    <section className="w-full lg:w-1/2 flex flex-col md:flex-row gap-3 justify-center sticky top-2">
      <Input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="flex gap-3">
        <CatogoryDropdown />
        <Button variant="outline">Today</Button>
        <Button variant="outline">Tomorrow</Button>
      </div>
    </section>
  )
}

export default Filter
