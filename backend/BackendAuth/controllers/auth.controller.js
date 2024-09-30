import { generateKey } from 'crypto';
import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

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
        const hashedPassword = await bcryptjs.hash(password, 10);        ///  maybe remove
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