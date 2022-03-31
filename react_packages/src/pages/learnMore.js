//import './App.css';
import './learnMore.css';
import claire from '../assets/claire.jpg';

const LearnMore = () => {
  return (
    <>
      <centerAllCont>

        <h1>What Do We Do?</h1>
        <div className="row">
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 id = "w">Consult</h2>
            <p id = "w" style={{ textAlign: "center"}}>We <b>aid local organizations</b> in their efforts to improve public health</p>
          </div>
          <div className="column" style={{ backgroundColor: '#e6f2f6'}}>
            <h2 id="b2">Educate</h2>
            <p id="b2" style={{ textAlign: "center"}}>We <b>raise awareness</b> of various public health issues relevant to the local area</p>
          </div>
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 id = "w">Learn</h2>
            <p id = "w" style={{ textAlign: "center"}}>We strive to continuously <b>advance our understanding</b> of public health issues</p>
          </div>
        </div>
        <h1>Interested in Becoming a Member?</h1>
        <h4>Here are some responsibilities of membership:</h4>
        <div className="rectangle" id="r1">
          <img src={claire} alt="claire" style={{float: "left"}}/>
          <h3>Attendance</h3>
          <p>At <b>general body meetings, committee meetings</b> (every other week respectively) and our <b>social events</b></p>

        </div>


      </centerAllCont>

    </>
  );
}

export default LearnMore;
