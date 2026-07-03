// import React from 'react';

import { toast } from "react-toastify";
import { addToLS } from "../../localStorage";

const Player = ({
  player,
  setAvailableBalance,
  balance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const {
    id,
    image,
    name,
    country,
    role,
    rating,
    batting,
    bowling,
    price = parseInt(price),
  } = player;

  const isSelected = selectedPlayers.find(p => p.id === id);

  const handleSelected = (player) => {
    if (selectedPlayers.length >= 6) {
      toast("Maximum Limits Reached!");
      return;
    }
    if (balance < price) {
      toast("Not Enough Balance!");
      return;
    }
    const findDuplicate = selectedPlayers.find((p) => p.id === id);
    if (findDuplicate) {
      toast("Player Already Selected!");
    }
    if (price < balance && selectedPlayers.length < 6 && !findDuplicate) {
      // setIsSelected(true);
      const updatedBalance = balance - price;
      setAvailableBalance(updatedBalance);
      setSelectedPlayers([...selectedPlayers, player]);
      toast(`${name} Selected Successfully!`);
      addToLS(id, updatedBalance);
    }
  };

  return (
    <div className=" border border-gray-200 p-4 rounded-xl flex flex-col justify-between gap-3 shadow-xl">
      <figure>
        <img className=" h-60 w-full rounded-md" src={image} alt="" />
      </figure>
      <div>
        <h2 className=" text-lg font-semibold">{name}</h2>
      </div>
      <div className="flex justify-between border-b border-gray-300 font-semibold py-2">
        <p>{country}</p>
        <p className=" btn bg-white text-black shadow-none">{role}</p>
      </div>
      <div>
        Rating: <span className="font-semibold">{rating}</span>
      </div>
      <div className=" flex justify-between">
        <p>{batting}</p>
        <p>{bowling}</p>
      </div>
      <div className="flex justify-between">
        <p>
          Price: $<span>{price}</span>
        </p>
        <button
          disabled={isSelected}
          onClick={() => handleSelected(player)}
          className="btn border-none bg-[#E7FE29] outline-1 outline-offset-4 outline-red-700 text-black shadow-none"
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
