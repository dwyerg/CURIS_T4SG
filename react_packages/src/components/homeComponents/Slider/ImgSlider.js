import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaChevronLeft className='left-arrow' />
      <FaChevronRight className='right-arrow' onCLick={nextSlide} />
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt = 'Team images' className='slide_image'/>
      })}
    </section>
  );
};

export default ImageSlider;
