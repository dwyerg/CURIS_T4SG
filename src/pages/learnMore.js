//import './App.css';
import './learnMore.css';
// import escape_room from '../assets/escape_room.png';
import group_1 from '../assets/group_1.jpg';
import group_2 from '../assets/group_2.JPG';
import group3 from '../assets/group3.JPG';
import claire from '../assets/claire.jpg';
import ContactForm from '../components/ContactForm/ContactUs.js';


const LearnMore = () => {
  return (
    <>
      <centerAllCont>

        <h1 className="hh1">What Do We Do?</h1>
        <div className="row">
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 className="hh2 col white">Consult</h2>
            <h3 className="hh3 col white">We <span style={{fontWeight: 'bold'}}>aid local organizations</span> in their efforts to improve public health</h3>
          </div>
          <div className="column" style={{ backgroundColor: '#e6f2f6'}}>
            <h2 className="hh2 col">Educate</h2>
            <h3 className="hh3 col">We <b>raise awareness</b> of various public health issues relevant to the local area</h3>
          </div>
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 className="hh2 col white">Learn</h2>
            <h3 className="hh3 col white">We strive to continuously <b>advance our understanding</b> of public health issues</h3>
          </div>
        </div>

        <h1 className="hh1 becoming">Interested in Becoming a Member?</h1>
        <h4 className="hh4">Here are some responsibilities of membership:</h4>
        <div>
          <div className="rectangle">
            <div className="imgRect"><img src={group_1} alt="Members at meeting" style={{float: "right"}} className="img right"/></div>
            <h2 className="hh2 rect">Attendance</h2>            
            <div class="vl" style={{float: "left"}}></div>
            <div className="hh4 rect">At <b>general body meetings, committee meetings</b> (every other week, respectively) and our <b>social events</b></div>
          </div>
          <div className="rectangle">
            <img src={group_2} alt="Members at Festifall collaborating to get new members" className="img left"/>
            <h2 className="hh2 rect">Collaboration</h2>
            <div class="vl collab" style={{float: "left"}}></div>
            <div className="hh4 rect">With fellow committee members in <b>projects</b> to meet needs of community partners</div>
          </div>
          <div className="rectangle">
            <img src={group3} alt="Members presenting on 'Mental Health as a Public Issue' at a meeting" style={{float: "right"}} className="img right"/>
            <h2 className="hh2 rect">Presentation</h2>
            <div class="vl" style={{float: "left"}}></div>
            <div className="hh4 rect">About continuing education on <b>public health topics of your interest</b> to educate others</div>
          </div>
        </div>

        <div className="container">
          {/* <img src={escape_room} alt="Members at an escape room together"/> */}
          <a href="#ContactForm">
            <button className="btn">Join Us!</button>
          </a>
        </div>

      </centerAllCont>
      <a name="ContactForm"><ContactForm/></a>

    </>
  );
}

export default LearnMore;
