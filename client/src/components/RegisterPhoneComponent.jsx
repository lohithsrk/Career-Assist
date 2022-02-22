import React, { useState } from "react";
import { authentication } from "../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function RegisterPhoneComponent() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [OTP, setOTP] = useState();
  const [form, setForm] = useState(false);

  const generateRecaptchaVerifier = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    // if (phoneNumber.length >= 12) {
    setForm(true);
    generateRecaptchaVerifier();
    const phone = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("SMS sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...x
        console.log(error, "error");
      });
    // }
    console.log(phoneNumber);
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      console.log(otp);

      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user, "success");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error, "error");
          // ...
        });
    }
  };

  return (
    <div>
      <h1>Register Phone</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="phone">Enter your mobile number</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {form === true ? (
          <>
            <div>
              <label htmlFor="otp">Enter your OTP</label>
              <input
                type="text"
                name="otp"
                value={OTP}
                placeholder="otp"
                value={OTP}
                onChange={verifyOTP}
              />
            </div>
          </>
        ) : null}
        {form === false ? (
          <div>
            <button type="submit">Submit</button>
          </div>
        ) : null}
      </form>

      {/* <form>
        <div>
          <label htmlFor="otp">Enter your OTP</label>
          <input type="text" name="otp" value={OTP} placeholder="otp" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div className="recaptcha-container"></div>
      </form> */}
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default RegisterPhoneComponent;
