// import React from 'react';

import logo from "../../assets/logo.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="mb-4">
      <div className="navbar">
        <div className="navbar-start">
          <img className="w-12" src={logo} alt="Best XI logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <p className=" border border-gray-400 px-3 py-1 rounded-lg">
            $<span>{availableBalance}</span> Coin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
