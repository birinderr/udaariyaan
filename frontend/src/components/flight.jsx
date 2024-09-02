import React from 'react'
import "./flight.css"
function flight(props) {
  return (
    <div className="booking">
        <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img12" />
      <div className='bg-white '>
      <form className='flex-1' >-
     <div className=''>
        <p>destination</p>
        
        <select name="from" id="from" className='outline-none p-2 w-full'>
            <option value="">please select</option>
            <option value="">New york</option>
            <option value="">London</option>
            <option value="">Hong kong</option>
        </select>
        
      
        <p>destination</p>
        
        <select name="from" id="from" className='outline-none p-2 w-full'>
            <option value="">please select</option>
            <option value="">New york</option>
            <option value="">London</option>
            <option value="">Hong kong</option>
        </select>
        </div>
  
      
      </form>
      </div>
    </div>
  )
}

export default flight
