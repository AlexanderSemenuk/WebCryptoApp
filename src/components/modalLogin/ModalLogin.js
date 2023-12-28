import React, { useState, useEffect } from "react";

import "./ModalLogin.scss";

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Добавляем обработчик событий при монтировании
    window.addEventListener("keydown", handleEscapeKeyPress);

    // Удаляем обработчик событий при размонтировании
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onClose]);

  const handleLogin = () => {
    // Логика для отправки данных на сервер
    console.log("Login:", { username, password });
    onClose();
  };

  return (
    <form className="Login">
      <div className="Login__content">
        <div className="Login__content__div">
          <h2>Crypto-Bull</h2>
          <button onClick={onClose} className="Login__content__div__button">
            &times;
          </button>
        </div>
        <h3>Sign in to Crypto-Bull</h3>
        <h4>Not your device? Use a private or incognito window to sign in.</h4>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
