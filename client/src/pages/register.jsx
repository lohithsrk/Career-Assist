import React from "react";
import firebase from "../config/firebase";
import RegisterEmailComponent from "../components/RegisterEmailComponent";
// import RegisterPhoneComponent from "../components/RegisterPhoneComponent";
import RegisterSocialComponent from "../components/RegisterSocialComponent";

function register() {
  return (
    // <RegisterPhoneComponent />
    // <RegisterEmailComponent />
    <RegisterSocialComponent />
  );
}

export default register;
