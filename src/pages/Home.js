import Skills from "../components/Skills";
import Navigation from "../components/Navigation";
import TitleHeader from "../components/Header";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";

function Home() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <TitleHeader></TitleHeader>

      <AboutMe></AboutMe>

      <Skills></Skills>

      <Experience></Experience>

      <FeaturedProjects></FeaturedProjects>

      <div className="AppCredits">
        <span>Website by Christina Raganit.</span>
      </div>
    </div>
  );
}

export default Home;
