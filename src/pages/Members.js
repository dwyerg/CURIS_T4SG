import React, {useState} from 'react';
import './StyleMembers.css';
import Lightbox from '../components/homeComponents/Lightbox';

import generalMembers from '../assets/gen_members.PNG';
import aditi from '../assets/aditi.jpg';
import avani from '../assets/avani.jpg';
import christina from '../assets/christina.jpeg';
import claire from '../assets/claire.jpg';
import daisey from '../assets/daisey.jpg';
import emma from '../assets/emma.jpg';
import geeta from '../assets/geeta.jpg';
import lakshmi from '../assets/lakshmi.jpg';
import marilyn from '../assets/marilyn.jpg';
import nishika from '../assets/nishika.jpg';
import samantha from '../assets/samantha.jpg';
import srijani from '../assets/srijani.jpg';
import vaishnavi from '../assets/vaishnavi.jpg';
import vivian from '../assets/vivian.jpg';

const Members = ({children, src, alt, Wrapper = 'div'}) => {

  const [ isOpen, setIsOpen,
          isOpen2 ] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleIsOpen2 = () => {
    setIsOpen(!isOpen2);
  };

  return (
    <>
      <Lightbox />

      <div className='centerAllCont'>

      <h1>General Members</h1>
      <img src={generalMembers} alt="Zoom screenshot of all of the general members in CURIS!" className="generalMembers" />

      </div>
      <h3>2020-2021</h3>

    </>
  );
};

export default Members;
