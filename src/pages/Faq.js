import React from "react";
import './Faq.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ReactDOM from 'react-dom'

function Section1() {
  return (
    <div className="Title">
      <h1>General Questions</h1>
    </div>
    
  )
}

function Section2() {
  return (
    <div className="Title">
      <h1>Application and Recruitment Process</h1>
    </div>
    
  )
}

const answer1 = [
  { /*index: 0, */ description: "This student organization is dedicated to understanding public health concerns and working to advocate for public health in the local community. We accomplish this by partnering with different local governmental or  public health organizations to work on a project according to their needs. In the past, we’ve worked on policy briefs, research, resource gathering, social media campaigning and more. Additionally we work to enhance our understanding of current issues in public health through peer-led discussions and hosting guest speakers in our general meetings."},
  
];

const answer2 = [
  { /*index: 1, */ description: " Any undergraduate U of M student from any school."}
];

const answer3 = [
  { /*index: 1, */ description: " Yes, we are a School of Public Health organization but we welcome anyone from any major or school. We think that is actually a strong point of our organization having people across schools and disciplines that encourages more interesting dialogue."}
];

const answer4 = [
  { /*index: 1, */ description: " It means care in Latin. It can also be translated to “healthcare”. We named ourselves CURIS because we are an organization that cares for local public health issues and aims to have humility and compassion in the work that we do."}
];

const answer5 = [
  { /*index: 1, */ description: " We work on a variety of issues, including racial health disparities/health equity, mental health, domestic abuse, homelessness and more. In the past, we have worked with the Shelter Association of Washtenaw County on issues such as homelessness, job insecurity, and food insecurity. Last year, we partnered with Washtenaw Alive, NAMI, Washtenaw Health Initiative, SafeHouse Center, and the Program for Multicultural Health. We are currently in the process of finding partners for the 2021-2022 academic year who we can work with."}
];

const answer6 = [
  { /*index: 1, */ description: " We alternate between having General Body Meetings (GBMs) and Committee meetings throughout the year. GBMs are 3-4 pm every other Sunday. Committee meetings are every other week at various times based on the availability of the members within the committee."}
];

const answer7 = [
  { /*index: 1, */ description: " We will be mixing both in person and remote (Zoom) settings for our meetings. In person meetings will most likely be on Central Campus."}
];

const answer8 = [
  { /*index: 1, */ description: " CURIS is currently partnering with a variety of different organizations. So far, we have confirmed our partnerships with Washtenaw Health Initiative (WHI), Fresh Start Clubhouse, Childcare Network, Family Empowerment program, OCED and PMCH. These will be our 6 committees for the year."}
];

const answer9 = [
  { /*index: 1, */ description: " Depending on the organization’s needs and for the purposes of advocating for better public health, we have created educational infographics, written content for websites or social media, research projects, policy briefs, event planning, survey design and more. In each of our partnerships, we strive to promote health equity and awareness of public health issues within our members and the community. See the projects page on our website for more detailed information!"}
];

const answer10 = [
  { /*index: 1, */ description: " We have an hour-long general body meeting every other week. Committee meetings take place every other week to work on individual projects. There will also be some personal work responsibilities for an additional hour a week. In total, CURIS is about a 1-2 hour/week commitment. "}
];

const answer11 = [
  { /*index: 1, */ description: " We will start with attendance and general announcements. Then, we will have a continuing education presentation on a public health topic chosen by the presenter and possibly committee updates. Besides continuing eds, we will also be incorporating professional development events (resume workshops, career centered events) and guest speakers into the events we offer."}
];

const answer12 = [
  { /*index: 1, */ description: " We want to make sure that members are committed to the organization and willing to put in the time and commitment. We are looking for dedicated members who are responsible and can work as a team. Going through this process will help to tell us these things. We also do not want too many students in the organization for it can be hard to create unity and get to know each other more closely."}
];

