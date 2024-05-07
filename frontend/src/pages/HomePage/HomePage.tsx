import { FC } from "react";
import Nav from "../../components/Nav";
import MyCards from "./MyCards";

const HomePage: FC = () => {
  return (
    <>
      <Nav />
      <MyCards />
    </>
  );
};

export default HomePage;
