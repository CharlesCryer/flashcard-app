import { FC } from "react";
import "./styles/TestCard.css";

interface propTypes {
  display: string;
  handleClick: () => void;
}
const TestCard: FC<propTypes> = ({ display, handleClick }) => {
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

export default TestCard;
