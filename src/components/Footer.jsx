import React from "react";
import "./Footer.css";
import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-heading">About Us</h2>
          <p>
            Enhance your computing experience. Affordable and quality
            accessories for your PC. Providing a more efficient computing
            experience. The ultimate gaming accessories. For a more complete
            computing.
          </p>
          <div className="contact">
            <span>
              <BiPhone /> 09555261873
            </span>
            <span>
              <BiEnvelope />{" "}
              <a href="mailto:bogsangitelvis@gmail.com">
                bogsangitelvis@gmail.com
              </a>
            </span>
            <span>
              <BiMap /> Dao, Pagadian City, Zamboanga Del Sur, 7016.
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EL FLO Computer and Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
