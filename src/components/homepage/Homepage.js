import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appheader/AppHeader";
import CryptoContentBlock from "../cryptoContentBlock/cryptoContentBlock";
import Footer from "../footer/Footer";
import CryptoDetailPage from "../cryptoDetailPage/CryptoDetailPage";
import { StartPage } from "../startpage/StartPage";

const HomePage = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/crypto" element={<CryptoContentBlock />} />
        <Route path="/crypto/:cryptoId" element={<CryptoDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomePage;
