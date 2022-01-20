import "../style/Contact.css";
import StarLinkImg from "../img/star.svg";
import OutlineButtonPrimary from "./OutlineButtonPrimary";

export default function Contact() {
  return (
    <div className="ContactDiv">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Contact me
      </div>

      <p class="Body" style={{ color: "var(--secondary)" }}>
        Come and say hi!
      </p>

      <div class="ContactButtonsDiv">
        <OutlineButtonPrimary
          link="https://www.linkedin.com/in/christinaraganit/"
          text="LinkedIn"
        ></OutlineButtonPrimary>
        <OutlineButtonPrimary
          link="mailto:christinaraganit@gmail.com"
          text="Email"
        ></OutlineButtonPrimary>
        <OutlineButtonPrimary
          link="https://github.com/christinaraganit"
          text="GitHub"
        ></OutlineButtonPrimary>
      </div>
    </div>
  );
}
