import React from "react"
import Header from './Header.js';
export default function Pricing(){
 return(
  <>
   <Header signUpBtnDisplay={true} signInBtnDisplay={true} />
    <h2> <span className='orange'>Flexible</span> Pricing to Fit Your Business Needs</h2>
    <form>
    <fieldset className='pricing-radio'>
        <div className='pricing-radio-monthly-container'>
            <input type='radio' name='price-radio' value='monthly-pricing' />
            <label for='monthly'>Monthly</label>
        </div>

        <div className='pricing-radio-yearly-container'>
            <input type='radio' name='price-radio' value='yearly-pricing' />
            <label for='yearly'>Yearly</label>
        </div>
    </fieldset>
    </form>
  </>
 )
}