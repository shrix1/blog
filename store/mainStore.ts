import { create } from "zustand"

export const useData = create<{
  name: string
  setName: (name: string) => void
}>((set) => ({
  name: "shri",
  setName: (name: string) => set({ name }),
}))
