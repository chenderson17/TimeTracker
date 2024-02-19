import React from "react";
import { useState } from "react";

export default function SignUpOrg({pageNumber}){
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


    function pageOne(){
        <section className='signup-org-page-one-section'>
        <form action='/' className='signup-org-info-form' method="POST"> 
         <div className='signup-container signup-fname-container'>
                    <label for='fNameSignup'>First Name</label>
                    <input type="text" name='fnameSignup' placeholder='First Name' required={true}></input>
                    </div>
                    <div className='signup-container signup-lname-container'>
                    <label for="lNameSignup">Last Name</label>
                    <input type="text" name='lnameSignup' placeholder='Last Name' required={true}></input>
                    </div>
                    <div className='signup-container signup-email-container'>
                    <label for="emailSignup">Email</label>
                    <input type="email" name='emailSignup' placeholder='Email' required={true}></input>
                    </div>
                    <div className='signup-container signup-phone-container'>
                    <label for="emailSignup">Phone</label>
                    <input type="tel" name='phoneSignup' placeholder='Phone ' required={true}></input>
                    </div>
                    <div className='signup-container signup-password-container'>
                    <label for='passwordSignup'>Password</label>
                    <input type="password" name='passwordSignup' placeholder='Password'  required={true}></input>
                    </div>
        </form>
            {orgRightButton}
        </section>
    
    }
    function pageTwo(){
    
    }






    if(pageNumber === 1){
        return(
           {pageOne}
        )
    }
    else{
        return(
            {pageTwo}
        )
    }
}