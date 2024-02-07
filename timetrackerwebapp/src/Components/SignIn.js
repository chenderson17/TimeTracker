import React from "react";
import Header from "./Header.js";
import Footer from './Footer.js';
import './SignIn.css';
import OfficeImage from '../images/SignInImage-1920.jpg';
export default function SignIn(){
    return(
        <>
        <Header signUpBtnDisplay={true} signInBtnDisplay={false} isHome={false} isPrice={false} />
        <section className='sign-in-section'>
        
        <div class='sign-in-main-c'>
         <h2>Sign In</h2>
         <form action='/' method='POST'>
            <div className='sign-in-email-container sign-in-form-container'>
            <label for='sign-in-username'>Email</label>
            <input name='sign-in-username' type='email' placeholder="Email" required={true}/>
            </div>
            <div className='sign-in-password-container sign-in-form-container'>
            <label form="sign-in-password">Password</label>
            <input name='sign-in-password' type='password' placeholder="Password" required={true}></input>
            <a href='/'>Forgot Password?</a>
            </div>
            <div className='submit-btn-container'>
            <button type='submit'>Submit</button>
            <p>Don't have an account? <a href='/'>Sign Up</a></p>
            </div>
         </form>
         </div>
        </section>
        <Footer />
        </>
    )
}