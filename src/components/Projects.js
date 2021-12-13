import "../style/Project.css";

function Project(props) {
    return (
        <div className="project-div">
            <h1>{props.project_title}</h1>
            <h3>{props.date}</h3>
            <ul>
                {props.project_details.map((detail, index) => {
                    return <li key={index}>{detail}</li>
                })}
            </ul>
            <h3>Technologies used</h3>
            <ul>
                {props.project_stack.map((tech, index) => {
                    return <li key={index}>{tech}</li>
                })}
            </ul>
        </div>
    );
}

export default Project;