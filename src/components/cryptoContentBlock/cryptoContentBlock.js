import React, { useState, useEffect } from "react";
import CryptoInfo from "../cryptoInfo/CryptoInfo";
import CustomizedTables from "../table/Table";
import SearchBar from "../searchBar/searchBar";

const CryptoContentBlock = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [totalChange, setTotalChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://212.227.173.28:5000/api/Crypto/getAll"
        );
        const data = await response.json();
        setCryptoData(data.data);
        setFilteredData(data.data);

        const totalChangeValue = Object.values(data.data).reduce(
          (accumulator, crypto) => accumulator + crypto.changePercent24Hr,
          0
        );

        setTotalChange(totalChangeValue);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

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
      <SearchBar onSearch={handleSearch} totalChange={totalChange} />
      <CryptoInfo />
      <CustomizedTables data={filteredData} />
    </>
  );
};

export default CryptoContentBlock;
