// import React from 'react';

import { use, useEffect } from "react";
import Players from "./Players";
import { getBalanceLS, getCartFromLS } from "../../localStorage";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  balance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const players = use(playersPromise);
  useEffect(() => {
    const cart = [];
    const getBalance = getBalanceLS();
    setAvailableBalance(getBalance);
    const storedCart = getCartFromLS();
    if (storedCart) {
      storedCart.forEach((id) => {
        const finding = players.find((player) => player.id === id);
        if (finding) {
          cart.push(finding);
        }
      });
      setSelectedPlayers(cart);
      setAvailableBalance(getBalance);
    }
  }, [players]);
  return (
    <div className=" pb-10">
      <Players
        players={players}
        setAvailableBalance={setAvailableBalance}
        balance={balance}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      ></Players>
    </div>
  );
};

export default AvailablePlayers;
