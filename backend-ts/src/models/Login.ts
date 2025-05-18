import mongoose from "mongoose";

const onlineUsersSchema = new mongoose.Schema({
  name: String,
});

const OnlineUser = mongoose.model("OnlineUsers", onlineUsersSchema);
export default OnlineUser;
