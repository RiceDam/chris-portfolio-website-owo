import "../style/AboutPage.css";
import StarLinkImg from "../img/star.svg";
import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <div className="ProjectsContainer">
      <Navigation></Navigation>
      <div className="DivTitleDiv">
        <div className="DivTitle">
          <img src={StarLinkImg} />
          About me
        </div>
      </div>
    </div>
  );
}
