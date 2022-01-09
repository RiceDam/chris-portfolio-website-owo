import StarLinkImg from "../img/star.svg";
import PointedStarLinkImg from "../img/pointer-star.svg";
import "../style/Experience.css";

function TimelineItem(props) {
  return (
    <div className={"TimelineItem"}>
      <div className="TimelineIcon">
        <img src={PointedStarLinkImg}></img>
      </div>
      <div className={"TimelineContent " + props.Position + " " + props.Last}>
        <h2 className="ExperienceTitle">{props.ExperienceTitle}</h2>
        <p className="ExperienceLocation">{props.ExperienceLocation}</p>
        <ul className="ExperienceDescription">
          {props.ExperienceDescription.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
        <a href="#" class="ExperienceButton">
          {props.ExperienceButton}
        </a>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="TimelineDiv">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Experience
      </div>

      <div class="Container">
        <div id="Timeline">
          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Social Media Content Coordinator"
            ExperienceLocation="Simon Fraser University Science Fiction and Fantasy Book Club | Burnaby, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="UI/UX Developer"
            ExperienceLocation="Karma Well Health Technologies | Greater Vancouver, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Social Media Content Contributor"
            ExperienceLocation="British Columbia Institute of Technology | Burnaby, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="Development Support"
            ExperienceLocation="Keywords Studios | Burnaby, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Workshop Facilitator"
            ExperienceLocation="British Columbia Institute of Technology | Burnaby, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="Media and Public Relations Crew Member"
            ExperienceLocation="Salmon Habitat Restoration Program | Surrey, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="Last"
            Position="Left"
            ExperienceTitle="Graphic Design Intern"
            ExperienceLocation="Copytek Print and Sign | Surrey, British Columbia"
            ExperienceDescription={[
              "Lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet :3",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
