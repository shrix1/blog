export interface PropsMultiSelect {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>
}

export interface PropsBlogData {
  user: string
  title: string
  description: string
  email: string
  img: string
  catogory: string[]
  date: string
  time: string
}

export interface SearchProps {
  search: string
  setSearch: (search: string) => void
}

export interface DBBlogData {
  _id: string
  title: string
  description: string
  catogory: string[]
  user: string
  email: string
  img: string
  date: string
  time: string
  createdAt: string
  updatedAt: string
  __v: number
}
