import Header from './Header.js';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp(){
    const[signUpType, setSignUpType] = useState("org");
    const [numOfEmployees, setNumOfEmployees] = useState(0);
    const [orgPageNumber, setPageNumber] = useState(1);
    const [fname, setFname] = useState("");
    const[lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[priceDetails, setPriceDetails] = useState("");

    function changeFname (event){
        setFname(event.target.value);
    }
    function changeLname (event){
        setFname(event.target.value);
    }
    function changeEmail (event){
        setEmail(event.target.value);
    }
    function changePhone (event){
        setPhone(event.target.value);
    }
    function changePrice (event){
        setPriceDetails(event.target.value);
    }
    const freeBtn = ()=>{
        return(
            <div className='free-btn-container'>
            <button>
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
            <div className='basic-btn-container'>
            <button>
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
            <div className='extra-btn-container'>
            <button>
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
            <div className='premium-btn-container'>
            <button>
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
                      <box-icon name='right-arrow-circle' size='lg'></box-icon>
            </button>

        )
    }
    let orgLeftButton = () =>{
        return(
            <button className='org-left-button' onClick={leftBtnClicked}>
                <box-icon name='left-arrow-circle' ></box-icon>
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
                <div>
                {freeBtn()}
                {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
                </div>
            )
        }
        else if(num > 10 && num <= 100){
            return(
                <div>
               {basicBtn()}
                {extraBtn()}
                {premiumBtn()}
                </div>
            )
        }
        else if(num > 100 && num <= 500){
            return(
            <div>
           {extraBtn()}
            {premiumBtn()}
            </div>
            )
        }
        else if(num > 500){
            return(
            <div>
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
                <input type="text" name='fnameSignup' placeholder='First Name' onKeyUp={changeFname} required={true}></input>
                </div>
                <div className='signup-container signup-lname-container'>
                <label for="lNameSignup">Last Name</label>
                <input type="text" name='lnameSignup' placeholder='Last Name' onKeyUp={changeLname}  required={true}></input>
                </div>
                <div className='signup-container signup-email-container'>
                <label for="emailSignup">Email</label>
                <input type="email" name='emailSignup' placeholder='Email' onKeyUp={changeEmail}  required={true}></input>
                </div>
                <div className='signup-container signup-phone-container'>
                <label for="emailSignup">Phone</label>
                <input type="tel" name='phoneSignup' placeholder='Phone' onKeyUp={changePhone}  required={true}></input>
                </div>
                <div className='signup-container signup-password-container'>
                <label for='passwordSignup'>Password</label>
                <input type="password" name='passwordSignup' placeholder='Password'  required={true}></input>
                </div>
            </>
        )

    }
    const createAButton = (text)=>{
        return(
            
            <button type='submit' name='signUpSubmitBtn'>{text}</button>
        )
    }


    function displayOrgPage(pageNumber){
        if(pageNumber === 1){
            return(
                <>
                <div className='company-name-container signup-container'>
                <label for='companyNameSignup'>Company Name</label>
                <input type='text' name='companyNameSignup' placeholder='Company Name'  required={true}></input>
                </div>


                {genericInput()}

                <div className="num-of-employees-container signup-container">
                <label for='numOfEmployeesSignup'>Number of Employees</label>
                <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}  required={true}></input>
                </div>

                


                <>
                 {orgRightButton()}
                </>
                </>
            )
           
        }
        else if(pageNumber === 2){
            return(
                <>
                <h3>Choose a Price Plan</h3>
                 <div className="num-of-employees-container signup-container">
                <label for='numOfEmployeesSignup'>Number of Employees</label>
                <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
                </div>
              
                {displayPricePlans(numOfEmployees)}


                <div className='enter-card-details-container'>
                    <h3>Enter Card Details</h3>
                    <form action ='/' onSumbit={handleSubmit}>
                        <label for='card-number'>Card Number</label>
                        <input type="text"></input>

                        <label for='expiration-date'>Expiration Date</label>
                        <input type="date"></input>


                        <label for='billing-address'>Billing Address</label>
                        <input type='text' placeholder='Address Line 1'></input>
                        <input type='text' placeholder='Address Line 2 (Optional)'></input>
                        <input type='text' placeholder='Zip Code'></input>
                        <input type='text' placeholder='City'></input>

                        <input list='state-providence-region-list' name='select-country-list' placeholder='State/Providence/Region' />
                        <datalist id='state-providence-region-list'>
                            <option value="">--State/Providence/Region--</option>
                        </datalist>





                        <input list='country-list' name='select-country-list' placeholder='Country' />
                        <datalist id='country-list'>
                            <option value="">--Country--</option>
                        </datalist>
                    
                    </form>
                </div>
                    {orgLeftButton()}
                    {orgRightButton()}
                
                </>
            )

        }
        else if(pageNumber === 3){
            return(
                <>
                <h3>Review</h3>
                    {orgLeftButton()}
                
                </>
            )

        }

    }




     function type (event) {setSignUpType(event.target.value);}
     function displayFields(signUpType){
        if(signUpType == "org"){
        return(
            <form action="/" method="POST" className='signup-form-org signup-form ' onSubmit={handleSubmit}>
               {displayOrgPage(orgPageNumber)}
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
                {createAButton("Create Account")}
                </div>

            </form>
            )
        }
     }
    return(
        <>
        <Header signUpBtnDisplay={false} signInBtnDisplay={true} isHome={false} isPrice={false} />
        <section className='signup-section'>
        <div className='signup-type-container'>
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



        <div className='signup-official-container'>
            {displayFields(signUpType)}
            
        </div>

        </section>
        </>
    )
}