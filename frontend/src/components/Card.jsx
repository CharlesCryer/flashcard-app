import React from "react";
import "../modules/Card.css";

const Card = ({ title = "title", description = "description" }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
