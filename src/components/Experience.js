import StarLinkImg from "../img/star.svg";
import "../style/Experience.css";

function ExperienceDiv(props) {
  return (
    <div className={"ExperienceDiv ExperienceDiv" + props.Position}>
      <p className="ExperienceTitle">{props.ExperienceTitle}</p>
      <p className="ExperienceLocation">{props.ExperienceLocation}</p>
      <ul className="ExperienceDescription">
        {props.ExperienceDescription.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
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

      <div class="Timeline">
        <ExperienceDiv
          Position="Right"
          ExperienceTitle="Social Media Content Coordinator"
          ExperienceLocation="Simon Fraser University Science Fiction and Fantasy Book Club | Burnaby, BC"
          ExperienceDescription={["Lorem", "ipsum", "dolor", "sit", "amet"]}
        ></ExperienceDiv>
      </div>
    </div>
  );
}

export default Timeline;
