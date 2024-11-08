import e from "express";
import { getAllFeedbacks } from '../controllers/Feedback.controller.js';
import { feedback } from "../controllers/Feedback.controller.js";
const router = e.Router();
router.post('/feedback', feedback);
router.get('/feedback', getAllFeedbacks);

export default router;