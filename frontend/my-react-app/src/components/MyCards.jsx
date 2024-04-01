import React, { useEffect } from "react";
import Card from "../components/Card";
import "../modules/MyCards.css";
const MyCards = () => {
  const cards = [
    { title: "card1", description: "description" },
    { title: "card2", description: "description" },
    { title: "card3", description: "description" },
    { title: "card4", description: "description" },
    { title: "card5", description: "description" },
    { title: "card6", description: "description" },
    { title: "card7", description: "description" },
    { title: "card8", description: "description" },
    { title: "card9", description: "description" },
    { title: "card10", description: "description" },
    { title: "card11", description: "description" },
    { title: "card12", description: "description" },
    { title: "card13", description: "description" },
  ];
  return (
    <>
      <section>
        {cards.map((card) => (
          <Card title={card.title} description={card.description} />
        ))}
      </section>
    </>
  );
};

export default MyCards;
