import React from 'react';
import { TeamImg, AllTeamImgs } from './TeamElements';
import advocacyImg from '../../../assets/advocacy.jpg'
import supportImg from '../../../assets/support.jpg'
import aidImg from '../../../assets/aid.jpg'


const Team = () => {
  return (
    <>
      <div className = "home_header"><h2>Meet the Team</h2></div>
      <AllTeamImgs>
        <TeamImg>
          {/*Photo by Kate Kalvach on Unsplash*/}
          <img src = {advocacyImg} height='250' alt='People sit in a group' />
        </TeamImg>
        <TeamImg>
          {/*Photo by Hannah Busing on Unsplash*/}
          <img src = {supportImg} height='250' alt='Hands piled together in middle of group' />
        </TeamImg>
        <TeamImg>
          {/*Photo by Austin Kehmeier on Unsplash*/}
          <img src = {aidImg} width='300' alt='Two hands clasped from opposite sides.' />
        </TeamImg>
      </AllTeamImgs>
    </>
  );
};

export default Team;
