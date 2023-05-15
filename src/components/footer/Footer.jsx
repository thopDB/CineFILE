import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Thank you for using the best Movie Info Database. If you like this
          website then don't forget to give it a star on{" "}
          <a href="https://github.com/sumandey07/CineFILE" target="_blank">
            Github
          </a>{" "}
          ⭐ This is a open-source website available on{" "}
          <a href="https://github.com/sumandey07/CineFILE" target="_blank">
            Github
          </a>
          . Visit Again.
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
