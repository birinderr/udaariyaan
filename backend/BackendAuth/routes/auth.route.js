import express from 'express';
import { login, signup, logout, getUserProfile, updateUserProfile } from '../controllers/auth.controller.js'

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Profile Routes
router.get("/me", getUserProfile);
router.put("/update-profile", updateUserProfile);

export default router;