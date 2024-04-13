import React from "react";
import LoginStyles from "../modules/Login.module.css";

const Login = () => {
  return (
    <div className={LoginStyles.Login_container}>
      <form className={LoginStyles.signup_form}>
        <div className={LoginStyles.username}>
          <input
            id={LoginStyles[username]}
            type="text"
            placeholder="Username"
            required
          ></input>
        </div>
        <div className={LoginStyles.password}>
          <input
            id={LoginStyles[password]}
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <button id={LoginStyles.signup}>Log in</button>
        <a href="/signup">Dont have an account?</a>
      </form>
    </div>
  );
};

export default Login;
