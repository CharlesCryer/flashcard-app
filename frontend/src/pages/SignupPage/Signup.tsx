import { FC } from "react";
import "./styles/Signup.css";

const Signup: FC = () => {
  return (
    <div className={"Login_container"}>
      <form className={"signup_form"}>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <input type="password" placeholder="Confirm password" required />
        </div>
        <button id={"signup"}>Sign up</button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
