import express from'express'
import {sendotp,verifyotp,otpstore} from '../controllers/otp.controller.js'
const router=express.Router()
router.post('/send-otp',async(req,res)=>{
    const{email}=req.body;  
    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required" });
      }
      const result=await sendotp(email);
      return res.status(result.success ? 200 : 500).json(result);
});
router.post('/verify-otp',async(req,res)=>{
    const{email,otp}=req.body;
    if (!email || !otp) {
        return res.status(400).json({ success: false, message: "Email and OTP are required" });
      }
      const result = await verifyotp(email, otp);
      return res.status(200).json(result)
});
router.get('/get-otp',async(req,res)=>{
    const{email}=req.query;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
      const data=otpstore[email];
      if (!data) {
          return res.status(404).json({ success: false, message: "No OTP found for this email" });
      }
      return res.status(200).json({
        success: true,
        message: "OTP found",
        otp: data.otp,
        expiry: new Date(data.expiry),
      });
});
export default router;