import React from "react";
import { useState } from "react";

import AppHeader from "../appheader/AppHeader";
import SearchBar from "../searchBar/searchBar";
import CryptoContentBlock from "../cryptoContentBlock/cryptoContentBlock";

const HomePage = () => {
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <CryptoContentBlock />
    </div>
  );
};

export default HomePage;
