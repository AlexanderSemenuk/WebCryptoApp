import React from "react";
import { TextField, Icon } from "@mui/material";

import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search__info">
        <span>Explore the cryptoeconomy</span>
        <br />
        <span>In the past 24 hours the market is</span>
      </div>
      <div className="search__wrapper">
        <TextField label="Search for an asset" icon={<Icon>search</Icon>} />
      </div>
    </div>
  );
};

export default SearchBar;
