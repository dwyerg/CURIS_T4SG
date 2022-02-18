import React, {useState} from 'react';
import './StyleMembers.css';

import generalMembers from '../assets/gen_members.PNG';
import amy from '../assets/amy.PNG';
import emily from '../assets/emily.PNG';
import marilyn from '../assets/marilyn.PNG';
import geeta from '../assets/geeta.PNG';
import nishika from '../assets/nishika.PNG';
import claire from '../assets/claire.PNG';

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
      <centerAllCont>

        <h1>Meet Our Executive Board</h1>

        <div className="grid">

          <div className="imgAndName" onClick={toggleIsOpen} style={{ cursor: 'pointer' }} >
          <Wrapper>
              {children}
              {isOpen ?
                <div onClick={toggleIsOpen}>
                  <>

                  <div className="blueBg"></div>
                  <div className="innerBg"></div>

                  <img src={amy} alt="Amy, a Co-President of CURIS" className="bigImg"/>
                  <div className="bigName">
                    <h4>Amy</h4>
                    <h5>Co-President</h5>
                  </div>

                  <p className="sideText">Amy is a senior from Ann Arbor, MI double majoring in Neuroscience and Spanish. She hopes to become a physician and work with underserved populations after graduating and going to medical school. Amy joined CURIS in order to learn about public health issues and better understand the unique obstacles that her future patients will face. Outside of CURIS, Amy does neuroscience research and volunteers as a tutor. She also enjoys playing the piano in her free time.</p>

                  </>
                </div>
                : null}
            </Wrapper>

            <img src={amy} alt="Amy, a Co-President of CURIS" />
            <h4>Amy</h4>
            <h5>Co-President</h5>
          </div>

          <div className="imgAndName" onClick={toggleIsOpen2} style={{ cursor: 'pointer' }} >
          <Wrapper>
              {children}
              {isOpen2 ?
                <div onClick={toggleIsOpen2}>
                  <>

                  <div className="blueBg"></div>
                  <div className="innerBg"></div>

                  <img src={emily} alt="Emily, a Co-President of CURIS" className="bigImg"/>
                  <div className="bigName">
                    <h4>Emily</h4>
                    <h5>Co-President</h5>
                  </div>

                  <p className="sideText">Amy is a senior from Ann Arbor, MI double majoring in Neuroscience and Spanish. She hopes to become a physician and work with underserved populations after graduating and going to medical school. Amy joined CURIS in order to learn about public health issues and better understand the unique obstacles that her future patients will face. Outside of CURIS, Amy does neuroscience research and volunteers as a tutor. She also enjoys playing the piano in her free time.</p>

                  </>
                </div>
                : null}
            </Wrapper>

            <img src={emily} alt="Emily, a Co-President of CURIS" />
            <h4>Emily</h4>
            <h5>Co-President</h5>
          </div>

          <div className="imgAndName">
            <img src={marilyn} alt="Marilyn, the Vice-President of CURIS" />
            <h4>Marilyn</h4>
            <h5>Vice-President</h5>
          </div>
          <div className="imgAndName">
            <img src={geeta} alt="Geeta, the Secretary of CURIS" />
            <h4>Geeta</h4>
            <h5>Secretary</h5>
          </div>
          <div className="imgAndName">
            <img src={nishika} alt="Nishika, the Treasurer and Education Chair of CURIS" />
            <h4>Nishika</h4>
            <h5>Treasurer/Education Chair</h5>
          </div>
          <div className="imgAndName">
            <img src={claire} alt="Claire, the Social and Recruitment Chair of CURIS" />
            <h4>Claire</h4>
            <h5>Social/Recruitment Chair</h5>
          </div>
        </div>

        <h1>General Members</h1>
        <img src={generalMembers} alt="Zoom screenshot of all of the general members in CURIS!" />

      </centerAllCont>
      <h3>2020-2021</h3>

    </>
  );
};

export default Members;
