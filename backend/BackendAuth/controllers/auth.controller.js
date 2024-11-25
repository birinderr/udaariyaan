import { generateKey } from 'crypto';
import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import jwt from "jsonwebtoken";

export const signup = async (req,res) => {
    const {email, password, cpassword} = req.body;
    try {
        if(!email || !password || !cpassword){
            throw new Error("All fields are required")
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({success:false, message: "User already exists", alert: "User Already Exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);     
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 1000  // 24 hrs
        })

        await user.save();

        // jwt
        generateTokenAndSetCookie(res,user._id);

        res.status(201).json({
            success:true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        res.status(400).json({success:false,message: error.message, alert: error.message});
    }
}
export const login = async (req,res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ success: false, message: "Invalid Credentials", alert: "Invalid Credentials"});
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({success: false, message: "Invalid Credentials", alert: "Invalid Credentials"})
        }

        generateTokenAndSetCookie(res, user._id)

        user.lastLogin = new Date()
        await user.save()

        res.status(200).json({
            success: true,
            message: "Logged In Successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        console.log("Error In Login", error)
        res.status(400).json({ success: false, message: error.message, alert: error.message})
    }
}
export const logout = async (req,res) => {
    res.clearCookie("token")
    res.status(200).json({ success: true, message: "Logged Out Successfully! "})
}
export const getUserProfile = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ 
            success: true, 
            user: {
                email: user.email,
                name: user.name || "",
                phone: user.phone || "",
                address: user.address || "",
                lastLogin: user.lastLogin,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user data" });
    }
};
export const updateUserProfile = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { name, phone, address } = req.body;

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update fields if provided
        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.address = address || user.address;

        await user.save();

        res.status(200).json({ success: true, message: "Profile updated successfully", user });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ success: false, message: "Error updating profile" });
    }
};