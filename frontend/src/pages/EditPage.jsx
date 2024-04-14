import React from "react";
import Nav from "../components/common/Nav";
import Set from "../components/Set";
import { useParams, useNavigate } from "react-router-dom";
import { patchCard } from "../utils/FetchFunctions";
const EditPage = () => {
  const navigate = useNavigate();
  const { cardKey } = useParams();
  const handleSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    patchCard(formData, cardKey)
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <Set setId={cardKey} />
      </form>
    </>
  );
};

export default EditPage;
