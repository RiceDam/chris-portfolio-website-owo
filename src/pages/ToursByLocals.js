import KarmaCover from "../img/project-img/karma-cover.png";
import ReactPlayer from "react-player";

import MoodBoard from "../img/project-img/MoodBoard.png";
import OutlineButton from "../components/OutlineButton";
import MindMap from "../img/project-img/Mindmap.png";
import LogoSketches from "../img/project-img/LogoSketches.png";
import VisualBrainDump from "../img/project-img/VisualBrainDump.png";
import Logo1 from "../img/project-img/Logo1.png";
import Logo2 from "../img/project-img/Logo2.png";
import Logo3 from "../img/project-img/Logo3.png";
import Logo4 from "../img/project-img/Logo4.png";
import Logo5 from "../img/project-img/Logo5.png";
import Iteration1 from "../img/project-img/Iteration1.png";
import Iteration2 from "../img/project-img/Iteration2.png";
import Iteration3 from "../img/project-img/Iteration3.png";
import FinalLogoVariation1 from "../img/project-img/FinalLogoVariation1.png";
import FinalLogoVariation2 from "../img/project-img/FinalLogoVariation2.png";
import FinalLogoVariation3 from "../img/project-img/FinalLogoVariation3.png";
import FinalLogoVariation4 from "../img/project-img/FinalLogoVariation4.png";
import Colours from "../img/project-img/Colours.png";
import BrandApplications from "../img/project-img/BrandApplications.png";
import BusinessCardLetterhead from "../img/project-img/BusinessCardLetterhead.png";
import Brochure from "../img/project-img/Brochure.png";
import LandingPage from "../img/project-img/LandingPage.png";
import Story1 from "../img/project-img/Story1.png";
import Story2 from "../img/project-img/Story2.png";
import Post1 from "../img/project-img/Post1.png";
import Post2 from "../img/project-img/Post2.png";

import "../style/ToursByLocals.css";

