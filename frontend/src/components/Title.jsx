import React from "react";
import TitleStyles from "../modules/Title.module.css";
const Title = ({ title }) => {
  return (
    <div className={TitleStyles.title_container}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
