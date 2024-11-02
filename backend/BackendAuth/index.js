import express from 'express';
import dotenv from "dotenv";
import cors from "cors"

import { connectDB } from "./db/connectDB.js"

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json())

app.use("/api/auth", authRoutes)



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