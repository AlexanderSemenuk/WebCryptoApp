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
        const response = await fetch(
          "http://212.227.173.28:5000/api/Crypto/getAll"
        );
        const data = await response.json();
        setCryptoData(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  const dataArray = Object.values(cryptoData);

  const handleSearch = (searchValue) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      const filteredResults = dataArray.filter((item) =>
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
      <CryptoInfo />
      <CustomizedTables data={filteredData} />
    </>
  );
};

export default CryptoContentBlock;
