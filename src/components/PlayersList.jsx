import React from "react";
import Player from "./Player.jsx";
import players from "./players.js";
import "./Style.css";

// mapping through Player.jsx and passing "key" and "player" as props to Player.jsx
const PlayerList = () => {
  return (
    <div className="playerList">
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
