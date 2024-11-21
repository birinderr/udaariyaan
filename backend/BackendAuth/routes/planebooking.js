import express from "express";
import Planeschema from "../models/planebooking.model.js";

const router=express.Router();
router.post("/",async(req,res)=>{
    try{
        const{departureCity, ArrivalCity, Flightname, departuredate, ArrivalTime, price}=req.body;
        const newp=new Planeschema({
            departureCity, ArrivalCity, Flightname, departuredate, ArrivalTime, price
        })
        const data = await newp.save();
        res.status(200).json(data);
}catch(err)
    {
    res.status(400).json({message:'error'});
}})
router.get("/",async(req,res)=>{
    try{
    const{departureCity, ArrivalCity, departuredate}=req.query;
    const flights=await Planeschema.find( {
        departureCity, ArrivalCity,         
        departureTime: { 
            $gte: new Date(departureDate), 
            $lt: new Date(departureDate).setDate(new Date(departureDate).getDate() + 1) 
        }
    }  )
    if(!flights)
    {
        res.status(400).json("no flights");
    }
    res.status(200).json({flights});
}
catch(err)
{
    res.status(400).json("error");
}
}
)


export default router;
