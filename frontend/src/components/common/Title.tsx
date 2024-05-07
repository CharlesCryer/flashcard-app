import { FC } from "react";
import "../../modules/common/Title.css";
const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="title_flex_container">
      <div className="title_container">
        <input
          type="text"
          placeholder="Title of set"
          defaultValue={title}
          name="name"
          required
        />
      </div>
    </div>
  );
};

export default Title;
export const CreateCardName: FC = () => {
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
