import React from "react";
import { authentication } from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  // reauthenticateWithPopup,
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

  // const signInWithApple = () => {
  //   const provider = new OAuthProvider("apple.com");
  //   signInWithPopup(authentication, provider)
  //     .then((result) => {
  //       // The signed-in user info.
  //       const user = result.user;

  //       // Apple credential
  //       const credential = OAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;
  //       const idToken = credential.idToken;

  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The credential that was used.
  //       const credential = OAuthProvider.credentialFromError(error);

  //       // ...
  //     });
  // };

  return (
    <div>
      <h1>RegisterSocialComponent</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
      {/* <button onClick={signInWithApple}>Sign in with Apple</button> */}
    </div>
  );
}

export default RegisterSocialComponent;
