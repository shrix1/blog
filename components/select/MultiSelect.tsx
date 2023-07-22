"use client"
import React from "react"
import Select from "react-select"
import "./multiselect.css"
import { PropsMultiSelect } from "@/types/props"

const MultiSelect: React.FC<PropsMultiSelect> = ({ setCategory, value }) => {
  // const valueData = value.map((item) => {
  //   return { value: item, label: item }
  // })

  const data = [
    { value: "technology", label: "Technology" },
    { value: "science", label: "Science" },
    { value: "health", label: "Health" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
    { value: "general", label: "General" },
  ]

  const handleSelectChange = (selectedOption: any) => {
    setCategory(selectedOption)
  }

  const styles = {
    control: (base: any) => ({
      ...base,
      border: "1px solid #262626",
      boxShadow: "none",
      ":focus": {
        border: "1px solid #262626",
      },
      ":hover": {
        border: "1px solid #262626",
      },
    }),
    menuList: (base: any) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "6px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "grey",
        borderRadius: "100px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#D3D3D0",
        borderRadius: "100px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "white",
      },
      backgroundColor: "#0A0A0A",
      color: "white",
      borderRadius: "10px",
      ":hover": {
        backgroundColor: "#000011",
        color: "white",
      },
    }),
  }

  return (
    <>
      <Select
        isMulti
        isSearchable
        isClearable
        name="catorgory"
        // options={value ? valueData : data}
        options={data}
        maxMenuHeight={150}
        styles={styles}
        onChange={handleSelectChange}
        noOptionsMessage={() => "no more catogories left"}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Select Catogory"
      />
    </>
  )
}

export default MultiSelect
