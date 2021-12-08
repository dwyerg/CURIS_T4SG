import React from 'react';
import background from '../../assets/home_bg.png';
import { HeroContainer, HeroBg, img} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <img src={background} alt= "CURIS Team" />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
