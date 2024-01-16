import React from "react";
import './Footer.css'

export default function Footer(){
  return(
 <section className="footer">
  <div class="footer-contact">
   <h3>Contact</h3>
    <h3>Adress</h3>
    <address>5555 NE LN Way, 0000 City,State</address>
    <h3>Phone</h3>
    <p>(555)-555-5555</p>
  </div>
  <div className="footer-socials">
   
  </div>

  <div className="nav-summary">
    <h3>Navigation</h3>
     <ul className='footer-navbar'>
         <li>
          <a className="navlink">Home</a>
         </li>
         <li>
          <a className="navlink">About</a>
         </li>
         <li>
          <a className="navlink">Pricing</a>
         </li>
         <li>
          <a className="navlink">Contact Us</a>
         </li>
    </ul>
  </div>
  <div className="privacy-policy">
    <h3>Privacy</h3>
  </div>
  <div className="copyright">
   <p>&#169; Copyright TimeTracker 2024</p>
  </div>
 </section>
  )
}