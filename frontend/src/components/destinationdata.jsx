import React from 'react'

function destinationdata(props) {
  return (
    <div className="destination ">
        <h1 className='font-bold text-3xl '> popular destination</h1>
         <p>tour give you oppurtunity to discover yourself</p>
      <div className="first-des">
        <div className="firsttex">
            
        <h1 className='font-bold text-2xl'>{props.heading}</h1>
        <p>{props.text}</p>
        </div>
        <div className="image ">
        <img src={props.url1} alt="img" />
        <img src={props.url2} alt="img" />
      </div>
      </div>
    </div>
  )
}

export default destinationdata
