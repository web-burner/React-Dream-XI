// import React from 'react';

import { toast } from "react-toastify";

const SelectedPlayer = ({ player, removePlayer }) => {
  const { image, name, role, id, price } = player;
  console.log(player);
  const handlePlayer = (id, price) => {
    removePlayer(id, price);
    toast(`${name} deleted successfully!`);
  };
  return (
    <div className=" flex justify-between items-center p-2 rounded-2xl border border-gray-400">
      <div className=" flex gap-3">
        <figure>
          <img src={image} className=" w-12 h-12 rounded-xl" alt="" />
        </figure>
        <div>
          <p className="text-lg">{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handlePlayer(id, price)}
          className="btn border-red-700 text-red-700 bg-white shadow-none"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
