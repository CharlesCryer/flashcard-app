import React from "react";
import "../modules/CreateCard.css";
const CreateCard = ({ id }) => {
  return (
    <>
      <div className="container">
        <div className="create-card-container">
          <input
            className="front-input"
            name="front"
            type="text"
            placeholder="Front of card"
            key={"front-" + id}
          />
          <input
            className="back-input"
            name="back"
            type="text"
            placeholder="Back of card"
            key={"back-" + id}
          />
        </div>
      </div>
    </>
  );
};

export default CreateCard;
