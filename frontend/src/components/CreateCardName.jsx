import React from "react";
import "../modules/CreateCardName.css";
const CreateCardName = () => {
  return (
    <>
      <div className="container">
        <div className="create-name-container">
          <input className="title-input" type="text" placeholder="Title" />
          <input
            className="description-input"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
    </>
  );
};

export default CreateCardName;
