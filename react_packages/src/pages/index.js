import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParallaxQuote from '../components/ParallaxQuote';
import Purpose from '../components/Purpose';
import Team from '../components/homeComponents/Team';
import ImageSlider from '../components/homeComponents/Slider/ImgSlider.js'
import { SliderData } from '../components/homeComponents/Slider/SliderData.js';

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
      <ImageSlider slides={SliderData} />
    </>
  );
};

export default Home;
