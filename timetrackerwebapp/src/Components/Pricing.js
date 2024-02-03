import React from "react"
import Header from './Header.js';
import './Pricing.css'
import Footer from './Footer.js';
export default function Pricing(){
 return(
  <>
   <Header signUpBtnDisplay={true} signInBtnDisplay={true} />
   <div className='price-top'>
    <h2 className='pricing-header'> <span className='price-header-span'>Flexible Pricing </span> to Fit Your Business Needs</h2>
    <form>
    <fieldset className='pricing-radio'>
        <div className='pricing-radio-monthly-container price-radio-container'>
            <input type='radio' name='price-radio' value='monthly-pricing' checked />
            <label for='monthly'>Monthly</label>
           
        </div>

        <div className='pricing-radio-yearly-container price-radio-container'>
            <input type='radio' name='price-radio' value='yearly-pricing' />
            <label for='yearly'>Yearly</label>
            
        </div>
    </fieldset>
    </form>
    </div>
    <div className='pricing-cards'>
        <div className='free-plan-card price-card'>
           
            <h3>Free</h3>
          
          
            <h4 className='price price-free'>$0.00/month</h4>
           
          
            <ul className="price-plan price-list-free">
                <li>Basic Time Tracking</li>
                <li>Single User Access</li>
                <li>Basic Reporting</li>
            </ul>
            
          
            <button className='price-get-started-btn free-plan-btn'>Get Started</button>
        </div>

        <div className='basic-plan-card price-card'>
            <h3>Basic</h3>
            <h4 className='price price-basic'>$10.00/month</h4>
            <ul className="price-plan price-list-basic">
                <li>Enhanced Time Tracking</li>
                <li>Multi-User Access</li>
                <li>Export Data</li>
                <li>Basic Analytics Dashboard</li>
            </ul>
            <button className='price-get-started-btn basic-plan-btn'>Get Started</button>
        </div>



        <div className='extra-plan-card price-card'>
         
            <h3>Extra</h3>
       
            
            <h4 className='price price-extra'>$25.00/month</h4>
          
           
            <ul className="price-plan price-list-extra">
                <li>Advanced Time Tracking</li>
                <li>Project Budgeting</li>
                <li>Customizable Reports</li>
                <li>Priority Customer Support</li>
            </ul>
            <button className='price-get-started-btn extra-plan-btn'>Get Started</button>
        
        </div>



        <div className='premium-plan-card price-card'>
            <h3>Premium</h3>
            <h4 className='price price-premium'>$50.00/month</h4>
            <ul className="price-plan price-list-premium">
                <li>Unlimited Users</li>
                <li>Advanced Analytics Dashboard</li>
                <li>Resource Planning</li>
                <li>Priority Customer Support</li>
            </ul>
            <button className='price-get-started-btn premium-plan-btn'>Get Started</button>
        </div>
    </div>
    <Footer />
  </>
 )
}