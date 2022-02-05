import "../style/Header.css";
import OutlineButton from "./OutlineButton";
import HeaderImage from "../img/IMG_1702.png";

function TitleHeader() {
  return (
    <div className="TitleHeader">
      <div className="TextColumn">
        <p className="IntroTitle">HI, MY NAME IS</p>
        <span className="Title">Christina Raganit</span>
        <span className="Subtitle">
          I am a UI/UX designer with a diploma in Computer Systems and a current
          SFU student studying Interactive Arts and Technology.
        </span>
        <Link to="/portfolio/projects">
          <OutlineButton text="View my projects"></OutlineButton>
        </Link>
      </div>
    </div>
  );
}

export default TitleHeader;
