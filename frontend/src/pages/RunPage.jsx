import React, { useEffect, useState } from "react";
import Nav from "../components/common/Nav";
import CurrentCard from "../components/CurrentCard";
import { useParams, useNavigate } from "react-router-dom";
import { getCardSet } from "../utils/FetchFunctions";
import RunPageStyles from "../modules/pages/RunPage.module.css";
import Results from "../components/Results";
const RunPage = () => {
  const { cardKey } = useParams();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({ front: null, back: null });
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [isFront, setIsFront] = useState(true);
  const [correctCards, setCorrectCards] = useState(0);
  const [finished, setFinished] = useState(false);
  const fetchCards = () => {
    getCardSet(cardKey)
      .then(({ flashcards }) => {
        setCards(flashcards);
      })
      .catch((err) => console.log(err));
  };
  // Running fetch cards on mount
  useEffect(fetchCards, []);

  // updating states once cards are fetched
  useEffect(() => {
    if (cards.length != 0) setCurrentCard(cards[currentIndex]);
  }, [cards, currentIndex]);

  // Updating the part of the card to be displayed as the front
  useEffect(() => {
    setCurrentDisplay(currentCard.front);
  }, [currentCard]);

  // handle/onClick functions
  const nextCard = (isCorrect) => {
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
    if (!isFront) {
      setCurrentDisplay(currentCard.front);
      setIsFront(true);
    } else {
      setCurrentDisplay(currentCard.back);
      setIsFront(false);
    }
  };
  if (!finished)
    return (
      <>
        <Nav />
        <CurrentCard display={currentDisplay} handleClick={showOtherSide} />
        <div className={RunPageStyles.button_container}>
          <button
            type="text"
            onClick={() => nextCard(false)}
            className={RunPageStyles.incorrect}
          >
            Incorrect
          </button>
          <button
            type="text"
            onClick={() => nextCard(true)}
            className={RunPageStyles.correct}
          >
            Correct
          </button>
        </div>
        <div className={RunPageStyles.previous_button}>
          <button
            type="text"
            className={RunPageStyles.previous}
            onClick={previousCard}
          >
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
