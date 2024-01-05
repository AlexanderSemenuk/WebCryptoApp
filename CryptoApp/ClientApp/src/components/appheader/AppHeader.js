import React from "react";

import "./AppHeader.scss";

const AppHeader = () => {
  const imageUrl =
    "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&";
  return (
    <div className="Header">
      <div className="Header__nav">
        <div className="Header__nav__link">
          <button className="Header__nav__link__item" href="#">
            Coins
          </button>
          <button className="Header__nav__link__item" href="#">
            Exchanges
          </button>
          <button className="Header__nav__link__item" href="#">
            Swap
          </button>
        </div>
        <div className="Header__nav__pic">
          <img src={imageUrl} alt="logo" />
        </div>
        <div className="Header__nav__menu">
          <div className="Header__nav__menu__item">USD</div>
          <div className="Header__nav__menu__item">English</div>
          {/* <div className="Header__nav__menu__item">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="Header__nav__menu__item">
            <FontAwesomeIcon icon={faGear} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
