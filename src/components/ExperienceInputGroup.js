import EInput from "./Einput";
function ExperienceInputGroup({experience,index,handleChange,handleItemRemove }){
  return (
      <div className="flex" key = {experience.id}>
        <EInput section = "experience" index = {index} onChange={handleChange} value = {experience.title} name = "title" label = "Title"/>
        <EInput section = "experience" index = {index} onChange={handleChange} value = {experience.company} name = "company" label = "Company"/>
        <EInput section = "experience" index = {index} onChange={handleChange} value = {experience.duration} name = "duration" label = "Duration"/>
        <EInput section = "experience" index = {index} onChange={handleChange} value = {experience.location} name = "location" label = "Location"/>
        <EInput section = "experience" index = {index} onChange={handleChange} value = {experience.description} name = "description" label = "Description"/>
        <button type = 'button' onClick={() => handleItemRemove(experience.id, 'experience')}>Remove</button>
      </div>
    );
}
export default ExperienceInputGroup;
