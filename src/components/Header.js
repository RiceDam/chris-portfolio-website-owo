import "../style/Header.css";
import OutlineButtonPrimary from "./OutlineButtonPrimary";
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
        <OutlineButtonPrimary text="Contact me" link="#"></OutlineButtonPrimary>
      </div>
    </div>
  );
}

export default TitleHeader;
