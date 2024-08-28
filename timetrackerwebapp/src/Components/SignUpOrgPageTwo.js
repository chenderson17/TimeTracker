import React from "react";
import { useState } from "react";
import SignUpOrgPageTwoPriceButtons from './SignUpOrgPageTwoPriceButtons.js';
import './SignUpOrgPageTwo.css';
export default function SignUpOrgPageTwo({orgLeftButton, formBehaviour, planArray}){
    const [numOfEmployees, setNumOfEmployees] = useState(null);
    const[planDetails, setPlanDetails] = useState("Free");
    const [currentPlan, setCurrentPlan] = useState(planArray[4]);
    const tax = (Math.round(currentPlan.price * 5.7) / 100);
    let [isMonthly,setIsMonthly] = useState(true);
    let [multiplier, setMultiplier] = useState(isMonthly ? 1 : 12);
    const[displayButtons, setDisplay] = useState(false);
    function getEmployeeNumber(event){
        setCurrentPlan(planArray[4]);
        if(event.target.value.length != 0){
            setNumOfEmployees(event.target.value);
          
        }
        else{
            setNumOfEmployees(null)
            setCurrentPlan(planArray[4]);
        }
    }
    function handleMonthly(event){
        let val = event.target.value;
        console.log(val);
        if(val === 'monthly'){
        setIsMonthly(true);
        setMultiplier(1);
        console.log(isMonthly);
        }
        else{
            setIsMonthly(false);
            setMultiplier(12);
            console.log(isMonthly);
            
        }
    }
    return(
        <section className='signup-org-pagetwo-payment-section'>
        <form action="/" className="signup-org-pagetwo-form" method="POST" onSubmit={formBehaviour}>

        <div className="num-of-employees-section">
    <div className='num-of-employees-container'>
      <div className="num-of-employees-header-container">
            <h3>Number of Employees</h3>
        </div>

        <div className='num-of-employees-input-container'>
        <input type="text" inputmode="numeric"name="numOfEmployeesSignup" placeholder='Number of Employees' onKeyUp={getEmployeeNumber}></input>
        </div>
        <SignUpOrgPageTwoPriceButtons setCurrentPlan={setCurrentPlan} currentPlan={currentPlan} employeeAmount={numOfEmployees} showButtons={displayButtons} planArray={planArray}/>
        </div>
        <div className='radio-btns'>
            <fieldset>
            <label>Monthly</label>
            <input id='monthly-yearly' value={'monthly'} name='monthlyyearly' type='radio' onFocus={handleMonthly} checked={isMonthly}></input>
            <label>Yearly</label>
            <input id='monthly-yearly' value={'yearly'} name='monthlyyearly' type='radio' onFocus={handleMonthly}></input>
            </fieldset>
        </div>
        </div>


        <div className='enter-card-details-container'>
                       <div className='card-details-header-container'>
                        <h3>Enter Card Details</h3>
                        </div>
                        <div className="signup-card-number-expr">
                        <div className='card-number-container'>
                        <label for='card-number'>Card Number</label>
                        <input type="text" placeholder='Card Number' maxLength={16}></input>
                        </div>


                        <div className='card-detail-expr-container'>
                        <label for='expiration-date'>Expiration Date</label>
                        <input type="date"></input>


                        </div>

                      



                        </div>


                        

                        <div className='cvv-style-container'>
                        <label for='cvv'>CVV</label>
                        <input type='password' placeholder="***" maxLength={3}></input>
                        </div>
                        
                        
        </div>
       




        <div className='billing-address-container'>
                         <div className='billing-header'>
                        <h3>Billing</h3>
                        </div>   



                        <div className='billing-addresses'>
                            <label>Address Line 1 </label>
                            <input type='text' placeholder='Address Line 1' required={true}></input>
                      


                      
                        <label>Address Line 2</label>
                        <input type='text' placeholder='Address Line 2 (Optional)'></input>
                       </div>


                       <div className='billing-zip'>

                        
                        <label>Zip Code</label>
                        <input type='text' placeholder='Zip Code' required={true}></input>
                        
                    </div>
                    

                    <div className='billing-city'>
                        
                        <label>City</label>
                        <input type='text' placeholder='City' required={true}></input>
                    </div>

                      <div className='billing-state'>
                        <label>State</label>
                        <input list='state-providence-region-list' name='select-country-list' placeholder='State/Providence/Region' />
                        <datalist id='state-list'>
                            <option value="">--State--</option>
                        </datalist>
                     </div>


                    <div className='billing-country'>
                        <label>Country</label>
                        <input list='country-list' name='select-country-list' placeholder='Country' required={true}/>
                        <datalist id='country-list'>
                            <option value="">--Country--</option>
                        </datalist>
                    </div>
        </div>


        <div className='subtotal-section'>
            <div className='signup-subtotal-container'>
                <div className='signup-plan-container'>
                <h3>{currentPlan.planName}</h3>
            </div>
            <div className='signup-subtotal-cost-container subtotal-container'>
            <h4>Subtotal</h4>
            <little>${currentPlan.price * multiplier}</little>
            </div>
            <div className='signup-subtotal-tax-container subtotal-container'>
            <h4>Tax</h4>
            <little>${tax}</little>
            </div>

            <div className='signup-total-container subtotal-container'>
                <h4>Total</h4>
                <little>${(currentPlan.price * multiplier) + tax}</little>
            </div>
            </div>
            </div>


            <div className='signup-org-pagetwo-submit-btn'>
                <button type='submit' className=''>Create Account</button>
            </div>
        </form>
        <div className='org-left-button-container'>
        {orgLeftButton()}
        </div>
        </section>


    )
}