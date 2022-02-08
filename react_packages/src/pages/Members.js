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

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <centerAllCont>

        <h1>Meet Our Executive Board</h1>

        <div className="grid">
          <div className="imgAndName" onClick={toggleIsOpen} style={{ cursor: 'pointer' }} >

          <Wrapper style={{
    					position: 'fixed',
    					top: '0',
    					left: '0',
              backgroundColor: '#d2ebf4',
              width: '100vw',
              height: '100vh',
              paddingLeft: '10%',
              paddingTop: '5%'
    				}}>
              {children}
              {isOpen ?
                <div onClick={toggleIsOpen}>
                  <img src={amy} alt="Amy, a Co-President of CURIS" />
                  <h4 style={{ color: 'white', float: 'right' }}>Amy</h4>
                  <h5>Co-President</h5>
                </div>
                : null}
            </Wrapper>

            <img src={amy} alt="Amy, a Co-President of CURIS" />
            <h4>Amy</h4>
            <h5>Co-President</h5>

          </div>

          <div className="imgAndName">
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
