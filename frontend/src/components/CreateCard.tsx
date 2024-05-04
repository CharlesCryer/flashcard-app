import { FC } from "react";
import "../modules/CreateCard.css";

const CreateCard: FC<{ id: number }> = ({ id }) => {
  return (
    <>
      <div className={"container"}>
        <div className={"create_card_container"}>
          <input
            className={"front_input"}
            name="front"
            type="text"
            placeholder="Front of card"
            key={"front-" + id.toString()}
            required
          />
          <input
            className={"back_input"}
            name="back"
            type="text"
            placeholder="Back of card"
            key={"back-" + id.toString()}
            required
          />
        </div>
      </div>
    </>
  );
};

export default CreateCard;
