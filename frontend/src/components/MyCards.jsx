import { useEffect, useState, useCallback } from "react";
import Card from "./common/Card";
import Button from "./common/Button";
import MyCardStyles from "../modules/MyCards.module.css";
import { getCardSets, deleteCards } from "../utils/FetchFunctions";
const MyCards = () => {
  const [cards, setCards] = useState([]);
  const fetchCards = useCallback(() =>
    getCardSets()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  );

  useEffect(() => {
    fetchCards();
  }, []);
  const deleteCard = (cardKey) => {
    deleteCards(cardKey)
      .then(() => {
        console.log("Set deleted");
        fetchCards();
      })
      .catch((err) => console.log(err));
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
