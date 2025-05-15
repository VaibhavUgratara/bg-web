import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', registerSchema);
export default User;
