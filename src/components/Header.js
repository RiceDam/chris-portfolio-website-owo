import "../style/Header.css";
import HeaderImage from "../img/IMG_1702.png";

function TitleHeader() {
    return (
        <div className="TitleHeader">
            <div className="TextColumn">
                <span className="Title">Hi my name is Chris Raganit owo</span>
                <span className="Subtitle">owo hi my name is chris raganit and i like eric :3</span>
            </div>
            <div className="ImageColumn">
                <img src={HeaderImage} />
            </div>
        </div>
    );
}

export default TitleHeader;