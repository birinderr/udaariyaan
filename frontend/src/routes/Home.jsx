import React from 'react'
import Hero from '../component/hero'
import Navbar from '../component/navbar'
import Destination from '../component/destination'
import Trip from '../component/trip'
import Footer from '../component/footer'
function Home() {
  return (
    <div>
     
    <Hero
    Cname="hero"
    heroimg="https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Your journey your story"
    titletext="Choose destination"
    btntext="travel plan"
    url="/"
    btnclass="show"
    />
   <Destination/>
   <Trip/>
   <Footer/>
    </div>
  )
}

export default Home
