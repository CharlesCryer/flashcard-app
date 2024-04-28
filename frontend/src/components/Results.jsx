import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResultsStyles from "../modules/Results.module.css";
const Results = ({ score, total }) => {
  const { cardKey } = useParams();
  const navigate = useNavigate();
  const result = Math.round((score / total) * 100).toString() + "%";
  const color = `hsl(${(score / total) * 106}, 100%, 50%)`;
  const reload = () => {
    location.reload();
  };
  return (
    <div className={ResultsStyles.results_container}>
      <div className={ResultsStyles.results_card}>
        <h1 style={{ color: color }}>{result}</h1>
        <button onClick={reload}>Try again</button>
        <button
          onClick={() => {
            navigate(`/edit/${cardKey}`);
          }}
        >
          Edit set
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home page
        </button>
      </div>
    </div>
  );
};

export default Results;
