import React from "react"
import './SignUpEmployee.css'
export default function SignUpEmployee({formBehaviour}){
    return(
    <section className='signup-employee-section'>
        <form action="/" className="signup-employee-form" method='POST' onSumbit={formBehaviour}> 

        <div className="employee-signup-container signup-companyid-container">
                <label for="companyIdSignup">Company ID</label>
                <input type='text' name='companyId' placeholder='Company ID' maxLength={5} required={true}></input>
        </div>
            <div className='employee-signup-container signup-fname-container'>
                <label for='fNameSignup'>First Name</label>
                <input type="text" name='fnameSignup' placeholder='First Name' required={true}></input>
                </div>
                <div className='employee-signup-container signup-lname-container'>
                <label for="lNameSignup">Last Name</label>
                <input type="text" name='lnameSignup' placeholder='Last Name' required={true}></input>
                </div>
                <div className='employee-signup-container signup-email-container'>
                <label for="emailSignup">Email</label>
                <input type="email" name='emailSignup' placeholder='Email' required={true}></input>
                </div>
                <div className='employee-signup-container signup-phone-container'>
                <label for="emailSignup">Phone</label>
                <input type="tel" name='phoneSignup' placeholder='Phone' required={true}></input>
                </div>

                <div className='employee-signup-container signup-password-container'>
                <label for='passwordSignup'>Password</label>
                <input type="password" name='passwordSignup' placeholder='Password'  required={true}></input>
                </div>

                <div className='create-an-account-button-container employee-create-an-account-button-container'>
                <button type='submit'>Create Account</button>
                </div>
        </form>
    </section>
    )
}