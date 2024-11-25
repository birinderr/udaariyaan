import { Hotel } from '../models/hotel.model.js';
// import { Booking } from '../models/hotel.model.js';

// // Create a new booking
// export const createBooking = async (req, res) => {
//   const { hotelId, checkInDate, checkOutDate, guests } = req.body;
//   const userId = req.user._id;  // User ID from authenticated user

//   try {
//     // Check if hotel exists
//     const hotel = await Hotel.findById(hotelId);
//     if (!hotel) {
//       return res.status(404).json({ message: 'Hotel not found' });
//     }

//     // Create new booking
//     const booking = new Booking({
//       hotelId,
//       userId,
//       checkInDate,
//       checkOutDate,
//       guests
//     });

//     // Save the booking
//     await booking.save();
//     res.status(201).json({ message: 'Hotel booked successfully', booking });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to book hotel', error });
//   }
// };

// // Get all bookings for a user
// export const getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ userId: req.user._id }).populate('hotelId');
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch bookings', error });
//   }
// };


export const getAllHotels = async (req, res) => {
  const { location, checkInDate, checkOutDate, priceRange } = req.query;
  
  let filter = {};
  if (location) filter.location = new RegExp(location, 'i'); 
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split("-").map(Number);
    if (minPrice !== undefined && maxPrice !== undefined) {
      filter.pricePerNight = { $gte: minPrice, $lte: maxPrice };
    }
  }
  
  if (checkInDate && checkOutDate) {
    filter.availableDates = {
      $elemMatch: {
        startDate: { $lte: new Date(checkOutDate) },
        endDate: { $gte: new Date(checkInDate) },
      },
    };
  }
  
  try {
    const hotels = await Hotel.find(filter);
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching hotels' });
  }
};
