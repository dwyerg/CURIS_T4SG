import React from 'react';
import { PurposeImg, AllPurposeImgs } from './PurposeElements';
import { Parallax } from 'react-parallax';
import advocacyImg from '../../assets/advocacy.PNG'
import supportImg from '../../assets/support.PNG'
import aidImg from '../../assets/aid.PNG'

const Purpose = () => {
  return (
    <>
      <Parallax strength={800}>
        <div className = "home_header"><h2>Our Purpose</h2></div>
      </Parallax>
      <AllPurposeImgs>
        <PurposeImg>
          {/*Photo by Kate Kalvach on Unsplash*/}
          <img src = {advocacyImg} alt='People sit in a group' />
          <p>Advocacy</p>
        </PurposeImg>
        <PurposeImg>
          {/*Photo by Hannah Busing on Unsplash*/}
          <img src = {supportImg} alt='Hands piled together in middle of group' />
          <p>Support</p>
        </PurposeImg>
        <PurposeImg>
          {/*Photo by Austin Kehmeier on Unsplash*/}
          <img src = {aidImg} alt='Two hands clasped from opposite sides.' />
          <p>Aid</p>
        </PurposeImg>
      </AllPurposeImgs>
    </>
  );
};

export default Purpose;
