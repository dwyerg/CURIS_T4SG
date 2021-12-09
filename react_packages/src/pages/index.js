import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {

  //nav hamburger
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar toggle={toggle} />
      <div className="hero">
        <HeroSection/>
      </div>
      <div className = "parallax_content">
        <p>"Our mission is to advocate <b>to improve</b> public health in the local community through education, outreach, and practical solutions."</p>
      </div>
    </>
  );
};

export default Home;
