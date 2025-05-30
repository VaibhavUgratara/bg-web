import mongoose from "mongoose";
async function dbConnect(url: string) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

export default dbConnect;
