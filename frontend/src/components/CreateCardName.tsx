import { FC } from "react";
import "../modules/CreateCardName.css";
const CreateCardName: FC = () => {
  return (
    <>
      <div className={"container"}>
        <div className={"create_name_container"}>
          <input
            className={"title_input"}
            type="text"
            placeholder="Title"
            name="name"
            required
          />
        </div>
      </div>
    </>
  );
};

export default CreateCardName;
