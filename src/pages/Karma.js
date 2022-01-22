import "../style/Karma.css";
import KarmaCover from "../img/project-img/karma-cover.png";
import KarmaHeader from "../img/project-img/karma-header.png";
import Henry from "../img/project-img/henry.jpg";
import Ivan from "../img/project-img/Ivan.jpeg";
import Frame1 from "../img/project-img/Frame 1.png";
import Frame2 from "../img/project-img/Frame 2.png";
import Frame3 from "../img/project-img/Frame 3.png";

import SmallOutlineButton from "../components/SmallOutlineButton";
import OutlineButton from "../components/OutlineButton";
import ReactPlayer from "react-player";

export default function Karma() {
  return (
    <div className="KarmaContainer">
      <div className="KarmaColumn KarmaNavigation">
        <a href="#">Introduction</a>
        <a href="#">Problem statement</a>
        <a href="#">Solution</a>
        <a href="#">The Karma team</a>
        <a href="#">Scope and constraints</a>
        <a href="#">Business goals</a>
        <a href="#">User goals</a>
        <a href="#">Competitive analysis</a>
        <a href="#">User research</a>
        <a href="#">Prototypes and iterations</a>
        <a href="#">Style guide</a>
        <a href="#">Retrospective</a>
      </div>
      <div className="KarmaColumn KarmaContent">
        <h1 className="BigQuote"> Karma - Case study</h1>

        <div className="KarmaVideo">
          <ReactPlayer url="https://youtu.be/xaqc-vRulwQ"></ReactPlayer>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Introduction</h2>
          <p className="Body">
            When I was in high school, I had to complete forty hours of
            volunteering experience in order to graduate. I was active in the
            community, volunteering as a circulation services assistant and a
            reading tutor around my community. My friends were not as fortunate
            in finding volunteer work that interested in, and during senior
            year, they were still scrambling to find hours. I was the
            programming nerd of my friend group, and they told me that I should
            create an app that connects people with volunteering work. My mind
            was in motion, and Karma was born.
          </p>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Problem Statement</h2>
          <p className="Body">
            The problem that I want to solve with the app Karma is the fact that
            high school students are struggling to find volunteering
            opportunities that they would actually enjoy. When they do have luck
            locating these opportunities, they would be deterred by the outdated
            interfaces of some of these websites. There was also the matter of
            applying to the opportunity. My peers would find the application
            process to be long and tedious. Personally, these were huge problems
            to many of my peers when I was in high school. As a student who only
            recently graduated two years ago, I thought I could potentially
            alleviate these pains by developing Karma.
          </p>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Solution</h2>
          <p className="Body">
            Karma is a community involvement-focused, social media platform that
            provides its users with the ability to find available volunteering
            opportunities in their community. Users can enjoy a streamlined
            application process to any volunteering opportunity they can find on
            the bulletin board, as they can apply directly from the app itself.
            In addition, users can highlight their skills and past work
            experiences in their profile for organizations to see, and they can
            share their volunteering experiences to inspire others to contribute
            to their communities.
          </p>
          <p className="Body">
            The principle of karma defines that all the good that you do for
            your community and the world around you will eventually find its way
            back to you. This is why we decided to name our application Karma.
            We want to create a platform for individuals that genuinely want to
            contribute to the community that they live in, and we aim to do so
            by connecting people with meaningful and life-changing volunteer
            work that they may be interested in.
          </p>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">The Karma team</h2>
          <p className="Body">
            We are graduated of the British Columbia Institute of Technology’s
            Computer Systems Technology Program. During our Ideation course in
            our third term, we developed an idea for a product that connects
            high school students with volunteering opportunities. This idea is
            called Karma. In our fourth semester, we took a class on UI/UX
            design to further refine Karma. This document called&nbsp;
            <a href="https://miro.com/app/board/o9J_lYwodl8=/">
              our Miro board
            </a>
            , details most of the research, sketching, and brainstorming that we
            underwent as a team during the course of the semester.
          </p>
          <p className="Body">
            In this team, I immersed myself in all kinds of work. I performed
            tasks in UI/UX design, frontend development, and backend
            development.
          </p>
        </div>

        <div className="ParagraphContent" id="Scope">
          <h2 className="Quote">Scope and constraints</h2>
          <span className="BodyTitle">Functional requirements</span>
          <ul className="Body">
            <li>Users are able to interact with any and all social posts</li>
            <li>
              Users are able to add information to their profile (profile
              picture, description, skills, past experience)
            </li>
            <li>
              Users are able to view a bulletin board and search the listings by
              category
            </li>
            <li>
              Users are able to view featured opportunities that is recommended
              for them
            </li>
            <li>
              Users are able to interact with another user by direct messaging
            </li>
            <li>
              Users are not able to apply for an opportunity if they do not have
              a resume uploaded
            </li>
            <li>
              Organizations can reach out to students and view their profile or
              resume
            </li>
            <li>
              Organizations can edit or renew their postings on the bulletin
              board
            </li>
            <li>
              Organizations can post any kind of opportunity and recruit
              volunteers
            </li>
            <li>
              Users are able to apply to any volunteering position as long as
              they have met the requirements of the position
            </li>
          </ul>

          <span className="BodyTitle">Content requirements</span>
          <ul className="Body">
            <li>
              Working backend and frontend code with above features implemented
            </li>
            <li>Promotional images of volunteering opportunities</li>
            <li>
              Descriptive text explaining the features of the app when the user
              first encounters it (bulletin board, commend feature)
            </li>
            <li>
              Branding and content text explaining our app on our landing page
            </li>
          </ul>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Goals</h2>
          <span className="BodyTitle">User goals</span>
          <ul className="Body">
            <li>Find available volunteering opportunities in their area</li>
            <li>Apply for available volunteering opportunities easily</li>
            <li>
              Showcase their skills, experiences, and community contributions
            </li>
            <li>Connect with like-minded individuals who enjoy volunteering</li>
          </ul>

          <span className="BodyTitle">Business goals</span>
          <ul className="Body">
            <li>
              Build a community of action-driven citizens that enjoy volunteer
              work
            </li>
            <li>
              Normalize volunteering by encouraging the youth to give back to
              their community
            </li>
            <li>
              Create partnerships with local organizations, schools, and the
              community
            </li>
            <li>Increase the number of visitors and users of our app</li>
            <li>Establish the credibility of our app</li>
          </ul>
        </div>

        <div className="ParagraphContent CompetitiveAnalysis">
          <h2 className="Quote">Competitive analysis</h2>
          <p className="Body">
            We, as a team, further assessed our competitors by performing a
            usability heuristic analysis on the websites of our competitors. We
            analyzed both competitors and indirect competitors. These include
            LinkedIn, Indeed, GoVolunteer, and BetterCommunity. Our goal was to
            learn the weaknesses of these websites, and potentially capitalize
            upon them to make Karma better.
          </p>

          <div className="CompetitiveContent">
            <div className="CompetitiveColumn">
              <span className="BodyTitle">LinkedIn</span>
              <br></br>
              <br></br>
              <b>Pros</b>
              <ul className="Body">
                <li>
                  The navigation bar is simple and shows all important features
                </li>
                <li>
                  All pages are consistent as they follow the same style guide
                </li>
                <li>
                  UI is similar to a platform like Facebook so users are already
                  familiar with the layout
                </li>
              </ul>

              <b>Cons</b>
              <ul className="Body">
                <li>The landing page might be overwhelming for the user</li>
                <li>Expensive premium membership</li>
                <li>Community is infamous for sharing false stories</li>
              </ul>
            </div>

            <div className="CompetitiveColumn">
              <span className="BodyTitle">Indeed</span>
              <br></br>
              <br></br>
              <b>Pros</b>
              <ul className="Body">
                <li>
                  Provides appropriate feedback within a reasonable amount of
                  time
                </li>
                <li>
                  Features a uniform aesthetic, most pages follow a predefined
                  style guide
                </li>
                <li>
                  Provides the user with a sufficient amount of control,
                  provides room for the user to fix their mistakes
                </li>
              </ul>

              <b>Cons</b>
              <ul className="Body">
                <li>Is not responsive for some platforms</li>
                <li>
                  Provides a long application process that differs for each
                  opportunity
                </li>
                <li>Has poor help and documentation</li>
              </ul>
            </div>

            <div className="CompetitiveColumn">
              <span className="BodyTitle">GoVolunteer</span>
              <br></br>
              <br></br>
              <b>Pros</b>
              <ul className="Body">
                <li>
                  Can categorize and search for volunteering opportunities near
                  you
                </li>
                <li>
                  Their design is consistent as they follow a predefined style
                  guide
                </li>
              </ul>

              <b>Cons</b>
              <ul className="Body">
                <li>
                  Cannot apply for a volunteering opportunity directly from the
                  website
                </li>
                <li>
                  Too many words (information) on a page, making the pages very
                  cluttered
                </li>
                <li>Application process is long and hefty</li>
                <li>Very few resources for user help</li>
              </ul>
            </div>

            <div className="CompetitiveColumn">
              <span className="BodyTitle">BetterCommunity</span>
              <br></br>
              <br></br>
              <b>Pros</b>
              <ul className="Body">
                <li>
                  Their minimalistic design is consistent and only displays
                  relevant information to the user
                </li>
                <li>
                  Quick and easy application process that is done within the
                  website (no outside links or redirects)
                </li>
                <li>
                  Sufficient user control, giving users ability to exit out of
                  windows, undo mistakes, etc.
                </li>
              </ul>

              <b>Cons</b>
              <ul className="Body">
                <li>
                  At times, they cram too much information onto the screen; at
                  the point where it can get overwhelming
                </li>
                <li>
                  Not responsive, too much information and text for mobile
                  screens
                </li>
                <li>
                  Error prevention could improve, typos and user errors are not
                  caught or handled improperly
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">User research</h2>
          <span className="BodyTitle">Who are our users?</span>
          <p className="Body">
            We segregated our users into two main groups, volunteers and
            volunteer organizations. The first group, volunteers, pertains to
            people searching for opportunities. This group would be composed of
            high school students, post-secondary applicants and jobseekers. The
            second group, volunteer organizations, would be composed of event
            planners or anybody that would provide postings for events and
            opportunities that need volunteers. This group could include large
            organizations like Blue Cross and BC Place, or smaller organizations
            like local recreation centers and libraries.
          </p>

          <br></br>
          <span className="BodyTitle">Contextual research</span>
          <p className="Body">
            To make the most of our research, we determined four user research
            goals that would allow us to learn what we needed to know about our
            users to help us develop Karma. These user research goals are:
          </p>
          <ul className="Body">
            <li>
              Determine the most appealing type of volunteer work for our target
              audience
            </li>
            <li>
              Learn the methods that our target users are currently using to
              find volunteer work
            </li>
            <li>
              Discover how our target users feel about the application process
              of their past volunteering experiences
            </li>
            <li>
              Learn the methods that organizations are using to find volunteers
              easily
            </li>
          </ul>

          <p className="Body">
            We were able to create four questions for each of these research
            goals to help us gain a better understanding of our target audience.
            We used a combination of Google Forms surveys and interviews with
            potential users to satisfy our goals. Three of our research goals
            pertain to one of our target audiences, which is composed of people
            who want to volunteer. The last research goal is meant to allow us a
            better understanding of one of our intended user groups, which are
            the organizations in need of volunteers who are posting volunteer
            opportunities in our database for the volunteers to apply to.
          </p>

          <p className="Body">
            <a href="https://docs.google.com/document/d/12t6haCbljE67Tw36PdZG58MfVgRF04zMLbHKl_8Qwws/edit#heading=h.3m7u98b26wie">
              This document
            </a>
            &nbsp; lists all the interview questions that we asked the user.
          </p>

          <br></br>
          <span className="BodyTitle">User interviews</span>
          <p className="Body">
            The following are the links to the interviews that we performed to
            gain a better understanding of the target market. These interviews
            enabled us to create affinity diagrams which allowed us to create
            our user personas, which in turn, allowed us to create our red
            routes, which provided us insight to our major features. These
            interviews were key to the initial development of our app prior to
            our prototype.
          </p>

          <div className="KarmaButtons">
            <OutlineButton
              text="Interview 1"
              link="https://drive.google.com/file/d/1Iv8UV8YujhxlsM1uV2VYieCjYOunlc0d/view"
            ></OutlineButton>
            <OutlineButton
              text="Interview 2"
              link="https://drive.google.com/file/d/17kldLwEIFGWTJ89la_CAijs5dwxZYi53/view"
            ></OutlineButton>
            <OutlineButton
              text="Interview 3"
              link="https://drive.google.com/file/d/17kldLwEIFGWTJ89la_CAijs5dwxZYi53/view"
            ></OutlineButton>
          </div>

          <p className="Body">
            We performed another interview after creating the low fidelity
            prototype of our product. The purpose of this test was to gather
            feedback from others to improve the user interface and the user
            experience of our design, so that we may make the necessary
            iterations on our high-fidelity prototypes. From this interview, we
            created a test report that described all of our findings. This
            document details the participants of the testing, their thoughts and
            feelings about Karma, the success rate of the tasks that we asked
            them to complete, and the lessons we learned from conducting these
            user tests.
          </p>

          <br></br>
          <span className="BodyTitle">Personas and empathy maps</span>
          <p className="Body">
            After gathering survey and interview responses, we collected
            information from potential customers into an affinity diagram. From
            the affinity diagram, we were able to determine patterns in user
            preferences, giving us the ability to establish specific user
            personas to fit the responses we gathered. For our purposes, we
            created two user personas to help us empathize with our target
            audiences. These user personas are Henry and Ivan.
          </p>

          <div className="UserPersona">
            <div className="UserPersonaColumn UserPersonaImage">
              <img src={Henry}></img>
              <span className="Quote">Henry the Volunteer</span>
              <br></br>
            </div>
            <div className="UserPersonaColumn UserPersonaContent">
              <span className="BodyTitle">
                "Life's most persistent and urgent question is, 'What are you
                doing for others?'"
              </span>
              <p className="Body">
                One user persona defines our target audience of people who want
                to volunteer and help out in the community. This persona is
                Henry, a high school student in his senior year who dreams of
                attending University of Toronto to be a surgeon. Henry is very
                involved in the community by volunteering for as many
                opportunities as he can, not only because he wants to maximize
                his chances of getting into his dream university, but also
                because he loves the feeling of making a change for the better.
              </p>

              <p className="Body">
                He is an overachiever, a straight-A student with many dreams. He
                wants to get into his dream university, wants to attain a lot of
                scholarships, and wants to be able to easily find and apply to
                volunteering opportunities, as he wants to make meaningful
                contributions to his community. With this in mind, he has
                trouble standing out against other university applicants. He is
                competing against a lot of students who are also vying for the
                same scholarships as he is. He is stuck with sifting through
                resources such as outdated websites, and spending hours applying
                to opportunities.
              </p>

              <SmallOutlineButton
                text="View Henry's empathy map"
                link="https://miro.com/app/board/o9J_lYwodl8=/"
              ></SmallOutlineButton>
            </div>
          </div>

          <div className="UserPersona">
            <div className="UserPersonaColumn UserPersonaImage">
              <img src={Ivan}></img>
              <span className="Quote">Ivan the Volunteer Organizer</span>
              <br></br>
            </div>
            <div className="UserPersonaColumn UserPersonaContent">
              <span className="BodyTitle">
                “Even if you just change one life, you’ve changed the world
                forever.”
              </span>
              <p className="Body">
                The other user persona defines our target audience of people who
                work for local organizations that provide these volunteer
                opportunities. This persona is Ivan, an employee in the City of
                Burnaby who specializes in media and public relations. He is a
                graduate from the University of British Columbia, and currently
                works as the City of Burnaby’s lead organizer for events. He
                loves giving back to the community and sharing volunteering
                opportunities with youth who want to do the same.
              </p>

              <p className="Body">
                Ivan is an avid volunteer who wants to make the world a better
                place, with one act of kindness at a time. He wants to reach
                more volunteers for the events that he plans and share available
                volunteering opportunities. Also, he wants to share his
                experiences and meet like-minded individuals. During the
                weekends, he wants to find events where he can volunteer at.
                However, his reach on his social media accounts is very limited,
                as his friends and family are not always interested in his
                volunteering work. The only times he can share opportunities
                with youth is when he is speaking at local recreation centers,
                libraries, and high schools. He is fortunate that his network is
                filled with connections that help him find volunteering events,
                but he knows that other people do not have this luxury.
              </p>

              <SmallOutlineButton
                text="View Ivan's empathy map"
                link="https://miro.com/app/board/o9J_lYwodl8=/"
              ></SmallOutlineButton>
            </div>
          </div>
        </div>
        <div className="ParagraphContent">
          <h2 className="Quote">Solution</h2>

          <span className="BodyTitle">Summary</span>
          <p className="Body">
            Karma is a social media platform that provides its users with the
            ability to find available volunteering opportunities in their
            community. Users can highlight their skills and past work experience
            in their profile for organizations to see, and they can share their
            volunteering experiences to inspire others to contribute to their
            communities. Our goal is to not only make it easier for the younger
            generation, but to, one day, reshape these future citizens into
            active community members, making the population filled with people
            involved in meaningful and life changing volunteer work.
          </p>

          <br></br>
          <span className="BodyTitle">Major features</span>
          <p className="Body">
            Establishing user personas allowed us to empathize with our target
            users, the volunteers and the organizations, which proved to be
            especially useful when we created red routes. These red routes
            allowed us to define the tasks that are important to each of our
            user personas. We first listed all of our features and ranked them
            based on importance and frequency, therefore providing us the main
            features of our product. When we create the minimum viable product,
            we will only implement these features.
          </p>

          <div className="FeatureDiv">
            <span className="BodyTitle">Profile</span>
            <p className="Body">
              This is where users can showcase the collections of experiences
              they've had, their skills, and their involvement in the community.
              This consists of features such as adding a profile picture, a
              description for your bio, and editing your skills. The purpose of
              this feature is so students can use it as a professional
              portfolio/resume inorder to market themselves.
            </p>
          </div>
          <div className="FeatureDiv">
            <span className="BodyTitle">Social feed</span>
            <p className="Body">
              This is where users can share their past volunteer experiences for
              others to learn and get inspired to volunteer. Through this
              feature, you can easily create a post, and add a picture or
              caption to go along with it.
            </p>
          </div>

          <div className="FeatureDiv">
            <span className="BodyTitle">Interact with other users</span>
            <p className="Body">
              Users can connect with other users and interact with their posts.
              Users can also message them through our messaging feature and talk
              about anything volunteering-related. They can also network and
              meet new friends to volunteer with.
            </p>
          </div>

          <div className="FeatureDiv">
            <span className="BodyTitle">Bulletin board</span>
            <p className="Body">
              This is where users can find and apply to volunteer opportunities.
              Users can search for opportunities, but will also have some that
              are recommended to them. Once a user has found an opportunity that
              they like, they can add all of their personal information straight
              from our platform and apply.
            </p>
          </div>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Prototypes and iterations</h2>
          <div className="PrototypesContainer">
            <div className="PrototypesColumn">
              <img src={Frame1}></img>
              <span className="BodyTitle">Paper prototypes</span>
              <p className="Body">
                The goal of the paper prototypes was to determine the
                effectiveness of our user flows. They gave us an idea of how
                many screens we would need to design, what the screens would
                roughly look like, and how the user would navigate through the
                different screens.
              </p>
              <SmallOutlineButton
                text="View paper prototypes on Miro"
                link="https://miro.com/app/board/o9J_lYwodl8=/"
              ></SmallOutlineButton>
            </div>

            <div className="PrototypesColumn">
              <img src={Frame2}></img>
              <span className="BodyTitle">Low-fidelity prototypes</span>
              <p className="Body">
                The low fidelity wireframes gave us an idea of how users would
                interact with Karma, giving us key insights that help us
                understand what works and what doesn’t. By creating Figma
                wireframes complete with interactions, we had a testable
                prototype. After holding test sessions, we were able to write a
                test report, helping us understand our user’s needs in further
                detail.{" "}
                <a href="https://docs.google.com/document/u/1/d/1TWJtlgQLw3iafuZh3R8I4NJiAI7iOx3yqXr1TiRa1kw/edit?usp=sharing">
                  This document
                </a>{" "}
                details the pre-test and post-test questions that we asked each
                potential user, the feedback we received, and the answers to
                their questions.
              </p>
              <SmallOutlineButton
                text="View low-fidelity prototypes on Miro"
                link="https://miro.com/app/board/o9J_lYwodl8=/"
              ></SmallOutlineButton>
              <br></br>

              <br></br>
              <SmallOutlineButton
                text="View test report on Google Docs"
                link="https://docs.google.com/document/u/1/d/1TWJtlgQLw3iafuZh3R8I4NJiAI7iOx3yqXr1TiRa1kw/edit?usp=sharing"
              ></SmallOutlineButton>
            </div>

            <div className="PrototypesColumn">
              <img src={Frame3}></img>
              <span className="BodyTitle">High-fidelity prototypes</span>
              <p className="Body">
                The high fidelity wireframes is the final prototype before we
                create our MVP. We added colours (from our style guide) and
                images. This is our final iteration of our prototype. We used
                our test report, made from testing our low fidelity wireframes,
                in order to make changes necessary to satisfy our user’s needs.
                The addition of colours, images and other assets allowed us to
                visualize our idea into a feasible app.
              </p>
              <SmallOutlineButton
                text="View high-fidelity prototypes on Figma"
                link="https://www.figma.com/file/L49TrUjVQmkVPXOeYYW32I/Karma---Updated-wireframe?node-id=72%3A2"
              ></SmallOutlineButton>
            </div>
          </div>
          <span className="BodyTitle">Next steps</span>
          <p className="Body">
            We intend to create a minimum viable product of Karma by developing
            a mobile-responsive web application that provides the user with all
            the major features that we previously listed. This website will have
            a database of available volunteering opportunities.
          </p>
          <p className="Body">
            We have designed a five-week implementation timeline that involves
            development-related tasks as well as duties such as conducting user
            research, promoting Karma on social media, and sending emails to
            people who might want to partner with our product like school
            district officials, career counsellors, and volunteer organizations.
          </p>
          <p className="Body">
            <a href="https://docs.google.com/document/d/1N7dgsWZVHXpKhPN8iK-OcNZ9zKu3nBNXkke5W6pKBfY/edit">
              This document
            </a>{" "}
            details how internal disputes and conflicts will be handled, the
            exact details of creating our minimum viable product, how the
            prototype will be altered and iterated upon based on feedback, and
            our implementation timeline.
          </p>
        </div>
        <div style={{ marginBottom: "20px" }} className="ParagraphContent">
          <h2 className="Quote">Style guide</h2>
          <OutlineButton
            text="View our style guide on Figma"
            link="https://www.figma.com/file/L49TrUjVQmkVPXOeYYW32I/Karma---Updated-wireframe?node-id=350%3A24"
          ></OutlineButton>
        </div>

        <div className="ParagraphContent">
          <h2 className="Quote">Retrospective</h2>
          <span className="BodyTitle">What we learned</span>
          <ul className="Body">
            <li>
              We received great feedback from user testing, surveys, and
              interviews
            </li>
            <li>
              Using a Miro board for our work allowed us to stay organized
            </li>
            <li>
              Applying the knowledge we learned in class helped our prototype
              shine
            </li>
            <li>
              We learned how to settle disputes on conflicting ideas and
              encouraged others to participate more in discussions
            </li>
          </ul>

          <p className="Body">
            There was a lot to learn during the development of Karma. This was
            my first introduction to UI and UX design, and I will forever hold
            this project near and dear to my heart for this reason. I was very
            interested to learn about subjects like colour theory, design
            elements, typography, iconography, prototyping, wireframing, user
            research, and so much more! I also learned how to work in a team and
            how to verbally express my opinions on a design.
          </p>

          <p className="Body">
            However, I would have really liked to learn more about copywriting
            and content writing. That’s something that I would have liked to
            explore in this course in more detail, so that’s something I would
            dabble in during the summer.
          </p>

          <p className="Body">
            As for my next steps, at the time of writing this case study, I was
            very recently accepted into Simon Fraser University’s Interactive
            Arts and Technology program, where I hope to gain myself more
            insights and hone my skills in visual design and UI design. I am
            excited to apply the knowledge I learned throughout this course to
            my studies at SFU, so that I can be the programmer-designer
            powerhouse I was always meant to become.
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
