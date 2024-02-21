import React from "react";
import { useState } from "react";
import SignUpOrgPageTwoPriceButtons from './SignUpOrgPageTwoPriceButtons.js';
import './SignUpOrgPageTwo.css';
export default function SignUpOrgPageTwo({orgLeftButton, formBehaviour}){
    const [numOfEmployees, setNumOfEmployees] = useState(1);
    const[planDetails, setPlanDetails] = useState("Free");
    const[priceDetails, setPriceDetails] = useState(0.00);
    const [currentPlan, setCurrentPlan] = useState("Free");
    const tax = Math.round(priceDetails * 5.70) / 100;
    function getEmployeeNumber(event){
        setNumOfEmployees(event.target.value);
    }
    return(
        <section className='signup-org-pagetwo-payment-section'>
        <form action="/" className="signup-org-pagetwo-form" method="POST" onSubmit={formBehaviour}>
        <div className="num-of-employees-container">

        <div className="num-of-employees-header-container">
            <h3>Number of Employees</h3>
        </div>

        <div className='num-of-employees-input-container'>
        <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
        <SignUpOrgPageTwoPriceButtons setCurrentPlan={setCurrentPlan} currentPlan={currentPlan} employeeAmount={numOfEmployees} />
        </div>


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


        </div>

        <div className='subtotal-section'>
            <div className='signup-subtotal-container'>
                <div className='signup-plan-container'>
                <h3>{currentPlan}</h3>
            </div>
            <div className='signup-subtotal-cost-container subtotal-container'>
            <h4>Subtotal</h4>
            <little>${priceDetails}</little>
            </div>
            <div className='signup-subtotal-tax-container subtotal-container'>
            <h4>Tax</h4>
            <little>${tax}</little>
            </div>

            <div className='signup-total-container subtotal-container'>
                <h4>Total</h4>
                <little>${priceDetails + tax}</little>
            </div>
            </div>
            </div>
            <div className='signup-org-pagetwo-submit-btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
        {orgLeftButton()}
        </section>


    )
}