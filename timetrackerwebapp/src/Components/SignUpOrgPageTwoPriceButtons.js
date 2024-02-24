import React from "react";
import SignUpButtonClass from './SignUpButtonClass.js';
import { useState } from "react";
import './SignUpButtonClass.css';
export default function SignUpOrgPageTwoPriceButtons({setCurrentPlan, currentPlan, employeeAmount, showButtons}){
function printValue(event){
    setCurrentPlan(event.target.value);
}
const freeBtnDetails = ["Basic Time Tracking", "Single User Access", "Basic Reporting"];
const basicBtnDetails = ["$10.00/month", "Enhanced Time Tracking", "Multi-User Access", "Export Data", "Basic Analytics Dashboard"]
const extraBtnDetails = ["$25.00/month", "Advanced Time Tracking", "Project Budgeting","Customizable Reports","Priority Customer Support"]
const premiumBtnDetails =["$50.00/month", "Unlimited Users", "Advanced Analytics Dashboard", "Resource Planning", "Priority Customer Support"]
const freeBtn = ()=>{
    return(
        <SignUpButtonClass planName={"Free"} planDescription={freeBtnDetails} val={"Free"}  onClickMethod={printValue} classes={currentPlan == "Free"  ? "signupBtnCurrent" : "signupBtnDefault"} />
    )
}
const basicBtn = () =>{
    return(
    <SignUpButtonClass planName={"Basic"} planDescription={basicBtnDetails} val={"Basic"}  onClickMethod={printValue} classes={currentPlan == "Basic"  ? "signupBtnCurrent" : "signupBtnDefault"} />
    )
}
const extraBtn = () =>{
    return(
    <SignUpButtonClass planName={"Extra"} planDescription={extraBtnDetails} val={"Extra"}  onClickMethod={printValue} classes={currentPlan == "Extra"  ? "signupBtnCurrent" : "signupBtnDefault"} />
    )
}

const premiumBtn = () =>{
    return (
    <SignUpButtonClass planName={"Premium"} planDescription={premiumBtnDetails} val={"Premium"}  onClickMethod={printValue} classes={currentPlan == "Premium"  ? "signupBtnCurrent" : "signupBtnDefault"} />
    )
}

const displayPricePlans = (num) =>{
    if(num <= 10) {
        return (
            <div className={employeeAmount != 0 ? "price-btn-container" :"display-none"}>
                {freeBtn()}
                {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
              
            </div>
        )
    }
    else if(num > 10 && num <= 100){
        return(
            <div className={employeeAmount != 0 ? "price-btn-container" :"display-none"}>
                {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
               
            </div>
        )
    }
    else if(num > 100 && num <= 500){
        return(
        <div className={employeeAmount != 0 ? "price-btn-container" :"display-none"}>
                {extraBtn()}
                {premiumBtn()}
        </div>
        )
    }
    else if(num > 500){
        return(
        <div className={employeeAmount != 0 ? "price-btn-container" :"display-none"}>
                {premiumBtn()}
        </div>
        )
    }

}


  

    
    return(
        <>
        {displayPricePlans(employeeAmount)}
        </>
    )
}