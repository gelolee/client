import "./Projectcardstyle.css"

import React from 'react'
import img1 from '../assets/card.jpg';
import { NavLink } from "react-router-dom";

const Projectcard = () => {
  return (
    <div className="project-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project_container">
            <div className="project-card">
                <img src = {img1} alt = "image3"/>
                <h2 className="project-title">Project 1</h2>
                <div className="project-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="pro-btn">
                        <NavLink to = "url.com" className="btn">View</NavLink>
                        <NavLink to = "url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src = {img1} alt = "image2"/>
                <h2 className="project-title">Project 2</h2>
                <div className="project-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="pro-btn">
                        <NavLink to = "url.com" className="btn">View</NavLink>
                        <NavLink to = "url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src = {img1} alt = "image1"/>
                <h2 className="project-title">Project3</h2>
                <div className="project-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="pro-btn">
                        <NavLink to = "url.com" className="btn">View</NavLink>
                        <NavLink to = "url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projectcard