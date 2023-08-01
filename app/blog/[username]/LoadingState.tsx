"use client"
import Loading from "@/components/Loading"
import { useSettings } from "@/store/mainStore"
import React from "react"

const LoadingState = () => {
  const [isLoading] = useSettings((state) => [state.isLoading])
  return <>{isLoading && <Loading text="Deleting..." />}</>
}

export default LoadingState
