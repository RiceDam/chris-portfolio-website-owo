import KarmaCover from "../img/project-img/karma-cover.png";
import ReactPlayer from "react-player";
import "../style/BattleBuddy.css";
import OutlineButton from "../components/OutlineButton";
import BattleBuddy1 from "../img/project-img/BattleBuddy1.png";
import BattleBuddy2 from "../img/project-img/BattleBuddy2.png";

export default function BattleBuddy() {
  return (
    <div className="KarmaContainer">
      <div className="KarmaColumn KarmaNavigation">
        <a href="#Introduction">Introduction</a>
        <a href="#ProblemStatement">Problem statement</a>
        <a href="#Solution">Solution</a>
        <a href="#MeetTheDevelopers">Meet the developers</a>
        <a href="#HowWeBuilt">How we built Battle Buddy</a>
        <a href="#Challenges">Challenges we ran into</a>
        <a href="#Accomplishments">Accomplishments that we're proud of</a>
        <a href="#WhatWeLearned">What we learned</a>
        <a href="#WhatsNext">What's next for Battle Buddy</a>
      </div>
      <div className="KarmaColumn KarmaContent">
        <h1 className="BigQuote">
          Battle Buddy - A Teamfight Tactics guide desktop app
        </h1>

        <div className="KarmaVideo">
          <ReactPlayer url="https://youtu.be/aaXVOvqsf8E"></ReactPlayer>
        </div>

        <div id="Introduction" className="ParagraphContent">
          <h2 className="Quote">Introduction</h2>
          <span className="BodyTitle">What is Teamfight Tactics?</span>
          <p className="Body">
            Teamfight Tactics is an auto battler game developed and published by
            Riot Games. The game is a spinoff of League of Legends and is based
            on Dota Auto Chess, where players compete online against seven other
            opponents by building a team to be the last one standing.
          </p>
          <p className="Body">
            Teamfight Tactics is the property of Riot Games. Resources, art,
            champion designs, and names have not been created by neither team
            members. Neither of the developers have any affiliation to Riot
            Games.
          </p>
          <br></br>
          <span className="BodyTitle">Inspiration behind Battle Buddy</span>
          <p className="Body">
            I've been crazy about Teamfight Tactics for a really long time and I
            really enjoyed playing it. I wanted to keep improving and learning
            so I actively sought many tools to help me along the way. I stumbled
            upon{" "}
            <a href="https://devpost.com/software/battle-buddy-a-teamfight-tactics-app">
              this spreadsheet
            </a>{" "}
            on the Competitive TFT subreddit, and it was the most informative
            tool for climbing that I ever found. I climbed from Silver to
            Diamond 1 95 LP Set 4.5 with this spreadsheet. In Set 5.5, I used
            this tool to climb in the TFT Hyper Roll game mode to Hyper Tier. As
            of Set 6, I peaked at one point at rank #61 in all of North America.
          </p>
        </div>

        <div id="ProblemStatement" className="ParagraphContent">
          <h2 className="Quote">Problem statement</h2>
          <p className="Body">
            The problem with this spreadsheet is that it's really difficult to
            find the data you need in such high-stress situations. It's not
            user-friendly in the sense that you can't just look at it and
            immediately understand what's going on. I had to read this resource
            in my free time to be able to refer to it while in-game.
          </p>
        </div>

        <div id="Solution" className="ParagraphContent BattleBuddyImg">
          <img src={BattleBuddy1}></img>
          <img src={BattleBuddy2}></img>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Solution</h2>
          <p className="Body">
            Ray and I decided that we wanted to create a desktop app that
            displayed all the data in a way that was easy-to-read while in-game.
            We wanted to create a simple user interface that shows all the
            information that the user needs to know to win their lobbies. This
            differs from other web applications where it only shows you the top
            three Best in Slot items for the carry unit of your composition.
            Since the spreadsheet allows you flexibility with your items (since
            it can lose you the game if you greed trying to go for the best
            items for your carry). Clicking on the team composition provides you
            more details such as further itemization, secondary carries, and
            unit flexibility.
          </p>
          <p className="Body">
            Battle Buddy parses the data displayed on the Teamfight Tactics
            spreadsheet with the use of Python before displaying it into much
            more readable information in a desktop app, perfect for tabbing in
            and out when in-game!
          </p>
        </div>

        <div id="MeetTheDevelopers" className="ParagraphContent">
          <h2 className="Quote">Meet the developers</h2>
          <span className="BodyTitle">Christina Raganit</span>
          <p className="Body">
            A graduate from British Columbia Institute of Technology's Computer
            Systems Technology program and a second-year student in Simon Fraser
            University's Interactive Arts and Technology program. UI/UX designer
            and junior developer for BC-based startup Karma Well Health
            Technologies. Skilled in in frontend web development, user interface
            and experience design, graphic design, business communications, and
            fantasy writing.
          </p>

          <br></br>
          <span className="BodyTitle">Ray Gong</span>
          <p className="Body">
            A third-year Honours student studying for his Bachelor of Science
            degree with a specialty in Computer Science. Strong knowledge in
            mathematics, calculus, software development with Python and Java,
            and game development with C# in Unity. Avid video gamer.
          </p>
        </div>

        <div id="HowWeBuilt" className="ParagraphContent">
          <h2 className="Quote">How we built Battle Buddy</h2>
          <p className="Body">
            First, I created the wireframes and the user interface on Figma as
            Ray performed the backend tasks in parsing the data from the
            spreadsheet using Python. After discussing the wireframes over with
            Ray and implementing any changes that he suggested, I worked on the
            frontend tasks such as programmatically creating the elements using
            JavaScript, HTML, and CSS.
          </p>
        </div>

        <div id="Challenges" className="ParagraphContent">
          <h2 className="Quote">Challenges we ran into</h2>
          <p className="Body">
            That weekend had been ridiculously busy for us — Ray and I spent a
            huge chunk of the Friday playing in a League of Legends tournament
            that we lost tragically, and I was working full-time at this point
            and I had to study for an upcoming midterm, so I felt as if I had
            barely any time to prepare. In addition, we were very ambitious with
            our project, and we did not have as much time as we liked to create
            it, especially due to the inconsistency of the formatting of the
            spread sheet. In terms of technical difficulties, the decision to
            use Python to parse the spreadsheet introduced quite a few problems
            such as the somewhat poor performance and also the lack of an easy
            way to communicate between Node and Python.js, but I like to say
            that the final product went very well.
          </p>
        </div>

        <div id="WhatWeLearned" className="ParagraphContent">
          <h2 className="Quote">What we learned</h2>
          <p className="Body">
            I learned how to use Electron.js. I've been wanting to develop
            desktop applications for a very long time, and I'm glad that I have
            this knowledge now so I can learn to create more desktop
            applications in the future.
          </p>
        </div>

        <div id="Accomplishments" className="ParagraphContent">
          <h2 className="Quote">Accomplishments for Battle Buddy</h2>
          <p className="Body">
            I would say the accomplishment that I am most proud of is taking
            into account the many edge cases of displaying information when
            designing the user interface. I think because we have a clear image
            of how the information will be displayed, we always had a general
            idea on how things had to be done. Connecting the backend with the
            frontend was initially very frustrating, but when we got it working,
            it felt very rewarding. It was something big and beautiful that we
            created together as a team, and in the moment we got it working, I
            felt like no one could take that away from us.
          </p>
        </div>

        <div id="WhatsNext" className="ParagraphContent">
          <h2 className="Quote">What's next for Battle Buddy</h2>
          <p className="Body">
            Ray and I want to introduce more features for Battle Buddy that
            would be useful for any Teamfight Tactics player, such as a loaded
            dice tool to determine the probability of rolling a certain champion
            in your current level. I would also like to add maps to show players
            what the optimal positioning is for the top tier meta compositions.
          </p>
        </div>

        <span className="BodyTitle">
          Interested in chatting more about my projects? Don't hesitate to reach
          out!
        </span>
        <div className="KarmaButtons">
          <OutlineButton
            text="LinkedIn"
            link="linkedin.com/in/christinaraganit/"
          ></OutlineButton>

          <OutlineButton
            text="Email"
            link="mailto:christinaraganit@gmail.com"
          ></OutlineButton>
          <OutlineButton text="Discord: Astris#2854"></OutlineButton>
        </div>
      </div>
    </div>
  );
}
