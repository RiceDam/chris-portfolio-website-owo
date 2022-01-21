import "../style/ExperiencePage.css";
import StarLinkImg from "../img/star.svg";
import Navigation from "../components/Navigation";

function ExperienceContainer(props) {
  return (
    <div className="ExperienceContainer">
      <div class="ExperienceContainerText">
        <h2 className="ExperienceTitle">{props.ExperienceRole}</h2>
        <p className="ExperienceLocation">{props.ExperienceTitle}</p>
        <p className="ExperienceDate Body">{props.ExperienceDate}</p>
        <p className="ExperienceDescription Body">
          {props.ExperienceDescription}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <div className="DivTitleDiv">
        <div className="DivTitle">
          <img src={StarLinkImg} />
          Experience
        </div>
      </div>

      <div className="ExperienceList">
        <div className="ExperienceRow">
          <ExperienceContainer
            ExperienceDate="November 2021 to Present"
            ExperienceRole="Social Media Contributor"
            ExperienceTitle="Simon Fraser University Science Fiction and Fantasy Book Club"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="UI/UX Designer and Frontend Developer"
            ExperienceDate="August 2021 to Present"
            ExperienceTitle="Karma Well Health Technologies"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="Social Media Contributor"
            ExperienceDate="October 2020 to February 2021"
            ExperienceTitle="British Columbia Institute of Technology"
          ></ExperienceContainer>
        </div>
        <div className="ExperienceRow">
          <ExperienceContainer
            ExperienceDate="July 2020 to September 2020"
            ExperienceRole="Development Support"
            ExperienceTitle="Keywords Studios"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="Sales Associate"
            ExperienceDate="October 2017 to September 2020"
            ExperienceTitle="Bluenotes"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="Workshop Facilitator"
            ExperienceDate="March 2020"
            ExperienceTitle="British Columbia Institute of Technology"
          ></ExperienceContainer>
        </div>
        <div className="ExperienceRow">
          <ExperienceContainer
            ExperienceDate="July 2019 to August 2019"
            ExperienceRole="Media and Public Relations Crew Member"
            ExperienceTitle="Salmon Habitat Restoration Program, Dillon Consulting Limited"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="Cashier"
            ExperienceDate="July 2018 to June 2019"
            ExperienceTitle="A&W Food Services of Canada"
          ></ExperienceContainer>
          <ExperienceContainer
            ExperienceRole="Graphic Design Intern"
            ExperienceDate="January 2018"
            ExperienceTitle="Copytek Print and Sign"
          ></ExperienceContainer>
        </div>
      </div>
    </div>
  );
}
