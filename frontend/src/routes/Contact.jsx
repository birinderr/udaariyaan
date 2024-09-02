import React from 'react'
import Hero from '../component/hero'
import Footer from '../component/footer'
import Trip from '../component/trip'
import Contactus from '../component/contactus'
function Contact() {
  return (
    <div>
     <Hero
    Cname="hero-mid"
    heroimg="https://plus.unsplash.com/premium_photo-1691736304072-0890ef39a903?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    title="Contact"
   
   
 
    btnclass="hide"
    />
<Contactus/>

<Footer/>
    </div>
  )
}

export default Contact
