import React from "react";
import "../modules/CreateCard.css";
const CreateCard = () => {
  return (
    <>
      <div className="container">
        <div className="create-card-container">
          <input
            className="front-input"
            type="text"
            placeholder="Front of card"
          />
          <input
            className="back-input"
            type="text"
            placeholder="Back of card"
          />
        </div>
      </div>
    </>
  );
};

export default CreateCard;
