import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../modules/MyCards.css";
const MyCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("http://localhost:5000/flashcards");
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <>
      <div className="my-cards-container">
        <section>
          {cards.map((card) => (
            <Card key={card._id} title={card.front} description={card.back} />
          ))}
        </section>
        <button className="add-card-button">Add new flashcard</button>
      </div>
    </>
  );
};

export default MyCards;
