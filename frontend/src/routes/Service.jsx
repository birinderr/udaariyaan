import React from 'react'
import Hero from '../component/hero'
import Footer from '../component/footer'
import Trip from '../component/trip'
function Service() {
  return (
    <div>
      <Hero
    Cname="hero-mid"
    heroimg="https://images.unsplash.com/photo-1445264918150-66a2371142a2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Service"
    
    url="/"
    btnclass="hide"
    />
  
  <Trip/>
  <Footer/>
    </div>
  )
}

export default Service
