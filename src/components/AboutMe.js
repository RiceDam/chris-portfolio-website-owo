import "../style/AboutMe.css";
import OutlineButton from "../components/OutlineButton.js";
import StarLinkImg from "../img/star.svg";
import AboutMeImg from "../img/mraotf.jpg";

function AboutMe() {
  return (
    <div className="AboutMeDiv">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        About me
      </div>

      <div className="AboutMeInformation">
        <div className="AboutMeColumn AboutMeImage">
          <img src={AboutMeImg}></img>
        </div>

        <div className="AboutMeColumn AboutMeQuote">
          <p className="Quote">
            “They say I don’t know when to quit. Like that’s a weakness.”
          </p>

          <p className="Body">
            <b>Name:</b> Christina Andrea Raganit
          </p>
          <p className="Body">
            <b>Pronouns:</b> she/her
          </p>
          <p className="Body">
            <b>Location:</b> Surrey, British Columbia
          </p>
          <p className="Body">
            <b>Birthdate:</b> March 1, 2001
          </p>
          <p className="Body">
            <b>Favorite food:</b> Lasagna
          </p>
        </div>
      </div>

      <p className="Body">
        Hi, Christina here! I’m a graduate from British Columbia Institute of
        Technology’s Computer Systems Technology diploma program and I’m
        currently an undergraduate student in Simon Fraser University’s
        Interactive Arts and Technology program. I’m passionate about UI/UX
        design, graphic design, frontend development, and writing! The rare
        times I’m not doing schoolwork, I’m either jamming on my ukulele,
        listening to rock music, or playing League of Legends.
      </p>

      <div className="ButtonsDiv">
        <OutlineButton
          link="https://www.linkedin.com/in/christinaraganit/"
          text="LinkedIn"
        ></OutlineButton>
        <OutlineButton
          link="mailto:christinaraganit@gmail.com"
          text="Email"
        ></OutlineButton>
        <OutlineButton
          link="https://www.instagram.com/lolastris/"
          text="Instagram"
        ></OutlineButton>
        <OutlineButton
          link="https://github.com/christinaraganit"
          text="GitHub"
        ></OutlineButton>
      </div>
    </div>
  );
}

export default AboutMe;
