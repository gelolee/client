import "./Heroimagestyle.css";
import {FaFacebook, FaInstagram, FaTelegramPlane, FaLinkedin} from "react-icons/fa";


import React from 'react'

import Image from "../assets/pc2.jpg"
import {Link} from "react-router-dom"
import 'animate.css';

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="code-img" src = {Image} alt = "Image1"/>
        </div>
        <div className="content">
            <p className="animate__animated animate__fadeInDown ">Hi, I'm Angelo Lee Salenga</p>
            <h1 className="animate__animated animate__fadeInDown ">Front End Developer.</h1>
            <div className="animate__animated animate__fadeIn">
                <Link to = "/project" className="btn">Projects</Link>
                <Link to = "/contact" className="btn">Contact</Link>
            </div>
            <div className="icon animate__animated animate__fadeIn">
              <a className = "facebook" href="https://www.facebook.com/im.angelolee">
                <FaFacebook />
              </a>
              <a className = "instagram" href="https://www.instagram.com/gelo_lee/">
                <FaInstagram />
              </a>
              <a href="https://web.telegram.org/?legacy=1#/im">
                <FaTelegramPlane />
              </a>
              <a href="https://www.linkedin.com/in/angelo-salenga-a7032428a/">
                <FaLinkedin />
              </a>
            </div>
        </div>
    </div>
  )
}

export default Heroimage