import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Set from "../components/Set";
import Button from "../components/Button";
import "../modules/ViewPage.css";
import { useParams } from "react-router-dom";
const ViewPage = () => {
  const { cardKey } = useParams();
  return (
    <>
      <Nav />
      <Title title="Example title" />
      <Set setId={cardKey} />
      <div className="button-container">
        <Button text={"Flashcards"} />
      </div>
    </>
  );
};

export default ViewPage;
