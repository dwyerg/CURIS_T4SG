import React, { useState } from 'react';
//import Navbar from '../components/Navbar';
//import MobileNav from '../components/MobileNav';
import ParallaxQuote from '../components/ParallaxQuote';
import Purpose2 from '../components/Purpose2';
import ContactForm from '../components/ContactForm/ContactUs.js';
import ImageSlider from '../components/homeComponents/Slider/ImgSlider.js';
import { SliderData } from '../components/homeComponents/Slider/SliderData.js';

const Home = () => {

  //nav hamburger
  // const [isOpen, setIsOpen] = useState(false);
  //
  // const toggle = () => {
  //     setIsOpen(!isOpen);
  // };


  return (
    <>
      <ParallaxQuote />
      <Purpose2 />
      <ImageSlider slides={SliderData} />
      <ContactForm />
    </>
  );
};

export default Home;