const answer13 = [
  { /*index: 1, */ description: " The application for the 2021-22 school year is already open and is due on September 15th at 11:59pm! The url is tinyurl.com/curis2021 to access the application on Google Forms."}
];

const answer14 = [
  { /*index: 1, */ description: " We assess recruitment needs at the end of each semester and will recruit a number of slots based on our needs. We may open up recruitment during the winter semester if needed."}
];

const answer15 = [
  { /*index: 1, */ description: " We are currently looking to recruit around 15 members for the upcoming school year. Our new members will participate in our GBMs and be sorted into a committee with a community partner of their own preference."}
];

const answer16 = [
  { /*index: 1, */ description: " No, if you have shown yourself to be a committed member (through attendance and participation) you will remain in the club/organization"}
];
class Collapsible extends React.Component {
  constructor(props){
      super(props);
      const answerArray = props.answers.map((answer) => {
        return(
          <Answer /* index={answer.index} */ description={answer.description}></Answer>
        );
      });
      this.state = {
        open: false,
        answerArray: answerArray
    }
      this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e){
      this.setState({open: !this.state.open})
  }
  componentDidUpdate(){
  }
  render() {
    const {answerArray} = this.state;
    return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className='header'>
            {this.props.question}</div>
        {this.state.open ? (
            <div className='content'>
                {answerArray.map((answer) => {
                  return(
                  <Answer index={answer.props.index} description={answer.props.description}></Answer>
                  );
                })}
            </div>
            ) : null}
      </div>);
  }
}
const Answer = props => {
  return(
    (props.index %2 === 0 ) ?
    <div class = 'rowC'>
      <p>{props.description}</p>
    </div>
    :
    <div class = 'rowC'>
      <p>{props.description}</p>
    </div>
  )
} 
class FAQ extends React.Component {
  render() {
    const styles = {
      border: '1px solid rgba (0,0,0,0.5)'
    }
    return  (

    <div>
      <h2 style = {{textAlign: "center"}} > FAQS </h2>
      <p> 
      <Section1> General Questions</Section1>
        <Collapsible question = "Tell me a little bit about your organization:" answers = {answer1}>
        </Collapsible>
        <Collapsible question = "Who can apply?" answers = {answer2}>
        </Collapsible>
        <Collapsible question = "Are you affiliated with the School of Public Health?" answers = {answer3}>
        </Collapsible>
        <Collapsible question = "What does CURIS mean? " answers = {answer4}>
        </Collapsible>
        <Collapsible question = "What sort of issues do you work on?" answers = {answer5}>
        </Collapsible>
        <Collapsible question = "When are meetings?" answers = {answer6}>
        </Collapsible>
        <Collapsible question = "Where are meetings?" answers = {answer7}>
        </Collapsible>
        <Collapsible question = "Who is the partner?" answers = {answer8}>
        </Collapsible>
        <Collapsible question = "What have you done in the past?" answers = {answer9}>
        </Collapsible>
        <Collapsible question = "What will the time commitment of this organization look like?" answers = {answer10}>
        </Collapsible>
        <Collapsible question = "What will a typical meeting look like?" answers = {answer11}>
        </Collapsible>
        <h1> </h1>
      <Section2> Application and Recruitment Process </Section2>
        <Collapsible question = "Why is there an application and recruitment process? " answers = {answer12}>
        </Collapsible>
        <Collapsible question = "Where can I find the application? When is it due? " answers = {answer13}>
        </Collapsible>
        <Collapsible question = "If I do not get in, how can I reapply? " answers = {answer14}>
        </Collapsible>
        <Collapsible question = "How many spots are open? " answers = {answer15}>
        </Collapsible>
        <Collapsible question = "Do I have to reapply every year? " answers = {answer16}>
        </Collapsible>


        </p>
    </div>
    )
  }
}

ReactDOM.render(
  <FAQ/>,
  document.getElementById('root')
);
export default FAQ;
