import { useEffect, useState, useCallback } from "react";
import Card from "./common/Card";
import Button from "./common/Button";
import MyCardStyles from "../modules/MyCards.module.css";
const MyCards = () => {
  const [cards, setCards] = useState([]);
  const fetchCards = useCallback(async () => {
    const response = await fetch("http://localhost:5000/flashcards");
    const data = await response.json();
    setCards(data);
  });
  useEffect(() => {
    fetchCards();
  }, []);
  const deleteCard = (cardKey) => {
    fetch(`http://localhost:5000/flashcards/${cardKey}`, { method: "DELETE" })
      .then(() => {
        console.log(`${cardKey} deleted`);
        fetchCards();
      })
      .catch((err) => console.log("error deleting card: ", err));
  };
  return (
    <>
      <div className={MyCardStyles.my_cards_container}>
        <section className={MyCardStyles.cards}>
          {cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.name}
              handleDelete={deleteCard}
              cardLink={`/view/${card._id}`}
            />
          ))}
        </section>
        <a href="/create">
          <Button text={"Add a flashcard set"} />
        </a>
      </div>
    </>
  );
};

export default MyCards;
