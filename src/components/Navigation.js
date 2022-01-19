import "../style/Navigation.css";
import StarLinkImg from "../img/star.svg";

function Navigation() {
  return (
    <div className="NavigationMenu">
      <a className="NavigationLink" href="/">
        Home
      </a>
      <a className="NavigationLink" href="about">
        About
      </a>
      <a className="NavigationLink" href="experience">
        Experience
      </a>
      <a className="NavigationLink" href="projects">
        Projects
      </a>
      <a
        className="NavigationLink"
        href="https://drive.google.com/file/d/1sslvr0mTPN6C2zCdPdID72X5CEz3WLkb/view?usp=sharing"
      >
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
