import React from "react";
import { useState, useEffect } from "react";

import CryptoInfo from "../cryptoInfo/CryptoInfo";
import CustomizedTables from "../table/Table";

const CryptoContentBlock = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        console.log(response);

        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(cryptoData);
  if (cryptoData == 0) {
    return null;
  }
  return (
    <>
      <CryptoInfo data={cryptoData.data} />
      <CustomizedTables data={cryptoData.data} />
    </>
  );
};

export default CryptoContentBlock;
