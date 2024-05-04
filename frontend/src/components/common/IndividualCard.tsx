import { FC } from "react";
import "../../modules/common/IndividualCard.css";

interface propTypes {
  front: string;
  back: string;
}
const IndividualCard: FC<propTypes> = ({ front, back }) => {
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

export default IndividualCard;
