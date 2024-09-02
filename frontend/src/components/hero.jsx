import React from 'react'
import"./hero.css"
function Hero(props) {
  return (
    <div className={props.Cname}>
         <img src={props.heroimg} alt="heroimg" />
       
      <div className="herotext">
       <h1 className='text-3xl font-bold'>{props.title}</h1>
           <p> {props.titletext}</p>
           <a href={props.url}className={props.btnclass}>{props.btntext}</a>
       </div>
    </div>
  )
}

export default Hero




     

     
