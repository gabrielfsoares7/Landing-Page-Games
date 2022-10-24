import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ busca, setBusca }) => {
  return (
    <nav id="navbar">
      <h1>
        <Link id="home" to="/">
          GamesHome
        </Link>
      </h1>
      <form>
        <input
          type="text"
          placeholder="Busque um jogo"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
