import React from "react";
import Nav from "../components/common/Nav";
import Title from "../components/common/Title";
import Set from "../components/Set";
import Button from "../components/common/Button";
import ViewPageStyles from "../modules/pages/ViewPage.module.css";
import { useParams } from "react-router-dom";
const ViewPage = () => {
  const { cardKey } = useParams();
  return (
    <>
      <Nav />
      <Title title="Example title" />
      <Set setId={cardKey} />
      <div className={ViewPageStyles.button_container}>
        <Button text={"Flashcards"} />
      </div>
    </>
  );
};

export default ViewPage;
