import React from "react";
import CreateCardNameStyles from "../modules/CreateCardName.module.css";
const CreateCardName = () => {
  return (
    <>
      <div className={CreateCardNameStyles.container}>
        <div className={CreateCardNameStyles.create_name_container}>
          <input
            className={CreateCardNameStyles.title_input}
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
