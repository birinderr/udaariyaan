import mongoose from "mongoose";
const planeschema=mongoose.Schema(
    
    {
        departureCity:{
            type:String,
            required:true,
        },
    ArrivalCity:{               
            type:String,
            required:true,
        },
        Flightname:{
            type:String,
            required:true,
        },
     departuredate:{
            type:Date,
            required:true,
        },
        ArrivalTime:{
            type:String,
            required:true,
        },
        price:{
            type:String,
            required:true,
        }

    }
    

)
const Planeschema=mongoose.model("plane",planeschema);

export default Planeschema;