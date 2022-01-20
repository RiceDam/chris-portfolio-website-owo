import "../style/Skills.css";
import StarLinkImg from "../img/star.svg";

function Skills() {
  return (
    <div className="Skills">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Skills
      </div>

      <div className="SkillsDiv">
        <div className="SkillsColumn">
          <h2 className="SkillsTitle">General</h2>
          <ul>
            <li>Wireframing</li>
            <li>User interface design</li>
            <li>Frontend development</li>
            <li>User experience design</li>
            <li>Responsive design</li>
            <li>Technical writing</li>
            <li>Graphic design</li>
            <li>Visual design</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className="SkillsColumn">
          <h2 className="SkillsTitle">Technologies</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular (Currently learning!)</li>
            <li>Material UI</li>
            <li>GitHub</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="SkillsColumn">
          <h2 className="SkillsTitle">Design tools</h2>
          <ul>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Adobe After Effects</li>
            <li>Adobe Premiere Pro</li>
          </ul>

          <p className="Body">
            Don't see a particular skill in any of these lists? I'm willing to
            learn it, anyway!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
