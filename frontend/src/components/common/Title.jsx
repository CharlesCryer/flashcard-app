import React from "react";
import TitleStyles from "../../modules/common/Title.module.css";
const Title = ({ title }) => {
  return (
    <div className={TitleStyles.title_container}>
      <input
        type="text"
        placeholder="Title of set"
        defaultValue={title}
        name="name"
        required
      />
    </div>
  );
};

export default Title;
