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
                      /*<div className="imgAndName2">
            <div className = "imgCont"><img src={marilyn} width="250px" alt="I joined CURIS my freshman year because I was interested in public health, specifically in working with community partners in the Washtenaw County area to create sustainable solutions! I hope to become a physician who works to promote health equity and improve the US healthcare system. I haven't completely decided how I'll do this in the future, but I am interested in health policy, community interventions, and working at community health centers. Some of my hobbies include taking care of houseplants and trying new foods with friends!" className="smallImg" /></div>
            <h4 className="h4Members">Marilyn Li</h4>
            <h5>President</h5>*/
        )
      })}
    </section>

    <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</Button>

    </>
  );
};

export default ImageSlider;
