import './contact.css';
import MessageImage from '../images/10261624.jpg';
import React from 'react';
import { useState } from 'react';
export default function Contact(){
 const[animate, setAnimation] = useState("");
 const handleHover = ()=>{
  setAnimation("tada");
 }
 const handleLeave = ()=>{
  setAnimation("");
 }
 return(
  <section className='contact-section'>
   <a id ="contact"></a>
  
   <div className='contact-image-form-container'>
   <div className='contact-image-container'>
    <img className='contact-image' src={MessageImage} alt='cartoon image of a person messaging'/>
   </div>
   <form action='/' method='POST'>
   <div className='contact-header-container'>
   <h2 className="contact-header">Contact Us</h2>
   </div>
    <div className='name-container'>
    <div className="fname-container">
     <div className="contact-input-content">
    <label name='fname'>First Name</label>
    <input type='text' name='fname' placeholder="First Name"/>
    </div>
    </div>

    <div className="lname-container">
    <label name='lname'>Last Name</label>
    <input type='text' name='lname' placeholder="Last Name"/>
    </div>
    </div>
    

    <div className='phone-email-container'>

    <div className="email-container">
    <label name="contact-email">Email</label>
    <input type="email" name="contact-email" placeholder="Email" />
    </div>

    <div className="phone-container">
    <label name="contact-phone">Phone</label>
    <input type="phone" name="contact-phone" placeholder="(555)-555-5555"/>
    </div>
    </div>

    <div className="contact-message-container">
    <label name="contact-message">Message</label>
    <textarea name="contact-message" cols="30" rows="7" maxLength={250} placeholder='Leave your message here...'></textarea>
    </div>
    <div className="send-btn-container">
     <button className="send-btn" onMouseOver={handleHover}onMouseLeave={handleLeave}><span className="send-btn-text">Send</span><box-icon name='send' color="white" size="sm" animation={animate}  ></box-icon></button>
    </div>
   </form>
   </div>
  </section>
 )
}