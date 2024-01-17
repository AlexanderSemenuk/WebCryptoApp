import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.scss"; // Замените на ваш файл стилей для футера

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__section">
          <h3>About Us</h3>
          <p>crypto-bull</p>
        </div>
        <div className="Footer__section">
          <h3>Contact</h3>
          <p>Email: cryptobull@gmail.com</p>
          <p>Phone: +38 (067) 872-38-91</p>
        </div>
        <div className="Footer__section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media:</p>
          <div className="Footer__social-icons">
            <button href="#" className="Footer__social-icon">
              <FacebookIcon />
            </button>
            <button href="#" className="Footer__social-icon">
              <TwitterIcon />
            </button>
            <button href="#" className="Footer__social-icon">
              <InstagramIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
