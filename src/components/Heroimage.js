import "./Heroimagestyle.css";
import {FaFacebook, FaInstagram, FaTelegramPlane} from "react-icons/fa";


import React from 'react'

import Image from "../assets/pc2.jpg"
import {Link} from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="code-img" src = {Image} alt = "Image1"/>
        </div>
        <div className="content">
            <p>Hi, I'm Angelo Lee Salenga</p>
            <h1>Web Developer.</h1>
            <div>
                <Link to = "/project" className="btn">Projects</Link>
                <Link to = "/contact" className="btn">Contact</Link>
            </div>
            <div className="icon">
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
        </div>
    </div>
  )
}

export default Heroimage