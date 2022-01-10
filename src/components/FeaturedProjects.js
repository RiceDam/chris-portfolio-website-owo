import StarLinkImg from "../img/star.svg";
import CatPlaceholder from "../img/mraotf.jpg";
import "../style/FeaturedProjects.css";

function FeaturedProjectItem(props) {
  return (
    <div className="FeaturedProjectItem">
      <div className="FeaturedProjectImage FeaturedProjectItemColumn">
        <img src={props.Image} />
        <a href="#" className="FeaturedProjectButton">
          {props.ProjectButton}
        </a>
      </div>
      <div className="FeaturedProjectItemColumn FeaturedProjectDescription">
        <h2 className="ProjectTitle">{props.ProjectTitle}</h2>
        <p className="ProjectRole">{props.ProjectRole}</p>
        <p className="ProjectTechnologies">
          Technologies used:&nbsp;
          {props.ProjectTechnologies.map((element) => {
            if (element == props.ProjectTechnologies.slice(-1)[0]) {
              return <span>{element}</span>;
            } else {
              return <span>{element + ", "}</span>;
            }
          })}
        </p>
        <p className="ProjectDescription">
          {props.ProjectDescription.map((element) => {
            return <li>{element}</li>;
          })}
        </p>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="FeaturedProjectsDiv">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Featured Projects
      </div>

      <FeaturedProjectItem
        Image={CatPlaceholder}
        ProjectButton="a"
        ProjectTitle="Battle Buddy"
        ProjectRole="UI/UX Designer and Frontend Developer"
        ProjectTechnologies={["Figma", "JavaScript", "HTML5", "CSS3", "Hewwo"]}
        ProjectDescription={["Lorem", "ipsum", "dolor", "sit", "amet"]}
      ></FeaturedProjectItem>
    </div>
  );
}

export default FeaturedProjects;
