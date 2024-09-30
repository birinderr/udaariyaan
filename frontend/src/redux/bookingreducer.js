import { Booking, DLETE } from "./actiontypes";

 const initialstate={data:[],
 }

 const bookingreducer=(state=initialstate,action)=>{
  switch (action.type ) {
    case Booking:
        const newdata=[...state.data];
        newdata.push(action.payload);
        return {
            data:newdata
        }

  case DLETE:
    const filtereddata=state.data.filter((d)=>d.id!==action.payload)
    return { 
        data:filtereddata
    }
    default:
      return state;
  }
 };
 export default bookingreducer;