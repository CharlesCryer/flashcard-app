import { FC } from "react";
import "../modules/Login.css";

const Login: FC = () => {
  return (
    <div className={"Login_container"}>
      <form className={"Login_form"}>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <button id={"Login"}>Log in</button>
        <a href="/signup">Dont have an account?</a>
      </form>
    </div>
  );
};

export default Login;
