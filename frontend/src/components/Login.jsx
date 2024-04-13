import React from "react";
import LoginStyles from "../modules/Login.module.css";

const Login = () => {
  return (
    <div className={LoginStyles.Login_container}>
      <form className={LoginStyles.Login_form}>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <button id={LoginStyles.Login}>Log in</button>
        <a href="/signup">Dont have an account?</a>
      </form>
    </div>
  );
};

export default Login;
