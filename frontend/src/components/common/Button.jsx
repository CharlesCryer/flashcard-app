import React from "react";
import ButtonStyles from "../../modules/common/Button.module.css";

const Button = ({ text, type = "text", handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={ButtonStyles.reusable_button}
    >
      {text}
    </button>
  );
};

export default Button;
