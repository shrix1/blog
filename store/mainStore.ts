import { SearchProps } from "@/types/props"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export const useSearchStore = create<SearchProps>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}))
