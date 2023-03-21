import React from "react";

function SignupForm() {
  return (
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="submit" value={"Claim your free trial"} />

      <p>By clicking the button, you are agreeing to our Terms and Services</p>
    </form>
  );
}

export default SignupForm;
