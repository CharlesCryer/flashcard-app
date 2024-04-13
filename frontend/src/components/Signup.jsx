import React from "react";
import SignupStyles from "../modules/Signup.module.css";

const Signup = () => {
  return (
    <div className={SignupStyles.login_container}>
      <form className={SignupStyles.signup - form}>
        <div className={SignupStyles.username}>
          <input
            id={SignupStyles[username]}
            type="text"
            placeholder="Username"
            required
          ></input>
        </div>
        <div className={SignupStyles.password}>
          <input
            id={SignupStyles[password]}
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className={SignupStyles.confirm_password}>
          <input
            id={SignupStyles[confirm_password]}
            type="password"
            placeholder="Confirm password"
            required
          ></input>
        </div>
        <button id={SignupStyles.signup}>Sign up</button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
