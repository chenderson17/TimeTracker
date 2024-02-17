import React from "react"; 
export default function SignUpButtonClass(planName, planDescription, classes){
    function generateDescriptionList(){
        return(
            <ul>
            {planDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
    }
    return(
        <div className={classes}>
        <button className='signup-free-btn plan-btn'>
        {planName}
        </button>
        <details>
            <summary>More Info</summary>
            {generateDescriptionList}
        </details>
        </div>
    )
}