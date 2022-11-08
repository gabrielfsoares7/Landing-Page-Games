import { useEffect, useState } from 'react';
import GamesCard from '../components/GamesCard';
import Navbar from '../components/Navbar';
import './Home.css';
import gamesJSON from '../json/games.json';

function App() {
  const [games, setGames] = useState([]);
  const [busca, setBusca] = useState('');

  function loadGames() {
    setGames(gamesJSON);
  }

  function searchGame() {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(busca.toLowerCase())
    );
    setGames(filteredGames);
  }

  useEffect(() => {
    loadGames();
  }, []);

  useEffect(() => {
    if (busca !== '') {
      searchGame();
    } else {
      loadGames();
    }
  }, [busca]);

  return (
    <div>
      <Navbar games={games} setBusca={setBusca} busca={busca} />
      <h1 className="Title">Jogos Mais Populares de 2022</h1>
      <div className="container">
        {games.length === 0 ? (
          <p className="buscaNaoEncontrada">Nenhum game encontrado</p>
        ) : (
          games.map((game) => (
            <GamesCard id={game.id} name={game.title} cover={game.cover} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