export default function ToursByLocals() {
  return (
    <div className="KarmaContainer">
      <div className="KarmaColumn KarmaNavigation">
        <a href="#Introduction">Introduction</a>
        <a href="#MyRole">My role</a>
        <a href="#MoodBoard">Mood board</a>
        <a href="#Ideation">Ideation process for logo</a>
        <a href="#FinalLogo">Final logo and variations</a>
        <a href="#Colours">Colours</a>
        <a href="#Typography">Typography</a>
        <a href="#BrandApplications">Brand applications</a>
        <a href="#BusinessCardLetterhead">Business card and letterhead</a>
        <a href="#Brochure">Brochure</a>
        <a href="#LandingPage">Landing page</a>
        <a href="#SocialMediaContent">Social media content</a>
        <a href="#Retrospective">Retrospective</a>
      </div>
      <div className="KarmaColumn KarmaContent">
        <h1 className="BigQuote"> Tours by Locals - Brand book</h1>

        <div className="KarmaVideo">
          <ReactPlayer url="https://www.youtube.com/watch?v=SXgA0ueioyc"></ReactPlayer>
        </div>

        <div className="KarmaButtons">
          <OutlineButton
            text="View branding book on Google Slides"
            link="https://docs.google.com/presentation/d/1Y0yIELaRk8umhDGRmXWk-qIvS-1VZUlCDj4WMFqAqrQ/edit?usp=sharing"
          ></OutlineButton>
        </div>

        <div id="Introduction" className="ParagraphContent">
          <h2 className="Quote">Introduction</h2>
          <p className="Body">
            In my first semester of SFU, I took the class IAT 102 - Graphic
            Design. The project for this term was to redesign the brand of a
            selected company, and the company I chose was Tours By Locals, which
            is a Vancouver-based international tour provider that aims to
            connect independent and mindful travellers with local people and
            local experiences.{" "}
          </p>
        </div>

        <div id="MyRole" className="ParagraphContent">
          <h2 className="Quote">My role</h2>
          <p className="Body">
            My role for this term project was primarily in graphic design, but I
            also performed tasks in designing the user interface when developing
            the landing page.
          </p>

          <span className="BodyTitle">Technologies I used:</span>
          <ul className="Body">
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
          </ul>
        </div>

        <div id="MoodBoard" className="MoodBoardImg ParagraphContent">
          <img src={MoodBoard}></img>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Mood Board </h2>
          <p className="Body">
            I created the mood board to get a feel of what I wanted for the
            rebrand. With it, I want to remind the users of the joys of
            traveling. The feeling of boarding a plane, of having your breath
            taken away when you see the sights of somewhere new. The feeling of
            sharing an experience like this with someone else.
          </p>
        </div>

        <div id="Ideation" className="ParagraphContent">
          <h2 className="Quote">Ideation process for logo</h2>
          <div className="Sketches">
            <div className="SketchesColumn Mindmap">
              <span className="BodyTitle">Mindmap</span>
              <img src={MindMap}></img>
              <p className="Body">
                Designing a logo requires a great understanding of what Tours By
                Locals means to both the tourists and the tour guides who use
                this service. To gain this understanding, my ideation process
                began with mapping associations to the identity of Tours By
                Locals in a mindmap, shown above.
              </p>
            </div>

            <div className="SketchesColumn VisualBrainDump">
              <span className="BodyTitle">Visual brain dump</span>
              <img src={VisualBrainDump}></img>
              <p className="Body">
                After studying the elements of the mindmap, the next section of
                my ideation process involved a visual brain dump, where I
                sketched promising logos that had the potential to capture
                everything that Tours By Locals stands for.
              </p>
            </div>
          </div>

          <img class="LogoSketches" src={LogoSketches}></img>
          <span className="BodyTitle">Sketches of the logo</span>
          <p className="Body">
            There are many elements that compose the Tours By Locals image -
            brochures, tourism, globes, airplanes, location pins, maps, and many
            more. The earlier stages of my ideation process helped me identify
            these elements and were instrumental in the next step: sketching
            fourteen potential logos or logotypes. Performing these sketches
            allowed me to consider every possible idea. I was initially
            self-conscious of how ugly they looked, but I had to learn that
            sketches like these were essentially just like paper prototypes. It
            didn't need to be perfect every step of the process.
          </p>

          <br></br>
          <span className="BodyTitle">Variations of the logo</span>
          <p className="Body">
            After the sketches of the fourteen potential logotypes, I selected
            the concepts that best captured the personality of the brand and
            created vectors of these logos on Adobe Illustrator.
          </p>
          <div className="LogoVariations">
            <div className="LogoVariationsColumn">
              <img src={Logo1}></img>
            </div>
            <div className="LogoVariationsColumn">
              <img src={Logo2}></img>
            </div>
            <div className="LogoVariationsColumn">
              <img src={Logo3}></img>
            </div>
            <div className="LogoVariationsColumn">
              <img src={Logo4}></img>
            </div>
            <div className="LogoVariationsColumn">
              <img src={Logo5}></img>
            </div>
          </div>
        </div>

        <div className="ParagraphContent LogoIterations">
          <div className="LogoIterationsColumn">
            <img src={Iteration1}></img>
            <span className="BodyTitle">Iteration 1</span>
            <p className="Body">
              After receiving feedback on the vectors, I gathered that the paper
              airplane best fit the personality of the brand redesign. However,
              a few iterations needed to be made. When my peer critiques
              returned, it was suggested that I adjust the perspective on the
              plane to maintain consistency with the two people.
            </p>
          </div>

          <div className="LogoIterationsColumn">
            <img src={Iteration2}></img>
            <span className="BodyTitle">Iteration 2</span>
            <p className="Body">
              The feedback I received encouraged me to experiment with the
              perspective of the plane. Doing so resulted in a more polished,
              more professional-looking logo, as shown above. My instructors
              suggested that I round the edges on the plane to maintain
              consistency with the two people, and to add a bit more contrast
              between the grayscale shades of the plane.
            </p>
          </div>

          <div className="LogoIterationsColumn">
            <img src={Iteration3}></img>
            <span className="BodyTitle">Iteration 3</span>
            <p className="Body">This is the final logo!</p>
          </div>
        </div>

        <div id="FinalLogo" className="ParagraphContent">
          <h2 className="Quote">Final logo</h2>
          <div className="FinalLogoVariations">
            <img src={FinalLogoVariation1}></img>
            <img src={FinalLogoVariation2}></img>
            <img src={FinalLogoVariation3}></img>
            <img src={FinalLogoVariation4}></img>
          </div>
          <p className="Body">
            The final redesigned logo and logotype are shown above. The first
            variation of the logo and logotype is a white primary with dark blue
            secondary, which is meant to be used for dark backgrounds. A second
            variation, as shown, utilizes the dark blue as the primary color and
            the lighter blue as the secondary color. This is meant to be used
            for light backgrounds.
          </p>
        </div>

        <div id="Colours" className="ParagraphContent">
          <h2 className="Quote">Colours</h2>
          <img src={Colours}></img>
          <p className="Body">
            The branding redesign for Tours By Locals also features a fun, new
            colour palette that is reminiscent of the joys of travel. The blue
            is meant to signify endless skies and crashing waves, and the green
            is intended to represent calmness and tranquility. The vibrance of
            the violet is meant to be symbolic of the excitement and the wisdom
            that travel brings. This analogous color palette features a blue as
            a primary colour, a lighter blue as a secondary colour, two violet
            hues as the supporting cast, and a green that is used for accents
            and highlights.{" "}
          </p>
        </div>

        <div id="Typography" className="ParagraphContent">
          <h2 className="Quote">Typography</h2>
          <div className="TypographyContainer">
            <div className="TypographyColumn">
              <div className="TypographyHeading">
                <h2 className="CocogooseHeading">Cocogoose</h2>
              </div>
              <div className="TypographyInformation">
                <span className="BodyTitle">Created by ZetaFonts</span>
                <p className="Body">
                  Used primarily for heading fonts, Cocogoose is a sans serif
                  font with rounded edges. It comes off as something to be taken
                  seriously, something that demands attention, yet there is a
                  playful nature to this font. It represents well the
                  multifaceted experiences of travel.
                </p>
              </div>
            </div>
            <div className="TypographyColumn">
              <h2 className="YesevaOneHeading">YesevaOne</h2>
              <div className="TypographyInformation">
                <span className="BodyTitle">Created by Jovanny Lemonad</span>
                <p className="Body">
                  Used primarily for subheadings and supporting text to the
                  primary font, Yeseva One is a serif font that shows off a
                  certain grace reminiscent of the wisdom and knowledge one
                  gathers from their experiences of travel. This serif font
                  complements the natures of Cocogoose and Nunito.
                </p>
              </div>
            </div>
            <div className="TypographyColumn">
              <h2 className="NunitoHeading">Nunito</h2>
              <div className="TypographyInformation">
                <span className="BodyTitle">Created by Vernon Adams</span>
                <p className="Body">
                  Used primarily for body text, Nunito is a sans serif font with
                  somewhat rounded edges. With its full set of weights, Nunito
                  is a well balanced, simple font that complements Cocogoose and
                  Yeseva One. Similar to Cocogoose, Nunito comes off as
                  something to be taken seriously, something that demands
                  attention, yet there is a playful nature to this font. It
                  represents well the multifaceted experiences of travel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ParagraphContent" id="BrandApplications">
          <h2 className="Quote">Brand applications</h2>
          <img src={BrandApplications}></img>
        </div>

        <div className="ParagraphContent" id="BusinessCardLetterhead">
          <h2 className="Quote">Business card and letterhead</h2>
          <img src={BusinessCardLetterhead}></img>
        </div>

        <div className="ParagraphContent" id="Brochure">
          <h2 className="Quote">Brochure</h2>
          <img src={Brochure}></img>
        </div>

        <div className="ParagraphContent" id="LandingPage">
          <h2 className="Quote">Landing page</h2>
          <img src={LandingPage}></img>
        </div>

        <div className="ParagraphContent" id="SocialMediaContent">
          <h2 className="Quote">Social media content</h2>
          <img src={Post1}></img>
          <img src={Post2}></img>
          <img src={Story1}></img>
          <img src={Story2}></img>
        </div>

        <div id="Retrospective" className="ParagraphContent">
          <h2 className="Quote">Retrospective</h2>
          <span className="BodyTitle">
            What I learned from the brand book design process
          </span>
          <p className="Body">
            I learned the importance of describing in detail the reasons and
            considerations behind my design. I learned how to apply course
            theory when detailing my thought process such as the reasons behind
            the selection of a color palette and the placement of an element
            such as a logo or logotype. I also learned to apply an asymmetrical
            grid layout and visual hierarchy in the pages of my brand book in
            order to make the flow of information more cohesive.
          </p>

          <br></br>
          <span className="BodyTitle">The challenges I faced</span>
          <p className="Body">
            One of the challenges I faced was figuring out how to best present
            my work through mockups. Specifically, searching for images online
            was very difficult. It seemed as if all the images had these
            elements that I needed to get rid of, but this is where my Photoshop
            skills come in.
          </p>

          <br></br>
          <span className="BodyTitle">How I overcame these challenges</span>
          <p className="Body">
            I believe I showed a great amount of resourcefulness as I stopped
            eliminating images in my mockup image selection process as soon as I
            noticed that there was an element out of place, especially if I
            could get rid of it in Photoshop. For example, when I was trying to
            find an image of a phone for my social media content mockups, most
            of the images I found were of phones where the screen was not plain
            white, which would make my work more difficult. I learned how to use
            the Content-Aware Fill tool in Photoshop in order to eliminate
            details to make the editing process easier.{" "}
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <span className="BodyTitle">
            Interested in chatting more about my projects? Don't hesitate to
            reach out!
          </span>
        </div>
        <div className="KarmaButtons">
          <OutlineButton
            text="LinkedIn"
            link="linkedin.com/in/christinaraganit/"
          ></OutlineButton>

          <OutlineButton
            text="Email"
            link="mailto:christinaraganit@gmail.com"
          ></OutlineButton>
        </div>
      </div>
    </div>
  );
}
