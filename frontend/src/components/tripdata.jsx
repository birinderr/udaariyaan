import React from 'react'

function tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.url} alt="image" />

      </div>
      <h2 className='text-2xl font-bold'>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default tripdata
