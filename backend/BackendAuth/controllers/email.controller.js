import nodemailer from 'nodemailer';

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"bunnykhurana007@gmail.com",
        pass:"cjga wxxr oqqy ngjh"
    },
})
export const sendBookingConfirmation = async (email, bookingDetails) => {
    const { name, bookingId, totalAmount, address, phone } = bookingDetails;
  
    const mailOptions = {
      from: '"Udaariyaan" <your-email@gmail.com>', // Sender address
      to: email, // Recipient's email
      subject: 'Payment Confirmation for Your Ticket Booking', // Subject line
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank You for Booking Your Ticket With Us! We are Pleased To Confirmed That Your Payment Has Successfully Proccessed.</p>
        <p>Below Are Your Details</p>
        <p>Your Booking ID <strong>${bookingId}</strong></p>
        <p>Your Phone Number: ${phone}</p>
        <p>Your Address: ${address}</p>
        <p>Total Amount Paid:$ ${totalAmount}</p>

  
        
        <p>Keep This E-mail As Proof Of Your Payment!</p>
        <p>Best Regards, </p>
        <p>BharatDhiman & <strong>BirinderSingh</strong></p>
        <p>CEO</p>
        <p>9876543210</p>
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