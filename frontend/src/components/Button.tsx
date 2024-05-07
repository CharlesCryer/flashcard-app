import { FC } from "react";
import "../modules/Button.css";
interface propTypes {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  handleClick?: () => unknown;
}
const Button: FC<propTypes> = ({
  text,
  type = "button",
  handleClick = () => {},
}) => {
  return (
    <button type={type} onClick={handleClick} className={"reusable_button"}>
      {text}
    </button>
  );
};

export default Button;
