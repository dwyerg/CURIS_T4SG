import './App.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import whi from './whi.png'
import safehouse from './safehouse.jpeg'

const projectsList = [
  {index: 0, imgUrl: whi, description: "The Washtenaw Health Initiative (WHI) is a \"voluntary collaboration between more than 200 individual and organizational stakeholders dedicated to improving the health of low-income, uninsured, and under-insured populations across Washtenaw County, Michigan.\""},
  {index: 1, imgUrl: safehouse, description: "The Safehouse Center is a non-profit organization that provides support and advocacy services for survivors of sexual assault and domestic violence and their children, and to work relentlessly to change the systems and attitudes that allow this abuse to continue."}
];

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
    return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className='header'>
            {this.props.yearStart}-{this.props.yearEnd}</div>
        {this.state.open ? (
            <div className='content'>
                {projArray.map((project) => {
                  return(
                  <Project index={project.props.index} imgUrl={project.props.imgUrl} description={project.props.description}></Project>
                  );
                })}
                {/* <img src={projArray[0].props.imgUrl} alt=""></img>
                {projArray[0].props.description} */}
            </div>
            ) : null}
      </div>);
  }
}

const Project = props => {
  return(
    (props.index % 2 === 0) ?
    <div class = 'rowC'>
      <img src={props.imgUrl} alt=""></img>
      <p>{props.description}</p>
    </div>
    :
    <div class = 'rowC'>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt=""></img>
    </div>
  )
}

// Project.propTypes = {
//   imgUrl: React.PropTypes.string,
//   description: React.PropTypes.string
// }

class Test extends React.Component {
  // pass into collapsible: list of objects that have image and description
  render() {
    return  (
    <div>
      <div>Our Projects</div>
        <Collapsible yearStart = "2020" yearEnd = "2021" projects = {projectsList}>
        </Collapsible>
        <Collapsible yearStart = "2019" yearEnd = "2020" projects = {projectsList}>
        </Collapsible>
    </div>
    )
  }
}


ReactDOM.render(
  <Test />,
  document.getElementById('root')
);

export default App;
