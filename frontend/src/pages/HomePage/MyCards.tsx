import { useEffect, useState, useCallback, FC } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "./styles/MyCards.css";
import { deleteCards, getCardSets } from "../../utils/FetchFunctions";
import { cards } from "../../utils/types";

const MyCards: FC = () => {
  const [cards, setCards] = useState<cards[]>([]);
  const fetchCards = useCallback(
    () =>
      getCardSets()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log(err);
        }),
    []
  );

  const deleteCard = (id: string) => {
    deleteCards(id)
      .then(() => {
        console.log("Set deleted");
        fetchCards();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <div className={"my_cards_container"}>
        <section className={"cards"}>
          {cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.name}
              handleDelete={() => deleteCard(card._id)}
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
