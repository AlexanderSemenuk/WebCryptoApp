import React, { useState } from "react";

import "./AppHeader.scss";

import ModalLogin from "../modalLogin/ModalLogin";
import ModalReg from "../modalReg/ModalReg";

const AppHeader = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const imageUrl =
    "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&";
  return (
    <div className="Header">
      <div className="Header__nav">
        <div className="Header__nav__pic">
          <img src={imageUrl} alt="logo" />
        </div>
        <div className="Header__nav__menu">
          <div className="Header__nav__menu__item">English</div>
          <div className="Header__nav__menu__item">
            <button
              onClick={() => openModal("login")}
              className="Header__nav__menu__item button button__white"
            >
              Sign in
            </button>
          </div>
          <div
            onClick={() => openModal("register")}
            className="Header__nav__menu__item"
          >
            <button className="Header__nav__menu__item button button__blue">
              Sign up
            </button>
          </div>
          {activeModal === "login" && <ModalLogin onClose={closeModal} />}
          {activeModal === "register" && <ModalReg onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
