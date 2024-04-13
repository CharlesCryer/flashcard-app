import React from "react";
import CreateCardStyles from "../modules/CreateCard.module.css";
const CreateCard = ({ id }) => {
  return (
    <>
      <div className={CreateCardStyles.container}>
        <div className={CreateCardStyles.create_card_container}>
          <input
            className={CreateCardStyles.front_input}
            name="front"
            type="text"
            placeholder="Front of card"
            key={"front-" + id}
          />
          <input
            className={CreateCardStyles.back_input}
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
