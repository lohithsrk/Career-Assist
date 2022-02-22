import React from "react";
import { authentication } from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

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

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
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
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

export default RegisterSocialComponent;
