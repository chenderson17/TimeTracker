import Header from './Header.js';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const [numOfEmployees, setNumOfEmployees] = useState(0);
    const [orgPageNumber, setPageNumber] = useState(1);
    const[priceDetails, setPriceDetails] = useState("");
    const billing = ()=>{
        return(
        <div className='billing-address-container'>
                        <div className="billing-address-container-header">
                        <h4>Billing</h4>
                        </div>
                        <div className='billing-style-container'>
                            <div className='billing-address-container-addressOne-addressTwo'>
                            <div>
                            <label>Address Line 1 </label>
                        <input type='text' placeholder='Address Line 1' required={true}></input>
                        </div>
                        <div>
                        <label>Address Line 2</label>
                        <input type='text' placeholder='Address Line 2 (Optional)'></input>
                        </div>
                        </div>
                        
                        <div>
                        <label>Zip Code</label>
                        <input type='text' placeholder='Zip Code' required={true}></input>
                        </div>
                        <div>
                        <label>City</label>
                        <input type='text' placeholder='City' required={true}></input>
                        </div>
                        <div>
                        <label>State</label>
                        <input list='state-providence-region-list' name='select-country-list' placeholder='State/Providence/Region' />
                        </div>


                        <div>
                            <label>Country</label>
                        <input list='country-list' name='select-country-list' placeholder='Country' required={true}/>
                        <datalist id='country-list'>
                            <option value="">--Country--</option>
                        </datalist>
                        </div>
                        </div>
                        </div>
        )
    }
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

    const createAccountBtn = () =>{
        return(
        <button className='signup-submit-btn' type='submit'>
            Create Account
        </button>
        )
    }
    const freeBtn = ()=>{
        return(
            <div className='free-btn-container plan-btn-container'>
            <button className='signup-free-btn plan-btn'>
                Free
            </button>
            <details>
                <summary>More Info</summary>
                <ul>
                <li>Basic Time Tracking</li>
                <li>Single User Access</li>
                <li>Basic Reporting</li>
                </ul>
            </details>
            </div>
        )
    }
    const basicBtn = () =>{
        return(
            <div className='basic-btn-container plan-btn-container'>
            <button className='signup-basic-btn plan-btn'>
                Basic
            </button>

            <details>
                <summary>More Info</summary>
                <ul>
                <li>Enhanced Time Tracking</li>
                <li>Multi-User Access</li>
                <li>Export Data</li>
                <li>Basic Analytics Dashboard</li>
              
                </ul>
            </details>

            </div>
        )
    }
    const extraBtn = ()=>{
        return(
            <div className='extra-btn-container plan-btn-container'>
            <button className='extra-btn-container plan-btn'>
                Extra
            </button>
            <details>
                <summary>More Info</summary>
                <ul>
                <li>Advanced Time Tracking</li>
                <li>Project Budgeting</li>
                <li>Customizable Reports</li>
                <li>Priority Customer Support</li>
              
                </ul>
            </details>
            </div>
        )
    }
    const premiumBtn = ()=>{
        return(
            <div className='premium-btn-container plan-btn-container'>
            <button className='premium-btn-container plan-btn'>
                Premium
            </button>
            <details>
                <summary>More Info</summary>
                <ul>
                <li>Unlimited Users</li>
                <li>Advanced Analytics Dashboard</li>
                <li>Resource Planning</li>
                <li>Priority Customer Support</li>
              
                </ul>
            </details>
            </div>
            
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // This prevents the default form submission behavior
        // Your custom submission logic goes here
      };
    let orgRightButton = ()=>{
        return(
            <button className='org-right-button' onClick={rightBtnClicked}>
                      <box-icon name='right-arrow-circle' size='60px' color='rgb(50,50,50)'></box-icon>
            </button>

        )
    }
    let orgLeftButton = () =>{
        return(
            <button className='org-left-button' onClick={leftBtnClicked}>
                <box-icon name='left-arrow-circle' size='60px' color='rgb(50,50,50)'></box-icon>
            </button>
        )
    }
    function rightBtnClicked(){
      setPageNumber(orgPageNumber + 1);
        
    } 
    function leftBtnClicked(){
        setPageNumber(orgPageNumber - 1);
    }
    function getEmployeeNumber(event){
        setNumOfEmployees(event.target.value);
    }
    const displayPricePlans = (num) =>{
        if(num <= 10) {
            return (
                <div className='price-btn-container'>
                {freeBtn()}
                {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
                </div>
            )
        }
        else if(num > 10 && num <= 100){
            return(
                <div className='price-btn-container'>
               {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
                </div>
            )
        }
        else if(num > 100 && num <= 500){
            return(
            <div className='price-btn-container'>
           {extraBtn()}
            {premiumBtn()}
            </div>
            )
        }
        else if(num > 500){
            return(
            <div className='price-btn-container'>
            {premiumBtn()}
            </div>
            )
        }

    }

    const genericInput = ()=>{
        return(
            <>
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
                <input type="tel" name='phoneSignup' placeholder='Phone' required={true}></input>
                </div>
                <div className='signup-container signup-password-container'>
                <label for='passwordSignup'>Password</label>
                <input type="password" name='passwordSignup' placeholder='Password'  required={true}></input>
                </div>
            </>
        )

    }

    function orgForm(fields){
        return(
        <>
        <form action="/" method="POST" className='signup-form-org signup-form ' onSubmit={handleSubmit}>
            {fields()}
       </form>
       </>
        )
    }
    function orgFormPayment(fields){
        return(
            <form action ='/' onSumbit={handleSubmit} className='org-form-payment'>
                {fields()}
            </form>

        )
    }
    function orgPageOneFields (){
        return(
        <div className='org-page-one'>
        <div className='company-name-container signup-container'>
        <label for='companyNameSignup'>Company Name</label>
        <input type='text' name='companyNameSignup' placeholder='Company Name'  required={true}></input>
        </div>
        {genericInput()}
        </div>

        )
    }
    function orgPageTwoFields(){
        return(
            <div className="num-of-employees-container signup-container">

                 <div className='num-of-employees-input-container'>
                 <h4>Number of Employees</h4>
                <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
                </div>
                {displayPricePlans(numOfEmployees)}
                </div>
        )
    }
    function orgPageTwoPaymentFields(){
        return(
            <div className='enter-card-details-container'>
                       <div className='card-details-header-container'>
                        <h3>Enter Card Details</h3>
                        </div>

                        <div className='card-number-container'>
                        <label for='card-number'>Card Number</label>
                        <input type="text" placeholder='Card Number' maxLength={16}></input>
                        </div>


                        <div className='card-detail-expr-container'>
                        <label for='expiration-date'>Expiration Date</label>
                        <input type="date"></input>
                        </div>

                        <div className='cvv-style-container'>
                        <label for='cvv'>CVV</label>
                        <input type='password' placeholder="***" maxLength={3}></input>
                        </div>
                        
                    </div>
        )

    }
    function displayOrgPage(pageNumber){
        if(pageNumber === 1){
            return(

                <div className='org-page-one'>
                {orgForm(orgPageOneFields)}
                <div className='solo-btn'>
                 {orgRightButton()}
                </div>
                </div>
                
            )
           
        }
        else if(pageNumber === 2){
            return(
             
                <div className='org-page-two'>
                    <div className='org-page-two-header'>
                    <h3>Choose a Price Plan</h3>
                    </div>
                    <div className='org-page-two-num'>
                    {orgForm(orgPageTwoFields)}
                    </div>

                    <div className='org-page-two-credit'>
                    {orgFormPayment(orgPageTwoPaymentFields)}
                    </div>

                    <div className='org-page-two-billing'>
                    {orgFormPayment(billing)}
                    </div>
                    <div className='create-an-account-button-container'>
                        {createAccountBtn()}
                    </div>
                    <div className='page-two-change-btn-container'>
                    <div>
                    {orgLeftButton()}
                    </div>
                    </div>
                    
              </div>
            )

        }
        else if(pageNumber === 3){
            return(
                <>
               {orgFormPayment(billing)}
               {createAccountBtn()}
                <div className='solo-btn'>
                    {orgLeftButton()}
                </div>
            </>
            )

        }

    }




     function type (event) {setSignUpType(event.target.value);}







     function displayFields(signUpType){
        if(signUpType === "org"){
        return(
            <>
             {displayOrgPage(orgPageNumber)}
            
            </>
        )
        }
        else{
            return(
                <>
            <form action='/' method="POST" className='signup-form-employee signup-form'>
                <div className='signup-companyId signup-container'>
                <label for="companyIdSignup">Company ID</label>
                <input type='text' name='companyId' placeholder='Company ID' max-length='5'></input>
                </div>
                {genericInput()}

                <div className='create-an-account-button-container'>
                {createAccountBtn()}
                </div>

            </form>
            </>
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