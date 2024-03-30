import React from "react";
import "../modules/Signup.css";

const Signup = () => {
  return (
    <div className="Login-container">
      <form className="signup-form">
        <div className="username">
          <input
            id="username"
            type="text"
            placeholder="Username"
            required
          ></input>
        </div>
        <div className="password">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="confirm-password">
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm password"
            required
          ></input>
        </div>
        <button id="signup">Sign up</button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
