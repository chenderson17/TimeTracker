import React from "react"; 
export default function SignUpButtonClass({planName, planDescription, onClickMethod, val, classes}){
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
        <div>
        <button type="button" className={classes} value={val} onClick={onClickMethod}>
        {planName}
        </button>
        <details>
            <summary>More Info</summary>
            {generateDescriptionList()}
        </details>
        </div>
    )
}