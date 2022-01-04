import "../style/Navigation.css";
import StarLinkImg from "../img/star.svg";

function Navigation() {
  return (
    <div className="NavigationMenu">
      <a className="NavigationLink" href="#">
        Home
      </a>
      <a className="NavigationLink" href="#">
        About
      </a>
      <a className="NavigationLink" href="#">
        Experience
      </a>
      <a className="NavigationLink" href="#">
        Projects
      </a>
      <a className="NavigationLink" href="#">
        Resume
      </a>
      <div className="PrimaryNavigationLink">
        <a className="NavigationLink" href="#">
          Contact
        </a>
        <img src={StarLinkImg} />
      </div>
    </div>
  );
}

export default Navigation;
