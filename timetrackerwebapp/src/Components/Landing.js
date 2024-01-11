import React from "react";
import Hero from '../images/hero.jpg'
import './Landing.css';
export default function Landing(){
  return(
   <div class="landing-page">
    <h2 className='hero-header'> Employee Scheduling, <span className="bold">Time Tracking</span> & <br></br>Analytics</h2>
    <div className="hero-img-container">
    <img className="hero-img"src={Hero}/>
    </div>
   </div>
  )
}