import StarLinkImg from "../img/star.svg";
import PointedStarLinkImg from "../img/pointer-star.svg";
import "../style/Experience.css";

function TimelineItem(props) {
  return (
    <div className={"TimelineItem"}>
      <div className="TimelineIcon">
        <img src={PointedStarLinkImg}></img>
      </div>
      <div className={"TimelineContent " + props.Position + " " + props.Last}>
        <h2 className="ExperienceTitle">{props.ExperienceTitle}</h2>
        <p className="ExperienceLocation">{props.ExperienceLocation}</p>
        <ul className="ExperienceDescription">
          {props.ExperienceDescription.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
        {props.ExperienceButton && (
          <a href="#" class="ExperienceButton">
            {props.ExperienceButton}
          </a>
        )}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="TimelineDiv">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Experience
      </div>

      <div class="Container">
        <div id="Timeline">
          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Social Media Content Coordinator"
            ExperienceLocation="Simon Fraser University Science Fiction and Fantasy Book Club | Burnaby, British Columbia"
            ExperienceDescription={[
              "Create content for promotional material such as Instagram posts and stories",
              "Use social media to promote initiatives and events within the club",
              "Manage content and social media calendars to ensure regular delivery and updates",
            ]}
            ExperienceButton="View work"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="UI/UX Developer"
            ExperienceLocation="Karma Well Health Technologies | Greater Vancouver, British Columbia"
            ExperienceDescription={[
              "Lead initiatives to develop design and typography guidelines and create documentation for the development team",
              "Create high-fidelity wireframes  of the product on Figma that are responsive for mobile, tablet, and desktop breakpoints",
              "Communicate with the development team and provide feedback to maintain consistency throughout the designs",
              "Design graphic user interface elements, such as overlays, menus, tabs and widgets",
              "Identify and communicate best practices for user experience design",
              "Perform user experience research by conducting user interviews to collect findings and data",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Social Media Content Contributor"
            ExperienceLocation="British Columbia Institute of Technology | Burnaby, British Columbia"
            ExperienceDescription={[
              "Created content for the social media channels of the institution; including Facebook, Snapchat, and Instagram",
              "Communicated remotely with mentors to apply feedback and improvement on assignments",
              "Wrote, planned, and edited media assets such as blog posts, video content, and short captions using collaborative and design software",
            ]}
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="Development Support"
            ExperienceLocation="Keywords Studios | Burnaby, British Columbia"
            ExperienceDescription={[
              "Conducted testing of pre-release versions of the product (FIFA 21) for PC, Xbox One, PlayStation 4, Xbox Series X, and PlayStation 5",
              "Worked closely with the quality assurance team to test game content for bugs and other flaws",
              "Isolated and identified bugs and how they occurred within the gaming environment",
              "Collaborated with the team to run build verification checklists regarding audio, gameplay, and connectivity",
              "Wrote technical reports and documentation on bugs, features, performance, and playability and submitted them to the development team",
            ]}
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Left"
            ExperienceTitle="Workshop Facilitator"
            ExperienceLocation="British Columbia Institute of Technology | Burnaby, British Columbia"
            ExperienceDescription={[
              "Explained programming concepts to students patiently and clearly",
              "Resolved difficulties and coding errors in various languages",
              "Provided a fun learning environment for students of different skill levels",
              "Ensured safety of the students during activities in the workshop",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="NotLast"
            Position="Right"
            ExperienceTitle="Media and Public Relations Crew Member"
            ExperienceLocation="Salmon Habitat Restoration Program | Surrey, British Columbia"
            ExperienceDescription={[
              "Communicated with clients regarding project details and feedback in order to achieve desired results",
              "Provided multimedia coverage to highlight environmental initiatives accomplished within program",
              "Conceptualized material for educational activities for use in community outreach events",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>

          <TimelineItem
            Last="Last"
            Position="Left"
            ExperienceTitle="Graphic Design Intern"
            ExperienceLocation="Copytek Print and Sign | Surrey, British Columbia"
            ExperienceDescription={[
              "Multitasked and utilized excellent time management to complete all assigned projects by given deadlines",
              "Applied critical thinking to creatively solve problems and complications throughout the design process",
              "Collaborated with mentors and clients to apply feedback and improvements to ensure client satisfaction",
            ]}
            ExperienceButton="View code on GitHub"
          ></TimelineItem>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
