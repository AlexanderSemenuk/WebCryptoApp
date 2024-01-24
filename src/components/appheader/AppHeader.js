import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

import "./AppHeader.scss";

import ModalLogin from "../modalLogin/ModalLogin";
import ModalReg from "../modalReg/ModalReg";
import GlobalPreferencesForm from "../GlobalPreferencesForm/GlobalPreferencesForm";

const AppHeader = () => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

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
        <div className="Header__nav__pic">
          <img
            src={imageUrl}
            alt="logo"
            onClick={() => {
              navigate(`/`);
            }}
          />
        </div>
        <div className="Header__links">
          <div
            className="Header__links__link"
            onClick={() => {
              navigate(`/crypto`);
            }}
          >
            <button>Explore</button>
          </div>
          <div className="Header__links__link">
            <button>Learn</button>
          </div>
          <div className="Header__links__link">
            <button>Individuals</button>
          </div>
          <div className="Header__links__link">
            <button>Businesses</button>
          </div>
          <div className="Header__links__link">
            <button>Developers</button>
          </div>
          <div className="Header__links__link">
            <button>Company</button>
          </div>
        </div>
        <div className="Header__nav__menu">
          <div className="Header__nav__menu__item">
            <LanguageIcon
              className="Header__nav__menu__language"
              onClick={() => openModal("preferences")}
            />
          </div>
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
          {activeModal === "preferences" && (
            <GlobalPreferencesForm onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
