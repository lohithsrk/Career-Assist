import React from "react";
import { facebookProvider } from "../config/authMethods";
import { googleProvider } from "../config/authMethods";
import socialMediaAuth from "../service/auth";

function RegisterSocialComponent() {

    const handleOnClick = async(provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    }


  return (
    <div>
      <h1>RegisterSocialComponent</h1>
      <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
    </div>
  );
}

export default RegisterSocialComponent;
