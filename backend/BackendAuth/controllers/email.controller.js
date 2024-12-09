import nodemailer from 'nodemailer';

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"bunnykhurana007@gmail.com",
        pass:"cjga wxxr oqqy ngjh"
    },
})
export const sendBookingConfirmation = async (email, bookingDetails) => {
    const { name, bookingId, checkIn, checkOut } = bookingDetails;
  
    const mailOptions = {
      from: '"Your Company" <your-email@gmail.com>', // Sender address
      to: email, // Recipient's email
      subject: 'Booking Confirmation', // Subject line
      html: `
        <h1>Booking Confirmation</h1>
        <p>Hi ${name},</p>
        <p>Your booking with ID <strong>${bookingId}</strong> is confirmed!</p>
  
        
        <p>Thank you for choosing us!</p>
      `,
    }
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        return { success: true };
      } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
      }
    
}