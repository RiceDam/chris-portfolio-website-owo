import KarmaCover from "../img/project-img/karma-cover.png";
import ReactPlayer from "react-player";
import OutlineButton from "../components/OutlineButton";

export default function ToursByLocals() {
  return (
    <div className="KarmaContainer">
      <div className="KarmaColumn KarmaNavigation">
        <a href="#">Introduction</a>
        <a href="#">Problem statement</a>
        <a href="#">Solution</a>
        <a href="#">The Karma team</a>
        <a href="#">Scope and constraints</a>
        <a href="#">Business goals</a>
        <a href="#">User goals</a>
        <a href="#">Competitive analysis</a>
        <a href="#">User research</a>
        <a href="#">Prototypes and iterations</a>
        <a href="#">Style guide</a>
        <a href="#">Retrospective</a>
      </div>
      <div className="KarmaColumn KarmaContent">
        <h1 className="BigQuote"> Karma - Case study</h1>

        <div className="KarmaVideo">
          <ReactPlayer url="https://youtu.be/xaqc-vRulwQ"></ReactPlayer>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Introduction</h2>
          <p className="Body">
            When I was in high school, I had to complete forty hours of
            volunteering experience in order to graduate. I was active in the
            community, volunteering as a circulation services assistant and a
            reading tutor around my community. My friends were not as fortunate
            in finding volunteer work that interested in, and during senior
            year, they were still scrambling to find hours. I was the
            programming nerd of my friend group, and they told me that I should
            create an app that connects people with volunteering work. My mind
            was in motion, and Karma was born.
          </p>
        </div>
      </div>
    </div>
  );
}
