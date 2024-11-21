import express from 'express';
import { createBooking, getBookings, getAllHotels } from '../controllers/hotel.controller.js'

const router = express.Router();

router.get('/hotels', getAllHotels); 
router.get('/bookings', getBookings);
router.post('/bookings', createBooking); 

export default router;