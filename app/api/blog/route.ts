import connetMongoDB from "@/lib/mongodb"
import Blog from "@/models/blog"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { title, description, catogory, date, time, user } =
    await request.json()

  await connetMongoDB()
  await Blog.create({
    title,
    description,
    catogory,
    user,
    date,
    time,
  })
  return NextResponse.json({ message: "blog created" }, { status: 201 })
}

export async function GET() {
  await connetMongoDB()
  const blogs = await Blog.find({})
  return NextResponse.json({ blogs }, { status: 200 })
}
