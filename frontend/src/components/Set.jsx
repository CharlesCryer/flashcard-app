import React, { useEffect, useCallback, useState } from "react";
import IndividualCard from "./common/IndividualCard";
import SetStyles from "../modules/Set.module.css";
import Title from "./common/Title";
import Button from "./common/Button";
import { getCardSet } from "../utils/FetchFunctions";
const Set = ({ setId }) => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");

  const fetchCards = useCallback(() =>
    getCardSet(setId).then(({ name, flashcards }) => {
      setCards(flashcards);
      setName(name);
    })
  );

  useEffect(() => {
    fetchCards();
  }, []);
  const addCard = () => {
    setCards([...cards, { front: "", back: "" }]);
    console.log(cards);
  };
  return (
    <>
      <Title title={name} />
      <div className={SetStyles.set_container}>
        {cards.map((card) => (
          <IndividualCard
            front={card.front}
            back={card.back}
            key={cards.indexOf(card)}
          />
        ))}
      </div>
      <div className={SetStyles.buttons_container}>
        <Button text={"Apply changes"} type="submit" />
        <Button text={"Add flashcard"} type="button" handleClick={addCard} />
      </div>
    </>
  );
};

export default Set;
