import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=65b0ed93&is=659e7893&hm=a987675ab796b0d248a41c06bb5464a23dc0b671b73f23149a0c61d071aa0321&";
  return (
    <div className="Header">
      <div className="Header__nav">
        <Link to={`/`}>
          <div className="Header__nav__pic">
            <img src={imageUrl} alt="logo" />
          </div>
        </Link>
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
