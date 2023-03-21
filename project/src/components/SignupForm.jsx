import React from "react";
import "../styles/Signupform.module.css";

function SignupForm() {
  return (
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="submit" value={"Claim your free trial"} />

      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="">Terms and Services</a>
      </p>
    </form>
  );
}

export default SignupForm;
