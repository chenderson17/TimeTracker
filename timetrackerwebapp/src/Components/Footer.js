import React from "react";
import './Footer.css'

export default function Footer(){
  return(
 <section className="footer">
  <div class="footer-contact">
    <div>
   <h3>Get In Touch</h3>
    <p>Address</p>
    <address>5555 NE LN Way, 0000 City,State</address>
    <p>Phone</p>
    <p>(555)-555-5555</p>
    </div>
  </div>
  <div className="footer-socials">
    <div>
    <h3>Follow Us</h3>
    </div>
    <div>
      <a href="/">
    <box-icon type='logo' name='facebook' color="white" size="md"></box-icon>
    </a>
    <box-icon name='instagram' type='logo' color="white" size="md" ></box-icon>
    </div>
  </div>

  <div className="nav-summary">
    <div>
    <h3>Links</h3>
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
  </div>
  <div className="privacy-policy">
    
  </div>
  <div className="copyright">
   <p>&#169; Copyright TimeTracker 2024 | <a href="/">Privacy Policy</a></p>
  </div>
 </section>
  )
}