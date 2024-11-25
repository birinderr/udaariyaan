import express from 'express';
import { getAllHotels } from '../controllers/hotel.controller.js'
// import { createBooking, getBookings } from '../controllers/hotel.controller.js'

const router = express.Router();

router.get('/hotels', getAllHotels); 
// router.get('/bookings', getBookings);
// router.post('/bookings', createBooking); 

export default router;