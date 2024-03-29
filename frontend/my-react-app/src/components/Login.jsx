import React from "react";
import "../modules/Login.css";

const Login = () => {
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
        <button id="signup">Log in</button>
        <a href="#">Dont have an account?</a>
      </form>
    </div>
  );
};

export default Login;
