import express from "express";
import { saveBooking } from "../controllers/savedbooking.controller.js";

const router = express.Router();

// POST route to save booking data
router.post("/save", saveBooking);

export default router;
