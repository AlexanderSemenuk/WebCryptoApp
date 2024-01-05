import React, { useState, useEffect } from "react";
import CryptoInfo from "../cryptoInfo/CryptoInfo";
import CustomizedTables from "../table/Table";
import SearchBar from "../searchBar/searchBar";

const CryptoContentBlock = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        setCryptoData(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchValue) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      const filteredResults = cryptoData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredResults);
    }, 500);

    setSearchTimeout(timeout);
  };

  if (cryptoData.length === 0) {
    return null;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CryptoInfo data={cryptoData.data} />
      <CustomizedTables data={filteredData} />
    </>
  );
};

export default CryptoContentBlock;
