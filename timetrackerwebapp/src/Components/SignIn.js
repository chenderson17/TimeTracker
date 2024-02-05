import React from "react";
import Header from "./Header.js";
export default function SignIn(){
    return(
        <>
        <Header signUpBtnDisplay={true} signInBtnDisplay={false} isHome={false} isPrice={false} />
         <h2>Sign In</h2>
        </>
    )
}