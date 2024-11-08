import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const Feedback = mongoose.model("Feedback", feedbackSchema);