// class Display extends Component {
//     // constructor(props){
//     //     super(props);
//     // }
//     render(){
//         const {portfolio, education, experience} = this.props
//         const {fn, ln} = portfolio
//         return(
//             <div>
//                 <ul>
//                     <h1>Name</h1>
//                         <li>{fn}</li>
//                         <li>{ln}</li>
//                     <h1>Education</h1>
//                         <div>
//                         {education.map((item, index) => {
//                             return (
//                             <div key = {index} id = {item}>
//                                 <li>{item.university}</li>
//                                 <li>{item.gpa}</li>
//                                 <li>{item.duration}</li>
//                                 <li>{item.description}</li>
//                                 <br/>
//                             </div>
//                             )
//                         })}
//                         </div>
//                     <h1>Experience</h1>
//                     <div>
//                     {experience.map((item, index) => {
//                         return (
//                         <div key = {index} id = {item}>
//                             <li>{item.company}</li>
//                             <li>{item.title}</li>
//                             <li>{item.duration}</li>
//                             <li>{item.description}</li>
//                             <br/>
//                         </div>
//                         )
//                     })}
//                     </div>
//                 </ul>
//             </div>
//         )
//     }

// }
const Display = (props) => {
    const {portfolio, education, experience, project} = props
    const {
        fn,
        ln,
        number,
        email,
        city,
    } = portfolio

    return(
        <div className = "cv">
            <ol className = "portfolio">
                <div>
                    <li>{fn} {ln}</li>
                </div>
                <li>{email} | {number} | {city}</li>
            </ol>
            <div className="education">
                <h1>{education.length > 0 ? "Education" : ""}</h1>
                <hr></hr>
                {education.map((item, index) => {
                    return (
                    <ol key = {index} id = {item}>
                        <div className="uni">
                            <li>{item.university}</li>
                             <li className = "italic">{item.duration}</li>
                        </div>
                        <li className = "italic">{item.major} {item.gpa}</li>
                        <br/>
                    </ol>
                    )
                })}
                </div>
            <div className="experience">
                <h1>{experience.length > 0 ? "Experience" : ""}</h1>
                <hr/>
                {experience.map((item, index) => {
                    return (
                    <ol key = {index} id = {item}>
                        <div className="uni">
                            <li style={{fontWeight : "bold", fontSize : "1.5em"}}>{item.title}</li>
                            <li className = "italic">{item.duration}</li>
                        </div>
                        <div className="uni">
                            <li className = "italic">{item.company}</li>
                            <li className = "italic">{item.location}</li>
                        </div>
                        <li>{item.description}</li>
                        <br/>
                    </ol>
                    )
                })}
            </div>
            <div className="project">
                <h1>{project.length > 0 ? project.length > 1 ? "Projects" : "Project": ""}</h1>
                <hr/>
                {project.map((item, index) => {
                    return (
                    <ol key = {index} id = {item}>
                        <div className="uni">
                            <li className="italic">{item.title} | {item.skills}</li>
                            <li style={{fontSize: "10px"}}>{item.repository}</li>
                        </div>
                        <li>{item.description}</li>
                        <br/>
                    </ol>
                    )
                })}
            </div>
        </div>
    )
}
export default Display;