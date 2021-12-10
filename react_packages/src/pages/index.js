import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParallaxQuote from '../components/ParallaxQuote';
import Purpose from '../components/Purpose';

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
      <Purpose />
    </>
  );
};

export default Home;
