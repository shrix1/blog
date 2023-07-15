import React from "react"
import { v4 as uuid } from "uuid"

const Page = () => {
  const data = [
    {
      userName: "John Doe",
      userId: uuid(),
      title: "The Amazing World of Wildlife Photography",
      description:
        "Explore the beauty and wonders of wildlife photography in this captivating blog post. Learn about the challenges and rewards of capturing stunning images of animals in their natural habitats.",
      category: ["Photography", "Nature", "Wildlife"],
      time: "10:00 AM",
      date: "2023-07-15",
    },
    {
      userName: "John Doe",
      userId: uuid(),
      title: "Healthy Eating Habits for a Balanced Lifestyle",
      description:
        "Discover the secrets to maintaining a healthy lifestyle through proper nutrition. This blog post offers valuable tips on adopting nutritious eating habits and making informed food choices.",
      category: ["Health", "Nutrition", "Wellness"],
      time: "12:30 PM",
      date: "2023-07-16",
    },
    {
      userName: "John Doe",
      userId: uuid(),
      title:
        "Exploring Ancient History: Unraveling the Mysteries of the Mayan Civilization",
      description:
        "Embark on a captivating journey through time as we delve into the rich history and culture of the ancient Mayan civilization. Uncover the mysteries of their impressive architectural wonders and intriguing traditions.",
      category: ["History", "Culture", "Archaeology"],
      time: "2:00 PM",
      date: "2023-07-17",
    },
  ]
  return <main></main>
}

export default Page
