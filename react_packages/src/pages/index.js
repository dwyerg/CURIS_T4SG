import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParallaxQuote from '../components/ParallaxQuote';
import Purpose from '../components/Purpose';
import Team from '../components/homeComponents/Team';

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
      <Team />
    </>
  );
};

export default Home;
