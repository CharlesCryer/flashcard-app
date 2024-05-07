import { FC } from "react";
import "./styles/InputCard.css";

interface propTypes {
  front: string;
  back: string;
}
const InputCard: FC<propTypes> = ({ front, back }) => {
  return (
    <>
      <div className={"card_container"}>
        <div className={"card"}>
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

export default InputCard;
