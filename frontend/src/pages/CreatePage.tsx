import Nav from "../components/common/Nav";
import IndividualCard from "../components/common/IndividualCard";
import Button from "../components/common/Button";
import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { patchCard, postCard, getCardSet } from "../utils/FetchFunctions";
import { cards } from "../utils/types";
import "../modules/pages/CreatePage.css";
const EditPage: FC = () => {
  const navigate = useNavigate();
  const { cardKey } = useParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!cardKey) {
      postCard(formData)
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    } else {
      patchCard(formData, cardKey)
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  const [cards, setCards] = useState<cards["flashcards"]>([]);
  const [name, setName] = useState("");

  const fetchCards = useCallback(() => {
    if (!cardKey) return;
    getCardSet(cardKey).then(({ name, flashcards }) => {
      setCards(flashcards);
      setName(name);
    });
  }, [cardKey]);

  useEffect(() => {
    fetchCards();
  }, []);
  const addCard = () => {
    setCards([...cards, { front: "", back: "" }]);
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="title_flex_container">
          <div className="title_container">
            <input
              type="text"
              placeholder="Title of set"
              defaultValue={name}
              name="name"
              required
            />
          </div>
        </div>
        <div className={"set_container"}>
          {cards.map((card) => (
            <IndividualCard
              front={card.front}
              back={card.back}
              key={cards.indexOf(card)}
            />
          ))}
        </div>
        <div className={"buttons_container"}>
          <Button text={"Save set"} type="submit" />
          <Button text={"Add flashcard"} type="button" handleClick={addCard} />
        </div>
      </form>
    </>
  );
};

export default EditPage;
