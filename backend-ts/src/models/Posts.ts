import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is required"],
    maxLength: [150, "Title should be not exceed 150 characters"],
    minLength: [10, "Title should be atleast 10 characters long"],
    trim: true,
  },
  likes: {
    type: Number,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
