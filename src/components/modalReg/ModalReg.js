import React, { useEffect, useState } from "react";
import "./ModalReg.scss";

const ModalReg = ({ onClose }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleRegistration = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      password !== "" &&
      isChecked === true
    ) {
      console.log("Registration:", { firstName, lastName, email, password });
      onClose();
    } else if (
      firstName &&
      lastName &&
      email &&
      password !== "" &&
      isChecked === false
    ) {
      console.log("Set checkbox");
    } else {
      console.log("Invalid email or password");
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <form className="modal">
      <div className="modal__content">
        <div className="modal__content__div">
          <h2>Create an account</h2>
          <button onClick={onClose} className="modal__content__div__button">
            &times;
          </button>
        </div>
        <h3>
          Be sure to enter your legal name as it appears on your
          government-issued ID.
        </h3>
        <div className="modal__content__name">
          <label className="modal__content__name__label">
            Legal first name:
            <input
              className="modal__content__name__input"
              // placeholder="Legal first name"
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </label>
          <label className="modal__content__name__label">
            Legal last name:
            <input
              className="modal__content__name__input"
              // placeholder="Legal last name"
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </label>
        </div>
        <div className="modal__content__name">
          <label className="modal__content__name__label">
            Email:
            <input
              className="modal__content__name__input"
              // placeholder="Email"
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="modal__content__name__label">
            Password:
            <input
              className="modal__content__name__input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="modal__content__name__button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </label>
        </div>
        <div className="modal__content__check">
          <label>
            <input
              className="modal__content__check__checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          <h3>
            I certify that I am 18 years of age or older,{" "}
            <a href="/user-agreement" target="_blank" rel="noopener noreferrer">
              User Agreement
            </a>
            , and I have read the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </h3>
        </div>

        <button className="modal__content__reg" onClick={handleRegistration}>
          Create Account
        </button>
      </div>
    </form>
  );
};

export default ModalReg;
