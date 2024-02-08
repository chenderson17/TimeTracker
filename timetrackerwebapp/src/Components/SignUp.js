import Header from './Header.js';
import React, { useState } from 'react';

export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const[numOfEmployees, setNumOfEmployees] = useState(0);
    function getEmployeeNumber(event){
        setNumOfEmployees(event.target.value);
    }
    const displayPricePlans = (num) =>{
        if(num <= 10) {
            return (
                <>
                {createAButton("Free")}
                {createAButton("Basic")}
                {createAButton("Extra")}
                {createAButton("Premium")}
                </>
            )
        }
        else if(num > 10 && num <= 100){
            return(
                <>
                {createAButton("Basic")}
                {createAButton("Extra")}
                {createAButton("Premium")}
                </>
            )
        }
        else if(num > 100 && num <= 500){
            return(
            <>
            {createAButton("Extra")}
            {createAButton("Premium")}
            </>
            )
        }
        else if(num > 500){
            return(
            <>
            {createAButton("Premium")}
            </>
            )
        }

    }
    const genericInput = ()=>{
        return(
            <>
                <label for='fNameSignup'>First Name</label>
                <input type="text" name='fnameSignup' placeholder='First Name'></input>
                <label for="lNameSignup">Last Name</label>
                <input type="text" name='lnameSignup' placeholder='Last Name'></input>
                <label for="emailSignup">Email</label>
                <input type="email" name='emailSignup' placeholder='Email'></input>
                <label for='passwordSignup'>Password</label>
                <input type="password" name='passwordSignup' placeholder='Password'></input>
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
            <form action="/" method="POST">
                <label for='companyNameSignup'>Company Name</label>
                <input type='text' name='companyNameSignup' placeholder='Company Name'></input>
                {genericInput()}
                <label for='numOfEmployeesSignup'>Number of Employees</label>
                <input type="number" name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
                {displayPricePlans(numOfEmployees)}
                {createAButton("Create an Account")}
            </form>
        )
        }
        else{
            return(
            <form action='/' method="POST">
                <label for="companyIdSignup">Company ID</label>
                <input type='text' name='companyId' placeholder='Company ID' max-length='5'></input>
                {genericInput()}
                {createAButton("Create an Account")}

            </form>
            )
        }
     }
    return(
        <>
        <Header signUpBtnDisplay={false} signInBtnDisplay={true} isHome={false} isPrice={false} />
        <div className='sign-up-header'>
        <h2>Sign Up</h2>
        </div>
        <div className='sign-up-select-container'>
            <label for='employee-or-org-select'>Are you an Employee or Registering on behalf of an Organizaiton?</label>
            <select name='employee-org-select' id='employee-or-org-select' onClick={type}>
                <option value='org'>Organization</option>
                <option value='employee'>Employee</option>
            </select>
        </div>
        <div className='random'>
            {displayFields(signUpType)}
            
        </div>
        </>
    )
}