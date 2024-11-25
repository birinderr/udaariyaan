import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    address: {
        type: String, 
        required: false,
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: String,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);