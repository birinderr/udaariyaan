import{sendBookingConfirmation}from"../controllers/email.controller.js";
import express from 'express';
const router=express.Router();
router.post('/sendbooking',async (req,res)=> {
    const { email, bookingDetails } = req.body;
    const response = await sendBookingConfirmation(email, bookingDetails);
  if (response.success) {
    res.status(200).send({ message: 'Booking confirmation email sent successfully!' });
  } else {
    res.status(500).send({ error: 'Failed to send email', details: response.error });
  }
    
});
export default router;