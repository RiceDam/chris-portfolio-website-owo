import "../style/Header.css";
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
      </div>
      <div className="ImageColumn">
        <img src={HeaderImage} />
        <span className="ImageText">THE STARRY-EYED STORYTELLER</span>
      </div>
    </div>
  );
}

export default TitleHeader;
