import React from "react";
import { useState } from "react";

import "./cryptoInfo.scss";

const CryptoInfo = ({ data }) => {
  return (
    <div className="Crypto">
      <div className="Crypto__new">
        <span>New on Crypto-bull</span>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Crypto__biggest">
        <span>Biggest Movers</span>
        <span>24h</span>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Crypto__trend">
        <span>Trending</span>
        <span>24h views</span>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Crypto__free">
        <span>Free crypto</span>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&"
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CryptoInfo;
