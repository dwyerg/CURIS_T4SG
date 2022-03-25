import React from "react";
import './Faq.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ReactDOM from 'react-dom'

function Title() {
  return (
    <div className="Title">
      <h1>General Questions</h1>
    </div>
    
  )
}


const answersList = [
  {index: 0, description: "This student organization is dedicated to understanding public health concerns and working to advocate for public health in the local community. We accomplish this by partnering with different local governmental or  public health organizations to work on a project according to their needs. In the past, we’ve worked on policy briefs, research, resource gathering, social media campaigning and more. Additionally we work to enhance our understanding of current issues in public health through peer-led discussions and hosting guest speakers in our general meetings."},
  {index: 1, description: " Any undergraduate U of M student from any school."}
];

class Collapsible extends React.Component {
  constructor(props){
      super(props);
      const answerArray = props.answers.map((answer) => {
        return(
          <Answer index={answer.index} description={answer.description}></Answer>
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
                {/* <img src={projArray[0].props.imgUrl} alt=""></img>
                {projArray[0].props.description} */}
            </div>
            ) : null}
      </div>);
  }
}

const Answer = props => {
  return(
    (props.index == 0 ) ?
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
    return  (
    <div>
      <Title> General Questions</Title>
        <Collapsible question = "Tell me a little bit about your organization:" answers = {answersList}>
        </Collapsible>
        <Collapsible question = "Who can apply?" answers = {answersList}>
        </Collapsible>
    </div>
    )
  }
}


ReactDOM.render(
  <FAQ/>,
  document.getElementById('root')
);

export default FAQ;

//import Navbar from './components/Navbar';
// import Home from './pages/index';
// import Members from './pages/Members';
// import Projects from './pages/projects';
// import LearnMore from './pages/learnMore';

function App() {
  return (
    <Navbar />
    // <Router>
    // <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/members" element={<Members />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/learnmore" element={<LearnMore />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
