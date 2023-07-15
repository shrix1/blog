"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMemo } from "react"

type Checked = DropdownMenuCheckboxItemProps["checked"]

const CatogoryDropdown = () => {
  const [Technology, setTechnology] = React.useState<Checked>(false)
  const [Science, setScience] = React.useState<Checked>(false)
  const [Health, setHealth] = React.useState<Checked>(false)
  const [Business, setBusiness] = React.useState<Checked>(false)
  const [Entertainment, setEntertainment] = React.useState<Checked>(false)
  const [Sports, setSports] = React.useState<Checked>(false)
  const [General, setGeneral] = React.useState<Checked>(false)

  //use this to filterData
  const [Catogory, setCatogory] = React.useState<string[]>([])

  useMemo(() => {
    if (Technology) {
      setCatogory((prev) => [...prev, "technology"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "technology"))
    }
  }, [Technology])

  useMemo(() => {
    if (Science) {
      setCatogory((prev) => [...prev, "science"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "science"))
    }
  }, [Science])

  useMemo(() => {
    if (Business) {
      setCatogory((prev) => [...prev, "business"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "business"))
    }
  }, [Business])

  useMemo(() => {
    if (Health) {
      setCatogory((prev) => [...prev, "health"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "health"))
    }
  }, [Health])

  useMemo(() => {
    if (Entertainment) {
      setCatogory((prev) => [...prev, "entertainment"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "entertainment"))
    }
  }, [Entertainment])

  useMemo(() => {
    if (Sports) {
      setCatogory((prev) => [...prev, "sports"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "sports"))
    }
  }, [Sports])

  useMemo(() => {
    if (General) {
      setCatogory((prev) => [...prev, "general"])
    } else {
      setCatogory((prev) => prev.filter((item) => item !== "general"))
    }
  }, [General])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Catogory</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>MultiSelect Catogory</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={General}
          onCheckedChange={setGeneral}
        >
          General
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={Technology}
          onCheckedChange={setTechnology}
        >
          Technology
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={Science}
          onCheckedChange={setScience}
        >
          Science
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={Health} onCheckedChange={setHealth}>
          Health
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={Business}
          onCheckedChange={setBusiness}
        >
          Business
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={Entertainment}
          onCheckedChange={setEntertainment}
        >
          Entertainment
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={Sports} onCheckedChange={setSports}>
          Sports
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CatogoryDropdown
