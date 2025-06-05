import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is required"],
    maxLength: [150, "Title should be not exceed 150 characters"],
    minLength: [10, "Title should be atleast 10 characters long"],
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  allowCommments: { type: Boolean, defalt: true },
  category: {
    type: String,
    trim: true,
    default: "any",
  },
  status: {
    type: String,
    enum: ["draft", "publishded", "archived"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
