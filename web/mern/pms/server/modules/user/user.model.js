import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        enum: ['employee', 'admin'], 
        default: 'employee' 
    },
    isOtpVerified: { 
        type: Boolean,
        default: false
    },
    otp: { 
        type: String,
        default: null
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User