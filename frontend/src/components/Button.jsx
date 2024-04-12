import React from "react";
import "../modules/Button.css";

const Button = ({ text, type = "text", handleClick }) => {
  return (
    <button type={type} onClick={handleClick} className="reusable-button">
      {text}
    </button>
  );
};

export default Button;
