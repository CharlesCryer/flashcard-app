import { FC, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import TestCard from "./TestCard";
import { useParams } from "react-router-dom";
import { getCardSet } from "../../utils/FetchFunctions";
import "./styles/RunPage.css";
import Results from "./Results";
import { cards } from "../../utils/types";

const RunPage: FC = () => {
  const { cardKey } = useParams(); // Id from URL
  const [cards, setCards] = useState<cards["flashcards"]>([]); // Array of objects {"front", "back"}
  const [currentIndex, setCurrentIndex] = useState(0); // Index of cards array
  const [displayFront, setDisplayFront] = useState(true); // If the front of the card is currently being displayed then true
  const [correctCards, setCorrectCards] = useState(0); // Counter for correct answers
  const [finished, setFinished] = useState(false); // State for whether or not the set is finished
  const fetchCards = () => {
    if (!cardKey) return;
    getCardSet(cardKey)
      .then(({ flashcards }) => {
        setCards(flashcards);
      })
      .catch((err) => console.log(err));
  };
  // Running fetch cards on mount
  useEffect(() => fetchCards(), []);

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
    if (!displayFront) {
      setDisplayFront(true);
    } else {
      setDisplayFront(false);
    }
  };
  if (!cardKey) return <h1>404 Could not get set</h1>;
  if (cards.length == 0) return <h1>loading</h1>;
  if (!finished)
    return (
      <>
        <Nav />
        <TestCard
          display={
            displayFront ? cards[currentIndex].front : cards[currentIndex].back
          }
          handleClick={showOtherSide}
        />
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
