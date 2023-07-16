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
