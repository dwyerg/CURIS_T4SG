import React from 'react';
import background from '../../assets/home_bg.png';
import { HeroContainer, HeroBg, img} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg style={{ backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', height: 800, backgroundSize: 'contain' }}>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
