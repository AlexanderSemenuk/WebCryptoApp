import React from "react";
import { TextField } from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import "./searchBar.scss";

const SearchBar = ({ onSearch, totalChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onSearch(inputValue);
  };
  const percentChange = totalChange / 1000;

  return (
    <div className="search">
      <div className="search__info">
        <span className="search__info__header">Explore the cryptoeconomy</span>
        <br />
        <div className="search__info__market">
          <span>
            In the past 24 hours the market is {totalChange < 0 ? "down" : "up"}
          </span>
          <span className={totalChange < 0 ? "negative" : "positive"}>
            {totalChange < 0 ? <SouthEastIcon /> : <NorthEastIcon />}
            {percentChange.toFixed(2)}%
          </span>
        </div>
      </div>
      <TextField label="Search for an asset" onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
