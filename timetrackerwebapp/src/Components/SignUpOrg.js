import React from "react";
import { useState } from "react";
import SignUpOrgPageOne from './SignUpOrgPageOne.js';
import SignUpOrgPageTwo from './SignUpOrgPageTwo.js';
export default function SignUpOrg({formBehaviour, orgRightButton, orgLeftButton, pageNumber, planArray, isMonthly}){
    const pages = [<SignUpOrgPageOne pageNumber={pageNumber} orgRightButton={orgRightButton} formBehaviour={formBehaviour} />, <SignUpOrgPageTwo pageNumber={pageNumber} orgLeftButton={orgLeftButton} formBehaviour={formBehaviour} planArray={planArray} isMonthly={isMonthly} />]
    return(
        <>
        {pages[pageNumber - 1]}
       </>
    )



   
}