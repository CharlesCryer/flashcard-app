import React from "react";
import "../modules/Card.css";
import trashIcon from "../assets/icons8-delete.svg";
import { Link } from "react-router-dom";
const Card = ({ id, title = "title", handleDelete, cardLink }) => {
  return (
    <>
      <Link to={cardLink} state={{ idOfSet: id }}>
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
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
