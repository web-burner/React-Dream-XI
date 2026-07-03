import { Suspense, useState } from "react";
import "./app.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/navbar";
import AvailablePlayers from "./components/players/AvailablePlayers";
import SelectedPlayers from "./components/selectedPlayers /SelectedPlayers";
import { ToastContainer } from "react-toastify";
import { getBalanceLS, removeFromLS } from "./localStorage";

const fetchPlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const balance = getBalanceLS();
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(balance);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const removePlayer = (id, price) => {
    console.log(id);
    const filterPlayer = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(filterPlayer);
    const updatedBalance = availableBalance + price;
    setAvailableBalance(updatedBalance);
    removeFromLS(id, updatedBalance);
  };
  return (
    <div className=" w-10/12 mx-auto min-h-dvh">
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className=" flex justify-between item-center mb-3">
        <h2 className=" text-2xl font-semibold">
          {toggle ? "Available Players" : "Selected Players"}
        </h2>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`${toggle && "bg-[#E7FE29]"} text-black font-bold border border-gray-200 rounded-l-lg px-3 py-1 border-r-0`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${toggle || "bg-[#E7FE29]"} text-black font-bold px-3 py-1  border border-l-0 border-gray-200 rounded-r-lg`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <p className=" text-center text-6xl font-bold p-60">
              Players Loading...
            </p>
          }
        >
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            balance={availableBalance}
            playersPromise={playersPromise}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          selectedPlayers={selectedPlayers}
          setToggle={setToggle}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
