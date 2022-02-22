import React from "react";

function RegisterPhoneComponent() {

    const handleSubmit = (e) => {}


  return (
    <div>
      <h1>Register Phone</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone">Enter your mobile number</label>
          <input type="text" name="phone" placeholder="Phone" />
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="otp">Enter your OTP</label>
          <input type="text" name="otp" placeholder="otp" />
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPhoneComponent;
