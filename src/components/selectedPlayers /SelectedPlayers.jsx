// import React from 'react';

import PlayerNotYetSelect from "./PlayerNotYetSelect";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayers: players,
  removePlayer,
  setToggle,
}) => {
  return (
    <div>
      <div className="space-y-3 h-auto pb-9">
        {players.length === 0 ? (
          <PlayerNotYetSelect></PlayerNotYetSelect>
        ) : (
          players.map((player) => (
            <SelectedPlayer
              player={player}
              removePlayer={removePlayer}
              key={player.id}
            ></SelectedPlayer>
          ))
        )}
      </div>
      <div className="h-20">
        <button
          onClick={() => setToggle(true)}
          className="btn border-none bg-[#E7FE29] outline-1 outline-offset-4 outline-red-700 text-black shadow-none"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
