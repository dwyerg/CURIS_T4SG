import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParallaxQuote from '../components/ParallaxQuote';
import { Parallax } from 'react-parallax';
import bgImage from '../assets/home_bg.png'

const Home = () => {

  //nav hamburger
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar toggle={toggle} />
      <ParallaxQuote />
      <div class = "home_header"><h2>Our Purpose</h2></div>
    </>
  );
};

export default Home;
