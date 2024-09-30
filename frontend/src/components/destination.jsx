import React from 'react'

function destination(props) {
  return (
    <div className=' flex flex-col md:flex-row md:items-center md:space-x-4 '>
      <p className=' font-bold '>{props.heading}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default destination
