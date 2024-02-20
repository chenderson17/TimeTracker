import SignUpOrgPageTwoPriceButtons from './SignUpOrgPageTwoPriceButtons.js';
import React from "react";
import { useState } from "react";
import SignUpOrgPageOne from './SignUpOrgPageOne.js';
import SignUpOrgPageTwo from './SignUpOrgPageTwo.js';
export default function SignUpOrg(){
    const [orgPageNumber, setPageNumber] = useState(1);
    const [currentPlan, setCurrentPlan] = useState("Free");

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

    function pageOne(){
        return(
          <>
          <SignUpOrgPageTwo orgLeftButton={orgLeftButton} />
          </>
        )
    
    }
    return(
        <>
       <SignUpOrgPageTwoPriceButtons setCurrentPlan={setCurrentPlan} currentPlan={currentPlan} employeeAmount={10} />
       </>
    )



   
}