import React from 'react'
import "./contactform.css"
function contactus() {
  return (
    <div className="container">
    <h1 className='font-bold text-3xl'>Send message to us</h1>
    <form action="">
        <input placeholder='Name' />
        <input placeholder='email' />
        <input placeholder='subject' />
        <textarea placeholder='message'rows={4}></textarea>
        <button>send</button>
    </form>
</div>
  )
}

export default contactus
