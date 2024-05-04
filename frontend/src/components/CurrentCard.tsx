import { FC } from "react";
import "../modules/CurrentCard.css";

interface propTypes {
  display: string;
  handleClick: () => void;
}
const CurrentCard: FC<propTypes> = ({ display, handleClick }) => {
  return (
    <>
      <div className={"current_card_container"} onClick={handleClick}>
        <div className={"current_card"}>
          <div className={"card_container"}>
            <h2>{display}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentCard;
