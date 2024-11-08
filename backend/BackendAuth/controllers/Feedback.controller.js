import { Feedback } from '../models/Feedback.model.js';

export const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        if (feedbacks.length === 0) {
            return res.status(404).json({ message: 'No Feedbacks Found' });
        }
        res.status(200).json(feedbacks);
    } catch (error) {
        console.log('Error fetching feedbacks: ', error);
        res.status(500).json({ message: 'Failed to retrieve feedbacks!' });
    }
}

export const feedback = async (req, res) => {
    try {
        const { name, message } = req.body;
        if (!name || !message) {
            return res.status(404).json({ message: 'Name and message are required!' });
        }
        const newFeedback = new Feedback({ name, message });
        await newFeedback.save();
        res.status(200).json({ message: 'Thank you for feedback!' });
    } catch (error) {
        console.log("Error while creating feedback: ", error);
        res.status(500).json({ message: "Failed to create feedback!" });
    }
}