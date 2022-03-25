import React, {useState} from 'react';
import './StyleMembers.css';

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
      <div className='centerAllCont'>

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

                  <img src={marilyn} alt="Marilyn Li, the President of CURIS" className="bigImg"/>
                  <div className="bigName">
                    <h4>Marilyn Li</h4>
                    <h5>President</h5>
                  </div>

                  <p className="sideText">
                    I joined CURIS my freshman year because I was interested in public health, specifically in working with community partners in the Washtenaw County area to create sustainable solutions! I hope to become a physician who works to promote health equity and improve the US healthcare system. I haven't completely decided how I'll do this in the future, but I am interested in health policy, community interventions, and working at community health centers. Some of my hobbies include taking care of houseplants and trying new foods with friends!
                  </p>

                  </>
                </div>
                : null}
            </Wrapper>

            <img src={marilyn} alt="Marilyn Li, the President of CURIS" className="smallImg" />
            <h4>Marilyn Li</h4>
            <h5>President</h5>
          </div>

          <div className="imgAndName" onClick={toggleIsOpen2} style={{ cursor: 'pointer' }} >
          <Wrapper>
              {children}
              {isOpen2 ?
                <div onClick={toggleIsOpen2}>
                  <>

                  <div className="blueBg"></div>
                  <div className="innerBg"></div>

                  <img src={nishika} alt="Nishika Patel, the internal vice president of CURIS" className="bigImg"/>
                  <div className="bigName">
                    <h4>Nishika Patel</h4>
                    <h5>Internal VP</h5>
                  </div>

                  <p className="sideText">
                    I joined CURIS because I was passionate about public health issues and wanted to make a tangible impact in my local community through partnerships! An added bonus of joining was getting to see how local community organizations function and bring about change. My future goals are to become a physician who not only takes care of individual patients' health but also works to address the structural issues affecting population health. I love to cook and paint sunsets for fun!
                  </p>

                  </>
                </div>
                : null}
            </Wrapper>

            <img src={nishika} alt="Nishika Patel, the internal vice president of CURIS" className="smallImg"/>
            <h4>Nishika Patel</h4>
            <h5>Internal VP</h5>
          </div>

          <div className="imgAndName">
            <img src={geeta} alt="Geeta Rastogi, the external vice president of CURIS" />
            <h4>Geeta Rastogi</h4>
            <h5>External VP</h5>
          </div>
          <div className="imgAndName">
            <img src={claire} alt="Claire Gleason, the social chair of CURIS" />
            <h4>Claire Gleason</h4>
            <h5>Social Chair</h5>
          </div>
          <div className="imgAndName">
            <img src={srijani} alt="Srijani Sengupta, the secretary of CURIS" />
            <h4>Srijani Sengupta</h4>
            <h5>Secretary</h5>
          </div>
          <div className="imgAndName">
            <img src={emma} alt="Emma Suh, the treasurer of CURIS" />
            <h4>Emma Suh</h4>
            <h5>Treasurer</h5>
          </div>
        </div>

        <h1>Meet Our Committee Leads</h1>
        <div className="grid">
          <div className="imgAndName">
            <img src={samantha} alt="Samantha Gordon, the child care network lead of CURIS" />
            <h4>Samantha Gordon</h4>
            <h5>Child Care Network</h5>
          </div>
          <div className="imgAndName">
            <img src={vaishnavi} alt="Vaishnavi Krishnan, a family empowerment program lead of CURIS" />
            <h4>Vaishnavi Krishnan</h4>
            <h5>Family Empowerment Program</h5>
          </div>
          <div className="imgAndName">
            <img src={christina} alt="Christina Schafer, a family empowerment program lead of CURIS" />
            <h4>Christina Schafer</h4>
            <h5>Family Empowerment Program</h5>
          </div>
          <div className="imgAndName">
            <img src={aditi} alt="Aditi Vijendra, the fresh start clubhouse lead of CURIS" />
            <h4>Aditi Vijendra</h4>
            <h5>Fresh Start Clubhouse</h5>
          </div>
          <div className="imgAndName">
            <img src={vivian} alt="Vivian Chen, the Hope clinic lead of CURIS" />
            <h4>Vivian Chen</h4>
            <h5>Hope Clinic</h5>
          </div>
          <div className="imgAndName">
            <img src={daisey} alt="Daisey Yu, a program for multicultural health lead of CURIS" />
            <h4>Daisey Yu</h4>
            <h5>Program for Multicultural Health</h5>
          </div>
          <div className="imgAndName">
            <img src={lakshmi} alt="Lakshmi Meyyappan, a program for multicultural health lead of CURIS" />
            <h4>Lakshmi Meyyappan</h4>
            <h5>Program for Multicultural Health</h5>
          </div>
          <div className="imgAndName">
            <img src={avani} alt="Avani Samandur, the Washtenaw health initiative lead of CURIS" />
            <h4>Avani Samandur</h4>
            <h5>Washtenaw Health Initiative</h5>
          </div>
        </div>

        <h1>General Members</h1>
        <img src={generalMembers} alt="Zoom screenshot of all of the general members in CURIS!" />

      </div>
      <h3>2020-2021</h3>

    </>
  );
};

export default Members;
