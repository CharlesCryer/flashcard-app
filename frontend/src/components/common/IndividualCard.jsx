import React from "react";
import IndividualCardStyles from "../../modules/common/IndividualCard.module.css";
const IndividualCard = ({ front, back }) => {
  return (
    <>
      <div className={IndividualCardStyles.card_container}>
        <div className={IndividualCardStyles.card}>
          <input
            type="text"
            defaultValue={front}
            placeholder="Front of card"
            name="front"
            required
          />
          <input
            type="text"
            defaultValue={back}
            placeholder="Back of card"
            name="back"
            required
          />
        </div>
      </div>
    </>
  );
};

export default IndividualCard;
