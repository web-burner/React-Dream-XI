// import React from 'react';

import Player from "./Player";

const Players = ({
  players,
  setAvailableBalance,
  balance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className=" grid grid-cols-3 gap-5 ">
      {players.map((player) => (
        <Player
          player={player}
          key={player.id}
          setAvailableBalance={setAvailableBalance}
          balance={balance}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
