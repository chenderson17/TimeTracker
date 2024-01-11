import React from 'react';
import './Header.css';
import {useState} from 'react'
export default function Header({signUpBtnDisplay,signInBtnDisplay}){
 console.log(signInBtnDisplay);
  function signIn() {
    if (signInBtnDisplay) {
      return <button className="signUpBtn-header header-btns">Sign In</button>;
    }
  }

  function signUp() {
    if (signUpBtnDisplay) {
      return <button className="signInBtn-header header-btns ">Sign Up</button>;
    }
  }

 return(
    <header>
      <h1>TimeTracker</h1>
      <nav>
        <ul className='navbar'>
         <li>
          <a className="navlink">Home</a>
         </li>
         <li>
          <a className="navlink">About</a>
         </li>
         <li>
          <a className="navlink">Contact Us</a>
         </li>
         <li>
          {signIn()}
          {signUp()}
         </li>
        </ul>
      </nav>
    </header>
 )
}