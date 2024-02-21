import Header from './Header.js';
import React, { useState } from 'react';
import './SignUp.css';
import SignUpEmployee from './SignUpEmployee.js';
import SignUpOrg from './SignUpOrg.js';

export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const [numOfEmployees, setNumOfEmployees] = useState(0);
    const [orgPageNumber, setPageNumber] = useState(1);
    const[priceDetails, setPriceDetails] = useState(0.00);
    const[planDetails, setPlanDetails] = useState("Free");
    const signupType = ()=>{
        return(
            <div className= {orgPageNumber > 1 ? 'display-none' : 'signup-type-container'}>
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
            </div>
    
        )
    }

    
 
    const handleSubmit = (event) => {
        event.preventDefault(); // This prevents the default form submission behavior
        // Your custom submission logic goes here
      };
    
   

     function type (event) {setSignUpType(event.target.value);}




     function displayFields(signUpType){
        if(signUpType === "org"){
        return(
            <>
             <SignUpOrg formBehaviour={handleSubmit} />
            
            </>
        )
        }
        else{
            return(
             <SignUpEmployee formBehaviour={handleSubmit} />
            )
        }
     }

    return(
        <>
        <Header signUpBtnDisplay={false} signInBtnDisplay={true} isHome={false} isPrice={false} />
        <section className='signup-section'>
        {signupType()}
        <div className='signup-official-container'>
            {displayFields(signUpType)}
        </div>

        </section>
        </>
    )
}