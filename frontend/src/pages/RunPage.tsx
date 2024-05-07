import { FC, useEffect, useState } from "react";
import Nav from "../components/common/Nav";
import CurrentCard from "../components/CurrentCard";
import { useParams } from "react-router-dom";
import { getCardSet } from "../utils/FetchFunctions";
import "../modules/pages/RunPage.css";
import Results from "../components/Results";
import { cards } from "../utils/types";

const RunPage: FC = () => {
  const { cardKey } = useParams();
  const [cards, setCards] = useState<cards["flashcards"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<{
    front: string | null;
    back: string | null;
  }>({ front: null, back: null });
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [isFront, setIsFront] = useState(true);
  const [correctCards, setCorrectCards] = useState(0);
  const [finished, setFinished] = useState(false);
  const fetchCards = () => {
    if (!cardKey) return;
    getCardSet(cardKey)
      .then(({ flashcards }) => {
        setCards(flashcards);
      })
      .catch((err) => console.log(err));
  };
  // Running fetch cards on mount
  useEffect(fetchCards);

  // updating states once cards are fetched
  useEffect(() => {
    if (cards.length != 0) setCurrentCard(cards[currentIndex]);
  }, [cards, currentIndex]);

  // Updating the part of the card to be displayed as the front
  useEffect(() => {
    if (currentCard.front) setCurrentDisplay(currentCard.front);
  }, [currentCard]);

  // handle/onClick functions
  const nextCard = (isCorrect: boolean) => {
    if (isCorrect) setCorrectCards(correctCards + 1);
    if (currentIndex + 1 != cards.length) setCurrentIndex(currentIndex + 1);
    else {
      setFinished(true);
    }
  };
  const previousCard = () => {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
      setCorrectCards(correctCards - 1);
    }
  };
  const showOtherSide = () => {
    if (!currentCard.front || !currentCard.back) return null;
    if (!isFront) {
      setCurrentDisplay(currentCard.front);
      setIsFront(true);
    } else {
      setCurrentDisplay(currentCard.back);
      setIsFront(false);
    }
  };
  if (!cardKey) {
    return <h1>404 Could not get set</h1>;
  }
  if (!finished)
    return (
      <>
        <Nav />
        <CurrentCard display={currentDisplay} handleClick={showOtherSide} />
        <div className={"button_container"}>
          <button
            type="button"
            onClick={() => nextCard(false)}
            className={"incorrect"}
          >
            Incorrect
          </button>
          <button
            type="button"
            onClick={() => nextCard(true)}
            className={"correct"}
          >
            Correct
          </button>
        </div>
        <div className={"previous_button"}>
          <button type="button" className={"previous"} onClick={previousCard}>
            Previous
          </button>
        </div>
      </>
    );
  else {
    return (
      <>
        <Nav />
        <Results score={correctCards} total={cards.length} />
      </>
    );
  }
};

export default RunPage;
