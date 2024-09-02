import React from 'react'
import Hero from '../component/hero'
import Footer from '../component/footer'
import Trip from '../component/trip'
import Aboutus from '../component/aboutus'
function About() {
  return (
    <div>
     
      <Hero
    Cname="hero-mid"
    heroimg="https://images.unsplash.com/photo-1477520353136-d75b998f342f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="About"
   
    url="/"
    btnclass="hide"
    />
      <Aboutus/>
    <Footer/>
 
    </div>
  )
}

export default About

