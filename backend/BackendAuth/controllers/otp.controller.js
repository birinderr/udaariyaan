import nodemailer from 'nodemailer';

export const otpstore={};
export const sendotp=async(email)=>{
 try{
    const otp = Math.floor(100000 + Math.random() * 900000);    
    otpstore[email]={
        otp,
        expiry:Date.now()+5*60*1000,
    }
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"bunnykhurana007@gmail.com",
            pass:"cjga wxxr oqqy ngjh"
        },
    })
    const mailOptions = {
        from: "singlabhargav2004@gmail.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
      };
      const info=await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      return { success: true, message: "OTP sent successfully" };

            }
            catch (error) {
                console.error("Error sending email:", error);
                return { success: false, message: "Failed to send OTP" };
              }
}
export const verifyotp=async(email,otp)=>{
    const data=otpstore[email];
    if (!data) {
        return { success: false, message: "OTP not found. Please request a new one." };
      }
      const{otp:storedotp,expiry}=data;
      if(Date.now()>expiry)
      {
        delete otpstore[email];
        return { success: false, message: "OTP has expired. Please request a new one." };
      }
      if (storedotp !== parseInt(otp, 10)) {
        return { success: false, message: "Invalid OTP. Please try again." };
      }
      delete otpstore[email];
      return { success: true, message: "OTP verified successfully." };
}
