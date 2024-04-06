import { useEffect, useState, useCallback } from "react";
import Card from "../components/Card";
import "../modules/MyCards.css";
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
      <div className="my-cards-container">
        <section>
          {cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.front}
              description={card.back}
              handleDelete={deleteCard}
            />
          ))}
        </section>
        <a href="/create">
          <button className="add-card-button">Add new flashcard</button>
        </a>
      </div>
    </>
  );
};

export default MyCards;
