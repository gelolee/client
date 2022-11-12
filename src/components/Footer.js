import "./Footerstyle.css";
import {FaFacebook, FaInstagram, FaTelegramPlane} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <hr></hr>
        <div className="footer-container">
            <div className="social">
            <a href="https://www.facebook.com/im.angelolee">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/gelo_lee/">
                <FaInstagram />
              </a>
              <a href="https://web.telegram.org/?legacy=1#/im">
                <FaTelegramPlane />
              </a>
            </div>
            <div className="copyright">
            © Copyright to <strong><span>Angelo</span></strong>. All rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer