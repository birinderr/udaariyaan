import { Booking, DLETE } from "./actiontypes"

export const makebooking=(data)=>{
    return {type:Booking,
        payload:data,
}

}
export const deletebooking=(id)=>{
   return{
    type:DLETE,

    payload:id,
   }
}