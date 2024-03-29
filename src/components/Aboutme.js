import "./Aboutmestyle.css"

import React from 'react'
import photo from "../assets/photo.avif"
import photo1 from "../assets/photo1.avif"
import 'animate.css'

const Aboutme = () => {
  return (
    <div className="aboutme">
        <div className="left animate__animated animate__slideInLeft">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit 
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                 occaecat cupidatat non proident, sunt in culpa qui officia 
                 deserunt mollit anim id est laborum.</p>
        </div>
        <div className="right animate__animated animate__slideInRight">
            <div className="img-container">
                <div className="img-stack top">
                    <img src = {photo} className = "img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src = {photo1} className = "img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme