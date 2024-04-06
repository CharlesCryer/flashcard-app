import React from "react";
import Nav from "../components/Nav";
import CreateCard from "../components/CreateCard";
import CreateCardName from "../components/CreateCardName";
const CreatePage = () => {
  return (
    <>
      <Nav />
      <CreateCardName />
      <CreateCard />
    </>
  );
};

export default CreatePage;
