import express from "express";
import Planeschema from "../models/planebooking.model.js";

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const { departureCity, ArrivalCity, Flightname, departuredate, ArrivalTime, price } = req.body;
        const newp = new Planeschema({
            departureCity, ArrivalCity, Flightname, departuredate, ArrivalTime, price
        })
        const data = await newp.save();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ message: 'error' });
    }
})





router.get('/', async (req, res) => {
    try {
        const { ArrivalCity, departureCity, departuredate } = req.query;
        const filter = {};
        if (departureCity) filter.departureCity = new RegExp(departureCity, 'i');
        if (ArrivalCity) filter.ArrivalCity = new RegExp(ArrivalCity, 'i');



        if (departuredate) {
            const day = new Date(departuredate);
            day.setUTCHours(0, 0, 0, 0);
            const end = new Date(departuredate);
            end.setUTCHours(23, 59, 59, 999);

            filter.departuredate = {
                $gte: day,
                $lte: end
            };



        }

       


        const flights = await Planeschema.find(filter);


        if (!flights || flights.length === 0) {
            return res.status(404).json({ message: "No flights found for the specified criteria" });
        }
        res.status(200).json({ "data": flights });



    }


    catch (error) {
        res.status(400).json({ message: error.message });
    }

}
)


export default router;
