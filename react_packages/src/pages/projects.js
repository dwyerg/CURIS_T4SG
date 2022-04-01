import './projects.css';
import React, {useState} from 'react';
//import App from './App';
import whi from '../assets/whi.png'
import safehouse from '../assets/safehouse.png'
import washalive from '../assets/washalive.png'
import bagf from '../assets/BAGfoundation.png'
import nami from '../assets/nami.png'
import tme from '../assets/tme.png'
import onwah from '../assets/onwah.jpeg'
import foodinsec from '../assets/foodinsecresearch.jpeg'
import jobsec from '../assets/jobsecresearch.png'
import housingresearch from '../assets/housingresearch.png'

const Projects = () => {

  class Collapsible extends React.Component {
    constructor(props){
        super(props);
        const projArray = props.projects.map((project) => {
          return(
              <Project index={project.index} imgUrl={project.imgUrl} description={project.description}></Project>
          );
        });
        this.state = {
          open: false,
          projArray: projArray
      }
        this.togglePanel = this.togglePanel.bind(this);
    }
  
    togglePanel(e){
        this.setState({open: !this.state.open})
    }
  
    componentDidUpdate(){
  
    }
  
    render() {
      const {projArray} = this.state;
      return (<div class='block'>
          <div onClick={(e)=>this.togglePanel(e)} className='header'>
              <h4>{this.props.yearStart}-{this.props.yearEnd}</h4></div>
          {this.state.open ? (
              <div className='content'>
                  {projArray.map((project) => {
                    return(
                    <Project index={project.props.index} imgUrl={project.props.imgUrl} description={project.props.description}></Project>
                    );
                  })}
              </div>
              ) : null}
        </div>);
    }
  }

  const Project = props => {
    return(
      (props.index % 2 === 0) ?
      <div class = 'rowC'>
        <img src={props.imgUrl} alt="" class="imgLeft"></img>
        <p class="right">{props.description}</p>
      </div>
      :
      <div class = 'rowC'>
        <p class="left">{props.description}</p>
        <img src={props.imgUrl} alt="" class="imgRight"></img>
      </div>
    );
  }

  const [ isOpen, setIsOpen ] = useState(false);

  const projectsList1920 = [
    {index: 0, imgUrl: onwah, description: "During One Night Without a Home, members of the University of Michigan and Ann Arbor communities gathered in the diag for a night of speakers and activities to help raise awareness and reduce stigmatization of homelessness. This event was hosted in partnership with the Shelter Association of Washtenaw County (SAWC) and MReach. You can find links to activities from this night and information about speakers below.\nSpeakers:\tVarious SAWC clients shared their individual experiences with homelessness\n\tGabby Morin - speaker from The Dot Org\n\tTrevor Betchel - speaker from Poverty Solutions\nActivities:\n" +
      "\tScenario based discussions about causes of homelessness:\n" +
      "\t\tCURIS members led small groups in discussion about a variety of theoretical scenarios that might lead to a person losing their housing.\n" +
      "\tSNAP Challenge activity for food insecurity awareness:\n" +
      "\t\tParticipants were divided into teams and given the challenge to buy a week’s worth of food to colfill government nutrition requirements on an average SNAP budget."},
    {index: 1, imgUrl: foodinsec, description: "Our committee researched the intersection between COVID-19 and growing food insecurity. As the pandemic has affected social determinants of health such as SES and employment, more populations have been experiencing food insecurity. Our article posted on Michigan Daily focuses on what resources are available for those who need help and how we can help as a community."},
    {index: 2, imgUrl: jobsec, description: "The Job Security committee (led by Emily Guo with Nisha, Vennela, Jenna) researched and wrote an article about the challenges that people experiencing homelessness face with finding stable jobs and possible interventions. This article was posted in the School of Public Health Pursuit blog. "},
    {index: 3, imgUrl: housingresearch, description: "Our committee is researched policies related to housing development in Ann Arbor as well as Washtenaw County in order to understand and raise awareness about affordable housing options available to affected individuals and families."}
  ]

  const projectsList2021 = [
    {index: 0, imgUrl: washalive, description: "Partnered with Washtenaw Alive Suicide Coalition, WA Survey committee is dedicated to providing mental health support to UofM students. Because of prevalence of mental health issues among college students and the difficulty of a remote school environment, our committee is creating an interactive mental health resource website for students. We will also be conducting surveys on awareness of resources available, how useful students feel those resources are and how COVID-19 has affected mental health."},
    {index: 1, imgUrl: bagf, description: "We are partnered with The Bethany Anne Galdes Foundation to help them decipher Michigan’s mental health policies as they apply to minors. The Bethany Anne Galdes Foundation has a goal of founding the Bethany House as an alternative to hospitalization for minors struggling with depression. Our research has helped determine what kinds of policy changes are necessary to support both evidence-based, depression-specific inpatient treatment and alternative options to hospitalization in crisis situations."},
    {index: 2, imgUrl: safehouse, description: "The SafeHouse Center is a non-profit organization that provides support and advocacy services to CURIS is currently working to help SafeHouse Center spread awareness about their resources and mission through social media and graphic design. We are currently working on graphics and social media campaigns to spread awareness about sexual assault, domestic violence, and LGBTQIA+ resources."},
    {index: 3, imgUrl: whi, description: "The Washtenaw Health Initiative (WHI) is “a voluntary collaboration between more than 200 individual and organizational stakeholders dedicated to improving the health of low-income, uninsured, and under-insured populations across Washtenaw County, Michigan.” In the summer of 2021, the Washtenaw Health Initiative will celebrate its tenth anniversary. At that event, the WHI would like to highlight major accomplishments and reinvigorate the community around shared objectives. To identify and better understand major accomplishments, as well as the challenges ahead, the committee interviewed key stakeholders, collected important historical documents to be used in the construction of an interactive timeline, and checked back on early projects to learn how they’ve evolved over time and what the impact has been."},
    {index: 4, imgUrl: nami, description: "We partnered with NAMI (Michigan), the National Alliance on Mental Illness, to help them complete a mental health services assessment for the Ypsilanti and Whitmore Lake areas. The mental health services assessment was needed to gain a better understanding of what resources are needed in these areas. The assessment included a survey, focus groups, and interviews with community members. Our committee helped review and edit the survey as well as the questions designed for the focus groups."},
    {index: 5, imgUrl: tme, description: "Track My Exposure was a startup questionnaire to help people calculate their risk of COVID-19 based on their daily habits and share the results with their friends. Committee members wrote blog posts on several COVID-19 related topics like COVID-19 in greek life, study spots, college students’ experiences, and the value of providing a risk score rather than relying on cognitive biases."}
  ]

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return  (
  <div>
    <div><h2>Our Projects</h2></div>
    <Collapsible yearStart = "2020" yearEnd = "2021" projects = {projectsList2021}></Collapsible>
    <Collapsible yearStart = "2019" yearEnd = "2020" projects = {projectsList1920}></Collapsible>
  </div>
  );
}

export default Projects;
