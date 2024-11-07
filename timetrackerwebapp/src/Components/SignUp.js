import Header from './Header.js';
import React, { useState } from 'react';
import './SignUp.css';
import SignUpEmployee from './SignUpEmployee.js';
import SignUpOrg from './SignUpOrg.js';
import Footer from './Footer.js';
export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const [numOfEmployees, setNumOfEmployees] = useState(0);
    const [orgPageNumber, setPageNumber] = useState(1);
    const[priceDetails, setPriceDetails] = useState(0.00);
    const[planDetails, setPlanDetails] = useState("Free");
    
    const freePlan ={
        planName:"Free",
        price:0.00
    }
    const basicPlan ={
        planName:"Basic",
        price:10.00
    }
    const extraPlan ={
        planName:"Extra",
        price:25.00
    }
    const premiumPlan ={
        planName:"Premium",
        price:50.00
    }
    const noPlanSelected ={
        planName:" ",
        price:0
    }
    const planArray = [freePlan, basicPlan, extraPlan, premiumPlan, noPlanSelected];

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

    let orgRightButton = ()=>{
        return(
            <button className='org-right-button' onClick={rightBtnClicked}>
                      <box-icon name='right-arrow-circle' size='60px' color='rgb(50,50,50)'></box-icon>
            </button>

        )
    }
    function rightBtnClicked(){
        setPageNumber(orgPageNumber + 1);
          
      }
      let orgLeftButton = () =>{
        return(
            <button className='org-left-button' onClick={leftBtnClicked}>
                <box-icon name='left-arrow-circle' size='60px' color='rgb(50,50,50)'></box-icon>
            </button>
        )
    }
    function leftBtnClicked(){
        setPageNumber(orgPageNumber - 1);
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
             <SignUpOrg pageNumber={orgPageNumber} orgRightButton={orgRightButton} orgLeftButton={orgLeftButton} formBehaviour={handleSubmit} planArray={planArray} />
            
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
        <Header signUpBtnDisplay={true} signInBtnDisplay={true} isHome={false} isPrice={false} />
        <section className='signup-section'>
        {signupType()}
        <div className='signup-official-container'>
            {displayFields(signUpType)}
        </div>

        </section>
        <Footer />
        </>
    )
}