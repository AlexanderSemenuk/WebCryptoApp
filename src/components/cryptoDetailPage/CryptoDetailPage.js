import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatedNumber } from "./../function/function.js";

import "./CryptoDetailPage.scss";

const CryptoDetailPage = () => {
  const { cryptoId } = useParams();
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `http://212.227.173.28:5000/api/Crypto/getCryptocurrency/${cryptoId}`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, [cryptoId]);

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CryptoPage">
      <div className="CryptoPage__header">
        <img
          src={cryptoData.imageUrl}
          alt="thumbnail"
          onError={(e) => {
            e.target.src =
              "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=65c36293&is=65b0ed93&hm=cb690e6ef95f1a36aace54556c6aa6cb97082a4875cb79d536c0003366fa256f&";
          }}
        />
        <h2>{cryptoData.name}</h2>
        <span>{cryptoData.symbol}</span>
      </div>
      <div className="CryptoPage__Price">
        <span>{cryptoData.symbol} Price</span>
        <span>${formatedNumber(cryptoData.priceUsd)}</span>
      </div>
    </div>
  );
};

export default CryptoDetailPage;
