import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPercentage, formatedNumber } from "./../function/function.js";
import NorthEastIcon from "@mui/icons-material/NorthEast";

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

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(intervalId);
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
          <img
            src={item.imageUrl}
            alt="thumbnail"
            onError={(e) => {
              e.target.src =
                "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=65c36293&is=65b0ed93&hm=cb690e6ef95f1a36aace54556c6aa6cb97082a4875cb79d536c0003366fa256f&";
            }}
          />
          <div className="Crypto__info">
            <div className="Crypto__name">
              <span>
                <b>{item.name}</b>
              </span>
              <span>{item.symbol}</span>
            </div>
            <div className="Crypto__price">
              <span>${formatedNumber(item.priceUsd)}</span>
              <span className="positive">
                <NorthEastIcon />
                {formatPercentage(item.changePercent24Hr)}
              </span>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CryptoInfo;
