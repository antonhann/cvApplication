import React, { Component } from "react";
import "./style/App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { v4 as uuidv4 } from 'uuid';
// import Education from "./components/Education";
class App extends Component {
  constructor() {
    super();
    const Hunter = uuidv4()
    const Baruch = uuidv4()
    const NhaTrangOne = uuidv4()
    const JacobRiis = uuidv4()
    const Hanni = uuidv4()
    const SortV = uuidv4()
    const Stock = uuidv4()
    this.state = {
      portfolio: {
      fn: "Anton",
      ln: "Ha",
      city: "NYC",
      number: "6464313101",
      email: "antonha016@gmail.com",
      },
      education: [
        {
          id: Hunter,
          university: 'Hunter College',
          major: 'Computer Science',
          gpa: '4.0',
          duration: 'Aug 22 - current',
        },
        {
          id: Baruch,
          university: 'Baruch College',
          major: 'Accounting',
          gpa: '',
          duration: 'Aug 21 - Aug 22',
        },
      ],
      experience: [
        {
          id: NhaTrangOne,
          company: 'Nha Trang One',
          title: 'Head Waiter / Manager',
          duration: 'Jun 2020 - current',
          location: 'New York, New York',
          description: '',
        },
        {
          id: JacobRiis,
          company: 'Jacob Riis Settlement',
          title: 'Camp Counselor',
          duration: 'Jun 2021 - Oct 2021',
          location: 'New York, New York',
          description: '',
        },
      ],
      project: [
        {
          id: SortV,
          title: "Sorting Visualizer",
          skills: "HTML, CSS, Javascript",
          repository: "antonhann.github.io/sortvisualizer/",
          description: "",
        },
        {
          id: Hanni,
          title: "Hanni Bot",
          skills: "Python",
          repository: "github.com/antonhann/hannibot",
          description: "Discord Bot",
        },
        {
          id: Stock,
          title: "Stock Portfolio Website",
          skills: "Python, Flask, Django",
          repository: "github.com/antonhann/Finance-Project",
          description: "",
        },
      ],
    };
  }
  handleInputChange = (e) => {
    const {name , value} = e.target
    this.setState((prevState) => ({
      ...prevState,
        portfolio:  {
        ...prevState.portfolio,
        [name]: value
      }
    }));
  }
  resetState = () => {
    this.setState(() => ({
      portfolio: {
        fn: "",
        ln: "",
        city: "",
        number: "",
        email: "",
        },
        education: [],
        experience: [],
        project: [],
    }));
  }
  handleArrayChange = (property, index, e) => {
    const {name , value} = e.target
    this.setState((prevState) => ({
      ...prevState,
      [property]: [
        ...prevState[property].slice(0, index),{
          ...prevState[property][index],
          [name]: value
        }
        ,...prevState[property].slice(index + 1),
      ],
    }));
  }
  handleItemRemove = (id, property) =>{
    this.setState((prevState) => ({
      ...prevState,
      [property]: this.state[property].filter(function(item){
          return item.id !== id;
      }),
    }));
  }
  // handleBulletRemove = (id, property) =>{
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     [property]: [...prevState[property],
  //     this.state[property]description].filter(function(item){
  //         return item.id !== id;
  //     }),]
  //   }));
  // }
  handleEducationItemAdd = () => {
    const id = uuidv4();
    this.setState((prevState) => ({
      ...prevState,
      education: [...prevState.education,
        {
          id: id,
          university: '',
          major: '',
          gpa: '',
          duration: '',
        },
      ]
    }));
  };
  handleExperienceItemAdd = () => {
    const id = uuidv4();
    this.setState((prevState) => ({
      ...prevState,
      experience: [...prevState.experience,
        {
          id: id,
          company: '',
          title: '',
          duration: '',
          location: '',
          description: '',
        },
      ]
    }));
  }
  handleProjectItemAdd = () => {
    const id = uuidv4();
    this.setState((prevState) => ({
      ...prevState,
      project: [...prevState.project,
        {
          id: id,
          title: "",
          skills: "",
          repository: "",
          description: "",
        },
      ]
    }));
  };
  render() {
    const {
      education,
      portfolio,
      experience,
      project
      } = this.state
    return (
      <div className = "all">
          <Form 
          portfolio = {portfolio}
          experience = {experience} 
          education = {education} 
          project = {project}
          handleItemRemove = {this.handleItemRemove} 
          onEducationAdd = {this.handleEducationItemAdd} 
          onExperienceAdd = {this.handleExperienceItemAdd}
          onProjectAdd = {this.handleProjectItemAdd}
          handleArrayChange = {this.handleArrayChange} 
          handleInputChange = {this.handleInputChange}
          resetState = {this.resetState}
          />
        <div className = "display">
          <Display portfolio = {portfolio} experience = {experience} education = {education} project = {project}/>
        </div>
      </div>
    );
  }
}
export default App;