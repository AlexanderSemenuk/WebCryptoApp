import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPercentage, formatedNumber } from "./../function/function.js";

import "./cryptoInfo.scss";

const CryptoInfo = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://212.227.173.28:5000/api/Crypto/getTopMovers"
        );
        const data = await response.json();
        setCryptoData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!cryptoData || cryptoData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Crypto">
      <span className="Crypto__header">
        <b>Biggest Movers</b>
      </span>
      <span className="Crypto__subheader">24h</span>
      {cryptoData?.map((item) => (
        <li
          className="Crypto__item"
          key={item.id}
          onClick={() => {
            navigate(`/crypto/${item.id}`);
          }}
        >
          <img src={item.imageUrl} alt="thumbnail" />
          <div className="Crypto__info">
            <div className="Crypto__name">
              <span>
                <b>{item.name}</b>
              </span>
              <span>{item.symbol}</span>
            </div>
            <div className="Crypto__price">
              <span>${formatedNumber(item.priceUsd)}</span>
              <span>{formatPercentage(item.changePercent24Hr)}</span>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CryptoInfo;
