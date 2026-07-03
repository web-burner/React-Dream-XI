const availableBalance = 10000000;
const getCartFromLS = () => {
  const playerCart = JSON.parse(localStorage.getItem("players"));
  if (playerCart) {
    return playerCart;
  }
  return [];
};

const getBalanceLS = () => {
  const balance = JSON.parse(localStorage.getItem("balance"));
  if (balance) {
    return balance;
  }
  return availableBalance;
};

const addToLS = (id, balance) => {
  const playerCart = getCartFromLS();
  const updatedCart = [...playerCart, id];
  setToLS(updatedCart, balance);
};

const setToLS = (playerCart, balance) => {
  const cart = JSON.stringify(playerCart);
  localStorage.setItem("players", cart);
  localStorage.setItem("balance", JSON.stringify(balance));
};

const removeFromLS = (id, balance) => {
  const cart = getCartFromLS();
  const updateCart = cart.filter((playerId) => playerId !== id);
  setToLS(updateCart, balance);
};

export { getCartFromLS, addToLS, removeFromLS, getBalanceLS };
