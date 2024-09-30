import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { deletebooking } from "../redux/action";

const table = () => {
    const data=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    console.log(data);
    const handledelete=(e)=>{
        { 
            const id =parseInt(e.currentTarget.id);
            dispatch(deletebooking(id));
        }
    }
  return (
   <>
   {
    data.length&&(
        <div className="max-w-6xl mx-auto mt-5 ml-[200px]  bg-white md:flex flex-col">
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>Destination from</th>
        <th>    Destination to</th>
        <th>journey date</th>
        <th>Guests</th>
        <th>Travel class</th>
      </tr>
    </thead>
    <tbody>
    { 
    data.map((data,index)=>(
      <tr key={index}>
        <td>{data.from}</td>
        <td>{data.to}</td>
        <td>{data.guests}</td>
        <td>{data.ticketclassname}</td>
        <td><button className="btn-xs bg-red-500 text-white" id={`${data.id}`} onClick={(e) => handledelete(e)}> <MdDelete /></button></td>
      </tr>
    ))
}
    </tbody>
  </table>
</div>
        </div>
    )
    
   }
   </>
  )
}

export default table
