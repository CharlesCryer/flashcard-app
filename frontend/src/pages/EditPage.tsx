import Nav from "../components/common/Nav";
import Set from "../components/Set";
import { useParams, useNavigate } from "react-router-dom";
import { patchCard } from "../utils/FetchFunctions";
import { FC, FormEvent } from "react";
const EditPage: FC = () => {
  const navigate = useNavigate();
  const { cardKey } = useParams();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!cardKey) return;
    patchCard(formData, cardKey)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };
  if (!cardKey) {
    return <h1>404 Could not get set</h1>;
  } else {
    return (
      <>
        <Nav />
        <form onSubmit={handleSubmit}>
          <Set setId={cardKey} />
        </form>
      </>
    );
  }
};

export default EditPage;
