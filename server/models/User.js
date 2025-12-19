import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true },
    role: {type: String, enum: ["user", "vendor", "admin"], default: 'user' },
    image: {type: String, default: ''},
    isActive: {type: Boolean, default: true}, // For admin to enable/disable users
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User