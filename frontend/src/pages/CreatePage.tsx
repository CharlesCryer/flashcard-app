import { useState, useMemo, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import CreateCard from "../components/CreateCard";
import CreateCardName from "../components/CreateCardName";
import "../modules/pages/CreatePage.css";
import Button from "../components/common/Button";
import { postCard } from "../utils/FetchFunctions";

const CreatePage = () => {
  const navigate = useNavigate();

  // Creates an array of length equal to the numberOfComponents state
  const [numberOfComponents, setNumberOfComponents] = useState(1);
  const componentsArray = useMemo(
    () => Array.from({ length: numberOfComponents }, (_i, index) => index),
    [numberOfComponents]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    postCard(formData)
      .then(() => navigate("/"))
      .catch((err: unknown) => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className={"create_container"}>
        <form className={"create_set_form"} onSubmit={handleSubmit}>
          <CreateCardName />
          {componentsArray.map((index) => (
            <CreateCard key={index} id={index} />
          ))}
          <Button
            text="Add a flashcard"
            type="button"
            handleClick={() => setNumberOfComponents(numberOfComponents + 1)}
          />
          <Button text="Add set" type="submit" />
        </form>
      </div>
    </>
  );
};
export default CreatePage;
