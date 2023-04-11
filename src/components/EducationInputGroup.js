// import react from "react";
import EInput from "./Einput";
function EducationInputGroup({education,index,handleChange,handleItemRemove }){
    return (
        <div className="flex" key = {education.id}>
          <EInput section = "education" index = {index} onChange={handleChange} value = {education.university} name = "university" label = "University"/>
          <EInput section = "education" index = {index} onChange={handleChange} value = {education.duration} name = "duration" label = "Duration"/>
          <EInput section = "education" index = {index} onChange={handleChange} value = {education.major} name = "major" label = "Major"/>
          <EInput section = "education" index = {index} onChange={handleChange} value = {education.gpa} name = "gpa" label = "GPA"/>
          <button type = 'button' onClick={() => handleItemRemove(education.id, 'education')}>Remove</button>
        </div>
      );
}

export default EducationInputGroup;