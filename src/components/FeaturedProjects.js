import StarLinkImg from "../img/star.svg";
import CatPlaceholder from "../img/project-img/no-square-found.png";
import PointedStarLinkImg from "../img/pointer-star.svg";
import SmallOutlineButton from "./SmallOutlineButton";
import "../style/FeaturedProjects.css";

import KarmaSquare from "../img/project-img/karma-square.png";
import BattleBuddySquare from "../img/project-img/battle-buddy-square.png";
import ToursByLocalsSquare from "../img/project-img/tours-by-locals-square.png";

function FeaturedProjectItem(props) {
  return (
    <div className="FeaturedProjectItem">
      <div className="FeaturedProjectImage FeaturedProjectItemColumn">
        <img src={props.Image} />
        <div className="FeaturedProjectButton">
          <img src={PointedStarLinkImg}></img>
        </div>
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
          <div className="SmallOutlineButtonDiv">
            <SmallOutlineButton
              class="SmallOutlineButton"
              text={props.ProjectButtonText}
              link={props.ProjectButtonLink}
            ></SmallOutlineButton>
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="FeaturedProjectsDiv">
      <div className="FeaturedProjectsDivTitle">
        <div className="DivTitle">
          <img src={StarLinkImg} />
          Projects
        </div>
      </div>

      <FeaturedProjectItem
        Image={KarmaSquare}
        ProjectButton="a"
        ProjectTitle="Karma - Web app for volunteers"
        ProjectRole="UI/UX Designer and Full-Stack Developer"
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
        ProjectButtonLink="projects/karma"
      ></FeaturedProjectItem>

      <FeaturedProjectItem
        Image={BattleBuddySquare}
        ProjectButton="a"
        ProjectTitle="Battle Buddy - Teamfight Tactics Electron.js app"
        ProjectRole="UI/UX Designer and Frontend Developer"
        ProjectTechnologies={[
          "Figma",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Electron.js",
        ]}
        ProjectDescription={[
          "Identified existing problems for the Teamfight Tactics playerbase and developed a prototype with an aim to alleviate the issues players are facing",
          "Collaborated with a backend developer to implement a minimum viable product within a time period of 24 hours (project created for a hackathon)",
          "Created interactive prototypes and wireframes for desktop breakpoints using Figma",
          "Wrote adaptable and easy-to-read frontend code using HTML5, CSS3, JavaScript",
        ]}
        ProjectButtonText="View project study"
        ProjectButtonLink="/projects/battle-buddy"
      ></FeaturedProjectItem>

      <FeaturedProjectItem
        Image={ToursByLocalsSquare}
        ProjectButton="a"
        ProjectTitle="Tours by Locals - Branding and graphic design"
        ProjectRole="Graphic Designer and UI Designer"
        ProjectTechnologies={[
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Figma",
          "Adobe InDesign",
          "Adobe Premiere Pro",
        ]}
        ProjectDescription={[
          "Redesigned the brand identity for Vancouver-based company Tours by Locals",
          "Performed research on the company to gain a better understanding of their consumers and their competitors",
          "Made sketches and iterations logo concepts before designing a high-fidelity vector on Adobe Illustrator",
          "Created a desktop-only landing page on Figma in alignment with the brand identity",
          "Documented the newly-redesigned brand identity into a branding book, complete with mockups for social media posts and merchandise and rules for typography and colour palette styling",
        ]}
        ProjectButtonText="View work"
        ProjectButtonLink="projects/tours-by-locals"
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
          "Google Firebase",
          "Visual Studio Code",
          "HTML5",
          "CSS3",
        ]}
        ProjectDescription={[
          "Currently working on a project alongside a backend developer to create our first project in Angular! I am seeking to add this new framework in my list of skills and am using the Angular Material UI library to create the user interface. Onigiri can be described as Goodreads, but for anime and manga. Users will be able to track their favourite manga and anime, the manga and anime they are currently reading, and share their watching and reading activities with their friends!",
        ]}
        ProjectButtonText="Work in progress"
        ProjectButtonLink="#"
      ></FeaturedProjectItem>
    </div>
  );
}

export default FeaturedProjects;
