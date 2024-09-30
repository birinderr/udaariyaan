import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makebooking } from '../redux/action';
import { useEffect } from 'react';
import Destinationdata from './destinationdata';
import Table from './table';
import Faqs from './Faqs';
const Boooking = () => {
  const data=useSelector((state)=>state.data);
  const dispatch=useDispatch();
  const size=data.length;
const[bookingdata,setbookingdata]=useState({});
const [countries, setCountries] = useState([]);
  const handlechange=(e)=>{
  console.log(e.target.value);
  const newdata={...bookingdata};
  newdata[e.target.name]=e.target.value;
  setbookingdata(newdata);
  }
  const handlebook=(e)=>{
    e.preventDefault();
    if(Object.keys(bookingdata).length===5)
    {
    dispatch(makebooking({...bookingdata,id:size+1}))
    }
    else{
      alert("please select data properly")
    }
  }
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countryData = await response.json();
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    fetchCountries();
  },[]);                      
  console.log(bookingdata);
  return (
  <div>
    <div className="md:mt-[160px] mt-[100] ml-[200px] mx-4   justify-center">
     <div className='bg-white rounded-md max-w-6xl w-full'>
        <form className=' flex flex-col md:flex-row  '>
          <div className='px=2.5 py=2.5 flex-1 border-r-2 mx-2'>
            <p>destination form</p>
            
              <select  required onChange={(e)=>handlechange(e)}name="from" id="from" className='outline-none w-full'>
              { countries.map((country)=>
                <option >{country.name.common}</option>
              
)}
              </select>
            </div>
            <div className='px=2.5 py=2.5 flex-1 border-r-2 mx-2'>
            <p>destination to</p>
            
              <select required  name="to" id="to"  onChange={(e)=>handlechange(e)} className='outline-none w-full'>
              { countries.map((country)=>
                <option >{country.name.common}</option>
              
)}
               
              </select>
            </div>
            <div className='px=2.5 py=2.5 flex-1 border-r-2 mx-2'>
              <p>Journey date</p>
              <input  required type="date" name="date" onChange={(e)=>handlechange(e)}  className='outline-none w-full' />
              </div>
              <div className='px=2.5 py=2.5 flex-1 border-r-2 mx-2'>
            <p>guest</p>
            
              <select  required name="guests" id="guests" onChange={(e)=>handlechange(e)} className='outline-none w-full'>
                <option >1 person</option>
                <option>2 person</option>
                <option > 3 person</option>
                <option > 4 person</option>
              </select>
            </div>
            <div className='px=2.5 py=2.5 flex-1 border-r-2 mx-2'>
            <p>Travel class</p>
            
              <select required name="ticketclassname" id="ticketclassname"  onChange={(e)=>handlechange(e)}className='outline-none w-full'>
                <option >Economy</option>
                <option>Buisness</option>
                
              </select>

            </div>
            <button onClick={(e)=>handlebook(e)} type="submit" className='text-white bg-indigo-500 rounded px-8'>+Book</button>
        </form>
     </div>
    </div>
    <Table/>
    <Destinationdata/>
    <Faqs/>
    </div>
  )
}

export default Boooking;
