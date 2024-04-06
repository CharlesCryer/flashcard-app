import React from "react";
import "../modules/Card.css";
import trashIcon from "../assets/icons8-delete.svg";
const Card = ({
  id,
  title = "title",
  description = "description",
  handleDelete,
}) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <span>
            <img
              className="trash-icon"
              src={trashIcon}
              onClick={() => handleDelete(id)}
            ></img>
          </span>
          <div className="title-description">
            <h1>{title}</h1>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
