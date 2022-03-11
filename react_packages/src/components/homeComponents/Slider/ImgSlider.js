import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from './Button';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearnMore from '../../../pages/learnMore';

const ImageSlider = ({ slides }, props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
    <div><h2 className = "home_header">See Us In Action</h2></div>
    <section className='slider'>
      <FaChevronLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt = 'Team images' className='slide_image'/>)}
          </div>
        )
      })}
    </section>

    <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</Button>

    </>
  );
};

export default ImageSlider;
