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
// router.get("/",async(req,res)=>{
//     try{
//     const{departureCity, ArrivalCity, departureDate}=req.params;
//     const flights=await Planeschema.find( {
//         departureCity, ArrivalCity,         
//         departuredate: { 
//             $gte: new Date(departureDate), 
//             $lte: new Date(departureDate).setDate(new Date(departureDate).getDate() + 1) 
//         }
//     }  )
//     if(!flights)
//     {
//         res.status(400).json("no flights");
//     }
//     res.status(200).json({"data" : flights});
// }
// catch(err)
// {
//     res.status(400).json("error");
// }
// }
// )




router.get('/', async(req, res) => {
    try {
       const{ArrivalCity,departureCity,departuredate}=req.query;
   const filter={};
   if(departureCity)filter.departureCity=new RegExp(departureCity,'i');
   if(ArrivalCity) filter.ArrivalCity=new RegExp(ArrivalCity,'i');
  console.log(departuredate);   
 
   if(departuredate)
   {
   const day = new Date(departuredate);
   day.setUTCHours(0, 0, 0, 0);
   const end=new  Date(departuredate);
   end.setUTCHours(23, 59, 59, 999);
   
   filter.departuredate = {
    $gte: day,     
    $lte: end
};  

  

   }
   console.log(filter);
//    if (departuredate) {
//     const date = new Date(departuredate);
//     if (departuredate) {
//         const date = new Date(departuredate); // Convert input to Date object
//         const nextDay = new Date(date); // Clone the date
//         nextDay.setDate(nextDay.getDate() + 1); // Increment the day

//         console.log(date);
//         console.log(nextDay)
//         filter.departuredate = {
//             departuredate:{
//                 $gte: date, // Convert to ISO format
//                 $lt: nextDay
//             }
//            }
//            const flights=await Planeschema.find({
            
//                 departuredate:date
               
            
//            });
//            console.log(flights)
//     }
// }


   const flights=await Planeschema.find(filter);
     console.log(flights)

if (!flights || flights.length === 0) {
    return res.status(404).json({ message: "No flights found for the specified criteria" });
}
   res.status(200).json({"data" : flights});



    }


catch(error){
    res.status(400).json({ message: error.message });
}

}
)


export default router;
