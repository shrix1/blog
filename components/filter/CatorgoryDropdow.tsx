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

type Checked = DropdownMenuCheckboxItemProps["checked"]

const CatogoryDropdown = () => {
  const catogoryList = [
    "Technology",
    "Science",
    "Health",
    "Business",
    "Entertainment",
    "Sports",
    "General",
  ]
  const [catogory, setCatogory] = React.useState<string[]>([])

  const handleCatorgoryChange = (item: string) => {
    setCatogory((prev) => [...prev, item])
  }

  console.log(catogory)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Catogory</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>MultiSelect Catogory</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {catogoryList.map((item, index) => {
          return (
            <DropdownMenuCheckboxItem
              key={index}
              checked={item === catogory[index]}
              onCheckedChange={() => handleCatorgoryChange(item)}
            >
              {item}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CatogoryDropdown
