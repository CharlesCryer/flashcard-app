import React from "react";
import "../modules/CreateCardName.css";
const CreateCardName = () => {
  return (
    <>
      <div className="container">
        <div className="create-name-container">
          <input
            className="title-input"
            type="text"
            placeholder="Title"
            name="name"
          />
        </div>
      </div>
    </>
  );
};

export default CreateCardName;
