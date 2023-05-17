import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  const redirect = () => {
    window.open(
      "https://github.com/sumandey07/CineFILE/discussions/new?category=q-a",
      "_blank"
    );
  };

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <NavLink className="menuItem" to="/terms">
            Terms
          </NavLink>
          <NavLink className="menuItem" to="/privacy">
            Privacy Policy
          </NavLink>
          <NavLink className="menuItem" to="/about">
            About
          </NavLink>
          <NavLink className="menuItem" to="/blog">
            Blog
          </NavLink>
          <span className="menuItem" onClick={() => redirect()}>
            FAQ
          </span>
        </ul>
        <div className="infoText">
          Thank you for using the best Movie Info Database. If you like this
          website then don't forget to give it a star ⭐ on{" "}
          <a href="https://github.com/sumandey07/CineFILE" target="_blank">
            Github
          </a>
          . Source Code is available on{" "}
          <a href="https://github.com/sumandey07/CineFILE" target="_blank">
            Github
          </a>
          . You can also support us by donating on{" "}
          <a href="https://www.buymeacoffee.com/sumankumarQ" target="_blank">
            Buy Me a Coffee
          </a>{" "}
          🍕. Visit Again.
        </div>
        <div className="socialIcons">
          <a href="https://www.facebook.com/SD0919/" target="_blank">
            <span className="icon">
              <FaFacebookF size={20} />
            </span>
          </a>
          <a href="https://www.instagram.com/sumanhere_/" target="_blank">
            <span className="icon">
              <FaInstagram size={20} />
            </span>
          </a>
          <a href="https://twitter.com/iam_sumandey" target="_blank">
            <span className="icon">
              <FaTwitter size={20} />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/iamsumandey/" target="_blank">
            <span className="icon">
              <FaLinkedin size={20} />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
