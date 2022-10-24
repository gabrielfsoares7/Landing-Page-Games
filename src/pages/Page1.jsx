import { useEffect, useState } from 'react';
import { AiTwotoneCalendar, AiOutlineFileText } from 'react-icons/Ai';
import Navbar from '../components/Navbar';
import './pages1.css';

import gamesJSON from '../json/games.json';
import { useParams } from 'react-router-dom';

function Page1() {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});

  function loadGames() {
    setGames(gamesJSON);
  }
  function handleSelectGame() {
    const gameToSelect = games.find((game) => game.id === parseInt(id));
    setSelectedGame(gameToSelect);
  }

  useEffect(() => {
    loadGames();
  }, []);

  useEffect(() => {
    if (games.length !== 0) return handleSelectGame();
  }, [games]);

  return (
    <div>
      <Navbar />

      <div className="info">
        <div>
          <img className="imagem" src={`/img/${selectedGame?.cover}`} alt="" />
          {/* <p className="tagline">{selectedGame?.title}</p> */}
        </div>
        <div>
          <h3>
            <AiTwotoneCalendar />
            Data Lançamento:
          </h3>
          <p>{selectedGame?.date}</p>
          <h3>
            <AiOutlineFileText />
            Descrição:
          </h3>
          <p className="game-description">{selectedGame?.description}</p>
          <h3 className="trailer">Trailer</h3>
        </div>
      </div>
      <div className="trailer-video">
        <iframe width="700" height="380" src={selectedGame?.video}></iframe>
      </div>
    </div>
  );
}

export default Page1;
