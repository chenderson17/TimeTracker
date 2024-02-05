import React from 'react';
import './Header.css';
import {useState} from 'react'
export default function Header({signUpBtnDisplay,signInBtnDisplay, isHome, isPrice}){
  function signIn() {
    if (signInBtnDisplay) {
      return (
        <a href='/signin'>
      <button className="signInBtn-header header-btns">Sign In</button>
      </a>
      );
    }
  }

  function signUp() {
    if (signUpBtnDisplay) {
      return <button className="signUpBtn-header header-btns ">Sign Up</button>;
    }
  }

 return(
    <header>
      <h1><a href="/">TimeTracker</a></h1>
      <nav>
        <ul className='navbar'>
         <li>
          <a href="/" className= {isHome ? 'currentLink' : 'navlink'} >Home</a>
         </li>
         <li>
          <a href="/#about" className='navlink'>About</a>
         </li>
         <li>
          <a href="/pricing" className={isPrice ? 'currentLink' : 'navlink'}>Pricing</a>
         </li>
         <li>
          <a href="/#contact" className= 'navlink'>Contact</a>
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