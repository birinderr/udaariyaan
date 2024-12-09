import { Hotel } from '../models/hotel.model.js';


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
