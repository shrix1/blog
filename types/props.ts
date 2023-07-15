export interface PropsMultiSelect {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>
}

export interface PropsBlogData {
  userName: string
  userId: string
  title: string
  description: string
  category: string[]
  date: string
  time: string
}
