import StarLinkImg from "../img/star.svg";
import CatPlaceholder from "../img/mraotf.jpg";
import SmallOutlineButton from "./SmallOutlineButton";
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
        <span className="ProjectRole">{props.ProjectRole}</span>
        <br></br>
        <span className="ProjectTechnologies">
          <b>Technologies used:</b>&nbsp;
          {props.ProjectTechnologies.map((element) => {
            if (element == props.ProjectTechnologies.slice(-1)[0]) {
              return <span>{element}</span>;
            } else {
              return <span>{element + ", "}</span>;
            }
          })}
        </span>
        <p className="ProjectDescription">
          {props.ProjectDescription.map((element) => {
            return <li>{element}</li>;
          })}
        </p>
        {props.ProjectButtonText && (
          <SmallOutlineButton
            class="SmallOutlineButton"
            text={props.ProjectButtonText}
            link={props.ProjectButtonLink}
          ></SmallOutlineButton>
        )}
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
        ProjectTitle="Karma"
        ProjectRole="UI/UX Designer and Frontend Developer"
        ProjectTechnologies={[
          "Figma",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Google Firebase",
          "GitHub",
          "Trello",
          "Miro",
        ]}
        ProjectDescription={[
          "Collaborated in a team of five developers to create user stories, develop user personas, decide core functionalities, perform user research, conduct user testing, and create prototypes of all levels of fidelity",
          "Created interactive prototypes and wireframes for both desktop and mobile breakpoints using Figma",
          "Developed frontend webpages that adhered to the specified typography and style guidelines and reviewed quality of all webpages to ensure consistency of design",
          "Implemented backend functionalities for adding user data into a MySQL database using REST services",
        ]}
        ProjectButtonText="View case study"
        ProjectButtonLink="#"
      ></FeaturedProjectItem>

      <FeaturedProjectItem
        Image={CatPlaceholder}
        ProjectButton="a"
        ProjectTitle="Battle Buddy"
        ProjectRole="UI/UX Designer and Frontend Developer"
        ProjectTechnologies={[
          "Figma",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Electron.js",
        ]}
        ProjectDescription={["Lorem", "ipsum", "dolor", "sit", "amet"]}
      ></FeaturedProjectItem>

      <FeaturedProjectItem
        Image={CatPlaceholder}
        ProjectButton="a"
        ProjectTitle="Onigiri - Currently in progress"
        ProjectRole="Frontend Developer"
        ProjectTechnologies={[
          "Angular",
          "JavaScript",
          "TypeScript",
          "Material UI",
          "GitHub",
          "Visual Studio Code",
          "HTML5",
          "CSS3",
        ]}
        ProjectDescription={["Lorem", "ipsum", "dolor", "sit", "amet"]}
      ></FeaturedProjectItem>
    </div>
  );
}

export default FeaturedProjects;
