import React from "react";
import './Footer.css'

export default function Footer(){
  return(
 <section className="footer">
  <div className='footer-top'>
  <div class="footer-contact">
    <div>
   <h3>Get In Touch</h3>
    <p className="footer-contact-subheader">Address</p>
    <address>5555 NE LN Way, 0000 City,State</address>

    <p className="footer-contact-subheader">Phone</p>
    <a href="tel:+">(555)-555-5555</a>
    <p className="footer-contact-subheader">Email</p>
    <a href='/'>info@timetracker.com</a>
    </div>
  </div>

  <div className="nav-summary">
    <div>
    <h3>Links</h3>
     <ul className='footer-navbar'>
         <li>
          <a href="/" className="navlink">Home</a>
         </li>
         <li>
          <a href="#about" className="navlink">About</a>
         </li>
         <li>
          <a href='/pricing' className="navlink">Pricing</a>
         </li>
         <li>
          <a href="#contact" className="navlink">Contact</a>
         </li>
    </ul>
    </div>
  </div>


  <div className="footer-socials">
    <div className="footer-socials-container">
    <h3>Follow Us</h3>
    </div>
    <div>
      <a href="/">
    <box-icon type='logo' name='facebook' color="white" size="md"></box-icon>
    </a>
    <a href="/">
    <box-icon name='instagram' type='logo' color="white" size="md" ></box-icon>
    </a>
    </div>
  </div>

  </div>
  <div className="footer-bottom">
  <div className="privacy-policy">
    
  </div>
  <div className="copyright">
   <p>&#169; Copyright TimeTracker 2024 | <a href="/">Privacy Policy</a></p>
  </div>
  </div>
 </section>
  )
}