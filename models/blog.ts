import mongoose, { Schema } from "mongoose"

const blogSchema = new Schema(
  {
    title: String,
    description: String,
    catogory: [String],
    date: String,
    time: String,
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default Blog
