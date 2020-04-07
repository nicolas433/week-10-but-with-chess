import React from "react";

import "./Styles.css";

function PlayerItem({ player }) {
  return (
    <li className="player-item">
      <header>
        <img src={player.avatar} alt={player.name} />
        <div className="user-info">
          <strong>{player.name}</strong>
        </div>
      </header>
      <p>{player.bio}</p>
      <a href={`https://https://www.chess.com/member/${player.chess_username}`}>
        Acessar perfil no Chess
      </a>
    </li>
  );
}

export default PlayerItem;
