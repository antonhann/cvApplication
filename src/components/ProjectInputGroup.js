import EInput from "./Einput";
function ProjectInputGroup({project,index,handleChange,handleItemRemove }){
    return (
        <div className="flex" key = {project.id}>
          <EInput section = "project" index = {index} onChange={handleChange} value = {project.title} name = "title" label = "Title"/>
          <EInput section = "project" index = {index} onChange={handleChange} value = {project.skills} name = "skills" label = "Skills"/>
          <EInput section = "project" index = {index} onChange={handleChange} value = {project.repository} name = "repository" label = "Repository"/>
          <EInput section = "project" index = {index} onChange={handleChange} value = {project.description} name = "description" label = "Description"/>
          <button type = 'button' onClick={() => handleItemRemove(project.id, 'project')}>Remove</button>
        </div>
      );
}

export default ProjectInputGroup;