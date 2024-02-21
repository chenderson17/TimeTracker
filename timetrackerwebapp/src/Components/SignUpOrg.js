import React from "react";
import { useState } from "react";
import SignUpOrgPageOne from './SignUpOrgPageOne.js';
import SignUpOrgPageTwo from './SignUpOrgPageTwo.js';
export default function SignUpOrg({formBehaviour}){
    const [orgPageNumber, setPageNumber] = useState(1);

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
    const pages = [<SignUpOrgPageOne pageNumber={orgPageNumber} orgRightButton={orgRightButton} formBehaviour={formBehaviour} />, <SignUpOrgPageTwo orgLeftButton={orgLeftButton} formBehaviour={formBehaviour} />]
    return(
        <>
        {pages[orgPageNumber - 1]}
       </>
    )



   
}