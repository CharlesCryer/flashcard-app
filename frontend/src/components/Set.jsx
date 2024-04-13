import React, { useEffect, useCallback, useState } from "react";
import Card from "./common/Card";
import SetStyles from "../modules/Set.module.css";
const Set = ({ setId }) => {
  const [cards, setCards] = useState([]);
  const fetchCards = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/flashcards/${setId}`);
    const data = Object.values(await response.json());
    setCards(data[2]);
  }, []);
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <>
      <div className={SetStyles.set_container}>
        {cards.map((card) => (
          <Card title={card.front} key={card._id} />
        ))}
      </div>
    </>
  );
};

export default Set;
