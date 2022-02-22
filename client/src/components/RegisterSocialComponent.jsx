import React from "react";
import { authentication } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function RegisterSocialComponent() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>RegisterSocialComponent</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default RegisterSocialComponent;
