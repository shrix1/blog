export interface PropsMultiSelect {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>
  value?: string[]
}

export interface SearchProps {
  search: string
  setSearch: (search: string) => void
}

export interface SettingsProps {
  isLoading: boolean
  setIsLoading: (settings: boolean) => void
}

export interface DBBlogData {
  _id?: string
  title: string
  description: string
  catogory: string[]
  user: string
  email: string
  img: string
  date?: string
  time?: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}
