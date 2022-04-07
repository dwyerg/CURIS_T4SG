import { SRLWrapper } from "simple-react-lightbox";
import '../../../pages/StyleMembers.css';
import marilyn from '../../../assets/marilyn.jpg';
import nishika from '../../../assets/nishika.jpg';
import geeta from '../../../assets/geeta.jpg';
import claire from '../../../assets/claire.jpg';
import srijani from '../../../assets/srijani.jpg';
import emma from '../../../assets/emma.jpg';

import samantha from '../../../assets/samantha.jpg';
import vaishnavi from '../../../assets/vaishnavi.jpg';
import christina from '../../../assets/christina.jpeg';
import aditi from '../../../assets/aditi.jpg';
import vivian from '../../../assets/vivian.jpg';
import lakshmi from '../../../assets/lakshmi.jpg';
import daisey from '../../../assets/daisey.jpg';
import avani from '../../../assets/avani.jpg';

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

        <h1>Meet Our Committee Leads</h1>
        <div className="grid">
          <div className="imgAndName2">
            <div className = "imgCont"><img src={samantha} width="320px" alt="Samantha Gordon, the child care network lead of CURIS" /></div>
            <h4 className="h4Members">Samantha Gordon</h4>
            <h5>Child Care Network</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={vaishnavi} width="320px" alt="Vaishnavi Krishnan, a family empowerment program lead of CURIS" /></div>
            <h4 className="h4Members">Vaishnavi Krishnan</h4>
            <h5>Family Empowerment Program</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={christina} width="320px" alt="Christina Schafer, a family empowerment program lead of CURIS" /></div>
            <h4 className="h4Members">Christina Schafer</h4>
            <h5>Family Empowerment Program</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={aditi} width="320px" alt="Aditi Vijendra, the fresh start clubhouse lead of CURIS" /></div>
            <h4 className="h4Members">Aditi Vijendra</h4>
            <h5>Fresh Start Clubhouse</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={vivian} width="320px" alt="Vivian Chen, the Hope clinic lead of CURIS" /></div>
            <h4 className="h4Members">Vivian Chen</h4>
            <h5>Hope Clinic</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={daisey} width="320px" alt="Daisey Yu, a program for multicultural health lead of CURIS" /></div>
            <h4 className="h4Members">Daisey Yu</h4>
            <h5>Program for Multicultural Health</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={lakshmi} width="320px" alt="Lakshmi Meyyappan, a program for multicultural health lead of CURIS" /></div>
            <h4 className="h4Members">Lakshmi Meyyappan</h4>
            <h5>Program for Multicultural Health</h5>
          </div>
          <div className="imgAndName2">
            <div className = "imgCont"><img src={avani} width="320px" alt="Avani Samandur, the Washtenaw health initiative lead of CURIS" /></div>
            <h4 className="h4Members">Avani Samandur</h4>
            <h5>Washtenaw Health Initiative</h5>
          </div>
        </div>


      </div>
    </SRLWrapper>

  );
}

export default Lightbox;
