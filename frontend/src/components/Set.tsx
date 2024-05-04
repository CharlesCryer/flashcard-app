import { useEffect, useCallback, useState, FC } from "react";
import IndividualCard from "./common/IndividualCard";
import "../modules/Set.css";
import Title from "./common/Title";
import Button from "./common/Button";
import { getCardSet } from "../utils/FetchFunctions";
import { cards } from "../utils/types";

const Set: FC<{ setId: string }> = ({ setId }) => {
  const [cards, setCards] = useState<cards["flashcards"]>([]);
  const [name, setName] = useState("");

  const fetchCards = useCallback(
    () =>
      getCardSet(setId).then(({ name, flashcards }) => {
        setCards(flashcards);
        setName(name);
      }),
    []
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
        <Button text={"Apply changes"} type="submit" />
        <Button text={"Add flashcard"} type="button" handleClick={addCard} />
      </div>
    </>
  );
};

export default Set;
