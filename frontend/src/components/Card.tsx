import { FC, useState } from "react";
import "../modules/Card.css";
import trashIcon from "../assets/icons8-delete.svg";
import { useNavigate } from "react-router-dom";

interface propTypes {
  id: string;
  title: string;
  handleDelete: () => void;
}
const Card: FC<propTypes> = ({ id, title = "title", handleDelete }) => {
  // Card only works as a link if navigatesToSetState is true and
  // is set to false when the cursor is over the delete button
  const [navigatesToSetState, setNavigatesToSetState] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (navigatesToSetState == true) navigate(`/run/${id}`);
  };
  return (
    <>
      <div className={"card_container"}>
        <div className={"card"} onClick={handleNavigate}>
          <span>
            <img
              className={"trash_icon"}
              src={trashIcon}
              onClick={handleDelete}
              onMouseOver={() => {
                setNavigatesToSetState(false);
              }}
              onMouseOut={() => {
                setNavigatesToSetState(true);
              }}
            ></img>
          </span>
          <div className={"title"}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
