import "../style/Projects.css";
import StarLinkImg from "../img/star.svg";
import Navigation from "../components/Navigation";
import SmallOutlineButton from "../components/SmallOutlineButton";

import ToursByLocalsImg from "../img/project-img/toursbylocals.png";
import KarmaImg from "../img/project-img/karma.png";
import BattleBuddyImg from "../img/project-img/battlebuddy.png";
import ValorantPortfolio from "../img/project-img/portfolio.png";
import ModernPortfolio from "../img/project-img/modernportfolio.png";
import KidLaroi from "../img/project-img/kidlaroi.png";

function ProjectContainer(props) {
  return (
    <div className="ProjectContainer">
      <img src={props.ProjectImg}></img>
      <div class="ProjectContainerText">
        <h2 className="ProjectTitle">{props.ProjectTitle}</h2>
        <p className="ProjectRole">{props.ProjectRole}</p>
        <p className="ProjectDescription">{props.ProjectDescription}</p>
        <SmallOutlineButton
          text={props.ProjectButtonText}
          link={props.ProjectButtonLink}
        ></SmallOutlineButton>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <Navigation></Navigation>
      <div className="DivTitleDiv">
        <div className="DivTitle">
          <img src={StarLinkImg} />
          Featured Projects
        </div>
      </div>

      <div className="ProjectsList">
        <div className="ProjectRow">
          <ProjectContainer
            ProjectButtonLink="projects/karma"
            ProjectButtonText="View case study"
            ProjectImg={KarmaImg}
            ProjectTitle="Karma - Case study"
            ProjectDescription="A full case study detailing the user experience research that went behind the development of Karma, a web application for volunteers."
            ProjectRole="UI/UX Designer and Full-Stack Developer"
          ></ProjectContainer>
          <ProjectContainer
            ProjectButtonLink="projects/battle-buddy"
            ProjectButtonText="View insights"
            ProjectImg={BattleBuddyImg}
            ProjectTitle="Battle Buddy"
            ProjectDescription="An Electron.js app built to display the meta team compositions for the game Teamfight Tactics for that specific patch."
            ProjectRole="UI/UX Designer and Front Developer"
          ></ProjectContainer>
          <ProjectContainer
            ProjectButtonLink="projects/tours-by-locals"
            ProjectButtonText="View branding book"
            ProjectImg={ToursByLocalsImg}
            ProjectTitle="Tours by Locals - Branding and graphic design"
            ProjectDescription="A branding redesign for Vancouver-based company Tours By Locals. Materials include brochures, a landing page, merchandise, and a branding book."
            ProjectRole="UI Designer and Graphic Designer"
          ></ProjectContainer>
        </div>

        <div className="ProjectRow">
          <ProjectContainer
            ProjectButtonText="View on Figma"
            ProjectButtonLink="https://www.figma.com/proto/puVIJSNuaGGZqGIJbZ8HDg/PORTFOLIO-WEBSITE-UI-(UPDATED)?page-id=0%3A1&node-id=26%3A5&viewport=241%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=2%3A11&show-proto-sidebar=1"
            ProjectImg={ValorantPortfolio}
            ProjectTitle="UI design: Valorant-inspired portfolio website"
            ProjectDescription="A responsive portfolio website with modern and geometric aesthetics that take inspiration from the first person shooter Valorant. There are sections that give a short description, show off projects and experience, and stylized buttons for contact."
            ProjectRole="UI/UX Designer"
          ></ProjectContainer>
          <ProjectContainer
            ProjectButtonLink="https://www.figma.com/proto/uHydQaLOs9Te0NwHIpdGIv/THE-KID-LAROI---WEBSITE-LANDING-PAGE-UI?page-id=0%3A1&node-id=2%3A3&viewport=241%2C48%2C0.3&scaling=min-zoom"
            ProjectImg={KidLaroi}
            ProjectButtonText="View on Figma"
            ProjectTitle="UI design: The Kid LAROI landing page"
            ProjectDescription="A landing page for artist and musician LAROI with modern aesthetics that take inspiration from streetwear and clothing brands. This website design features sections such as a short text description, recently-released music, and a text field to sign up for a newsletter."
            ProjectRole="UI Designer"
          ></ProjectContainer>
          <ProjectContainer
            ProjectButtonText="Coming soon"
            ProjectImg={ModernPortfolio}
            ProjectTitle="UI design: Modern portfolio website"
            ProjectDescription="A portfolio website design with modern and minimalist aesthetics. There are sections that give a short description and show off projects and experience."
            ProjectRole="UI Designer"
          ></ProjectContainer>
        </div>
      </div>
    </div>
  );
}
