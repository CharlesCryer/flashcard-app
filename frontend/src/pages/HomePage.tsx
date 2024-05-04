import { FC } from "react";
import Nav from "../components/common/Nav";
import MyCards from "../components/MyCards";

const HomePage: FC = () => {
  return (
    <>
      <Nav />
      <MyCards />
    </>
  );
};

export default HomePage;
