import React, { useEffect, useCallback, useState } from "react";
import IndividualCard from "./common/IndividualCard";
import SetStyles from "../modules/Set.module.css";
import Title from "./common/Title";
import Button from "./common/Button";
const Set = ({ setId }) => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const fetchCards = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/flashcards/${setId}`);
    const data = Object.values(await response.json());
    setName(data[1]);
    setCards(data[2]);
  }, []);
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
        <Button
          text={"Add flashcard"}
          type="button"
          handleClick={() => addCard()}
        />
      </div>
    </>
  );
};

export default Set;
