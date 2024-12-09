import { Booking } from "../models/savedbooking.model.js";

export const saveBooking = async (req, res) => {
  const { userId, bookingId, totalAmount, name, email, phone, address } = req.body;

  try {
    if (!userId || !bookingId || !totalAmount || !name || !email || !phone || !address) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newBooking = new Booking({
      user: userId,
      bookingId,
      totalAmount,
      name,
      email,
      phone,
      address,
    });

    await newBooking.save();

    res.status(201).json({ success: true, message: "Booking saved successfully.", booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ success: false, message: "Failed to save booking." });
  }
};
