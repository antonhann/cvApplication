import { Component } from "react";
import Input from "./Input";
import EducationInputGroup from "./EducationInputGroup";
import ExperienceInputGroup from "./ExperienceInputGroup";
import ProjectInputGroup from "./ProjectInputGroup";
class Form extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const {
          handleInputChange,
          experience,
          handleItemRemove,
          handleArrayChange,
          portfolio,
          education,
          project,
          onProjectAdd,
          onEducationAdd,
          onExperienceAdd,
          resetState,
        } = this.props
        return(
          <div className="form">
            <h1 style={{textAlign : "center"}}>CV Form<span><button onClick={resetState}>Clear</button></span></h1>
            <h2>Personal Information</h2>
            <hr/>
            <div>
              <Input section = "portfolio" onChange={handleInputChange} value = {portfolio.fn} name = "fn" label = "First Name"/>
              <Input section = "portfolio" onChange={handleInputChange} value = {portfolio.ln} name = "ln" label = "Last Name"/>
              <Input section = "portfolio" onChange={handleInputChange} value = {portfolio.email} name = "email" label = "Email"/>
              <Input section = "portfolio" onChange={handleInputChange} value = {portfolio.number} name = "number" label = "Number"/>
              <Input section = "portfolio" onChange={handleInputChange} value = {portfolio.city} name = "city" label = "City"/>
            </div>
            <h2>Education</h2>
            <hr/>
            <div>
              {(
                  (education.map((item,index) =>{
                      return (
                      <div key = {item.id}>
                        <EducationInputGroup handleItemRemove = {handleItemRemove} section = "education" handleChange = {handleArrayChange} key = {item.id} index = {index} education = {item}/>
                        <br></br>
                      </div>
                      )
                })))
              }
              <button type = "button" onClick={onEducationAdd}>Add</button>
            </div>
            <h2>Experience</h2>
            <hr/>
            <div>
            {(
                  (experience.map((item,index) =>{
                      return (
                      <div key = {item.id}>
                        <ExperienceInputGroup handleItemRemove = {handleItemRemove} section = "education" handleChange = {handleArrayChange} key = {item.id} index = {index} experience = {item}/>
                        <br></br>
                      </div>
                      )
                })))
              }
            <button type = "button" onClick={onExperienceAdd}>Add</button>
            </div>
            <h2>Project</h2>
            <hr/>
            <div>
            {(
                  (project.map((item,index) =>{
                      return (
                      <div key = {item.id}>
                        <ProjectInputGroup handleItemRemove = {handleItemRemove} section = "project" handleChange = {handleArrayChange} key = {item.id} index = {index} project = {item}/>
                        <br></br>
                      </div>
                      )
                })))
              }
            <button type = "button" onClick={onProjectAdd}>Add</button>
            </div>
          </div>
        )
    }
}

export default Form;