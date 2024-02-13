import Header from './Header.js';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const[numOfEmployees, setNumOfEmployees] = useState(0);
    function getEmployeeNumber(event){
        setNumOfEmployees(event.target.value);
    }
    const displayPricePlans = (num) =>{
        if(num <= 10) {
            return (
                <div>
                {createAButton("Free")}
                {createAButton("Basic")}
                {createAButton("Extra")}
                {createAButton("Premium")}
                </div>
            )
        }
        else if(num > 10 && num <= 100){
            return(
                <div>
                {createAButton("Basic")}
                {createAButton("Extra")}
                {createAButton("Premium")}
                </div>
            )
        }
        else if(num > 100 && num <= 500){
            return(
            <div>
            {createAButton("Extra")}
            {createAButton("Premium")}
            </div>
            )
        }
        else if(num > 500){
            return(
            <div>
            {createAButton("Premium")}
            </div>
            )
        }

    }
    const genericInput = ()=>{
        return(
            <>
                <div className='signup-container signup-fname-container'>
                <label for='fNameSignup'>First Name</label>
                <input type="text" name='fnameSignup' placeholder='First Name'></input>
                </div>
                <div className='signup-container signup-lname-container'>
                <label for="lNameSignup">Last Name</label>
                <input type="text" name='lnameSignup' placeholder='Last Name'></input>
                </div>
                <div className='signup-container signup-email-container'>
                <label for="emailSignup">Email</label>
                <input type="email" name='emailSignup' placeholder='Email'></input>
                </div>
                <div className='signup-container signup-phone-container'>
                <label for="emailSignup">Phone</label>
                <input type="tel" name='phoneSignup' placeholder='Phone'></input>
                </div>
                <div className='signup-container signup-password-container'>
                <label for='passwordSignup'>Password</label>
                <input type="password" name='passwordSignup' placeholder='Password'></input>
                </div>
            </>
        )

    }
    const createAButton = (text)=>{
        return(
            
            <button type='submit' name='signUpSubmitBtn'>{text}</button>
        )
    }
     function type (event) {setSignUpType(event.target.value);}
     function displayFields(signUpType){
        if(signUpType == "org"){
        return(
            <form action="/" method="POST" className='signup-form-org signup-form '>
                <div className='company-name-container signup-container'>
                <label for='companyNameSignup'>Company Name</label>
                <input type='text' name='companyNameSignup' placeholder='Company Name'></input>
                </div>


                {genericInput()}

                <div className="num-of-employees-container signup-container">
                <label for='numOfEmployeesSignup'>Number of Employees</label>
                <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
                </div>

                


                <div className='create-an-account-button-container'>
                {createAButton("Create an Account")}
                </div>
            </form>
        )
        }
        else{
            return(
            <form action='/' method="POST" className='signup-form-employee signup-form'>
    
                <div className='signup-companyId signup-container'>
                <label for="companyIdSignup">Company ID</label>
                <input type='text' name='companyId' placeholder='Company ID' max-length='5'></input>
                </div>
                {genericInput()}
                <div className='create-an-account-button-container'>
                {createAButton("Create an Account")}
                </div>

            </form>
            )
        }
     }
    return(
        <>
        <Header signUpBtnDisplay={false} signInBtnDisplay={true} isHome={false} isPrice={false} />
        <section className='signup-section'>
        <div className='company-org-container'>
        <div className='signup-header'>
        <h2>Sign Up</h2>
        </div>
        <div className='signup-select-container'>
            <label for='employee-or-org-select' className='signup-select-label'>Are you an Employee or Registering on behalf of an Organizaiton?</label>
            <select name='employee-org-select' id='employee-or-org-select' onClick={type}>
                <option value='org'>Organization</option>
                <option value='employee'>Employee</option>
            </select>
        </div>
        </div>
        <div className='sign-up-official-container'>
            {displayFields(signUpType)}
            
        </div>
        </section>
        </>
    )
}