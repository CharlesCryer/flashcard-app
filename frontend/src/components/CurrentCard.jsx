import React from "react";
import CurrentCardStyles from "../modules/CurrentCard.module.css";
const CurrentCard = ({ display, handleClick }) => {
  return (
    <>
      <div
        className={CurrentCardStyles.current_card_container}
        onClick={handleClick}
      >
        <div className={CurrentCardStyles.current_card}>
          <div className={CurrentCardStyles.card_container}>
            <h2>{display}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentCard;
