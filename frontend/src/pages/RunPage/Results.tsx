import { useNavigate, useParams } from "react-router-dom";
import "./styles/Results.css";
import { FC } from "react";

interface propTypes {
  score: number;
  total: number;
}
const Results: FC<propTypes> = ({ score, total }) => {
  const { cardKey } = useParams(); // Gets id from URL
  const navigate = useNavigate();

  const result = Math.round((score / total) * 100).toString() + "%";
  const color = `hsl(${(score / total) * 106}, 100%, 50%)`; // Calculates color of text to display result (Red for 0%, Green for 100%)

  const reload = () => {
    location.reload(); // Refreshes page
  };

  return (
    <div className={"results_container"}>
      <div className={"results_card"}>
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
