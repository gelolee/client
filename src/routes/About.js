import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import Aboutme from '../components/Aboutme';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading = "ABOUT"/>
      <Aboutme/>
      <Footer/>
    </div>
  )
}

export default About