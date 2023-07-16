import mongoose from "mongoose"

const connetMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log("connect success")
  } catch (e) {
    console.log(e, "connect fail")
  }
}

export default connetMongoDB
