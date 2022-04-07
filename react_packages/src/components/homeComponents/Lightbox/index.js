import { SRLWrapper } from "simple-react-lightbox";
import '../../../pages/StyleMembers.css';
import marilyn from '../../../assets/marilyn.jpg';
import nishika from '../../../assets/nishika.jpg';
import geeta from '../../../assets/geeta.jpg';
import claire from '../../../assets/claire.jpg';
import srijani from '../../../assets/srijani.jpg';
import emma from '../../../assets/emma.jpg';

function Lightbox() {
  return (

    <SRLWrapper>
      <div className='centerAllCont'>
        <h1>Meet Our Executive Board</h1>
        <div className="grid">
          <div className="imgAndName2">
            <div className = "imgCont"><img src={marilyn} width="250px" alt="Marilyn Li, the President of CURIS" className="smallImg" /></div>
            <h4 className="h4Members">Marilyn Li</h4>
            <h5>President</h5>
          </div>
          <div className="imgAndName2">
          <div className = "imgCont"><img src={nishika} width="250px" alt="Nishika Patel, the internal vice president of CURIS" className="smallImg"/></div>
            <h4 className="h4Members">Nishika Patel</h4>
            <h5>Internal VP</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={geeta} width="250px" alt="Geeta Rastogi, the external vice president of CURIS" /></div>
            <h4 className="h4Members">Geeta Rastogi</h4>
            <h5>External VP</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={claire} width="250px" alt="Claire Gleason, the social chair of CURIS" /></div>
            <h4 className="h4Members">Claire Gleason</h4>
            <h5>Social Chair</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={srijani} width="320px" alt="Srijani Sengupta, the secretary of CURIS" /></div>
            <h4 className="h4Members">Srijani Sengupta</h4>
            <h5>Secretary</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={emma} width="290px" alt="Emma Suh, the treasurer of CURIS" /></div>
            <h4 className="h4Members">Emma Suh</h4>
            <h5>Treasurer</h5>
          </div>
        </div>
      </div>
    </SRLWrapper>

  );
}

export default Lightbox;
