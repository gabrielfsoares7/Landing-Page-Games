import { Link } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({ id, name, cover }) => {
  return (

    <div className="games-container" key={id}>
      <Link to={`/game/${id}`}>
        <img src={`/img/${cover}`} alt="" />
        <div className="Card">
          <strong >
            <h2>{name}</h2>
          </strong>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;