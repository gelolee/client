import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import Projectcard from '../components/Projectcard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading = "PROJECTS"/>
      <Projectcard/>
      <Footer/>
    </div>
  )
}

export default Project