import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import Forms from '../components/Forms';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading = "CONTACT ME"/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default Contact