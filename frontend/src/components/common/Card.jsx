import React from "react";
import CardStyles from "../../modules/common/Card.module.css";
import trashIcon from "../../assets/icons8-delete.svg";
import { Link } from "react-router-dom";
const Card = ({ id, title = "title", handleDelete, cardLink }) => {
  return (
    <>
      <div className={CardStyles.card_container}>
        <Link to={cardLink} state={{ idOfSet: id }}>
          <div className={CardStyles.card}>
            <span>
              <img
                className={CardStyles.trash_icon}
                src={trashIcon}
                onClick={() => handleDelete(id)}
              ></img>
            </span>

            <div className={CardStyles.title}>
              <h1>{title}</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
