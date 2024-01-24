import React, { useState, useEffect } from "react";
import "./GlobalPreferencesForm.scss";

const GlobalPreferencesForm = ({ onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState("Global");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

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

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="ModalBackdrop" onClick={onClose}>
      <div className="GlobalPreferencesFormModal">
        <form className="Preferences" onClick={(e) => e.stopPropagation()}>
          <h2>Global Preferences</h2>
          <button onClick={onClose}>&times;</button>
          <div>
            <label htmlFor="country">Choose your country/region:</label>
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="Global">Global</option>
              <option value="USA">
                {/* <img
                  src="https://hatscripts.github.io/circle-flags/flags/us.svg"
                  width="48"
                  alt="flags"
                /> */}
                USA
              </option>
              <option value="Germany">Germany</option>
              <option value="UK">UK</option>
              <option value="France">France</option>

              {/* Добавьте другие страны/регионы по необходимости */}
            </select>
            <p>Selected: {selectedCountry}</p>
          </div>

          <div>
            <label htmlFor="language">Choose your language:</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="Español - España">Español - España</option>
              <option value="Español - América Latina">
                Español - América Latina
              </option>
              <option value="Français">Français</option>
              <option value="日本語">日本語</option>
              <option value="Italiano">Italiano</option>
              <option value="Nederlands">Nederlands</option>
              <option value="Polski">Polski</option>
              <option value="Português - Brasil">Português - Brasil</option>
              <option value="Português - Portugal">Português - Portugal</option>
              <option value="Pусский">Pусский</option>
              <option value="ไทย">ไทย</option>
              <option value="Türkçe">Türkçe</option>

              {/* Добавьте другие языки по необходимости */}
            </select>
            <p>Selected: {selectedLanguage}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GlobalPreferencesForm;
