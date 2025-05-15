import mongoose from 'mongoose';

const onlineUsersSchema = new mongoose.Schema({
    email: String,
});

const OnlineUser = mongoose.model('OnlineUsers', onlineUsersSchema);
export default OnlineUser;
