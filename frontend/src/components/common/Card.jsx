import React, { useState } from "react";
import CardStyles from "../../modules/common/Card.module.css";
import trashIcon from "../../assets/icons8-delete.svg";
import { useNavigate } from "react-router-dom";
const Card = ({ id, title = "title", handleDelete }) => {
  const [navigatesToSetState, setNavigatesToSetState] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (navigatesToSetState == true) navigate(`/run/${id}`);
  };
  return (
    <>
      <div className={CardStyles.card_container}>
        <div className={CardStyles.card} onClick={() => handleNavigate()}>
          <span>
            <img
              className={CardStyles.trash_icon}
              src={trashIcon}
              onClick={() => handleDelete(id)}
              onMouseOver={() => {
                setNavigatesToSetState(false);
              }}
              onMouseOut={() => {
                setNavigatesToSetState(true);
              }}
            ></img>
          </span>
          <div className={CardStyles.title}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
