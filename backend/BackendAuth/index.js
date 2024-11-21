import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import planerouter from"./routes/planebooking.js"
import { connectDB } from "./db/connectDB.js"

import authRoutes from "./routes/auth.route.js";
import FeedbackRoutes from './routes/Feedback.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use(cookieParser())

app.use(express.json())
app.use("/flight",planerouter);
app.use("/api/auth", authRoutes)
app.use('/', FeedbackRoutes);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        connectDB();
        console.log(`Listening to Port ${port}`);
    };
});

// py1kKttsgGA5sNMJ
// mongodb+srv://birindersingh:py1kKttsgGA5sNMJ@udaariyaan.yduce.mongodb.net/?retryWrites=true&w=majority&appName=Udaariyaan