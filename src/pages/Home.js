import Skills from "../components/Skills";
import Navigation from "../components/Navigation";
import TitleHeader from "../components/Header";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="App">
      <TitleHeader></TitleHeader>

      <AboutMe></AboutMe>

      <Skills></Skills>

      <Experience></Experience>

      <FeaturedProjects></FeaturedProjects>

      <Contact></Contact>

      <div className="AppCredits">
        <span>Website by Christina Raganit.</span>
      </div>
    </div>
  );
}

export default Home;
