import React, { useState, useEffect } from "react";

import "./ModalLogin.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = ({ onClose }) => {
  const [userdata, setUserdata] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onClose]);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = userdata;
    if (email && password !== "") {
      // Логика для отправки данных на сервер
      console.log("Login:", { email, password });
      onClose();
    } else {
      console.log("Invalid email or password");
    }
  };

  // const imageUrl =
  //   "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=6538f513&is=65268013&hm=d2010aff8bee0d47d49b18166cfba3fe83009190db34d8da8094181f76e0941d&";

  return (
    <form className="Login">
      <div className="Login__content">
        <div className="Login__content__div">
          <h2>Crypto-Bull</h2>
          {/* <img className="Login__content__div__img" src={imageUrl} alt="logo" /> */}
          <button onClick={onClose} className="Login__content__div__button">
            &times;
          </button>
        </div>
        <h3 className="Login__content__header3">Sign in to Crypto-Bull</h3>
        <h4 className="Login__content__header4">
          Not your device? Use a private or incognito window to sign in.
        </h4>
        <label className="Login__content__label">
          Email:
          <input
            className="Login__content__label__input"
            placeholder="Your email adress"
            type="text"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
          />
        </label>
        <label className="Login__content__label">
          Password:
          <div className="Login__content__label__div">
            <input
              className="Login__content__label__input"
              type={showPassword ? "text" : "password"}
              value={userdata.password}
              onChange={(e) =>
                setUserdata({ ...userdata, password: e.target.value })
              }
            />
            <button
              className="Login__content__label__input__button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
        </label>
        <button className="Login__content__button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
