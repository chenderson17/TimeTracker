import React from 'react';
import './Header.css';
import {useState} from 'react'
export default function Header({signUpBtnDisplay,signInBtnDisplay, isHome, isPrice,isSignUp}){
  const [isActive, setIsActive] = useState(false);
  function signInOnClick(){
    setIsActive(!isActive);
  }
  function signIn() {
    if (signInBtnDisplay) {
      return (
        <div className={"login-wrapper"}>
      <button className={`${isActive ? "header-selected-btn signInBtn-header header-btns" : "signInBtn-header header-btns"} `} onClick={signInOnClick}>Sign In</button>
      <div className={"login-container"}>
        <form className={`${isActive ? "open" : "login-form"}`}>
        <input type="email" placeholder="Username" required={true} />
      <input type="password" placeholder="Password" required={true}/>
        <input type="submit" value="Sign In" />
        </form>
        </div>
      </div>
      );
    }
  }


  function signUp() {
    if (signUpBtnDisplay) {
      return(
      <a className="signup-link" href="/signup">
          <button className={`${isSignUp ? "signup-btn-selected header-btns" : "signUpBtn-header header-btns"} `}>Sign Up</button>
      </a>
      )
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
          {signUp()}
          {signIn()}
          </li>
        
        </ul>
      </nav>
    </header>
 )
}