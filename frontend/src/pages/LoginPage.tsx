import { FC } from "react";
import Login from "../components/Login";
import Nav from "../components/common/Nav";
const loginPage: FC = () => {
  return (
    <>
      <Nav />
      <Login />
    </>
  );
};

export default loginPage;
