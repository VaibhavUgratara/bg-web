import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "username is required"],
      minLength: [5, "username length should be at leaset 5"],
      maxLength: [10, "Name length should not exceed 10 characters"],
      lowercase: true,
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name length should be at leaset 6"],
      maxLength: [50, "Name length should not exceed 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password length should be atleast 3"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", registerSchema);
export default User;
