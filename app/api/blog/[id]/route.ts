import connectMongoDB from "@/lib/mongodb"
import Blog from "@/models/blog"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const {
    newTitle: title,
    newDescription: description,
    newCatogory: catogory,
    date,
    time,
  } = await request.json()

  await connectMongoDB()
  await Blog.findByIdAndUpdate(id, { title, description, catogory, date, time })
  return NextResponse.json({ message: "Blog updated" }, { status: 200 })
}
