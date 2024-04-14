import React from "react";
import Nav from "../components/common/Nav";
import Set from "../components/Set";
import { useParams, useNavigate } from "react-router-dom";
const EditPage = () => {
  const navigate = useNavigate();
  const { cardKey } = useParams();
  const handleSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const flashcards = [];
    const frontValues = formData.getAll("front");
    const backValues = formData.getAll("back");
    for (let i = 0; i < frontValues.length; i++) {
      flashcards.push({ front: frontValues[i], back: backValues[i] });
    }
    const dataToBeSent = { name: formData.get("name"), flashcards: flashcards };
    console.log(JSON.stringify(dataToBeSent));
    fetch(`http://localhost:5000/flashcards/${cardKey}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    }).then(() => {
      console.log(`${dataToBeSent.name}: ${cardKey} updated`);
      navigate("/");
    });
  };
  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <Set setId={cardKey} />
      </form>
    </>
  );
};

export default EditPage;
