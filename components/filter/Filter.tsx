"use client"
import React from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import CatogoryDropdown from "./CatorgoryDropdow"

const Filter = () => {
  return (
    <section className="w-full lg:w-1/2 flex flex-col md:flex-row gap-3 justify-center sticky top-2">
      <Input type="search" placeholder="Search" />
      <div className="flex gap-3">
        <CatogoryDropdown />
        <Button variant="outline">Today</Button>
        <Button variant="outline">Tomorrow</Button>
      </div>
    </section>
  )
}

export default Filter
