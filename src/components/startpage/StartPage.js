import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import { formatPercentage, formatedNumber } from "./../function/function.js";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";

import "./StartPage.scss";
import ModalReg from "../modalReg/ModalReg.js";

export const StartPage = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("Tradable");
  const [cryptoData, setCryptoData] = useState([]);
  const [topMovers, setTopMovers] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const id = [
          "bitcoin",
          "ethereum",
          "tether",
          "solana",
          "xrp",
          "usd-coin",
        ];
        const cryptoPromises = id.map(async (id) => {
          const response = await fetch(
            `http://212.227.173.28:5000/api/Crypto/getCryptocurrency/${id}`
          );
          const data = await response.json();
          return data;
        });

        const cryptoResults = await Promise.all(cryptoPromises);
        setCryptoData(cryptoResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchTopMovers = async () => {
      try {
        const response = await fetch(
          "http://212.227.173.28:5000/api/Crypto/getTopMovers"
        );
        const data = await response.json();
        setTopMovers(data.data);
      } catch (error) {
        console.error("Error fetching top movers data:", error);
      }
    };

    fetchCryptoData();
    fetchTopMovers();

    const intervalId = setInterval(() => {
      fetchCryptoData();
      fetchTopMovers();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderCryptoTradable = () => {
    return cryptoData.map((crypto) => (
      <div
        key={crypto.id}
        className="Cryptos__tradable__item"
        onClick={() => {
          navigate(`/crypto/${crypto.id}`);
        }}
      >
        <img src={crypto.imageUrl} alt={crypto.name} />
        <span>
          <b>{crypto.name}</b>
        </span>
        <span>${formatedNumber(crypto.priceUsd)}</span>
        <span
          className={`${
            crypto.id === "usd-coin"
              ? "usdc"
              : crypto.changePercent24Hr < 0
              ? "negative"
              : "positive"
          }`}
        >
          {crypto.id === "usd-coin" ? (
            <CircleSharpIcon />
          ) : (
            <>
              {crypto.changePercent24Hr < 0 ? (
                <SouthRoundedIcon />
              ) : (
                <NorthRoundedIcon />
              )}
            </>
          )}
          <span>
            {crypto.id === "usd-coin"
              ? "0.00%"
              : formatPercentage(crypto.changePercent24Hr)}
          </span>
        </span>
      </div>
    ));
  };

  const renderCryptoGainers = () => {
    return topMovers?.map((crypto) => (
      <div
        key={crypto.id}
        className="Cryptos__tradable__item"
        onClick={() => {
          navigate(`/crypto/${crypto.id}`);
        }}
      >
        <img
          src={crypto.imageUrl}
          alt={crypto.name}
          onError={(e) => {
            e.target.src =
              "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=65c36293&is=65b0ed93&hm=cb690e6ef95f1a36aace54556c6aa6cb97082a4875cb79d536c0003366fa256f&";
          }}
        />
        <span>
          <b>{crypto.name}</b>
        </span>
        <span>${formatedNumber(crypto.priceUsd)}</span>
        <span className="positive">
          <NorthRoundedIcon />
          <span>{formatPercentage(crypto.changePercent24Hr)}</span>
        </span>
      </div>
    ));
  };

  const renderCryptoSection = () => {
    switch (selectedButton) {
      case "Tradable":
        return (
          <div className="Cryptos__tradable">{renderCryptoTradable()}</div>
        );
      case "Top Gainers":
        return <div className="Cryptos__tradable">{renderCryptoGainers()}</div>;
      case "New on Crypto-bull":
        return <div className="Cryptos__tradable">{}</div>;
      default:
        return null;
    }
  };

  return (
    <Grid style={{ maxWidth: "1903px" }}>
      <div className="Subheader">
        <Grid container spacing={3} className="main">
          <Grid item xs={4}>
            <img
              src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/5164ee267cc2942f22b8cff329f933fb/hero_3x.png?fm=webp&q=100&w=1180"
              alt=""
              className="Subheader__image"
            />
          </Grid>
          <Grid item xs={3}>
            <h1>The future of money is here</h1>
            <span>
              We're the most trusted place for people and businesses to buy,
              sell, and manage crypto.
            </span>
            <div className="Subheader__sign">
              <span>Email address</span>
              <div className="Subheader__sign__form">
                <input type="Email" />
                <button onClick={() => openModal("register")}>Sign up</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="Cryptos ">
        <Grid container spacing={10} className="main">
          <Grid item xs={4}>
            <div className="Cryptos__explore">
              <h2>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h2>
              <span>
                Simply and securely buy, sell, and manage hundreds of
                cryptocurrencies.
              </span>
              <button
                onClick={() => {
                  navigate(`/crypto`);
                }}
              >
                See more assets
              </button>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="Cryptos__coins">
              <div className="Cryptos__coins__nav">
                <button
                  className={
                    selectedButton === "Tradable" ? "selected" : "nonSelected"
                  }
                  onClick={() => handleButtonClick("Tradable")}
                >
                  Tradable
                </button>
                <button
                  className={
                    selectedButton === "Top Gainers"
                      ? "selected"
                      : "nonSelected"
                  }
                  onClick={() => handleButtonClick("Top Gainers")}
                >
                  Top Gainers
                </button>
                <button
                  className={
                    selectedButton === "New on Crypto-bull"
                      ? "selected"
                      : "nonSelected"
                  }
                  onClick={() => handleButtonClick("New on Crypto-bull")}
                >
                  New on Crypto-bull
                </button>
              </div>
              <div className="Cryptos__coins__currency">
                {renderCryptoSection()}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="Portfolio">
        <Grid container spacing={2} className="main">
          <Grid item xs={4}>
            <div className="Portfolio__sign">
              <span>Take control of your money</span>
              <span>Start your portfolio today and discover crypto</span>
              <span>Email address</span>
              <div className="Portfolio__sign__form">
                <input type="Email" />
                <button onClick={() => openModal("register")}>Sign up</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="Portfolio__img">
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/5o0IbUnXunFKmiSC31gK6j/c9da092eda3ebc34941dfa3d107437f4/Type_Circles_4x.png?fm=webp&q=100&w=1180"
                alt="portfolio"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="Usd">
        <Grid container spacing={0} className="main">
          <Grid item xs={4}>
            <div className="Usd__about">
              <span>USDC is the dollar for the digital age</span>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Usd__learn">
              <span>
                USDC gives you 24/7 access to payments and financial services.
                Trade, spend, and send faster and more efficiently.
              </span>
              <button>Learn more</button>
            </div>
          </Grid>
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/7lnIVE5wVhBAd9IWdjPPhW/f3fa7b084a26d884f20634293e020aaa/cb-banner.jpeg?fm=webp&q=100&w=1180"
            alt=""
            className="Usd__img"
          />
        </Grid>
      </div>
      <div className="Info">
        <Grid container spacing={0} className="main">
          <div className="Info__wrapper">
            <Grid item xs={6}>
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/548xpyb2JxtvIrb9FTWMd4/28af282fa265891fddd6af109d775bca/Retail.png?fm=webp&q=100&w=1180"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="Info__item">
                <h3>CRYPTO-BULL</h3>
                <span>Buy, sell, and store hundreds of cryptocurrencies</span>
                <span>
                  From Bitcoin to Dogecoin, we make it easy to buy and sell
                  cryptocurrency. Protect your crypto with best in class cold
                  storage.
                </span>
                <button onClick={() => openModal("register")}>
                  Sign up now
                </button>
              </div>
            </Grid>
          </div>
          <div className="Info__wrapper">
            <Grid item xs={6}>
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/WdlPQ8QhJ267BxSckN56A/956300e8f8cf97ce57eae9c89babc8db/Advanced.png?fm=webp&q=100&w=1180"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="Info__item">
                <h3>ADVANCED</h3>
                <span>Powerful tools, designed for the advanced trader</span>
                <span>
                  Powerful analytical tools with the safety and security of
                  Coinbase deliver the ultimate trading experience. Tap into
                  sophisticated charting capabilities, real-time order books,
                  and deep liquidity across hundreds of markets.
                </span>
                <button>Start trading</button>
              </div>
            </Grid>
          </div>
          <div className="Info__wrapper">
            <Grid item xs={6}>
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/5LzccC4O8a6lcKC3P44Q3X/a4ab2c1f19e7e3d8c3179cf95ae4c364/Wallet.png?fm=webp&q=100&w=1180"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="Info__item">
                <h3>WALLET</h3>
                <span>Do more with your crypto with Coinbase Wallet</span>
                <span>
                  Store your crypto in your own personal crypto wallet and
                  explore decentralized finance (DeFi), buy and sell NFTs, and
                  more.
                </span>
                <button>Learn more</button>
              </div>
            </Grid>
          </div>
          <div className="Info__wrapper">
            <Grid item xs={6}>
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/3bmM1J1hoV2rfXYRCzX7pc/8dfccb2e234b39408c4e32c92427a8e8/Prime.png?fm=webp&q=100&w=1180"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="Info__item">
                <h3>PRIME</h3>
                <span>
                  The financial institution for a digital asset future
                </span>
                <span>
                  Coinbase Prime is the first choice for sophisticated investors
                  and institutions that want to invest in digital assets.
                </span>
                <button>Learn more</button>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
      <div className="GetStart">
        <Grid container spacing={1} className="main">
          <Grid item xs={10}>
            <div className="GetStart__create">
              <span>Get started in a few minutes</span>
              <div className="GetStart__create__item">
                <span>
                  Create an account, link your bank account, and start buying &
                  selling.
                </span>
                <button onClick={() => openModal("register")}>
                  Create account
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="GetStart__interest">
              <div className="GetStart__interest__item">
                <span>$145B</span>
                <span>QUARTERLY VOLUME TRADED</span>
              </div>
              <div className="GetStart__interest__item">
                <span>100+</span>
                <span>COUNTRIES SUPPORTED</span>
              </div>
              <div className="GetStart__interest__item">
                <span>$130B</span>
                <span>ASSETS ON PLATFORM</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {activeModal === "register" && <ModalReg onClose={closeModal} />}
    </Grid>
  );
};
