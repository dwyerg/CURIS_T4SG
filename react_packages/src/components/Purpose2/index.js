import React, { Component } from 'react';

import { PurposeImg, AllPurposeImgs, PurposeText, GreyLine, SubPurposeCont } from './PurposeElements';
import advocacyImg from '../../assets/advocacy.PNG'
import supportImg from '../../assets/support.PNG'
import aidImg from '../../assets/aid.PNG'

class Purpose2 extends Component {

  state = {
    visible: false
  };

  render() {
      return (
        <div className="showAndHide">

        <div className = "home_header"><h2>Our Values</h2></div>

        <AllPurposeImgs>
        <SubPurposeCont>
          <PurposeImg>
              <button onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}>
                <img src = {advocacyImg} alt='People sit in a group' />
                <p>Perseverance</p>
              </button>
              {this.state.visible ? <PurposeText>We will not be complacent with our work. But instead we will continue in our commitment to advocacy and education in improving public health, building upon previous skills, knowledge and creativity.</PurposeText> : null}
          </PurposeImg>
          <GreyLine></GreyLine>
          <PurposeImg>
              <button onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}>
                <img src = {supportImg} alt='Hands piled together in middle of group' />
                <p>Compassion</p>
              </button>
              {this.state.visible ? <PurposeText>We are committed to understanding others with empathy. We will use this mindset when helping our local community and when alleviating issues.</PurposeText> : null}
          </PurposeImg>
          <GreyLine></GreyLine>
          <PurposeImg>
              <button onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}>
                <img src = {aidImg} alt='Two hands clasped from opposite sides.' />
                <p>Open-Mindedness</p>
              </button>
              {this.state.visible ? <PurposeText>We strive to learn from different people, experiences, and perspectives, and are dedicated to the concepts of cultural humility and consistent self-evaluation.</PurposeText> : null}
          </PurposeImg>
        </SubPurposeCont>
        </AllPurposeImgs>

        </div>
      );

  }
}

export default Purpose2;
