import React from "react";
import SignupStyles from "../modules/Signup.module.css";

const Signup = () => {
  return (
    <div className={SignupStyles.Login_container}>
      <form className={SignupStyles.signup_form}>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <input type="password" placeholder="Confirm password" required />
        </div>
        <button id={SignupStyles.signup}>Sign up</button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
