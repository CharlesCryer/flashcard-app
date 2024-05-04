import { FC } from "react";
import "../../modules/common/Title.css";
const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={"title_container"}>
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
